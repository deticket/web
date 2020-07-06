# Web App

This repo contains the Deticket web application.

## Developing

To run the application in dev mode follow these instructions:

Create a postgres database on your local machine and name it `detticket_dev`

```sh
yarn
yarn dev
```

Migrate the database

```sh
sequelize db:migrate
```

Seed the database

```sh
sequelize db:seed:all
```

## Docker

```sh
docker-compose up --build -d
```

if your image is already built

```sh
docker-compose up
```

run migration

```sh
yarn run migrate
```

run seeds

```sh
yarn run seed
```


docker config information --> https://github.com/authorjapps/zerocode-docker-factory/wiki/Docker-container-for-a-Postgres-DB