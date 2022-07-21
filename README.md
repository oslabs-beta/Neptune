# Introducing Neptune
<p>
<img src="https://github.com/MirandaJaramillo/githubImages/blob/main/images/centered_neptune.png" title="neptune" alt="neptune" />&nbsp;
<p> 
<p align="center">
   <strong>Light-weight, simple, and straightforward learning tool for your Kubernetes cluster</strong>

   Neptune is an approachable learning tool, light-weight in nature with a few monitoring features. PromQL has a steep learning curve and not everyone needs to learn how to use these queries. We have pre-selected a few relevant queries that display basic data about a simple Kubernetes cluster. This is to reduce the amount of noise when engaging with Prometheus. Neptune is meant to be an easy, visual way to understand a K8s cluster.
<a href="https://exploreneptune.io">Learn more about Neptune here.</a>

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

<p align="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/kubernetes/kubernetes-plain-wordmark.svg" title="Kubernetes" alt="Kubernetes" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/prometheus/prometheus-original-wordmark.svg" title="Prometheus" alt="Prometheus" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/materialui/materialui-original.svg" title="Material UI" alt="Material UI" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original-wordmark.svg" title="Webpack"  alt="Webpack" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
<img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" title="Postman"  alt="Postman" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original-wordmark.svg" title="Docker" **alt="Git" width="40" height="40"/>&nbsp;

</p>




## The Core Team
<table align="center"><tbody><tr>
  <td align="center" width="150">
    <img src="https://github.com/MirandaJaramillo/githubImages/blob/main/images/SwanHtet.png" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Swan Htet</strong>
    <br/>
    <a href="https://github.com/swanhtethtetswan">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/swan-htet-htet-swan/">LinkedIn</a>
  </td>
  <td align="center" width="150">
    <img src="https://github.com/MirandaJaramillo/githubImages/blob/main/images/Miranda-Headshot2022%20circle.png" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Miranda Jaramillo</strong>
    <br/>
    <a href="https://github.com/mirandajaramillo">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/miranda-jaramillo/">LinkedIn</a>
  </td>
  <td align="center" width="150">
    <img src="https://github.com/MirandaJaramillo/githubImages/blob/main/images/LawrenceYeh.png" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Lawrence Yeh</strong>
    <br/>
    <a href="https://github.com/lawyeh">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/lawyeh/">LinkedIn</a>
  </td>
  <td align="center" width="150">
    <img src="https://github.com/MirandaJaramillo/githubImages/blob/main/images/JinYoo.png" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Jin Yoo</strong>
    <br/>
    <a href="https://github.com/iyoojin">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/iyoojin/">LinkedIn</a>
  </td>
</tr></tbody></table>
