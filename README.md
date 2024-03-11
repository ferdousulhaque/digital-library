# Digital Book Store
This repository is for a digital book store for the community.

## Platforms and Stacks

Navigate to the following directories for the platforms

- backend - Node.js
- frontend - React.js

## APIs
Full API documentation in the following [Postman Collection File](https://github.com/ferdousulhaque/digital-library/raw/master/Digital%20Book%20Store.json)

- GET `/v1/books` - Get all books (with Caching)
- GET `/v1/book/:id` - Get Books by ID (with Caching)
- POST `/book` - Add new Books to the Store
- PUT `/v1/book/:id` - Update books in the Store
- DELETE `/v1/book/:id` - Delete books by ID
- POST `/v1/books/search` - Full Text search over the columns 
    - title
    - author
    - publicationYear
    - summary

## Pages

- Books List Page with Search [`/`]
- Books Add Page [`/add-book`]
- Books Update Page [`/update-book/:id`] - in-complete
- Book Delete [`/delete-book/:id`]

## Pre-requisites
Docker app in the laptop only.

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
4. Final step to start the app, you will see 4 containers will run. It will auto seed few books for app to show.
```
docker compose up -d
```

## Containers

- Database - Postgresql
- Cache - Redis
- Api - Node.js Express
- App - React JS

## CI/CD

`Jenkins` file added for future case of deployment to other hosts.

## Built-In Features

- Built-in Cache Aside Policy with Redis Cache, hence once a get query is called, it will be cached for the next call.

- Backend and frontend both are image based, so can push to docker image registry and roll the images over k8s very easily

- All the ports and URLs are added in the `.env` file. Hence it is dynamic

- Full Text Search is implemented over Postgresql `ts_vector` and it is updated over a `TRIGGER` in the database.

## Scale the application

1. To scale up the backend of the application can run multiple instances of the backend API in the pm2 `app.yaml` file to add more instances. NOTE: each instance will create connection pool with the database. Hence while scaling, please do check that.

2. Backend can also be scaled up using the docker image file. Follow the `api-deployment.yml` for scaling the backend using the image.

3. To scale up the frontend, just run multiple instances of the docker image, if you push into the docker image registry. Or can run the frontend images with replication count in the `app-deployment.yml` file

## Future Improvements

- For fulltext search, ElasticSearch is very much popular. Due to time contraints and memory requirements avioded using it. However, as I have used ORM, implementing it should not be a hassle.
- Adding Swagger to the application
- Make UI more beautiful
- Would add pagination to the get books endpoints
- Add More linting to avoid any surprize bugs and code standardization
- Complete the github workflow actions [however added one example]
- Writing test cases

