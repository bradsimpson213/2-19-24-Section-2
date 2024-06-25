<style>
    .present {
        text-align: left;
        
    }
</style>

---

###### tags: `Week 19` `W19D2`

---

# Docker Container CLI
## Week 19 Day 2

---


## Today's Docker Topics

- Container terminal commands
- Networks
- Bind Mounts & Volumes- 
- Dockerfiles / Images


---

## What is a Container?

A container runs an application. It is a unit of software that contains the source code, linux distro, dependencies, and other tools the application needs to run.

When we build a container, we are starting up an application image.

---

### `docker container run` ([Official documentation](https://docs.docker.com/engine/reference/commandline/container_run/))
Usage:
```shell
docker container run [OPTIONS] image-name [COMMAND] [ARG...]
```
- You always need to specify the image—__every container is based on an image__.
- The optional "OPTIONS" are specified with a flag.
    - Any options you include will come before the image name
- Each image has a default command—that will be replaced if you specify a new command (after the image-name)


---

#### Commonly used flags for `docker container run`:


| flag               | purpose                                                | example usage   |
| ------------------ | ------------------------------------------------------ | --------------- |
| `--name`           | specify a name for the container                       | `--name hello`  |
| `-p` / `--publish` | publish a port to the "outside world" on your localhost (externalport:internalport) | `-p 8080:80`    |
| `-d`               | detached session (runs in background)                  | `-d`            |
| `--rm`             | automatically remove container once stopped            | `--rm`          |
| `-it`              | use an interactive session (e.g. bash)                 | `-it` / `-i -t` |


---

### Pop quiz

1. Let's run a container based on the *nginx* image, in detached mode. We want to publish the contents of that container's internal port 80, to my localhost at port 8080.

2. Let's run a container based on the *alpine* image and name it "test". We want to run it with an interactive terminal, and use the command `sh`.

3. Let's run a container based on the *ubuntu* image and name it "greet_me". We want the container to be removed automatically once it is stopped. Let's have it use the command `echo hello world`.

---

### Pop quiz (answer key)
1.
```bash
docker container run -p 8080:80 -d nginx
```
2.
```bash
docker container run -it --name test alpine sh
```
3.
```bash
docker container run --name greet_me --rm ubuntu echo hello world
```

---



### `docker container ls` ([Official documentation](https://docs.docker.com/engine/reference/commandline/container_ls/))
Purpose: list containers (can be used interchangeably with `docker ps`)
- `-a` flag includes stopped containers

Usage:
```bash
docker container ls [OPTIONS]
```

---


### `docker container stop` ([Official documentation](https://docs.docker.com/engine/reference/commandline/container_stop/))
Purpose: stop a container (or containers) that is currently running.

Usage:
```bash
docker container stop [OPTIONS] CONTAINER [CONTAINER...]
```

---


### `docker container start` ([Official documentation](https://docs.docker.com/engine/reference/commandline/container_start/))
Purpose: start a stopped container (or containers)
- this will not create a new container, the container must already exist


Usage:
```bash
 docker container start [OPTIONS] CONTAINER [CONTAINER...]
```

---

### `docker container rm` ([Official documentation](https://docs.docker.com/engine/reference/commandline/container_rm/))
Purpose: remove a container
- by default you can only remove stopped containers
- `-f` flag forces removal even if container is running

Usage:
```
 docker container rm [OPTIONS] CONTAINER [CONTAINER...]
```

---

### `docker container prune` ([Official documentation](https://docs.docker.com/engine/reference/commandline/container_prune/))
Purpose: remove all stopped containers

Usage:
```
 docker container prune [OPTIONS]
```


---

