var ht=Object.defineProperty,ot=(t,e,i)=>e in t?ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$=(t,e,i)=>(ot(t,"symbol"!=typeof e?e+"":e,i),i);!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self)["wave-audio-path-player"]={})}(this,function(t){"use strict";let e=t=>{window.AudioContext=window.AudioContext||window.webkitAudioContext;let e=new AudioContext;return fetch(t).then(t=>t.arrayBuffer()).then(t=>e.decodeAudioData(t)).catch(t=>{console.error(t)})},i=(t,e)=>{let{channel:i=0,samples:n=t.length,height:l=100,width:o=800,top:h=0,left:d=0,type:u="steps",paths:p=[{d:"Q",sx:0,sy:0,x:50,y:100,ex:100,ey:0}],animation:_=!1,animationframes:c=10,normalize:v=!0}=e;var e=a(t,i,_,c),t=s(e,n),b=v?r(t):t;let g="";var m,y,w,f,x,k="bars"!=u?(l+2*h)/2:l+h,C=o/n,M=p.length,P="mirror"==u?2*M:M,A=b.length;for(let S=0;S<A;S++){0<S&&(f=g.length,x=g.charAt(f-1),g+=";"==x||0===f?" M 0 0 ;":";");let B=-9999,z=-9999;for(let D=0;D<n;D++){var T="bars"==u||D%2?1:-1;let E=1;for(let I=0;I<P;I++){let O=I;I>=M&&(O=I-M,E=-1),p[O].minshow=null!=(m=p[O].minshow)?m:0,p[O].maxshow=null!=(y=p[O].maxshow)?y:1,p[O].normalize=null!=(w=p[O].normalize)&&w;var V=p[O].normalize?1:b[S][D];if(p[O].minshow<=b[S][D]&&p[O].maxshow>=b[S][D])switch(p[O].d){case"L":var L=D*C+C*p[O].sx/100+d,j=k+-(V*p[O].sy/100*("bars"!=u?l/2:l)*T)*E,H=D*C+C*p[O].ex/100+d,N=k+-(V*p[O].ey/100*("bars"!=u?l/2:l)*T)*E;L===B&&j===z||(g+=`M ${L} ${j} `),g+=`L ${H} ${N} `,B=H,z=N;break;case"H":L=D*C+C*p[O].sx/100+d,j=k+-(V*p[O].y/100*("bars"!=u?l/2:l)*T)*E,H=D*C+C*p[O].ex/100+d,L===B&&j===z||(g+=`M ${L} ${j} `),g+=`H ${H} `,B=H,z=j;break;case"V":var N=D*C+C*p[O].x/100+d,Q=k+-(V*p[O].sy/100*("bars"!=u?l/2:l)*T)*E,Y=k+-(V*p[O].ey/100*("bars"!=u?l/2:l)*T)*E;N===B&&Q===z||(g+=`M ${N} ${Q} `),g+=`V ${Y} `,B=N,z=Y;break;case"C":var Q=D*C+C*p[O].sx/100+d,Y=k-k*p[O].sy/100*T,q=D*C+C*p[O].x/100+d,F=k+-(V*p[O].y/100*("bars"!=u?l:2*l)*T)*E,Z=D*C+C*p[O].ex/100+d,R=k-k*p[O].ey/100*T;Q===B&&Y===z||(g+=`M ${Q} ${Y} `),g+=`C ${Q} ${Y} ${q} ${F} ${Z} ${R} `,B=Z,z=R;break;case"Q":var q=D*C+C*p[O].sx/100+d,F=k+-(V*p[O].sy/100*("bars"!=u?l/2:l)*T)*E,Z=D*C+C*p[O].x/100+d,R=k+-(V*p[O].y/100*("bars"!=u?l:2*l)*T)*E,G=D*C+C*p[O].ex/100+d,J=k+-(V*p[O].ey/100*("bars"!=u?l/2:l)*T)*E;q===B&&F===z||(g+=`M ${q} ${F} `),g+=`Q ${Z} ${R} ${G} ${J} `,B=G,z=J;break;case"A":{var G=D*C+C*p[O].sx/100+d,J=k+-(V*p[O].sy/100*("bars"!=u?l/2:l)*T)*E,K=D*C+C*p[O].ex/100+d,U=k+-(V*p[O].ey/100*("bars"!=u?l/2:l)*T)*E,W=(G===B&&J===z||(g+=`M ${G} ${J} `),p[O].rx*C/100),X=p[O].ry*C/100;let tt=p[O].sweep;-1==T&&(tt=1==tt?0:1),-1==E&&(tt=1==tt?0:1),g+=`A ${W} ${X} ${p[O].angle} ${p[O].arc} ${tt} ${K} ${U} `,B=K,z=U;break}case"Z":g+="Z "}}}}return g},a=(t,e,i,a)=>{let s=t.getChannelData(e),r=[];if(i){var n=t.sampleRate/a;for(let l=0;l<s.length;l+=n){var o=s.slice(l,l+n);r.push(o)}}else r.push(s);return r},s=(t,e)=>{let i=[];var a=t.length;for(let s=0;s<a;s++){var r=Math.floor(t[s].length/e);let n=[];for(let l=0;l<e;l++){var o=r*l;let h=0;for(let d=0;d<r;d++)h+=Math.abs(t[s][o+d]);n.push(h/r)}i.push(n)}return i},r=t=>{let e=[];var i=t.length;for(let a=0;a<i;a++){var s=Math.max(...t[a]);e.push(s)}let r=Math.pow(Math.max(...e),-1),n=[];for(let l=0;l<i;l++){var o=t[l].map(t=>t*r);n.push(o)}return n};class n extends HTMLElement{constructor(){super(),$(this,"loadSong",()=>{this.durationContainer.textContent=this.calculateTime(this.audio.duration),this.seekSlider.max=this.audio.duration,this.svg.unpauseAnimations(),this.animationsvg.setAttribute("dur",""+this.audio.duration+"s"),this.animation||this.animationsvgx.setAttribute("dur",""+this.audio.duration+"s"),this.svg.pauseAnimations(),this.svg.setCurrentTime(0)}),$(this,"playPause",()=>{this.audio.paused?(this.audio.play(),this.svg.unpauseAnimations(),this.path2.style.display="block",this.playPathButton.setAttribute("d",this.pausePath),this.raf=requestAnimationFrame(this.whilePlaying)):(this.audio.pause(),this.svg.pauseAnimations(),this.playPathButton.setAttribute("d",this.playPath),cancelAnimationFrame(this.raf))}),$(this,"sliderInput",()=>{this.path2.style.display="block",this.currentTimeContainer.textContent=this.calculateTime(this.seekSlider.value),this.svg.setCurrentTime(this.seekSlider.value),this.audio.paused||cancelAnimationFrame(this.raf)}),$(this,"sliderChange",()=>{this.audio.currentTime=this.seekSlider.value,this.path2.style.display="block",this.svg.setCurrentTime(this.seekSlider.value),this.audio.paused||(this.raf=requestAnimationFrame(this.whilePlaying))}),$(this,"onFinish",()=>{this.seekSlider.value=this.seekSlider.max,this.svg.setCurrentTime(this.audio.duration),this.svg.pauseAnimations(),this.playPathButton.setAttribute("d",this.playPath),cancelAnimationFrame(this.raf)}),$(this,"whilePlaying",()=>{this.seekSlider.value=this.audio.currentTime,this.currentTimeContainer.textContent=this.calculateTime(this.seekSlider.value),this.svg.setCurrentTime(this.seekSlider.value),this.raf=requestAnimationFrame(this.whilePlaying)}),$(this,"svgDraw",()=>{let t=i(this.audioData,this.options);this.animation?this.animationsvg.setAttribute("values",t):(this.path1.setAttribute("d",t),"true"==this.attributes.autoplay.value&&this.playIconContainer.click(),this.shadowDOM.querySelector(".player").classList.add("loaded"),this.path2.setAttribute("d",t)),this.svg.setCurrentTime(this.seekSlider.value)}),$(this,"calculateTime",t=>{let e=Math.floor(t%60),i=e<10?`0${e}`:`${e}`;return`${Math.floor(t/60)}:${i}`}),this.shadowDOM=this.attachShadow({mode:"open"}),this.audioData=null,this.hasAttribute("wave-options")?(this.options=JSON.parse(this.attributes["wave-options"].value),this.options.width=parseInt(this.attributes["wave-width"].value),this.options.height=parseInt(this.attributes["wave-height"].value)):this.options={samples:40,type:"mirror",width:parseInt(this.attributes["wave-width"].value),height:parseInt(this.attributes["wave-height"].value),paths:[{d:"V",sy:0,x:50,ey:100}]},this.options.hasOwnProperty("animation")?this.animation=this.options.animation:this.animation=!1,this.playPath="M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z",this.pausePath="M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z",this.playPathButton=null,this.svg=null,this.path1=null,this.path2=null,this.animationsvg=null,this.animationsvgx=null,this.audio=null,this.durationContainer=null,this.seekSlider=null,this.currentTimeContainer=null,this.playIconContainer=null,this.raf=null}initComponent(){this.playPathButton=this.shadowDOM.getElementById("playPathButton"),this.svg=this.shadowDOM.getElementById("svg"),this.path1=this.shadowDOM.getElementById("path1"),this.path2=this.shadowDOM.getElementById("path2"),this.animationsvg=this.shadowDOM.getElementById("animationsvg"),this.animationsvgx=this.shadowDOM.getElementById("animationsvgx"),this.audio=this.shadowDOM.querySelector("audio"),this.durationContainer=this.shadowDOM.getElementById("duration"),this.seekSlider=this.shadowDOM.getElementById("seek-slider"),this.currentTimeContainer=this.shadowDOM.getElementById("current-time"),this.playIconContainer=this.shadowDOM.getElementById("play"),this.svg.pauseAnimations(),this.audio.readyState>0?this.loadSong():this.audio.addEventListener("loadedmetadata",this.loadSong),this.audio.addEventListener("ended",this.onFinish),this.seekSlider.addEventListener("input",this.sliderInput),this.seekSlider.addEventListener("change",this.sliderChange),this.playIconContainer.addEventListener("click",this.playPause)}async audioPath(){this.audioData=await e(this.attributes.src.value),this.svgDraw()}mapComponentAttributes(){["src","wave-height","wave-width","color","wave-options","wave-color","wave-progress-color","wave-slider","profile-src","received-message","autoplay"].forEach(t=>{this.attributes[t]||(this.attributes[t]={value:null})})}connectedCallback(){this.mapComponentAttributes(),this.render(),this.initComponent(),this.audioPath()}render(){this.shadowDOM.innerHTML=`${this.templateCss()} ${this.template()} `}template(){let t=`<div part="player" class="player"><div class="bubble-box"><div class="bubble-circle"></div><div class="bubble-circle"></div><div class="bubble-circle"></div></div><div class="player-content"><button id="play" part="play"><svg viewBox="0 0 34 34" width="34" height="34" part="button"><path id="playPathButton" d="M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z"></path></svg></button><div style="display:flex;flex-direction:column;line-height:1;gap:1px;padding:12px 0px 5px 0px"><div id="slider" part="slider"><svg id="svg" part="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 ${this.attributes["wave-width"].value} ${this.attributes["wave-height"].value}" width="${this.attributes["wave-width"].value}" height="${this.attributes["wave-height"].value}">`;return this.animation?t+=`<path id="path1" part="path1"  stroke-width="2.5" style="display:none"></path><path id="path2" part="path2"  stroke-width="2.5" style="display:block"><animate id="animationsvg" attributeName="d" dur="99999s" calcMode="linear" values="" fill="freeze"></animate></path>`:t+=`<defs><clipPath id="left-to-right-x"><rect x="-1" y="-100" width="${parseInt(this.attributes["wave-width"].value)+2}" height="${parseInt(this.attributes["wave-height"].value)+200}" ><animate id="animationsvgx" attributeName="x" values="-1;${parseInt(this.attributes["wave-width"].value)+2}" dur="99999s" fill="freeze" /></rect></clipPath><clipPath id="left-to-right"><rect x="-${parseInt(this.attributes["wave-width"].value)+2}" y="-100" width="${parseInt(this.attributes["wave-width"].value)+2}" height="${parseInt(this.attributes["wave-height"].value)+200}" ><animate id="animationsvg" attributeName="x" values="-${parseInt(this.attributes["wave-width"].value)+2};-1" dur="99999s" fill="freeze" /></rect></clipPath></defs><path id="path1" part="path1"  stroke-width="2.5" d="" clip-path="url(#left-to-right-x)"></path><path id="path2" part="path2"  stroke-width="2.5" d="" clip-path="url(#left-to-right)" style="display:none"></path>`,t+=`</svg><input type="range" part="input" id="seek-slider" max="100" value="0" step="any"></div><div style="display:flex;justify-content:space-between"><div id="current-time" part="currenttime">0:00</div><div id="received" part="received">${this.attributes["received-message"].value}</div></div></div><div id="profile" style="display:flex;flex-direction:column;align-items:center;height:inherit;justify-content:center;padding:0 12px 0 0;position:relative"><img src="${this.attributes["profile-src"].value}" width="55" height="55" style="border-radius:50%"><span style="position:absolute;bottom:0;left:0"><svg part="player-svg" enable-background="new 0 0 19 26" y="0px" x="0px" version="1.1" class="" width="19" height="26" viewBox="0 0 19 26"><title>ptt-status</title><path part="player-svg-border" fill="#ffffff" d="M9.217,24.401c-1.158,0-2.1-0.941-2.1-2.1v-2.366c-2.646-0.848-4.652-3.146-5.061-5.958L2.004,13.62 l-0.003-0.081c-0.021-0.559,0.182-1.088,0.571-1.492c0.39-0.404,0.939-0.637,1.507-0.637h0.3c0.254,0,0.498,0.044,0.724,0.125v-6.27 C5.103,2.913,7.016,1,9.367,1c2.352,0,4.265,1.913,4.265,4.265v6.271c0.226-0.081,0.469-0.125,0.723-0.125h0.3 c0.564,0,1.112,0.233,1.501,0.64s0.597,0.963,0.571,1.526c0,0.005,0.001,0.124-0.08,0.6c-0.47,2.703-2.459,4.917-5.029,5.748v2.378 c0,1.158-0.942,2.1-2.1,2.1H9.217V24.401z"></path><path part="player-svg-icon" fill="#4fc3f7" d="M9.367,15.668c1.527,0,2.765-1.238,2.765-2.765V5.265c0-1.527-1.238-2.765-2.765-2.765 S6.603,3.738,6.603,5.265v7.638C6.603,14.43,7.84,15.668,9.367,15.668z M14.655,12.91h-0.3c-0.33,0-0.614,0.269-0.631,0.598 c0,0,0,0-0.059,0.285c-0.41,1.997-2.182,3.505-4.298,3.505c-2.126,0-3.904-1.521-4.304-3.531C5.008,13.49,5.008,13.49,5.008,13.49 c-0.016-0.319-0.299-0.579-0.629-0.579h-0.3c-0.33,0-0.591,0.258-0.579,0.573c0,0,0,0,0.04,0.278 c0.378,2.599,2.464,4.643,5.076,4.978v3.562c0,0.33,0.27,0.6,0.6,0.6h0.3c0.33,0,0.6-0.27,0.6-0.6V18.73 c2.557-0.33,4.613-2.286,5.051-4.809c0.057-0.328,0.061-0.411,0.061-0.411C15.243,13.18,14.985,12.91,14.655,12.91z"></path></svg></span></div><div id="duration" part="duration" style="display:none">0:00</div></div></div><audio src="${this.attributes.src.value}"></audio>`}templateCss(){var t,e,i,a,s,r,n,l,o,h,d,u;return`<style>*,:after,:before{box-sizing:border-box;margin:0}:host{display:flex}.player{display:flex;justify-content:space-between;align-items:center}.player.loaded .bubble-box{display:none}.player.loaded .player-content{display:flex;gap:8px}.player:not(.loaded) .player-content{display:none}#play{background:transparent;border:none;cursor:pointer;padding:0 0 0 10px;margin:0px;-webkit-touch-callout:none;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}#play svg{fill:${null!=(e=null==(t=this.attributes.color)?void 0:t.value)?e:"#858a8d"};position:relative;transition:transform 0.3s;top:-0.5px}#play svg path{stroke-linecap:round;stroke-linejoin:round;transition:0.2s}#svg{margin:0 10px;overflow:visible;stroke-width:1px;fill:none}#path1{stroke:${null!=(a=null==(i=this.attributes["wave-color"])?void 0:i.value)?a:"#636b70"};overflow:visible;stroke-linecap:round}#path2{stroke:${null!=(r=null==(s=this.attributes["wave-progress-color"])?void 0:s.value)?r:"#a6abad"};overflow:visible;stroke-linecap:round}#slider {position:relative}#duration, #current-time, #received{position:relative;top:-1.1px;color:${null!=(l=null==(n=this.attributes.color)?void 0:n.value)?l:"#ffffff99"};margin:0px 10px;font-size:0.75rem;min-width:32px}#seek-slider{position:absolute;width:100%;left:0} input[type=range]{-webkit-appearance:none;width:100%;background:transparent;padding:0px;margin:0px;border:0px;height:${parseInt(this.attributes["wave-height"].value)}px} input[type=range]::-webkit-slider-thumb{-webkit-appearance:none} input[type=range]:focus{outline:none} input[type=range]::-ms-track{width:100%;cursor:pointer;background:transparent;border-color:transparent;color:transparent} input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;position:relative;height:12.5px;width:12.5px;border-radius:50%;background: ${null!=(h=null==(o=this.attributes["wave-slider"])?void 0:o.value)?h:"#4fc3f7"};cursor:pointer;box-shadow:none} input[type="range"]::-webkit-slider-thumb{transition:transform 0.3s} input[type="range"]:active::-webkit-slider-thumb{transform:scale(1.5)} input[type="range"]::-moz-range-thumb{height:12.5px;width:12.5px;border-radius:50%;background: ${null!=(u=null==(d=this.attributes["wave-slider"])?void 0:d.value)?u:"#4fc3f7"};cursor:pointer;box-shadow:none;border:0px} input[type="range"]:active::-moz-range-thumb{transform:scale(1.5)} @keyframes chatBubbles{0%{transform:translateY(2.5)} 50%{transform:translateY(-2.5px)} to{transform:translateY(0)} }.bubble-box{font-size:16px;line-height:24px;color:var(--typebot-host-bubble-color);border:0 solid #e5e7eb;box-sizing:border-box;display:flex;align-items:center;gap:0.25rem;width:64px;height:32px;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}.bubble-circle{font-size:16px;line-height:24px;color:var(--typebot-host-bubble-color);border:0 solid #e5e7eb;box-sizing:border-box;width:8px;background-color:var(--typebot-host-bubble-color);opacity:.5;animation:chatBubbles 1s ease-in-out infinite;height:0.5rem;border-radius:9999px}</style>`}}window.customElements.define("wave-audio-path-player",n),t.AudioPathPlayer=n,Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"});

/* begin:: functions */
function createElementWithAttributes(tag, attributes) {
  let element;
  if (tag === 'svg'){
    element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  }else{
    element = document.createElement(tag);
  }
  for (const [key, value] of Object.entries(attributes)) {
    if (key === 'classList') {
      element.classList.add(...value);
    } else if (key === 'textContent') {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  }
  return element;
}
/* end:: functions */

/* begin:: dark-mode */
const runColorMode = (fn) => {
  if (!window.matchMedia) return;
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  fn(query.matches);
  query.addEventListener('change', (event) => fn(event.matches));
}
/* end:: dark-mode */

/* begin:: add-stylesheet */
const fetchStyle = function(element, url) {
  return new Promise((resolve, reject) => {
    let linkStyle = document.createElement('link');
    linkStyle.type = 'text/css';
    linkStyle.rel = 'stylesheet';
    linkStyle.onload = resolve;
    linkStyle.href = url;
    element.insertAdjacentElement('beforebegin', linkStyle);
  });
};

const typebotContainerElement = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
fetchStyle(typebotContainerElement, '//cdn.jsdelivr.net/gh/bigtienda/theme-assets/style-v1.0.0.css').then(() => {
  runColorMode((isDarkMode) => {
    if (isDarkMode) {      
      document.querySelector('html').classList.add('dark');
      document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container').classList.remove('dark');
    }
  });
  document.querySelector('html').classList.add('loaded');
});

/* end:: add-stylesheet */

/* begin:: top-bar */
const profileName = document.currentScript.getAttribute('data-profile-name');
const profilePhotoUrl = document.currentScript.getAttribute('data-profile-photo-url');
const typebotContainer = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
    
const topBar = createElementWithAttributes('div', {
  id: 'top-bar',
  classList: [
    'absolute', 'z-20', 'top-0', 'flex', 'h-[70px]', 'w-screen', 'justify-between', 'border-b', 
    'bg-[#008069]', 'px-2', 'py-3', 'dark:border-[#8696a00a]', 'dark:bg-[#202c33]', 
    'dark:shadow-[0_1px_3px_rgba(11,20,26,0.4)]'
  ]
});

const leftArea = createElementWithAttributes('div', {
  id: 'left-area',
  classList: ['flex', 'items-center']
});

const backButton = createElementWithAttributes('div', {
  id: 'back-button',
  classList: ['h-7', 'w-7', 'cursor-pointer']
});
const backButtonSvg = createElementWithAttributes('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 72 72'
});
backButtonSvg.innerHTML = '<path class="dark:fill-[#e9edef]" fill=#fff fill-opacity=.996 d="m24.46 33.03 31.2-.03q2.8-.01 4.18 2.42.37.64.11 1.25-.99 2.34-3.43 2.34-17.48-.03-31.81 0-1.12 0-.33.79l13.26 13.27q1.84 1.84.82 4.23-.34.8-1.13 1.05-2.29.7-3.97-.99L14.63 38.64q-2.61-2.62 0-5.24l18.8-18.84q1.69-1.69 3.95-.88 1.49.54 1.43 3.09a2.44 2.43 67.9 0 1-.7 1.66L24.2 32.42a.36.36 0 0 0 .26.61Z"/>';

const profileImage = createElementWithAttributes('div', {
  id: 'profile-image',
  classList: ['cursor-pointer']
});
const profileImg = createElementWithAttributes('img', {
  src: profilePhotoUrl,
  classList: ['h-9', 'w-9', 'rounded-full']
});

const textProfile = createElementWithAttributes('div', {
  id: 'text-profile',
  classList: ['ml-3', 'flex', 'flex-col', 'gap-2', 'leading-none', 'text-white', 'dark:text-[#e9edef]', 'relative']
});
const nameDiv = createElementWithAttributes('div', {
  id: 'name',
  classList: ['cursor-pointer', 'text-lg', 'font-semibold', 'leading-none'],
  textContent: profileName
});
const statusDiv = createElementWithAttributes('div', {
  id: 'status',
  classList: ['text-sm', 'font-normal', 'leading-none'],
  textContent: 'online'
});

const rightArea = createElementWithAttributes('div', {
  id: 'right-area',
  classList: ['flex', 'items-center', 'gap-6']
});
const cameraDiv = createElementWithAttributes('div', {
  id: 'camera',
  classList: ['h-6', 'w-6', 'cursor-pointer', 'hidden', 'xs:block']
});
const cameraSvg = createElementWithAttributes('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 36 36'
});
cameraSvg.innerHTML = '<path class="dark:fill-[#e9edef]" fill=#fff d="m27.02 21.27-.04 5.74a3.01 3-89.8 0 1-3 2.99H6.02a3 2.99 0 0 1-3-2.99L3.01 9.48q0-3.42 3.42-3.46 8.94-.08 17.25.02 3.25.04 3.29 3.34.03 2.85.08 5.76a.26.25-23.7 0 0 .44.17l4.27-4.32a.72.72 0 0 1 1.23.51L33 23.68q0 2.59-1.82.74l-3.41-3.46q-.74-.75-.75.31Z"/>';

const cellphoneDiv = createElementWithAttributes('div', {
  id: 'cellphone',
  classList: ['h-6', 'w-6', 'cursor-pointer', 'hidden', 'xs:block']
});
const cellphoneSvg = createElementWithAttributes('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 72 72'
});
cellphoneSvg.innerHTML = '<path class="dark:fill-[#e9edef]" fill=#fff style="stroke-width:0" d="M40 51.8c3-3 5.7-7.2 10.5-6.8 2.7.2 5.2.6 7.5.9 3 .5 4.6 2.3 4.9 5.4.5 4.9.5 12.4-7 11.6-25.4-2.6-43.9-21-46.8-46.5-.5-4 1.8-7.2 6-7.4 4.7-.2 10-.6 11.1 5.4.6 3.3.8 6.3.8 8.9 0 2.9-4.9 6.9-6.9 8.8-.1.1-.2.3 0 .5 4.3 8.2 10.6 14.6 19 19.2.4.2.7.1 1-.2Z" />';

