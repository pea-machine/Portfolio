/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-inlinesvg-svg-svgclippaths-svgfilters-setclasses !*/
!function(e,n,t){function s(e,n){return typeof e===n}function a(){var e,n,t,a,o,i,c;for(var f in l)if(l.hasOwnProperty(f)){if(e=[],n=l[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(a=s(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],c=i.split("."),1===c.length?Modernizr[c[0]]=a:(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=a),r.push((a?"":"no-")+c.join("-"))}}function o(e){var n=f.className,t=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(s,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),u?f.className.baseVal=n:f.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var r=[],l=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){l.push({name:e,fn:n,options:t})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgfilters",function(){var n=!1;try{n="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return n});var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),p={}.toString;Modernizr.addTest("svgclippaths",function(){return!!n.createElementNS&&/SVGClipPath/.test(p.call(n.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),a(),o(r),delete c.addTest,delete c.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);

(function(Modernizr){

  // Here are all the values we will test. If you want to use just one or two, comment out the lines of test you don't need.
  var tests = [
    { name: 'svg', value: 'url(#test)' }, // False positive in IE, supports SVG clip-path, but not on HTML element
    { name: 'inset', value: 'inset(10px 20px 30px 40px)' },
    { name: 'circle', value: 'circle(60px at center)' },
    { name: 'ellipse', value: 'ellipse(50% 50% at 50% 50%)' },
    { name: 'polygon', value: 'polygon(50% 0%, 0% 100%, 100% 100%)' }
  ];

  var t = 0,
      name, value, prop;

  for (; t < tests.length; t++) {
    name = tests[t].name;
    value = tests[t].value;
    Modernizr.addTest('cssclippath' + name, function(){
      // Try using window.CSS.supports
      if ( 'CSS' in window && 'supports' in window.CSS ) {
        for (var i = 0; i < Modernizr._prefixes.length; i++) {
          prop = Modernizr._prefixes[i] + 'clip-path'

          if ( window.CSS.supports(prop,value) ) {
            return true;
          }
        }
        return false;
      }
      // Otherwise, use Modernizr.testStyles and examine the property manually
      return Modernizr.testStyles('#modernizr { '+Modernizr._prefixes.join('clip-path:'+value+'; ')+' }',function(elem, rule) {
        var style = getComputedStyle(elem),
            clip = style.clipPath;

        if ( !clip || clip == "none" ) {
          clip = false;

          for (var i = 0; i < Modernizr._domPrefixes.length; i++) {
            test = Modernizr._domPrefixes[i] + 'ClipPath';
            if ( style[test] && style[test] !== "none" ) {
              clip = true;
              break;
            }
          }
        }

        return Modernizr.testProp('clipPath') && clip;
      });
    });

  }

})(Modernizr);