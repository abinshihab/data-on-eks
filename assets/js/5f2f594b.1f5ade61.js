"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[4834],{8931:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(4848),a=n(8453);const r={sidebar_position:5,sidebar_label:"Superset on EKS"},i="Superset on EKS",o={id:"blueprints/data-analytics/superset-on-eks",title:"Superset on EKS",description:"Introduction",source:"@site/docs/blueprints/data-analytics/superset-on-eks.md",sourceDirName:"blueprints/data-analytics",slug:"/blueprints/data-analytics/superset-on-eks",permalink:"/data-on-eks/docs/blueprints/data-analytics/superset-on-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/data-analytics/superset-on-eks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Superset on EKS"},sidebar:"blueprints",previous:{title:"DataHub on EKS",permalink:"/data-on-eks/docs/blueprints/data-analytics/datahub-on-eks"},next:{title:"Amazon EMR on EKS",permalink:"/data-on-eks/docs/category/amazon-emr-on-eks"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Superset on AWS",id:"superset-on-aws",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Architecture Overview",id:"architecture-overview",level:3},{value:"Verify Deployment",id:"verify-deployment",level:3},{value:"Cleanup",id:"cleanup",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"superset-on-eks",children:"Superset on EKS"})}),"\n",(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://superset.apache.org/",children:"Apache Superset"})," is a popular open source data exploration and visualization platform. Superset provides a rich set of data visualizations and easy ad-hoc query and analysis functionalities for data scientists, analysts, and business users."]}),"\n",(0,t.jsxs)(s.p,{children:["This ",(0,t.jsx)(s.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/superset-on-eks",children:"blueprint"})," deploys Superset on an EKS cluster using Postgres as the backend database and Amazon Elastic Block Store (Amazon EBS) for persistent storage."]}),"\n",(0,t.jsx)(s.h2,{id:"superset-on-aws",children:"Superset on AWS"}),"\n",(0,t.jsx)(s.p,{children:"On AWS, Superset can run on an EKS cluster. By using EKS, you can leverage Kubernetes for deployment, scaling, and management of Superset services. Other AWS services like VPC, IAM, and EBS provide the networking, security, and storage capabilities."}),"\n",(0,t.jsx)(s.p,{children:"Key AWS services used:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Amazon EKS as the managed Kubernetes cluster to run Superset pods and services."}),"\n",(0,t.jsx)(s.li,{children:"Amazon EBS to provide a scalable block store for Superset persistent storage."}),"\n",(0,t.jsx)(s.li,{children:"Amazon ECR to store Docker container images for Superset and dependencies"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,t.jsx)(s.p,{children:"The blueprint performs the following to deploy Superset on EKS:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Create a new VPC with public and private subnets"}),"\n",(0,t.jsx)(s.li,{children:"Provision an EKS cluster control plane and managed worker nodes"}),"\n",(0,t.jsx)(s.li,{children:"Create an Amazon EBS file system and access point"}),"\n",(0,t.jsx)(s.li,{children:"Build Docker images and push to Amazon ECR"}),"\n",(0,t.jsx)(s.li,{children:"Install Superset and services on EKS via Helm chart"}),"\n",(0,t.jsx)(s.li,{children:"Expose Superset UI through a load balancer"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Ingress is enabled and AWS LoadBalancer Controller will provision an ALB to expose the Superset frontend UI."}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["You may customize the blueprint by changing values in ",(0,t.jsx)(s.code,{children:"variables.tf"}),", to deploy to a different region (default to ",(0,t.jsx)(s.code,{children:"us-west-1"})," ), use different cluster name, number of subnets / AZs, or disable addons like fluentbit"]})}),"\n",(0,t.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(s.p,{children:"Ensure that you have installed the following tools on your machine."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://helm.sh",children:"Helm"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"deploy",children:"Deploy"}),"\n",(0,t.jsx)(s.p,{children:"Clone the repository"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Navigate into one of the example directories and run ",(0,t.jsx)(s.code,{children:"install.sh"})," script"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd data-on-eks/analytics/terraform/superset-on-eks\nchmod +x install.sh\n./install.sh\n"})}),"\n",(0,t.jsx)(s.p,{children:"or simply"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"terraform init\nterraform apply --auto-approve\n"})}),"\n",(0,t.jsx)(s.h3,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(3473).A+"",width:"1143",height:"921"})}),"\n",(0,t.jsx)(s.h3,{id:"verify-deployment",children:"Verify Deployment"}),"\n",(0,t.jsx)(s.p,{children:"After the deployment completes, we can access the Superset UI .  For demo purpose, this blueprint creates the Ingress object for the Superset FrontEnd UI with public LoadBalancer and also number of pods across 2 AZ's in the corenode and superset node respectively."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(1697).A+"",width:"1062",height:"220"})}),"\n",(0,t.jsx)(s.p,{children:"You may find the URL to the Superset frontend from the output superset_url, or by running kubectl command below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl get ingress  -n superset\n\n# OUTPUT should looks like below\nNAME                CLASS     HOSTS   ADDRESS                                                                   PORTS   AGE\nsuperset-ingress   aws-alb   *       k8s-superset-***.***.elb.amazonaws.com                                     80      125m\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Copy the ADDRESS field from the output, then open browser and enter the URL as ",(0,t.jsx)(s.code,{children:"http://<address>/"}),". Enter ",(0,t.jsx)(s.code,{children:"admin"})," as both user name and password when prompted.  We can view the Superset UI like below."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.img,{alt:"img.png",src:n(4661).A+"",width:"1596",height:"513"}),"\n",(0,t.jsx)(s.img,{alt:"img.png",src:n(7310).A+"",width:"1859",height:"883"})]}),"\n",(0,t.jsx)(s.p,{children:"In order to visualize  data, we need to first connect to  Postgres database. the IP address of the database can be obtained by describing a pod 'superset-postgresql-0'. Basically the database is hosted on the superset-node"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"k describe po superset-postgresql-0 -n superset\n\n"})}),"\n",(0,t.jsxs)(s.p,{children:["After obtaining the IP address, database connection can be established as per the screenshot below\n",(0,t.jsx)(s.img,{alt:"img.png",src:n(5193).A+"",width:"2866",height:"1434"})]}),"\n",(0,t.jsx)(s.p,{children:"Once the database is connected, it has to be configured to allow file upload. This features allows, csv and other format files to be uploaded as a new table. Please refer to the screeshots below"}),"\n",(0,t.jsx)(s.p,{children:"Step -1 : Edit database configuration and navigate to 'ADVANCED' settings"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(147).A+"",width:"2866",height:"1434"})}),"\n",(0,t.jsx)(s.p,{children:"Step - 2 : Under Security scroll down to the very end and 'check allow file uploads to the database'"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(1322).A+"",width:"2866",height:"1434"})}),"\n",(0,t.jsx)(s.p,{children:"Step -3 : Create a dataset by uploading a file"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(2074).A+"",width:"2866",height:"1434"})}),"\n",(0,t.jsx)(s.p,{children:"Step - 4 : To show a sample visualization a sample CSV of COVID research across various countries was uploaded. Here are a few visualizations that shows countries porgess with respect to trial of various vaccines"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(4920).A+"",width:"2866",height:"1434"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(2615).A+"",width:"2866",height:"1434"})}),"\n",(0,t.jsx)(s.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,t.jsxs)(s.p,{children:["To clean up your environment, run the ",(0,t.jsx)(s.code,{children:"cleanup.sh"})," script."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"chmod +x cleanup.sh\n./cleanup.sh\n"})}),"\n",(0,t.jsx)(s.p,{children:"otherwise"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"terraform destroy --auto-approve\n"})})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3473:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/apache-superset-eks-606a64229e22325525d1337b373e491a.png"},5193:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset-connect-database-97fdb15a0b9110abdd7ae6a8dd8c644e.png"},2074:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset-create-dataset-0f01064642de432746c561e7a9a50491.png"},147:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset-edit-database-f0b7507e018243337bec18097477df88.png"},1322:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset-enable-fileupload-b3588d5d789b07fd0fbe03d4d1a750d1.png"},1697:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset-pods-790e14a9c631b11a11c919eee86a2d1d.png"},4920:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset-sample-graph-4f300ea9245a581f2cb8d3dcf29791d7.png"},2615:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset-view-by-country-d5cb7160d8db7906e65d6c25d704f2c9.png"},4661:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset1-81f9bde35276188485614002f304a00e.png"},7310:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/superset2-7c54287b848375ef93d3a5473774e1ee.png"},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(6540);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);