const moreDiv = createElementWithAttributes('div', {
  id: 'more',
  classList: ['h-6', 'w-6', 'cursor-pointer']
});
const moreSvg = createElementWithAttributes('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 72 72'
});
moreSvg.innerHTML = '<circle cx="36" cy="53.9" r="6" class="dark:fill-[#e9edef]" fill=#fff /> <circle cx="36" cy="35.9" r="6" class="dark:fill-[#e9edef]" fill=#fff /> <circle cx="36" cy="17.9" r="6" class="dark:fill-[#e9edef]" fill=#fff />';

backButton.appendChild(backButtonSvg);
profileImage.appendChild(profileImg);
textProfile.appendChild(nameDiv);
textProfile.appendChild(statusDiv);
cameraDiv.appendChild(cameraSvg);
cellphoneDiv.appendChild(cellphoneSvg);
moreDiv.appendChild(moreSvg);

leftArea.appendChild(backButton);
leftArea.appendChild(profileImage);
leftArea.appendChild(textProfile);

rightArea.appendChild(cameraDiv);
rightArea.appendChild(cellphoneDiv);
rightArea.appendChild(moreDiv);

topBar.appendChild(leftArea);
topBar.appendChild(rightArea);

typebotContainer.insertAdjacentElement('afterbegin', topBar);

