(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(107)),l={id:"developer",title:"Developer Guide",sidebar_label:"Developer"},o={unversionedId:"advanced_guides/developer",id:"advanced_guides/developer",isDocsHomePage:!1,title:"Developer Guide",description:"This section is a work in progress.",source:"@site/docs/advanced_guides/developer.md",slug:"/advanced_guides/developer",permalink:"/vkpr-docs/docs/next/advanced_guides/developer",editUrl:"https://github.com/vertigobr/vkpr/edit/docs/docs/advanced_guides/developer.md",version:"current",sidebar_label:"Developer",sidebar:"docs",previous:{title:"VKPR installation on Digital Ocean Cluster",permalink:"/vkpr-docs/docs/next/guides/digital-ocean/installation"},next:{title:"Prerequisites to Velero installation",permalink:"/vkpr-docs/docs/next/advanced_guides/velero-setup"}},i=[{value:"Clone project",id:"clone-project",children:[]},{value:"Local cluster with k3d",id:"local-cluster-with-k3d",children:[]},{value:"Local VKPR deployment",id:"local-vkpr-deployment",children:[{value:"Get chart dependencies",id:"get-chart-dependencies",children:[]},{value:"Install VKPR",id:"install-vkpr",children:[]},{value:"Testing local Whoami app",id:"testing-local-whoami-app",children:[]}]}],s={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(c.b)("p",null,"This guide explains how to set up an environment for development of the chart VKPR and some tools are prerequisites:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://k3d.io/"}),"k3d")," >= 3.3.0"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://helm.sh/docs/intro/install/#helm"}),"Helm")," >= 3.0.0")),Object(c.b)("h2",{id:"clone-project"},"Clone project"),Object(c.b)("p",null,"To start you need to clone project, you need to run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"git clone https://github.com/vertigobr/vkpr.git\n")),Object(c.b)("h2",{id:"local-cluster-with-k3d"},"Local cluster with k3d"),Object(c.b)("p",null,"Then for local development it is necessary to create a cluster for the tests, we recommend k3d, run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'k3d cluster create vkpr-local \\\n  -p "8080:80@loadbalancer" \\\n  -p "8443:443@loadbalancer" \\\n  --k3s-server-arg "--no-deploy=traefik"\n')),Object(c.b)("p",null,"K3d by default installs Traefik as a load balancer, above command creates a k3d cluster without Traefik because we will use VKPR's NGINX Ingress Controller."),Object(c.b)("p",null,"After creating the cluster setting the KUBECONFIG:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"export KUBECONFIG=$(k3d kubeconfig write vkpr-local)\nkubectl cluster-info \n")),Object(c.b)("h2",{id:"local-vkpr-deployment"},"Local VKPR deployment"),Object(c.b)("h3",{id:"get-chart-dependencies"},"Get chart dependencies"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"helm dependency update ./charts/vkpr\n")),Object(c.b)("h3",{id:"install-vkpr"},"Install VKPR"),Object(c.b)("p",null,"Then install and configure VKPR running (update the ",Object(c.b)("inlineCode",{parentName:"p"},"VALUES_FILE")," values):"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"helm upgrade -i vkpr --skip-crds -f <VALUES_FILE> ./charts/vkpr\n")),Object(c.b)("p",null,"To access services it is necessary to add some custom domains to ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/hosts"),". First get the external ip of nginx and then edit the hosts file (update ",Object(c.b)("inlineCode",{parentName:"p"},"LOAD_BALANCER_IP")," value), run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Get external ip from nginx\nkubectl get service vkpr-ingress-nginx-controller\n\n# Edit hosts file\nsudo sh -c \"echo '<LOAD_BALANCER_IP> whoami.localdomain vkpr-grafana.default.svc vkpr-jaeger.default.svc vkpr-vault.default.svc vkpr-keycloak-http.default.svc' >> /etc/hosts\"\n")),Object(c.b)("h3",{id:"testing-local-whoami-app"},"Testing local Whoami app"),Object(c.b)("p",null,"To access in browser:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"url: http://whoami.localdomain\n")))}p.isMDXComponent=!0},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||c;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);