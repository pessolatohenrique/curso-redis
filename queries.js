/**
 * o Redis é um banco de dados não-relacional baseado em chave-valor
 * Entre as vantagens está a possibilidade de recuperar um dado rapidamente, sem realizar consultas complexas
 * Por exemplo: resgatar o total de alunos de uma plataforma de e-learning; placar eletrônico de um jogo;
 * rankings em tempo real. Entre outros exemplos
 */
ECHO "Hello World";

SET "alunos_concluidos" 120190190
SET "perguntas_respondidas" 120190190019
SET "perguntas_respondidas" 120190190020 // atualização

SET "ultimo_aluno" "pessolatohenrique"

GET "ultimo_aluno"
GET "alunos_concluidos"

DEL "ultimo_aluno"
GET "ultimo_aluno"

/**
 * listagem de todas as chaves
 * como melhor forma de padronização, é interessante utilizar : (dois pontos) nos nomes de chaves
 */
KEYS *
SET resultado:2022-05-06:megasena "02, 05, 15, 20, 30"
SET resultado:2022-04-29:megasena "05, 10, 20, 35, 42"
GET "resultado:2022-05-06:megasena"

/**
 * é possível buscar de diferentes formas com a utilização do "*
 */
MSET resultado:2022-05-01:megasena "01, 15, 20, 34, 42" resultado:2022-04-20:megasena "09, 19, 29, 39, 49" resultado:2022-04-05:megasena "01, 06, 35, 40, 41"
SET resultado:2022-05-06:lotosena "01, 09, 10, 11, 15"
KEYS resultado:*
KEYS resultado:*:megasena
KEYS resultado:2022-05-*
KEYS resultado:2022-*-?
KEYS resultado:*sena
KEYS resultado:2022-05-0*

/** 
 * busca utilizando "OU"
*/
KEYS resultado:2022-?[45]-*
KEYS "resultado:2022-05-0[61]:*"


/**
 * utilizando hashs (dicionários)
 */
HSET resultado:2022-05-10 "numeros" "05, 07, 15, 23, 42"
HSET resultado:2022-05-10 "ganhadores" 15
HGET resultado:2022-05-10 "numeros"
HGET resultado:2022-05-10 "ganhadores"
HMSET resultado:2022-05-01 "numeros" "01, 09, 16, 21, 40" "ganhadores" 10
HGET resultado:2022-05-01 "ganhadores"
HGETALL resultado:2022-05-01

/**
 * sessão de um usuário com expiração
 */
HSET usuario:1675 "username" "pessolatohenrique" "cart_items" 3 "category" "premium"
HGETALL usuario:1675
EXPIRE usuario:1675 1800
TTL usuario:1675

/**
 * incrementando ou decrementando valores
 */
INCR jogadores:/jogo
INCR jogadores:/jogo
INCR jogadores:/jogo
DECR jogadores:/jogo
INCRBYFLOAT compra:1675:total 15
INCRBYFLOAT compra:1675:total 35.9
INCRBYFLOAT compra:1675:total 50.1
INCRBYFLOAT compra:1675:total -15

/**
 * armazenando um conjunto de booleanos
 */
SETBIT acesso:2022-05-14 1000 1
SETBIT acesso:2022-05-14 2000 1
SETBIT acesso:2022-05-13 1000 1
SETBIT acesso:2022-05-13 2000 1
SETBIT acesso:2022-05-13 3000 1
BITCOUNT acesso:2022-05-14
BITCOUNT acesso:2022-05-13

/**
 * operadores relacionais em booleanos
 */
BITOP and "acessos:2022-05-14and2022-05-13" acesso:2022-05-14 acesso:2022-05-13
BITCOUNT "acessos:2022-05-14and2022-05-13" 
BITOP or "acessos-2022-05-14or2022-05-13" acesso:2022-05-14 acesso:2022-05-13
BITCOUNT "acessos-2022-05-14or2022-05-13"

/**
 * realizando operações em listas
 */
LPUSH ultimas_noticias "Noticia 1" "Noticia 2"
LPUSH ultimas_noticias "Noticia 3" "Noticia 4"
LRANGE ultimas_noticias 0 4
LTRIM ultimas_noticias 0 2
LINDEX ultimas_noticias 1
LLEN ultimas_noticias
