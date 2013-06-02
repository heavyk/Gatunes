PLAYER = {
	init : function() {
		/* SoundManager SETUP */
		soundManager.setup({
			url : '/swf/',
			flashVersion : 9,
			debugMode : 0,
			preferFlash : false,
			onready : function(){
				SoundManager.ready = 1;
				SoundManager.callbacks && SoundManager.callbacks.forEach(function(cb){cb()});
				delete SoundManager.callbacks;
			}
		});

		/* Slider */
		var controls = $('footer'),
			slider = $('div.slider', controls);

		LIB.preventSelection(slider, function(e) {
            if(!PLAYER.current) return;
            var mm = function(e) {
                    PLAYER.setSlider({
                        progress : e.clientX / slider.width(),
                        fromSlider : true
                    });
                },
                mu = function() {
                    $(window).unbind('mousemove', mm);
                    $(window).unbind('mouseup', mu);
                    controls.removeClass('sliding');
                    PLAYER.sliding = false;
                    PLAYER.current.seekTo(PLAYER.sliderValue);
                };
            
            PLAYER.sliding = true;
            mm(e);
            $(window).bind('mousemove', mm);
            $(window).bind('mouseup', mu);
            controls.addClass('sliding');
        });

		/* Buttons */
		['play', 'prev', 'next', 'love'].forEach(function(bt) {
			$('menu li.' + bt + ' button', controls).click(function() {
				PLAYER[bt]();
			});
		});

		/* Remove the webview in the regular web app */
		if(!window.chrome.storage) {
			$("#YTPlayer").remove();
			$('body').append('<div id="YTPlayer" />');
		}
	},
	load : function(song) {
		PLAYER.onStateChange(-1);
		PLAYER.current && PLAYER.current.destruct && PLAYER.current.destruct();
		switch(song.provider) {
			case DATA.providers.youtube:
				YT.player(song);
			break;
			default:
				SC.player(song);
		}
		PLAYER.setPlay();
		PLAYER.setTitle(song);
		PLAYER.setTimes(0, song.time);
		PLAYER.setSlider({
			progress : 0,
			loading : 0
		});
	},
	startInterval : function() {
		PLAYER.stopInterval();
		PLAYER.interval = setInterval(function() {
			if(!PLAYER.current) return;
			PLAYER.current.getCurrentTime(function(currentTime) {
				PLAYER.current.getDuration(function(duration) {
					PLAYER.current.getLoadedFraction(function(loadedFraction) {
						//LIB.setTitle('(' + LIB.formatTime(Math.round(currentTime)) + ') ' + PLAYER.current.song.title);
						PLAYER.setTimes(Math.round(currentTime), Math.round(duration));
						PLAYER.setSlider({
							progress : currentTime / duration,
							loading : loadedFraction
						});
					});
				});
			});
		}, 50);
	},
	stopInterval : function() {
		PLAYER.interval && clearInterval(PLAYER.interval);
	},
	states : {ended: 0, playing: 1, paused: 2, buffering: 3},
	onStateChange : function(state) {
		PLAYER.state = state;
		switch(state) {
			case PLAYER.states.paused:
			case PLAYER.states.ended:
				PLAYER.setPlay(1);
				PLAYER.stopInterval();
		}
		switch(state) {
			case PLAYER.states.playing:
			case PLAYER.states.buffering:
				PLAYER.startInterval();
				PLAYER.setPlay();
			break;
			case PLAYER.states.ended:
				PLAYER.setTitle();
				PLAYER.setTimes();
				PLAYER.setSlider({
					progress : 0,
					loading : 0
				});
				$('footer').removeClass('playing');
				//LIB.setFavicon();
				if(PLAYER.current) {
					//HISTORY.add(PLAYER.current.song);
					PLAYER.current.destruct && PLAYER.current.destruct();
					delete PLAYER.current;
				}	
				PLAYER.next();
		}
	},
	onError : function(code) {
		//for now we just skip the song...
		PLAYER.next();
	},
	play : function() {
		if(!PLAYER.current) return;

		if(PLAYER.state === PLAYER.states.playing) {
			PLAYER.current.pause();
		} else {
			PLAYER.current.play();
		}
	},
	prev : function() {
		//if(PLAYER.current && PLAYER.current.getCurrentTime() > 3) return PLAYER.current.seekTo(0);
		var q = PLAYER.queue;
		if(!q) return;

		PLAYER.queueId--;
		PLAYER.queueId < 0 && (PLAYER.queueId = q.length - 1);
		
		PLAYER.load(q[PLAYER.queueId]);
	},
	next : function() {
		var q = PLAYER.queue;
		if(!q || q.length === 1) return;

		PLAYER.queueId++;
		PLAYER.queueId >= q.length && (PLAYER.queueId = 0);
		
		PLAYER.load(q[PLAYER.queueId]);
	},
	addToQueue : function(songs, startFrom, reset) {
		(reset || !PLAYER.queue) && (PLAYER.queue = []);
		songs.forEach(function(s) {
			var song = {
					id : s.id,
	    			provider : s.provider,
	    			provider_id : s.provider_id,
	    			time : s.time,
	    			title : s.title
	    		};

			//s.provider === DATA.providers.remotestorage && s.provider_storage && (song.provider_storage = s.provider_storage);
			s.from && (song.from = s.from);
			if(QUEUE.allowDups) return PLAYER.queue.push(song);
			var already;
			PLAYER.queue.forEach(function(qs) {
				s.provider === qs.provider && s.provider_id === qs.provider_id && s.provider_storage === qs.provider_storage && (already = true);
			});
			!already && PLAYER.queue.push(song);
		});
		if(PLAYER.queue.length && (reset || !PLAYER.current)) {
			var startFromId;
			startFrom && PLAYER.queue.forEach(function(s, i) {
				s.provider === startFrom.provider && s.provider_id === startFrom.provider_id && s.provider_storage === startFrom.provider_storage && (startFromId = i);
			});
			PLAYER.queueId = startFromId || 0;
			PLAYER.load(PLAYER.queue[PLAYER.queueId]);
		}
		QUEUE.updateBadge();
	},
	setPlay : function(paused) {
		var controls = $('footer');
		$('li.play i', controls).attr('class', 'icon-' + (paused ? 'play' : 'pause'));
		!controls.hasClass('playing') && controls.addClass('playing');
		//LIB.setFavicon(paused ? 'pause' : 'play');
	},
	setTitle : function(song) {
		$('li.title a', 'footer')
			.text(song ? song.title : '')
			.attr('href', /*song && song.from ? LIB.playlistLink(song.from) : */'/queue');
		
		//LIB.setTitle(song ? '(0:00) ' + song.title : null);
	},
	setTimes : function(current, duration) {
		typeof current !== 'undefined' && (current = LIB.formatTime(current));
		typeof duration !== 'undefined' && (duration = LIB.formatTime(duration));
		$('li.time', 'footer').text((current || '') + (current && duration ? ' / ' : '') + (duration || ''));
	},
	setSlider : function(data) {
		var s = $('footer div.slider'),
			p = data.loading;
		
		if(p || p === 0) {
			if(p > 1) p = 1;
			if(p < 0) p = 0;
			s.children().first().css('width', s.width() * p);
		}
		
		p = data.progress;		
		if(((p || p === 0) && !PLAYER.sliding) || data.fromSlider) {
			if(p > 1) p = 1;
			if(p < 0) p = 0;
			var div = s.children().first().next();
			div.css('width', s.width() * p);
			div = div.next();
			div.css('left', s.width() * p);
			PLAYER.sliderValue = p;
		}
	},
	love : function() {
		//TODO
	},
	fullscreen : function() {
		//TODO
		return;
		var b = $('body')[0];
		if(FULLSCREEN.active()) FULLSCREEN.cancel(b);
		else FULLSCREEN.request(b);
	},
	onFullscreen : function() {
		//TODO
		return;
		var a = FULLSCREEN.active();
		$('body')[(a ? 'add' : 'remove') + 'Class']('fullscreen');
        $(window)[a ? 'bind' : 'unbind']('mousemove', PLAYER.fullscreenMouseMove);
        if(a) PLAYER.fullscreenMouseMove({clientY : 0});
        else {
        	clearTimeout(PLAYER.controlsTimeout);
        	$('#controls').stop().css('bottom', 0);
		}
	},
	fullscreenMouseMove : function(e) {
		//TODO
		return;
		$('#controls').css('bottom') === '-41px' && $('#controls').stop().animate({
            bottom: 0
        });
        clearTimeout(PLAYER.controlsTimeout);
        e.clientY <= $(window).height() - 41 && (PLAYER.controlsTimeout = setTimeout(function() {
        	$('#controls').stop().animate({
	            bottom: -41
	        });
        }, 3000));
	}
};
