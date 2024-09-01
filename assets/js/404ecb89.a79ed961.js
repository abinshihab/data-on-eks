"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[116],{6494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(4848),i=t(8453);t(2450);const a={title:"NVIDIA NIM LLM on Amazon EKS",sidebar_position:4},r="NVIDIA NIM LLM Deployment on Amazon EKS",o={id:"gen-ai/inference/GPUs/nvidia-nim-llama3",title:"NVIDIA NIM LLM on Amazon EKS",description:"Deployment of ML models on EKS requires access to GPUs or Neuron instances. If your deployment isn't working, it\u2019s often due to missing access to these resources. Also, some deployment patterns rely on Karpenter autoscaling and static node groups; if nodes aren't initializing, check the logs for Karpenter or Node groups to resolve the issue.",source:"@site/docs/gen-ai/inference/GPUs/nvidia-nim-llama3.md",sourceDirName:"gen-ai/inference/GPUs",slug:"/gen-ai/inference/GPUs/nvidia-nim-llama3",permalink:"/data-on-eks/docs/gen-ai/inference/GPUs/nvidia-nim-llama3",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/gen-ai/inference/GPUs/nvidia-nim-llama3.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"NVIDIA NIM LLM on Amazon EKS",sidebar_position:4},sidebar:"genai",previous:{title:"Stable Diffusion on GPU",permalink:"/data-on-eks/docs/gen-ai/inference/GPUs/stablediffusion-gpus"},next:{title:"Mistral-7B on Inferentia2",permalink:"/data-on-eks/docs/gen-ai/inference/Neuron/Mistral-7b-inf2"}},l={},c=[{value:"What is NVIDIA NIM?",id:"what-is-nvidia-nim",level:2},{value:"Why NIM?",id:"why-nim",level:2},{value:"Overview of this deployment pattern on Amazon EKS",id:"overview-of-this-deployment-pattern-on-amazon-eks",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Testing the Llama3 model deployed with NIM",id:"testing-the-llama3-model-deployed-with-nim",level:3},{value:"Performance Testing with NVIDIA GenAI-Perf Tool",id:"performance-testing-with-nvidia-genai-perf-tool",level:2},{value:"Observability",id:"observability",level:2},{value:"Grafana Dashboard",id:"grafana-dashboard",level:3},{value:"Cleanup",id:"cleanup",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Deployment of ML models on EKS requires access to GPUs or Neuron instances. If your deployment isn't working, it\u2019s often due to missing access to these resources. Also, some deployment patterns rely on Karpenter autoscaling and static node groups; if nodes aren't initializing, check the logs for Karpenter or Node groups to resolve the issue."})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["Note: Before implementing NVIDIA NIM, please be aware it is part of ",(0,s.jsx)(n.a,{href:"https://www.nvidia.com/en-us/data-center/products/ai-enterprise/",children:"NVIDIA AI Enterprise"}),", which may introduce potential cost and licensing for production use."]}),(0,s.jsxs)(n.p,{children:["For evaluation, NVIDIA also offers a free evaluation license to try NVIDIA AI Enterprise for 90 days, and you can ",(0,s.jsx)(n.a,{href:"https://enterpriseproductregistration.nvidia.com/?LicType=EVAL&ProductFamily=NVAIEnterprise",children:"register"})," it with your corporate email."]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"We are actively enhancing this blueprint to incorporate improvements in observability, logging, and scalability aspects."})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"nvidia-nim-llm-deployment-on-amazon-eks",children:"NVIDIA NIM LLM Deployment on Amazon EKS"})}),"\n",(0,s.jsx)(n.h2,{id:"what-is-nvidia-nim",children:"What is NVIDIA NIM?"}),"\n",(0,s.jsx)(n.p,{children:"NVIDIA NIM makes it easy for IT and DevOps teams to self-host large language models (LLMs) in their own managed environments while still providing developers with industry standard APIs that allow them to build powerful copilots, chatbots, and AI assistants that can transform their business. Leveraging NVIDIA\u2019s cutting-edge GPU acceleration and scalable deployment, NIM offers the fastest path to inference with unparalleled performance."}),"\n",(0,s.jsx)(n.h2,{id:"why-nim",children:"Why NIM?"}),"\n",(0,s.jsx)(n.p,{children:"NIM abstracts away model inference internals such as execution engine and runtime operations. They are also the most performant option available whether it be with TRT-LLM, vLLM or others."}),"\n",(0,s.jsxs)(n.p,{children:["NIMs are packaged as container images on a per model/model family basis. Each NIM container is with a model, such as ",(0,s.jsx)(n.code,{children:"meta/llama3-8b-instruct"}),". These containers include a runtime that runs on any NVIDIA GPU with sufficient GPU memory, but some model/GPU combinations are optimized. NIM automatically downloads the model from NVIDIA NGC Catalog, leveraging a local filesystem cache if available."]}),"\n",(0,s.jsx)(n.h2,{id:"overview-of-this-deployment-pattern-on-amazon-eks",children:"Overview of this deployment pattern on Amazon EKS"}),"\n",(0,s.jsx)(n.p,{children:"This pattern combines the capabilities of NVIDIA NIM, Amazon Elastic Kubernetes Service (EKS), and various AWS services to deliver a high-performance and cost-optimized model serving infrastructure."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"NVIDIA NIM Container Images: NVIDIA NIM provides a streamlined approach to hosting LLM models like Llama3 within containerized environments. This allows customers to leverage their private models while ensuring seamless integration with existing infrastructure. We will bring detailed setup steps to NIM deployments."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Karpenter for Instance-Level Scaling: Karpenter, an open-source node provisioning project, enables rapid and efficient scaling of Amazon EKS clusters at the instance level. This ensures that the model serving infrastructure can adapt to dynamic workload demands, optimizing resource utilization and cost-effectiveness."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Spot instances: Considering LLMs are stateless, customers can leverage spot instances to significantly reduce costs."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Amazon Elastic File System (EFS): Amazon EFS provides scalable, elastic file storage for use with Amazon EKS. It allows multiple pods to access the same file system concurrently, making it ideal for storing and sharing model artifacts, datasets, and other persistent data across the cluster. EFS automatically grows and shrinks as you add and remove files, eliminating the need for capacity planning and management."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Terraform with EKS Blueprints: To streamline the deployment and management of this solution, we leverage Terraform and EKS Blueprints. This infrastructure-as-code approach enables automated provisioning of the entire stack, ensuring consistency, reproducibility, and efficient resource management."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By combining these components, our proposed solution delivers a powerful and cost-effective model serving infrastructure tailored for large language models. With NVIDIA NIM's seamless integration, Amazon EKS's scalability with Karpenter, customers can achieve high performance while minimizing infrastructure costs."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NIM on EKS Architecture",src:t(5049).A+"",width:"2674",height:"1466"})}),"\n",(0,s.jsx)(n.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before getting started with NVIDIA NIM, ensure you have the following:"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Click to expand the NVIDIA NIM account setup details"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NVIDIA AI Enterprise Account"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Register for an NVIDIA AI Enterprise account. If you don't have one, you can sign up for a trial account using this ",(0,s.jsx)(n.a,{href:"https://enterpriseproductregistration.nvidia.com/?LicType=EVAL&ProductFamily=NVAIEnterprise",children:"link"}),"."]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NGC API Key"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log in to your NVIDIA AI Enterprise account"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the NGC (NVIDIA GPU Cloud) ",(0,s.jsx)(n.a,{href:"https://org.ngc.nvidia.com/",children:"portal"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Generate a personal API key:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to your account settings or navigate directly to: ",(0,s.jsx)(n.a,{href:"https://org.ngc.nvidia.com/setup/personal-keys",children:"https://org.ngc.nvidia.com/setup/personal-keys"})]}),"\n",(0,s.jsx)(n.li,{children:'Click on "Generate Personal Key"'}),"\n",(0,s.jsx)(n.li,{children:'Ensure that at least "NGC Catalog" is selected from the "Services Included" dropdown'}),"\n",(0,s.jsxs)(n.li,{children:["Copy and securely store your API key, the key should have a prefix with ",(0,s.jsx)(n.code,{children:"nvapi-"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NGC API KEY",src:t(8324).A+"",width:"2822",height:"1524"})}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Validate NGC API Key and Test Image Pull"})}),(0,s.jsx)(n.p,{children:"To ensure your API key is valid and working correctly:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set up your NGC API key as an environment variable:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export NGC_API_KEY=<your_api_key_here>\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Authenticate Docker with the NVIDIA Container Registry:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo \"$NGC_API_KEY\" | docker login nvcr.io --username '$oauthtoken' --password-stdin\n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Test pulling an image from NGC:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull nvcr.io/nim/meta/llama3-8b-instruct:latest\n"})}),(0,s.jsx)(n.p,{children:"You do not have to wait for it to complete, just to make sure the API key is valid to pull the image."})]}),"\n",(0,s.jsx)(n.p,{children:"The following are required to run this tutorial"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An active AWS account with admin equivalent permissions"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli",children:"Terraform"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deploy",children:"Deploy"}),"\n",(0,s.jsx)(n.p,{children:"Clone the repository"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Configure the NGC API Key"})}),"\n",(0,s.jsxs)(n.p,{children:["Retrieve your NGC API key from ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/ai-enterprise/deployment-guide-spark-rapids-accelerator/0.1.0/appendix-ngc.html",children:"NVIDIA"})," and set it as an environment variable:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export TF_VAR_ngc_api_key=<replace-with-your-NGC-API-KEY>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Installation"})}),"\n",(0,s.jsxs)(n.p,{children:["Important Note: Ensure that you update the region in the variables.tf file before deploying the blueprint. Additionally, confirm that your local region setting matches the specified region to prevent any discrepancies. For example, set your ",(0,s.jsx)(n.code,{children:'export AWS_DEFAULT_REGION="<REGION>"'})," to the desired region:"]}),"\n",(0,s.jsx)(n.p,{children:"Run the installation script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/nvidia-triton-server\nexport TF_VAR_enable_nvidia_nim=true\nexport TF_VAR_enable_nvidia_triton_server=false\n./install.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"This process will take approximately 20 minutes to complete."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Verify the Installation"})}),"\n",(0,s.jsx)(n.p,{children:"Once the installation finishes, you may find the configure_kubectl command from the output. Run the following to configure EKS cluster access"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Creates k8s config file to authenticate with EKS\naws eks --region us-west-2 update-kubeconfig --name nvidia-triton-server\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check the status of your pods deployed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get po -n nim\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see output similar to the following:"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Click to expand the deployment details"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"NAME            READY   STATUS    RESTARTS   AGE\npod/nim-llm-0   1/1     Running   0          105s\n\nNAME              TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\nservice/nim-llm   ClusterIP   172.20.63.25   <none>        8000/TCP   107s\n\nNAME                       READY   AGE\nstatefulset.apps/nim-llm   1/4     106s\n\nNAME                                          REFERENCE             TARGETS   MINPODS   MAXPODS   REPLICAS   AGE\nhorizontalpodautoscaler.autoscaling/nim-llm   StatefulSet/nim-llm   1/5       1         5         4          107s\n"})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Llama3"})," model deployed is specified in ",(0,s.jsx)(n.code,{children:"ai-ml/nvidia-triton-server/helm-values/nim-llm.yaml"})," with below config. Please visit ",(0,s.jsx)(n.a,{href:"https://build.nvidia.com/explore/discover",children:"this page"})," to explore more. You may simply update this image configuration if you want to change to deploy another model."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"image:\n  repository: nvcr.io/nim/meta/llama3-8b-instruct\n  tag: latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"The Llama3 model is deployed with a StatefulSet in nim-llm namespace. As it is running, Karpenter provisioned a GPU\nCheck the Karpenter provisioned node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get node -l type=karpenter -L node.kubernetes.io/instance-type\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"NAME                                         STATUS   ROLES    AGE     VERSION               INSTANCE-TYPE\nip-100-64-77-39.us-west-2.compute.internal   Ready    <none>   4m46s   v1.30.0-eks-036c24b   g5.2xlarge\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"4. Verify the deployed model"})}),"\n",(0,s.jsxs)(n.p,{children:["Once all pods in ",(0,s.jsx)(n.code,{children:"nim"})," namespace is ready with ",(0,s.jsx)(n.code,{children:"1/1"})," status, use below command to verify it's ready to serve the traffic. To verify, expose the model serving service with port-forward using kubectl."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward -n nim svc/nim-llm 8000\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then you can invoke the deployed model with a simple HTTP request with curl command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  "http://localhost:8000/v1/completions" \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n      "model": "meta/llama3-8b-instruct",\n      "prompt": "Once upon a time",\n      "max_tokens": 64\n      }\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"you will see similar output like the following"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "cmpl-63a0b66aeda1440c8b6ca1ce3583b173",\n  "object": "text_completion",\n  "created": 1719742336,\n  "model": "meta/llama3-8b-instruct",\n  "choices": [\n    {\n      "index": 0,\n      "text": ", there was a young man named Jack who lived in a small village at the foot of a vast and ancient forest. Jack was a curious and adventurous soul, always eager to explore the world beyond his village. One day, he decided to venture into the forest, hoping to discover its secrets.\\nAs he wandered deeper into",\n      "logprobs": null,\n      "finish_reason": "length",\n      "stop_reason": null\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 5,\n    "total_tokens": 69,\n    "completion_tokens": 64\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"testing-the-llama3-model-deployed-with-nim",children:"Testing the Llama3 model deployed with NIM"}),"\n",(0,s.jsx)(n.p,{children:"It's time to test the Llama3 just deployed. First setup a simple environment for the testing."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd gen-ai/inference/nvidia-nim/nim-client\npython3 -m venv .venv\nsource .venv/bin/activate\npip install openai\n"})}),"\n",(0,s.jsx)(n.p,{children:"We have prepared some prompts in prompts.txt , it contains 20 prompts. You can run following commands with the prompts to verify the generated outputs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 client.py --input-prompts prompts.txt --results-file results.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will see an output something like below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Loading inputs from `prompts.txt`...\nModel meta/llama3-8b-instruct - Request 14: 4.68s (4678.46ms)\nModel meta/llama3-8b-instruct - Request 10: 6.43s (6434.32ms)\nModel meta/llama3-8b-instruct - Request 3: 7.82s (7824.33ms)\nModel meta/llama3-8b-instruct - Request 1: 8.54s (8540.69ms)\nModel meta/llama3-8b-instruct - Request 5: 8.81s (8807.52ms)\nModel meta/llama3-8b-instruct - Request 12: 8.95s (8945.85ms)\nModel meta/llama3-8b-instruct - Request 18: 9.77s (9774.75ms)\nModel meta/llama3-8b-instruct - Request 16: 9.99s (9994.51ms)\nModel meta/llama3-8b-instruct - Request 6: 10.26s (10263.60ms)\nModel meta/llama3-8b-instruct - Request 0: 10.27s (10274.35ms)\nModel meta/llama3-8b-instruct - Request 4: 10.65s (10654.39ms)\nModel meta/llama3-8b-instruct - Request 17: 10.75s (10746.08ms)\nModel meta/llama3-8b-instruct - Request 11: 10.86s (10859.91ms)\nModel meta/llama3-8b-instruct - Request 15: 10.86s (10857.15ms)\nModel meta/llama3-8b-instruct - Request 8: 11.07s (11068.78ms)\nModel meta/llama3-8b-instruct - Request 2: 12.11s (12105.07ms)\nModel meta/llama3-8b-instruct - Request 19: 12.64s (12636.42ms)\nModel meta/llama3-8b-instruct - Request 9: 13.37s (13370.75ms)\nModel meta/llama3-8b-instruct - Request 13: 13.57s (13571.28ms)\nModel meta/llama3-8b-instruct - Request 7: 14.90s (14901.51ms)\nStoring results into `results.txt`...\nAccumulated time for all requests: 206.31 seconds (206309.73 milliseconds)\nPASS: NVIDIA NIM example\nActual execution time used with concurrency 20 is: 14.92 seconds (14.92 milliseconds)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Output for ",(0,s.jsx)(n.code,{children:"results.txt"})," should look like the following"]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Click to expand the partial output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"The key differences between traditional machine learning models and very large language models (vLLM) are:\n\n1. **Scale**: vLLMs are massive, with billions of parameters, whereas traditional models typically have millions.\n2. **Training data**: vLLMs are trained on vast amounts of text data, often sourced from the internet, whereas traditional models are trained on smaller, curated datasets.\n3. **Architecture**: vLLMs often use transformer architectures, which are designed for sequential data like text, whereas traditional models may use feedforward networks or recurrent neural networks.\n4. **Training objectives**: vLLMs are often trained using masked language modeling or next sentence prediction tasks, whereas traditional models may use classification, regression, or clustering objectives.\n5. **Evaluation metrics**: vLLMs are typically evaluated using metrics like perplexity, accuracy, or fluency, whereas traditional models may use metrics like accuracy, precision, or recall.\n6. **Interpretability**: vLLMs are often less interpretable due to their massive size and complex architecture, whereas traditional models may be more interpretable due to their smaller size and simpler architecture.\n\nThese differences enable vLLMs to excel in tasks like language translation, text generation, and conversational AI, whereas traditional models are better suited for tasks like image classification or regression.\n\n=========\n\nTensorRT (Triton Runtime) optimizes LLM (Large Language Model) inference on NVIDIA hardware by:\n\n1. **Model Pruning**: Removing unnecessary weights and connections to reduce model size and computational requirements.\n2. **Quantization**: Converting floating-point models to lower-precision integer formats (e.g., INT8) to reduce memory bandwidth and improve performance.\n3. **Kernel Fusion**: Combining multiple kernel launches into a single launch to reduce overhead and improve parallelism.\n4. **Optimized Tensor Cores**: Utilizing NVIDIA's Tensor Cores for matrix multiplication, which provides significant performance boosts.\n5. **Batching**: Processing multiple input batches concurrently to improve throughput.\n6. **Mixed Precision**: Using a combination of floating-point and integer precision to balance accuracy and performance.\n7. **Graph Optimization**: Reordering and reorganizing the computation graph to minimize memory access and optimize data transfer.\n\nBy applying these optimizations, TensorRT can significantly accelerate LLM inference on NVIDIA hardware, achieving faster inference times and improved performance.\n\n=========\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"performance-testing-with-nvidia-genai-perf-tool",children:"Performance Testing with NVIDIA GenAI-Perf Tool"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/client/src/c%2B%2B/perf_analyzer/genai-perf/README.html",children:"GenAI-Perf"})," is a command line tool for measuring the throughput and latency of generative AI models as served through an inference server."]}),"\n",(0,s.jsxs)(n.p,{children:["GenAI-Perf can be used as standard tool to benchmark with other models deployed with inference server. But this tool requires a GPU. To make it easier, we provide you a pre-configured manifest ",(0,s.jsx)(n.code,{children:"genaiperf-deploy.yaml"})," to run the tool."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd gen-ai/inference/nvidia-nim\nkubectl apply -f genaiperf-deploy.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once the pod is ready with running status ",(0,s.jsx)(n.code,{children:"1/1"}),", can execute into the pod."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export POD_NAME=$(kubectl get po -l app=tritonserver -ojsonpath='{.items[0].metadata.name}')\nkubectl exec -it $POD_NAME -- bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the testing to the deployed NIM Llama3 model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"genai-perf \\\n  -m meta/llama3-8b-instruct \\\n  --service-kind openai \\\n  --endpoint v1/completions \\\n  --endpoint-type completions \\\n  --num-prompts 100 \\\n  --random-seed 123 \\\n  --synthetic-input-tokens-mean 200 \\\n  --synthetic-input-tokens-stddev 0 \\\n  --output-tokens-mean 100 \\\n  --output-tokens-stddev 0 \\\n  --tokenizer hf-internal-testing/llama-tokenizer \\\n  --concurrency 10 \\\n  --measurement-interval 4000 \\\n  --profile-export-file my_profile_export.json \\\n  --url nim-llm.nim:8000\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see similar output like the following"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"2024-07-11 03:32 [INFO] genai_perf.parser:166 - Model name 'meta/llama3-8b-instruct' cannot be used to create artifact directory. Instead, 'meta_llama3-8b-instruct' will be used.\n2024-07-11 03:32 [INFO] genai_perf.wrapper:137 - Running Perf Analyzer : 'perf_analyzer -m meta/llama3-8b-instruct --async --input-data artifacts/meta_llama3-8b-instruct-openai-completions-concurrency10/llm_inputs.json --endpoint v1/completions --service-kind openai -u nim-llm.nim:8000 --measurement-interval 4000 --stability-percentage 999 --profile-export-file artifacts/meta_llama3-8b-instruct-openai-completions-concurrency10/my_profile_export.json -i http --concurrency-range 10'\n                                                      LLM Metrics\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503            Statistic \u2503           avg \u2503           min \u2503           max \u2503           p99 \u2503           p90 \u2503           p75 \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 Request latency (ns) \u2502 3,934,624,446 \u2502 3,897,758,114 \u2502 3,936,987,882 \u2502 3,936,860,185 \u2502 3,936,429,317 \u2502 3,936,333,682 \u2502\n\u2502     Num output token \u2502           112 \u2502           105 \u2502           119 \u2502           119 \u2502           117 \u2502           115 \u2502\n\u2502      Num input token \u2502           200 \u2502           200 \u2502           200 \u2502           200 \u2502           200 \u2502           200 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nOutput token throughput (per sec): 284.64\nRequest throughput (per sec): 2.54\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should be able to see the ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/client/src/c%2B%2B/perf_analyzer/genai-perf/README.html#metrics",children:"metrics"})," that genai-perf collects, including Request latency, Out token throughput, Request throughput."]}),"\n",(0,s.jsxs)(n.p,{children:["To understand the command line options, please refer to ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/client/src/c%2B%2B/perf_analyzer/genai-perf/README.html#command-line-options",children:"this documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"observability",children:"Observability"}),"\n",(0,s.jsx)(n.p,{children:"As part of this blueprint, we have also deployed the Kube Prometheus stack, which provides Prometheus server and Grafana deployments for monitoring and observability."}),"\n",(0,s.jsx)(n.p,{children:"First, let's verify the services deployed by the Kube Prometheus stack:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get svc -n monitoring\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see output similar to this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"NAME                                             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)             AGE\nkube-prometheus-stack-grafana                    ClusterIP   172.20.225.77    <none>        80/TCP              10m\nkube-prometheus-stack-kube-state-metrics         ClusterIP   172.20.237.248   <none>        8080/TCP            10m\nkube-prometheus-stack-operator                   ClusterIP   172.20.118.163   <none>        443/TCP             10m\nkube-prometheus-stack-prometheus                 ClusterIP   172.20.132.214   <none>        9090/TCP,8080/TCP   10m\nkube-prometheus-stack-prometheus-node-exporter   ClusterIP   172.20.213.178   <none>        9100/TCP            10m\nprometheus-adapter                               ClusterIP   172.20.171.163   <none>        443/TCP             10m\nprometheus-operated                              ClusterIP   None             <none>        9090/TCP            10m\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The NVIDIA NIM LLM service expose metrics via ",(0,s.jsx)(n.code,{children:"/metrics"})," endpoint from ",(0,s.jsx)(n.code,{children:"nim-llm"})," service at port ",(0,s.jsx)(n.code,{children:"8000"}),". Verify it by running"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get svc -n nim\nkubectl port-forward -n nim svc/nim-llm 8000\n\ncurl localhost:8000/metrics # run this in another terminal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"grafana-dashboard",children:"Grafana Dashboard"}),"\n",(0,s.jsx)(n.p,{children:"We provides a pre-configured Grafana dashboard to better visualize NIM status. In the Grafana dashboard below, it contains several important metrics:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Time to First Token (TTFT)"}),": The latency between the initial inference request to the model and the return of the first token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inter-Token Latency (ITL)"}),": The latency between each token after the first."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Throughput"}),": The total number of tokens generated per second by the NIM."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can find more metrics description from this ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/nim/large-language-models/latest/observability.html",children:"document"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NVIDIA LLM Server",src:t(7793).A+"",width:"4444",height:"2476"})}),"\n",(0,s.jsx)(n.p,{children:"To view the Grafana dashboard to monitor these metrics, follow the steps below:"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Click to expand details"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Retrieve the Grafana password."})}),(0,s.jsx)(n.p,{children:"The password is saved in the AWS Secret Manager. Below Terraform command will show you the secret name."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"terraform output grafana_secret_name\n"})}),(0,s.jsx)(n.p,{children:"Then use the output secret name to run below command,"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'aws secretsmanager get-secret-value --secret-id <grafana_secret_name_output> --region $AWS_REGION --query "SecretString" --output text\n'})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Expose the Grafana Service"})}),(0,s.jsx)(n.p,{children:"Use port-forward to expose the Grafana service."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/kube-prometheus-stack-grafana 3000:80 -n monitoring\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Login to Grafana:"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open your web browser and navigate to ",(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Login with the username ",(0,s.jsx)(n.code,{children:"admin"})," and the password retrieved from AWS Secrets Manager."]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"4. Open the NIM Monitoring Dashboard:"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Once logged in, click "Dashboards" on the left sidebar and search "nim"'}),"\n",(0,s.jsxs)(n.li,{children:["You can find the Dashboard ",(0,s.jsx)(n.code,{children:"NVIDIA NIM Monitoring"})," from the list"]}),"\n",(0,s.jsx)(n.li,{children:"Click and entering to the dashboard."}),"\n"]}),(0,s.jsx)(n.p,{children:"You should now see the metrics displayed on the Grafana dashboard, allowing you to monitor the performance your NVIDIA NIM service deployment."})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["As of writing this guide, NVIDIA also provides an example Grafana dashboard. You can check it from ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/nim/large-language-models/latest/observability.html#grafana",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,s.jsx)(n.p,{children:"To remove all resources created by this deployment, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./cleanup.sh\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2450:(e,n,t)=>{t.d(n,{A:()=>u});var s=t(6540),i=t(5556),a=t.n(i),r=t(4164);const o="collapsibleContent_q3kw",l="header_QCEw",c="icon_PckA",d="content_qLC1",h="expanded_iGsi";var m=t(4848);function p(e){let{children:n,header:t}=e;const[i,a]=(0,s.useState)(!1);return(0,m.jsxs)("div",{className:o,children:[(0,m.jsxs)("div",{className:(0,r.A)(l,{[h]:i}),onClick:()=>{a(!i)},children:[t,(0,m.jsx)("span",{className:(0,r.A)(c,{[h]:i}),children:i?"\ud83d\udc47":"\ud83d\udc48"})]}),i&&(0,m.jsx)("div",{className:d,children:n})]})}p.propTypes={children:a().node.isRequired,header:a().node.isRequired};const u=p},7793:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nim-dashboard-0d6158f5a65d2b3f55396e887f7aa666.png"},8324:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nim-ngc-api-key-8f10f8d047f3721dbeddd112c6b69a81.png"},5049:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nim-on-eks-arch-c9a91bdfa99f2f904c3fe9c6e2547bcd.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);