### `docker container exec` ([Official documentation](https://docs.docker.com/engine/reference/commandline/exec/))
Purpose: execute a command within a running container
- often useful for opening interactive shell (uses same `-it` flag as container run)
```
docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

---

## 10 min break!

---

### Docker networks
Networks allow containers to communicate with each other, whether or not they are exposing ports.
[Official documentation](https://docs.docker.com/network/)


---

### Docker networks
The Docker engine comes with 3 network drivers:
- `bridge` - allows containers connected to the same bridge network to communicate, while providing isolation from containers which are not connected to that bridge network
- `host` - uses host machine's networking stack and namespace
- `none` - disables all networking for a container

---

### Networking with Docker
By default, containers are connected to the "bridge" driver network. While containers can communicate via IP address over the bridge network, it does not enable DNS resolution.

To be able to communicate via domain name over a network we must create a custom network.

---

### Creating custom networks ([Official documentation](https://docs.docker.com/engine/reference/commandline/network_create/))

Creating a custom network will allow the containers on that network to interact with each other.
```bash
docker network create [OPTIONS] network-name
```

```bash
docker network ls
```


---

### Networking demo [1/2]
Let's create a network, and attach containers to it so we can see how networked containers communicate. 

For comparison, we'll use two containers that are on the default network.
```bash
# create a network based on the bridge driver, called "test-network"
docker network create --driver bridge test-network
# create two images on that network
docker container run -d --name c1 --network test-network nginx:alpine
docker container run -d --name c2 --network test-network nginx:alpine

# create two more images, without specifying a network
docker container run -d --name c3 nginx:alpine
docker container run -d --name c4 nginx:alpine
```

---

### Networking demo [2/2]

```bash
# access the shell on one of our two networked containers
docker container exec -it c1 ash
# ping a container that is not on the network
ping -c 2 c3
# ping a container that is on the network
ping -c 2 c2


