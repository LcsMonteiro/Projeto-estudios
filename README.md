Turma Online 11 - Todas em Tech | Back-end | 2021 | Semana 14: Projeto Guiado - CRUD com BD


## Sobre o Projeto

O **PROJETO_ESTUDIOS** é um sistema de gerenciamento de catálogos de filmes dos estudios Madhouse, Ghibli e Copa Studio. 

Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criador. 

```
"Relacionamento" no MongoDB? Como é isso?
- ref no model
- populate do find (eager loading)
```

## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 PROJETO_ESTUDIOS
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 tituloRoutes.js 
   |         |- 📄 estudioRoutes.js 
   |
   |    |- 📄 app.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

## Contrato
Acesse o board para conferir as informações de forma visual: https://miro.com/app/board/o9J_lA7Nns8=/

### Requisitos 
- [x]  **"/titulos/madhouse"** Deverá retornar todos os títulos com o estudio Madhouse
- [x]  **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [x]  **"/titulos/copa-studio"** Deverá retornar todos os títulos com o estudio Copa Studio

- [x]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [x]  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [x]  "**/estudios**" Deverá criar um estudio 
- [x]  "**/titulos**"  Deverá criar um título 

- [x]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- [x]  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- [x]  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [x]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado


### Regras de negócio

- [x]  Não deverá ser possível criar estudio com o mesmo nome
- [x]  Não deverá ser possível criar título com o mesmo nome
- [x]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema

<br>
<br>

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad38c8c299c285d2685e7",
    "nome": "Madhouse",
    "__v": 0
    },
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Copa Studio",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório


### API deve retornar seguinte JSON:

```jsx
[
 
  {
    "criadoEm": "2021-06-20T17:05:27.063Z",
    "_id": "60cff71c93eb73110ecbdc24",
    "nome": "Perfect Blue",
    "genero": "Suspense",
    "descricao": "A cantora Mimi Kirigoe tem bastante sucesso no seu “grupo de ídolos”, algo muito famoso na cultura Japonesa. Porém, toda a situação muda quando aceita um papel polémico num filme. A partir de certo momento, deixa de distinguir o que é real ou ficção e também começa a ser perseguida por um fã doentio. Este é um filme bastante intenso e com contornos mais sombrios de uma realidade que é certamente verdadeira. Mais um grande filme produzido nos anos 90.",
    "estudio": {
      "criadoEm": "2021-06-20T06:36:41.728Z",
      "_id": "60cee200babf37191215778d",
      "nome": "Madhouse",
      "__v": 0
    },
    "__v": 0
  },
]
```
<br>
<br>

## Entregavel

Crie seu repositório contendo:
 - um readme com os maiores aprendizados nesse projeto e copiando todas as informações sobre o projeto
 - cumprimento total do contrato (requisitos e regras de negócios) 
 - realizar testes no Postman e verificar se os dados estão persistindo com o mongoDB

## Maiores aprendizados:

Com o desenvolvimento do **PROJETO-ESTUDIOS**, foi possivel maior entendimento e fixação do processo de construção de um CRUD utilizando o MongoDb como banco de dados.

## PROJETO GUIADO POR: 

Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)


