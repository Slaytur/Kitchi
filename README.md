<div align="center">
    <img src="./client/src/assets/img/logos/kitchi.png" alt="Kitchi logo">
    <hr />
</div>

<div align="center">
    <img src="https://img.shields.io/badge/node.js%20-%23339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-%233178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/react-%2361DBFB?style=for-the-badge&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/html%20-%23E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/css%20-%231572B6?style=for-the-badge&logo=css3" />
    <img src="https://img.shields.io/badge/python-%23FFD343?style=for-the-badge&logo=python&logoColor=black" />
    <img src="https://img.shields.io/badge/sass%20-%23CC6699?style=for-the-badge&logo=sass&logoColor=white" />
    <img src="https://img.shields.io/badge/tailwind-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/bootstrap-%237952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
    <img src="https://img.shields.io/badge/webpack%20-%231C78C0.svg?style=for-the-badge&logo=webpack" />
    <img src="https://img.shields.io/badge/postcss-%23DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" />
     <img src="https://img.shields.io/badge/jquery-%230769AD?style=for-the-badge&logo=jquery" />
    <img src="https://img.shields.io/badge/mongodb-%2347A248?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/express%20-%23000000.svg?style=for-the-badge&logo=express" />
    <img src="https://img.shields.io/badge/axios-%235A29E4?style=for-the-badge&logo=axios" />
    <img src="https://img.shields.io/badge/passport-%2334E27A?style=for-the-badge&logo=passport&logoColor=white" />
    <img src="https://img.shields.io/badge/nginx%20-%23009639.svg?style=for-the-badge&logo=nginx" />
</div>


## Prerequisites
 * [Node.js](https://nodejs.org)
 * [pnpm](https://pnpm.io)
 * [MongoDB](https://www.mongodb.com)
 * [Python](https://www.python.org)

## Installation
```sh
pnpm install
cd Object_detection && pip install -r requirements.txt
cd ../recommendation_filter && pip install -r requirements.txt
```

## Development
In three terminals, run the following:
```sh
pnpm dev
```
```sh
cd ./Object_detection && py main.py
```
```sh
cd ./recommendation_filter && py filter.py
```

## Production
To build for production, run this command in the project root:
```sh
pnpm build
```

To start the API server, run this command:
```sh
pnpm start:server
```

To start the ML server, run the following:
```sh
cd ./Object_detection && py main.py
```

To start the recommendation server, run the following:
```sh
cd ./recommendation_filter && py filter.py
```

Production builds are served using [NGINX](https://nginx.org). A sample configuration file can be found [here](nginx.conf).