/* end: top-bar */

/* begin:: top-message */
const chatView = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container .typebot-chat-view');

const chatStartInfo = createElementWithAttributes('div', {
  classList: ['chat-start-info', 'w-full', 'flex', 'flex-col', 'items-center', 'px-5', 'py-5', 'gap-4']
});

const todayDiv = createElementWithAttributes('div', {
  classList: ['bg-[#f8f7f7]', 'dark:bg-[#1c272d]', 'py-1', 'px-3', 'rounded-md', 'w-min', 'text-[#54656f]', 'dark:text-[#8696a0]', 'shadow-[0_1px_0.5px_rgba(11,20,26,0.08)]'],
  textContent: 'Hoje'
});

const infoDiv = createElementWithAttributes('div', {
  classList: ['py-1.5', 'px-3', 'rounded-md', 'bg-[#cbf2ee]', 'dark:bg-[#1c272d]', 'p-4', 'text-center', 'leading-tight', 'shadow-[0_1px_0.5px_rgba(11,20,26,0.08)]']
});

const infoSpanIcon = createElementWithAttributes('span', {
  classList: ['inline-flex', 'w-3.5', 'h-3.5', 'align-top', 'mt-1'],
  style: 'margin-right: 0.2rem'
});
const infoSvg = createElementWithAttributes('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 11 11'
});
infoSvg.innerHTML = '<path class="dark:fill-[#5faca7]" fill=#54656f d="M5 0a5 5 0 1 1 0 10A5 5 0 0 1 5 0Zm-.027 4.118a.649.649 0 0 0-.649.648v2.757a.649.649 0 0 0 1.298 0V4.766a.649.649 0 0 0-.649-.648ZM5 1.892c-.227 0-.406.069-.538.206a.73.73 0 0 0-.197.527c0 .216.067.393.202.53A.712.712 0 0 0 5 3.363c.22 0 .399-.068.533-.206a.728.728 0 0 0 .202-.531.726.726 0 0 0-.2-.527c-.133-.137-.311-.206-.535-.206Z" />';

