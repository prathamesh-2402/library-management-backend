
# Library Management Backend

## **Requirements**

node.js ->  [20.16.0](https://nodejs.org/en/blog/release/v20.16.0) 
npm -> 10.8.1

## **Clone & Install Dependency**

Clone the project.

```bash
git clone https://github.com/prathamesh-2402/library-management-backend.git
```

Change directory to the project.

``` bash 
cd library-management-backend 
```

Install the necessary dependencies using npm.

``` bash  
npm install
```

## **Environment variables**

Create an `.env` file and add these environment variables.

```bash
DB="library_management"
DB_HOST="localhost"
DB_USER="postgres"
DB_PASSWORD=
DB_PORT="5432"
```

## **Run project locally**

Run the project using npm.

``` bash 
npm run dev
```

The server will be live on.

```bash
localhost:8000
```

## **Add Database Tables**

Run the queries from `database.sql` file in `postgres db` to create tables.