docker container exec -it c3 ash
ping -c 2 c1
ping -c 2 c4
```


---

## Another break!

---

### Docker volumes/bind mounts

Using bind mounts and volumes allows data to persist even after a container is gone.

Bind mounts directly mount the contents of a folder on your filesystem into your container.

Volumes are managed by Docker—so you wouldn't directly access the files, but can be accessed and modified from within a container.

---

### Options for creating volumes/bind mounts

There are two different types of syntax you can use with `docker container run` to establish volumes and bind mounts. Both flags can create either volumes or bind mounts.
- `-v` and `--mount` flags have the same purpose.
- `--mount` is typically preferred as it is considered to be clearer.

```bash
docker container run -v ...
docker container run --mount ...
```

---

### `--mount` syntax

Pass in a series of `<key>=<value>` pairs in any order, separated by a comma.

Type must be "bind" for bind mounts, or "volume" for volumes


---

### `--mount` syntax
#### for bind mounts

```
--mount type=bind,source=/absolute/path,target=/absolute/path/in/container
```
#### for volumes

```
--mount type=volume,source=name_of_volume,target=/absolute/path/in/container
```


---


### Bind mounts
[Official documentation](https://docs.docker.com/storage/bind-mounts/)

- Bind mounts connect a folder in your file system to a folder on your container
- Convenience in simple cases—any changes made in one place will change what's present in the other


---

### Demo: Serve a Website [1/2]
First, create a folder called __app__ in your current directory, and make an empty __index.html__ file inside the folder. 
```bash=
# run an nginx:alpine-based container, in detached mode
# mount the /app folder into the container at the path where nginx serves
# its files from (/usr/share/nginx/html)
# and expose port 80 to view the contents
docker container run -d \
--mount type=bind,source="$(pwd)/app",target=/usr/share/nginx/html \
-p 8080:80 nginx:alpine
```

---

### Demo: Serve a Website [2/2]
Once your container is running, visit localhost:8080—you should see a blank page. Add some content to your html page, then save and refresh localhost:8080. Now you can see the new content you added, because the contents of your folder stays in sync with the contents of the folder inside your container.


---

### Volumes
[Official documentation](https://docs.docker.com/storage/volumes/)
Volumes are managed from within Docker—don't depend on your file structure.

You wouldn't modify the contents directly (only from inside a container), but you can use it to spin up new containers with same contents.

Instead of providing a path to the folder (like you would with a bind mount) you can provide the name of the volume.

Think of a volume like a flash drive, you can connect it to you computer, then take that same drive and connect it to another

---

### Demo: Persist data from a postgres instance that runs in a container

```bash=
# pull the postgres image so we can inspect it
docker pull postgres
# inspect the image to find out what the path to the volume should be
# and what port we want to expose
docker image inspect postgres
```

---

### Demo: Persist data from a postgres instance that runs in a container

```bash=
# run the container with a volume named "postgres-data"
# that corresponds to the path where a 
# postgres container stores its data
# (/var/lib/postgresql/data)
docker container run -p 5431:5432 \
-e POSTGRES_PASSWORD=password \
--name postgres5431 -d \
--mount type=volume,source=postgres-data,target=/var/lib/postgresql/data postgres
# now use the psql command line tool to connect
# to the postgres instance running in our container
psql -p 5431 -h localhost -U postgres
```


### Docker images
A Docker image is a read-only, executable file that is the template for creating and running a container.

Images are built from Dockerfiles, which contain a set of instructions for building an image. 

When an image is built from a Dockerfile, each instruction creates a layer in the resulting image. Each layer is an intermediate image built on top of the previous layer.

All images are built from Dockerfiles. We can use preexisiting Dockerfiles & images or build or own image using a custom Dockerfile!


---

### Docker image commands
| Command                               | Description                                        |
| ---------------------------------     | -----------------------------------                |
| `docker image ls`                     | list all images currently on machine               |
| `docker image history <IMAGE NAME>`   | show the layers in an image                        |
| `docker image inspect <IMAGE NAME>`   | show all of the metadata associated with an image  |
| `docker image rm <IMAGE NAME>`        | remove a cached image from your system             |
| `docker image push <IMAGE NAME>`      | push an image (that is already built) to dockerhub |
| `docker image build [OPTIONS] <PATH>` | build an image from a Dockerfile based on the path |


---

### Composing Dockerfiles
Each line of execution in a Dockerfile will have its own image layer.

Each line contains an instruction, which must begin with a keyword.

---

### Dockerfile Keywords: `FROM` ([Official documentation](https://docs.docker.com/engine/reference/builder/#from))

All Dockerfiles begin with a `FROM` statement.

In this statement you specify the parent image to start from.

For example, if I wanted to run a Flask server, I might start with a parent image that is the official Python image.

Usage:
```dockerfile=
FROM <IMAGE NAME>
```

---

### Dockerfile Keywords: `WORKDIR` ([Official documentation](https://docs.docker.com/engine/reference/builder/#workdir))

`WORKDIR` changes the working directory in the image, sort of like using `cd` at the command line. That means any subsequent commands will take place in that directory.

Additionally, `WORKDIR` will create a directory if it does not exist yet.

Usage:
```dockerfile=
WORKDIR <DIRECTORY PATH>
```

---

### Dockerfile Keywords: `COPY` ([Official documentation](https://docs.docker.com/engine/reference/builder/#copy))

`COPY` moves a file, files, or directory from your host machine to a location on the image.


Usage:
```dockerfile=
COPY <LOCAL DIR PATH> <IMAGE DIR PATH>
```

---

### Dockerfile Keywords: `ENV` ([Official documentation](https://docs.docker.com/engine/reference/builder/#env))

`ENV` lets you set environment variables in the image.


Usage:
```dockerfile=
ENV <ENV VARIABLE>=<VALUE>
```

---

### Dockerfile Keywords: `EXPOSE` ([Official documentation](https://docs.docker.com/engine/reference/builder/#expose))

`EXPOSE` indicates the port that should be exposed. 

Note that this does not actually publish the port—when you run a container based on the image you would still have to use the `-p external_port:internal_port` flag. The command just sets the intended port in the image's metadata. 

Usage:
```dockerfile=
EXPOSE <PORT NUMBER>
```

---

### A note about EXPOSE vs. publish

`EXPOSE` tells Docker that the image will listen on the specified port within a container at runtime.

This allows the container to easily communicate with others on the same network via this exposed port.


Publishing a port (with the `-p` flag) maps the container's `EXPOSE`'d port to a port on the Docker host (your local machine) via *port forwarding*.

---

### Dockerfile Keywords: `RUN` ([Official documentation](https://docs.docker.com/engine/reference/builder/#run))

`RUN` executes a command on the image.

Usage:
```dockerfile=
RUN <COMMAND>
```

---

### Dockerfile Keywords: `CMD` ([Official documentation](https://docs.docker.com/engine/reference/builder/#cmd))


`CMD` specifies the default process that a container based on the image should execute. An image can only have one `CMD`—if more than one is specified, only the latter will be used.

YOU MUST USE DOUBLE QUOTES IN DOCKERFILES!!!

If you include a command after the image name when running a container with `docker container run ...`, that will replace the CMD in the Dockerfile.

Usage:
```dockerfile=
# exec form (preferred)
CMD ["individual", "strings", "for", "command"]

