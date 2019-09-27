[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  <a href="https://david-dm.org/react-boilerplate/react-boilerplate">
    <img src="https://david-dm.org/bdcorps/nodejs-docker-boilerplate.svg" alt="Dependency Status" />
  </a>
[![LinkedIn][linkedin-shield]][linkedin-url]
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/bdcorps/nodejs-docker-boilerplate">
    <img src="https://dummyimage.com/200x200/e1ff00/000000.png&text=Nodejs+x+Docker" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">Nodejs and Docker Boilerplate</h3>

  <p align="center">   
A boilerplate Node.js web app with Docker support
    <br />
  </p>
</p>

## About the project
A simple "Hello World" Node.js web app that can deployed as a Docker container. Source code for [Deploy your Node.js web app using Docker](http://sukhpalsaini.io/deploy-your-node-js-web-app-using-docker/) post.

## Dependencies
1. Docker
2. Node.js

## Installation
 
1. Clone the repo
```sh
git clone https://github.com/bdcorps/nodejs-docker-boilerplate.git
```
2. Build Docker image
```sh
docker build -t sssaini/simple-docker
```
3. Run web app as container
```sh
docker run -p 3000:3001 sssaini/simple-docker
```
The app should be at http://localhost:3001.

<!-- LICENSE -->
## License

Distributed under the MIT License

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sukhpal-saini/
