﻿/*
    *
    * Wijmo Library 5.20163.240
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this&&this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)};define(["require","exports",'wijmo/wijmo.chart','wijmo/wijmo','wijmo/wijmo.chart.animation'],function(n,t,i,r,u){"use strict";function s(){var n,t;return(n=window.wijmo)&&(t=n.chart)&&t.radar}function h(){var n,t;return(n=window.wijmo)&&(t=n.chart)&&t.finance}var e,f,c;window.wijmo=window.wijmo||{};window.wijmo.chart=window.wijmo.chart||{};window.wijmo.chart.animation=u,function(n){n[n.Linear=0]="Linear";n[n.Swing=1]="Swing";n[n.EaseInQuad=2]="EaseInQuad";n[n.EaseOutQuad=3]="EaseOutQuad";n[n.EaseInOutQuad=4]="EaseInOutQuad";n[n.EaseInCubic=5]="EaseInCubic";n[n.EaseOutCubic=6]="EaseOutCubic";n[n.EaseInOutCubic=7]="EaseInOutCubic";n[n.EaseInQuart=8]="EaseInQuart";n[n.EaseOutQuart=9]="EaseOutQuart";n[n.EaseInOutQuart=10]="EaseInOutQuart";n[n.EaseInQuint=11]="EaseInQuint";n[n.EaseOutQuint=12]="EaseOutQuint";n[n.EaseInOutQuint=13]="EaseInOutQuint";n[n.EaseInSine=14]="EaseInSine";n[n.EaseOutSine=15]="EaseOutSine";n[n.EaseInOutSine=16]="EaseInOutSine";n[n.EaseInExpo=17]="EaseInExpo";n[n.EaseOutExpo=18]="EaseOutExpo";n[n.EaseInOutExpo=19]="EaseInOutExpo";n[n.EaseInCirc=20]="EaseInCirc";n[n.EaseOutCirc=21]="EaseOutCirc";n[n.EaseInOutCirc=22]="EaseInOutCirc";n[n.EaseInBack=23]="EaseInBack";n[n.EaseOutBack=24]="EaseOutBack";n[n.EaseInOutBack=25]="EaseInOutBack";n[n.EaseInBounce=26]="EaseInBounce";n[n.EaseOutBounce=27]="EaseOutBounce";n[n.EaseInOutBounce=28]="EaseInOutBounce";n[n.EaseInElastic=29]="EaseInElastic";n[n.EaseOutElastic=30]="EaseOutElastic";n[n.EaseInOutElastic=31]="EaseInOutElastic"}(t.Easing||(t.Easing={}));e=t.Easing,function(n){n[n.All=0]="All";n[n.Point=1]="Point";n[n.Series=2]="Series"}(t.AnimationMode||(t.AnimationMode={}));f=t.AnimationMode;c=function(){function n(n,t){this._play=!0;var u=this,f=n.hostElement,e=new r.Size(f.offsetWidth,f.offsetHeight);u._chart=n;u._updateEventArgs=[];n instanceof i.FlexPie?u._animation=new v(n,u._updateEventArgs):(u._animation=s()&&s().FlexRadar&&n instanceof s().FlexRadar?new y(n,u._updateEventArgs):new a(n,u._updateEventArgs),u._chartType=n.chartType);t&&u._initOptions(t);n.beginUpdate();window.setTimeout(function(){n.rendered.addHandler(u._playAnimation,u);n.endUpdate()},0);u._setCV(n.collectionView);window.addEventListener('resize',function(){var n=new r.Size(f.offsetWidth,f.offsetHeight);e.equals(n)||(u._play=!1,e=n)})}return n.prototype._initOptions=function(n){n.duration&&(this.duration=n.duration);n.easing&&(this.easing=n.easing);n.animationMode&&(this.animationMode=n.animationMode)},n.prototype._setCV=function(n){this._cv=n;this._animation._clearState()},Object.defineProperty(n.prototype,"animationMode",{get:function(){return this._animation.animationMode},set:function(n){var t=this._animation.animationMode;n!==t&&(this._animation.animationMode=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"easing",{get:function(){return this._animation.easing},set:function(n){var t=this._animation.easing;n!==t&&(this._animation.easing=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"duration",{get:function(){return this._animation.duration},set:function(n){var t=this._animation.duration;n!==t&&(this._animation.duration=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"axisAnimation",{get:function(){return this._animation.axisAnimation},set:function(n){var t=this._animation.axisAnimation;n!==t&&(this._animation.axisAnimation=n)},enumerable:!0,configurable:!0}),n.prototype._playAnimation=function(){var n=this,t=n._chart,i=t.chartType;n._cv!==t.collectionView&&n._setCV(t.collectionView);n._chartType!=null&&n._chartType!==i&&(n._chartType=i,n._animation._clearState());n._play?n._animation.playAnimation():n._play=!0},n.prototype.animate=function(){var n=this._chart,t;n&&(t=n.itemsSource,n.beginUpdate(),n.itemsSource=null,n.itemsSource=t,n.endUpdate())},n}();t.ChartAnimation=c;var l=function(){function n(n){this._axisAnimation=!0;this._chart=n;this._timers=[]}return Object.defineProperty(n.prototype,"animationMode",{get:function(){return this._animationMode||f.All},set:function(n){n!==this._animationMode&&(this._clearState(),this._animationMode=r.asEnum(n,f,!1))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"easing",{get:function(){return this._easing==null?e.Swing:this._easing},set:function(n){n!==this._easing&&(this._easing=r.asEnum(n,e,!1))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"duration",{get:function(){return this._duration||400},set:function(n){n!==this._duration&&(this._duration=r.asNumber(n,!1,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"axisAnimation",{get:function(){return!!this._axisAnimation},set:function(n){n!==this._axisAnimation&&(this._axisAnimation=r.asBoolean(n,!1))},enumerable:!0,configurable:!0}),n.prototype.playAnimation=function(){},n.prototype._clearState=function(){this._previousState&&(this._previousState=null);this._currentState&&(this._currentState=null)},n.prototype._setInitState=function(n,t,i){var r=o.parseAttrs(t,i);o.setElementAttr(n,r,0)},n.prototype._getAnimation=function(n,t){return n[t]||(n[t]=[]),n[t]},n.prototype._toggleVisibility=function(n,t){t?o.playAnimation(n,{opacity:0},{opacity:1},null,e.Swing,100):n.setAttribute('opacity','0')},n.prototype._toggleDataLabelVisibility=function(n){var t=this._chart.hostElement,i=t&&t.querySelector('.wj-data-labels');i&&this._toggleVisibility(i,n)},n.prototype._playAnimation=function(n){var i=this,t=this,e=t.duration,f=t.easing,s=n.length,u;t._toggleDataLabelVisibility(!1);u=t._getDurationAndDelay(n.length,e);this._timers&&this._timers.length&&(this._timers.forEach(function(n){return window.clearInterval(n)}),this._timers.length=0);n.forEach(function(n,e){var h;n&&(h=window.setTimeout(function(){var h;n.forEach(function(n,c){if(n&&n.ele){if(e===s-1&&c===0){var l=n.done;n.done=function(){t._toggleDataLabelVisibility(!0);l&&l()}}r.isArray(n.ele)?(h=o.playAnimations(n.ele,n.from,n.to,n.done,f,u.duration),i._timers=i._timers.concat.apply(h)):(h=o.playAnimation(n.ele,n.from,n.to,n.done,f,u.duration),i._timers.push(h))}})},u.delay*e),i._timers.push(h))})},n.prototype._getDurationAndDelay=function(n,t){var i={duration:t,delay:0};return n>1&&(this._previousState?(i.duration=t/n,i.delay=t/n):(i.duration=t*.5,i.delay=t*.5/(n-1))),i},n}(),v=function(n){function t(t,i){n.call(this,t,i);t.selectionChanged.addHandler(this._selectionChanged,this)}return __extends(t,n),t.prototype._selectionChanged=function(){this._isSelectionChanged=!0},t.prototype._clearState=function(){n.prototype._clearState.call(this);this._isSelectionChanged=!1},t.prototype._getElementRotate=function(n){var t=n.getAttribute('transform'),i;return t&&t.indexOf('rotate')>-1?(t=t.replace('rotate(','').replace(')',''),t=t.indexOf(',')>-1?t.split(',').map(function(n){return+n}):t.split(' ').map(function(n){return+n})):(i=this._chart._areas[0].center,t=[0,i.x,i.y]),t},t.prototype._getDurationAndDelay=function(n,t){var r=this.animationMode,i={duration:t,delay:0};return r===f.Point&&n>1&&(i.duration=t/n,i.delay=t/n),i},t.prototype.playAnimation=function(){n.prototype.playAnimation.call(this);var i=this,t=[];i._playPieAnimation(t);t.length&&i._playAnimation(t)},t.prototype._playPieAnimation=function(n){var t=this,i=t._chart,r=!0;if(t._previousState=t._currentState,t._currentState={areas:i._areas,pels:i._pels,rotate:i._pels.length&&t._getElementRotate(i._pels[0].parentNode)},t._previousState&&(r=!1),t._isSelectionChanged){i.isAnimated||t._playSelectPieAnimation(n);t._isSelectionChanged=!1;return}r?t._playLoadPieAnimation(n):t._playUpdatePieAnimation(n)},t.prototype._playSelectPieAnimation=function(n){if(this._previousState!=null){var t=this,i=t._chart._pels[0].parentNode,r=t._previousState.rotate,u=t._getElementRotate(i),h,f,e,o=r[0],s=u[0];o!==s&&(o-s>180?u[0]+=360:s-o>180&&(r[0]+=360),h=t._getAnimation(n,0),f={rotate:r},e={rotate:u},t._setInitState(i,f,e),h.push({ele:i,from:f,to:e}))}},t.prototype._playUpdatePieAnimation=function(n){var h=this,v=h._chart,u=h._previousState,c=v._areas,f=v._pels,e=u.areas.length,l=c.length,y=Math.max(l,e),p=h._getAnimation(n,0),i,r,t,a,s=0;if(l!==0&&e!==0)for(h._playSelectPieAnimation(n),i=0;i<y;i++)r={},i<l&&i<e&&(t=c[0],i===0&&(s=t.angle),e===1?f[i].childNodes[0].setAttribute('d',o.getPathDescOfPie(t.center.x,t.center.y,t.radius,s,Math.PI*2,t.innerRadius||0)):f[i].childNodes[0].setAttribute('d',u.pels[i].childNodes[0].getAttribute('d'))),i<l?(t=c[i],r.to={pie:[t.center.x,t.center.y,t.radius,t.angle,t.sweep,t.innerRadius||0]},r.ele=f[i].childNodes[0]):(t=c[0],a=u.pels[i],r.to={pie:[t.center.x,t.center.y,t.radius,s+Math.PI*2,0,t.innerRadius||0]},f[0].parentNode.appendChild(a),r.done=function(n){return function(){n.parentNode.removeChild(n)}}(a),r.ele=a.childNodes[0]),i<e?(t=u.areas[i],r.from={pie:[t.center.x,t.center.y,t.radius,t.angle,t.sweep,t.innerRadius||0]}):(f[i].childNodes[0].setAttribute('d',o.getPathDescOfPie(t.center.x,t.center.y,t.radius,Math.PI*2+s,0,t.innerRadius||0)),t=u.areas[0],r.from={pie:[t.center.x,t.center.y,t.radius,Math.PI*2+s,0,t.innerRadius||0]}),p.push(r)},t.prototype._playLoadPieAnimation=function(n){var t=this,i=t._chart,u=t.animationMode,r=i._areas,e=i._pels;e.forEach(function(i,e){var h=i.childNodes[0],c,o={},s={};h&&(u===f.Point?(t._parsePathByAngle(r[e],o,s),c=t._getAnimation(n,e)):(t._parsePathByRadius(r[e],o,s),c=t._getAnimation(n,0)),t._setInitState(h,o,s),c.push({ele:h,from:o,to:s}))})},t.prototype._parsePathByRadius=function(n,t,i){var r,u,f=n.center.x,e=n.center.y,h=n.radius,o=n.angle,s=n.sweep,c=n.innerRadius;r=[f,e,0,o,s,0];u=[f,e,h,o,s,c||0];t.pie=r;i.pie=u},t.prototype._parsePathByAngle=function(n,t,i){var r,u,f=n.center.x,e=n.center.y,o=n.radius,s=n.angle,c=n.sweep,h=n.innerRadius;r=[f,e,o,s,0,h||0];u=[f,e,o,s,c,h||0];t.pie=r;t['stroke-width']=0;i.pie=u;i['stroke-width']=1},t}(l),a=function(n){function t(t,i){n.call(this,t,i)}return __extends(t,n),t.prototype._clearState=function(){n.prototype._clearState.call(this);var t=this;t._prevAxesStates&&(t._prevAxesStates=null);t._currAxesStates&&(t._currAxesStates=null)},t.prototype.playAnimation=function(){n.prototype.playAnimation.call(this);var t=this,y=!0,c=t._chart,b=h()&&h().FinancialChart&&c instanceof h().FinancialChart,p=c.series,w=p.length,i,s,e,l,v,a,r,u,o,f=[];for(t._previousState=t._currentState,t._previousXVal=t._currentXVal,t._currentState=[],t._addStart=0,t._removeStart=0,t._currentXVal=c._xlabels.slice(),t._previousState&&t._previousState.length&&(y=!1,a=t._previousState,v=a.length,r=t._previousXVal,u=t._currentXVal,r.length>2&&u.length>2&&(i=u.indexOf(r[0]),i>0&&i<u.length-2?u[i+1]===r[1]&&u[i+2]===r[2]&&(t._addStart=i):(i=r.indexOf(u[0]),i>0&&i<r.length-2&&r[i+1]===u[1]&&r[i+2]===u[2]&&(t._removeStart=i)))),i=0;i<w;i++)if(s=p[i],l=s._getChartType()!=null?s._getChartType():c._getChartType(),e=t._getChartType(l),t._currentState.push({seriesType:l,ele:s.hostElement}),b)t._playDefaultAnimation(f,i);else{if(o=a&&a[i],e==='Default'){t._playDefaultAnimation(f,i);continue}if(y||o&&o.seriesType!==l)t._playLoadAnimation(f,i,e);else if(t._playUpdateAnimation(f,i,e,s,o&&o.ele||null),i===w-1&&i<v-1)for(i++;i<=v-1;i++)t._playUpdateAnimation(f,i,e,null,o.ele)}t._adjustAnimations(e,f);f.length&&t._playAnimation(f);t.axisAnimation&&t._playAxesAnimation()},t.prototype._playAxesAnimation=function(){var n=this,u=n._chart.axes,e=u.length,t,i,f;for(n._prevAxesStates=n._currAxesStates,n._currAxesStates=[],i=0;i<e;i++)t=u[i],n._currAxesStates.push({ele:t.hostElement,vals:t._vals,axis:t,maxValue:r.isDate(t.actualMax)?t.actualMax.getTime():t.actualMax,minValue:r.isDate(t.actualMin)?t.actualMin.getTime():t.actualMin});if(n._prevAxesStates)for(f=Math.max(n._prevAxesStates.length,n._currAxesStates.length),i=0;i<f;i++)n._playAxisAnimation(n._prevAxesStates[i],n._currAxesStates[i])},t.prototype._playAxisAnimation=function(n,t){var i=this,r,u=[],f=[];t&&t.maxValue-t.minValue&&(r=i._parseAxisState(t),i._convertAxisAnimation(u,r.major,t.axis,n.maxValue,n.minValue),i._convertAxisAnimation(u,r.minor,t.axis,n.maxValue,n.minValue));n&&n.maxValue-n.minValue&&(r=i._parseAxisState(n),i._convertAxisAnimation(f,r.major,n.axis),i._convertAxisAnimation(f,r.minor,n.axis));u&&f&&i._combineAxisAnimations(u,f);i._playCurrAxisAnimation(u);i._playPrevAxisAnimation(f)},t.prototype._combineAxisAnimations=function(n,t){for(var u=this,f=t.length,r,i=f-1;i>=0;i--)(r=t[i],r.text)&&n.some(function(n){if(n.text&&n.text===r.text)return u._combineAxisAnimation(n,r),t.splice(i,1),!0})},t.prototype._combineAxisAnimation=function(n,t){var i=this;['label','majorGrid','tick'].forEach(function(r){n[r]&&t[r]&&i._resetExistAxisAttrs(n[r],t[r])})},t.prototype._resetExistAxisAttrs=function(n,t){var u=n.ele,f=t.ele,i={},r={};['x','y','x1','x2','y1','y2'].forEach(function(n){var t=u.getAttribute(n),e=f.getAttribute(n);t!==e&&(i[n]=e,r[n]=t)});n.calcPos=i;n.elePos=r},t.prototype._convertAxisAnimation=function(n,t,r,u,f){var o=this,s=r.hostElement,e,h=r.axisType==i.AxisType.Y;t.forEach(function(t){var i=r.convert(t.val,u,f);isNaN(i)||(e={},t.majorGrid&&(e.majorGrid=o._getAxisAnimationAttrs(t.majorGrid,s,i,h)),t.label&&(e.label=o._getAxisAnimationAttrs(t.label,s,i,h),e.text=t.label.innerHTML||t.label.textContent),t.tick&&(e.tick=o._getAxisAnimationAttrs(t.tick,s,i,h)),n.push(e))})},t.prototype._getAxisAnimationAttrs=function(n,t,i,r){var u,e,f;return u={ele:n,parent:t,elePos:{},calcPos:{}},n.nodeName==='text'?(e=r?'y':'x',f=Number(n.getAttribute(e)),u.elePos[e]=f,u.calcPos[e]=i):(e=r?'y1':'x1',f=Number(n.getAttribute(e)),r?(u.elePos={y1:f,y2:f},u.calcPos={y1:i,y2:i}):(u.elePos={x1:f,x2:f},u.calcPos={x1:i,x2:i})),u.elePos.opacity=1,u.calcPos.opacity=0,u},t.prototype._playCurrAxisAnimation=function(n){var t=this.duration;n&&n.length!==0&&n.forEach(function(n){['majorGrid','label','tick'].forEach(function(i){var r=n[i];if(r){var h=r.parent,u=r.ele,f=r.elePos,s=r.calcPos;o.playAnimation(u,s,f,null,e.Swing,t)}})})},t.prototype._playPrevAxisAnimation=function(n){var t=this.duration;n&&n.length!==0&&n.forEach(function(n){['majorGrid','label','tick'].forEach(function(i){var r=n[i];if(r){var f=r.parent,u=r.ele,s=r.elePos,h=r.calcPos;f.appendChild(u);o.playAnimation(u,s,h,function(){u.parentNode===f&&f.removeChild(u)},e.Swing,t)}})})},t.prototype._parseAxisState=function(n){if(n==null)return null;var e=n.vals,u=n.axis,l=u.axisType==i.AxisType.Y,a=n.ele,f=a.childNodes,t=0,o=e.major,s=e.minor,v=e.hasLbls,h=[],c=[];return o&&o.forEach(function(n,e){var s={},o,c=!!v[e];h.push(s);s.val=n;o=f[t];u.majorGrid&&r.hasClass(o,i.FlexChart._CSS_GRIDLINE)&&(s.majorGrid=o,t++,o=f[t]);l?(c&&o&&u.majorTickMarks!==i.TickMark.None&&r.hasClass(o,i.FlexChart._CSS_TICK)&&(s.tick=o,t++,o=f[t]),c&&o&&(r.hasClass(o,i.FlexChart._CSS_LABEL)||o.querySelector('.'+i.FlexChart._CSS_LABEL))&&(s.label=o,t++)):(c&&o&&(r.hasClass(o,i.FlexChart._CSS_LABEL)||o.querySelector('.'+i.FlexChart._CSS_LABEL))&&(s.label=o,t++,o=f[t]),c&&o&&u.majorTickMarks!==i.TickMark.None&&r.hasClass(o,i.FlexChart._CSS_TICK)&&(s.tick=o,t++))}),s&&s.forEach(function(n){var o={},e;c.push(o);o.val=n;e=f[t];u.minorTickMarks!==i.TickMark.None&&r.hasClass(e,i.FlexChart._CSS_TICK_MINOR)&&(o.tick=e,t++,e=f[t]);u.minorGrid&&r.hasClass(e,i.FlexChart._CSS_GRIDLINE_MINOR)&&(o.majorGrid=e,t++)}),{major:h,minor:c}},t.prototype._playLoadAnimation=function(n,t,i){this['_playLoad'+i+'Animation'](n,t)},t.prototype._playUpdateAnimation=function(n,t,i,r,u){r==null||u==null?r==null?this['_play'+i+'RemoveAnimation'](n,u):this['_play'+i+'AddAnimation'](n,r):this['_play'+i+'MoveAnimation'](n,r,u)},t.prototype._adjustAnimations=function(n,t){var r=t.length,i;if(n==='Column'||n==='Bar')for(i=r-1;i>=0;i--)t[i]==null&&t.splice(i,1)},t.prototype._getChartType=function(n){var t='Default',r=this._chart._isRotated();switch(n){case i.ChartType.Scatter:case i.ChartType.Bubble:case i.ChartType.Candlestick:case i.ChartType.HighLowOpenClose:t='Scatter';break;case i.ChartType.Column:case i.ChartType.Bar:t=r?'Bar':'Column';break;case i.ChartType.Line:case i.ChartType.LineSymbols:case i.ChartType.Area:case i.ChartType.Spline:case i.ChartType.SplineSymbols:case i.ChartType.SplineArea:t='Line';break;default:t='Default'}return t},t.prototype._playLoadLineAnimation=function(n,t){var i=this,e=i._chart.series[t],r=i.animationMode,o=e.hostElement,u;r===f.Point?i._playDefaultAnimation(n,t):(u=r===f.All?i._getAnimation(n,0):i._getAnimation(n,t),[].slice.call(o.childNodes).forEach(function(n){i._setLineRiseDiveAnimation(u,n,!0)}))},t.prototype._setLineRiseDiveAnimation=function(n,t,i){var b=this,u=this,k=u._chart,r=t.nodeName,s=[],y=[],h=u._chart._plotRect,d=h.top+h.height,g=h.left,c,l,a={},v={},p,f,e,o,w;if(r==='g'){[].slice.call(t.childNodes).forEach(function(t){b._setLineRiseDiveAnimation(n,t,i)});return}if(r==='polyline'||r==='polygon'){for(o=t.points,p=o.length||o.numberOfItems,f=0;f<p;f++)e=o[f]||o.getItem(f),k.rotated?s.push({x:g,y:e.y}):s.push({x:e.x,y:d}),y.push({x:e.x,y:e.y});a[r]=s;v[r]=y}else r==='ellipse'&&(u._toggleVisibility(t,!1),i&&(w=function(){u._toggleVisibility(t,!0)}));c=i?a:v;l=i?v:a;u._setInitState(t,c,l);n.push({ele:t,from:c,to:l,done:w})},t.prototype._setLineMoveAnimation=function(n,t,i,r,u){if(t!=null&&i!=null){var f=this,v=t.nodeName,l=[],a=[],y={},p={},o,w,h,s,b,c,e,d,k;for(k=v==='polygon',h=t.points,c=i.points,o=h.length||h.numberOfItems,s=c.length||c.numberOfItems,d=Math.max(o,s),e=0;e<d;e++)e<o&&(w=h[e]||h.getItem(e),l.push({x:w.x,y:w.y})),e<s&&(b=c[e]||c.getItem(e),a.push({x:b.x,y:b.y}));f._addStart?(f._adjustStartLinePoints(f._addStart,l,h),o+=f._addStart):f._removeStart&&(f._adjustStartLinePoints(f._removeStart,a,c),s+=f._removeStart);s>o?f._adjustEndLinePoints(s,o,l,h,k):s<o&&f._adjustEndLinePoints(o,s,a,c,k);y[v]=l;p[v]=a;f._setInitState(r,y,p);n.push({ele:r,from:y,to:p,done:u})}},t.prototype._adjustStartLinePoints=function(n,t,i){for(var r=i[0]||i.getItem(0);n;)t.splice(0,0,{x:r.x,y:r.y}),n--},t.prototype._adjustEndLinePoints=function(n,t,i,r,u){var e,o,f;for(u&&(r.length>=3||r.numberOfItems>=3)?(o=i.pop(),e=i.pop(),f=r[r.length-3]||r.getItem(r.numberOfItems-3)):f=r[r.length-1]||r.getItem(r.numberOfItems-1);n>t;)i.push({x:f.x,y:f.y}),t++;u&&o&&e&&(i.push(e),i.push(o))},t.prototype._playLineRemoveAnimation=function(n,t){var r=this,e=r._chart,u=e.series[0].hostElement.parentNode,i=r._getAnimation(n,0),f;u.appendChild(t);[].slice.call(t.childNodes).forEach(function(n){r._setLineRiseDiveAnimation(i,n,!1)});i.length&&(f=i[0].done,i[0].done=function(){t&&t.parentNode===u&&u.removeChild(t);f&&f()})},t.prototype._playLineAddAnimation=function(n,t){var i=this,r=t.hostElement,u=this._getAnimation(n,0);[].slice.call(r.childNodes).forEach(function(n){i._setLineRiseDiveAnimation(u,n,!0)})},t.prototype._playLineMoveAnimation=function(n,t,i){var r=this,l=r._chart,c=r._getAnimation(n,0),u=[],o,s,h,f,e;o=t.hostElement;h=[].slice.call(i.childNodes);s=[].slice.call(o.childNodes);s.forEach(function(n,t){e=n.nodeName;f=h[t];e==='g'?[].slice.call(n.nodeChilds).forEach(function(n){f&&(u.push(n),r._toggleVisibility(n,!1))}):e==='polygon'||e==='polyline'?r._setLineMoveAnimation(c,f,n,n,t===0?function(){u.forEach(function(n){r._toggleVisibility(n,!0)});u=null}:null):f&&(u.push(n),r._toggleVisibility(n,!1))})},t.prototype._playLoadColumnAnimation=function(n,t){this._playLoadBarAnimation(n,t,!0)},t.prototype._playLoadBarAnimation=function(n,t,i){i===void 0&&(i=!1);var r=this,o=r._chart.series[t],u=r.animationMode,s=o.hostElement,e;e=[].slice.call(s.childNodes);e.forEach(function(e,o){var s,h=e.nodeName;s=u===f.Point?r._getAnimation(n,o):u===f.Series?r._getAnimation(n,t):r._getAnimation(n,0);h==='g'?[].slice.call(e.childNodes).forEach(function(n){r._setLoadBarAnimation(s,n,i)}):r._setLoadBarAnimation(s,e,i)})},t.prototype._setBarAnimation=function(n,t,i,r,u){this._setInitState(t,i,r);n.push({ele:t,from:i,to:r,done:u})},t.prototype._setLoadBarAnimation=function(n,t,i,r,u){r===void 0&&(r=!1);var s=this,f=i?'height':'width',h=i?'y':'x',v=t.getAttribute(f),y=t.getAttribute(h),p=i?'top':'left',a=s._chart._plotRect,c,l,e={},o={};e[f]=0;o[f]=Number(v);i&&(e[h]=a[f]+a[p],o[h]=Number(y));c=r?o:e;l=r?e:o;t.nodeName==='g'?[].slice.call(t.childNodes).forEach(function(t){s._setBarAnimation(n,t,c,l,u)}):s._setBarAnimation(n,t,c,l,u)},t.prototype._setMoveBarAnimation=function(n,t,i){var r={},u={};t!=null&&i!=null&&(['width','height','x','y','top','left'].forEach(function(n){var f=t.getAttribute(n),e=i.getAttribute(n);f!==e&&(r[n]=Number(f),u[n]=Number(e))}),this._setInitState(i,r,u),n.push({ele:i,from:r,to:u}))},t.prototype._playColumnRemoveAnimation=function(n,t){this._playBarRemoveAnimation(n,t,!0)},t.prototype._playColumnAddAnimation=function(n,t){this._playBarAddAnimation(n,t,!0)},t.prototype._playColumnMoveAnimation=function(n,t,i){this._playBarMoveAnimation(n,t,i,!0)},t.prototype._playBarRemoveAnimation=function(n,t,i){i===void 0&&(i=!1);var r=this,o=r._chart,u=o.series[0].hostElement.parentNode,f=r._getAnimation(n,0),e;u.appendChild(t);e=[].slice.call(t.childNodes);e.forEach(function(n){r._setLoadBarAnimation(f,n,i,!0)});f.length&&(f[0].done=function(){t&&t.parentNode===u&&u.removeChild(t)})},t.prototype._playBarAddAnimation=function(n,t,i){var e=this,r,u,f;i===void 0&&(i=!1);r=t.hostElement;u=this._getAnimation(n,2);f=[].slice.call(r.childNodes);f.forEach(function(n){e._setLoadBarAnimation(u,n,i,!1)})},t.prototype._playBarMoveAnimation=function(n,t,i,r){var u,v,c,h,f,e,s,l,o,a;if(r===void 0&&(r=!1),u=this,v=u._chart,c=t.hostElement,f=[].slice.call(i.childNodes),u._addStart)for(o=0,e=f[0];o<u._addStart;)f.splice(0,0,e),o++;if(u._removeStart)for(o=0,e=f[f.length-1];o<u._removeStart;)a=f.shift(),f.push(a),o++;s=f.length;h=[].slice.call(c.childNodes);l=h.length;h.forEach(function(t,i){var o;if(i<s){if(e=f[i],i<u._addStart?(o=u._getAnimation(n,2),u._setLoadBarAnimation(o,t,r,!1)):i>=s-u._removeStart?(o=u._getAnimation(n,2),u._setLoadBarAnimation(o,t,r,!1),o=u._getAnimation(n,0),u._removeBarAnimation(o,t,e,r)):(o=u._getAnimation(n,1),u._setMoveBarAnimation(o,e,t)),i===l-1&&i<s-1)for(o=u._getAnimation(n,0),i++;i<s;i++)e=f[i],u._removeBarAnimation(o,t,e,r)}else o=u._getAnimation(n,2),u._setLoadBarAnimation(o,t,r,!1)})},t.prototype._removeBarAnimation=function(n,t,i,r){var u=t.parentNode;u.appendChild(i);this._setLoadBarAnimation(n,i,r,!0,function(n){return function(){n.parentNode&&n.parentNode===u&&u.removeChild(n)}}(i))},t.prototype._playLoadScatterAnimation=function(n,t){var i=this,e=i._chart,r=e.series[t],o=i.animationMode,h=r.hostElement,u=r._xValues||e._xvals,s;u.length===0&&(u=r._pointIndexes);s=[].slice.call(h.childNodes);s.forEach(function(r,e){var s;s=o===f.Point?i._getScatterAnimation(n,u[e]):o===f.Series?i._getAnimation(n,t):i._getAnimation(n,0);i._setLoadScatterAnimation(s,r,!1)})},t.prototype._setLoadScatterAnimation=function(n,t,i,r){var s=this,e,o,u,f;if(i===void 0&&(i=!1),u={},f={},t.nodeName==='g'){[].slice.call(t.childNodes).forEach(function(t){s._setLoadScatterAnimation(n,t,i,r)});return}['rx','ry','stroke-width'].forEach(function(n){var i=t.getAttribute(n);u[n]=0;f[n]=Number(i)});e=i?f:u;o=i?u:f;this._setInitState(t,e,o);n.push({ele:t,from:e,to:o,done:r})},t.prototype._setUpdateScatterAnimation=function(n,t,i,r){var u={},f={};['cx','cy'].forEach(function(n){var r=t.getAttribute(n),e=i.getAttribute(n);r!==e&&(u[n]=Number(r),f[n]=Number(e))});this._setInitState(i,u,f);n.push({ele:i,from:u,to:f,done:r})},t.prototype._getScatterAnimation=function(n,t){var i=this._getScatterAnimationIndex(n,t);return n[i]||(n[i]=[]),n[i]},t.prototype._getScatterAnimationIndex=function(n,t){var u=this._chart,i=u.axisX,r=i.min==null?i.actualMin:i.min,f=i.max==null?i.actualMax:i.max;return Math.ceil((t-r)/((f-r)/20))},t.prototype._playScatterRemoveAnimation=function(n,t){var i=this,e=i._chart,r=e.series[0].hostElement.parentNode,u=i._getAnimation(n,0),f;r.appendChild(t);f=[].slice.call(t.childNodes);f.forEach(function(n){i._setLoadScatterAnimation(u,n,!0)});u.length&&(u[0].done=function(){t&&t.parentNode===r&&r.removeChild(t)})},t.prototype._playScatterAddAnimation=function(n,t){var r=this,u=t.hostElement,f=this._getAnimation(n,0),i;i=[].slice.call(u.childNodes);i.forEach(function(n){r._setLoadScatterAnimation(f,n,!1)})},t.prototype._playScatterMoveAnimation=function(n,t,i){var r=this,v=r._chart,e=r._getAnimation(n,0),c,h,u,f,s,l,o,a;if(c=t.hostElement,u=[].slice.call(i.childNodes),r._addStart)for(o=0,f=u[0];o<r._addStart;)u.splice(0,0,f),o++;if(r._removeStart)for(o=0,f=u[u.length-1];o<r._removeStart;)a=u.shift(),u.push(a),o++;s=u.length;h=[].slice.call(c.childNodes);l=h.length;h.forEach(function(n,t){if(t<s){if(t<r._addStart?r._setLoadScatterAnimation(e,n,!1):t>=s-r._removeStart?(r._setLoadScatterAnimation(e,n,!1),f=u[t],r._removeScatterAnimation(e,n,f)):(f=u[t],r._setUpdateScatterAnimation(e,f,n)),t===l-1&&t<s-1)for(t++;t<s;t++)f=u[t],r._removeScatterAnimation(e,n,f)}else r._setLoadScatterAnimation(e,n,!1)})},t.prototype._removeScatterAnimation=function(n,t,i){var r=t.parentNode;r.appendChild(i);this._setLoadScatterAnimation(n,i,!0,function(n){return function(){n.parentNode&&n.parentNode===r&&r.removeChild(n)}}(i))},t.prototype._playDefaultAnimation=function(n,t){var f=this._chart,c=f.series[t],u=c.hostElement,e=f._plotRect,l=f._currentRenderEngine,s=u.getAttribute('clip-path'),o='clipPath'+(1e6*Math.random()).toFixed(),i,h;l.addClipRect(new r.Rect(e.left,e.top,0,e.height),o);u.setAttribute('clip-path','url(#'+o+')');i=f.hostElement.querySelector('#'+o);h=this._getAnimation(n,0);h.push({ele:i.querySelector('rect'),from:{width:0},to:{width:e.width},done:function(){u&&(s?u.setAttribute('clip-path',s):u.removeAttribute('clip-path'),i&&i.parentNode&&i.parentNode.removeChild(i))}})},t}(l),y=function(n){function t(t,i){n.call(this,t,i)}return __extends(t,n),t.prototype._getDurationAndDelay=function(t,i){var r=n.prototype._getDurationAndDelay.call(this,t,i);return this.animationMode===f.Point&&(r.duration=i/t,r.delay=i/t),r},t.prototype._playAxesAnimation=function(){},t.prototype._getChartType=function(t){var i=n.prototype._getChartType.call(this,t);return i==='Bar'&&(i='Column'),i},t.prototype._playLoadLineAnimation=function(n,t){var i=this,l=i._chart,r=i._chart.series[t],u=r._xValues||l._xvals,s=i.animationMode,e=r.hostElement,h,c,o;s===f.Point?(u.length===0&&(u=r._pointIndexes),o=[].slice.call(e.childNodes),c=o.length-e.querySelectorAll('ellipse').length,o.forEach(function(t,r){i._setRadarLinePointAnimation(n,t,r,u,c)})):(h=s===f.All?i._getAnimation(n,0):i._getAnimation(n,t),[].slice.call(e.childNodes).forEach(function(n){i._setLineRiseDiveAnimation(h,n,!0)}))},t.prototype._setRadarLinePointAnimation=function(n,t,i,r,u){var e=this,d=e._chart,s=t.nodeName,g=[],nt=[],w=[],h=[],tt=d._center,o=[],it=!1,c={},l={},v,f,b,a,k,y,p,rt=0;if(s==='polyline'||s==='polygon'){for(a=t.points,v=a.length||a.numberOfItems,f=0;f<v;f++)p=e._getScatterAnimationIndex(n,r[f]),o[p]||(o[p]=[]),o[p].push(f),b=a[f]||a.getItem(f),g.push({x:tt.x,y:tt.y}),nt.push({x:b.x,y:b.y});for(f=0,v=o.length;f<v;f++)o[f]&&(y=e._getAnimation(n,rt),w=h.length?h.slice():g.slice(),h=w.slice(),o[f].forEach(function(n){var t=nt[n];h[n]={x:t.x,y:t.y}}),c={},l={},c[s]=w,l[s]=h,it||(e._setInitState(t,c,l),it=!0),y.push({ele:t,from:c,to:l,done:k}),rt++)}else if(s==='ellipse'){if(f=i-(u||0),f<0)return;y=d._isPolar?e._getScatterAnimation(n,r[f]):e._getScatterAnimation(n,f);e._toggleVisibility(t,!1);k=function(){e._toggleVisibility(t,!0)};y.push({ele:t,from:c,to:l,done:k})}},t.prototype._setLineRiseDiveAnimation=function(n,t,i){var e=this,b=e._chart,r=t.nodeName,a=[],v=[],y=b._center,o,s,h={},c={},p,u,l,f,w;if(r==='polyline'||r==='polygon'){for(f=t.points,p=f.length||f.numberOfItems,u=0;u<p;u++)l=f[u]||f.getItem(u),a.push({x:y.x,y:y.y}),v.push({x:l.x,y:l.y});h[r]=a;c[r]=v}else r==='ellipse'&&(e._toggleVisibility(t,!1),i&&(w=function(){e._toggleVisibility(t,!0)}));o=i?h:c;s=i?c:h;e._setInitState(t,o,s);n.push({ele:t,from:o,to:s,done:w})},t.prototype._parsePathByRadius=function(n,t,i){var r,u,f=n.center.x,e=n.center.y,h=n.radius,o=n.angle,s=n.sweep,c=n.innerRadius;r=[f,e,0,o,s,0];u=[f,e,h,o,s,c||0];t.pie=r;i.pie=u},t.prototype._playUpdateAnimation=function(t,i,r,u,f){if(r==='Bar'||r==='Column'){if(u==null)return;this._playLoadBarAnimation(t,i,!1)}else n.prototype._playUpdateAnimation.call(this,t,i,r,u,f)},t.prototype._playLoadBarAnimation=function(n,t,i){i===void 0&&(i=!1);var r=this,u=r._chart,s=u.series[t],h=u._areas[t],e=r.animationMode,c=s.hostElement,o;o=[].slice.call(c.childNodes);o.forEach(function(i,u){var c,o={},s={},l;c=e===f.Point?r._getAnimation(n,u):e===f.Series?r._getAnimation(n,t):r._getAnimation(n,0);l=h[u];r._parsePathByRadius(l,o,s);r._setInitState(i,o,s);c.push({ele:i,from:o,to:s})})},t}(a),o=function(){function n(){}return n.playAnimations=function(t,i,r,u,f,o,s){f===void 0&&(f=e.Swing);var l=t.length,h=0,c=[];return t.forEach(function(t,e){var a=n.playAnimation(t,i[e],r[e],function(){h===l-1&&u&&u();h++},f,o,s);c.push(a)}),c},n.playAnimation=function(t,i,r,u,f,o,s){f===void 0&&(f=e.Swing);var h=n.parseAttrs(i,r);return n.animate(function(i){n.setElementAttr(t,h,i)},u,f,o,s)},n.setElementAttr=function(t,i,r){var u;for(var f in i)u=i[f],n.calcValue(u,r),t.setAttribute(f,u.getValue(u.value,r))},n.getPathDescOfPie=function(n,t,i,u,f,e){var v,h,c,l,s,a,y,p,o;return e===void 0&&(e=0),v=!1,f>=Math.PI*2&&(v=!0,f=Math.PI*2-.001),h=new r.Point(n,t),h.x+=i*Math.cos(u),h.y+=i*Math.sin(u),c=u+f,l=new r.Point(n,t),l.x+=i*Math.cos(c),l.y+=i*Math.sin(c),e&&(s=new r.Point(n,t),s.x+=e*Math.cos(c),s.y+=e*Math.sin(c),a=new r.Point(n,t),a.x+=e*Math.cos(u),a.y+=e*Math.sin(u)),y=' 0 0,1 ',p=' 0 0,0 ',Math.abs(f)>Math.PI&&(y=' 0 1,1 ',p=' 0 1,0 '),o='M '+h.x.toFixed(3)+','+h.y.toFixed(3),o+=' A '+i.toFixed(3)+','+i.toFixed(3)+y,o+=l.x.toFixed(3)+','+l.y.toFixed(3),e?(o+=v?' M '+s.x.toFixed(3)+','+s.y.toFixed(3):' L '+s.x.toFixed(3)+','+s.y.toFixed(3),o+=' A '+e.toFixed(3)+','+e.toFixed(3)+p,o+=a.x.toFixed(3)+','+a.y.toFixed(3)):o+=' L '+n.toFixed(3)+','+t.toFixed(3),v||(o+=' z'),o},n.parseAttrs=function(t,i){var u={};for(var r in t)if(i[r]!=null)switch(r){case'polyline':u.points=n.parseAttr(t[r],i[r],function(n,t){if(t===1){for(var f,u,i,r;n.length>1;)if(i=n[0],r=n[1],i.x===r.x&&i.y===r.y)n.splice(1,1);else{i=null;r=null;break}for(f=n.length,u=f-1;u>=0;u--)if(i=r,r=n[u],i)if(i.x===r.x&&i.y===r.y)n.pop();else break}return n.map(function(n){return n.x+','+n.y}).join(' ')});break;case'polygon':u.points=n.parseAttr(t[r],i[r],function(n,t){if(t===1){for(var f,u,i,r,e=n.pop(),o=n.pop();n.length>1;)if(i=n[0],r=n[1],i.x===r.x&&i.y===r.y)n.splice(1,1);else{i=null;r=null;break}for(f=n.length,u=f-1;u>=0;u--)if(i=r,r=n[u],i)if(i.x===r.x&&i.y===i.y)n.splice(u,1);else break;n.push(o);n.push(e)}return n.map(function(n){return n.x+','+n.y}).join(' ')});break;case'd':u[r]=n.parseAttr(t[r],i[r],function(n){return n.map(function(n){return typeof n=='string'?n:n['0']+','+n['1']}).join(' ')});break;case'pie':u.d=n.parseAttr(t[r],i[r],function(t){return n.getPathDescOfPie.apply(n,t)});break;case'rotate':u.transform=n.parseAttr(t[r],i[r],function(n){return'rotate('+n.join(' ')+')'});break;case'width':case'height':case'rx':case'ry':case'stroke-width':u[r]=n.parseAttr(t[r],i[r],function(n){return Math.abs(n)});break;default:u[r]=n.parseAttr(t[r],i[r])}return u},n.animate=function(n,t,i,u,f){i===void 0&&(i=e.Swing);u===void 0&&(u=400);f===void 0&&(f=16);r.asFunction(n);r.asNumber(u,!1,!0);r.asNumber(f,!1,!0);var o=0,s=setInterval(function(){var h=Date.now(),r=o/u;r=p[e[i]](r);n(r);o+=f;o>=u&&(clearInterval(s),(r<1||r>1)&&n(1),t&&t())},f);return s},n.calcValue=function(t,i){var u=t.from,f=t.diff,e=t.value;r.isNumber(u)?t.value=f===0?u:u+f*i:r.isArray(u)&&n.parseArrayAttr(e,u,f,function(n,t){return typeof n=='number'?n+t*i:n})},n.parseAttr=function(t,i,u){var f,e,o,s;return r.isArray(t)&&r.isArray(i)?(f=t,e=i,o=[],s=f.slice(),n.parseArrayAttr(o,f,e,function(n,t){return n===t?0:t-n})):(f=Number(t),e=Number(i),s=f,o=e-f),{from:f,to:e,value:s,diff:o,getValue:u||function(n){return n}}},n.parseArrayAttr=function(n,t,i,u){t.forEach(function(t,f){var o,s={},h=[],e=i[f];r.isNumber(t)||typeof t=='string'?n[f]=u(t,e):r.isArray(t)?(t.forEach(function(n,i){h[i]=u(t[i],e[i])}),n[f]=h):(o=Object.getOwnPropertyNames(t),o.forEach(function(n){s[n]=u(t[n],e[n])}),n[f]=s)})},n}(),p=function(){function n(){}return n.Linear=function(n){return n},n.Swing=function(n){var t=1.70158;return(n/=.5)<1?.5*n*n*(((t*=1.525)+1)*n-t):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},n.EaseInQuad=function(n){return n*n},n.EaseOutQuad=function(n){return n*(2-n)},n.EaseInOutQuad=function(n){return n<.5?2*n*n:-1+(4-2*n)*n},n.EaseInCubic=function(n){return n*n*n},n.EaseOutCubic=function(n){return--n*n*n+1},n.EaseInOutCubic=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},n.EaseInQuart=function(n){return n*n*n*n},n.EaseOutQuart=function(n){return 1- --n*n*n*n},n.EaseInOutQuart=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},n.EaseInQuint=function(n){return n*n*n*n*n},n.EaseOutQuint=function(n){return 1+--n*n*n*n*n},n.EaseInOutQuint=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n},n.EaseInSine=function(n){return-Math.cos(n*(Math.PI/2))+1},n.EaseOutSine=function(n){return Math.sin(n*(Math.PI/2))},n.EaseInOutSine=function(n){return-.5*(Math.cos(Math.PI*n)-1)},n.EaseInExpo=function(n){return n==0?0:Math.pow(2,10*(n-1))},n.EaseOutExpo=function(n){return n==1?1:-Math.pow(2,-10*n)+1},n.EaseInOutExpo=function(n){return n==!!n?n:(n/=.5)<1?.5*Math.pow(2,10*(n-1)):.5*(-Math.pow(2,-10*--n)+2)},n.EaseInCirc=function(n){return-(Math.sqrt(1-n*n)-1)},n.EaseOutCirc=function(n){return Math.sqrt(1-Math.pow(n-1,2))},n.EaseInOutCirc=function(n){return(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)},n.EaseInBack=function(n){var t=1.70158;return n*n*((t+1)*n-t)},n.EaseOutBack=function(n){var t=1.70158;return n=n-1,n*n*((t+1)*n+t)+1},n.EaseInOutBack=function(n){var t=1.70158;return(n/=.5)<1?.5*n*n*(((t*=1.525)+1)*n-t):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},n.EaseInBounce=function(t){return 1-n.EaseOutBounce(1-t)},n.EaseOutBounce=function(n){var t=7.5625;return n<1/2.75?t*n*n:n<2/2.75?t*(n-=1.5/2.75)*n+.75:n<2.5/2.75?t*(n-=2.25/2.75)*n+.9375:t*(n-=2.625/2.75)*n+.984375},n.EaseInOutBounce=function(t){return t<.5?n.EaseInBounce(t*2)*.5:n.EaseOutBounce(t*2-1)*.5+.5},n.EaseInElastic=function(n){return n==!!n?n:-(Math.pow(2,10*(n-=1))*Math.sin((n-.075)*2*Math.PI/.3))},n.EaseOutElastic=function(n){return n==!!n?n:Math.pow(2,-10*n)*Math.sin((n-.075)*2*Math.PI/.3)+1},n.EaseInOutElastic=function(n){return n==!!n?n:(n=n*2,n<1)?-.5*Math.pow(2,10*(n-=1))*Math.sin((n-.1125)*2*Math.PI/.45):Math.pow(2,-10*(n-=1))*Math.sin((n-.1125)*2*Math.PI/.45)*.5+1},n}()})