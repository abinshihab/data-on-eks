"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[9008],{7099:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(4848),t=i(8453),a=i(2450);const r={title:"Stable Diffusion on GPU",sidebar_position:3},o="Deploying Stable Diffusion v2 with GPUs, Ray Serve and Gradio",l={id:"gen-ai/inference/GPUs/stablediffusion-gpus",title:"Stable Diffusion on GPU",description:"- We are actively enhancing this blueprint to incorporate improvements in observability and logging.",source:"@site/docs/gen-ai/inference/GPUs/stablediffusion-gpus.md",sourceDirName:"gen-ai/inference/GPUs",slug:"/gen-ai/inference/GPUs/stablediffusion-gpus",permalink:"/data-on-eks/docs/gen-ai/inference/GPUs/stablediffusion-gpus",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/gen-ai/inference/GPUs/stablediffusion-gpus.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Stable Diffusion on GPU",sidebar_position:3},sidebar:"genai",previous:{title:"NVIDIA Triton Server with vLLM",permalink:"/data-on-eks/docs/gen-ai/inference/GPUs/vLLM-NVIDIATritonServer-Llama2"},next:{title:"NVIDIA NIM LLM on Amazon EKS",permalink:"/data-on-eks/docs/gen-ai/inference/GPUs/nvidia-nim-llama3"}},d={},c=[{value:"What is Stable Diffusion?",id:"what-is-stable-diffusion",level:3},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"(Optional) Reduce Cold Start Time by Preloading Container Images in Bottlerocket OS",id:"optional-reduce-cold-start-time-by-preloading-container-images-in-bottlerocket-os",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:3},{value:"Deploying the Ray Cluster with Stable Diffusion Model",id:"deploying-the-ray-cluster-with-stable-diffusion-model",level:2},{value:"Deploy the Stable Diffusion V2 Model",id:"deploy-the-stable-diffusion-v2-model",level:3},{value:"Deploying the Gradio WebUI App",id:"deploying-the-gradio-webui-app",level:2},{value:"Build the Gradio app docker container",id:"build-the-gradio-app-docker-container",level:3},{value:"Deploy the Gradio container",id:"deploy-the-gradio-container",level:3},{value:"Invoke the WebUI",id:"invoke-the-webui",level:4},{value:"Ray Autoscaling",id:"ray-autoscaling",level:3},{value:"Cleanup",id:"cleanup",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We are actively enhancing this blueprint to incorporate improvements in observability and logging."}),"\n"]})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploying-stable-diffusion-v2-with-gpus-ray-serve-and-gradio",children:"Deploying Stable Diffusion v2 with GPUs, Ray Serve and Gradio"})}),"\n",(0,s.jsxs)(n.p,{children:["This pattern demonstrates how to deploy the ",(0,s.jsx)(n.a,{href:"https://huggingface.co/stabilityai/stable-diffusion-2-1",children:"Stable Diffusion V2"})," model on Amazon EKS, using ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/g4/",children:"GPUs"})," for accelerated image generation. ",(0,s.jsx)(n.a,{href:"https://docs.ray.io/en/latest/serve/index.html",children:"Ray Serve"})," provides efficient scaling across multiple GPU nodes, while ",(0,s.jsx)(n.a,{href:"https://karpenter.sh/",children:"Karpenter"})," dynamically manages node provisioning."]}),"\n",(0,s.jsx)(n.p,{children:"Through this pattern, you will accomplish the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create an Amazon EKS cluster with a Karpenter managed GPU nodepool for dynamic scaling of Nodes."}),"\n",(0,s.jsxs)(n.li,{children:["Install KubeRay Operator and other core EKS add-ons using the ",(0,s.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/ai-ml/jark-stack/terraform",children:"jark-stack"})," Terraform blueprint."]}),"\n",(0,s.jsx)(n.li,{children:"Deploy the Stable Diffusion model using RayServe for efficient scaling across your GPU resources"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"what-is-stable-diffusion",children:"What is Stable Diffusion?"}),"\n",(0,s.jsx)(n.p,{children:"Stable Diffusion is a cutting-edge text-to-image model that generates stunning, detailed images from text descriptions. It's a powerful tool for artists, designers, and anyone who wants to unleash their imagination through image generation. This model stands out by offering a high degree of creative control and flexibility in the image generation process."}),"\n",(0,s.jsx)(n.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,s.jsx)(n.p,{children:"Let's get Stable Diffusion v2-1 up and running on Amazon EKS! In this section, we'll cover:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prerequisites"}),": Ensuring you have everything in place."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Infrastructure Setup"}),": Creating your EKS cluster and preparing it for deployment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Deploying the Ray Cluster"}),": The core of your image generation pipeline, providing scalability and efficiency."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Building the Gradio Web UI"}),": A user-friendly interface for interacting with Stable Diffusion."]}),"\n"]}),"\n",(0,s.jsxs)(a.A,{header:(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.span,{children:"Prerequisites"})}),children:[(0,s.jsx)(n.p,{children:"Before we begin, ensure you have all the prerequisites in place to make the deployment process smooth and hassle-free.\nEnsure that you have installed the following tools on your machine."}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,s.jsx)(n.h3,{id:"optional-reduce-cold-start-time-by-preloading-container-images-in-bottlerocket-os",children:"(Optional) Reduce Cold Start Time by Preloading Container Images in Bottlerocket OS"}),(0,s.jsxs)(n.p,{children:["To accelerate the deployment of image retrieval on Ray workers, refer to ",(0,s.jsx)(n.a,{href:"../../bestpractices/preload-container-images",children:"Preload container images into Bottlerocket data volumes with Karpenter with EBS Snapshots"})]}),(0,s.jsxs)(n.p,{children:["Define the ",(0,s.jsx)(n.code,{children:"TF_VAR_bottlerocket_data_disk_snpashot_id"})," to enable Karpenter to provision Bottlerocket worker nodes with EBS Snapshots, to reduce cold start for container startup. This will likely to save 10 mins (depending on the image size) for downloading and extracting container images from Amazon ECR."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export TF_VAR_bottlerocket_data_disk_snpashot_id=snap-0c6d965cf431785ed\n"})}),(0,s.jsx)(n.h3,{id:"deploy",children:"Deploy"}),(0,s.jsx)(n.p,{children:"Clone the repository"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd data-on-eks/ai-ml/jark-stack/ && chmod +x install.sh\n./install.sh\n"})}),(0,s.jsxs)(n.p,{children:["Navigate into one of the example directories and run ",(0,s.jsx)(n.code,{children:"install.sh"})," script"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important Note:"})," Ensure that you update the region in the ",(0,s.jsx)(n.code,{children:"variables.tf"})," file before deploying the blueprint.\nAdditionally, confirm that your local region setting matches the specified region to prevent any discrepancies.\nFor example, set your ",(0,s.jsx)(n.code,{children:'export AWS_DEFAULT_REGION="<REGION>"'})," to the desired region:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/jark-stack/ && chmod +x install.sh\n./install.sh\n"})}),(0,s.jsx)(n.h3,{id:"verify-the-resources",children:"Verify the resources"}),(0,s.jsx)(n.p,{children:"Verify the Amazon EKS Cluster"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aws eks --region us-west-2 describe-cluster --name jark-stack\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Creates k8s config file to authenticate with EKS\naws eks --region us-west-2 update-kubeconfig --name jark-stack\n\n# Output shows the EKS Managed Node group nodes\nkubectl get nodes\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"deploying-the-ray-cluster-with-stable-diffusion-model",children:"Deploying the Ray Cluster with Stable Diffusion Model"}),"\n",(0,s.jsxs)(n.p,{children:["Once the ",(0,s.jsx)(n.code,{children:"jark-stack"})," cluster is deployed, you can proceed to use ",(0,s.jsx)(n.code,{children:"kubectl"})," to deploy the ",(0,s.jsx)(n.code,{children:"ray-service-stablediffusion.yaml"})," from ",(0,s.jsx)(n.code,{children:"/data-on-eks/gen-ai/inference/stable-diffusion-rayserve-gpu/"})," path."]}),"\n",(0,s.jsxs)(n.p,{children:["In this step, we will deploy the Ray Serve cluster, which comprises one ",(0,s.jsx)(n.code,{children:"Head Pod"})," on ",(0,s.jsx)(n.code,{children:"x86 CPU"})," instances using Karpenter autoscaling, as well as ",(0,s.jsx)(n.code,{children:"Ray workers"})," on ",(0,s.jsx)(n.code,{children:"g5.2xlarge"})," instances, autoscaled by ",(0,s.jsx)(n.a,{href:"https://karpenter.sh/",children:"Karpenter"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Let's take a closer look at the key files used in this deployment and understand their functionalities before proceeding with the deployment:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ray_serve_sd.py:"}),"\nThis script sets up a FastAPI application with two main components deployed using Ray Serve, which enables scalable model serving on GPU-equipped infrastructure:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"StableDiffusionV2 Deployment"}),": This class initializes the Stable Diffusion V2 model using a scheduler and moves it to a GPU for processing. It includes functionality to generate images based on textual prompts, with the image size customizable via the input parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"APIIngress"}),": This FastAPI endpoint acts as an interface to the Stable Diffusion model. It exposes a GET method on the ",(0,s.jsx)(n.code,{children:"/imagine"})," path that takes a text prompt and an optional image size. It generates an image using the Stable Diffusion model and returns it as a PNG file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ray-service-stablediffusion.yaml:"}),"\nThis RayServe deployment pattern sets up a scalable service for hosting the Stable Diffusion model on Amazon EKS with GPU support. It creates a dedicated namespace and configures a RayService with autoscaling capabilities to efficiently manage resource utilization based on incoming traffic. The deployment ensures that the model, served under the RayService umbrella, can automatically adjust between 1 and 4 replicas, depending on demand, with each replica requiring a GPU. This pattern makes use of custom container images designed to maximize performance and minimizes startup delays by ensuring that heavy dependencies are preloaded."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deploy-the-stable-diffusion-v2-model",children:"Deploy the Stable Diffusion V2 Model"}),"\n",(0,s.jsx)(n.p,{children:"Ensure the cluster is configured locally"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aws eks --region us-west-2 update-kubeconfig --name jark-stack\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Deploy RayServe Cluster"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ./../gen-ai/inference/stable-diffusion-rayserve-gpu\nkubectl apply -f ray-service-stablediffusion.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify the deployment by running the following commands"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"If you did not preload container images into the data volume, the deployment process may take up to 10 to 12 minutes. The Head Pod is expected to be ready within 2 to 3 minutes, while the Ray Serve worker pod may take up to 10 minutes for image retrieval and Model deployment from Huggingface."})}),"\n",(0,s.jsx)(n.p,{children:"This deployment establishes a Ray head pod running on an x86 instance and a worker pod on a GPU G5 instance as shown below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n stablediffusion\n\nNAME                                                      READY   STATUS\nrservice-raycluster-hb4l4-worker-gpu-worker-group-z8gdw   1/1     Running\nstablediffusion-service-raycluster-hb4l4-head-4kfzz       2/2     Running\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you have preload container images into the data volume, you can find the message showing ",(0,s.jsx)(n.code,{children:'Container image "public.ecr.aws/data-on-eks/ray2.11.0-py310-gpu-stablediffusion:latest" already present on machine'})," in the output of ",(0,s.jsx)(n.code,{children:"kubectl describe pod -n stablediffusion"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'kubectl describe pod -n stablediffusion\n\n...\nEvents:\n  Type     Reason            Age                From               Message\n  ----     ------            ----               ----               -------\n  Warning  FailedScheduling  41m                default-scheduler  0/8 nodes are available: 1 Insufficient cpu, 3 Insufficient memory, 8 Insufficient nvidia.com/gpu. preemption: 0/8 nodes are available: 8 No preemption victims found for incoming pod.\n  Normal   Nominated         41m                karpenter          Pod should schedule on: nodeclaim/gpu-ljvhl\n  Normal   Scheduled         40m                default-scheduler  Successfully assigned stablediffusion/stablediffusion-raycluster-ms6pl-worker-gpu-85d22 to ip-100-64-136-72.us-west-2.compute.internal\n  Normal   Pulled            40m                kubelet            Container image "public.ecr.aws/data-on-eks/ray2.11.0-py310-gpu-stablediffusion:latest" already present on machine\n  Normal   Created           40m                kubelet            Created container wait-gcs-ready\n  Normal   Started           40m                kubelet            Started container wait-gcs-ready\n  Normal   Pulled            39m                kubelet            Container image "public.ecr.aws/data-on-eks/ray2.11.0-py310-gpu-stablediffusion:latest" already present on machine\n  Normal   Created           39m                kubelet            Created container worker\n  Normal   Started           38m                kubelet            Started container worker\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This deployment also sets up a stablediffusion service with multiple ports configured; port ",(0,s.jsx)(n.code,{children:"8265"})," is designated for the Ray dashboard and port ",(0,s.jsx)(n.code,{children:"8000"})," for the Stable Diffusion model endpoint."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get svc -n stablediffusion\nNAME                                TYPE       CLUSTER-IP       EXTERNAL-IP   PORT(S)\nstablediffusion-service             NodePort   172.20.223.142   <none>        8080:30213/TCP,6379:30386/TCP,8265:30857/TCP,10001:30666/TCP,8000:31194/TCP\nstablediffusion-service-head-svc    NodePort   172.20.215.100   <none>        8265:30170/TCP,10001:31246/TCP,8000:30376/TCP,8080:32646/TCP,6379:31846/TCP\nstablediffusion-service-serve-svc   NodePort   172.20.153.125   <none>        8000:31459/TCP\n"})}),"\n",(0,s.jsx)(n.p,{children:"For the Ray dashboard, you can port-forward these ports individually to access the web UI locally using localhost."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/stablediffusion-service 8266:8265 -n stablediffusion\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Access the web UI via ",(0,s.jsx)(n.code,{children:"http://localhost:8265"})," . This interface displays the deployment of jobs and actors within the Ray ecosystem."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"RayServe Deployment",src:i(7605).A+"",width:"3062",height:"1848"})}),"\n",(0,s.jsx)(n.p,{children:"The screenshots provided will show the Serve deployment and the Ray Cluster deployment, offering a visual overview of the setup and operational status."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"RayServe Cluster",src:i(7172).A+"",width:"3810",height:"1838"})}),"\n",(0,s.jsx)(n.h2,{id:"deploying-the-gradio-webui-app",children:"Deploying the Gradio WebUI App"}),"\n",(0,s.jsxs)(n.p,{children:["Discover how to create a user-friendly chat interface using ",(0,s.jsx)(n.a,{href:"https://www.gradio.app/",children:"Gradio"})," that integrates seamlessly with deployed models."]}),"\n",(0,s.jsx)(n.p,{children:"Let's move forward with setting up the Gradio app as a Docker container running on localhost. This setup will enable interaction with the Stable Diffusion XL model, which is deployed using RayServe."}),"\n",(0,s.jsx)(n.h3,{id:"build-the-gradio-app-docker-container",children:"Build the Gradio app docker container"}),"\n",(0,s.jsx)(n.p,{children:"First, lets build the docker container for the client app."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cd ../gradio-ui\ndocker build --platform=linux/amd64 \\\n    -t gradio-app:sd \\\n    --build-arg GRADIO_APP="gradio-app-stable-diffusion.py" \\\n    .\n'})}),"\n",(0,s.jsx)(n.h3,{id:"deploy-the-gradio-container",children:"Deploy the Gradio container"}),"\n",(0,s.jsx)(n.p,{children:"Deploy the Gradio app as a container on localhost using docker:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --rm -it -p 7860:7860 -p 8000:8000 gradio-app:sd\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["If you are not running Docker Desktop on your machine and using something like ",(0,s.jsx)(n.a,{href:"https://runfinch.com/",children:"finch"})," instead then you will need to additional flags for a custom host-to-IP mapping inside the container."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'docker run --rm -it \\\n    --add-host ray-service:<workstation-ip> \\\n    -e "SERVICE_NAME=http://ray-service:8000" \\\n    -p 7860:7860 gradio-app:sd\n'})})]}),"\n",(0,s.jsx)(n.h4,{id:"invoke-the-webui",children:"Invoke the WebUI"}),"\n",(0,s.jsx)(n.p,{children:"Open your web browser and access the Gradio WebUI by navigating to the following URL:"}),"\n",(0,s.jsxs)(n.p,{children:["Running on local URL:  ",(0,s.jsx)(n.a,{href:"http://localhost:7860",children:"http://localhost:7860"})]}),"\n",(0,s.jsx)(n.p,{children:"You should now be able to interact with the Gradio application from your local machine."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Gradio Output",src:i(6971).A+"",width:"2752",height:"1356"})}),"\n",(0,s.jsx)(n.h3,{id:"ray-autoscaling",children:"Ray Autoscaling"}),"\n",(0,s.jsxs)(n.p,{children:["The Ray Autoscaling configuration detailed in the ",(0,s.jsx)(n.code,{children:"ray-serve-stablediffusion.yaml"})," file leverages the capabilities of Ray on Kubernetes to dynamically scale applications based on computational needs."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Incoming Traffic"}),": Incoming requests to your stable-diffusion deployment trigger Ray Serve to monitor the load on existing replicas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metrics-Based Scaling"}),": Ray Serve tracks the average number of ongoing requests per replica.  This configuration has ",(0,s.jsx)(n.code,{children:"target_num_ongoing_requests_per_replica"})," set to 1. If this metric exceeds the threshold, it signals the need for more replicas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Replica Creation (Within Node)"}),": If a node has sufficient GPU capacity, Ray Serve will attempt to add a new replica within the existing node. Your deployment requests 1 GPU per replica (",(0,s.jsx)(n.code,{children:"ray_actor_options: num_gpus: 1"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Scaling (Karpenter)"}),":  If a node cannot accommodate an additional replica (e.g., only one GPU per node), Ray will signal to Kubernetes that it needs more resources. Karpenter observes pending pod requests from Kubernetes and provisions a new g5 GPU node to fulfill the resource need."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Replica Creation (Across Nodes)"}),": Once the new node is ready, Ray Serve schedules an additional replica on the newly provisioned node."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To simulate autoscaling:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Generate Load"}),": Create a script or use a load testing tool to send a burst of image generation requests to your stable diffusion service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Observe (Ray Dashboard)"}),": Access the Ray Dashboard (via port-forwarding or public NLB if configured) at ",(0,s.jsx)(n.a,{href:"http://your-cluster/dashboard",children:"http://your-cluster/dashboard"}),". Observe how these metrics change:\nThe number of replicas for your deployment.\nThe number of nodes in your Ray cluster."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Observe (Kubernetes)"}),": Use ",(0,s.jsx)(n.code,{children:"kubectl get pods -n stablediffusion"})," to see the creation of new pods. Use ",(0,s.jsx)(n.code,{children:"kubectl get nodes"})," to observe new nodes provisioned by Karpenter."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,s.jsx)(n.p,{children:"Finally, we'll provide instructions for cleaning up and deprovisioning the resources when they are no longer needed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step1:"})," Delete Gradio Container"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Ctrl-c"})," on the localhost terminal window where ",(0,s.jsx)(n.code,{children:"docker run"})," is running to kill the container running the Gradio app. Optionally clean up the docker image"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rmi gradio-app:sd\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step2:"})," Delete Ray Cluster"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ../stable-diffusion-rayserve-gpu\nkubectl delete -f ray-service-stablediffusion.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step3:"})," Cleanup the EKS Cluster\nThis script will cleanup the environment using ",(0,s.jsx)(n.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ../../../ai-ml/jark-stack/\n./cleanup.sh\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2450:(e,n,i)=>{i.d(n,{A:()=>g});var s=i(6540),t=i(5556),a=i.n(t),r=i(4164);const o="collapsibleContent_q3kw",l="header_QCEw",d="icon_PckA",c="content_qLC1",h="expanded_iGsi";var p=i(4848);function u(e){let{children:n,header:i}=e;const[t,a]=(0,s.useState)(!1);return(0,p.jsxs)("div",{className:o,children:[(0,p.jsxs)("div",{className:(0,r.A)(l,{[h]:t}),onClick:()=>{a(!t)},children:[i,(0,p.jsx)("span",{className:(0,r.A)(d,{[h]:t}),children:t?"\ud83d\udc47":"\ud83d\udc48"})]}),t&&(0,p.jsx)("div",{className:c,children:n})]})}u.propTypes={children:a().node.isRequired,header:a().node.isRequired};const g=u},6971:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/gradio-app-gpu-acc504535ea3b57ab6e212e86ea12e4f.png"},7172:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ray-serve-gpu-sd-cluster-3f6ac2895cf3f6b1400dfc38c42161ca.png"},7605:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ray-serve-gpu-sd-11dd36b4e8e36ff5aa4e053e6e721b50.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);