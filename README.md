<h1 align="center"> 
	Desenvolvendo um Planejador de Estudos com React, TypeScript, ViteJs e TailwindCss
</h1>
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-vitrine-dev">Vitrine Dev</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-instalação">Instalações</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

&nbsp;

![Study Planner](https://github.com/LivioAlvarenga/studyPlanner/blob/master/files/capa.gif?raw=true#vitrinedev)

&nbsp;
<a id="-sobre-o-projeto"></a>

## 💻 Sobre o projeto

🚀 É um planejador de estudos desenvolvido em ViteJs, TypeScript, React e TailwindCSS.

Usei o ViteJs para iniciar o projeto React com TypeScript.

Usei todos os principais conceitos de ReactJs para desenvolver esta aplicação como: Componentização, Renderização dinâmica, Props, Hooks (useState e useEffect).

Utilizei o TailwindCss para abstrair o CSS.

<p align="center">
  <a href="#license"><img src="https://img.shields.io/github/license/LivioAlvarenga/studyPlanner?color=ff0000"></a>
  <a href="https://github.com/LivioAlvarenga/studyPlanner/issues"><img src="https://img.shields.io/github/issues/LivioAlvarenga/studyPlanner" alt="issue site alurabooks" /></a>
  <a href="https://github.com/LivioAlvarenga/studyPlanner"><img src="https://img.shields.io/github/languages/count/LivioAlvarenga/studyPlanner" alt="total amount of programming languages used in the project" /></a>
  <a href="https://github.com/LivioAlvarenga/studyPlanner"><img src="https://img.shields.io/github/languages/top/LivioAlvarenga/studyPlanner" alt="most used language in the projects" /></a>
  <a href="https://github.com/LivioAlvarenga/studyPlanner"><img src="https://img.shields.io/github/repo-size/LivioAlvarenga/studyPlanner" alt="repository size" /></a>
<p>

&nbsp;

---

&nbsp;
<a id="-vitrine-dev"></a>

## 📺 Vitrine Dev

| :placard: Vitrine.Dev |                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------- |
| :sparkles: Nome       | **Desenvolvendo um Planejador de Estudos com React, TypeScript, ViteJs e TailwindCss** |
| :label: Tecnologias   | React, TypeScript, TailwindCSS, ViteJs, NodeJs, JavaScript, HTML5, CSS3, Prettier      |
| :rocket: URL          | https://study-planner-livio-alvarenga.vercel.app/                                      |

---

&nbsp;
<a id="-tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto

&nbsp;

<p align="center">
  <a href= "https://html5.org/"><img alt="html 5 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E34F26&logo=HTML5&label=Markup Language&message=HTML5&color=E34F26"></a>
  <a href= "https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img alt="CSS 3 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1572B6&logo=CSS3&label=Style&message=CSS3&color=1572B6"></a>
  <a href= "https://tailwindcss.com/"><img alt="Tailwind CSS badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=06b6d4&logo=Tailwind CSS&label=Style&message=Tailwind CSS&color=06b6d4"></a>
  <a href= "https://www.typescriptlang.org/"><img alt="TypeScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=3178c6&logo=TypeScript&label=Language&message=TypeScript&color=3178c6"></a>
  <a href= "https://www.javascript.com/"><img alt="JavaScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7DF1E&logo=JavaScript&label=Language&message=JavaScript&color=F7DF1E"></a>
  <a href= "https://nodejs.org/en/"><img alt="Node.js badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=339933&logo=Node.js&label=Runtime Environment&message=Node.js&color=3139933"></a>
  <a href= "https://reactjs.org/"><img alt="React badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=61dafb&logo=React&label=Framework&message=React&color=61dafb"></a>
  <a href= "https://vitejs.dev/"><img alt="site Vite" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=646cff&logo=Vite&label=Tooling&message=Vite&color=646cff"></a>
  <a href= "https://code.visualstudio.com/download"><img alt="vscode download" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=007ACC&logo=Visual Studio Code&label=IDE&message=Visual Studio Code&color=007ACC"></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code formatter prettier" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7B93E&logo=Prettier&label=Code Formatter&message=Prettier&color=F7B93E"></a>
</p>

---

&nbsp;
<a id="-instalação"></a>

## ⚙️ Instalações

```bash
# Criando projeto com ViteJs e React e TypeScript
npm create vite@latest studyPlanner -- --template react-ts

# Instalando dependências
cd studyPlanner
npm install

# Instalando faker
npm install --save-dev @faker-js/faker

# Instalando arquitetura Tailwindcss
npm install -D tailwindcss postcss autoprefixer prettier prettier-plugin-tailwindcss

# Criando tailwind.config.cjs
npx tailwindcss init -p

# Editando npx tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

# Adicionando configuração Tailwindcss em index.css
@tailwind base;
@tailwind components;
@tailwind utilities

# Cria arquivo .prettierrc.json na raiz do projeto

# Inicia projeto
npm run dev
```

&nbsp;

---

&nbsp;
<a id="-funcionalidades"></a>

## ⚙️ Funcionalidades

- Input para adicionar Tarefa;
- Input para adicionar Tempo;
- Lista dinâmica de tarefas e tempo;
- Seleção de tarefas e adição de tempo em cronometro;
- Start de cronometro e identificação de concluído em lista de tarefas;
- Estilização moderna com conceitos avançados de CSS.

&nbsp;

### 🧭 Rodando a aplicação web (Modo desenvolvimento)

```bash
# Clone este repositório
$ git clone https://github.com/livioalvarenga/studyPlanner.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd studyPlanner
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# A aplicação será aberta na porta:5173 - acesse http://localhost:5173
```

&nbsp;

---

&nbsp;
<a id="-autor"></a>

## 🦸 Autor

Olá, eu sou Livio Alvarenga, Engenheiro de Produção | Dev Back-end e Front-end. Sou aficcionado por tecnologia, programação, processos e planejamento. Uni todas essas paixões em uma só profissão. Dúvidas, sugestões e críticas são super bem vindas. Seguem meus contatos.

- [www.livioalvarenga.com](https://livioalvarenga.com)
- contato@livioalvarenga.com

&nbsp;

<p align="center">
  <a href= "https://www.livioalvarenga.com/"><img alt="portifólio livio alvarenga" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/3109a24e71f07dbad193ae0ddbc43b69b39c7adf/files/badgePortifolioLivio.svg"></a>
  <a href= "https://www.linkedin.com/in/livio-alvarenga-planejamento-mrp-engenheiro-produ%C3%A7%C3%A3o-materiais-vba-powerbi/"><img alt="perfil linkedin livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=0A66C2&logo=LinkedIn&label=LinkedIn&message=Livio Alvarenga&color=0A66C2"></a>
  <a href= "https://twitter.com/AlvarengaLivio"><img alt="perfil twitter livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1DA1F2&logo=Twitter&label=Twitter&message=@AlvarengaLivio&color=1DA1F2"></a>
  <a href= "https://www.instagram.com/livio_alvarenga/"><img alt="perfil instagram livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E4405F&logo=Instagram&label=Instagram&message=@livio_alvarenga&color=E4405F"></a>
  <a href= "https://www.facebook.com/profile.php?id=100083957091312"><img alt="perfil facebook livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1877F2&logo=Facebook&label=Facebook&message=Livio Alvarenga&color=1877F2"></a>
  <a href= "https://www.youtube.com/channel/UCrZgsh8IWyyNrRZ7cjrPbcg"><img alt="perfil youtube livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=FF0000&logo=YouTube&label=Youtube&message=Livio Alvarenga&color=FF0000"></a>
</p>
<p align="center">
 <a href= "https://cursos.alura.com.br/vitrinedev/livioalvarenga"><img alt="perfil vitrinedev livio alvarenga" align="center" height="30" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/e0f5b5a82976af114d957c20f0c78b4d304a68a0/files/vitrinedev.svg"></a>
</p>

---

&nbsp;
<a id="-licença"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).

##### _#CompartilheConhecimento_
