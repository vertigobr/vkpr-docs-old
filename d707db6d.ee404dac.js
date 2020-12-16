(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{91:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),l=(t(0),t(95)),c={id:"grafana-with-keycloak",title:"Grafana with KeyCloak"},o={unversionedId:"guides/local/grafana-with-keycloak",id:"guides/local/grafana-with-keycloak",isDocsHomePage:!1,title:"Grafana with KeyCloak",description:"This guide shows the Grafana with KeyCloak in local k3d environment and some tools are prerequisites for run:",source:"@site/docs/guides/local/grafana-with-keycloak.md",slug:"/guides/local/grafana-with-keycloak",permalink:"/vkpr-docs/docs/next/guides/local/grafana-with-keycloak",editUrl:"https://github.com/vertigobr/vkpr/edit/docs/docs/guides/local/grafana-with-keycloak.md",version:"current",sidebar:"docs",previous:{title:"Basic installation",permalink:"/vkpr-docs/docs/next/guides/local/basic-installation"},next:{title:"VKPR installation on Amazon EKS",permalink:"/vkpr-docs/docs/next/guides/eks/installation"}},s=[{value:"Installation and setup VKPR",id:"installation-and-setup-vkpr",children:[{value:"Makefile mode",id:"makefile-mode",children:[]},{value:"Manual mode",id:"manual-mode",children:[]}]},{value:"Access Grafana and KeyCloak",id:"access-grafana-and-keycloak",children:[]},{value:"Destroy cluster",id:"destroy-cluster",children:[]}],i={rightToc:s};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This guide shows the Grafana with KeyCloak in local k3d environment and some tools are prerequisites for run:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://k3d.io/"}),"k3d")," >= 3.3.0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://helm.sh/docs/intro/install/#helm"}),"Helm")," >= 3.0.0")),Object(l.b)("h2",{id:"installation-and-setup-vkpr"},"Installation and setup VKPR"),Object(l.b)("p",null,"The installation and configuration in this guide can be done in two ways, via ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#makefile-mode"}),"makefile")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#manual-mode"}),"manual"),". You will need to create two configuration files in this guide the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vertigobr/vkpr/blob/master/examples/local/values-local-keycloak-grafana.yaml"}),"values file")," for VKPR and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vertigobr/vkpr/blob/master/examples/keycloak/realm.json"}),"realm file")," to KeyCloak."),Object(l.b)("h3",{id:"makefile-mode"},"Makefile mode"),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"In this way the installation of the makefile is required."))),Object(l.b)("p",null,"Makefile used in this guide (update the ",Object(l.b)("inlineCode",{parentName:"p"},"VALUES_FILE")," or ",Object(l.b)("inlineCode",{parentName:"p"},"REALM_FILE")," values):"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-makefile",metastring:'title="makefile"',title:'"makefile"'}),'# Create a local k3d cluster\nk3d_create:\n    k3d cluster create vkpr-local -p "8080:80@loadbalancer" -p "8443:443@loadbalancer" --k3s-server-arg "--no-deploy=traefik"\n\n# Create a local k3d cluster\nk3d_delete:\n    k3d cluster delete vkpr-local\n\n# Setup VKPR repository in Helm\nsetup_vkpr:\n    helm repo add vertigo https://charts.vertigo.com.br\n    helm repo update\n\n# Installation and setup VKPR\ninstall_vkpr:\n    @echo "KUBECONFIG=$(KUBECONFIG)"\n    kubectl create secret generic vkpr-realm-secret --from-file=<REALM_FILE>\n    helm upgrade -i -f <VALUES_FILE> vkpr vertigo/vkpr\n\n# Add hosts\nadd_hosts:\n    echo "Detecting LoadBalancer external IP"\n    export LB_IP=""; \\\n    while [ -z "$${LB_IP}" ]; do \\\n        export LB_IP=$$(kubectl get svc vkpr-ingress-nginx-controller -o jsonpath="{.status.loadBalancer.ingress[*].ip}"); \\\n        if [ -z "$${LB_IP}" ]; then \\\n            echo "Waiting for LoadBalancer external IP..."; \\\n            sleep 3; \\\n        else \\\n            echo "LoadBalancer external IP: $${LB_IP}"; \\\n            echo "Hacking into /etc/hosts, gonna need sudo, please."; \\\n            if grep -q "vkpr-keycloak-http" /etc/hosts; then \\\n                sudo sed "s/.*vkpr-keycloak-http.*/$${LB_IP} vkpr-grafana.default.svc vkpr-jaeger.default.svc vkpr-vault.default.svc vkpr-keycloak-http.default.svc/g" -i /etc/hosts; \\\n            else \\\n                sudo sh -c "echo \'$${LB_IP} vkpr-grafana.default.svc vkpr-jaeger.default.svc vkpr-vault.default.svc vkpr-keycloak-http.default.svc\' >> /etc/hosts"; \\\n            fi; \\\n        fi; \\\n    done\n')),Object(l.b)("p",null,"Before installing VKPR need to create a local cluster with k3d, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"make k3d_create\n")),Object(l.b)("p",null,"To configure VKPR in Helm, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"make setup_vkpr\n")),Object(l.b)("p",null,"To install VKPR, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"make install_vkpr\n")),Object(l.b)("p",null,"To access Grafana and KeyCloak it is necessary to add some custom domains to ",Object(l.b)("inlineCode",{parentName:"p"},"/etc/hosts"),", execute:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"make add_hosts\n")),Object(l.b)("p",null,"Finally the guide go to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#access-grafana-and-keycloak"}),"next section")," to see the credentials of Grafana and KeyCloak."),Object(l.b)("h3",{id:"manual-mode"},"Manual mode"),Object(l.b)("p",null,"To start you need to create a local k3d cluster, you need to run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'k3d cluster create vkpr-local \\\n  -p "8080:80@loadbalancer" \\\n  -p "8443:443@loadbalancer" \\\n  --k3s-server-arg "--no-deploy=traefik"\n')),Object(l.b)("p",null,"K3d by default installs Traefik as a load balancer, above command creates a k3d cluster without Traefik because we will use VKPR's NGINX Ingress Controller."),Object(l.b)("p",null,"Before installation Helm needs to know the VKPR repository, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"# Add repo chart\nhelm repo add vertigo https://charts.vertigo.com.br\n\n# Update repo\nhelm repo update\n")),Object(l.b)("p",null,"Then install and configure VKPR running (update the ",Object(l.b)("inlineCode",{parentName:"p"},"VALUES_FILE")," or ",Object(l.b)("inlineCode",{parentName:"p"},"REALM_FILE")," values):"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"# Create secret\nkubectl create secret generic vkpr-realm-secret --from-file=<REALM_FILE>\n\n# Install VKPR\nhelm upgrade -i -f <VALUES_FILE> vkpr vertigo/vkpr\n")),Object(l.b)("p",null,"To access Grafana and KeyCloak it is necessary to add some custom domains to ",Object(l.b)("inlineCode",{parentName:"p"},"/etc/hosts"),". First get the external ip of nginx and then edit the hosts file (update ",Object(l.b)("inlineCode",{parentName:"p"},"LOAD_BALANCER_IP")," value), run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"# Get external ip from nginx\nkubectl get service vkpr-ingress-nginx-controller\n\n# Edit hosts file\nsudo sh -c \"echo '<LOAD_BALANCER_IP> vkpr-grafana.default.svc vkpr-keycloak-http.default.svc' >> /etc/hosts\"\n")),Object(l.b)("p",null,"Finally the guide go to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#access-grafana-and-keycloak"}),"next section")," to see the credentials of Grafana and KeyCloak."),Object(l.b)("h2",{id:"access-grafana-and-keycloak"},"Access Grafana and KeyCloak"),Object(l.b)("p",null,"To access the Grafana with KeyCloak authentication use the following credentials:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"url: http://vkpr-grafana.default.svc\nusername: user\npassword: password\n")),Object(l.b)("p",null,"To access the KeyCloak administration console, use:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"url: http://vkpr-keycloak-http.default.svc\nusername: admin\npassword: vkpr1234\n")),Object(l.b)("h2",{id:"destroy-cluster"},"Destroy cluster"),Object(l.b)("p",null,"After finishing the guide, destroy cluster k3d running:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"# Makefile mode\nmake k3d_delete\n\n# Manual mode\nk3d cluster delete vkpr-local\n")))}p.isMDXComponent=!0},95:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=n,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||l;return t?r.a.createElement(m,o(o({ref:a},i),{},{components:t})):r.a.createElement(m,o({ref:a},i))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=b;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<l;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);