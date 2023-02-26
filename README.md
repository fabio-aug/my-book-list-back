# My Book List 📚

## Grupo 👥

- [Fábio Augusto Araújo Santos](https://github.com/fabio-aug)
- [Luana Assis Silva](https://github.com/luanaassis)
- [Vinícius Dalcantoni Horta Barbosa](https://github.com/ViniDalca)
- [Bruno de Oliveira Silva](https://github.com/Brunodev77)
- Matheus Santiago de Andrade Marques

## Introdução 💡

O My Book List é uma rede social destinada a leitores.</br>
Na plataforma, estão disponíveis as seguintes funcionalidades:

- Criar listas das suas obras lidas, com leitura em andamento, leituras paradas e as que estão na sua lista de desejos;
- Adicionar detalhes a cada obra contida em suas listas, como: nota, review e status;
- Adicionar amigos e visualizar perfis de outros usuários.
- Personalizar seu próprio perfil, alterando sua foto e nome e definindo seus livros favoritos.

A ideia do projeto surgiu a partir de um interesse em comum: a **leitura**. A leitura traz diversos benefícios, tanto no âmbito pessoal como profissional, visto que desenvolve o pensamento crítico, diminui o estresse, aumenta o vocabulário, expande a criatividade, exercita o cérebro e aumenta a concentração, dentre outras inúmeras vantagens. </br>
Visto isso, em um mundo integrado com o virtual, a plataforma foi criada no intuito de incentivar a leitura e integrar pessoas.

## Código Fonte 👾

Para o desenvolvimento o projeto foi dividido em duas seções, seguindo uma estrutura MVC e HTTP/REQUEST.

### [Front-End](https://github.com/fabio-aug/my-book-list-web)

O front-end do projeto foi desenvolvido com [React JS](https://pt-br.reactjs.org/).

Para rodar é necessário executar `npm install` para baixar suas dependências. Com as dependências instaladas, para inciar é necessário o comando `npm start`.

Ambos os comando devem ser executados na pasta raiz.

### [Back-End](https://github.com/fabio-aug/my-book-list-back)

O back-end do projeto foi desenvolvido com [Node JS](https://nodejs.org/en/), utilizando a biblioteca [Express](https://expressjs.com/pt-br/).

Para rodar é necessário executar `npm install` para baixar suas dependências. Com as dependências instaladas, pode-se inciar o projeto, que pode ser executado de duas formas.

A primeira delas como desenvolvedor, a partir do comando `npm run dev`, onde será inciado através da biblioteca [nodemon](https://nodemon.io/). A segunda forma é como deve ser feito em produção/servidor, através do comando `npm run start` ou `node ./src/server.js`.

A documentação do projeto é feita a partir do [Swagger](https://swagger.io/). Para inciar o processo de gerar/atualizar a documentação de forma automática é necessário executar o comando `npm run doc`.

Ambos os comando devem ser executados na pasta raiz.
