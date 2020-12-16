(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(95)),o={id:"installation",title:"VKPR installation on Digital Ocean Cluster",sidebar_label:"Installation"},i={unversionedId:"digital-ocean/installation",id:"version-0.8.1/digital-ocean/installation",isDocsHomePage:!1,title:"VKPR installation on Digital Ocean Cluster",description:"This document walks you through a VKPR installation on Digital Ocean Cluster. The following links guide you to the installation on others clouds: Amazon EKS, GKE.",source:"@site/versioned_docs/version-0.8.1/digital-ocean/installation.md",slug:"/digital-ocean/installation",permalink:"/vkpr-docs/docs/digital-ocean/installation",editUrl:"https://github.com/vertigobr/vkpr/edit/docs/versioned_docs/version-0.8.1/digital-ocean/installation.md",version:"0.8.1",sidebar_label:"Installation",sidebar:"version-0.8.1/docs",previous:{title:"Prerequisites to Velero Installation on Amazon EKS",permalink:"/vkpr-docs/docs/eks/velero-setup"}},c=[{value:"Installation and setup VKPR",id:"installation-and-setup-vkpr",children:[{value:"Step 1: Set up values",id:"step-1-set-up-values",children:[]},{value:"Step 2: Deploy VKPR",id:"step-2-deploy-vkpr",children:[]}]},{value:"Upgrading VKPR",id:"upgrading-vkpr",children:[]},{value:"Cleanup VKPR",id:"cleanup-vkpr",children:[]},{value:"External-DNS",id:"external-dns",children:[]},{value:"Keycloak set up",id:"keycloak-set-up",children:[]},{value:"Velero set up",id:"velero-set-up",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Values variables to be set:",id:"values-variables-to-be-set",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Snapshot configuration",id:"snapshot-configuration",children:[]}]},{value:"Testing",id:"testing",children:[]},{value:"Clouds",id:"clouds",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This document walks you through a VKPR installation on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.digitalocean.com/products/kubernetes/"}),"Digital Ocean Cluster"),". The following links guide you to the installation on others clouds: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/eks/installation"}),"Amazon EKS"),", GKE."),Object(l.b)("h2",{id:"installation-and-setup-vkpr"},"Installation and setup VKPR"),Object(l.b)("h3",{id:"step-1-set-up-values"},"Step 1: Set up values"),Object(l.b)("p",null,"In this section, we are going to prepare a values file to deploy VKPR in the Cluster. A values file example can be found ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vertigobr/vkpr/tree/master/examples/values-do.yaml"}),"here"),"."),Object(l.b)("p",null,"All sub-charts specified into ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vertigobr/vkpr/blob/master/charts/vkpr/Chart.yaml"}),"Chart.yaml")," can be enabled/disabled in values with the following key ",Object(l.b)("inlineCode",{parentName:"p"},"enabled"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"nginx-ingress:\n  enabled: true\n")),Object(l.b)("p",null,"The charts: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stacks#nginx-ingress-controller"}),"NGINX Ingress Controller"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stacks#loki"}),"Loki")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stacks#prometheus-operator"}),"Prometheus Operator")," are enabled by default."),Object(l.b)("p",null,"An example of the implementation of each sub-chart can be found in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stacks"}),"stack documentation"),"."),Object(l.b)("h3",{id:"step-2-deploy-vkpr"},"Step 2: Deploy VKPR"),Object(l.b)("p",null,"With the values file concluded, let's deploy it."),Object(l.b)("p",null,"First, add helm repository:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"helm repo add vertigo https://charts.vertigo.com.br\nhelm repo update\n")),Object(l.b)("p",null,"Then, deploy VKPR:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"helm install -f examples/values-do.yaml -n vkpr vkpr vertigo/vkpr\n")),Object(l.b)("h2",{id:"upgrading-vkpr"},"Upgrading VKPR"),Object(l.b)("p",null,"In order to upgrade the VKPR in the cluster, update the values file and apply:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"helm upgrade -i -f examples/values-do.yaml -n vkpr vkpr vertigo/vkpr\n")),Object(l.b)("h2",{id:"cleanup-vkpr"},"Cleanup VKPR"),Object(l.b)("p",null,"To remove VKPR in a cluster, execute:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"helm uninstall -n vkpr vkpr\n")),Object(l.b)("p",null,"Pay attention to Persistent Volumes that may have been left by some modules."),Object(l.b)("h2",{id:"external-dns"},"External-DNS"),Object(l.b)("p",null,"Replace all ",Object(l.b)("inlineCode",{parentName:"p"},"<DOMAIN_NAME>")," occurrences in the values-do.yaml with your white card.\nTo set your DNS name in Digital Ocean you need to provide your Digital Ocean token in external-DNS installation like that:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"helm upgrade -i vkpr -f example/values-do.yaml  vertigo/vkpr \\\n   --set external-dns.digitalocean.apiToken=$DO_AUTH_TOKEN\n")),Object(l.b)("h2",{id:"keycloak-set-up"},"Keycloak set up"),Object(l.b)("p",null,"TODO"),Object(l.b)("h2",{id:"velero-set-up"},"Velero set up"),Object(l.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A Kubernetes cluster running on DigitalOcean. It can be a managed cluster or self-hosted"),Object(l.b)("li",{parentName:"ul"},"DigitalOcean account and resources"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.digitalocean.com/docs/api/create-personal-access-token/"}),"API personal access token")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.digitalocean.com/docs/spaces/how-to/administrative-access/"}),"Spaces access keys")),Object(l.b)("li",{parentName:"ul"},"Spaces bucket"),Object(l.b)("li",{parentName:"ul"},"Spaces bucket region"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://velero.io/docs/v1.2.0/basic-install/"}),"Velero")," v1.20 or newer & prerequisites")),Object(l.b)("h3",{id:"values-variables-to-be-set"},"Values variables to be set:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<SPACES_KEY_ID>"),"  The Space Key ID created ."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<SPACES_SECRET_KEY_ID>")," That Space's Secret Key."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<SPACES_NAME>")," The Space name."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<SPACES_REGION>")," Space's Region."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<DIGITAL_OCEAN_TOKEN>")," Your Digital Ocean Personal ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.digitalocean.com/docs/apis-clis/api/create-personal-access-token/"}),"Token")),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("p",null,"Using Helm Hub's Velero chart v2.7.4"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"helm upgrade -i vkpr -n vkpr -f examples/values-do.yaml stable/vkpr  \n")),Object(l.b)("p",null,"Export the KUBECONFIG environment variable in order to point Velero cli to your EKS cluster and run the following command to set the namespace where Velero is installed. "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"velero client config set namespace=vkpr\n")),Object(l.b)("h3",{id:"snapshot-configuration"},"Snapshot configuration"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enable the ",Object(l.b)("inlineCode",{parentName:"p"},"digitalocean/velero-plugin:v1.0.0")," snapshot provider. This command will configure Velero to use the plugin for persistent volume snapshots."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"velero snapshot-location create default --provider digitalocean.com/velero\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Patch the ",Object(l.b)("inlineCode",{parentName:"p"},"velero")," Kubernetes Deployment to expose your API token to the Velero pod(s). Velero needs this change in order to authenticate to the DigitalOcean API when manipulating snapshots:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'kubectl patch deployment vkpr-velero -p "$(cat installation/do/velero-do-setup/02-velero-deployment.patch.yaml)" --namespace vkpr\n')))),Object(l.b)("p",null,"Remember to set your KUBECONFIG in order to your velero cli interact with the cluster's installation."),Object(l.b)("h2",{id:"testing"},"Testing"),Object(l.b)("p",null,"Docker Desktop already provides a kubernetes cluster for local tests:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl get nodes\nNAME             STATUS   ROLES    AGE   VERSION\ndocker-desktop   Ready    master   12d   v1.14.7\n")),Object(l.b)("p",null,"Or maybe you are a Linux user, and then you can use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rancher/k3d"}),"k3d")," to local tests:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'k3d create -n vkpr-local \\\n  --publish="8000:32080" \\\n  --server-arg "--no-deploy=traefik" \\\n  --server-arg "--no-deploy=servicelb"\n')),Object(l.b)("p",null,"Another way is to make a minimal kubernetes cluster in Digital Ocean:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"doctl k8s cluster create my-cluster \\\n   --region nyc1 \\\n   --count=3 \\\n   --version 1.15.9-do.2 \\\n   --size=s-4vcpu-8gb\n")),Object(l.b)("p",null,"Or create the cluster in wherever cloud you want by using Terraform:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com/vertigobr/devops/terraform-modules"}),"Make your Kubernetes cluster with Terraform modules!"))),Object(l.b)("h2",{id:"clouds"},"Clouds"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The External-DNS depends on credentials to update DNS records in your cloud provider. Instead of putting those credentials in open files you may want to pass it through command line:")))}p.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,O=b["".concat(o,".").concat(d)]||b[d]||u[d]||l;return a?r.a.createElement(O,i(i({ref:t},s),{},{components:a})):r.a.createElement(O,i({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);