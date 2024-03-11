# Digital Book Store
This repository is for a digital book store for the community.

## Platforms and Stacks

Navigate to the following directories for the platforms

- backend - Node.js
- frontend - React.js

## APIs



## Pages


## Pre-requisites


## Run the app
Steps to start the app are as below

1. Clone the git repo to your desired location
2. Copy the .env.example to the locations
```bash
cp -av .env.example .env
cp -av .env.example backend/.env
cp -av .env.example frontend/.env
```
3. Now start the docker application and run the docker build
```bash
docker compose build
```


## CI/CD

## Features

- Built-in Cache Aside Policy with Redis Cache, hence once a get query is called, it will be cached for the next call.


## Scale the application

## Future Improvements

- For fulltext search, ElasticSearch is very much popular. Due to time contraints and memory requirements avioded using it. However, as I have used ORM, implementing it should not be a hassle.

- Writing more test cases
- Adding Swagger to the application
- Adding more test cases
- Make UI more beautiful
- Would add pagination to the get books endpoints
- Add More linting to avoid any surprize bugs and code standardization
- Complete the github workflow actions [however added one example]

