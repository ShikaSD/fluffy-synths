webpackJsonp([1],{"56To":function(e,t){},"75rR":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i=n("gRE1"),r=n.n(i),s=n("ifoU"),o=n.n(s),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"white-key",class:{active:e.active}},[n("div",{staticClass:"content"},[e._v("\n    "+e._s(e.config.keyboardLetter.toUpperCase())+"\n    "),n("br"),e._v("\n    "+e._s(e.config.note+(e.octave+e.config.relativeOctave))+"\n  ")])])},staticRenderFns:[]};var u=n("VU/8")({props:["config","octave","active"]},c,!1,function(e){n("ieMb")},"data-v-1e0f8f40",null).exports,l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"black-key"},[n("div",{staticClass:"wrapper",class:{active:e.active}},[n("div",{staticClass:"content"},[e._v("\n      "+e._s(e.config.keyboardLetter.toUpperCase())+"\n      "),n("br"),e._v("\n      "+e._s(e.config.note+(e.octave+e.config.relativeOctave))+"\n    ")])])])},staticRenderFns:[]};var d=n("VU/8")({props:["config","octave","active"]},l,!1,function(e){n("WA+w")},"data-v-7ff2479d",null).exports,v={white:{65:{note:"C",relativeOctave:0,semiTones:-9,keyboardLetter:"a",index:0},83:{note:"D",relativeOctave:0,semiTones:-7,keyboardLetter:"s",index:2},68:{note:"E",relativeOctave:0,semiTones:-5,keyboardLetter:"d",index:4},70:{note:"F",relativeOctave:0,semiTones:-4,keyboardLetter:"f",index:5},71:{note:"G",relativeOctave:0,semiTones:-2,keyboardLetter:"g",index:7},72:{note:"A",relativeOctave:0,semiTones:0,keyboardLetter:"h",index:9},74:{note:"B",relativeOctave:0,semiTones:2,keyboardLetter:"j",index:11},75:{note:"C",relativeOctave:1,semiTones:-9,keyboardLetter:"k",index:12},76:{note:"D",relativeOctave:1,semiTones:-7,keyboardLetter:"l",index:14},186:{note:"E",relativeOctave:1,semiTones:-5,keyboardLetter:";",index:16}},black:{87:{note:"C#",relativeOctave:0,semiTones:-8,keyboardLetter:"w",index:1},69:{note:"D#",relativeOctave:0,semiTones:-6,keyboardLetter:"e",index:3},84:{note:"F#",relativeOctave:0,semiTones:-3,keyboardLetter:"t",index:6},89:{note:"G#",relativeOctave:0,semiTones:-1,keyboardLetter:"y",index:8},85:{note:"A#",relativeOctave:0,semiTones:1,keyboardLetter:"u",index:10},79:{note:"C#",relativeOctave:1,semiTones:-8,keyboardLetter:"o",index:13},80:{note:"D#",relativeOctave:1,semiTones:-6,keyboardLetter:"p",index:15}}},p=function(e,t){var n=12*(t+e.relativeOctave-4)+e.semiTones;return 440*Math.pow(2,n/12)},m=n("NYxO"),f=new o.a;function _(e,t){f.set(e,t)}function h(e,t){var n=f.get(e),a=f.get(t);n.output().connect(a.input())}function y(e){return f.get(e)}var k={playNote:function(e,t){e.inputs.forEach(function(e){return y(e).playNote(t)})},stopNote:function(e,t){e.inputs.forEach(function(e){return y(e).stopNote(t)})},adsr:function(e,t){y(t.id).params({adsr:{attack:.01*t.attack*3+1e-30,decay:.01*t.decay*3+1e-30,sustain:.01*t.sustain+1e-30,release:.01*t.release*3+1e-30}})},osc:function(e,t){y(t.id).params({oscillator:{type:t.type}})},volume:function(e,t){y(t.id).params({volume:.01*t.volume+1e-30})},detune:function(e,t){y(t.id).params({oscillator:{detune:2400*(.01*t.detune-.5)}})},filter:function(e,t){y(t.id).params({filter:{type:t.type,frequency:Math.pow(1.28,t.frequency),resonance:.1*t.resonance+1}})}};a.a.use(m.a);var g=new m.a.Store({state:{inputs:[]},mutations:k}),w={components:{whiteKey:u,blackKey:d},created:function(){this.registerKeyboardListeners(),this.activeConfigCache=new o.a},destroyed:function(){this.unregisterKeyboardListeners()},data:function(){return{keys:v,activeKeys:[],octave:4}},computed:{keyConfigs:function(){return r()(this.keys.white).concat(r()(this.keys.black)).sort(function(e,t){return e.index-t.index})}},methods:{isWhiteKey:function(e){return r()(this.keys.white).includes(e)},isBlackKey:function(e){return r()(this.keys.black).includes(e)},registerKeyboardListeners:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),window.addEventListener("keypress",this.switchOctave)},keyDown:function(e){var t=this.keys.white[e.keyCode]||this.keys.black[e.keyCode];if(t&&!this.activeKeys.includes(t)){this.activeKeys.push(t);var n=p(t,this.octave);this.activeConfigCache.set(t,n),g.commit("playNote",n)}},keyUp:function(e){var t=this.keys.white[e.keyCode]||this.keys.black[e.keyCode];if(t&&this.activeKeys.includes(t)){this.activeKeys=this.activeKeys.filter(function(e){return e!==t});var n=this.activeConfigCache.get(t)||p(t,this.octave);this.activeConfigCache.delete(t),g.commit("stopNote",n)}},switchOctave:function(e){var t=void 0;switch(e.keyCode){case 90:case 122:t=-1;break;case 88:case 120:t=1;break;default:t=0}this.octave+=t},unregisterKeyboardListeners:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),window.removeEventListener("keypress",this.switchOctave)}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keyboard"},e._l(e.keyConfigs,function(t){return n("div",{key:t.index,staticClass:"key"},[e.isWhiteKey(t)?n("white-key",{attrs:{active:e.activeKeys.includes(t),config:t,octave:e.octave}}):e._e(),e._v(" "),e.isBlackKey(t)?n("black-key",{attrs:{active:e.activeKeys.includes(t),config:t,octave:e.octave}}):e._e()],1)}))},staticRenderFns:[]};var b=n("VU/8")(w,x,!1,function(e){n("yg1u")},"data-v-1db701de",null).exports,C={props:["id"],data:function(){return{type:"sine"}},watch:{type:function(e){g.commit("osc",this)}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"oscillator"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.type=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"sine"}},[e._v("sine")]),e._v(" "),n("option",{attrs:{value:"sawtooth"}},[e._v("sawtooth")]),e._v(" "),n("option",{attrs:{value:"square"}},[e._v("square")]),e._v(" "),n("option",{attrs:{value:"triangle"}},[e._v("triangle")])])])},staticRenderFns:[]},P=n("VU/8")(C,T,!1,null,null,null).exports,R={props:["id"],data:function(){return{attack:0,decay:0,sustain:100,release:0}},watch:{attack:function(e){g.commit("adsr",this)},decay:function(e){g.commit("adsr",this)},sustain:function(e){g.commit("adsr",this)},release:function(e){g.commit("adsr",this)}}},L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"adsr"},[n("div",{staticClass:"input"},[n("label",{attrs:{for:"attack"}},[e._v("Attack")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.attack,expression:"attack"}],attrs:{name:"attack",type:"range",min:"0",max:"100"},domProps:{value:e.attack},on:{__r:function(t){e.attack=t.target.value}}})]),e._v(" "),n("div",{staticClass:"input"},[n("label",{attrs:{for:"decay"}},[e._v("Decay")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.decay,expression:"decay"}],attrs:{name:"decay",type:"range",min:"0",max:"100"},domProps:{value:e.decay},on:{__r:function(t){e.decay=t.target.value}}})]),e._v(" "),n("div",{staticClass:"input"},[n("label",{attrs:{for:"sustain"}},[e._v("Sustain")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sustain,expression:"sustain"}],attrs:{name:"sustain",type:"range",min:"0",max:"100"},domProps:{value:e.sustain},on:{__r:function(t){e.sustain=t.target.value}}})]),e._v(" "),n("div",{staticClass:"input"},[n("label",{attrs:{for:"release"}},[e._v("Release")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.release,expression:"release"}],attrs:{name:"release",type:"range",min:"0",max:"100"},domProps:{value:e.release},on:{__r:function(t){e.release=t.target.value}}})])])},staticRenderFns:[]};var O=n("VU/8")(R,L,!1,function(e){n("bYi5")},"data-v-19f4a8e2",null).exports,q={props:["id"],data:function(){return{volume:100}},watch:{volume:function(e){g.commit("volume",this)}}},A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"volume"},[n("label",{attrs:{for:"volume"}},[e._v("Volume")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.volume},on:{__r:function(t){e.volume=t.target.value}}})])},staticRenderFns:[]},E=n("VU/8")(q,A,!1,null,null,null).exports,N={props:["id"],data:function(){return{detune:50}},watch:{detune:function(e){g.commit("detune",this)}}},U={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"detune"},[n("label",{attrs:{for:"detune"}},[e._v("Detune")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.detune,expression:"detune"}],attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.detune},on:{__r:function(t){e.detune=t.target.value}}})])},staticRenderFns:[]},z=n("VU/8")(N,U,!1,null,null,null).exports,F={props:["id"],data:function(){return{type:"lowpass",frequency:9,resonance:0}},watch:{type:function(e){g.commit("filter",this)},frequency:function(e){g.commit("filter",this)},resonance:function(e){g.commit("filter",this)}}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{name:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.type=t.target.multiple?n:n[0]}}},[n("option",[e._v("highpass")]),e._v(" "),n("option",[e._v("lowpass")])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.frequency,expression:"frequency"}],attrs:{name:"frequency",type:"range",min:"0",max:"40"},domProps:{value:e.frequency},on:{__r:function(t){e.frequency=t.target.value}}}),e._v(" "),n("br"),e._v(" "),n("label",{attrs:{for:"resonance"}},[e._v("Resonance")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.resonance,expression:"resonance"}],attrs:{name:"resonance",type:"range",min:"0",max:"100"},domProps:{value:e.resonance},on:{__r:function(t){e.resonance=t.target.value}}})])},staticRenderFns:[]};var K=n("VU/8")(F,V,!1,function(e){n("lQ8e")},null,null).exports,$=n("woOf"),D=n.n($),S=n("Zx67"),M=n.n(S),B=n("Zrlr"),W=n.n(B),G=n("wxAW"),Y=n.n(G),H=n("zwoO"),J=n.n(H),Q=n("Pf15"),j=n.n(Q),Z=new AudioContext,X=function(){function e(){W()(this,e),this.context=Z,this._params={}}return Y()(e,[{key:"params",value:function(e){this._params=D()(this._params,e),this._updateParams()}},{key:"_updateParams",value:function(){}}]),e}(),I=function(e){function t(){W()(this,t);var e=J()(this,(t.__proto__||M()(t)).call(this));return e._output=null,e}return j()(t,e),Y()(t,[{key:"output",value:function(){return this._output}}]),t}(X),ee=function(e){function t(){W()(this,t);var e=J()(this,(t.__proto__||M()(t)).call(this));return e._input=null,e}return j()(t,e),Y()(t,[{key:"input",value:function(){return this._input}}]),t}(X),te=function(e){function t(){W()(this,t);var e=J()(this,(t.__proto__||M()(t)).call(this));return e._input=null,e._output=null,e}return j()(t,e),Y()(t,[{key:"input",value:function(){return this._input}},{key:"output",value:function(){return this._output}}]),t}(I),ne=function(e){function t(e){W()(this,t);var n=J()(this,(t.__proto__||M()(t)).call(this));return n._oscillator=n.context.createOscillator(),n._oscillator.start(),n._output=n._oscillator,n._params=D()({type:"sine",frequency:440,detune:0},e),n._updateParams(),n}return j()(t,e),Y()(t,[{key:"stop",value:function(e){this._oscillator.stop(e)}},{key:"_updateParams",value:function(){this._oscillator.type=this._params.type,this._oscillator.frequency.value=this._params.frequency,this._oscillator.detune.value=this._params.detune}}]),t}(I),ae=1e-20,ie=function(e){function t(e){W()(this,t);var n=J()(this,(t.__proto__||M()(t)).call(this));return n._node=n.context.createGain(),n._node.gain.value=ae,n._node.gain.linearRampToValueAtTime(1,n.context.currentTime+e.attack),n._node.gain.linearRampToValueAtTime(e.sustain,n.context.currentTime+e.attack+e.decay),n._input=n._node,n._output=n._node,n._params=e,n}return j()(t,e),Y()(t,[{key:"stop",value:function(e){var t=(e=Math.max(ae,e))+this._params.release;return this._node.gain.cancelAndHoldAtTime(e),this._node.gain.linearRampToValueAtTime(ae,t),t}}]),t}(te),re=function(e){function t(){W()(this,t);var e=J()(this,(t.__proto__||M()(t)).call(this));return e._node=e.context.createGain(),e._input=e._node,e._output=e._node,e._params={volume:1},e._updateParams(),e}return j()(t,e),Y()(t,[{key:"_updateParams",value:function(){this._node.gain.value=this._params.volume}}]),t}(te),se=function(e){function t(e){W()(this,t);var n=J()(this,(t.__proto__||M()(t)).call(this));return n._node=n.context.createBiquadFilter(),n._input=n._node,n._output=n._node,n._params=D()(e,{frequency:.1,type:"highpass",resonance:1}),n._updateParams(),n}return j()(t,e),Y()(t,[{key:"_updateParams",value:function(){this._node.Q.exponentialRampToValueAtTime(this._params.resonance,this.context.currentTime+.1),this._node.frequency.exponentialRampToValueAtTime(this._params.frequency,this.context.currentTime+.1),this._node.type=this._params.type}}]),t}(te),oe=function(e){function t(e){W()(this,t);var n=J()(this,(t.__proto__||M()(t)).call(this));return n._params=D()({volume:1,oscillator:{type:"sine",frequency:440},adsr:{attack:1e-30,sustain:1,decay:1e-30,release:1e-30},filter:{type:"lowpass",frequency:.1}},e),n._filter=new se(n._params.filter),n._volume=new re,n._filter.output().connect(n._volume.input()),n._voices=new o.a,n._updateParams(),n._output=n._volume.output(),n}return j()(t,e),Y()(t,[{key:"playNote",value:function(e){if(!this._voices.get(e)){var t=new ne(D()(this._params.oscillator,{frequency:e})),n=new ie(this._params.adsr);t.output().connect(n.input()),n.output().connect(this._filter.input()),this._voices.set(e,{oscillator:t,adsr:n})}}},{key:"stopNote",value:function(e){var t=this._voices.get(e);if(t){var n=t.oscillator,a=t.adsr,i=a.stop(this.context.currentTime);n.stop(i+1),n.output().onended=function(){a.output().disconnect(),n.output().disconnect()},this._voices.delete(e)}}},{key:"params",value:function(e){var t=D()(this._params.oscillator,e.oscillator),n=D()(this._params.adsr,e.adsr),a=D()(this._params.filter,e.filter);this._params=D()(this._params,e),this._params.adsr=n,this._params.oscillator=t,this._params.filter=a,this._updateParams()}},{key:"_updateParams",value:function(){this._volume.params(this._params),this._filter.params(this._params.filter)}}]),t}(I),ce={props:["id"],components:{Oscillator:P,Adsr:O,Volume:E,Detune:z,BiquadFilter:K},created:function(){_(this.id,new oe),g.state.inputs.push(this.id)},destroyed:function(){}},ue={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"voice"},[n("oscillator",{attrs:{id:e.id}}),e._v(" "),n("adsr",{attrs:{id:e.id}}),e._v(" "),n("biquad-filter",{attrs:{id:e.id}}),e._v(" "),n("volume",{attrs:{id:e.id}}),e._v(" "),n("detune",{attrs:{id:e.id}})],1)},staticRenderFns:[]},le=n("VU/8")(ce,ue,!1,null,null,null).exports;var de={props:["analyzer"],data:function(){return{shouldUpdate:!0}},mounted:function(){this.draw()},beforeDestroy:function(){this.shouldUpdate=!1},methods:{draw:function(){var e=this,t=this.$el.querySelector("canvas");!function(e){var t=e.getContext("2d"),n=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1),a=e.width,i=e.height;e.width=a*n,e.height=i*n,e.style.width=a+"px",e.style.height=i+"px"}(t);var n=t.getContext("2d"),a=new Float32Array(this.analyzer.fftSize),i=new Float32Array(this.analyzer.fftSize);!function r(){requestAnimationFrame(r),e.shouldUpdate&&(e.analyzer.getFloatTimeDomainData(a),function(e,t,n,a,i){e.clearRect(0,0,t,n),e.lineWidth=2,e.strokeStyle="#000000",e.beginPath();for(var r=1*t/a.length,s=0,o=0;o<a.length;o++){var c=10*a[o]+n/2;0===o?e.moveTo(s,c):e.lineTo(s,c),s+=r}e.stroke()}(n,t.width,t.height,a),i.set(a))}()}}},ve={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"analyzer"},[t("canvas",{attrs:{width:"300",height:"150"}})])}]};var pe=n("VU/8")(de,ve,!1,function(e){n("56To")},"data-v-1f76144f",null).exports,me={data:function(){return{shouldUpdate:!0,x:150,y:75}},mounted:function(){this.draw()},beforeDestroy:function(){this.shouldUpdate=!1},methods:{captureCoordinates:function(e){this.x=e.offsetX,this.y=e.offsetY},draw:function(){var e=this,t=this.$el.querySelector("canvas"),n=t.getContext("2d"),a=t.width,i=t.height;!function t(){if(requestAnimationFrame(t),e.shouldUpdate){n.clearRect(0,0,a,i);var r=Math.min(a,Math.max(0,e.x)),s=Math.min(i,Math.max(0,e.y));n.lineWidth=2,n.strokeStyle="#000000",n.beginPath(),n.moveTo(0,i),n.lineTo(r,s),n.lineTo(a,i),n.stroke()}}()}}},fe={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"envelope"},[t("canvas",{attrs:{width:"300",height:"150"},on:{mousemove:this.captureCoordinates}})])},staticRenderFns:[]};var _e=n("VU/8")(me,fe,!1,function(e){n("75rR")},null,null).exports;_("master",new(function(e){function t(){W()(this,t);var e=J()(this,(t.__proto__||M()(t)).call(this));return e._gainNode=e.context.createGain(),e._analyzer=e.context.createAnalyser(),e._gainNode.connect(e._analyzer),e._analyzer.connect(e.context.destination),e._input=e._gainNode,e._params={volume:1},e._updateParams(),e}return j()(t,e),Y()(t,[{key:"analyzer",value:function(){return this._analyzer}},{key:"_updateParams",value:function(){this._gainNode.gain.value=this._params.volume}}]),t}(ee)));var he={components:{Keyboard:b,Voice:le,Analyzer:pe,Envelope:_e},computed:{analyzer:function(){return y("master").analyzer()}},mounted:function(){h("voice1","master"),h("voice2","master"),h("voice3","master")}},ye={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("keyboard"),this._v(" "),t("div",{staticClass:"modules"},[t("div",{staticClass:"module"},[t("voice",{attrs:{id:"voice1"}})],1),this._v(" "),t("div",{staticClass:"module"},[t("voice",{attrs:{id:"voice2"}})],1),this._v(" "),t("div",{staticClass:"module"},[t("voice",{attrs:{id:"voice3"}})],1),this._v(" "),t("div",{staticClass:"module"},[t("analyzer",{attrs:{analyzer:this.analyzer}})],1),this._v(" "),t("div",{staticClass:"module"},[t("envelope")],1)])],1)},staticRenderFns:[]};var ke=n("VU/8")(he,ye,!1,function(e){n("dzaJ")},"data-v-4de32770",null).exports;new a.a({el:"#main",template:"<App/>",components:{App:ke}})},"WA+w":function(e,t){},bYi5:function(e,t){},dzaJ:function(e,t){},ieMb:function(e,t){},lQ8e:function(e,t){},yg1u:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9f8ac816835ce6b42be0.js.map