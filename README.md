# OrientDB-sandbox

## Start in docker

```bash
docker run -d --name orientdb -p 2424:2424 -p 2480:2480 -e ORIENTDB_ROOT_PASSWORD=root orientdb:latest
```

## Start in cluster docker
```bash
docker-compose up
```


## Build & Run node app
```bash
npm i
node index.js
```


## Build & Run java app

```bash
mvn clean install
java -jar target/OrientDB-sandbox-1.0-SNAPSHOT-jar-with-dependencies.jar
```