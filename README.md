# my-imdb

Aplicação que consome um Web Service de filmes p/ listagem e favoritagem, 
implementado usando `ReactJS`.

É recomendável utilizar `NodeJS 14` com o gerenciador de pacotes `yarn` para melhor performance.

## Iniciando

Para instalar as dependências do projeto, digite o comando:

```
yarn install
```

Em seguida, para iniciar o servidor digite o comando (`bash` e `zsh`):

```
REACT_APP_API_KEY=${chaveDaApi} yarn start
```

Para terminal Windows utilize:

```
set REACT_APP_API_KEY=${chaveDaApi}&& yarn start
```

### Importante

A `${chaveDaApi}` é necessária para pode obter os dados, 
podendo ser gerada no site [OMDB API](https://www.omdbapi.com/), 
e deve ser trocada no comando acima.