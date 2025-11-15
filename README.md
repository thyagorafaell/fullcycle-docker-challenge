# Challenge "Nginx with Node.js"

## Abstract

Resolution of one of the challenges from the Docker module of the [FullCycle 3.0](https://curso.fullcycle.com.br/curso-fullcycle/) course.

This code features a dockerized application built with Nginx, Node.js, and a MySQL database.

> :warning: As the challenge states that the only step to run the application should be `docker-compose up -d`, no _.env_ file was created. As the application runs only locally, the credentials were committed to satisfy the criteria and not add another step to build the application.

## Starting the server

- Clone this repository locally running `git clone git@github.com:thyagorafaell/fullcycle-docker-challenge.git`
- In the directory of the cloned repository, run `docker-compose up -d` and wait for the message "Running on 9000" from the container **app**

## Introduction

> From the original source, in pt-BR 🇧🇷

Nesse desafio você colocará em prática o que aprendemos em relação à utilização do nginx como proxy reverso. A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação Node.js. Essa aplicação, por sua vez, adicionará um registro em nosso banco de dados MySQL, cadastrando um nome na tabela `people`.

O retorno da aplicação Node.js para o nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

Gere o docker-compose de uma forma que basta apenas rodarmos: `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

A linguagem de programação para este desafio é **Node/JavaScript**.
