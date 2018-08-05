webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i=a("gRE1"),s=a.n(i),r=a("ifoU"),o=a.n(r),c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"white-key",class:{active:e.active}},[a("div",{staticClass:"content"},[e._v("\n    "+e._s(e.config.keyboardLetter.toUpperCase())+"\n    "),a("br"),e._v("\n    "+e._s(e.config.note+(e.octave+e.config.relativeOctave))+"\n  ")])])},staticRenderFns:[]};var u=a("VU/8")({props:["config","octave","active"]},c,!1,function(e){a("ieMb")},"data-v-1e0f8f40",null).exports,l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"black-key"},[a("div",{staticClass:"wrapper",class:{active:e.active}},[a("div",{staticClass:"content"},[e._v("\n      "+e._s(e.config.keyboardLetter.toUpperCase())+"\n      "),a("br"),e._v("\n      "+e._s(e.config.note+(e.octave+e.config.relativeOctave))+"\n    ")])])])},staticRenderFns:[]};var d=a("VU/8")({props:["config","octave","active"]},l,!1,function(e){a("WA+w")},"data-v-7ff2479d",null).exports,v={white:{65:{note:"C",relativeOctave:0,semiTones:-9,keyboardLetter:"a",index:0},83:{note:"D",relativeOctave:0,semiTones:-7,keyboardLetter:"s",index:2},68:{note:"E",relativeOctave:0,semiTones:-5,keyboardLetter:"d",index:4},70:{note:"F",relativeOctave:0,semiTones:-4,keyboardLetter:"f",index:5},71:{note:"G",relativeOctave:0,semiTones:-2,keyboardLetter:"g",index:7},72:{note:"A",relativeOctave:0,semiTones:0,keyboardLetter:"h",index:9},74:{note:"B",relativeOctave:0,semiTones:2,keyboardLetter:"j",index:11},75:{note:"C",relativeOctave:1,semiTones:-9,keyboardLetter:"k",index:12},76:{note:"D",relativeOctave:1,semiTones:-7,keyboardLetter:"l",index:14},186:{note:"E",relativeOctave:1,semiTones:-5,keyboardLetter:";",index:16}},black:{87:{note:"C#",relativeOctave:0,semiTones:-8,keyboardLetter:"w",index:1},69:{note:"D#",relativeOctave:0,semiTones:-6,keyboardLetter:"e",index:3},84:{note:"F#",relativeOctave:0,semiTones:-3,keyboardLetter:"t",index:6},89:{note:"G#",relativeOctave:0,semiTones:-1,keyboardLetter:"y",index:8},85:{note:"A#",relativeOctave:0,semiTones:1,keyboardLetter:"u",index:10},79:{note:"C#",relativeOctave:1,semiTones:-8,keyboardLetter:"o",index:13},80:{note:"D#",relativeOctave:1,semiTones:-6,keyboardLetter:"p",index:15}}},m=function(e,t){var a=12*(t+e.relativeOctave-4)+e.semiTones;return 440*Math.pow(2,a/12)},p=a("NYxO"),_=new o.a;function h(e,t){_.set(e,t)}function f(e,t){var a=_.get(e),n=_.get(t);a.output().connect(n.input())}function y(e){return _.get(e)}var k={playNote:function(e,t){e.inputs.forEach(function(e){return y(e).playNote(t)})},stopNote:function(e,t){e.inputs.forEach(function(e){return y(e).stopNote(t)})},adsr:function(e,t){y(t.id).params({adsr:{attack:.01*t.attack*3+1e-30,decay:.01*t.decay*3+1e-30,sustain:.01*t.sustain+1e-30,release:.01*t.release*3+1e-30}})},osc:function(e,t){y(t.id).params({oscillator:{type:t.type}})},volume:function(e,t){y(t.id).params({volume:.01*t.volume})},detune:function(e,t){console.log(t.detune,1200*(.01*t.detune-.5)),y(t.id).params({oscillator:{detune:2400*(.01*t.detune-.5)}})}};n.a.use(p.a);var w=new p.a.Store({state:{inputs:[]},mutations:k}),g={components:{whiteKey:u,blackKey:d},created:function(){this.registerKeyboardListeners(),this.activeConfigCache=new o.a},destroyed:function(){this.unregisterKeyboardListeners()},data:function(){return{keys:v,activeKeys:[],octave:4}},computed:{keyConfigs:function(){return s()(this.keys.white).concat(s()(this.keys.black)).sort(function(e,t){return e.index-t.index})}},methods:{isWhiteKey:function(e){return s()(this.keys.white).includes(e)},isBlackKey:function(e){return s()(this.keys.black).includes(e)},registerKeyboardListeners:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),window.addEventListener("keypress",this.switchOctave)},keyDown:function(e){var t=this.keys.white[e.keyCode]||this.keys.black[e.keyCode];if(t&&!this.activeKeys.includes(t)){this.activeKeys.push(t);var a=m(t,this.octave);this.activeConfigCache.set(t,a),w.commit("playNote",a)}},keyUp:function(e){var t=this.keys.white[e.keyCode]||this.keys.black[e.keyCode];if(t&&this.activeKeys.includes(t)){this.activeKeys=this.activeKeys.filter(function(e){return e!==t});var a=this.activeConfigCache.get(t)||m(t,this.octave);this.activeConfigCache.delete(t),w.commit("stopNote",a)}},switchOctave:function(e){var t=void 0;switch(e.keyCode){case 90:case 122:t=-1;break;case 88:case 120:t=1;break;default:t=0}this.octave+=t},unregisterKeyboardListeners:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),window.removeEventListener("keypress",this.switchOctave)}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"keyboard"},e._l(e.keyConfigs,function(t){return a("div",{key:t.index,staticClass:"key"},[e.isWhiteKey(t)?a("white-key",{attrs:{active:e.activeKeys.includes(t),config:t,octave:e.octave}}):e._e(),e._v(" "),e.isBlackKey(t)?a("black-key",{attrs:{active:e.activeKeys.includes(t),config:t,octave:e.octave}}):e._e()],1)}))},staticRenderFns:[]};var b=a("VU/8")(g,x,!1,function(e){a("yg1u")},"data-v-1db701de",null).exports,C={props:["id"],data:function(){return{type:"sine"}},watch:{type:function(e){w.commit("osc",this)}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"oscillator"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.type=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"sine"}},[e._v("sine")]),e._v(" "),a("option",{attrs:{value:"sawtooth"}},[e._v("sawtooth")]),e._v(" "),a("option",{attrs:{value:"square"}},[e._v("square")]),e._v(" "),a("option",{attrs:{value:"triangle"}},[e._v("triangle")])])])},staticRenderFns:[]},O=a("VU/8")(C,T,!1,null,null,null).exports,L={props:["id"],data:function(){return{attack:0,decay:0,sustain:100,release:0}},watch:{attack:function(e){w.commit("adsr",this)},decay:function(e){w.commit("adsr",this)},sustain:function(e){w.commit("adsr",this)},release:function(e){w.commit("adsr",this)}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"adsr"},[a("div",{staticClass:"input"},[a("label",{attrs:{for:"attack"}},[e._v("Attack")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.attack,expression:"attack"}],attrs:{name:"attack",type:"range",min:"0",max:"100"},domProps:{value:e.attack},on:{__r:function(t){e.attack=t.target.value}}})]),e._v(" "),a("div",{staticClass:"input"},[a("label",{attrs:{for:"decay"}},[e._v("Decay")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.decay,expression:"decay"}],attrs:{name:"decay",type:"range",min:"0",max:"100"},domProps:{value:e.decay},on:{__r:function(t){e.decay=t.target.value}}})]),e._v(" "),a("div",{staticClass:"input"},[a("label",{attrs:{for:"sustain"}},[e._v("Sustain")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sustain,expression:"sustain"}],attrs:{name:"sustain",type:"range",min:"0",max:"100"},domProps:{value:e.sustain},on:{__r:function(t){e.sustain=t.target.value}}})]),e._v(" "),a("div",{staticClass:"input"},[a("label",{attrs:{for:"release"}},[e._v("Release")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.release,expression:"release"}],attrs:{name:"release",type:"range",min:"0",max:"100"},domProps:{value:e.release},on:{__r:function(t){e.release=t.target.value}}})])])},staticRenderFns:[]};var N=a("VU/8")(L,E,!1,function(e){a("mJgm")},"data-v-6ac98832",null).exports,A={props:["id"],data:function(){return{volume:100}},watch:{volume:function(e){w.commit("volume",this)}}},z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"volume"},[a("label",{attrs:{for:"volume"}},[e._v("Volume")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.volume},on:{__r:function(t){e.volume=t.target.value}}})])},staticRenderFns:[]},K=a("VU/8")(A,z,!1,null,null,null).exports,P={props:["id"],data:function(){return{detune:50}},watch:{detune:function(e){w.commit("detune",this)}}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detune"},[a("label",{attrs:{for:"detune"}},[e._v("Detune")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.detune,expression:"detune"}],attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.detune},on:{__r:function(t){e.detune=t.target.value}}})])},staticRenderFns:[]},F=a("VU/8")(P,U,!1,null,null,null).exports,R=a("woOf"),V=a.n(R),D=a("Zx67"),$=a.n(D),q=a("Zrlr"),S=a.n(q),W=a("wxAW"),G=a.n(W),M=a("zwoO"),B=a.n(M),H=a("Pf15"),J=a.n(H),j=new AudioContext,Z=function(){function e(){S()(this,e),this.context=j,this._params={}}return G()(e,[{key:"params",value:function(e){this._params=V()(this._params,e),this._updateParams()}},{key:"_updateParams",value:function(){}}]),e}(),Y=function(e){function t(){S()(this,t);var e=B()(this,(t.__proto__||$()(t)).call(this));return e._output=null,e}return J()(t,e),G()(t,[{key:"output",value:function(){return this._output}}]),t}(Z),I=function(e){function t(){S()(this,t);var e=B()(this,(t.__proto__||$()(t)).call(this));return e._input=null,e}return J()(t,e),G()(t,[{key:"input",value:function(){return this._input}}]),t}(Z),Q=function(e){function t(){S()(this,t);var e=B()(this,(t.__proto__||$()(t)).call(this));return e._input=null,e._output=null,e}return J()(t,e),G()(t,[{key:"input",value:function(){return this._input}},{key:"output",value:function(){return this._output}}]),t}(Y),X=function(e){function t(e){S()(this,t);var a=B()(this,(t.__proto__||$()(t)).call(this));return a._oscillator=a.context.createOscillator(),a._oscillator.start(),a._output=a._oscillator,a._params=V()({type:"sine",frequency:440,detune:0},e),a._updateParams(),a}return J()(t,e),G()(t,[{key:"stop",value:function(e){this._oscillator.stop(e)}},{key:"_updateParams",value:function(){this._oscillator.type=this._params.type,this._oscillator.frequency.value=this._params.frequency,this._oscillator.detune.value=this._params.detune}}]),t}(Y),ee=1e-20,te=function(e){function t(e){S()(this,t);var a=B()(this,(t.__proto__||$()(t)).call(this));return a._node=a.context.createGain(),a._node.gain.value=ee,a._node.gain.linearRampToValueAtTime(1,a.context.currentTime+e.attack),a._node.gain.linearRampToValueAtTime(e.sustain,a.context.currentTime+e.attack+e.decay),a._input=a._node,a._output=a._node,a._params=e,a}return J()(t,e),G()(t,[{key:"stop",value:function(e){var t=(e=Math.max(ee,e))+this._params.release;return this._node.gain.cancelAndHoldAtTime(e),this._node.gain.linearRampToValueAtTime(ee,t),t}}]),t}(Q),ae=function(e){function t(){S()(this,t);var e=B()(this,(t.__proto__||$()(t)).call(this));return e._node=e.context.createGain(),e._input=e._node,e._output=e._node,e._params={volume:1},e._updateParams(),e}return J()(t,e),G()(t,[{key:"_updateParams",value:function(){this._node.gain.value=this._params.volume}}]),t}(Q),ne=function(e){function t(e){S()(this,t);var a=B()(this,(t.__proto__||$()(t)).call(this));return a._params=V()({volume:1,oscillator:{volume:"sine",frequency:440},adsr:{attack:1e-30,sustain:1,decay:1e-30,release:1e-30}},e),a._volume=new ae,a._voices=new o.a,a._updateParams(),a._output=a._volume.output(),a}return J()(t,e),G()(t,[{key:"playNote",value:function(e){if(!this._voices.get(e)){var t=new X(V()(this._params.oscillator,{frequency:e})),a=new te(this._params.adsr);t.output().connect(a.input()),a.output().connect(this._volume.input()),this._voices.set(e,{oscillator:t,adsr:a})}}},{key:"stopNote",value:function(e){var t=this._voices.get(e);if(t){var a=t.oscillator,n=t.adsr,i=n.stop(this.context.currentTime);a.stop(i+1),a.output().onended=function(){n.output().disconnect(),a.output().disconnect()},this._voices.delete(e)}}},{key:"params",value:function(e){var t=V()(this._params.oscillator,e.oscillator),a=V()(this._params.adsr,e.adsr);this._params=V()(this._params,e.oscillator),this._params.adsr=a,this._params.oscillator=t}},{key:"_updateParams",value:function(){this._volume.params(this._params)}}]),t}(Y),ie={props:["id"],components:{Oscillator:O,AdsrFilter:N,Volume:K,Detune:F},created:function(){h(this.id,new ne),w.state.inputs.push(this.id)},destroyed:function(){}},se={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"voice"},[t("oscillator",{attrs:{id:this.id}}),this._v(" "),t("adsr-filter",{attrs:{id:this.id}}),this._v(" "),t("volume",{attrs:{id:this.id}}),this._v(" "),t("detune",{attrs:{id:this.id}})],1)},staticRenderFns:[]},re=a("VU/8")(ie,se,!1,null,null,null).exports,oe={props:["analyzer"],data:function(){return{shouldUpdate:!0}},mounted:function(){this.draw()},beforeDestroy:function(){this.shouldUpdate=!1},methods:{draw:function(){var e=this,t=this.$el.querySelector("canvas"),a=t.getContext("2d"),n=new Float32Array(this.analyzer.fftSize),i=new Float32Array(this.analyzer.fftSize);!function s(){requestAnimationFrame(s),e.shouldUpdate&&(e.analyzer.getFloatTimeDomainData(n),function(e,t,a,n,i){e.clearRect(0,0,t,a),e.lineWidth=2,e.strokeStyle="#000000",e.beginPath();for(var s=1*t/n.length,r=0,o=0;o<n.length;o++){var c=10*n[o]+a/2;0===o?e.moveTo(r,c):e.lineTo(r,c),r+=s}e.stroke()}(a,t.width,t.height,n),i.set(n))}()}}},ce={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"analyzer"},[t("canvas",{attrs:{width:"300px",height:"150px"}})])}]};var ue=a("VU/8")(oe,ce,!1,function(e){a("OTTw")},"data-v-04db1848",null).exports;h("master",new(function(e){function t(){S()(this,t);var e=B()(this,(t.__proto__||$()(t)).call(this));return e._gainNode=e.context.createGain(),e._analyzer=e.context.createAnalyser(),e._gainNode.connect(e._analyzer),e._analyzer.connect(e.context.destination),e._input=e._gainNode,e._params={volume:1},e._updateParams(),e}return J()(t,e),G()(t,[{key:"analyzer",value:function(){return this._analyzer}},{key:"_updateParams",value:function(){this._gainNode.gain.value=this._params.volume}}]),t}(I)));var le={components:{Keyboard:b,Voice:re,Analyzer:ue},computed:{analyzer:function(){return y("master").analyzer()}},mounted:function(){f("voice1","master"),f("voice2","master"),f("voice3","master")}},de={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("keyboard"),this._v(" "),t("div",{staticClass:"modules"},[t("div",{staticClass:"module"},[t("voice",{attrs:{id:"voice1"}})],1),this._v(" "),t("div",{staticClass:"module"},[t("voice",{attrs:{id:"voice2"}})],1),this._v(" "),t("div",{staticClass:"module"},[t("voice",{attrs:{id:"voice3"}})],1),this._v(" "),t("div",{staticClass:"module"},[t("analyzer",{attrs:{analyzer:this.analyzer}})],1)])],1)},staticRenderFns:[]};var ve=a("VU/8")(le,de,!1,function(e){a("Shn7")},"data-v-bfe508a6",null).exports;new n.a({el:"#main",template:"<App/>",components:{App:ve}})},OTTw:function(e,t){},Shn7:function(e,t){},"WA+w":function(e,t){},ieMb:function(e,t){},mJgm:function(e,t){},yg1u:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.de0ca23cf9af59dc25ea.js.map