const infoSpanText = createElementWithAttributes('span', {
  classList: ['text-[#54656f]', 'dark:text-[#5faca7]', 'align-top', 'text-sm'],
  textContent: 'Esta empresa usa um serviço seguro da empresa Meta para gerenciar esta conversa. Clique para saber mais.'
});

infoSpanIcon.appendChild(infoSvg);
infoDiv.appendChild(infoSpanIcon);
infoDiv.appendChild(infoSpanText);

chatStartInfo.appendChild(todayDiv);
chatStartInfo.appendChild(infoDiv);

chatView.insertAdjacentElement('afterbegin', chatStartInfo);
/* end: top-message */

/* begin:: auto-verify */
(() => {
  let messagesLength = 0;
  let replysLength = 0;

  const typebotContainer = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
  const status = typebotContainer.querySelector('#top-bar #status');

  const alertNotify = document.createElement('audio');
  alertNotify.src = 'https://s3.fr-par.scw.cloud/typebot/public/typebots/rx0zcrlqkhifqajxuzr6txa9/blocks/ttfglhs9oks32ebn2ymqcrp1';

  setInterval(() => {
    const isTyping = typebotContainer.querySelector('.bubble1');
    const sibling = isTyping?.parentElement?.parentElement?.nextSibling;

    if (isTyping && sibling && sibling.src) {
      status.innerText = 'gravando áudio...';
    } else if (isTyping) {
      status.innerText = 'digitando...';
    } else {
      status.innerText = 'online';
    }

    const allMessages = typebotContainer.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');
    if (allMessages.length > messagesLength) {
      for (let i = messagesLength; i < allMessages.length; i++) {
        let now = new Date();
        let messageTime = (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        let messageBox = allMessages[i];

        let figureMessage = messageBox.querySelector('.bubble-typing + figure');
        if (figureMessage) {
          let timeContainer = createElementWithAttributes('span', {
            classList: ['absolute', 'bottom-2.5', 'right-4', 'inline-flex', 'items-center', 'gap-1']
          });
          let timeText = createElementWithAttributes('div', {
            classList: ['text-xs', 'text-[rgba(233,237,239,.9)]'],
            textContent: messageTime
          });
          timeContainer.appendChild(timeText);

          let backgroundSpan = createElementWithAttributes('span', {
            classList: ['absolute', 'inline-flex', 'h-10', 'w-[calc(100%-16px)]', 'bg-gradient-to-t', 'from-[rgba(11,20,26,.5)]', 'to-[rgba(11,20,26,0)]', 'bottom-2', 'items-center', 'flex', 'p-2', 'rounded-b-md'],
            'aria-hidden': 'true'
          });

          let wrapperSpan = document.createElement('span');
          wrapperSpan.appendChild(backgroundSpan);
          wrapperSpan.appendChild(timeContainer);

          figureMessage.appendChild(wrapperSpan);
        } else {
          let messageAudio = messageBox.querySelector('audio');
          if (messageAudio) {
            let width = window.innerWidth;
            let messageAudioWidth = 130;
            if (width >= 320 && width < 375) {
              messageAudioWidth = 150;
            } else if (width >= 375 && width < 420) {
              messageAudioWidth = 170;
            } else if (width >= 420) {
              messageAudioWidth = 190;
            }

            messageAudio.pause();
            messageAudio.currentTime = 0;
            messageAudio.style.display = 'none';
            let profileImage = typebotContainer.querySelector('#profile-image img');
            let autoplay = messageAudio.getAttribute('autoplay') != null ? 'true' : 'false';

            messageAudio.insertAdjacentHTML('afterend','<wave-audio-path-player src="'+ messageAudio.src +'" wave-width="'+ messageAudioWidth +'" wave-height="40" class="z-20" profile-src="'+ profileImage.src +'" received-message="'+ messageTime +'" autoplay="'+ autoplay +'"></wave-audio-path-player>');
          } else {
            let messageContent = messageBox.querySelector('div > div[data-element-type="p"] > span');

            let timeContainer = createElementWithAttributes('span', {
              classList: ['absolute', '-bottom-0.5', 'right-0', 'inline-flex', 'items-center', 'gap-1']
            });
            let timeText = createElementWithAttributes('div', {
              classList: ['text-xs', 'text-[#667781]', 'dark:text-[#99beb7]'],
              textContent: messageTime
            });
            timeContainer.appendChild(timeText);

            let invisibleSpan = createElementWithAttributes('span', {
              classList: ['invisible', 'inline-flex', 'w-10', 'bg-white', 'p-2'],
              'aria-hidden': 'true'
            });

            let wrapperSpan = document.createElement('span');
            wrapperSpan.appendChild(invisibleSpan);
            wrapperSpan.appendChild(timeContainer);

            messageContent.appendChild(wrapperSpan);
          }
        }
      }

      messagesLength = allMessages.length;
      alertNotify.play();
    }

    const allReplys = typebotContainer.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');
    if (allReplys.length > replysLength) {
      for (let i = replysLength; i < allReplys.length; i++) {
        let now = new Date();
        const replyTime = (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        const replyBox = allReplys[i];

        let timeContainer = createElementWithAttributes('span', {
          classList: ['absolute', 'bottom-1.5', 'right-2', 'inline-flex', 'items-center', 'gap-1']
        });
        let timeText = createElementWithAttributes('span', {
          classList: ['text-xs', 'text-[#667781]', 'dark:text-[#99beb7]'],
          textContent: replyTime
        });
        timeContainer.appendChild(timeText);

        let iconContainer = createElementWithAttributes('span', {
          classList: ['h-2', 'w-4']
        });
        let iconSvg = createElementWithAttributes('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 16 11'
        });
        iconSvg.innerHTML = '<path class="dark:fill-[#53bcea]" fill=#009de2 d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z" />';

        iconContainer.appendChild(iconSvg);
        timeContainer.appendChild(iconContainer);

        let invisibleSpan = createElementWithAttributes('span', {
          classList: ['invisible', 'inline-flex', 'w-14', 'bg-white', 'p-2'],
          'aria-hidden': 'true'
        });

        let wrapperSpan = document.createElement('span');
        wrapperSpan.appendChild(invisibleSpan);
        wrapperSpan.appendChild(timeContainer);

        replyBox.appendChild(wrapperSpan);
      }

      replysLength = allReplys.length;
    }
  }, 400);
})();
/* end:: auto-verify */
