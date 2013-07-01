!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n.album=a(function(a,n,l,s,e){function t(a,n){var s,e,t="";return t+='\n			<button class="btn store"><i class="icon-plus"></i> ',e={hash:{},data:n},t+=f((s=l.L||a.L,s?s.call(a,"storeAlbum",e):u.call(a,"L","storeAlbum",e)))+"</button>\n		"}function i(a,n){var e,t="";return t+="\n				",e=y.invokePartial(s.song,"song",a,l,s,n),(e||0===e)&&(t+=e),t+="\n			"}function r(a,n){var s,e,t="";return t+='\n				<tr><td class="empty">',e={hash:{},data:n},t+=f((s=l.L||a.L,s?s.call(a,"emptyAlbum",e):u.call(a,"L","emptyAlbum",e)))+"</td>\n			"}function o(a,n){var s,e,t="";return t+='\n			<div class="empty" style="display:none">\n				<h4>',e={hash:{},data:n},t+=f((s=l.L||a.L,s?s.call(a,"moreFrom",e):u.call(a,"L","moreFrom",e)))+": "+f((s=a.artist,s=null==s||s===!1?s:s.name,typeof s===b?s.apply(a):s))+"</h4>\n				<div></div>\n			</div>\n		"}function c(a,n){var s,e,t="";return t+="\n				",e={hash:{},data:n},t+=f((s=l.a||a.a,s?s.call(a,a.name,a.link,e):u.call(a,"a",a.name,a.link,e)))+"\n			"}function d(a,n){var s,e,t="";return t+='\n			<menu>\n				<li><button class="btn btn-mini remove"><i class="icon-remove"></i> ',e={hash:{},data:n},t+=f((s=l.L||a.L,s?s.call(a,"removeAlbum",e):u.call(a,"L","removeAlbum",e)))+"</button></li>\n			</menu>\n		"}this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,a.helpers),s=this.merge(s,a.partials),e=e||{};var h,p,v,m="",u=l.helperMissing,f=this.escapeExpression,y=this,b="function";return m+='<div class="header">\n	<h1 key="',(h=l.dataKey)?h=h.call(n,{hash:{},data:e}):(h=n.dataKey,h=typeof h===b?h.apply(n):h),m+=f(h)+'">\n		',v={hash:{},data:e},m+=f((h=l.a||n.a,h?h.call(n,(h=n.artist,null==h||h===!1?h:h.name),(h=n.artist,null==h||h===!1?h:h.link),v):u.call(n,"a",(h=n.artist,null==h||h===!1?h:h.name),(h=n.artist,null==h||h===!1?h:h.link),v)))+" - ",(p=l.title)?p=p.call(n,{hash:{},data:e}):(p=n.title,p=typeof p===b?p.apply(n):p),m+=f(p)+" \n		",p=l.unless.call(n,n.stored,{hash:{},inverse:y.noop,fn:y.program(1,t,e),data:e}),(p||0===p)&&(m+=p),m+='\n	</h1>\n	<hr>\n</div>\n<div class="half">\n	<div class="padding">\n		<table>\n			',p=l.each.call(n,n.songs,{hash:{},inverse:y.noop,fn:y.program(3,i,e),data:e}),(p||0===p)&&(m+=p),m+="\n			",v={hash:{},inverse:y.noop,fn:y.program(5,r,e),data:e},h=l.empty||n.empty,p=h?h.call(n,n.songs,v):u.call(n,"empty",n.songs,v),(p||0===p)&&(m+=p),m+="\n		</table>\n		",v={hash:{},inverse:y.noop,fn:y.program(7,o,e),data:e},h=l.empty||n.empty,p=h?h.call(n,n.songs,v):u.call(n,"empty",n.songs,v),(p||0===p)&&(m+=p),m+='\n	</div>\n</div>\n<div class="half">\n	<div class="padding">\n		<div class="cover"></div>\n		<div class="tags">\n			',p=l.each.call(n,n.tags,{hash:{},inverse:y.noop,fn:y.program(9,c,e),data:e}),(p||0===p)&&(m+=p),m+='\n		</div>\n		<div class="similarAlbums"></div>\n		',p=l["if"].call(n,n.stored,{hash:{},inverse:y.noop,fn:y.program(11,d,e),data:e}),(p||0===p)&&(m+=p),m+="\n	</div>\n</div>\n"}),n.artist=a(function(a,n,l,s,e){function t(a,n){var s,e,t="";return t+="\n			",e={hash:{},data:n},t+=v((s=l.a||a.a,s?s.call(a,a.name,a.link,e):p.call(a,"a",a.name,a.link,e)))+"\n		"}function i(a,n){var s,e,t,i="";return i+='\n			<li>\n				<i class="icon-user"></i> ',(s=l.name)?s=s.call(a,{hash:{},data:n}):(s=a.name,s=typeof s===u?s.apply(a):s),i+=v(s)+" \n				",t={hash:{},inverse:m.noop,fn:m.program(4,r,n),data:n},s=l.or||a.or,e=s?s.call(a,a.yearfrom,a.yearto,t):p.call(a,"or",a.yearfrom,a.yearto,t),(e||0===e)&&(i+=e),i+="\n			</li>\n		"}function r(a,n){var s,e="";return e+="\n				<span>(",(s=l.yearfrom)?s=s.call(a,{hash:{},data:n}):(s=a.yearfrom,s=typeof s===u?s.apply(a):s),e+=v(s),s=l["if"].call(a,a.yearfrom,{hash:{},inverse:m.noop,fn:m.program(5,o,n),data:n}),(s||0===s)&&(e+=s),(s=l.yearto)?s=s.call(a,{hash:{},data:n}):(s=a.yearto,s=typeof s===u?s.apply(a):s),e+=v(s)+")</span>\n				"}function o(a,n){var s;return s=l["if"].call(a,a.yearto,{hash:{},inverse:m.noop,fn:m.program(6,c,n),data:n}),s||0===s?s:""}function c(){return" - "}this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,a.helpers),e=e||{};var d,h="",p=l.helperMissing,v=this.escapeExpression,m=this,u="function";return h+='<div class="header">\n	<h1>',(d=l.name)?d=d.call(n,{hash:{},data:e}):(d=n.name,d=typeof d===u?d.apply(n):d),h+=v(d)+'</h1>\n	<hr>\n</div>\n<div class="right">\n	<div class="image">\n		<img src="',(d=l.image)?d=d.call(n,{hash:{},data:e}):(d=n.image,d=typeof d===u?d.apply(n):d),h+=v(d)+'" />\n	</div>\n	<div class="tags">\n		',d=l.each.call(n,n.tags,{hash:{},inverse:m.noop,fn:m.program(1,t,e),data:e}),(d||0===d)&&(h+=d),h+='\n	</div>\n	<p class="bio">',(d=l.bio)?d=d.call(n,{hash:{},data:e}):(d=n.bio,d=typeof d===u?d.apply(n):d),h+=v(d)+'</p>\n	<ul class="members">\n		',d=l.each.call(n,n.members,{hash:{},inverse:m.noop,fn:m.program(3,i,e),data:e}),(d||0===d)&&(h+=d),h+='\n	</ul>\n</div>\n<div class="padding">\n	\n</div>\n'}),n.explore=a(function(a,n,l,s,e){return this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,a.helpers),e=e||{},'<div class="right">\n	<div class="tags"></div>\n</div>\n<div class="padding">\n\n</div>\n'}),n.loved=a(function(a,n,l,s,e){function t(a,n){var e,t="";return t+="\n				",e=h.invokePartial(s.song,"song",a,l,s,n),(e||0===e)&&(t+=e),t+="\n			"}function i(a,n){var s,e,t="";return t+='\n				<tr><td class="empty">',e={hash:{},data:n},t+=v((s=l.L||a.L,s?s.call(a,"emptyLoved",e):p.call(a,"L","emptyLoved",e)))+"</td>\n			"}this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,a.helpers),s=this.merge(s,a.partials),e=e||{};var r,o,c,d="",h=this,p=l.helperMissing,v=this.escapeExpression;return d+='<div class="header">\n	<h1 key="loved">',c={hash:{},data:e},d+=v((r=l.L||n.L,r?r.call(n,"loved",c):p.call(n,"L","loved",c)))+'</h1>\n	<hr>\n</div>\n<div class="half">\n	<div class="padding">\n		<table>\n			',o=l.each.call(n,n.songs,{hash:{},inverse:h.noop,fn:h.program(1,t,e),data:e}),(o||0===o)&&(d+=o),d+="\n			",c={hash:{},inverse:h.noop,fn:h.program(3,i,e),data:e},r=l.empty||n.empty,o=r?r.call(n,n.songs,c):p.call(n,"empty",n.songs,c),(o||0===o)&&(d+=o),d+="\n		</table>\n	</div>\n</div>\n"}),n.playlist=a(function(a,n,l,s,e){function t(a,n){var s,e,t="";return t+='\n	<menu class="actions">\n		<li><a class="remove"><i class="icon-remove"></i></a></li>\n		<li style="display:none">\n			<span class="red">',e={hash:{},data:n},t+=d((s=l.L||a.L,s?s.call(a,"removePlaylist",e):c.call(a,"L","removePlaylist",e)))+"</span>: ",e={hash:{},data:n},t+=d((s=l.L||a.L,s?s.call(a,"areYouSure",e):c.call(a,"L","areYouSure",e)))+' \n			<a class="ok"><i class="icon-ok"></i></a> &nbsp; <a class="cancel"><i class="icon-remove"></i></a>\n		</li>\n	</menu>\n	'}this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,a.helpers),e=e||{};var i,r,o="",c=l.helperMissing,d=this.escapeExpression,h=this;return o+='<div class="header">\n	',i=l["if"].call(n,n.dataKey,{hash:{},inverse:h.noop,fn:h.program(1,t,e),data:e}),(i||0===i)&&(o+=i),o+="\n	",r={hash:{},data:e},o+=d((i=l.inline||n.inline,i?i.call(n,n.title,n.dataKey,"title","h1",r):c.call(n,"inline",n.title,n.dataKey,"title","h1",r)))+'\n	<hr>\n</div>\n<div class="half">\n	<div class="padding">\n		<table></table>\n	</div>\n</div>\n<div class="half">\n	<div class="padding border">\n		<form>\n			<label>',r={hash:{},data:e},o+=d((i=l.L||n.L,i?i.call(n,"addSongs",r):c.call(n,"L","addSongs",r)))+'</label>\n			<div class="controls">\n				<input type="text" placeholder="',r={hash:{},data:e},o+=d((i=l.L||n.L,i?i.call(n,"searchSongPrompt",r):c.call(n,"L","searchSongPrompt",r)))+'..." name="query" /> \n				<button class="btn" type="submit">',r={hash:{},data:e},o+=d((i=l.L||n.L,i?i.call(n,"search",r):c.call(n,"L","search",r)))+'</button>\n				<input type="hidden" name="provider" />\n			</div>\n		</form>\n		<menu class="tabs" style="display:none">\n			<li class="selected">\n				<a>Youtube</a>\n			</li>\n			<li>\n				<a>Soundcloud</a>\n			</li>\n		</menu>\n		<table></table>\n	</div>\n</div>\n'}),n.skin=a(function(a,n,l,s,e){this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,a.helpers),s=this.merge(s,a.partials),e=e||{};var t,i,r,o="",c=l.helperMissing,d=this.escapeExpression,h=this;return o+='<aside>\n	<a href="/" class="brand">\n		<img src="/img/brand.png" />\n	</a>\n	<form>\n		<input type="text" placeholder="',r={hash:{},data:e},o+=d((t=l.L||n.L,t?t.call(n,"searchPrompt",r):c.call(n,"L","searchPrompt",r)))+'..." name="query" autocomplete="off" /> \n		<button class="btn" type="submit">',r={hash:{},data:e},o+=d((t=l.L||n.L,t?t.call(n,"search",r):c.call(n,"L","search",r)))+'</button>\n		<ul></ul>\n	</form>\n	<menu>\n		<li class="create">',r={hash:{},data:e},o+=d((t=l.a||n.a,t?t.call(n,"createPlaylist","/playlist",n.null,"plus icon-white",r):c.call(n,"a","createPlaylist","/playlist",n.null,"plus icon-white",r)))+'</li>\n		<li class="loved">',r={hash:{},data:e},o+=d((t=l.a||n.a,t?t.call(n,"loved","/loved",n.null,"heart icon-white",r):c.call(n,"a","loved","/loved",n.null,"heart icon-white",r)))+"</li>\n	</menu>\n	",i=h.invokePartial(s.playlistsMenu,"playlistsMenu",n,l,s,e),(i||0===i)&&(o+=i),o+='\n</aside>\n<section></section>\n<footer>\n	<div class="slider">\n		<div></div>\n		<div></div>\n		<span></span>\n		<div class="t"></div>\n	</div>\n	<menu>\n		<li class="play"><button class="btn btn-inverse"><i class="icon-play"></i></button></li>\n		<li class="prev"><button class="btn btn-inverse"><i class="icon-step-backward"></i></li>\n		<li class="next"><button class="btn btn-inverse"><i class="icon-step-forward"></i></li>\n		<li class="love"><button class="btn btn-inverse"><i class="icon-heart"></i></button></li>\n		<li class="fullscreen"><button class="btn btn btn-inverse"><i class="icon-fullscreen"></i></button></li>\n		<li class="title"><a href="#"></a></li>\n		<li class="time"></li>\n	</menu>\n</footer>\n'})}();