# simple-rabbitmq-poc

Simple rabbitmq POC to test

steps to run:

first:

```
npm install
```

you need docker desktop installed and running, after that you run

```
npm run docker
```

after that run in one terminal:

```
npm run producer
```

and in another terminal run:

```
npm run consumer
```

and you can view the rabbitmq management in your browser after run npm run docker and access localhost:15672
