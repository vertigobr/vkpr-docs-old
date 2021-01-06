(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,O=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(O,s(s({ref:t},l),{},{components:n})):a.a.createElement(O,s({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(107)),c={id:"velero-setup",title:"Prerequisites to Velero installation on Amazon EKS",sidebar_label:"Velero setup"},s={unversionedId:"guides/eks/velero-setup",id:"guides/eks/velero-setup",isDocsHomePage:!1,title:"Prerequisites to Velero installation on Amazon EKS",description:"This section is a work in progress.",source:"@site/docs/guides/eks/velero-setup.md",slug:"/guides/eks/velero-setup",permalink:"/vkpr-docs/docs/next/guides/eks/velero-setup",editUrl:"https://github.com/vertigobr/vkpr/edit/docs/docs/guides/eks/velero-setup.md",version:"current",sidebar_label:"Velero setup",sidebar:"docs",previous:{title:"VKPR installation on Amazon EKS",permalink:"/vkpr-docs/docs/next/guides/eks/installation"},next:{title:"VKPR installation on Digital Ocean Cluster",permalink:"/vkpr-docs/docs/next/guides/digital-ocean/installation"}},i=[{value:"Making an Object Storage",id:"making-an-object-storage",children:[]},{value:"User Creation",id:"user-creation",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(o.b)("p",null,"In order to get Velero working on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://aws.amazon.com/eks/"}),"Amazon EKS")," we need to configure credentials and the Object Storage."),Object(o.b)("p",null,"Env Variables that we will be using along the installation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"export VELERO_FOLDER=/opt/velero\nexport BUCKET_NAME=k8s-cluster-velero\nexport VELERO_USER_NAME=velero\nexport CLOUD_REGION=us-east-1\n")),Object(o.b)("h3",{id:"making-an-object-storage"},"Making an Object Storage"),Object(o.b)("h4",{id:"aws"},"AWS"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"aws s3api create-bucket \\\n    --bucket $BUCKET_NAME \\\n    --region $CLOUD_REGION\n")),Object(o.b)("h3",{id:"user-creation"},"User Creation"),Object(o.b)("p",null,"After executing the cloud provider's commands, you must write Velero credentials into a file."),Object(o.b)("h4",{id:"aws-1"},"AWS"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'# Create Velero User\naws iam create-user --user-name $VELERO_USER_NAME\n\n# Create a JSON with the Velero user policies.\ncat > $VELERO_FOLDER/velero-policy.json <<EOF\n{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "ec2:DescribeVolumes",\n                "ec2:DescribeSnapshots",\n                "ec2:CreateTags",\n                "ec2:CreateVolume",\n                "ec2:CreateSnapshot",\n                "ec2:DeleteSnapshot"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject",\n                "s3:DeleteObject",\n                "s3:PutObject",\n                "s3:AbortMultipartUpload",\n                "s3:ListMultipartUploadParts"\n            ],\n            "Resource": [\n                "arn:aws:s3:::${BUCKET_NAME}/*"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::${BUCKET_NAME}"\n            ]\n        }\n    ]\n}\nEOF\n\n# Attach the user policies to Velero user\naws iam put-user-policy \\\n  --user-name $VELERO_USER_NAME \\\n  --policy-name $VELERO_USER_NAME \\\n  --policy-document file://${VELERO_FOLDER}/velero-policy.json\n\n# Obtain the Velero user credentials\nexport VELERO_CREDENTIALS_OUTPUT=$(aws iam create-access-key --user-name $VELERO_USER_NAME)\nexport VELERO_AWS_ACCESS=$(echo -n "$VELERO_CREDENTIALS_OUTPUT" | jq -r \'.AccessKey.AccessKeyId\')\nexport VELERO_AWS_SECRET=$(echo -n "$VELERO_CREDENTIALS_OUTPUT" | jq -r \'.AccessKey.SecretAccessKey\')\n\n# And write these credentials to a file (credentials-velero)\ncat > $VELERO_FOLDER/credentials-velero <<EOF\n[default]\naws_access_key_id=${VELERO_AWS_ACCESS}\naws_secret_access_key=${VELERO_AWS_SECRET}\nEOF\n')))}u.isMDXComponent=!0}}]);