# params for ENTRYPOINT (if specified)
CMD ["param1", "param2"]

# shell form (will execute in shell)
CMD command param1 param2
```

---


### Layers are Cached on Builds!
When a dockerfile is built the first time it must run each layer of commands.  If there is an error or you made changes, and docker is "rebuilding" an image, it will cache the layers that were successful and unchanged! This does mean we want to consider this process when writing our Dockerfiles


<img style="height: 400px;" src="https://media.giphy.com/media/kwafZfFxw8WnC/giphy.gif" />

---


### Dockerfile demo
Let's use a Dockerfile to create an image for a simple react app, and then push it to Docker hub.

First we'll need a Dockerfile, so create a file named "Dockerfile" inside our demo directory


---


### Dockerfile demo

Let's start with a base image, and let's include a specific version tag. We want to run an express server, so let's use an official Node image. 


---

### Dockerfile demo

Let's add an `EXPOSE` to indicate the port where we will be serving content.

```dockerfile=
FROM node:15-alpine3.10
# add an EXPOSE
```

---

### Dockerfile demo

Next, let's create a folder called "app" and set it as our working directory so we can build our server.

```dockerfile=
FROM node:15-alpine3.10
EXPOSE 3000
# add a WORKDIR
```


---

### Dockerfile demo


Now we can copy our package.json and package-lock.json to /app—just the files we need to do install dependencies
```dockerfile=
FROM node:15-alpine3.10
EXPOSE 3000
WORKDIR /app
# copy overpackage installation files
```


---


### Dockerfile demo

And now we can install those dependencies.

```dockerfile=
FROM node:15-alpine3.10
EXPOSE 3000
WORKDIR /app
COPY package*.json ./
# install dependencies
```


---

### Dockerfile demo

Then we can copy over the rest of the application files.

```dockerfile=
FROM node:15-alpine3.10
EXPOSE 3000
WORKDIR /app
COPY package*.json ./
RUN npm install
# copy files
```

---

### Dockerfile demo

And provide a command to start the application


```dockerfile=
FROM node:15-alpine3.10
EXPOSE 3000
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# run app
```

---

### Dockerfile demo
```dockerfile=
FROM node:15-alpine3.10
EXPOSE 3000
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

---

### .dockerignore
Next, we'll need to create a .dockerignore file.
- Why do we ignore node_modules when we're going to npm install anyway?
    - We want the build process to take care of all setup for us, so it should create a new node_modules folder
```dockerfile=
node_modules
```

---

## Building and pushing the image
```bash=
# log in to dockerhub
docker login
# build from the dockerfile located in our current directory
# and tag with your dockerhub username
docker build -t your-dockerhub-username/test_app .
# push the image to dockerhub
docker image push your-dockerhub-username/test_app
# you can remove the local version of the image
docker image rm your-dockerhub-username/test_app
# make a container based on the image—because it does not exist locally, 
# it will pull down the image from your dockerhub
docker container run -p 3000:3000 --name demo your-dockerhub-username/test_app
```

---

## Today's projects

- First Containers
- First Dockerfile
- Dockerfiles Deep Dive
- *Optional - Making Efficient Dockerfiles*

As always, please coordinate within your groups for more project planning after the Docker projects.
