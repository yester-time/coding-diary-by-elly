"use strict";(self.webpackChunkcoding_diary_by_elly=self.webpackChunkcoding_diary_by_elly||[]).push([[7899,3047],{6412:function(e,n,t){var a=t(595);function o(e){e.register(a),function(e){e.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var n=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,t=e.languages["markup-templating"];e.hooks.add("before-tokenize",(function(e){t.buildPlaceholders(e,"django",n)})),e.hooks.add("after-tokenize",(function(e){t.tokenizePlaceholders(e,"django")})),e.languages.jinja2=e.languages.django,e.hooks.add("before-tokenize",(function(e){t.buildPlaceholders(e,"jinja2",n)})),e.hooks.add("after-tokenize",(function(e){t.tokenizePlaceholders(e,"jinja2")}))}(e)}e.exports=o,o.displayName="django",o.aliases=["jinja2"]},595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,i){if(t.language===a){var r=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof i&&!i(e))return e;for(var o,s=r.length;-1!==t.code.indexOf(o=n(a,s));)++s;return r[s]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,i=Object.keys(t.tokenStack);!function r(s){for(var l=0;l<s.length&&!(o>=i.length);l++){var u=s[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=i[o],g=t.tokenStack[c],d="string"===typeof u?u:u.content,f=n(a,c),p=d.indexOf(f);if(p>-1){++o;var k=d.substring(0,p),b=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),h=d.substring(p+f.length),y=[];k&&y.push.apply(y,r([k])),y.push(b),h&&y.push.apply(y,r([h])),"string"===typeof u?s.splice.apply(s,[l,1].concat(y)):u.content=y}}else u.content&&r(u.content)}return s}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_django.1f1f331d.chunk.js.map