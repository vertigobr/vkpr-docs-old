(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||l;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(107)),o={id:"quickstart",title:"Quickstart"},c={unversionedId:"quickstart",id:"version-0.8.x/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"This document walks you through a default VKPR installation. The following links guide you to the installation on specific clouds: EKS, Digital Ocean, GKE.",source:"@site/versioned_docs/version-0.8.x/quickstart.md",slug:"/quickstart",permalink:"/vkpr-docs/docs/quickstart",editUrl:"https://github.com/vertigobr/vkpr/edit/docs/versioned_docs/version-0.8.x/quickstart.md",version:"0.8.x",sidebar:"version-0.8.x/docs",previous:{title:"FAQ",permalink:"/vkpr-docs/docs/faq"},next:{title:"Basic installation",permalink:"/vkpr-docs/docs/guides/local/basic-installation"}},i=[{value:"Installation and setup VKPR",id:"installation-and-setup-vkpr",children:[{value:"Step 1: Set up values",id:"step-1-set-up-values",children:[]},{value:"Step 2: Deploy VKPR",id:"step-2-deploy-vkpr",children:[]}]},{value:"Upgrading VKPR",id:"upgrading-vkpr",children:[]},{value:"Cleanup VKPR",id:"cleanup-vkpr",children:[]}],p={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This document walks you through a default VKPR installation. The following links guide you to the installation on specific clouds: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/eks/installation"}),"EKS"),", Digital Ocean, GKE."),Object(l.b)("h2",{id:"installation-and-setup-vkpr"},"Installation and setup VKPR"),Object(l.b)("h3",{id:"step-1-set-up-values"},"Step 1: Set up values"),Object(l.b)("p",null,"In this section, we are going to prepare a values file to deploy VKPR in the Cluster. A values file example can be found ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vertigobr/vkpr/tree/master/examples"}),"here"),"."),Object(l.b)("p",null,"All sub-charts specified into ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vertigobr/vkpr/blob/master/charts/vkpr/Chart.yaml"}),"Chart.yaml")," can be enabled/disabled in values with the following key ",Object(l.b)("inlineCode",{parentName:"p"},"enabled"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"nginx-ingress:\n  enabled: true\n")),Object(l.b)("p",null,"The charts: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stacks#nginx-ingress-controller"}),"NGINX Ingress Controller"),", ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stacks#loki"}),"Loki")," and ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stacks#prometheus-operator"}),"Prometheus Operator")," are enabled by default."),Object(l.b)("p",null,"An example of the implementation of each sub-chart can be found in the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stacks"}),"stack documentation"),"."),Object(l.b)("h3",{id:"step-2-deploy-vkpr"},"Step 2: Deploy VKPR"),Object(l.b)("p",null,"With the values file concluded, let's deploy it."),Object(l.b)("p",null,"First, add helm repository:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"helm repo add vertigo https://charts.vertigo.com.br\nhelm repo update\n")),Object(l.b)("p",null,"Then, deploy VKPR:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"helm install -f values.yaml -n vkpr vkpr vertigo/vkpr\n")),Object(l.b)("h2",{id:"upgrading-vkpr"},"Upgrading VKPR"),Object(l.b)("p",null,"In order to upgrade the VKPR in the cluster, update the values file and apply:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"helm upgrade -i -f values.yaml -n vkpr vkpr vertigo/vkpr\n")),Object(l.b)("h2",{id:"cleanup-vkpr"},"Cleanup VKPR"),Object(l.b)("p",null,"To remove VKPR in a cluster, execute:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"helm uninstall vkpr\n")))}s.isMDXComponent=!0}}]);