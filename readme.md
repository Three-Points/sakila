# Sakila

> MySQL database example

![MySQL](https://img.shields.io/badge/v8.X-ECEFF4?style=for-the-badge&logo=MySQL)
![Docker](https://img.shields.io/badge/supported-A7C9E6?style=for-the-badge&logo=Docker)

### 📦 Getting Started

#### ⚡️ First Steps

To start using this database, you need to lauch with Docker using `docker-compose up -d`.

> Note. To get docker click [here](https://www.docker.com/products/docker-desktop/).

When docker is up and running, you can connect to the database using the following command, writting the password:

````

```bash
docker-compose exec mysql mysql -u root -p
````

Then you need to upload sql files to the database. You can do this using the following command:

```bash
source ./tmp/sakila-schema.sql;
source ./tmp/sakila-data.sql;
```

Finally, use the database and starts using it:

```bash
USE sakila;
```

<img src="./project/assets/use.png" alt="Use" />

### 🚧 Testing Database

When you have finished installing and loading the database, you can start to query sql statements.

For example:

```bash
SELECT COUNT(*) FROM film;
```
<img src="./project/assets/count-film.png" alt="Count Film" />

```bash
SELECT COUNT(*) FROM film_text;
```

<img src="./project/assets/count-film-text.png" alt="Count Film Text" />
