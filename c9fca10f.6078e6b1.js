(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||l;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(107)),i={id:"installation",title:"VKPR installation on Amazon EKS",sidebar_label:"Installation"},o={unversionedId:"guides/eks/installation",id:"version-0.8.x/guides/eks/installation",isDocsHomePage:!1,title:"VKPR installation on Amazon EKS",description:"This section is a work in progress.",source:"@site/versioned_docs/version-0.8.x/guides/eks/installation.md",slug:"/guides/eks/installation",permalink:"/vkpr-docs/docs/guides/eks/installation",editUrl:"https://github.com/vertigobr/vkpr/edit/docs/versioned_docs/version-0.8.x/guides/eks/installation.md",version:"0.8.x",sidebar_label:"Installation",sidebar:"version-0.8.x/docs",previous:{title:"Vault authentication with KeyCloak",permalink:"/vkpr-docs/docs/guides/local/vault-with-keycloak"},next:{title:"Prerequisites to Velero installation on Amazon EKS",permalink:"/vkpr-docs/docs/guides/eks/velero-setup"}},s=[{value:"Installation and setup VKPR",id:"installation-and-setup-vkpr",children:[{value:"Step 1: Set up values",id:"step-1-set-up-values",children:[]},{value:"Step 2: Deploy VKPR",id:"step-2-deploy-vkpr",children:[]}]},{value:"Upgrading VKPR",id:"upgrading-vkpr",children:[]},{value:"Cleanup VKPR",id:"cleanup-vkpr",children:[]},{value:"Velero set up",id:"velero-set-up",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Values variables to be set (values-aws.yaml):",id:"values-variables-to-be-set-values-awsyaml",children:[]},{value:"Installation",id:"installation",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(l.b)("p",null,"This document walks you through a VKPR installation on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/eks/"}),"Amazon EKS"),". The following links guide you to the installation on others clouds: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/guides/digital-ocean/installation"}),"Digital Ocean"),", GKE."),Object(l.b)("h2",{id:"installation-and-setup-vkpr"},"Installation and setup VKPR"),Object(l.b)("h3",{id:"step-1-set-up-values"},"Step 1: Set up values"),Object(l.b)("p",null,"In this section, we are going to prepare a values file to deploy VKPR in the Cluster. A values file example can be found ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vertigobr/vkpr/tree/master/examples/values-aws.yaml"}),"here"),"."),Object(l.b)("p",null,"All sub-charts specified into ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vertigobr/vkpr/blob/master/charts/vkpr/Chart.yaml"}),"Chart.yaml")," can be enabled/disabled in values with the following key ",Object(l.b)("inlineCode",{parentName:"p"},"enabled"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"nginx-ingress:\n  enabled: true\n")),Object(l.b)("p",null,"The charts: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stacks#nginx-ingress-controller"}),"NGINX Ingress Controller"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stacks#loki"}),"Loki")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stacks#prometheus-operator"}),"Prometheus Operator")," are enabled by default."),Object(l.b)("p",null,"An example of the implementation of each sub-chart can be found in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stacks"}),"stack documentation"),"."),Object(l.b)("h3",{id:"step-2-deploy-vkpr"},"Step 2: Deploy VKPR"),Object(l.b)("p",null,"With the values file concluded, let's deploy it."),Object(l.b)("p",null,"First, add helm repository:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"helm repo add vertigo https://charts.vertigo.com.br\nhelm repo update\n")),Object(l.b)("p",null,"Then, deploy VKPR:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"helm install -f examples/values-aws.yaml -n vkpr vkpr vertigo/vkpr\n")),Object(l.b)("h2",{id:"upgrading-vkpr"},"Upgrading VKPR"),Object(l.b)("p",null,"In order to upgrade the VKPR in the cluster, update the values file and apply:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"helm upgrade -i -f values.yaml -n vkpr vkpr vertigo/vkpr\n")),Object(l.b)("h2",{id:"cleanup-vkpr"},"Cleanup VKPR"),Object(l.b)("p",null,"To remove VKPR in a cluster, execute:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"helm uninstall vkpr\n")),Object(l.b)("h2",{id:"velero-set-up"},"Velero set up"),Object(l.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(l.b)("p",null,"Before proceding to the installation, check the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://velero.io/docs/main/basic-install/"}),"Prerequisites")," to get Velero on your EKS cluster. After that you will have what is needed to put into the values-aws.yaml"),Object(l.b)("h3",{id:"values-variables-to-be-set-values-awsyaml"},"Values variables to be set (values-aws.yaml):"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<REGION>")," Your bucket's region."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<BUCKET_NAME>"),"  Your bucket's name."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<ACCESS_KEY_ID>"),"  The Access Key ID created in the prerequisites step to the VELERO_USER."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<SECRET_KEY_ID>")," The Secret Key ID of that Access Key."),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("p",null,"Using Helm Hub's Velero chart v2.7.4"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"helm upgrade -i vkpr -n vkpr -f examples/values-aws.yaml stable/vkpr  \n")),Object(l.b)("p",null,"Export the KUBECONFIG environment variable in order to point Velero cli to your EKS cluster and run the following command to set the namespace where Velero is installed. "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"velero client config set namespace=vkpr\n")))}p.isMDXComponent=!0}}]);