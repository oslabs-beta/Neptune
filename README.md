# Introducing Neptune

Lightweight, simple, and powerful visualization dashboard for your Kubernetes cluster

Kubernetes is on an upward trajectory with developers because of its many benefits that it offers to the software development lifecycle.
Kubernetes has been on an upward trajectory with developers and for good reason.
Kubernetes is an orchestration tool that orchestrates containerized microservice applications to deploy and manage the applications and improve reliability and efficiency. 

Kubernetes can appear to be an intimidating topic when a new user is diving into learning about containerization and managing clusters. Neptune is an educational application focused on eliminating the noise so that the user can familiarize themselves in a containerized environment. Neptune is a light-weight monitoring tool that presents relevant metrics. I need to add ten more words to this paragraph. The point of our application is to monitor cluster health and provide a high level overview of what’s happening in a cluster.

## Focus on what matters, with built in alerts and health monitoring.

Render the metrics of your nodes, pods, and namespaces all in one easy to visualize UI.

![neptune1](https://user-images.githubusercontent.com/96557317/180123940-4a9f50bc-a63e-45fd-904a-d3b346686138.gif)

## Metrics that matter

Rather than being overloaded with countless metrics, focus on the ones that matter. We highlighted prominent data points related to CPU, Memory, and Network Usage

![neptune2](https://user-images.githubusercontent.com/96557317/180123960-78356a62-17bd-495b-bac9-179a34449796.gif)

## Alerts, Event Logs, and Cluster Health

Sort through your firing alerts by severity to stay on top of your alerts
Quick and simplified overview of your cluster health and performance

![neptune3](https://user-images.githubusercontent.com/96557317/180123967-93d53f8c-aed1-4e67-8d96-963554b87f63.gif)

# Getting Started

Prerequisites
There are some prerequisites before you start with Neptune, so make sure you have Docker and Minikube setup. We highly recommend that you follow the order below.

Install Docker Desktop - the fastest way to containerize applications
Install minikube - minikube quickly sets up a local Kubernetes cluster on macOS, Linux, and Windows
Install Helm - package manager for Kubernetes
Deploy Prometheus - software application that scrapes clusters and returns metrics

Note: Make sure your minikube cluster is actively running!

1. Clone this repo and then change directory into the root folder. Then run the command below:
   git clone git@github.com:oslabs-beta/Neptune.git

2. Install dependencies
   Run these commands from within the root directory:

npm install

npm run build

npm run start

3. Port-forward Prometheus to 9090
   To port-forward Prometheus, run the following command. Remember that your minikube cluster needs to be actively running!

kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 --namespace=default 9090:9090

4. Explore Neptune!
   Go to http://localhost:3000/ and start exploring your Kubernetes cluster!

## 🛠 &nbsp; Built With :

<p>
<img src="https://github.com/devicons/devicon/blob/master/icons/kubernetes/kubernetes-plain-wordmark.svg" title="Kubernetes" alt="Kubernetes" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/spring/spring-original-wordmark.svg" title="Spring" alt="Spring" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/materialui/materialui-original.svg" title="Material UI" alt="Material UI" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/flutter/flutter-original.svg" title="Flutter" alt="Flutter" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/firebase/firebase-plain-wordmark.svg" title="Firebase" alt="Firebase" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/gatsby/gatsby-original.svg" title="Gatsby"  alt="Gatsby" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL"  alt="MySQL" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" title="AWS" alt="AWS" width="40" height="40"/>&nbsp;
<img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" title="Postman"  alt="Postman" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original-wordmark.svg" title="Docker" **alt="Git" width="40" height="40"/>&nbsp;


</p>

Docker </br>
Prometheus</br>
Kubernetes (w/ client-node)</br>
Node.js</br>
Express</br>
React</br>
React Router</br>
Chart.js</br>
Webpack</br>
Material UI</br>

## The Core Team

Swan Htet | <a href="https://github.com/swanhtethtetswan">Github</a> | <a href="https://www.linkedin.com/in/swan-htet-htet-swan/">LinkedIn</a> </br>
Miranda Jaramillo | <a href="https://github.com/mirandajaramillo">Github</a> | <a href="https://www.linkedin.com/in/miranda-jaramillo/">LinkedIn</a> </br>
Lawrence Yeh | <a href="https://github.com/lawyeh">Github</a> | <a href="https://www.linkedin.com/in/lawyeh/">LinkedIn</a> </br>
Jin Yoo | <a href="https://github.com/iyoojin">Github</a> | <a href="https://www.linkedin.com/in/iyoojin/">LinkedIn</a> </br>
