"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[664],{5936:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=a(5893),t=a(1151),s=a(769);const l={title:"Llama-2 on Inferentia",sidebar_position:1},r="Deploying Llama-2-13b Chat Model with Inferentia, Ray Serve and Gradio",o={id:"gen-ai/inference/Llama2",title:"Llama-2 on Inferentia",description:"Note: Use of this Llama-2 model is governed by the Meta license.",source:"@site/docs/gen-ai/inference/Llama2.md",sourceDirName:"gen-ai/inference",slug:"/gen-ai/inference/Llama2",permalink:"/data-on-eks/docs/gen-ai/inference/Llama2",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/gen-ai/inference/Llama2.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Llama-2 on Inferentia",sidebar_position:1},sidebar:"genai",previous:{title:"Inference on EKS",permalink:"/data-on-eks/docs/category/inference-on-eks"},next:{title:"Mistral-7B on Inferentia2",permalink:"/data-on-eks/docs/gen-ai/inference/Mistral-7b-inf2"}},c={},d=[{value:"What is Llama-2?",id:"what-is-llama-2",level:3},{value:"Llama-2-chat",id:"llama-2-chat",level:4},{value:"<strong>Which Llama-2 model size should I use?</strong>",id:"which-llama-2-model-size-should-i-use",level:3},{value:"Inference on Trn1/Inf2 Instances: Unlocking the Full Potential of Llama-2",id:"inference-on-trn1inf2-instances-unlocking-the-full-potential-of-llama-2",level:2},{value:"Model Specification",id:"model-specification",level:3},{value:"Example usecase",id:"example-usecase",level:3},{value:"Solution Architecture",id:"solution-architecture",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:3},{value:"Deploying the Ray Cluster with Llama-2-Chat Model",id:"deploying-the-ray-cluster-with-llama-2-chat-model",level:2},{value:"Deploy the Llama-2-Chat Model",id:"deploy-the-llama-2-chat-model",level:3},{value:"To Test the Llama-2-Chat Model",id:"to-test-the-llama-2-chat-model",level:3},{value:"Deploying the Gradio WebUI App",id:"deploying-the-gradio-webui-app",level:2},{value:"Execute Port Forward to the llama2 Ray Service",id:"execute-port-forward-to-the-llama2-ray-service",level:3},{value:"Deploy Gradio WebUI Locally",id:"deploy-gradio-webui-locally",level:3},{value:"Create a Virtual Environment",id:"create-a-virtual-environment",level:4},{value:"Install Gradio ChatBot app",id:"install-gradio-chatbot-app",level:4},{value:"Invoke the WebUI",id:"invoke-the-webui",level:4},{value:"2.4. Access the WebUI from Your Browser",id:"24-access-the-webui-from-your-browser",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Cleanup",id:"cleanup",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Note: Use of this Llama-2 model is governed by the Meta license.\nIn order to download the model weights and tokenizer, please visit the ",(0,i.jsx)(n.a,{href:"https://ai.meta.com/",children:"website"})," and accept the license before requesting access."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"We are actively enhancing this blueprint to incorporate improvements in observability, logging, and scalability aspects."})}),"\n",(0,i.jsx)(n.h1,{id:"deploying-llama-2-13b-chat-model-with-inferentia-ray-serve-and-gradio",children:"Deploying Llama-2-13b Chat Model with Inferentia, Ray Serve and Gradio"}),"\n",(0,i.jsxs)(n.p,{children:["Welcome to the comprehensive guide on deploying the ",(0,i.jsx)(n.a,{href:"https://ai.meta.com/llama/#inside-the-model",children:"Meta Llama-2-13b chat"})," model on Amazon Elastic Kubernetes Service (EKS) using ",(0,i.jsx)(n.a,{href:"https://docs.ray.io/en/latest/serve/index.html",children:"Ray Serve"}),".\nIn this tutorial, you will not only learn how to harness the power of Llama-2, but also gain insights into the intricacies of deploying large language models (LLMs) efficiently, particularly on ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/machine-learning/neuron/",children:"trn1/inf2"})," (powered by AWS Trainium and Inferentia) instances, such as ",(0,i.jsx)(n.code,{children:"inf2.24xlarge"})," and ",(0,i.jsx)(n.code,{children:"inf2.48xlarge"}),",\nwhich are optimized for deploying and scaling large language models."]}),"\n",(0,i.jsx)(n.h3,{id:"what-is-llama-2",children:"What is Llama-2?"}),"\n",(0,i.jsx)(n.p,{children:"Llama-2 is a pretrained large language model (LLM) trained on 2 trillion tokens of text and code. It is one of the largest and most powerful LLMs available today. Llama-2 can be used for a variety of tasks, including natural language processing, text generation, and translation."}),"\n",(0,i.jsx)(n.h4,{id:"llama-2-chat",children:"Llama-2-chat"}),"\n",(0,i.jsxs)(n.p,{children:["Llama-2 is a remarkable language model that has undergone a rigorous training process. It starts with pretraining using publicly available online data. An initial version of Llama-2-chat is then created through supervised fine-tuning.\nFollowing that, ",(0,i.jsx)(n.code,{children:"Llama-2-chat"})," undergoes iterative refinement using Reinforcement Learning from Human Feedback (",(0,i.jsx)(n.code,{children:"RLHF"}),"), which includes techniques like rejection sampling and proximal policy optimization (",(0,i.jsx)(n.code,{children:"PPO"}),").\nThis process results in a highly capable and fine-tuned language model that we will guide you to deploy and utilize effectively on ",(0,i.jsx)(n.strong,{children:"Amazon EKS"})," with ",(0,i.jsx)(n.strong,{children:"Ray Serve"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Llama-2 is available in three different model sizes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Llama-2-70b:"})," This is the largest Llama-2 model, with 70 billion parameters. It is the most powerful Llama-2 model and can be used for the most demanding tasks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Llama-2-13b:"})," This is a medium-sized Llama-2 model, with 13 billion parameters. It is a good balance between performance and efficiency, and can be used for a variety of tasks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Llama-2-7b:"})," This is the smallest Llama-2 model, with 7 billion parameters. It is the most efficient Llama-2 model and can be used for tasks that do not require the highest level of performance."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"which-llama-2-model-size-should-i-use",children:(0,i.jsx)(n.strong,{children:"Which Llama-2 model size should I use?"})}),"\n",(0,i.jsx)(n.p,{children:"The best Llama-2 model size for you will depend on your specific needs. and it may not always be the largest model for achieving the highest performance. It's advisable to evaluate your needs and consider factors such as computational resources, response time, and cost-efficiency when selecting the appropriate Llama-2 model size. The decision should be based on a comprehensive assessment of your application's goals and constraints."}),"\n",(0,i.jsx)(n.h2,{id:"inference-on-trn1inf2-instances-unlocking-the-full-potential-of-llama-2",children:"Inference on Trn1/Inf2 Instances: Unlocking the Full Potential of Llama-2"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Llama-2"})," can be deployed on a variety of hardware platforms, each with its own set of advantages. However, when it comes to maximizing the efficiency, scalability, and cost-effectiveness of Llama-2, ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/inf2/",children:"AWS Trn1/Inf2 instances"})," shine as the optimal choice."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scalability and Availability"}),"\nOne of the key challenges in deploying large language models (",(0,i.jsx)(n.code,{children:"LLMs"}),") like Llama-2 is the scalability and availability of suitable hardware. Traditional ",(0,i.jsx)(n.code,{children:"GPU"})," instances often face scarcity due to high demand, making it challenging to provision and scale resources effectively.\nIn contrast, ",(0,i.jsx)(n.code,{children:"Trn1/Inf2"})," instances, such as ",(0,i.jsx)(n.code,{children:"trn1.32xlarge"}),", ",(0,i.jsx)(n.code,{children:"trn1n.32xlarge"}),", ",(0,i.jsx)(n.code,{children:"inf2.24xlarge"})," and ",(0,i.jsx)(n.code,{children:"inf2.48xlarge"}),", are purpose built for high-performance deep learning (DL) training and inference of generative AI models, including LLMs. They offer both scalability and availability, ensuring that you can deploy and scale your ",(0,i.jsx)(n.code,{children:"Llama-2"})," models as needed, without resource bottlenecks or delays."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cost Optimization:"}),"\nRunning LLMs on traditional GPU instances can be cost-prohibitive, especially given the scarcity of GPUs and their competitive pricing.\n",(0,i.jsx)(n.strong,{children:"Trn1/Inf2"})," instances provide a cost-effective alternative. By offering dedicated hardware optimized for AI and machine learning tasks, Trn1/Inf2 instances allow you to achieve top-notch performance at a fraction of the cost.\nThis cost optimization enables you to allocate your budget efficiently, making LLM deployment accessible and sustainable."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Performance Boost"}),"\nWhile Llama-2 can achieve high-performance inference on GPUs, Neuron accelerators take performance to the next level. Neuron accelerators are purpose-built for machine learning workloads, providing hardware acceleration that significantly enhances Llama-2's inference speeds. This translates to faster response times and improved user experiences when deploying Llama-2 on Trn1/Inf2 instances."]}),"\n",(0,i.jsx)(n.h3,{id:"model-specification",children:"Model Specification"}),"\n",(0,i.jsxs)(n.p,{children:["The table provides information about the different sizes of Llama-2 models, their weights, and the hardware requirements for deploying them. This information can be used to design the infrastructure required to deploy any size of Llama-2 model. For example, if you want to deploy the ",(0,i.jsx)(n.code,{children:"Llama-2-13b-chat"})," model, you will need to use an instance type with at least ",(0,i.jsx)(n.code,{children:"26 GB"})," of total accelerator memory."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Model"}),(0,i.jsx)(n.th,{children:"Weights"}),(0,i.jsx)(n.th,{children:"Bytes"}),(0,i.jsx)(n.th,{children:"Parameter Size (Billions)"}),(0,i.jsx)(n.th,{children:"Total Accelerator Memory (GB)"}),(0,i.jsx)(n.th,{children:"Accelerator Memory Size for NeuronCore (GB)"}),(0,i.jsx)(n.th,{children:"Required Neuron Cores"}),(0,i.jsx)(n.th,{children:"Required Neuron Accelerators"}),(0,i.jsx)(n.th,{children:"Instance Type"}),(0,i.jsx)(n.th,{children:"tp_degree"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Meta/Llama-2-70b"}),(0,i.jsx)(n.td,{children:"float16"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"70"}),(0,i.jsx)(n.td,{children:"140"}),(0,i.jsx)(n.td,{children:"16"}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"inf2.48x"}),(0,i.jsx)(n.td,{children:"24"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Meta/Llama-2-13b"}),(0,i.jsx)(n.td,{children:"float16"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:"26"}),(0,i.jsx)(n.td,{children:"16"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"inf2.24x"}),(0,i.jsx)(n.td,{children:"12"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Meta/Llama-2-7b"}),(0,i.jsx)(n.td,{children:"float16"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"14"}),(0,i.jsx)(n.td,{children:"16"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"inf2.24x"}),(0,i.jsx)(n.td,{children:"12"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"example-usecase",children:"Example usecase"}),"\n",(0,i.jsx)(n.p,{children:"A company wants to deploy a Llama-2 chatbot to provide customer support. The company has a large customer base and expects to receive a high volume of chat requests at peak times. The company needs to design an infrastructure that can handle the high volume of requests and provide a fast response time."}),"\n",(0,i.jsx)(n.p,{children:"The company can use Inferentia2 instances to scale its Llama-2 chatbot efficiently. Inferentia2 instances are specialized hardware accelerators for machine learning tasks. They can provide up to 20x better performance and up to 7x lower cost than GPUs for machine learning workloads."}),"\n",(0,i.jsx)(n.p,{children:"The company can also use Ray Serve to horizontally scale its Llama-2 chatbot. Ray Serve is a distributed framework for serving machine learning models. It can automatically scale your models up or down based on demand."}),"\n",(0,i.jsx)(n.p,{children:"To scale its Llama-2 chatbot, the company can deploy multiple Inferentia2 instances and use Ray Serve to distribute the traffic across the instances. This will allow the company to handle a high volume of requests and provide a fast response time."}),"\n",(0,i.jsx)(n.h2,{id:"solution-architecture",children:"Solution Architecture"}),"\n",(0,i.jsxs)(n.p,{children:["In this section, we will delve into the architecture of our solution, which combines Llama-2 model, ",(0,i.jsx)(n.a,{href:"https://docs.ray.io/en/latest/serve/index.html",children:"Ray Serve"})," and ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/inf2/",children:"Inferentia2"})," on Amazon EKS."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Llama-2-inf2",src:a(3756).Z+"",width:"11358",height:"7442"})}),"\n",(0,i.jsx)(n.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,i.jsxs)(n.p,{children:["To get started with deploying ",(0,i.jsx)(n.code,{children:"Llama-2-13b chat"})," on ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"Amazon EKS"}),", we will cover the necessary prerequisites and guide you through the deployment process step by step.\nThis includes setting up the infrastructure, deploying the ",(0,i.jsx)(n.strong,{children:"Ray cluster"}),", and creating the ",(0,i.jsx)(n.a,{href:"https://www.gradio.app/",children:"Gradio"})," WebUI app."]}),"\n",(0,i.jsxs)(s.Z,{header:(0,i.jsx)(n.h2,{children:(0,i.jsx)(n.span,{children:"Prerequisites"})}),children:[(0,i.jsx)(n.p,{children:"Before we begin, ensure you have all the prerequisites in place to make the deployment process smooth and hassle-free.\nnsure that you have installed the following tools on your machine."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,i.jsx)(n.h3,{id:"deploy",children:"Deploy"}),(0,i.jsx)(n.p,{children:"Clone the repository"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),(0,i.jsxs)(n.p,{children:["Navigate into one of the example directories and run ",(0,i.jsx)(n.code,{children:"install.sh"})," script"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important Note:"})," Ensure that you update the region in the ",(0,i.jsx)(n.code,{children:"variables.tf"})," file before deploying the blueprint.\nAdditionally, confirm that your local region setting matches the specified region to prevent any discrepancies.\nFor example, set your ",(0,i.jsx)(n.code,{children:'export AWS_DEFAULT_REGION="<REGION>"'})," to the desired region:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/trainium-inferentia/ && chmod +x install.sh\n./install.sh\n"})}),(0,i.jsx)(n.h3,{id:"verify-the-resources",children:"Verify the resources"}),(0,i.jsx)(n.p,{children:"Verify the Amazon EKS Cluster"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"aws eks --region us-west-2 describe-cluster --name trainium-inferentia\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Creates k8s config file to authenticate with EKS\naws eks --region us-west-2 update-kubeconfig --name trainium-inferentia\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"deploying-the-ray-cluster-with-llama-2-chat-model",children:"Deploying the Ray Cluster with Llama-2-Chat Model"}),"\n",(0,i.jsxs)(n.p,{children:["Once the ",(0,i.jsx)(n.code,{children:"Trainium on EKS"})," Cluster is deployed, you can proceed to use ",(0,i.jsx)(n.code,{children:"kubectl"})," to deploy the ",(0,i.jsx)(n.code,{children:"ray-service-Llama-2.yaml"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In this step, we will deploy the Ray Serve cluster, which comprises one ",(0,i.jsx)(n.code,{children:"Head Pod"})," on ",(0,i.jsx)(n.code,{children:"x86 CPU"})," instances using Karpenter autoscaling, as well as ",(0,i.jsx)(n.code,{children:"Ray workers"})," on ",(0,i.jsx)(n.code,{children:"Inf2.48xlarge"})," instances, autoscaled by ",(0,i.jsx)(n.a,{href:"https://karpenter.sh/",children:"Karpenter"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Let's take a closer look at the key files used in this deployment and understand their functionalities before proceeding with the deployment:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ray_serve_Llama-2.py:"}),"\nThis script uses FastAPI, Ray Serve, and PyTorch-based Hugging Face Transformers to create an efficient API for text generation using the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/NousResearch/Llama-2-13b-chat-hf",children:"NousResearch/Llama-2-13b-chat-hf"})," language model.\nAlternatively, users have the flexibility to switch to the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/meta-llama/Llama-2-13b-chat-hf",children:"meta-llama/Llama-2-13b-chat-hf"})," model. The script establishes an endpoint that accepts input sentences and efficiently generates text outputs, benefiting from Neuron acceleration for enhanced performance. With its high configurability, users can fine-tune model parameters to suit a wide range of natural language processing applications, including chatbots and text generation tasks."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ray-service-Llama-2.yaml:"}),"\nThis Ray Serve YAML file serves as a Kubernetes configuration for deploying the Ray Serve service, facilitating efficient text generation using the ",(0,i.jsx)(n.code,{children:"Llama-2-13b-chat"})," model.\nIt defines a Kubernetes namespace named ",(0,i.jsx)(n.code,{children:"Llama-2"})," to isolate resources. Within the configuration, the ",(0,i.jsx)(n.code,{children:"RayService"})," specification, named ",(0,i.jsx)(n.code,{children:"Llama-2-service"}),", is created and hosted within the ",(0,i.jsx)(n.code,{children:"Llama-2"})," namespace. The ",(0,i.jsx)(n.code,{children:"RayService"})," specification leverages the Python script ",(0,i.jsx)(n.code,{children:"ray_serve_Llama-2.py"})," (copied into the Dockerfile located within the same folder) to create the Ray Serve service.\nThe Docker image used in this example is publicly available on Amazon Elastic Container Registry (ECR) for ease of deployment.\nUsers can also modify the Dockerfile to suit their specific requirements and push it to their own ECR repository, referencing it in the YAML file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-the-llama-2-chat-model",children:"Deploy the Llama-2-Chat Model"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Ensure the cluster is configured locally"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"aws eks --region us-west-2 update-kubeconfig --name trainium-inferentia\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Deploy RayServe Cluster"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ai-ml/trainium-inferentia/examples/inference/ray-serve/llama2-inf2\nkubectl apply -f ray-service-llama2.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Verify the deployment by running the following commands"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The deployment process may take up to 10 minutes. The Head Pod is expected to be ready within 2 to 3 minutes, while the Ray Serve worker pod may take up to 10 minutes for image retrieval and Model deployment from Huggingface."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ kubectl get all -n llama2\n\nNAME                                                          READY   STATUS              RESTARTS   AGE\npod/llama2-service-raycluster-smqrl-head-4wlbb                0/1     ContainerCreating   0          77s\npod/service-raycluster-smqrl-worker-inf2-worker-group-wjxqq   0/1     Init:0/1            0          77s\n\nNAME                     TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)                                                                                       AGE\nservice/llama2-service   NodePort   172.20.246.48   <none>        8000:32138/TCP,52365:32653/TCP,8080:32604/TCP,6379:32739/TCP,8265:32288/TCP,10001:32419/TCP   78s\n\n$ kubectl get ingress -n llama2\n\nNAME             CLASS   HOSTS   ADDRESS                                                                         PORTS   AGE\nllama2-ingress   nginx   *       k8s-ingressn-ingressn-randomid-randomid.elb.us-west-2.amazonaws.com   80      2m4s\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, you can access the Ray Dashboard from the Load balancer URL below."}),"\n",(0,i.jsx)(n.p,{children:"http://<NLB_DNS_NAME>/dashboard/#/serve"}),"\n",(0,i.jsx)(n.p,{children:"If you don't have access to a public Load Balancer, you can use port-forwarding and browse the Ray Dashboard using localhost with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/llama2-service 8265:8265 -n llama2\n\n# Open the link in the browser\nhttp://localhost:8265/\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"From this webpage, you will be able to monitor the progress of Model deployment, as shown in the image below:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Ray Dashboard",src:a(8287).Z+"",width:"1345",height:"886"})}),"\n",(0,i.jsx)(n.h3,{id:"to-test-the-llama-2-chat-model",children:"To Test the Llama-2-Chat Model"}),"\n",(0,i.jsxs)(n.p,{children:["Once you see the status of the model deployment is in ",(0,i.jsx)(n.code,{children:"running"})," state then you can start using Llama-2-chat."]}),"\n",(0,i.jsx)(n.p,{children:"You can use the following URL with a query added at the end of the URL."}),"\n",(0,i.jsx)(n.p,{children:"http://<NLB_DNS_NAME>/serve/infer?sentence=what is data parallelism and tensor parallelisma and the differences"}),"\n",(0,i.jsx)(n.p,{children:"You will see an output like this in your browser:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Chat Output",src:a(5440).Z+"",width:"2432",height:"1308"})}),"\n",(0,i.jsx)(n.h2,{id:"deploying-the-gradio-webui-app",children:"Deploying the Gradio WebUI App"}),"\n",(0,i.jsxs)(n.p,{children:["Discover how to create a user-friendly chat interface using ",(0,i.jsx)(n.a,{href:"https://www.gradio.app/",children:"Gradio"})," that integrates seamlessly with deployed models."]}),"\n",(0,i.jsx)(n.p,{children:"Let's deploy Gradio app locally on your machine to interact with the LLama-2-Chat model deployed using RayServe."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The Gradio app interacts with the locally exposed service created solely for the demonstration. Alternatively, you can deploy the Gradio app on EKS as a Pod with Ingress and Load Balancer for wider accessibility."})}),"\n",(0,i.jsx)(n.h3,{id:"execute-port-forward-to-the-llama2-ray-service",children:"Execute Port Forward to the llama2 Ray Service"}),"\n",(0,i.jsx)(n.p,{children:"First, execute a port forward to the Llama-2 Ray Service using kubectl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/llama2-service 8000:8000 -n llama2\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deploy-gradio-webui-locally",children:"Deploy Gradio WebUI Locally"}),"\n",(0,i.jsx)(n.h4,{id:"create-a-virtual-environment",children:"Create a Virtual Environment"}),"\n",(0,i.jsx)(n.p,{children:"Create a Python virtual environment in your machine for the Gradio application:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ai-ml/trainium-inferentia/examples/gradio-ui\npython3 -m venv .venv\nsource .venv/bin/activate\n"})}),"\n",(0,i.jsx)(n.h4,{id:"install-gradio-chatbot-app",children:"Install Gradio ChatBot app"}),"\n",(0,i.jsx)(n.p,{children:"Install all the Gradio WebUI app dependencies with pip"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install gradio requests\n"})}),"\n",(0,i.jsx)(n.h4,{id:"invoke-the-webui",children:"Invoke the WebUI"}),"\n",(0,i.jsx)(n.p,{children:"Run the Gradio WebUI using the following command:"}),"\n",(0,i.jsxs)(n.p,{children:["NOTE: ",(0,i.jsx)(n.code,{children:"gradio-app.py"})," refers to the port forward url. e.g., ",(0,i.jsx)(n.code,{children:'service_name = "http://localhost:8000" '})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python gradio-app.py\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see output similar to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Using cache from ~/data-on-eks/ai-ml/trainium-inferentia/examples/gradio-ui/gradio_cached_examples/16' directory. If method or examples have changed since last caching, delete this folder to clear cache.\n\nRunning on local URL:  http://127.0.0.1:7860\n\nTo create a public link, set `share=True` in `launch()`.\n"})}),"\n",(0,i.jsx)(n.h4,{id:"24-access-the-webui-from-your-browser",children:"2.4. Access the WebUI from Your Browser"}),"\n",(0,i.jsx)(n.p,{children:"Open your web browser and access the Gradio WebUI by navigating to the following URL:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://127.0.0.1:7860",children:"http://127.0.0.1:7860"})}),"\n",(0,i.jsx)(n.p,{children:"You should now be able to interact with the Gradio application from your local machine."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Gradio Llama-2 AI Chat",src:a(1620).Z+"",width:"1345",height:"927"})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["In conclusion, you will have successfully deployed the ",(0,i.jsx)(n.strong,{children:"Llama-2-13b chat"})," model on EKS with Ray Serve and created a chatGPT-style chat web UI using Gradio.\nThis opens up exciting possibilities for natural language processing and chatbot development."]}),"\n",(0,i.jsx)(n.p,{children:"In summary, when it comes to deploying and scaling Llama-2, AWS Trn1/Inf2 instances offer a compelling advantage.\nThey provide the scalability, cost optimization, and performance boost needed to make running large language models efficient and accessible, all while overcoming the challenges associated with the scarcity of GPUs.\nWhether you're building chatbots, natural language processing applications, or any other LLM-driven solution, Trn1/Inf2 instances empower you to harness the full potential of Llama-2 on the AWS cloud."}),"\n",(0,i.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,i.jsx)(n.p,{children:"Finally, we'll provide instructions for cleaning up and deprovisioning the resources when they are no longer needed."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step1:"})," Cancel the execution of the ",(0,i.jsx)(n.code,{children:"python gradio-app.py"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step2:"})," Delete Ray Cluster"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ai-ml/trainium-inferentia/examples/inference/ray-serve/llama2-inf2\nkubectl delete -f ray-service-llama2.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step3:"})," Cleanup the EKS Cluster\nThis script will cleanup the environment using ",(0,i.jsx)(n.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export AWS_DEAFULT_REGION="DEPLOYED_EKS_CLUSTER_REGION>"\ncd data-on-eks/ai-ml/trainium-inferentia/ && chmod +x cleanup.sh\n./cleanup.sh\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},769:(e,n,a)=>{a.d(n,{Z:()=>u});var i=a(7294),t=a(5697),s=a.n(t),l=a(512);const r="collapsibleContent_q3kw",o="header_QCEw",c="icon_PckA",d="content_qLC1",h="expanded_iGsi";var p=a(5893);function m(e){let{children:n,header:a}=e;const[t,s]=(0,i.useState)(!1);return(0,p.jsxs)("div",{className:r,children:[(0,p.jsxs)("div",{className:(0,l.Z)(o,{[h]:t}),onClick:()=>{s(!t)},children:[a,(0,p.jsx)("span",{className:(0,l.Z)(c,{[h]:t}),children:t?"\ud83d\udc47":"\ud83d\udc48"})]}),t&&(0,p.jsx)("div",{className:d,children:n})]})}m.propTypes={children:s().node.isRequired,header:s().node.isRequired};const u=m},1620:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/gradio-llama-ai-chat-d9cebff0013257e5eaed696ca4a99456.png"},5440:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/llama-2-chat-ouput-e291e1c9481febc387222da8c06c1170.png"},3756:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/llama2-inf2-6145720e940706806709b8e483dd9a8f.png"},8287:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/ray-dashboard-f6cb3c6c4a023ceb750a02ccc787b6d0.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>l});var i=a(7294);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);