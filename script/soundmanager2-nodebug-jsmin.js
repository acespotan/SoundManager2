/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20120527+DEV
 */
(function(da){function Q(Q,ca){function m(a){return function(c){var d=this._t;return!d||!d._a?null:a.call(this,c)}}this.setupOptions={url:Q||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1};this.defaultOptions=
{autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};
this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=ca||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=
/([#?&])debug=1/i;this.versionNumber="V2.97a.20120527+DEV";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};var ea;try{ea="undefined"!==typeof Audio&&"undefined"!==typeof(new Audio).canPlayType}catch(Ya){ea=!1}this.hasHTML5=
ea;this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var Ba,c=this,i=null,R,q=navigator.userAgent,h=da,fa=h.location.href.toString(),l=document,ga,Ca,ha,j,w=[],J=!1,K=!1,k=!1,s=!1,ia=!1,L,r,ja,S,ka,B,C,D,Da,la,T,U,E,ma,na,oa,V,F,Ea,pa,Fa,W,Ga,M=null,qa=null,u,ra,G,X,Y,H,p,N=!1,sa=!1,Ha,Ia,Ja,Z=0,O=null,$,n=null,Ka,aa,P,x,ta,ua,La,o,Va=Array.prototype.slice,z=!1,t,va,Ma,v,Na,wa=q.match(/(ipad|iphone|ipod)/i),y=q.match(/msie/i),Wa=q.match(/webkit/i),xa=q.match(/safari/i)&&
!q.match(/chrome/i),Oa=q.match(/opera/i),ya=q.match(/(mobile|pre\/|xoom)/i)||wa,Pa=!fa.match(/usehtml5audio/i)&&!fa.match(/sm2\-ignorebadua/i)&&xa&&!q.match(/silk/i)&&q.match(/OS X 10_6_([3-7])/i),za="undefined"!==typeof l.hasFocus?l.hasFocus():null,ba=xa&&("undefined"===typeof l.hasFocus||!l.hasFocus()),Qa=!ba,Ra=/(mp3|mp4|mpa)/i,Aa=l.location?l.location.protocol.match(/http/i):null,Sa=!Aa?"http://":"",Ta=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|mp4v|3gp|3g2)\s*(?:$|;)/i,Ua="mpeg4,aac,flv,mov,mp4,m4v,f4v,m4a,mp4v,3gp,3g2".split(","),
Xa=RegExp("\\.("+Ua.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Aa;this._global_a=null;if(ya&&(c.useHTML5Audio=!0,c.preferFlash=!1,wa))z=c.ignoreFlash=!0;this.setup=function(a){"undefined"!==typeof a&&k&&n&&c.ok()&&("undefined"!==typeof a.flashVersion||"undefined"!==typeof a.url)&&H(u("setupLate"));ja(a);return c};this.supported=this.ok=function(){return n?k&&!s:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(a){return R(a)||l[a]||
h[a]};this.createSound=function(a,e){function d(){b=X(b);c.sounds[f.id]=new Ba(f);c.soundIDs.push(f.id);return c.sounds[f.id]}var b=null,g=null,f=null;if(!k||!c.ok())return H(void 0),!1;"undefined"!==typeof e&&(a={id:a,url:e});b=r(a);b.url=$(b.url);f=b;if(p(f.id,!0))return c.sounds[f.id];if(aa(f))g=d(),g._setup_html5(f);else{if(8<j&&null===f.isMovieStar)f.isMovieStar=!(!f.serverURL&&!(f.type&&f.type.match(Ta)||f.url.match(Xa)));f=Y(f,void 0);g=d();if(8===j)i._createSound(f.id,f.loops||1,f.usePolicyFile);
else if(i._createSound(f.id,f.url,f.usePeakData,f.useWaveformData,f.useEQData,f.isMovieStar,f.isMovieStar?f.bufferTime:!1,f.loops||1,f.serverURL,f.duration||null,f.autoPlay,!0,f.autoLoad,f.usePolicyFile),!f.serverURL)g.connected=!0,f.onconnect&&f.onconnect.apply(g);!f.serverURL&&(f.autoLoad||f.autoPlay)&&g.load(f)}!f.serverURL&&f.autoPlay&&g.play();return g};this.destroySound=function(a,e){if(!p(a))return!1;var d=c.sounds[a],b;d._iO={};d.stop();d.unload();for(b=0;b<c.soundIDs.length;b++)if(c.soundIDs[b]===
a){c.soundIDs.splice(b,1);break}e||d.destruct(!0);delete c.sounds[a];return!0};this.load=function(a,e){return!p(a)?!1:c.sounds[a].load(e)};this.unload=function(a){return!p(a)?!1:c.sounds[a].unload()};this.onposition=this.onPosition=function(a,e,d,b){return!p(a)?!1:c.sounds[a].onposition(e,d,b)};this.clearOnPosition=function(a,e,d){return!p(a)?!1:c.sounds[a].clearOnPosition(e,d)};this.start=this.play=function(a,e){var d=!1;if(!k||!c.ok())return H("soundManager.play(): "+u(!k?"notReady":"notOK")),d;
if(!p(a)){e instanceof Object||(e={url:e});if(e&&e.url)e.id=a,d=c.createSound(e).play();return d}return c.sounds[a].play(e)};this.setPosition=function(a,e){return!p(a)?!1:c.sounds[a].setPosition(e)};this.stop=function(a){return!p(a)?!1:c.sounds[a].stop()};this.stopAll=function(){for(var a in c.sounds)c.sounds.hasOwnProperty(a)&&c.sounds[a].stop()};this.pause=function(a){return!p(a)?!1:c.sounds[a].pause()};this.pauseAll=function(){var a;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].pause()};
this.resume=function(a){return!p(a)?!1:c.sounds[a].resume()};this.resumeAll=function(){var a;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].resume()};this.togglePause=function(a){return!p(a)?!1:c.sounds[a].togglePause()};this.setPan=function(a,e){return!p(a)?!1:c.sounds[a].setPan(e)};this.setVolume=function(a,e){return!p(a)?!1:c.sounds[a].setVolume(e)};this.mute=function(a){var e=0;"string"!==typeof a&&(a=null);if(a)return!p(a)?!1:c.sounds[a].mute();for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();
return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(a){"string"!==typeof a&&(a=null);if(a)return!p(a)?!1:c.sounds[a].unmute();for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(a){return!p(a)?!1:c.sounds[a].toggleMute()};this.getMemoryUse=function(){var a=0;i&&8!==j&&(a=parseInt(i._getMemoryUse(),10));return a};this.disable=function(a){var e;"undefined"===typeof a&&(a=!1);if(s)return!1;
s=!0;for(e=c.soundIDs.length-1;0<=e;e--)Fa(c.sounds[c.soundIDs[e]]);L(a);o.remove(h,"load",C);return!0};this.canPlayMIME=function(a){var e;c.hasHTML5&&(e=P({type:a}));!e&&n&&(e=a&&c.ok()?!!(8<j&&a.match(Ta)||a.match(c.mimePattern)):null);return e};this.canPlayURL=function(a){var e;c.hasHTML5&&(e=P({url:a}));!e&&n&&(e=a&&c.ok()?!!a.match(c.filePattern):null);return e};this.canPlayLink=function(a){return"undefined"!==typeof a.type&&a.type&&c.canPlayMIME(a.type)?!0:c.canPlayURL(a.href)};this.getSoundById=
function(a){if(!a)throw Error("soundManager.getSoundById(): sID is null/undefined");return c.sounds[a]};this.onready=function(a,c){var d=!1;if("function"===typeof a)c||(c=h),ka("onready",a,c),B();else throw u("needFunction","onready");return!0};this.ontimeout=function(a,c){var d=!1;if("function"===typeof a)c||(c=h),ka("ontimeout",a,c),B({type:"ontimeout"});else throw u("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(){var a,
e;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].destruct();if(i)try{if(y)qa=i.innerHTML;M=i.parentNode.removeChild(i)}catch(d){}qa=M=n=null;c.enabled=na=k=N=sa=J=K=s=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};i=null;for(a in w)if(w.hasOwnProperty(a))for(e=w[a].length-1;0<=e;e--)w[a][e].fired=!1;h.setTimeout(c.beginDelayedInit,20)};this.getMoviePercent=function(){return i&&"undefined"!==typeof i.PercentLoaded?i.PercentLoaded():null};this.beginDelayedInit=function(){ia=!0;E();setTimeout(function(){if(sa)return!1;
V();U();return sa=!0},20);D()};this.destruct=function(){c.disable(!0)};Ba=function(a){var e,d,b=this,g,f,A,I,h,l,m=!1,k=[],o=0,q,s,n=null;e=null;d=null;this.sID=this.id=a.id;this.url=a.url;this._iO=this.instanceOptions=this.options=r(a);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(a){var c=null;if("undefined"!==typeof a)b._iO=r(a,b.options),b.instanceOptions=b._iO;else if(a=b.options,b._iO=a,b.instanceOptions=
b._iO,n&&n!==b.url)b._iO.url=b.url,b.url=null;if(!b._iO.url)b._iO.url=b.url;b._iO.url=$(b._iO.url);if(b._iO.url===b.url&&0!==b.readyState&&2!==b.readyState)return 3===b.readyState&&b._iO.onload&&b._iO.onload.apply(b,[!!b.duration]),b;a=b._iO;n=b.url;b.loaded=!1;b.readyState=1;b.playState=0;b.id3={};if(aa(a)){if(c=b._setup_html5(a),!c._called_load){b._html5_canplay=!1;if(b._a.src!==a.url)b._a.src=a.url,b.setPosition(0);b._a.autobuffer="auto";b._a.preload="auto";c._called_load=!0;a.autoPlay&&b.play()}}else try{b.isHTML5=
!1,b._iO=Y(X(a)),a=b._iO,8===j?i._load(b.id,a.url,a.stream,a.autoPlay,a.whileloading?1:0,a.loops||1,a.usePolicyFile):i._load(b.id,a.url,!!a.stream,!!a.autoPlay,a.loops||1,!!a.autoLoad,a.usePolicyFile)}catch(e){F({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}return b};this.unload=function(){if(0!==b.readyState){if(b.isHTML5){if(I(),b._a)b._a.pause(),ta(b._a,"about:blank"),b.url="about:blank"}else 8===j?i._unload(b.id,"about:blank"):i._unload(b.id);g()}return b};this.destruct=function(a){if(b.isHTML5){if(I(),
b._a)b._a.pause(),ta(b._a),z||A(),b._a._t=null,b._a=null}else b._iO.onfailure=null,i._destroySound(b.id);a||c.destroySound(b.id,!0)};this.start=this.play=function(a,c){var e,d;d=!0;d=null;c="undefined"===typeof c?!0:c;a||(a={});b._iO=r(a,b._iO);b._iO=r(b._iO,b.options);b._iO.url=$(b._iO.url);b.instanceOptions=b._iO;if(b._iO.serverURL&&!b.connected)return b.getAutoPlay()||b.setAutoPlay(!0),b;aa(b._iO)&&(b._setup_html5(b._iO),h());if(1===b.playState&&!b.paused)(e=b._iO.multiShot)||(d=b);if(null!==d)return d;
if(!b.loaded)if(0===b.readyState){if(!b.isHTML5)b._iO.autoPlay=!0;b.load(b._iO)}else 2===b.readyState&&(d=b);if(null!==d)return d;if(!b.isHTML5&&9===j&&0<b.position&&b.position===b.duration)a.position=0;if(b.paused&&b.position&&0<b.position)b.resume();else{b._iO=r(a,b._iO);if(null!==b._iO.from&&null!==b._iO.to&&0===b.instanceCount&&0===b.playState&&!b._iO.serverURL){e=function(){b._iO=r(a,b._iO);b.play(b._iO)};if(b.isHTML5&&!b._html5_canplay)b.load({_oncanplay:e}),d=!1;else if(!b.isHTML5&&!b.loaded&&
(!b.readyState||2!==b.readyState))b.load({onload:e}),d=!1;if(null!==d)return d;b._iO=s()}(!b.instanceCount||b._iO.multiShotEvents||!b.isHTML5&&8<j&&!b.getAutoPlay())&&b.instanceCount++;b._iO.onposition&&0===b.playState&&l(b);b.playState=1;b.paused=!1;b.position="undefined"!==typeof b._iO.position&&!isNaN(b._iO.position)?b._iO.position:0;if(!b.isHTML5)b._iO=Y(X(b._iO));b._iO.onplay&&c&&(b._iO.onplay.apply(b),m=!0);b.setVolume(b._iO.volume,!0);b.setPan(b._iO.pan,!0);b.isHTML5?(h(),d=b._setup_html5(),
b.setPosition(b._iO.position),d.play()):(d=i._start(b.id,b._iO.loops||1,9===j?b._iO.position:b._iO.position/1E3,b._iO.multiShot),9===j&&!d&&b._iO.onplayerror&&b._iO.onplayerror.apply(b))}return b};this.stop=function(a){var c=b._iO;if(1===b.playState){b._onbufferchange(0);b._resetOnPosition(0);b.paused=!1;if(!b.isHTML5)b.playState=0;q();c.to&&b.clearOnPosition(c.to);if(b.isHTML5){if(b._a)a=b.position,b.setPosition(0),b.position=a,b._a.pause(),b.playState=0,b._onTimer(),I()}else i._stop(b.id,a),c.serverURL&&
b.unload();b.instanceCount=0;b._iO={};c.onstop&&c.onstop.apply(b)}return b};this.setAutoPlay=function(a){b._iO.autoPlay=a;b.isHTML5||(i._setAutoPlay(b.id,a),a&&!b.instanceCount&&1===b.readyState&&b.instanceCount++)};this.getAutoPlay=function(){return b._iO.autoPlay};this.setPosition=function(a){"undefined"===typeof a&&(a=0);var c=b.isHTML5?Math.max(a,0):Math.min(b.duration||b._iO.duration,Math.max(a,0));b.position=c;a=b.position/1E3;b._resetOnPosition(b.position);b._iO.position=c;if(b.isHTML5){if(b._a&&
b._html5_canplay&&b._a.currentTime!==a)try{b._a.currentTime=a,(0===b.playState||b.paused)&&b._a.pause()}catch(e){}}else a=9===j?b.position:a,b.readyState&&2!==b.readyState&&i._setPosition(b.id,a,b.paused||!b.playState,b._iO.multiShot);b.isHTML5&&b.paused&&b._onTimer(!0);return b};this.pause=function(a){if(b.paused||0===b.playState&&1!==b.readyState)return b;b.paused=!0;b.isHTML5?(b._setup_html5().pause(),I()):(a||"undefined"===typeof a)&&i._pause(b.id,b._iO.multiShot);b._iO.onpause&&b._iO.onpause.apply(b);
return b};this.resume=function(){var a=b._iO;if(!b.paused)return b;b.paused=!1;b.playState=1;b.isHTML5?(b._setup_html5().play(),h()):(a.isMovieStar&&!a.serverURL&&b.setPosition(b.position),i._pause(b.id,a.multiShot));!m&&a.onplay?(a.onplay.apply(b),m=!0):a.onresume&&a.onresume.apply(b);return b};this.togglePause=function(){if(0===b.playState)return b.play({position:9===j&&!b.isHTML5?b.position:b.position/1E3}),b;b.paused?b.resume():b.pause();return b};this.setPan=function(a,c){"undefined"===typeof a&&
(a=0);"undefined"===typeof c&&(c=!1);b.isHTML5||i._setPan(b.id,a);b._iO.pan=a;if(!c)b.pan=a,b.options.pan=a;return b};this.setVolume=function(a,e){"undefined"===typeof a&&(a=100);"undefined"===typeof e&&(e=!1);if(b.isHTML5){if(b._a)b._a.volume=Math.max(0,Math.min(1,a/100))}else i._setVolume(b.id,c.muted&&!b.muted||b.muted?0:a);b._iO.volume=a;if(!e)b.volume=a,b.options.volume=a;return b};this.mute=function(){b.muted=!0;if(b.isHTML5){if(b._a)b._a.muted=!0}else i._setVolume(b.id,0);return b};this.unmute=
function(){b.muted=!1;var a="undefined"!==typeof b._iO.volume;if(b.isHTML5){if(b._a)b._a.muted=!1}else i._setVolume(b.id,a?b._iO.volume:b.options.volume);return b};this.toggleMute=function(){return b.muted?b.unmute():b.mute()};this.onposition=this.onPosition=function(a,c,e){k.push({position:parseInt(a,10),method:c,scope:"undefined"!==typeof e?e:b,fired:!1});return b};this.clearOnPosition=function(b,a){var c,b=parseInt(b,10);if(isNaN(b))return!1;for(c=0;c<k.length;c++)if(b===k[c].position&&(!a||a===
k[c].method))k[c].fired&&o--,k.splice(c,1)};this._processOnPosition=function(){var a,c;a=k.length;if(!a||!b.playState||o>=a)return!1;for(a-=1;0<=a;a--)if(c=k[a],!c.fired&&b.position>=c.position)c.fired=!0,o++,c.method.apply(c.scope,[c.position]);return!0};this._resetOnPosition=function(b){var a,c;a=k.length;if(!a)return!1;for(a-=1;0<=a;a--)if(c=k[a],c.fired&&b<=c.position)c.fired=!1,o--;return!0};s=function(){var a=b._iO,c=a.from,e=a.to,d,f;f=function(){b.clearOnPosition(e,f);b.stop()};d=function(){if(null!==
e&&!isNaN(e))b.onPosition(e,f)};if(null!==c&&!isNaN(c))a.position=c,a.multiShot=!1,d();return a};l=function(){var a,c=b._iO.onposition;if(c)for(a in c)if(c.hasOwnProperty(a))b.onPosition(parseInt(a,10),c[a])};q=function(){var a,c=b._iO.onposition;if(c)for(a in c)c.hasOwnProperty(a)&&b.clearOnPosition(parseInt(a,10))};h=function(){b.isHTML5&&Ha(b)};I=function(){b.isHTML5&&Ia(b)};g=function(a){a||(k=[],o=0);m=!1;b._hasTimer=null;b._a=null;b._html5_canplay=!1;b.bytesLoaded=null;b.bytesTotal=null;b.duration=
b._iO&&b._iO.duration?b._iO.duration:null;b.durationEstimate=null;b.eqData=[];b.eqData.left=[];b.eqData.right=[];b.failures=0;b.isBuffering=!1;b.instanceOptions={};b.instanceCount=0;b.loaded=!1;b.metadata={};b.readyState=0;b.muted=!1;b.paused=!1;b.peakData={left:0,right:0};b.waveformData={left:[],right:[]};b.playState=0;b.position=null;b.id3={}};g();this._onTimer=function(a){var c,f=!1,g={};if(b._hasTimer||a){if(b._a&&(a||(0<b.playState||1===b.readyState)&&!b.paused)){c=b._get_html5_duration();if(c!==
e)e=c,b.duration=c,f=!0;b.durationEstimate=b.duration;c=1E3*b._a.currentTime||0;c!==d&&(d=c,f=!0);(f||a)&&b._whileplaying(c,g,g,g,g)}return f}};this._get_html5_duration=function(){var a=b._iO,c=b._a?1E3*b._a.duration:a?a.duration:void 0;return c&&!isNaN(c)&&Infinity!==c?c:a?a.duration:null};this._apply_loop=function(b,a){b.loop=1<a?"loop":""};this._setup_html5=function(a){var a=r(b._iO,a),e=decodeURI,d=z?c._global_a:b._a,i=e(a.url),h=d&&d._t?d._t.instanceOptions:null,A;if(d){if(d._t){if(!z&&i===e(n))A=
d;else if(z&&h.url===a.url&&(!n||n===h.url))A=d;if(A)return b._apply_loop(d,a.loops),A}z&&d._t&&d._t.playState&&a.url!==h.url&&d._t.stop();g(h&&h.url?a.url===h.url:n?n===a.url:!1);d.src=a.url;n=b.url=a.url;d._called_load=!1}else if(b._a=a.autoLoad||a.autoPlay?new Audio(a.url):Oa?new Audio(null):new Audio,d=b._a,d._called_load=!1,z)c._global_a=d;b.isHTML5=!0;b._a=d;d._t=b;f();b._apply_loop(d,a.loops);a.autoLoad||a.autoPlay?b.load():(d.autobuffer=!1,d.preload="auto");return d};f=function(){if(b._a._added_events)return!1;
var a;b._a._added_events=!0;for(a in v)v.hasOwnProperty(a)&&b._a&&b._a.addEventListener(a,v[a],!1);return!0};A=function(){var a;b._a._added_events=!1;for(a in v)v.hasOwnProperty(a)&&b._a&&b._a.removeEventListener(a,v[a],!1)};this._onload=function(a){a=!!a;b.loaded=a;b.readyState=a?3:2;b._onbufferchange(0);b._iO.onload&&b._iO.onload.apply(b,[a]);return!0};this._onbufferchange=function(a){if(0===b.playState||a&&b.isBuffering||!a&&!b.isBuffering)return!1;b.isBuffering=1===a;b._iO.onbufferchange&&b._iO.onbufferchange.apply(b);
return!0};this._onsuspend=function(){b._iO.onsuspend&&b._iO.onsuspend.apply(b);return!0};this._onfailure=function(a,c,d){b.failures++;if(b._iO.onfailure&&1===b.failures)b._iO.onfailure(b,a,c,d)};this._onfinish=function(){var a=b._iO.onfinish;b._onbufferchange(0);b._resetOnPosition(0);if(b.instanceCount){b.instanceCount--;if(!b.instanceCount&&(q(),b.playState=0,b.paused=!1,b.instanceCount=0,b.instanceOptions={},b._iO={},I(),b.isHTML5))b.position=0;(!b.instanceCount||b._iO.multiShotEvents)&&a&&a.apply(b)}};
this._whileloading=function(a,c,d,e){var f=b._iO;b.bytesLoaded=a;b.bytesTotal=c;b.duration=Math.floor(d);b.bufferLength=e;if(f.isMovieStar)b.durationEstimate=b.duration;else if(b.durationEstimate=f.duration?b.duration>f.duration?b.duration:f.duration:parseInt(b.bytesTotal/b.bytesLoaded*b.duration,10),"undefined"===typeof b.durationEstimate)b.durationEstimate=b.duration;3!==b.readyState&&f.whileloading&&f.whileloading.apply(b)};this._whileplaying=function(a,c,d,e,f){var g=b._iO;if(isNaN(a)||null===
a)return!1;b.position=Math.max(0,a);b._processOnPosition();if(!b.isHTML5&&8<j){if(g.usePeakData&&"undefined"!==typeof c&&c)b.peakData={left:c.leftPeak,right:c.rightPeak};if(g.useWaveformData&&"undefined"!==typeof d&&d)b.waveformData={left:d.split(","),right:e.split(",")};if(g.useEQData&&"undefined"!==typeof f&&f&&f.leftEQ&&(a=f.leftEQ.split(","),b.eqData=a,b.eqData.left=a,"undefined"!==typeof f.rightEQ&&f.rightEQ))b.eqData.right=f.rightEQ.split(",")}1===b.playState&&(!b.isHTML5&&8===j&&!b.position&&
b.isBuffering&&b._onbufferchange(0),g.whileplaying&&g.whileplaying.apply(b));return!0};this._oncaptiondata=function(a){b.captiondata=a;b._iO.oncaptiondata&&b._iO.oncaptiondata.apply(b)};this._onmetadata=function(a,c){var d={},e,f;for(e=0,f=a.length;e<f;e++)d[a[e]]=c[e];b.metadata=d;b._iO.onmetadata&&b._iO.onmetadata.apply(b)};this._onid3=function(a,c){var d=[],e,f;for(e=0,f=a.length;e<f;e++)d[a[e]]=c[e];b.id3=r(b.id3,d);b._iO.onid3&&b._iO.onid3.apply(b)};this._onconnect=function(a){a=1===a;if(b.connected=
a)b.failures=0,p(b.id)&&(b.getAutoPlay()?b.play(void 0,b.getAutoPlay()):b._iO.autoLoad&&b.load()),b._iO.onconnect&&b._iO.onconnect.apply(b,[a])};this._ondataerror=function(){0<b.playState&&b._iO.ondataerror&&b._iO.ondataerror.apply(b)}};oa=function(){return l.body||l._docElement||l.getElementsByTagName("div")[0]};R=function(a){return l.getElementById(a)};r=function(a,e){var d=a||{},b,g;b="undefined"===typeof e?c.defaultOptions:e;for(g in b)b.hasOwnProperty(g)&&"undefined"===typeof d[g]&&(d[g]="object"!==
typeof b[g]||null===b[g]?b[g]:r(d[g],b[g]));return d};S={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};ja=function(a,e){var d,b=!0,g="undefined"!==typeof e,f=c.setupOptions;for(d in a)if(a.hasOwnProperty(d))if("object"!==typeof a[d]||null===a[d]||a[d]instanceof Array)g&&"undefined"!==typeof S[e]?c[e][d]=a[d]:"undefined"!==typeof f[d]?(c.setupOptions[d]=a[d],c[d]=a[d]):"undefined"===typeof S[d]?(H(u("undefined"===typeof c[d]?"setupUndef":"setupError",d),2),b=!1):c[d]instanceof
Function?c[d].apply(c,a[d]instanceof Array?a[d]:[a[d]]):c[d]=a[d];else if("undefined"===typeof S[d])H(u("undefined"===typeof c[d]?"setupUndef":"setupError",d),2),b=!1;else return ja(a[d],d);return b};o=function(){function a(a){var a=Va.call(a),b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(a,e){var h=a.shift(),i=[b[e]];if(d)h[i](a[0],a[1]);else h[i].apply(h,a)}var d=h.attachEvent,b={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":"removeEventListener"};
return{add:function(){c(a(arguments),"add")},remove:function(){c(a(arguments),"remove")}}}();v={abort:m(function(){}),canplay:m(function(){var a=this._t,c;if(a._html5_canplay)return!0;a._html5_canplay=!0;a._onbufferchange(0);c="undefined"!==typeof a._iO.position&&!isNaN(a._iO.position)?a._iO.position/1E3:null;if(a.position&&this.currentTime!==c)try{this.currentTime=c}catch(d){}a._iO._oncanplay&&a._iO._oncanplay()}),load:m(function(){var a=this._t;a.loaded||(a._onbufferchange(0),a._whileloading(a.bytesTotal,
a.bytesTotal,a._get_html5_duration()),a._onload(!0))}),ended:m(function(){this._t._onfinish()}),error:m(function(){this._t._onload(!1)}),loadeddata:m(function(){var a=this._t,c=a.bytesTotal||1;if(!a._loaded&&!xa)a.duration=a._get_html5_duration(),a._whileloading(c,c,a._get_html5_duration()),a._onload(!0)}),loadedmetadata:m(function(){}),loadstart:m(function(){this._t._onbufferchange(1)}),play:m(function(){this._t._onbufferchange(0)}),playing:m(function(){this._t._onbufferchange(0)}),progress:m(function(a){var c=
this._t,d,b=0,g=a.target.buffered;d=a.loaded||0;var f=a.total||1;if(c.loaded)return!1;if(g&&g.length){for(d=g.length-1;0<=d;d--)b=g.end(d)-g.start(d);d=b/a.target.duration}isNaN(d)||(c._onbufferchange(0),c._whileloading(d,f,c._get_html5_duration()),d&&f&&d===f&&v.load.call(this,a))}),ratechange:m(function(){}),suspend:m(function(a){var c=this._t;v.progress.call(this,a);c._onsuspend()}),stalled:m(function(){}),timeupdate:m(function(){this._t._onTimer()}),waiting:m(function(){this._t._onbufferchange(1)})};
aa=function(a){return!a.serverURL&&(a.type?P({type:a.type}):P({url:a.url})||c.html5Only)};ta=function(a,c){if(a)a.src=c};P=function(a){function e(a){return c.preferFlash&&t&&!c.ignoreFlash&&"undefined"!==typeof c.flash[a]&&c.flash[a]}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var d=a.url||null,a=a.type||null,b=c.audioFormats,g;if(a&&"undefined"!==typeof c.html5[a])return c.html5[a]&&!e(a);if(!x){x=[];for(g in b)b.hasOwnProperty(g)&&(x.push(g),b[g].related&&(x=x.concat(b[g].related)));x=RegExp("\\.("+
x.join("|")+")(\\?.*)?$","i")}g=d?d.toLowerCase().match(x):null;!g||!g.length?a?(d=a.indexOf(";"),g=(-1!==d?a.substr(0,d):a).substr(6)):d=!1:g=g[1];g&&"undefined"!==typeof c.html5[g]?d=c.html5[g]&&!e(g):(a="audio/"+g,d=c.html5.canPlayType({type:a}),d=(c.html5[g]=d)&&c.html5[a]&&!e(a));return d};La=function(){function a(a){var b,d,f=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){for(b=0,d=a.length;b<d&&!f;b++)if(c.html5[a[b]]||e.canPlayType(a[b]).match(c.html5Test))f=
!0,c.html5[a[b]]=!0,c.flash[a[b]]=!(!c.preferFlash||!t||!a[b].match(Ra));b=f}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||"undefined"===typeof Audio)return!1;var e="undefined"!==typeof Audio?Oa?new Audio(null):new Audio:null,d,b={},g,f;g=c.audioFormats;for(d in g)if(g.hasOwnProperty(d)&&(b[d]=a(g[d].type),b["audio/"+d]=b[d],c.flash[d]=c.preferFlash&&!c.ignoreFlash&&d.match(Ra)?!0:!1,g[d]&&g[d].related))for(f=g[d].related.length-
1;0<=f;f--)b["audio/"+g[d].related[f]]=b[d],c.html5[g[d].related[f]]=b[d],c.flash[g[d].related[f]]=b[d];b.canPlayType=e?a:null;c.html5=r(c.html5,b);return!0};u=function(){};X=function(a){if(8===j&&1<a.loops&&a.stream)a.stream=!1;return a};Y=function(a){if(a&&!a.usePolicyFile&&(a.onid3||a.usePeakData||a.useWaveformData||a.useEQData))a.usePolicyFile=!0;return a};H=function(){};ga=function(){return!1};Fa=function(a){for(var c in a)a.hasOwnProperty(c)&&"function"===typeof a[c]&&(a[c]=ga)};W=function(a){"undefined"===
typeof a&&(a=!1);(s||a)&&c.disable(a)};Ga=function(a){var e=null;if(a)if(a.match(/\.swf(\?.*)?$/i)){if(e=a.substr(a.toLowerCase().lastIndexOf(".swf?")+4))return a}else a.lastIndexOf("/")!==a.length-1&&(a+="/");a=(a&&-1!==a.lastIndexOf("/")?a.substr(0,a.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(a+="?ts="+(new Date).getTime());return a};la=function(){j=parseInt(c.flashVersion,10);if(8!==j&&9!==j)c.flashVersion=j=8;var a=c.debugMode||c.debugFlash?"_debug.swf":".swf";if(c.useHTML5Audio&&!c.html5Only&&
c.audioFormats.mp4.required&&9>j)c.flashVersion=j=9;c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===j?" (AS3/Flash 9)":" (AS2/Flash 8)");8<j?(c.defaultOptions=r(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=r(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+Ua.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==j?"flash9":"flash8"];c.movieURL=(8===j?"soundmanager2.swf":
"soundmanager2_flash9.swf").replace(".swf",a);c.features.peakData=c.features.waveformData=c.features.eqData=8<j};Ea=function(a,c){if(!i)return!1;i._setPolling(a,c)};pa=function(){if(c.debugURLParam.test(fa))c.debugMode=!0};p=this.getSoundById;G=function(){var a=[];c.debugMode&&a.push("sm2_debug");c.debugFlash&&a.push("flash_debug");c.useHighPerformance&&a.push("high_performance");return a.join(" ")};ra=function(){u("fbHandler");var a=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;
if(c.ok()){if(c.oMC)c.oMC.className=[G(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")}else{if(n)c.oMC.className=G()+" movieContainer "+(null===a?"swf_timedout":"swf_error");c.didFlashBlock=!0;B({type:"ontimeout",ignoreInit:!0,error:e});F(e)}};ka=function(a,c,d){"undefined"===typeof w[a]&&(w[a]=[]);w[a].push({method:c,scope:d||null,fired:!1})};B=function(a){a||(a={type:c.ok()?"onready":"ontimeout"});if(!k&&a&&!a.ignoreInit||"ontimeout"===a.type&&(c.ok()||s&&!a.ignoreInit))return!1;
var e={success:a&&a.ignoreInit?c.ok():!s},d=a&&a.type?w[a.type]||[]:[],b=[],g,e=[e],f=n&&c.useFlashBlock&&!c.ok();if(a.error)e[0].error=a.error;for(a=0,g=d.length;a<g;a++)!0!==d[a].fired&&b.push(d[a]);if(b.length)for(a=0,g=b.length;a<g;a++)if(b[a].scope?b[a].method.apply(b[a].scope,e):b[a].method.apply(this,e),!f)b[a].fired=!0;return!0};C=function(){h.setTimeout(function(){c.useFlashBlock&&ra();B();"function"===typeof c.onload&&c.onload.apply(h);c.waitForWindowLoad&&o.add(h,"load",C)},1)};va=function(){if("undefined"!==
typeof t)return t;var a=!1,c=navigator,d=c.plugins,b,g=h.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description&&(a=!0);else if("undefined"!==typeof g){try{b=new g("ShockwaveFlash.ShockwaveFlash")}catch(f){}a=!!b}return t=a};Ka=function(){var a,e,d=c.audioFormats;if(wa&&q.match(/os (1|2|3_0|3_1)/i)){if(c.hasHTML5=!1,c.html5Only=!0,c.oMC)c.oMC.style.display="none"}else if(c.useHTML5Audio)c.hasHTML5=
!c.html5||!c.html5.canPlayType?!1:!0;if(c.useHTML5Audio&&c.hasHTML5)for(e in d)if(d.hasOwnProperty(e)&&(d[e].required&&!c.html5.canPlayType(d[e].type)||c.flash[e]||c.flash[d[e].type]))a=!0;c.ignoreFlash&&(a=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!a;return!c.html5Only};$=function(a){var e,d,b=0;if(a instanceof Array){for(e=0,d=a.length;e<d;e++)if(a[e]instanceof Object){if(c.canPlayMIME(a[e].type)){b=e;break}}else if(c.canPlayURL(a[e])){b=e;break}if(a[b].url)a[b]=a[b].url;a=a[b]}return a};Ha=
function(a){if(!a._hasTimer)a._hasTimer=!0,!ya&&c.html5PollingInterval&&(null===O&&0===Z&&(O=h.setInterval(Ja,c.html5PollingInterval)),Z++)};Ia=function(a){if(a._hasTimer)a._hasTimer=!1,!ya&&c.html5PollingInterval&&Z--};Ja=function(){var a;if(null!==O&&!Z)return h.clearInterval(O),O=null,!1;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].isHTML5&&c.sounds[c.soundIDs[a]]._hasTimer&&c.sounds[c.soundIDs[a]]._onTimer()};F=function(a){a="undefined"!==typeof a?a:{};"function"===typeof c.onerror&&
c.onerror.apply(h,[{type:"undefined"!==typeof a.type?a.type:null}]);"undefined"!==typeof a.fatal&&a.fatal&&c.disable()};Ma=function(){if(!Pa||!va())return!1;var a=c.audioFormats,e,d;for(d in a)if(a.hasOwnProperty(d)&&("mp3"===d||"mp4"===d))if(c.html5[d]=!1,a[d]&&a[d].related)for(e=a[d].related.length-1;0<=e;e--)c.html5[a[d].related[e]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(c.swfLoaded)return!1;(new Date).getTime();c.swfLoaded=!0;ba=!1;Pa&&Ma();setTimeout(ha,
y?100:1)};V=function(a,e){function d(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(J&&K)return!1;if(c.html5Only)return la(),c.oMC=R(c.movieID),ha(),K=J=!0,!1;var b=e||c.url,g=c.altURL||b,f;f=oa();var h,i,j=G(),k,m=null,m=(m=l.getElementsByTagName("html")[0])&&m.dir&&m.dir.match(/rtl/i),a="undefined"===typeof a?c.id:a;la();c.url=Ga(Aa?b:g);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(q.match(/msie 8/i)||!y&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))c.wmode=
null;f={name:a,id:a,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:Sa+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};if(c.debugFlash)f.FlashVars="debug=1";c.wmode||delete f.wmode;if(y)b=l.createElement("div"),i=['<object id="'+a+'" data="'+e+'" type="'+f.type+'" title="'+f.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+
Sa+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",f.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",f.FlashVars):"","</object>"].join("");else for(h in b=l.createElement("embed"),f)f.hasOwnProperty(h)&&b.setAttribute(h,f[h]);pa();j=G();if(f=oa())if(c.oMC=R(c.movieID)||l.createElement("div"),c.oMC.id){k=c.oMC.className;c.oMC.className=
(k?k+" ":"movieContainer")+(j?" "+j:"");c.oMC.appendChild(b);if(y)h=c.oMC.appendChild(l.createElement("div")),h.className="sm2-object-box",h.innerHTML=i;K=!0}else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+j;h=j=null;if(!c.useFlashBlock)if(c.useHighPerformance)j={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(j={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},m)j.left=Math.abs(parseInt(j.left,10))+"px";if(Wa)c.oMC.style.zIndex=
1E4;if(!c.debugFlash)for(k in j)j.hasOwnProperty(k)&&(c.oMC.style[k]=j[k]);try{y||c.oMC.appendChild(b);f.appendChild(c.oMC);if(y)h=c.oMC.appendChild(l.createElement("div")),h.className="sm2-object-box",h.innerHTML=i;K=!0}catch(n){throw Error(u("domError")+" \n"+n.toString());}}return J=!0};U=function(){if(c.html5Only)return V(),!1;if(i)return!1;i=c.getMovie(c.id);if(!i)M?(y?c.oMC.innerHTML=qa:c.oMC.appendChild(M),M=null,J=!0):V(c.id,c.url),i=c.getMovie(c.id);"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,
1);return!0};D=function(){setTimeout(Da,1E3)};Da=function(){var a,e=!1;if(N)return!1;N=!0;o.remove(h,"load",D);if(ba&&!za)return!1;k||(a=c.getMoviePercent(),0<a&&100>a&&(e=!0));setTimeout(function(){a=c.getMoviePercent();if(e)return N=!1,h.setTimeout(D,1),!1;!k&&Qa&&(null===a?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&ra():W(!0):0!==c.flashLoadTimeout&&W(!0))},c.flashLoadTimeout)};T=function(){if(za||!ba)return o.remove(h,"focus",T),!0;za=Qa=!0;N=!1;D();o.remove(h,"focus",T);return!0};
Na=function(){var a,e=[];if(c.useHTML5Audio&&c.hasHTML5)for(a in c.audioFormats)c.audioFormats.hasOwnProperty(a)&&e.push(a+": "+c.html5[a]+(!c.html5[a]&&t&&c.flash[a]?" (using flash)":c.preferFlash&&c.flash[a]&&t?" (preferring flash)":!c.html5[a]?" ("+(c.audioFormats[a].required?"required, ":"")+"and no flash support)":""))};L=function(a){if(k)return!1;if(c.html5Only)return k=!0,C(),!0;var e=!0,d;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())k=!0,s&&(d={type:!t&&n?"NO_FLASH":"INIT_TIMEOUT"});
if(s||a){if(c.useFlashBlock&&c.oMC)c.oMC.className=G()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error");B({type:"ontimeout",error:d,ignoreInit:!0});F(d);e=!1}s||(c.waitForWindowLoad&&!ia?o.add(h,"load",C):C());return e};Ca=function(){var a,e=c.setupOptions;for(a in e)e.hasOwnProperty(a)&&("undefined"===typeof c[a]?c[a]=e[a]:c[a]!==e[a]&&(c.setupOptions[a]=c[a]))};ha=function(){if(k)return!1;if(c.html5Only){if(!k)o.remove(h,"load",c.beginDelayedInit),c.enabled=!0,L();return!0}U();try{i._externalInterfaceTest(!1),
Ea(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||i._disableDebug(),c.enabled=!0,c.html5Only||o.add(h,"unload",ga)}catch(a){return F({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),W(!0),L(),!1}L();o.remove(h,"load",c.beginDelayedInit);return!0};E=function(){if(na)return!1;na=!0;Ca();pa();!t&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});La();c.html5.usingFlash=Ka();n=c.html5.usingFlash;Na();!t&&n&&c.setup({flashLoadTimeout:1});l.removeEventListener&&l.removeEventListener("DOMContentLoaded",
E,!1);U();return!0};ua=function(){"complete"===l.readyState&&(E(),l.detachEvent("onreadystatechange",ua));return!0};ma=function(){ia=!0;o.remove(h,"load",ma)};va();o.add(h,"focus",T);o.add(h,"load",D);o.add(h,"load",ma);l.addEventListener?l.addEventListener("DOMContentLoaded",E,!1):l.attachEvent?l.attachEvent("onreadystatechange",ua):F({type:"NO_DOM2_EVENTS",fatal:!0});"complete"===l.readyState&&setTimeout(E,100)}var ca=null;if("undefined"===typeof SM2_DEFER||!SM2_DEFER)ca=new Q;da.SoundManager=Q;
da.soundManager=ca})(window);