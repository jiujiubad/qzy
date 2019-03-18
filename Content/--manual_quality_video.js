/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 359);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities_root__ = __webpack_require__(7);
null==__WEBPACK_IMPORTED_MODULE_0_utilities_root__["a" /* default */].Wistia&&(__WEBPACK_IMPORTED_MODULE_0_utilities_root__["a" /* default */].Wistia={});var W=__WEBPACK_IMPORTED_MODULE_0_utilities_root__["a" /* default */].Wistia;null==W._initializers&&(W._initializers={}),null==W._destructors&&(W._destructors={}),null==W.mixin&&(W.mixin=function(klass,obj){for(var k in obj)obj.hasOwnProperty(k)&&(klass[k]=obj[k])});/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_utilities_root__["a" /* default */].Wistia);;
;

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isStartDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isBeforeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isEndDefined; });
/* unused harmony export isAfterEnd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enforceTrimming; });
/* unused harmony export enforceTrimmingNow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return teardown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/elem'),elemBind=_W$lib.elemBind,elemUnbind=_W$lib.elemUnbind,_W$lib2=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/event_loop'),globalEventLoop=_W$lib2.globalEventLoop;var isStartDefined=function isStartDefined(simpleVideo){return null!=simpleVideo.attributes.trimStart&&0<simpleVideo.attributes.trimStart};var isBeforeStart=function isBeforeStart(simpleVideo){var delta=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;return isStartDefined(simpleVideo)&&simpleVideo.video.currentTime<simpleVideo.attributes.trimStart-delta};var isEndDefined=function isEndDefined(simpleVideo){return null!=simpleVideo.attributes.trimEnd&&0<simpleVideo.attributes.trimEnd};var isAfterEnd=function isAfterEnd(simpleVideo){var delta=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;return isEndDefined(simpleVideo)&&simpleVideo.video.currentTime>simpleVideo.attributes.trimEnd+delta};var enforceTrimming=function enforceTrimming(simpleVideo){var video=simpleVideo.video;globalEventLoop.add(simpleVideo.uuid+'.enforce_trimming',100,function(){enforceTrimmingNow(simpleVideo)})};var enforceTrimmingNow=function enforceTrimmingNow(simpleVideo){var sensitivity=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0.5;'beforeplay'===simpleVideo.getPlaybackMode()||(simpleVideo.state.fakeEnded&&!isAfterEnd(simpleVideo)?simpleVideo.state.fakeEnded=!1:!simpleVideo.state.fakeEnded&&isAfterEnd(simpleVideo)&&(simpleVideo.state.fakeEnded=!0,simpleVideo.attributes.loop?(simpleVideo.trigger('ended'),simpleVideo.seek(0).then(function(){return simpleVideo.play()})):(simpleVideo.pause(),simpleVideo.trigger('ended'))),isBeforeStart(simpleVideo,sensitivity)?simpleVideo.seek(0):isAfterEnd(simpleVideo,sensitivity)&&simpleVideo.seek(simpleVideo.getDuration()))};var setTrim=function setTrim(simpleVideo,settings){var start=settings.start,end=settings.end,sensitivity=null==settings.sensitivity?0.1:settings.sensitivity;null!=start&&0<=start&&(simpleVideo.attributes.trimStart=settings.start),null!=end&&0<=end&&(simpleVideo.attributes.trimEnd=settings.end),enforceTrimming(simpleVideo,sensitivity)};var getTrim=function getTrim(simpleVideo){return{start:simpleVideo.attributes.trimStart||-1,end:simpleVideo.attributes.trimEnd||-1}};var teardown=function teardown(simpleVideo){globalEventLoop.remove(simpleVideo.uuid+'.enforce_trimming')};;
;

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setupVideoElemAttributes; });
/* unused harmony export inferTypeAttribute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return srcProtocolAndHost; });
/* unused harmony export tinyMp4Url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sumTimeRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bufferedInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return properAssetUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/detect'),cachedDetect=_W$lib.cachedDetect,_W$lib2=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/elem'),elemFromObject=_W$lib2.elemFromObject,_W$lib3=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/url'),Url=_W$lib3.Url,urlProto=_W$lib3.proto,_W$lib4=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/assets'),isBakeryUrl=_W$lib4.isBakeryUrl,_W$lib5=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/hosts'),cdnFastWistiaComHost=_W$lib5.cdnFastWistiaComHost,deliveryHost=_W$lib5.deliveryHost,detect=cachedDetect(),BLANK_IMAGE=urlProto()+'//'+cdnFastWistiaComHost()+'/assets/images/blank.gif';var createElement=function createElement(id,asset,attributes){var videoObject={tagName:'video',id:id,crossorigin:'anonymous',style:{background:'transparent',display:'block',height:'100%',position:'static',visibility:'visible',width:'100%'}};(detect.browser.msie||detect.trident)&&(videoObject.style.minWidth='10px',videoObject.style.minHeight='10px');var sourceElem={tagName:'source',src:properAssetUrl(asset.url),type:inferTypeAttribute(asset,attributes)};return videoObject.childNodes=[sourceElem],setupVideoElemAttributes(elemFromObject(videoObject),asset,attributes)};var setupAttribute=function setupAttribute(videoElem,name,val){null!==val&&!1!==val?!0===val?(videoElem[name]=!0,videoElem.setAttribute(name,'')):(videoElem[name]=val,videoElem.setAttribute(name,val)):(videoElem[name]=!1,videoElem.removeAttribute(name))};var setupVideoElemAttributes=function setupVideoElemAttributes(videoElem,asset,attributes){return attributes.poster?(videoElem.poster=attributes.poster,videoElem.setAttribute('poster',attributes.poster)):(videoElem.poster=BLANK_IMAGE,videoElem.setAttribute('poster',BLANK_IMAGE)),setupAttribute(videoElem,'src',properAssetUrl(asset.url)),setupAttribute(videoElem,'playsinline',attributes.playsinline),setupAttribute(videoElem,'muted',attributes.muted),setupAttribute(videoElem,'loop',attributes.loop),setupAttribute(videoElem,'controls',null!=attributes.controls&&attributes.controls),setupAttribute(videoElem,'preload',attributes.preload||'none'),setupAttribute(videoElem,'type',inferTypeAttribute(asset,attributes)),videoElem};var inferTypeAttribute=function inferTypeAttribute(asset,attributes){if(null!=attributes.contentType)return attributes.contentType;var result='video/'+asset.ext;return attributes.spherical&&(result+=';dimension=360;'),result};var srcProtocolAndHost=function srcProtocolAndHost(src){if(isBakeryUrl(src)){var srcUrl=new Url(src);if(srcUrl.protocol)return srcUrl.protocol+'//'+srcUrl.host}return urlProto()+'//'+deliveryHost(urlProto())};var tinyMp4Url=function tinyMp4Url(src){return srcProtocolAndHost(src)+'/tiny.mp4'};var sumTimeRanges=function sumTimeRanges(timeRanges){if(null==timeRanges)return null;for(var sum=0,i=0;i<timeRanges.length;i++)sum+=timeRanges.end(i)-timeRanges.start(i);return sum};var bufferedInfo=function bufferedInfo(buffered,pos,maxHoleDuration){var bufferLen,bufferStart,bufferEnd,bufferStartNext,i,buffered2=[];for(buffered.sort(function(a,b){var diff=a.start-b.start;return diff?diff:b.end-a.end}),i=0;i<buffered.length;i++){var buf2len=buffered2.length;if(buf2len){var buf2end=buffered2[buf2len-1].end;buffered[i].start-buf2end<maxHoleDuration?buffered[i].end>buf2end&&(buffered2[buf2len-1].end=buffered[i].end):buffered2.push(buffered[i])}else buffered2.push(buffered[i])}for(i=0,bufferLen=0,bufferStart=bufferEnd=pos;i<buffered2.length;i++){var start=buffered2[i].start,end=buffered2[i].end;if(pos+maxHoleDuration>=start&&pos<end)bufferStart=start,bufferEnd=end,bufferLen=bufferEnd-pos;else if(pos+maxHoleDuration<start){bufferStartNext=start;break}}return{len:bufferLen,start:bufferStart,end:bufferEnd,nextStart:bufferStartNext}};var properAssetUrl=function properAssetUrl(src){var ext=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'mp4';return isBakeryUrl(src)?/\.bin$/.test(src)?src.replace(/\.bin$/,'')+('/file.'+ext):src:src};;
;

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* unused harmony export isInVideoEventContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return teardown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/elem'),elemBind=_W$lib.elemBind,elemUnbind=_W$lib.elemUnbind,VIDEO_DOM_EVENTS=['beforeplay','ended','loadeddata','loadedmetadata','loadstart','pause','playing','progress','ratechange','seeked','volumechange','timeupdate','waiting','webkitbeginfullscreen','webkitendfullscreen','webkitplaybacktargetavailabilitychanged'],setup=function setup(simpleVideo){for(var eventType,i=0;i<VIDEO_DOM_EVENTS.length;i++)eventType=VIDEO_DOM_EVENTS[i],function(video,eventType){var fnKey='_marshalEvent_'+eventType;simpleVideo[fnKey]=simpleVideo[fnKey]||function(event){null==simpleVideo.state&&(simpleVideo.state={}),'playing'===eventType&&('playing'!==eventType||video.paused)||(simpleVideo.state.eventContext=event,simpleVideo.trigger(eventType,event),simpleVideo.state.eventContext=null)},elemBind(video,eventType,simpleVideo[fnKey])}(simpleVideo.video,eventType)},isInVideoEventContext=function isInVideoEventContext(simpleVideo){return!!(simpleVideo.state&&simpleVideo.state.eventContext)},teardown=function teardown(simpleVideo){for(var i=0;i<VIDEO_DOM_EVENTS.length;i++){var eventType=VIDEO_DOM_EVENTS[i],fnKey='_marshalEvent_'+eventType;elemUnbind(simpleVideo.video,eventType,simpleVideo[fnKey])}};;
;

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
null==__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].engines&&(__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].engines={});var defineEngine=function defineEngine(name,klass){__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].engines[name]=klass};/* harmony default export */ __webpack_exports__["a"] = (defineEngine);;
;

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffering__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seeking__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__on_ready__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__streams__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simple_methods__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__relay_events__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trimming__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hacks__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__playback_modes__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__object_fit__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__diagnostics__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__initialization__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__public_methods__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__defineEngine_js__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_wistia_namespace_js__ = __webpack_require__(0);
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _W$lib=__WEBPACK_IMPORTED_MODULE_15_wistia_namespace_js__["default"].lib("utilities/bindify"),bindify=_W$lib.bindify,Obj=__WEBPACK_IMPORTED_MODULE_15_wistia_namespace_js__["default"].lib("utilities/obj"),Assets=__WEBPACK_IMPORTED_MODULE_15_wistia_namespace_js__["default"].lib("player/lib/assets"),seqId=__WEBPACK_IMPORTED_MODULE_15_wistia_namespace_js__["default"].lib("utilities/seqid"),Promise=__WEBPACK_IMPORTED_MODULE_15_wistia_namespace_js__["default"].lib("promiscuous"),SimpleVideo=function(){function SimpleVideo(root,mediaData){var attributes=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},otherEngine=arguments[3];_classCallCheck(this,SimpleVideo),this.uuid=seqId("wistia_simple_video_"),this.root=root,this.state={},__WEBPACK_IMPORTED_MODULE_12__initialization__["e" /* setupProperties */](this,mediaData,attributes),otherEngine?__WEBPACK_IMPORTED_MODULE_12__initialization__["a" /* fromOtherEngine */](this,otherEngine):__WEBPACK_IMPORTED_MODULE_12__initialization__["b" /* injectVideo */](this),__WEBPACK_IMPORTED_MODULE_8__hacks__["a" /* fixWebkitControlsBug */](this),__WEBPACK_IMPORTED_MODULE_12__initialization__["d" /* setupBindingsAndLoops */](this),__WEBPACK_IMPORTED_MODULE_10__object_fit__["a" /* fit */](this)}return _createClass(SimpleVideo,[{key:"activeBufferRange",value:function activeBufferRange(){return __WEBPACK_IMPORTED_MODULE_1__buffering__["a" /* activeBufferRange */](this)}},{key:"anyBuffered",value:function anyBuffered(){return __WEBPACK_IMPORTED_MODULE_1__buffering__["b" /* anyBuffered */](this)}},{key:"canPlay",value:function canPlay(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["canPlay"](this)}},{key:"canPlaySilently",value:function canPlaySilently(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["canPlaySilently"](this)}},{key:"canPlayWithSound",value:function canPlayWithSound(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["canPlayWithSound"](this)}},{key:"cancelFullscreen",value:function cancelFullscreen(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["cancelFullscreen"](this)}},{key:"captureCurrentFrame",value:function captureCurrentFrame(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["captureCurrentFrame"].apply(__WEBPACK_IMPORTED_MODULE_5__simple_methods__,[this].concat(args))}},{key:"changeQuality",value:function changeQuality(slug){return __WEBPACK_IMPORTED_MODULE_4__streams__["a" /* changeQuality */](this,slug)}},{key:"changeStream",value:function changeStream(asset){return __WEBPACK_IMPORTED_MODULE_4__streams__["b" /* changeStream */](this,asset)}},{key:"changeStreamWithoutLoad",value:function changeStreamWithoutLoad(asset){return __WEBPACK_IMPORTED_MODULE_4__streams__["c" /* changeStreamWithoutLoad */](this,asset)}},{key:"changeVideo",value:function changeVideo(mediaData,attributes){return __WEBPACK_IMPORTED_MODULE_4__streams__["d" /* changeVideo */](this,mediaData,attributes)}},{key:"currentAsset",value:function currentAsset(){return this._currentAsset}},{key:"defaultAsset",value:function defaultAsset(){return this.selectableAssets()[0]}},{key:"destroy",value:function destroy(){this.state={eventContext:this.state&&this.state.eventContext},__WEBPACK_IMPORTED_MODULE_12__initialization__["c" /* killBindingsAndStopLoops */](this),this._bindings={}}},{key:"diagnosticData",value:function diagnosticData(){return __WEBPACK_IMPORTED_MODULE_11__diagnostics__["a" /* getDiagnosticData */](this)}},{key:"eventContext",value:function eventContext(){return this.state.eventContext}},{key:"fit",value:function fit(){return __WEBPACK_IMPORTED_MODULE_10__object_fit__["a" /* fit */](this)}},{key:"getCurrentQuality",value:function getCurrentQuality(){var currentAsset=this.currentAsset();if(currentAsset)return Assets.numericSizeSnapped(currentAsset.width,currentAsset.height);var selectedAsset=this.selectedAsset();return selectedAsset?Assets.numericSizeSnapped(selectedAsset.width,selectedAsset.height):"?"}},{key:"getCurrentTime",value:function getCurrentTime(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["getCurrentTime"](this)}},{key:"getDuration",value:function getDuration(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["getDuration"](this)}},{key:"getPlaybackMode",value:function getPlaybackMode(){return __WEBPACK_IMPORTED_MODULE_9__playback_modes__["b" /* getPlaybackMode */](this)}},{key:"getPlaybackRate",value:function getPlaybackRate(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["getPlaybackRate"](this)}},{key:"getPreload",value:function getPreload(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["getPreload"](this)}},{key:"getState",value:function getState(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["getState"](this)}},{key:"getTrim",value:function getTrim(){return __WEBPACK_IMPORTED_MODULE_7__trimming__["b" /* getTrim */](this)}},{key:"getVolume",value:function getVolume(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["getVolume"](this)}},{key:"isChangingVideo",value:function isChangingVideo(){return __WEBPACK_IMPORTED_MODULE_4__streams__["f" /* isChangingVideo */](this)}},{key:"isInFullscreen",value:function isInFullscreen(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["isInFullscreen"](this)}},{key:"isMuted",value:function isMuted(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["isMuted"](this)}},{key:"isSeeking",value:function isSeeking(){return __WEBPACK_IMPORTED_MODULE_2__seeking__["a" /* isSeeking */](this)}},{key:"isSourceOfBrowserEvent",value:function isSourceOfBrowserEvent(event){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["isSourceOfBrowserEvent"](this,event)}},{key:"lastBufferedTime",value:function lastBufferedTime(maxBufferHole){return __WEBPACK_IMPORTED_MODULE_1__buffering__["c" /* lastBufferedTime */](this,maxBufferHole)}},{key:"mute",value:function mute(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["mute"](this)}},{key:"onEnterFullscreen",value:function onEnterFullscreen(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["onEnterFullscreen"](this)}},{key:"onHeightChange",value:function onHeightChange(height){return __WEBPACK_IMPORTED_MODULE_10__object_fit__["b" /* onHeightChange */](this,height)}},{key:"onLeaveFullscreen",value:function onLeaveFullscreen(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["onLeaveFullscreen"](this)}},{key:"onReady",value:function onReady(){return __WEBPACK_IMPORTED_MODULE_3__on_ready__["a" /* onReady */](this)}},{key:"onWidthChange",value:function onWidthChange(width){return __WEBPACK_IMPORTED_MODULE_10__object_fit__["c" /* onWidthChange */](this,width)}},{key:"pause",value:function pause(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["pause"](this)}},{key:"play",value:function play(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["play"](this)}},{key:"requestFullscreen",value:function requestFullscreen(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["requestFullscreen"](this)}},{key:"reset",value:function reset(){this.state={}}},{key:"seek",value:function seek(t){return __WEBPACK_IMPORTED_MODULE_2__seeking__["b" /* seek */](this,t)}},{key:"seekOnPlay",value:function seekOnPlay(t){return __WEBPACK_IMPORTED_MODULE_2__seeking__["c" /* seekOnPlay */](this,t)}},{key:"selectedAsset",value:function selectedAsset(){return this._currentAsset}},{key:"selectableAssets",value:function selectableAssets(){return this.allAssets}},{key:"selectableQualities",value:function selectableQualities(){return this.selectableAssets().map(function(asset){return Assets.numericSizeSnapped(asset.width,asset.height)}).sort(function(a,b){return a-b})}},{key:"selectedQuality",value:function selectedQuality(){var asset=this.selectedAsset();return asset?Assets.numericSizeSnapped(asset.width,asset.height):"?"}},{key:"sequentialBufferedRange",value:function sequentialBufferedRange(){return __WEBPACK_IMPORTED_MODULE_1__buffering__["d" /* sequentialBufferedRange */](this)}},{key:"setAttributes",value:function setAttributes(attrs){Obj.assign(this.attributes,attrs)}},{key:"onPlayed",value:function onPlayed(){var _this=this,state=this.state;return state&&state.hasPlayed?Promise.resolve():new Promise(function(resolve){var onPlay=function onPlay(){_this.unbind("playing",onPlay),resolve()};_this.bind("playing",onPlay)})}},{key:"setCurrentTime",value:function setCurrentTime(t){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["setCurrentTime"](this,t)}},{key:"setPlaybackRate",value:function setPlaybackRate(r){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["setPlaybackRate"](this,r)}},{key:"setTrim",value:function setTrim(t){return __WEBPACK_IMPORTED_MODULE_7__trimming__["f" /* setTrim */](this,t)}},{key:"setVolume",value:function setVolume(v){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["setVolume"](this,v)}},{key:"showFirstFrame",value:function showFirstFrame(){return __WEBPACK_IMPORTED_MODULE_2__seeking__["b" /* seek */](this,0.01)}},{key:"stopStreaming",value:function stopStreaming(){return __WEBPACK_IMPORTED_MODULE_4__streams__["g" /* stopStreaming */](this)}},{key:"timeBeforeEndOfBuffer",value:function timeBeforeEndOfBuffer(maxBufferHole){return __WEBPACK_IMPORTED_MODULE_1__buffering__["e" /* timeBeforeEndOfBuffer */](this,maxBufferHole)}},{key:"totalBuffered",value:function totalBuffered(){return __WEBPACK_IMPORTED_MODULE_1__buffering__["f" /* totalBuffered */](this)}},{key:"totalPlayed",value:function totalPlayed(){return __WEBPACK_IMPORTED_MODULE_0__helpers__["f" /* sumTimeRanges */](this.video.played)}},{key:"unmute",value:function unmute(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["unmute"](this)}},{key:"videoElem",value:function videoElem(){return __WEBPACK_IMPORTED_MODULE_5__simple_methods__["videoElem"](this)}}]),SimpleVideo}();bindify(SimpleVideo.prototype),SimpleVideo.delegatePublicMethods=__WEBPACK_IMPORTED_MODULE_13__public_methods__["c" /* delegatePublicMethods */],SimpleVideo.PUBLIC_METHODS=__WEBPACK_IMPORTED_MODULE_13__public_methods__["a" /* PUBLIC_METHODS */],SimpleVideo.mediaDataWithAssets=function(mediaData,assets){var result=Obj.clone(mediaData);return result.assets=Obj.clone(assets),result},Object(__WEBPACK_IMPORTED_MODULE_14__defineEngine_js__["a" /* default */])("SimpleVideo",SimpleVideo),__WEBPACK_IMPORTED_MODULE_15_wistia_namespace_js__["default"].define("player/engines/simple_video/index.js",SimpleVideo);/* harmony default export */ __webpack_exports__["default"] = (SimpleVideo);;
;

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BEFORE_PLAY; });
/* unused harmony export ENDED */
/* unused harmony export PAUSED */
/* unused harmony export PLAYING */
/* unused harmony export UNKNOWN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPlaybackMode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/wlog'),wlog=_W$lib.wlog,logger=wlog.getPrefixedFunctions('SimpleVideo');var BEFORE_PLAY='beforeplay';var ENDED='ended';var PAUSED='paused';var PLAYING='playing';var UNKNOWN='unknown';var getPlaybackMode=function getPlaybackMode(simpleVideo){var video=simpleVideo.video;try{return simpleVideo.state.hasPlayed?simpleVideo.state.fakeEnded||video.ended?ENDED:video.paused?PAUSED:PLAYING:BEFORE_PLAY}catch(e){return logger.warn(e),UNKNOWN}};;
;

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return injectVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromOtherEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setupBindingsAndLoops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return killBindingsAndStopLoops; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_state_tracking__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiting_events__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trimming__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hacks__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__relay_events__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_6_wistia_namespace_js__["default"].lib('player/lib/elem'),elemAppend=_W$lib.elemAppend;var setupProperties=function setupProperties(simpleVideo,mediaData,attributes){var allAssets=mediaData.assets;0===allAssets.length&&(allAssets=[{}]),simpleVideo.mediaData=mediaData,simpleVideo.allAssets=allAssets,simpleVideo.attributes=attributes};var injectVideo=function injectVideo(simpleVideo){simpleVideo._currentAsset=simpleVideo.defaultAsset(),simpleVideo.video=__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */](simpleVideo.uuid,simpleVideo._currentAsset,simpleVideo.attributes),elemAppend(simpleVideo.root,simpleVideo.video)};var fromOtherEngine=function fromOtherEngine(simpleVideo,otherEngine){var wasMuted=otherEngine.isMuted();simpleVideo.video=otherEngine.videoElem(),__WEBPACK_IMPORTED_MODULE_0__helpers__["d" /* setupVideoElemAttributes */](simpleVideo.video,simpleVideo.defaultAsset(),simpleVideo.attributes),simpleVideo.state.eventContext=otherEngine.eventContext(),simpleVideo.root.appendChild(simpleVideo.video),simpleVideo.changeStreamWithoutLoad(simpleVideo.defaultAsset()),simpleVideo.state.isInitializingFromOtherEngine=!0,simpleVideo.state.otherEngineWasMuted=wasMuted,simpleVideo.bind('loadstart',function(){return setTimeout(function(){simpleVideo.state.isInitializingFromOtherEngine=!1},0),simpleVideo.unbind}),simpleVideo.video.load()};var setupBindingsAndLoops=function setupBindingsAndLoops(simpleVideo){__WEBPACK_IMPORTED_MODULE_2__waiting_events__["a" /* setup */](simpleVideo),__WEBPACK_IMPORTED_MODULE_3__trimming__["a" /* enforceTrimming */](simpleVideo),__WEBPACK_IMPORTED_MODULE_5__relay_events__["a" /* setup */](simpleVideo),__WEBPACK_IMPORTED_MODULE_1__custom_state_tracking__["a" /* setup */](simpleVideo)};var killBindingsAndStopLoops=function killBindingsAndStopLoops(simpleVideo){__WEBPACK_IMPORTED_MODULE_5__relay_events__["b" /* teardown */](simpleVideo),__WEBPACK_IMPORTED_MODULE_3__trimming__["g" /* teardown */](simpleVideo),__WEBPACK_IMPORTED_MODULE_1__custom_state_tracking__["b" /* teardown */](simpleVideo),__WEBPACK_IMPORTED_MODULE_2__waiting_events__["b" /* teardown */](simpleVideo)};;
;

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fixWebkitControlsBug; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/detect'),cachedDetect=_W$lib.cachedDetect,_W$lib2=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/wlog'),wlog=_W$lib2.wlog,detect=cachedDetect(),logger=wlog.getPrefixedFunctions('SimpleVideo');var fixWebkitControlsBug=function fixWebkitControlsBug(simpleVideo){var video=simpleVideo.video;if(detect.browser.webkit){logger.info('fixWebkitControlsBug');var prevValue=video.getAttribute('controls');video.setAttribute('controls','controls'),video.removeAttribute('controls'),null!=prevValue&&video.setAttribute('controls',prevValue)}};;
;

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playWithoutTrim", function() { return playWithoutTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canPlay", function() { return canPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canPlayWithSound", function() { return canPlayWithSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canPlaySilently", function() { return canPlaySilently; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callingPlayRequiresEventContext", function() { return callingPlayRequiresEventContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pause", function() { return pause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTime", function() { return setCurrentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTimeWithoutTrimming", function() { return setCurrentTimeWithoutTrimming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTime", function() { return getCurrentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVolume", function() { return setVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVolume", function() { return getVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPlaybackRate", function() { return supportsPlaybackRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlaybackRate", function() { return setPlaybackRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaybackRate", function() { return getPlaybackRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationWithoutTrimming", function() { return getDurationWithoutTrimming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSourceOfBrowserEvent", function() { return isSourceOfBrowserEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMuted", function() { return isMuted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAudio", function() { return hasAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreload", function() { return getPreload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mute", function() { return mute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmute", function() { return unmute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEnterFullscreen", function() { return onEnterFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLeaveFullscreen", function() { return onLeaveFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInFullscreen", function() { return isInFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWidthChange", function() { return onWidthChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHeightChange", function() { return onHeightChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoElem", function() { return videoElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestFullscreen", function() { return requestFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelFullscreen", function() { return cancelFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureCurrentFrame", function() { return captureCurrentFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relay_events__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trimming__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__ = __webpack_require__(0);
var Promise=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('promiscuous'),_W$lib=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('player/lib/elem'),elemBind=_W$lib.elemBind,elemUnbind=_W$lib.elemUnbind,safeRequestAnimationFrame=_W$lib.safeRequestAnimationFrame,elemRequestFullscreen=_W$lib.elemRequestFullscreen,elemCancelFullscreen=_W$lib.elemCancelFullscreen,inUserEventContext=_W$lib.inUserEventContext,_W$lib2=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('utilities/wlog'),wlog=_W$lib2.wlog,_W$lib3=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('utilities/detect'),cachedDetect=_W$lib3.cachedDetect,logger=wlog.getPrefixedFunctions('SimpleVideo'),detect=cachedDetect();var play=function play(simpleVideo){return simpleVideo.state.fakeEnded?simpleVideo.seek(0).then(function(){return playWithoutTrim(simpleVideo)}):__WEBPACK_IMPORTED_MODULE_1__trimming__["c" /* isBeforeStart */](simpleVideo)?simpleVideo.seek(0).then(function(){return playWithoutTrim(simpleVideo)}):playWithoutTrim(simpleVideo)};var playWithoutTrim=function playWithoutTrim(simpleVideo){var video=simpleVideo.video;return new Promise(function(resolve,reject){simpleVideo.state.lastPlayRejected=!1;var playbackMode=simpleVideo.getPlaybackMode();if(logger.info('play: start',video.playing),'playing'===playbackMode)logger.info('play: already playing, resolve'),resolve();else{simpleVideo.trigger('beforeplay'),'ended'===playbackMode&&0<detect.ios.version&&video.load();var promise=video.play();promise&&promise.catch&&promise.catch(function(e){simpleVideo.state.lastPlayRejected=!0,logger.notice('play: rejected'),reject(e)}),simpleVideo.bind('playing',function(){return logger.info('play: got playing, resolve'),resolve(),elemUnbind})}})};var canPlay=function canPlay(simpleVideo){return canPlaySilently(simpleVideo)||canPlayWithSound(simpleVideo)};var canPlayWithSound=function canPlayWithSound(simpleVideo){if(callingPlayRequiresEventContext()){var state=simpleVideo.state||{};return inUserEventContext()||state.isInitializingFromOtherEngine&&!state.otherEngineWasMuted}return!0};var canPlaySilently=function canPlaySilently(simpleVideo){return detect.android||10<=detect.ios.version||detect.safari||detect.chrome||detect.edge};var callingPlayRequiresEventContext=function callingPlayRequiresEventContext(){return 0<detect.ios.version||detect.android||detect.safari};var pause=function pause(simpleVideo){var video=simpleVideo.video;return logger.info('pause'),new Promise(function(resolve){logger.info('pause: start'),video.pause(),safeRequestAnimationFrame(function(){logger.info('pause: resolve'),resolve()})})};var setCurrentTime=function setCurrentTime(simpleVideo,t){return __WEBPACK_IMPORTED_MODULE_1__trimming__["e" /* isStartDefined */](simpleVideo)?setCurrentTimeWithoutTrimming(simpleVideo,t+simpleVideo.attributes.trimStart):setCurrentTimeWithoutTrimming(simpleVideo,t)};var setCurrentTimeWithoutTrimming=function setCurrentTimeWithoutTrimming(simpleVideo,t){logger.info('setCurrentTime',t),simpleVideo.video.currentTime=t};var getCurrentTime=function getCurrentTime(simpleVideo){return __WEBPACK_IMPORTED_MODULE_1__trimming__["e" /* isStartDefined */](simpleVideo)?Math.max(0,simpleVideo.video.currentTime-simpleVideo.attributes.trimStart):simpleVideo.video.currentTime};var getState=function getState(simpleVideo){return{playbackMode:simpleVideo.getPlaybackMode(),currentTime:simpleVideo.getCurrentTime(),volume:simpleVideo.getVolume(),playbackRate:simpleVideo.getPlaybackRate()}};var setVolume=function setVolume(simpleVideo,v){logger.info('setVolume',v);var video=simpleVideo.video;video.volume=v,0===v?(video.setAttribute('muted',''),video.muted=!0):(video.removeAttribute('muted'),video.muted=!1)};var getVolume=function getVolume(simpleVideo){return simpleVideo.isSeeking()?simpleVideo.state.volumeBeforeSuppressed:simpleVideo.video.volume};var supportsPlaybackRate=function supportsPlaybackRate(simpleVideo){return null!=simpleVideo.video.playbackRate};var setPlaybackRate=function setPlaybackRate(simpleVideo,r){logger.info('setPlaybackRate',r),supportsPlaybackRate(simpleVideo)?simpleVideo.video.playbackRate=r:logger.info('playbackRate is supported on',simpleVideo.video)};var getPlaybackRate=function getPlaybackRate(simpleVideo){return supportsPlaybackRate(simpleVideo)?simpleVideo.video.playbackRate:1};var getDuration=function getDuration(simpleVideo){return __WEBPACK_IMPORTED_MODULE_1__trimming__["e" /* isStartDefined */](simpleVideo)&&__WEBPACK_IMPORTED_MODULE_1__trimming__["d" /* isEndDefined */](simpleVideo)?Math.max(0,simpleVideo.attributes.trimEnd-simpleVideo.attributes.trimStart):__WEBPACK_IMPORTED_MODULE_1__trimming__["e" /* isStartDefined */](simpleVideo)?getDurationWithoutTrimming(simpleVideo)-simpleVideo.attributes.trimStart:__WEBPACK_IMPORTED_MODULE_1__trimming__["d" /* isEndDefined */](simpleVideo)?simpleVideo.attributes.trimEnd:getDurationWithoutTrimming(simpleVideo)};var getDurationWithoutTrimming=function getDurationWithoutTrimming(simpleVideo){var attrs=simpleVideo.attributes;if(null!=attrs.duration)return attrs.duration;return 2<=simpleVideo.video.readyState?simpleVideo.video.duration:void 0};var isSourceOfBrowserEvent=function isSourceOfBrowserEvent(simpleVideo,event){return event.target==simpleVideo.video};var isMuted=function isMuted(simpleVideo){var video=simpleVideo.video;return video.muted||simpleVideo.state.loadedMetadata&&(0===video.volume||!hasAudio(simpleVideo))};var hasAudio=function hasAudio(simpleVideo){var video=simpleVideo.video;return video.mozHasAudio||video.webkitAudioDecodedByteCount||video.audioTracks&&video.audioTracks.length};var getPreload=function getPreload(simpleVideo){return simpleVideo.video.getAttribute('preload')};var mute=function mute(simpleVideo){simpleVideo.video.muted=!0,simpleVideo.video.setAttribute('muted','muted')};var unmute=function unmute(simpleVideo){simpleVideo.video.muted=!1,simpleVideo.video.removeAttribute('muted')};var onEnterFullscreen=function onEnterFullscreen(simpleVideo){simpleVideo.state.isInFullscreen=!0;var backgroundColor=simpleVideo.attributes.backgroundColor||'#000';simpleVideo.video.style.backgroundColor=backgroundColor};var onLeaveFullscreen=function onLeaveFullscreen(simpleVideo){simpleVideo.state.isInFullscreen=!1,simpleVideo.video.style.backgroundColor='transparent'};var isInFullscreen=function isInFullscreen(simpleVideo){return!!simpleVideo.state.isInFullscreen};var onWidthChange=function onWidthChange(simpleVideo){};var onHeightChange=function onHeightChange(simpleVideo){};var videoElem=function videoElem(simpleVideo){return simpleVideo.video};var requestFullscreen=function requestFullscreen(simpleVideo){elemRequestFullscreen(simpleVideo.video)};var cancelFullscreen=function cancelFullscreen(simpleVideo){elemCancelFullscreen(simpleVideo.video)};var captureCurrentFrame=function captureCurrentFrame(simpleVideo){for(var _len=arguments.length,args=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];var video=simpleVideo.video,canvas=document.createElement('canvas');return canvas.width=video.videoWidth,canvas.height=video.videoHeight,canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height),canvas.toDataURL.apply(canvas,args)};;
;

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stopStreaming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeStreamWithoutLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return changeVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return initAfterChangeVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isChangingVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return teardownBeforeChangeVideo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialization__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__ = __webpack_require__(0);
var Promise=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('promiscuous'),_W$lib=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('utilities/wlog'),wlog=_W$lib.wlog,_W$lib2=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('player/lib/elem'),elemInDom=_W$lib2.elemInDom,elemBind=_W$lib2.elemBind,elemUnbind=_W$lib2.elemUnbind,Assets=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('player/lib/assets'),logger=wlog.getPrefixedFunctions('SimpleVideo'),getSources=function getSources(simpleVideo){for(var node,video=simpleVideo.video,result=[],i=0;i<video.childNodes.length;i++)node=video.childNodes[i],1===node.nodeType&&'source'===node.tagName.toLowerCase()&&result.push(node);return result},stopStreaming=function stopStreaming(simpleVideo){try{var video=simpleVideo.video;video.src=__WEBPACK_IMPORTED_MODULE_0__helpers__["e" /* srcProtocolAndHost */](video.getAttribute('src'))+'/tiny.mp4',video.load()}catch(e){logger.warn(e)}},changeQuality=function changeQuality(simpleVideo,quality,autoPlay,reload){var assets=simpleVideo.selectableAssets(),asset=Assets.findClosestAssetByQuality(assets,quality);return'beforeplay'===simpleVideo.getPlaybackMode()?(changeStreamWithoutLoad(simpleVideo,asset),Promise.resolve()):changeStream(simpleVideo,asset,autoPlay,reload)},changeStreamWithoutLoad=function changeStreamWithoutLoad(simpleVideo,asset){logger.info('changeStreamWithoutLoad',asset&&asset.slug,asset);var video=simpleVideo.video;if(elemInDom(video)){var src=__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* properAssetUrl */](asset.url,asset.container);simpleVideo.state={eventContext:simpleVideo.state.eventContext},simpleVideo._currentAsset=asset,video.src=src;var sources=getSources(simpleVideo);0<sources.length&&(sources[0].src=src),simpleVideo.trigger('stream-changed',simpleVideo._currentAsset)}},changeStream=function changeStream(simpleVideo,asset){var autoPlay=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0,reload=3<arguments.length&&void 0!==arguments[3]&&arguments[3];logger.info('changeStream',autoPlay,reload,asset&&asset.slug,asset);var video=simpleVideo.video;return simpleVideo.asset=asset,new Promise(function(resolve){var src=__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* properAssetUrl */](asset.url,asset.container);if(!reload&&src===video.getAttribute('src'))return void resolve();var stateBeforeSwitch=simpleVideo.getState();simpleVideo.state.seeking=!0,elemBind(video,'loadstart',function(){return reload?(video.style.visibility='visible',simpleVideo.state.seeking=!1,resolve()):2<stateBeforeSwitch.currentTime?simpleVideo.seek(stateBeforeSwitch.currentTime).then(function(){'playing'===stateBeforeSwitch.playbackMode?simpleVideo.play().then(function(){simpleVideo.state.seeking=!1,video.style.visibility='visible',resolve()}):simpleVideo.pause().then(function(){video.style.visibility='visible',simpleVideo.state.seeking=!1,resolve()})}):('playing'===stateBeforeSwitch.playbackMode&&simpleVideo.play(),video.style.visibility='visible',simpleVideo.state.seeking=!1,resolve()),simpleVideo.setPlaybackRate(stateBeforeSwitch.playbackRate),elemUnbind}),video.style.visibility='hidden',changeStreamWithoutLoad(simpleVideo,asset,reload),'beforeplay'===stateBeforeSwitch.playbackMode||autoPlay||simpleVideo.play()})},isChangingVideo=function isChangingVideo(simpleVideo){return!!simpleVideo.state.isChangingVideo},changeVideo=function changeVideo(simpleVideo,mediaData,attributes){return teardownBeforeChangeVideo(simpleVideo),simpleVideo.state.isChangingVideo=!0,initAfterChangeVideo(simpleVideo,mediaData,attributes),new Promise(function(resolve){changeStream(simpleVideo,simpleVideo.defaultAsset()).then(function(){simpleVideo.state.isChangingVideo=!1,resolve()})})},teardownBeforeChangeVideo=function teardownBeforeChangeVideo(simpleVideo){var eventContext=simpleVideo.state.eventContext;simpleVideo.destroy(),simpleVideo.state.eventContext=eventContext},initAfterChangeVideo=function initAfterChangeVideo(simpleVideo,mediaData,attributes){__WEBPACK_IMPORTED_MODULE_1__initialization__["e" /* setupProperties */](simpleVideo,mediaData,attributes),__WEBPACK_IMPORTED_MODULE_1__initialization__["d" /* setupBindingsAndLoops */](simpleVideo,simpleVideo.allAssets,attributes)};;
;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineEngine_js__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_selection__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_video__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wistia_namespace_js__ = __webpack_require__(0);
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var Obj=__WEBPACK_IMPORTED_MODULE_3_wistia_namespace_js__["default"].lib("utilities/obj"),Assets=__WEBPACK_IMPORTED_MODULE_3_wistia_namespace_js__["default"].lib("player/lib/assets"),seqId=__WEBPACK_IMPORTED_MODULE_3_wistia_namespace_js__["default"].lib("utilities/seqid"),delegatePublicMethods=__WEBPACK_IMPORTED_MODULE_2__simple_video__["default"].delegatePublicMethods,mediaDataWithAssets=__WEBPACK_IMPORTED_MODULE_2__simple_video__["default"].mediaDataWithAssets,ManualQualityVideo=function(){function ManualQualityVideo(root,mediaData){var attributes=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},otherEngine=arguments[3];_classCallCheck(this,ManualQualityVideo),this.uuid=seqId("wistia_manual_quality_video_"),this.root=root,this.mediaData=mediaData,this.allAssets=mediaData.assets,this.attributes=attributes,this.simpleVideo=new __WEBPACK_IMPORTED_MODULE_2__simple_video__["default"](this.root,this.mediaDataForSimpleVideo(),this.attributes,otherEngine)}return _createClass(ManualQualityVideo,[{key:"mediaDataForSimpleVideo",value:function mediaDataForSimpleVideo(){return mediaDataWithAssets(this.mediaData,this.assetsForSimpleVideo())}},{key:"defaultAsset",value:function defaultAsset(){return __WEBPACK_IMPORTED_MODULE_1__asset_selection__["a" /* bestAsset */](this)}},{key:"selectableAssets",value:function selectableAssets(){return __WEBPACK_IMPORTED_MODULE_1__asset_selection__["b" /* selectable */](this)}},{key:"assetsForSimpleVideo",value:function assetsForSimpleVideo(){var assets=this.selectableAssets();return assets=Assets.moveToFront(assets,this.defaultAsset()),assets}},{key:"changeVideo",value:function changeVideo(mediaData,attributes){return this.mediaData=mediaData,this.allAssets=mediaData.assets,this.attributes=attributes,__WEBPACK_IMPORTED_MODULE_1__asset_selection__["c" /* uncache */](this),this.simpleVideo.changeVideo(this.mediaDataForSimpleVideo(),attributes)}},{key:"setAttributes",value:function setAttributes(attrs){Obj.assign(this.attributes,attrs),this.simpleVideo.setAttributes(attrs)}}]),ManualQualityVideo}();delegatePublicMethods(ManualQualityVideo.prototype,function(){return this.simpleVideo}),Object(__WEBPACK_IMPORTED_MODULE_0__defineEngine_js__["a" /* default */])("ManualQualityVideo",ManualQualityVideo),__WEBPACK_IMPORTED_MODULE_3_wistia_namespace_js__["default"].define("player/engines/manual_quality_video/index.js",ManualQualityVideo);/* harmony default export */ __webpack_exports__["default"] = (ManualQualityVideo);;
;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return anyBuffered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activeBufferRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return totalBuffered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sequentialBufferedRange; });
/* unused harmony export bufferInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lastBufferedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return timeBeforeEndOfBuffer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(112);
var anyBuffered=function anyBuffered(simpleVideo){var video=simpleVideo.video;return 0<video.buffered.length&&0<video.buffered.end(0)},activeBufferRange=function activeBufferRange(simpleVideo){for(var video=simpleVideo.video,currentTime=video.currentTime,i=0;i<video.buffered.length;i++){var start=video.buffered.start(i),end=video.buffered.end(i);if(start<=currentTime&&currentTime<end)return[start,end]}return null},totalBuffered=function totalBuffered(simpleVideo){return __WEBPACK_IMPORTED_MODULE_0__helpers__["f" /* sumTimeRanges */](simpleVideo.video.buffered)},sequentialBufferedRange=function sequentialBufferedRange(simpleVideo){var video=simpleVideo.video,buffered=video.buffered,startIndex=null;try{for(var i=0;i<buffered.length;i++){var start=buffered.start(i)-.5,end=buffered.end(i)+.5;if(start<=video.currentTime&&video.currentTime<end){startIndex=i;break}}if(null!=startIndex){for(var lastSequentialIndex=startIndex,_i=startIndex;_i<buffered.length;_i++){var thisBufferStart=buffered.start(_i)-.5,lastBufferEnd=buffered.end(lastSequentialIndex)+.5;if(thisBufferStart<=lastBufferEnd)lastSequentialIndex=_i;else break}var _start=buffered.start(startIndex),_end=buffered.end(lastSequentialIndex);return[_start,_end]}return null}catch(e){return logger.error(e),null}},bufferInfo=function bufferInfo(simpleVideo,pos,maxHoleDuration){var video=simpleVideo.video;if(video){var i,vbuffered=video.buffered,buffered=[];for(i=0;i<vbuffered.length;i++)buffered.push({start:vbuffered.start(i),end:vbuffered.end(i)});return __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* bufferedInfo */](buffered,pos,maxHoleDuration)}return{len:0,start:0,end:0,nextStart:void 0}},lastBufferedTime=function lastBufferedTime(simpleVideo,maxBufferHole){return bufferInfo(simpleVideo,simpleVideo.getCurrentTime(),maxBufferHole).end},timeBeforeEndOfBuffer=function timeBeforeEndOfBuffer(simpleVideo,maxBufferHole){return lastBufferedTime(simpleVideo,maxBufferHole)-simpleVideo.getCurrentTime()};;
;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return seek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return seekOnPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSeeking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playback_modes__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trimming__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__ = __webpack_require__(0);
var Promise=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('promiscuous'),_W$lib=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('utilities/obj'),assign=_W$lib.assign,_W$lib2=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('player/lib/elem'),elemBind=_W$lib2.elemBind,elemUnbind=_W$lib2.elemUnbind,_W$lib3=__WEBPACK_IMPORTED_MODULE_2_wistia_namespace_js__["default"].lib('utilities/wlog'),wlog=_W$lib3.wlog,logger=wlog.getPrefixedFunctions('SimpleVideo');var seek=function seek(simpleVideo,t){return __WEBPACK_IMPORTED_MODULE_1__trimming__["e" /* isStartDefined */](simpleVideo)?seekWithoutTrimming(simpleVideo,t+simpleVideo.attributes.trimStart):seekWithoutTrimming(simpleVideo,t)};var seekWithoutTrimming=function seekWithoutTrimming(simpleVideo,t){return logger.info('seek',t),simpleVideo.getPlaybackMode()===__WEBPACK_IMPORTED_MODULE_0__playback_modes__["a" /* BEFORE_PLAY */]?seekBeforePlay(simpleVideo,t):seekNow(simpleVideo,t)},seekBeforePlay=function seekBeforePlay(simpleVideo,t){var video=simpleVideo.video;return logger.info('seekBeforePlay',t),new Promise(function(resolve){logger.info('time '+t+': seek beforeplay');var playingBeforeSeek='playing'===simpleVideo.getPlaybackMode(),currentVolume=video.volume,onPlaying=function onPlaying(){logger.info('time '+t+': jump to time after playing'),video.currentTime=t,playingBeforeSeek?logger.info('time: '+t+': play after seek'):(logger.info('time: '+t+': pause after seek'),video.pause()),video.volume=currentVolume,assign(simpleVideo.state,{seeking:!1,volumeBeforeSuppressed:null}),whenDoneSeeking(simpleVideo).then(function(){video.style.visibility='visible',resolve()})};video.style.visibility='hidden',assign(simpleVideo.state,{seeking:!0,volumeBeforeSuppressed:currentVolume}),video.volume=0,logger.info('time '+t+': start stream by calling play'),simpleVideo.trigger('beforeplay'),video.play(),'playing'===simpleVideo.getPlaybackMode()?onPlaying():elemBind(video,'playing',function(){return onPlaying(),elemUnbind})})},seekNow=function seekNow(simpleVideo,t){return logger.info('seekNow',t),new Promise(function(resolve){logger.info('seekNow: start',t),simpleVideo.video.currentTime=t,whenDoneSeeking(simpleVideo).then(function(){logger.info('seekNow: resolve',t),resolve()})})};var seekOnPlay=function seekOnPlay(simpleVideo,t){return new Promise(function(resolve){'playing'===simpleVideo.getPlaybackMode()?seekNow(simpleVideo,t).then(resolve):elemBind(simpleVideo.video,'playing',function(){return seekNow(simpleVideo,t).then(resolve),elemUnbind})})};var whenDoneSeeking=function whenDoneSeeking(simpleVideo){var video=simpleVideo.video;return new Promise(function(resolve){video.seeking?(logger.info('waiting for seek'),elemBind(video,'seeked',function(){return logger.info('seeked'),resolve(),elemUnbind})):(logger.info('no wait for seek'),resolve())})};var isSeeking=function isSeeking(simpleVideo){return!!simpleVideo.state.seeking};;
;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onReady; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var Promise=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('promiscuous'),_W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/wlog'),wlog=_W$lib.wlog,_W$lib2=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/elem'),elemBind=_W$lib2.elemBind,elemUnbind=_W$lib2.elemUnbind,_W$lib3=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/detect'),cachedDetect=_W$lib3.cachedDetect,_W$lib4=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/timeout-utils'),doTimeout=_W$lib4.doTimeout,StopGo=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/stopgo'),logger=wlog.getPrefixedFunctions('SimpleVideo'),detect=cachedDetect(),onReady=function onReady(simpleVideo){var video=simpleVideo.video;null==simpleVideo.state&&(simpleVideo.state={});var state=simpleVideo.state;if(state.onReadyStopGo)return state.onReadyStopGo;var onReadyStopGo=new StopGo;if(state.onReadyStopGo=onReadyStopGo,state.hasBeenReady)onReadyStopGo.go();else{if(2<=video.readyState)maybeDoTimeout(simpleVideo.uuid+'.ready_later',function(){logger.info('ready readyState',video.src,video.readyState),state.hasBeenReady=!0,onReadyStopGo.go()});else{var onLoadStart=function onLoadStart(){maybeDoTimeout(simpleVideo.uuid+'.loadstart',function(){logger.info('ready loadstart'),state.hasBeenReady=!0,onReadyStopGo.go()})};simpleVideo.bind('loadstart',onLoadStart)}return doTimeout(simpleVideo.uuid+'.ready_fallback',function(){state.hasBeenReady||(logger.info('ready fallback'),state.hasBeenReady=!0,onReadyStopGo.go())},200),onReadyStopGo}},maybeDoTimeout=function maybeDoTimeout(timeoutId,fn){detect.android||detect.iphone||detect.android||detect.safari?fn():doTimeout(timeoutId,fn)};;
;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return teardown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var Obj=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/obj'),_W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/event_loop'),globalEventLoop=_W$lib.globalEventLoop,DEFAULT_EVENT_LOOP_DURATION=300,getEventLoopDuration=function getEventLoopDuration(simpleVideo){var attrs=simpleVideo.attributes,baseEventLoopDuration=null==attrs.eventLoopDuration?DEFAULT_EVENT_LOOP_DURATION:attrs.eventLoopDuration;return baseEventLoopDuration/simpleVideo.getPlaybackRate()},setup=function setup(simpleVideo){null==simpleVideo.state&&(simpleVideo.state={}),'playing'===simpleVideo.getPlaybackMode()&&(simpleVideo.state.hasPlayed=!0),simpleVideo.bind('playing',function(){simpleVideo.state.hasPlayed=!0}),simpleVideo.bind('waiting',function(){simpleVideo.state.gotWaiting=!0}),simpleVideo.bind('loadedmetadata',function(){simpleVideo.state.loadedMetadata=!0}),Obj.assign(simpleVideo.state,{lastPlaybackMode:simpleVideo.getPlaybackMode(),lastTimePosition:simpleVideo.getCurrentTime(),lastEventLoopDuration:getEventLoopDuration(simpleVideo)});var eventLoopKey=simpleVideo.uuid+'.custom_state_and_events';globalEventLoop.add(eventLoopKey,getEventLoopDuration(simpleVideo),function(){Obj.assign(simpleVideo.state,{lastTimePosition:simpleVideo.getCurrentTime(),lastPlaybackMode:simpleVideo.getPlaybackMode(),lastEventLoopDuration:getEventLoopDuration(simpleVideo)}),globalEventLoop.interval(eventLoopKey,getEventLoopDuration(simpleVideo))})},teardown=function teardown(simpleVideo){var eventLoopKey=simpleVideo.uuid+'.custom_state_and_events';globalEventLoop.remove(eventLoopKey)};;
;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export maybeTriggerWaiting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return teardown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var Obj=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/obj'),_W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/elem'),elemBind=_W$lib.elemBind,elemUnbind=_W$lib.elemUnbind,_W$lib2=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/event_loop'),globalEventLoop=_W$lib2.globalEventLoop,DEFAULT_EVENT_LOOP_DURATION=300,getEventLoopDuration=function getEventLoopDuration(simpleVideo){var attrs=simpleVideo.attributes,baseEventLoopDuration=null==attrs.eventLoopDuration?DEFAULT_EVENT_LOOP_DURATION:attrs.eventLoopDuration;return baseEventLoopDuration/simpleVideo.getPlaybackRate()},setup=function setup(simpleVideo){null==simpleVideo.state&&(simpleVideo.state={}),simpleVideo.state.waiting=-1;var eventLoopKey=simpleVideo.uuid+'.waiting_events';globalEventLoop.add(eventLoopKey,getEventLoopDuration(simpleVideo),function(){maybeTriggerWaiting(simpleVideo),globalEventLoop.interval(eventLoopKey,getEventLoopDuration(simpleVideo))})},teardown=function teardown(simpleVideo){var eventLoopKey=simpleVideo.uuid+'.waiting_events';globalEventLoop.remove(eventLoopKey)},maybeTriggerWaiting=function maybeTriggerWaiting(simpleVideo){var video=simpleVideo.video,state=simpleVideo.state,lastPlaybackMode=state.lastPlaybackMode,isTryingToPlay=state.gotWaiting&&'beforeplay'===simpleVideo.getPlaybackMode()||'playing'===simpleVideo.getPlaybackMode(),eligibleToTriggerWaiting='playing'===lastPlaybackMode||'beforeplay'===lastPlaybackMode&&!state.lastPlayRejected,loopDuration=state.lastEventLoopDuration||getEventLoopDuration(simpleVideo);if(!(isTryingToPlay&&eligibleToTriggerWaiting))finishWaitingLoop(simpleVideo);else if(simpleVideo.getCurrentTime()===state.lastTimePosition){var startedWaitingAt=state.startedWaitingAt;startedWaitingAt?(state.waiting=(new Date().getTime()-startedWaitingAt)/1e3,simpleVideo.trigger('custom-waiting',state.waiting)):(Obj.assign(state,{startedWaitingAt:new Date().getTime()-loopDuration,waiting:loopDuration/1e3}),simpleVideo.trigger('custom-waiting',loopDuration/1e3),elemBind(video,'timeupdate',function(){return finishWaitingLoop(simpleVideo),elemUnbind}))}else finishWaitingLoop(simpleVideo)},finishWaitingLoop=function finishWaitingLoop(simpleVideo){var prevWaiting=simpleVideo.state.waiting;Obj.assign(simpleVideo.state,{waiting:-1,startedWaitingAt:null}),null!=prevWaiting&&0<=prevWaiting&&simpleVideo.trigger('custom-done-waiting',prevWaiting)};;
;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return onWidthChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onHeightChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/elem'),elemStyle=_W$lib.elemStyle,elemWidth=_W$lib.elemWidth,elemHeight=_W$lib.elemHeight,Assets=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/assets'),_W$lib2=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/detect'),cachedDetect=_W$lib2.cachedDetect,detect=cachedDetect(),onWidthChange=function onWidthChange(simpleVideo,width){return simpleVideo.setAttributes({width:width}),fit(simpleVideo)},onHeightChange=function onHeightChange(simpleVideo,height){return simpleVideo.setAttributes({height:height}),fit(simpleVideo)},CONTAIN='contain',COVER='cover',FILL='fill',fit=function fit(simpleVideo){var fitStrategy=simpleVideo.attributes.fitStrategy||getDefaultStrategy(simpleVideo);return fitStrategy===CONTAIN?contain(simpleVideo):fitStrategy===COVER?cover(simpleVideo):fitStrategy===FILL?fill(simpleVideo):contain(simpleVideo)},getDefaultStrategy=function getDefaultStrategy(simpleVideo){var _Mathabs=Math.abs,actualHeight=simpleVideo.attributes.height,actualWidth=simpleVideo.attributes.width,originalAspect=Assets.originalAspect(simpleVideo.allAssets),expectedWidth=actualHeight*originalAspect,expectedHeight=2*Math.floor(actualWidth/originalAspect/2),heightDiff=_Mathabs(expectedHeight-actualHeight),widthDiff=_Mathabs(expectedWidth-actualWidth),firefox36Plus=detect.firefox&&detect.browser.mozilla&&36<=detect.browser.version;return detect.browser.webkit||firefox36Plus?0<heightDiff&&10>=heightDiff&&0<widthDiff&&10>=widthDiff?FILL:CONTAIN:CONTAIN},cover=function cover(simpleVideo){var video=simpleVideo.video,attrs=simpleVideo.attributes,mediaAspect=Assets.videoAspect(simpleVideo.allAssets),rootWidth=elemWidth(simpleVideo.root),rootHeight=elemHeight(simpleVideo.root),browserAspect=rootWidth/rootHeight;detect.trident||detect.edge||detect.browser.msie?browserAspect<=mediaAspect?elemStyle(video,{height:'100%',left:'50%',objectFit:'contain',position:'relative',top:'50%',transform:'translate(-50%,-50%)',width:'1920px'}):elemStyle(video,{height:'1088px',left:'50%',objectFit:'contain',position:'relative',top:'50%',transform:'translate(-50%,-50%)',width:'100%'}):elemStyle(video,{objectFit:'cover'})},contain=function contain(simpleVideo){var video=simpleVideo.video;elemStyle(video,{objectFit:'contain',height:'100%',width:'100%'})},fill=function fill(simpleVideo){var video=simpleVideo.video;elemStyle(video,{objectFit:'fill',height:'100%',width:'100%'})};;
;

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDiagnosticData; });
var safe=function safe(fn){try{return fn()}catch(e){return'ERROR: '+e.message}};var getDiagnosticData=function getDiagnosticData(simpleVideo){var result={};return result.state=simpleVideo.state,result.attributes=simpleVideo.attributes,result.currentAsset=simpleVideo.currentAsset(),result.currentAsset.url&&100<result.currentAsset.url.length&&(result.currentAsset.url=result.currentAsset.url.substring(0,97)+'...'),result.selectedAsset=simpleVideo.selectedAsset(),result.selectedAsset.url&&100<result.selectedAsset.url.length&&(result.selectedAsset.url=result.selectedAsset.url.substring(0,97)+'...'),result.getState=safe(function(){return simpleVideo.getState()}),result.getDuration=safe(function(){return simpleVideo.getDuration()}),result.getPlaybackRate=safe(function(){return simpleVideo.getPlaybackRate()}),result.getPlaybackMode=safe(function(){return simpleVideo.getPlaybackMode()}),result.isSeeking=safe(function(){return simpleVideo.isSeeking()}),result.getCurrentTime=safe(function(){return simpleVideo.getCurrentTime()}),result.activeBufferRange=safe(function(){return simpleVideo.activeBufferRange()}),result.sequentialBufferedRange=safe(function(){return simpleVideo.sequentialBufferedRange()}),result.getVolume=safe(function(){return simpleVideo.getVolume()}),result.timeBeforeEndOfBuffer=safe(function(){return simpleVideo.timeBeforeEndOfBuffer()}),result.lastBufferedTime=safe(function(){return simpleVideo.lastBufferedTime()}),result.totalBuffered=safe(function(){return simpleVideo.totalBuffered()}),result.anyBuffered=safe(function(){return simpleVideo.anyBuffered()}),result.getPreload=safe(function(){return simpleVideo.getPreload()}),result.rawVideoProps=safe(function(){return rawVideoProps(simpleVideo)}),result};var SERIALIZABLE_VIDEO_PROPS=['autoplay','controls','crossOrigin','currentSrc','currentTime','defaultMuted','defaultPlaybackRate','duration','ended','error','loop','muted','networkState','paused','playbackRate','preload','readyState','seeking','src','startDate','volume'],rawVideoProps=function rawVideoProps(simpleVideo){for(var video=simpleVideo.video,result={},i=0;i<SERIALIZABLE_VIDEO_PROPS.length;i++){var propName=SERIALIZABLE_VIDEO_PROPS[i],propValue=video[propName];result[propName]=propValue}return result};;
;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectableAssets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/detect'),cachedDetect=_W$lib.cachedDetect,Obj=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('utilities/obj'),Assets=__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].lib('player/lib/assets'),detect=cachedDetect(),selectableAssets=function selectableAssets(allAssets){var result=Assets.filter(allAssets,{container:detect.video.webm?/webm|mp4/:'mp4',sortBy:'width asc, bitrate desc',public:!0,status:Assets.READY});return result=Obj.filter(result,function(asset){if('webm'===asset.container)return!0;var webmDuplicates=Obj.filter(allAssets,function(a){return'webm'===a.container&&a.width===asset.width});return 0===webmDuplicates.length}),result};;
;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

