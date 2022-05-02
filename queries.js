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