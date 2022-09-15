## Desafío técnico de Kreitech

## Quick Start

1. Clone the repository

2. Install the dependencies with **npm**

   ```
   $ npm install
   ```

3. Run the application in development mode with **npm**

   ```
   $ npm start
   ```

4. Access `http://localhost:3001/city` and you're ready to go!

## Description

The exercise consists of developing a **REST API** that is capable of managing cities, registering their "*name*" and "*code*". It was developed on:

1.  NodeJs (Express)
2.  MongoDB (Mongoose)

It was implemented with a layered structure separating the source code as follows:

1. server.js: Application main file
2. src: Application source code container
   1. domain: Domain layer (grouping model and domain services)
   2. infra: Infrastructure layer (grouping application drivers)
   3. routes: Contains the application paths

## 

