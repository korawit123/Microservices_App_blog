
# Microservices App blog

This project is a App blog microservices backend practice for Learing and understanding of the concept and implementation by using Next.js, TailwindCSS, express, javascript, Typescript, docker and kubernetes


## Requirement

Install Node.js > 20 v\
Install docker and kubernetes
## Installation

Install  Microservices App blog with npm

```bash
    cd (eachServiceName)
    npm install //Every service 
```
then build docker image

```bash
    docker build -t (tageImage) . //Every service 
    docker push (tageImage)
```
start kubernetes

```bash
    cd k8s
    kubectl apply -f deployment posts-depl.yaml
    kubectl apply -f deployment event-bus-depl.yaml
    kubectl apply -f service posts-srv.yaml
```

    
## Tech Stack

**Client:** Next.j, TailwindCSS

**Server:** Node, Express, javascript, Typescript

**Deployment:** docker and kubernetes


## Instructor
**Stephen Grider**\
Microservices with Node JS and React\
*Engineering Architect*\
*Udemy Instructor Partner*
