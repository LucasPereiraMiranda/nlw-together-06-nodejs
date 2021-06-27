## Valoriza api

Aplicação ensinada e desenvolvida durante o evento NLW 06 (trilha node.js) visando permitir que um usuário cadastre elogios para outros usuários e as liste.

### Techs

- Node.Js
- Typeorm
- Sqlite
- Class-Transformer

### Regras da Aplicação

Cadastro de usuário

- Não é permitido cadastrar mais de um usuário com o mesmo e-mail

- Não é permitido cadastrar usuário sem e-mail

#### Cadastro de TAG

- Não é permitido cadastrar tag sem nome

- Não é permitido cadastrar mais de uma tag com o mesmo nome

- Não é permitido o cadastro por usuários que não sejam administradores

#### Cadastro de elogios

- Não é permitido um usuário cadastrar um elogio para si

- Não é permitido cadastrar elogios para usuários inválidos

- O usuário precisa estar autenticado na aplicação
