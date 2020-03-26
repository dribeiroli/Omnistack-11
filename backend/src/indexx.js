const express = require ('express');
const cors= require ('cors');
const routes = require('./routes'); // ./ é pra referenciar um arquivo na msm pasta

const app= express();

app.use(cors()); //modulo de segurança
app.use(express.json());
app.use(routes);
/**
 * Rota= (/) e recurso = o que se quer acessar depois do /
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: alterar uma informação do backend
  * DELETE: Deletar uma informação do backend
  */
 /**
  * Tipos de parametros
  * 
  * Query Params:Parametros nomeados enviados na rota após o simbolo de interrogação e geralmente servem para
  * filtros, paginacao ( users?page=2&);
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou 
  * alterar recursos
  */


app.listen(3333);