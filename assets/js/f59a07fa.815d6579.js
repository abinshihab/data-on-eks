"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[7438],{993:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(4848),r=n(8453);const s={title:"Spark Operator running on Amazon EKS IPv6",sidebar_position:6},i=void 0,o={id:"blueprints/data-analytics/spark-eks-ipv6",title:"Spark Operator running on Amazon EKS IPv6",description:"This example showcases the usage of Spark Operator running on Amazon EKS in IPv6 mode. the idea is to show and demonstarte running spark workloads on EKS IPv6 cluster.",source:"@site/docs/blueprints/data-analytics/spark-eks-ipv6.md",sourceDirName:"blueprints/data-analytics",slug:"/blueprints/data-analytics/spark-eks-ipv6",permalink:"/data-on-eks/docs/blueprints/data-analytics/spark-eks-ipv6",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/data-analytics/spark-eks-ipv6.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Spark Operator running on Amazon EKS IPv6",sidebar_position:6},sidebar:"blueprints",previous:{title:"Superset on EKS",permalink:"/data-on-eks/docs/blueprints/data-analytics/superset-on-eks"},next:{title:"Amazon EMR on EKS",permalink:"/data-on-eks/docs/category/amazon-emr-on-eks"}},l={},c=[{value:"Deploy the EKS Cluster with all the add-ons and infrastructure needed to test this example",id:"deploy-the-eks-cluster-with-all-the-add-ons-and-infrastructure-needed-to-test-this-example",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Clone the repository",id:"clone-the-repository",level:3},{value:"Initialize Terraform",id:"initialize-terraform",level:3},{value:"Export Terraform Outputs",id:"export-terraform-outputs",level:3},{value:"Update kubeconfig",id:"update-kubeconfig",level:3},{value:"Verify the deployment",id:"verify-the-deployment",level:3},{value:"Execute Sample Spark job with Karpenter",id:"execute-sample-spark-job-with-karpenter",level:3},{value:"Apache YuniKorn Gang Scheduling with NVMe based SSD disk for shuffle storage",id:"apache-yunikorn-gang-scheduling-with-nvme-based-ssd-disk-for-shuffle-storage",level:3},{value:"Cleanup",id:"cleanup",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"This example showcases the usage of Spark Operator running on Amazon EKS in IPv6 mode. the idea is to show and demonstarte running spark workloads on EKS IPv6 cluster."}),"\n",(0,t.jsx)(a.h2,{id:"deploy-the-eks-cluster-with-all-the-add-ons-and-infrastructure-needed-to-test-this-example",children:"Deploy the EKS Cluster with all the add-ons and infrastructure needed to test this example"}),"\n",(0,t.jsx)(a.p,{children:"The Terraform blueprint will provision the following resources required to run Spark Jobs with open source Spark Operator on Amazon EKS IPv6"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"A Dual Stack Amazon Virtual Private Cloud (Amazon VPC) with 3 Private Subnets and 3 Public Subnets"}),"\n",(0,t.jsx)(a.li,{children:"An Internet gateway for Public Subnets, NAT Gateway for Private Subnets and Egress-only Internet gateway"}),"\n",(0,t.jsx)(a.li,{children:"An Amazon EKS cluster in IPv6 mode (version 1.30)"}),"\n",(0,t.jsx)(a.li,{children:"Amazon EKS core-managed node group used to host some of the add-ons that we\u2019ll provision on the cluster"}),"\n",(0,t.jsx)(a.li,{children:"Deploys Spark-k8s-operator, Apache Yunikorn, Karpenter, Prometheus and Grafana server."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(a.p,{children:"Ensure that you have installed the following tools on your machine."}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Before installing the cluster create a EKS IPv6 CNI policy. Follow the instructions from the link below:\n",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/cni-iam-role.html#cni-iam-role-create-ipv6-policy",children:"AmazonEKS_CNI_IPv6_Policy "})]}),"\n",(0,t.jsx)(a.h3,{id:"clone-the-repository",children:"Clone the repository"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\ncd data-on-eks\nexport DOEKS_HOME=$(pwd)\n"})}),"\n",(0,t.jsx)(a.h3,{id:"initialize-terraform",children:"Initialize Terraform"}),"\n",(0,t.jsxs)(a.p,{children:["Navigate into the example directory and run the initialization script ",(0,t.jsx)(a.code,{children:"install.sh"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics//terraform/spark-eks-ipv6/\nchmod +x install.sh\n./install.sh\n"})}),"\n",(0,t.jsx)(a.h3,{id:"export-terraform-outputs",children:"Export Terraform Outputs"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export CLUSTER_NAME=$(terraform output -raw cluster_name)\nexport AWS_REGION=$(terraform output -raw region)\nexport S3_BUCKET=$(terraform output -raw s3_bucket_id_spark_event_logs_example_data)\n"})}),"\n",(0,t.jsx)(a.p,{children:"The S3_BUCKET variable that holds the name of the bucket created\nduring the install. This bucket will be used in later examples to store output\ndata."}),"\n",(0,t.jsx)(a.h3,{id:"update-kubeconfig",children:"Update kubeconfig"}),"\n",(0,t.jsx)(a.p,{children:"Update the kubeconfig to verify the deployment."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"aws eks --region $AWS_REGION update-kubeconfig --name $CLUSTER_NAME\n"})}),"\n",(0,t.jsx)(a.h3,{id:"verify-the-deployment",children:"Verify the deployment"}),"\n",(0,t.jsx)(a.p,{children:"Examine the IP addresses assigned to the cluster nodes and the pods. You will notice that both have IPv6 addresses allocated."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"kubectl get node -o custom-columns='NODE_NAME:.metadata.name,INTERNAL-IP:.status.addresses[?(@.type==\"InternalIP\")].address'\nNODE_NAME                                 INTERNAL-IP\nip-10-1-0-212.us-west-2.compute.internal  2600:1f13:520:1303:c87:4a71:b9ea:417c\nip-10-1-26-137.us-west-2.compute.internal 2600:1f13:520:1304:15b2:b8a3:7f63:cbfa\nip-10-1-46-28.us-west-2.compute.internal  2600:1f13:520:1305:5ee5:b994:c0c2:e4da\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"kubectl get pods -A -o custom-columns='NAME:.metadata.name,NodeIP:.status.hostIP,PodIP:status.podIP'\nNAME                                                     NodeIP                                  PodIP\n....\nkarpenter-5fd95dffb8-l8j26                               2600:1f13:520:1304:15b2:b8a3:7f63:cbfa  2600:1f13:520:1304:a79b::\nkarpenter-5fd95dffb8-qpv55                               2600:1f13:520:1303:c87:4a71:b9ea:417c   2600:1f13:520:1303:60ac::\nkube-prometheus-stack-grafana-9f5c9d8fc-zgn98            2600:1f13:520:1304:15b2:b8a3:7f63:cbfa  2600:1f13:520:1304:a79b::a\nkube-prometheus-stack-kube-state-metrics-98c74d866-56275 2600:1f13:520:1304:15b2:b8a3:7f63:cbfa  2600:1f13:520:1304:a79b::9\nkube-prometheus-stack-operator-67df8bc57d-2d8jh          2600:1f13:520:1304:15b2:b8a3:7f63:cbfa  2600:1f13:520:1304:a79b::b\nkube-prometheus-stack-prometheus-node-exporter-5qrqs     2600:1f13:520:1303:c87:4a71:b9ea:417c   2600:1f13:520:1303:c87:4a71:b9ea:417c\nkube-prometheus-stack-prometheus-node-exporter-hcpvk     2600:1f13:520:1304:15b2:b8a3:7f63:cbfa  2600:1f13:520:1304:15b2:b8a3:7f63:cbfa\nkube-prometheus-stack-prometheus-node-exporter-ztkdm     2600:1f13:520:1305:5ee5:b994:c0c2:e4da  2600:1f13:520:1305:5ee5:b994:c0c2:e4da\nprometheus-kube-prometheus-stack-prometheus-0            2600:1f13:520:1304:15b2:b8a3:7f63:cbfa  2600:1f13:520:1304:a79b::7\nspark-history-server-6c9f9d7cc4-xzj4c                    2600:1f13:520:1305:5ee5:b994:c0c2:e4da  2600:1f13:520:1305:64b::1\nspark-operator-84c6b48ffc-z2glj                          2600:1f13:520:1304:15b2:b8a3:7f63:cbfa  2600:1f13:520:1304:a79b::5\nspark-operator-webhook-init-kbl4s                        2600:1f13:520:1305:5ee5:b994:c0c2:e4da  2600:1f13:520:1305:64b::2\nyunikorn-admission-controller-d675f89c5-f2p47            2600:1f13:520:1303:c87:4a71:b9ea:417c   2600:1f13:520:1303:c87:4a71:b9ea:417c\nyunikorn-scheduler-59d6879975-2rh4d                      2600:1f13:520:1304:15b2:b8a3:7f63:cbfa  2600:1f13:520:1304:a79b::4\n....\n"})}),"\n",(0,t.jsx)(a.h3,{id:"execute-sample-spark-job-with-karpenter",children:"Execute Sample Spark job with Karpenter"}),"\n",(0,t.jsx)(a.p,{children:"Navigate to example directory and submit the Spark job."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-eks-ipv6/examples/karpenter\nkubectl apply -f pyspark-pi-job.yaml\n"})}),"\n",(0,t.jsx)(a.p,{children:"Monitor the job status using the below command. You should see the new nodes triggered by the Karpenter."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"kubectl get pods -n spark-team-a -w\n"})}),"\n",(0,t.jsx)(a.h3,{id:"apache-yunikorn-gang-scheduling-with-nvme-based-ssd-disk-for-shuffle-storage",children:"Apache YuniKorn Gang Scheduling with NVMe based SSD disk for shuffle storage"}),"\n",(0,t.jsx)(a.p,{children:"Gang Scheduling Spark jobs using Apache YuniKorn and Spark Operator"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-eks-ipv6/examples/karpenter/nvme-yunikorn-gang-scheduling\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Run the ",(0,t.jsx)(a.code,{children:"taxi-trip-execute.sh"})," script with the following input. You will use the ",(0,t.jsx)(a.code,{children:"S3_BUCKET"})," variable created earlier. Additionally, you must change YOUR_REGION_HERE with the region of your choice, us-west-2 for example."]}),"\n",(0,t.jsx)(a.p,{children:"This script will download some example taxi trip data and create duplicates of it in order to increase the size a bit. This will take a bit of time and will require a relatively fast internet connection."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"${DOEKS_HOME}/analytics/scripts/taxi-trip-execute.sh ${S3_BUCKET} YOUR_REGION_HERE\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Once our sample data is uploaded you can run the Spark job. You will need to replace the ",(0,t.jsx)(a.code,{children:"<S3_BUCKET>"})," placeholders in this file with the name of the bucket created earlier. You can get that value by running echo $S3_BUCKET."]}),"\n",(0,t.jsx)(a.p,{children:"To do this automatically you can run the following, which will create a .old backup file and do the replacement for you."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sed -i.old s/\\<S3_BUCKET\\>/${S3_BUCKET}/g ./nvme-storage-yunikorn-gang-scheduling.yaml\n"})}),"\n",(0,t.jsx)(a.p,{children:"Now that the bucket name is in place you can create the Spark job."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"kubectl apply -f nvme-storage-yunikorn-gang-scheduling.yaml\n"})}),"\n",(0,t.jsx)(a.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,t.jsxs)(a.p,{children:["This script will cleanup the environment using ",(0,t.jsx)(a.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-eks-ipv6 && chmod +x cleanup.sh\n./cleanup.sh\n"})}),"\n",(0,t.jsx)(a.admonition,{type:"caution",children:(0,t.jsx)(a.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment"})})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>o});var t=n(6540);const r={},s=t.createContext(r);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);