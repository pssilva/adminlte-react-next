# AdminLTE React Next.js (adminlte-react-next)

Converter o projeto [AdminLTE - Bootstrap 5 Admin Dashboard](https://github.com/ColorlibHQ/AdminLTE?tab=readme-ov-file#adminlte---bootstrap-5-admin-dashboard) 
para um projeto [React](https://pt-br.legacy.reactjs.org/) + [Next.js Frameworks](https://nextjs.org/).

Se trata de um projeto prático prova de conceito POC para deixar pegadas digitais e ser próativo para os processos seletivos onde as equipes técnicas de recrutadores tenham condições e evidências para verificar se o meu perfil pode atender as necessidades das oportunidades.

Procuro evidência as proficiências nas seguintes habilidades técnicas:

- [React Biblioteca](https://pt-br.legacy.reactjs.org/);
- [Next.js Frameworks](https://nextjs.org/);
- Técnicas em [Análise Código-fonte Legados](#FEATHERS-michael);
- Técnicas em [Refatoração Código-fonte Legados](#FEATHERS-michael);
- Stacks de [rotinas operacionais de Front-end](#CURSO-INTENSIVO-de-React-e-Next-13);
- 

Projeto inicializado com o [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🚀 Começando

### 📋 Pré-requisitos

De que coisas precisamos para instalar o software e como instalá-lo?

```bash
##############################################
# Instalação do NodeJS no Fedora
##############################################
sudo dnf install nodejs.x86_64
node -v
##############################################

##############################################
# Instalação do Node Version Manager no Fedora
##############################################
export NVM_VERSION="v0.39.3"

curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_VERSION}/install.sh" | bash

nvm -v
nvm install --lts

##############################################

##############################################
# Instalação Typescript, React e o Next.js globalmente
##############################################
npm install -g typescript react next
##############################################

```

### 🔧 Instalação

Para obter o presente projeto use os seguintes comandos:

```bash
mkdir -p "${HOME}/projetos"
cd "${HOME}/projetos"
git clone https://github.com/pssilva/adminlte-react-next.git
cd adminlte-react-next
code .
```

Em um terminal execute a aplicação com os seguintes linha de comandos:
```bash
cd "${HOME}/projetos/adminlte-react-next"
npm install 
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador.

## Saiba Mais

Para saber mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [o repositório Next.js GitHub](https://github.com/vercel/next.js/) - seus comentários e contribuições são bem-vindos!

## Implantar no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

---

## 🔩 Débitos Técnicos

Aqui temos uma lista do que idenficamos com status de pendente:

### Funcionalidades Aplicação

Segue abaixo (não se limita) os objetivos do presente projeto:

- [X] ~~Formatando documentação README.md~~
- [ ] Indexação completa do vídeos longos: 
  - [X] ~~[PLAYLIST 7 VÍDEOS – 03.04.07.12.16 – Curso Intensivo de React e Next 13 – Cod3r Cursos – Questões](docs/indexacoes/PLAYLIST%207%20VÍDEOS%20–%2003.04.07.12.16%20–%20Curso%20Intensivo%20de%20React%20e%20Next%2013%20–%20Cod3r%20Cursos%20–%20Questões.pdf)~~ (mais detalhes veja [aqui](docs/indexacoes/REAMDME.md)). Playlist totalmente indexada e relacionada com os questionários de contextos!
  - [X] ~~[VIDEO LONGO 13241 – 03.04.07.12.16 – ReactJs do zero – Transformando um HTML e CSS em React | Mão na massa - 016 – Questões](docs/indexacoes/VIDEO%20LONGO%2013241%20–%2003.04.07.12.16%20–%20ReactJs%20do%20zero%20–%20Transformando%20um%20HTML%20e%20CSS%20em%20React%20|%20Mão%20na%20massa%20-%20016%20–%20Questões.pdf)~~. Vídeo longo totalmente indexada e relacionada com os questionários de contextos!
- [X] ~~Fatiar o Template HTML [AdminLTE - Bootstrap 5 Admin Dashboard](https://github.com/ColorlibHQ/AdminLTE?tab=readme-ov-file#adminlte---bootstrap-5-admin-dashboard) em componentes Reacts~~
- [ ] Fatiar, em componentes ReactJS reutilizáveis, os seguintes artefatos:
- [ ] Convertendo tag HTML header em um componente React;
- [ ] Abstrarir Componentes reutilizáveis especificos para o AdminETL
- [ ] Refatorações dos seguintes Artefatos: 
  - [ ] `src/components/adminLTE/adminLTEReact.tsx`
- [ ] Converter funcionalidades jQuery para React
  - [ ] Listagem e Identificação das Funcionalidade jQuery
    - [ ] [[TRABALHO EM PROGRESSO]](#)
  - [ ] Converter funcionalidades jQuery para React:
    - [ ] [[TRABALHO EM PROGRESSO]](#)
- [ ] Implementar os rescursos do [Next.js Frameworks](https://nextjs.org/)
- [ ] Aplicar na prática os [Recursos do React]()
    - [ ] [[TRABALHO EM PROGRESSO]](#)

### Atividades - DevOps

- [ ] Implementação dos Pipelines CI/CD de Implatação num Provedor de Nuvem (mais detalhes veja [aqui](docs/provedores_nuvem/README.md)).
- [ ] Implementar restrições de Commit no Git: vinculado com o ID de regra de negócio e ID do checklist de validação das entragas de funcionalidades (mais detalhes [aqui](docs/checklists/README.md))
- [ ] Implementar Dockerfiles para Kubernetes
- [ ] Colocar em prática o Desenvolvimento Orientado a Interface onde se deve desacoplar a aplicação do procedor de nuvem (Princípio da Segregação de Interface (ISP) - SOLID) (mais detalhes veja [aqui](docs/provedores_nuvem/README.md))
- [ ] Implementar Arquitetura Orienta a Eventos ([EDA](https://aws.amazon.com/pt/what-is/eda/))

### Suporte / Sustentação
- [ ] Abordagem API First e Implementação da Especificação do [OpenAPI (antido Swagger)](https://swagger.io/specification/).
- [ ] Implemetar Chamadas assíncronas com Mensageria ([EDA](https://aws.amazon.com/pt/what-is/eda/))
- [ ] Implementar cache (Redis)

### Segurança
- [ ] Aplicar o checklist (veja [aqui](docs/checklists/README.md)) das [vulnerabilidades mais recorrentes (Top 10 OWASP (Open Web Application Security Project))](https://owasp.org/Top10/) nas dependências usadas na solução
- [ ] implementar pentests para [vulnerabilidades Top 10 OWASP](https://owasp.org/Top10/)
- [ ] [Spring Boot externalized configuration](https://docs.spring.io/spring-boot/reference/features/external-config.html): Externalização das configurações dos parâmetros de uma aplicação
- [ ] Aplicar os checklists  

---

## 📦 Desenvolvimento

- [ ] Inplementar o gernciador de tarefas Gruntfile.js

### Mentalidade PDCA

Tendo em mente que sempre buscamos melhorar o protocolo de trabalho operacinal do dia a dia usando empirismo (colocar realmente em prática os conheicmentos abstratos)!

_**NOTA**_: Não se trata de ficar ditando regras no trabalho da equipe, mas sim melhorar o [meu operacional pessoal de trabalho](#da-analise-exploratoria) e com isso agregar valor melhorando a perfomance:

--- 
<img src="docs/imgs/pdca.png" alt="PDCA: Aplicar na prática o empirismo" title="PDCA" style="width:475px;"/>

--- 

<a href="#FOWLER-Martin" id="da-analise-exploratoria">
<img src="docs/imgs/DA - Análise de Repositório Genárico.drawio.png" alt="Diagrama: Documentação Elaboração do Diagrama de Atividade da Análise Exploratória Genérico" title="Documentação: Processo Genérico: Atividades da Análise Exploratória de um Repositório"/>
</a>

---

## 🛠️ Construído com

Seque aqui as ferramentas utilizadas na construção presente projeto:

* [AdminLTE - Bootstrap 5 Admin Dashboard](https://github.com/ColorlibHQ/AdminLTE?tab=readme-ov-file#adminlte---bootstrap-5-admin-dashboard)
* [React](https://pt-br.legacy.reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/docs/)
* [Next.js Frameworks](https://nextjs.org/)
* [Docker](https://www.docker.com/get-started/)
* [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#intro) - Node Version Manager
* [Terminal Shell Linux (WSL)](https://learn.microsoft.com/pt-br/windows/wsl/install)


## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](COLABORACAO.md) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto).

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [pssilva](https://github.com/pssilva)


Você também pode ver a lista de todos os [colaboradores](COLABORACAO.md) que participaram deste projeto.

---

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md]() para detalhes.

---

## 🎁 Expressões de Gratidão

  Primeiro confesso aqui publicamente a minha gratidão ao Criado! E reconheço Jesus Cristo como o meu Senhor e Salvador! E que tudo é para honra e glória do Altissímo! Amém!! 📢

  Expresso gratidão pelas contribuções para comunidade aos seguintes Canais do Youtube:
  - [Cod3r Cursos](https://www.youtube.com/@cod3r)
  - [Seja Dev](https://www.youtube.com/@SejaDev)
  - [Matheus Battisti](https://www.youtube.com/@MatheusBattisti)
  - [Lenntecs](https://www.youtube.com/@Lenntecs)
  - [fernandev](https://www.youtube.com/@fernandev1)

---


## Referencias Usadas

Seque abaixo as referências bibliográficas usadas no presente projeto:

---

[<a id="FEATHERS-michael">MARTIN, Robert C. | FEATHERS Michael</a>]: Working Effectively with Legacy Code. Library of Congress Cataloging-in-Publication Data: 2004108115 Copyright © 2005 Pearson Education, Inc. Prentice Hall Professional Technical Reference Upper Saddle River, NJ 07458. ISBN 0-13-117705-2 (Robert C. Martin Series, número). Disponível em: < https://a.co/d/3RZL8Sl >. Acesso em: 16 Mai. 2024.

---
[<a id="CURSO-INTENSIVO-de-React-e-Next-13">CURSO INTENSIVO de React e Next 13</a>]: Direção: Autor da playlist Canal do Youtube Cod3r Cursos: Leonardo Leitão. Produção: Autor da playlist Canal do Youtube Cod3r Cursos: Leonardo Leitão. Realização: Autor da playlist Canal do Youtube Cod3r Cursos: Leonardo Leitão. Roteiro: **Leonardo Leitão**. Fotografia: N/A. Intérpretes: N/A; Local: Publicado no Canal do Youtube: Cod3r Cursos, 25 de abr. de 2023. (duração 08:09:20 hs), demais características (HD, som, cor, legenda, stream). Disponível em: < https://www.youtube.com/playlist?list=PLdPPE0hUkt0q_XT8zDe313e27wFQ-k9fe >. Acesso em: 16 mai. 2024.

NOTA: para deixar evidenciado, segue a [indexação da playlist](./docs/indexacoes/PLAYLIST%207%20VÍDEOS%20–%2003.04.07.12.16%20–%20Curso%20Intensivo%20de%20React%20e%20Next%2013%20–%20Cod3r%20Cursos%20–%20Questões.pdf) (se trata de um questionário com o mapeamento do link de um tema / assunto no momemento onde se explica um conceito ou uma técnica de codificação).

---

[<a id="REACTJS-DO-ZERO">REACTJS DO ZERO – Transformando um HTML e CSS em React</a>] | Mão na massa - 016. Direção: Autor do Vídeo no Canal do youtube: @SejaDevProdução: Autor do Vídeo no Canal do youtube: @SejaDev. Realização: Autor do Vídeo no Canal do youtube: @SejaDev. Roteiro: Autor do Vídeo no Canal do youtube: @SejaDev. Fotografia: N/A. Intérpretes: N/A. Local: Autor do Vídeo no Canal do youtube: @SejaDev, Transmitido ao vivo em 9 de nov. de 2022. Indicação do suporte físico e duração entre parênteses, demais características (STREAM, som, cor, legenda, tradução, stream). Disponível em: < https://www.youtube.com/live/_pldhSaJ-nw?si=QSxmrHFQxbnP7qZs >. Acesso em: 17 mai. 2024.


---

[<a id="CURSO-INTENSIVO-de-React-e-Next-13">FREEMAN, Adam</a>]: Pro React 16. 1 Ed. London, UK: Apress, © Adam Freeman 2019. (e-ISBN 978-1-4842-4451-7). Disponível em: < https://a.co/d/3bhi1wk >. Acesso em: 16 mai.2024.