var g;g=function(){return this}();try{g=g||Function("return this")()||(1,eval)("this")}catch(e){"object"==typeof window&&(g=window)}module.exports=g;;
;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bestAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return uncache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectable_assets__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wistia_namespace_js__ = __webpack_require__(0);
var _W$lib=__WEBPACK_IMPORTED_MODULE_1_wistia_namespace_js__["default"].lib('utilities/cacheable'),makeCacheable=_W$lib.makeCacheable,uncacheNamespace=_W$lib.uncacheNamespace,Obj=__WEBPACK_IMPORTED_MODULE_1_wistia_namespace_js__["default"].lib('utilities/obj'),Assets=__WEBPACK_IMPORTED_MODULE_1_wistia_namespace_js__["default"].lib('player/lib/assets'),_W$lib2=__WEBPACK_IMPORTED_MODULE_1_wistia_namespace_js__["default"].lib('utilities/wlog'),wlog=_W$lib2.wlog,_W$lib3=__WEBPACK_IMPORTED_MODULE_1_wistia_namespace_js__["default"].lib('utilities/detect'),cachedDetect=_W$lib3.cachedDetect,logger=wlog.getPrefixedFunctions('asset_selection'),cacheable=makeCacheable('asset_selection'),selectable=function selectable(simpleVideo){return Object(__WEBPACK_IMPORTED_MODULE_0__selectable_assets__["a" /* selectableAssets */])(webPlayable(simpleVideo))},bestAsset=function bestAsset(simpleVideo){var attrs=simpleVideo.attributes;if(logger.info('bestAsset'),isScreencast(simpleVideo))return bestScreencastAsset(simpleVideo);if('sd-only'===attrs.videoQuality)return logger.info('videoQuality=sd-only'),mdOrSdAsset(simpleVideo);if('hd-only'===attrs.videoQuality)return logger.info('videoQuality=hd-only'),bestHdOnlyAsset(simpleVideo);if('md'===attrs.videoQuality)return logger.info('videoQuality=md'),bestMdAsset(simpleVideo);if(isTargetingExactWidth(attrs.videoQuality)){var targetAsset=closestAssetToTargetWidth(simpleVideo);if(targetAsset)return logger.info('targetAsset',attrs.videoQuality),targetAsset}return simpleVideo.isInFullscreen()?(logger.info('infullscreen'),bestFullscreenAsset(simpleVideo)):(logger.info('default'),bandwidthBasedAsset(simpleVideo)||mdOrSdAsset(simpleVideo))},bestScreencastAsset=function bestScreencastAsset(simpleVideo){var attrs=simpleVideo.attributes;if('low-fps'===attrs.videoQuality)return logger.info('videoQuality=low-fps'),bestLowFpsAsset(simpleVideo);if(isTargetingExactWidth(attrs.videoQuality)){var targetAsset=closestAssetToTargetWidth(simpleVideo);if(targetAsset)return logger.info('targetAsset',attrs.videoQuality),targetAsset}return screencastAsset(simpleVideo)},bestFullscreenAsset=function bestFullscreenAsset(simpleVideo){return simpleVideo.attributes.supportsHd?(logger.info('supportsHd=true'),bestFullscreenHdAsset(simpleVideo)):(logger.info('supportsHd=false'),bestFullscreenNonHdAsset(simpleVideo))},bestFullscreenHdAsset=function bestFullscreenHdAsset(simpleVideo){return hdAsset(simpleVideo)||bandwidthBasedAsset(simpleVideo)||mdAsset(simpleVideo)||sdAsset(simpleVideo)},bestFullscreenNonHdAsset=function bestFullscreenNonHdAsset(simpleVideo){return bandwidthBasedAsset(simpleVideo)||mdOrSdAsset(simpleVideo)},isTargetingExactWidth=function isTargetingExactWidth(videoQuality){return /width:/.test(videoQuality)},bestHdOnlyAsset=function bestHdOnlyAsset(simpleVideo){return hdAsset(simpleVideo)||mdAsset(simpleVideo)||sdAsset(simpleVideo)},bestMdAsset=function bestMdAsset(simpleVideo){return mdAsset(simpleVideo)||sdAsset(simpleVideo)},bestLowFpsAsset=function bestLowFpsAsset(simpleVideo){return lowFpsAsset(simpleVideo)||sdAsset(simpleVideo)},mdOrSdAsset=function mdOrSdAsset(simpleVideo){return cacheable(simpleVideo,'md_or_sd',function(){var attrs=simpleVideo.attributes;return'sd-only'===attrs.videoQuality?sdAsset(simpleVideo):'md'===attrs.videoQuality||720<=simpleVideo.attributes.width?mdAsset(simpleVideo)||sdAsset(simpleVideo):sdAsset(simpleVideo)})},screencastAsset=function screencastAsset(simpleVideo){return cacheable(simpleVideo,'screencast',function(){return Assets.playable(webPlayable(simpleVideo),{bitrate:[0,1300],sortBy:'width desc, bitrate asc',width:[0,originalAsset(simpleVideo).width]})})},qualityOptions=function qualityOptions(simpleVideo){var attrs=simpleVideo.attributes;return{qualityMin:attrs.qualityMin,qualityMax:attrs.qualityMax}},playableAsset=function playableAsset(simpleVideo,options){return Assets.playable(webPlayable(simpleVideo),options)},iphoneAsset=function iphoneAsset(simpleVideo,options){return Assets.iphone(webPlayable(simpleVideo),options)},iphoneAssetInRange=function iphoneAssetInRange(simpleVideo){return Assets.iphone(webPlayable(simpleVideo),qualityOptions(simpleVideo))},mp4AssetInRange=function mp4AssetInRange(simpleVideo){return Assets.mp4(webPlayable(simpleVideo),qualityOptions(simpleVideo))},playableAssetInRange=function playableAssetInRange(simpleVideo,options){return playableAsset(simpleVideo,Obj.assign(qualityOptions(simpleVideo),options))},sdAsset=function sdAsset(simpleVideo){return cacheable(simpleVideo,'sd_asset',function(){return iphoneAssetInRange(simpleVideo)||mp4AssetInRange(simpleVideo)||iphoneAsset(simpleVideo)||playableAsset(simpleVideo)})},mdAsset=function mdAsset(simpleVideo){return cacheable(simpleVideo,'md_asset',function(){return playableAssetInRange(simpleVideo,{width:[720,980],sortBy:'width desc, bitrate desc'})})},hdAsset=function hdAsset(simpleVideo){return cacheable(simpleVideo,'hd_asset',function(){return playableAssetInRange(simpleVideo,{width:[980,simpleVideo.attributes.maxHdWidth||2e3],sortBy:'width desc, bitrate desc'})})},originalAsset=function originalAsset(simpleVideo){return cacheable(simpleVideo,'original',function(){return Assets.original(simpleVideo.allAssets)})},bandwidthBasedAsset=function bandwidthBasedAsset(simpleVideo){var attrs=simpleVideo.attributes;return null==attrs.savedBandwidth?null:playableAssetInRange(simpleVideo,{bitrate:[0,attrs.savedBandwidth],width:[0,attrs.maxHdWidth||2e3],sortBy:'width desc, bitrate desc'})||mdOrSdAsset(simpleVideo)},targetAssetArgs=function targetAssetArgs(videoQuality){if(!isTargetingExactWidth(videoQuality))return{};var matches=videoQuality.match(/width:([a-z]*)(\d+)/i),op=matches[1],val=matches[2];return /^\d+$/.test(val)?(val=parseInt(val,10),''===op&&(op='lte'),{op:op,val:val}):{}},closestAssetToTargetWidth=function closestAssetToTargetWidth(simpleVideo){var _targetAssetArgs=targetAssetArgs(simpleVideo.attributes.videoQuality),op=_targetAssetArgs.op,val=_targetAssetArgs.val;return'lte'===op?playableAsset(simpleVideo,{width:[0,val],sortBy:'width desc'})||playableAsset(simpleVideo,{width:[val,1e4],sortBy:'width asc'}):'gte'===op?playableAsset(simpleVideo,{width:[val,1e4],sortBy:'width asc'})||playableAsset(simpleVideo,{width:[0,val],sortBy:'width desc'}):null},lowFpsAsset=function lowFpsAsset(simpleVideo){return cacheable(simpleVideo,'low_fps_asset',function(){return Assets.mp4(webPlayable(simpleVideo),{public:!1})})},isScreencast=function isScreencast(simpleVideo){return cacheable(simpleVideo,'is_screencast',function(){return Assets.isScreencast(webPlayable(simpleVideo))&&!!screencastAsset(simpleVideo)})},webPlayable=function webPlayable(simpleVideo){var assets=simpleVideo.allAssets,detect=simpleVideo.attributes.detect||cachedDetect();return detect.browser.msie?Assets.filter(assets,{height:[0,1080]}):assets},uncache=function uncache(simpleVideo){uncacheNamespace('asset_selection',simpleVideo)};;
;

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PUBLIC_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delegateMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return delegatePublicMethods; });
var PUBLIC_METHODS=['activeBufferRange','anyBuffered','bind','bindNamed','bufferInfo','canPlay','canPlaySilently','canPlayWithSound','cancelFullscreen','captureCurrentFrame','changeQuality','changeStream','changeStreamWithoutLoad','changeVideo','currentAsset','defaultAsset','destroy','diagnosticData','eventContext','fit','getCurrentQuality','getCurrentTime','getDuration','getPlaybackMode','getPlaybackRate','getPreload','getState','getTrim','getVolume','isChangingVideo','isInFullscreen','isMuted','isSeeking','isSourceOfBrowserEvent','lastBufferedTime','mute','onEnterFullscreen','onHeightChange','onLeaveFullscreen','onPlayed','onReady','onWidthChange','pause','play','requestFullscreen','reset','seek','seekOnPlay','selectedAsset','selectableAssets','selectableQualities','selectedQuality','sequentialBufferedRange','setAttributes','setCurrentTime','setPlaybackRate','setTrim','setVolume','showFirstFrame','stopStreaming','timeBeforeEndOfBuffer','totalBuffered','totalPlayed','trigger','unbind','unbindNamed','unbindAllInNamespace','unmute','videoElem'];var delegateMethods=function delegateMethods(methods,objectPrototype,objectFn){for(var methodName,i=0;i<methods.length;i++)methodName=methods[i],objectPrototype[methodName]||function(methodName){objectPrototype[methodName]=function(){var theObject=objectFn.call(this);return theObject?theObject[methodName].apply(theObject,arguments):null}}(methodName)};var delegatePublicMethods=function delegatePublicMethods(objectPrototype,objectFn){delegateMethods(PUBLIC_METHODS,objectPrototype,objectFn)};;
;

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_player_engines_manual_quality_video_index_js__ = __webpack_require__(153);
__WEBPACK_IMPORTED_MODULE_0_wistia_namespace_js__["default"].define('engines/manual_quality_video.js',__WEBPACK_IMPORTED_MODULE_1_player_engines_manual_quality_video_index_js__["default"]);;
;

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var root;try{root=(0,eval)('this')}catch(err){try{root=self}catch(err){root=global}}/* harmony default export */ __webpack_exports__["a"] = (root);;
;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ })

/******/ });