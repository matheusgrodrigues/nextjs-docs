# Leitura da documentação do NextJS

## Sobre

**Nextjs** é um framework da biblioteca ReactJS, a ideia por traz dele é facilitar o desenvolvimento de aplicativos que utilizam React. O Nextjs fornece uma estrutura organizada de arquivos, pastas e configurações para facilitar o desenvolvimento de novos projetos, e facilitar o trabalho em equipe.

O Nextjs fornece configurações pré estabelecidadas, algumas delas são:

- Sistema de roteamento dinâmico (baseado em páginas)
- Pré rendenização
- Divisão de código automatico para carregamento de página mas rápido
- Roteamento do lado do cliente com pré busc otimizada
- Css e Suporte a Sass integrado e suporte para qualquer biblioteca CSS-in-JS
- Ambiente de desenvolvimento com Fast Refresh
- Rotas de API para construir endpoints de API com funções sem servidor
- Totalmente extensível (Poderá adicionar mais funcionalidades ao Nextjs)

## Configurar

- **Pré requisitos**
  - Node.js versão 10.13 ou superior

--- 
### Criar um novo projeto

> npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

---

### Iniciando o servidor 

Entre na pasta do projeto e execute

- > cd pasta-projeto
- > npm run dev (desenvolvimento) 
- > npm run build (gerar build para produção)
- > npm start (executar o projeto que foi compilado para produção (build))

acessar url https://localhost:3000 para visualizar o projeto

---

## Criar paginas

Uma página no Nextjs é equivalente a pasta/arquivo específico, por exemplo, já temos o arquivo pages/index.js que representa a pagina principal do sistema, abaixo alguns exemplos:

- pages/index.js - rota: '/'
- pages/posts/first-post.js - rota: '/posts/first-post 
  - O componente pode ter qualquer nome, mas é necessário exportá-lo como 'default'

--- 

## Links

Em nextjs, utiliza-se o component 'link' que é importado de 'next/link' para embrulhar o '\<a>' ancora do html.

#### Utilizando

- > import Link from 'next/link'
- > \<Link href="url">texto do link</Link>

## Imagens

O Nextjs carrega imagens sob demanda, ou seja, só carrega as imagens que estão visíveis na tela do usuário, e ao rolar o mouse, carrega as novas imagens.

O Nextjs também possui um component para lidar com imagens responsivas, o component 'Image', basta adicionar o tamanho proporcional ao que seria a imagem que o nextjs se encarrega de manter a qualidade, e também não deixa ultrapassar o tamanho da viewport da tela do usuário, evitando barras de scroll indesejadas.

O Nextjs sempre aponta para dentro da pasta public/, ou seja, para carregar uma imagem da pasta images ficaria, /images/image.jpg.

- > import Image from 'next/image'
- > \<Image src="url" width="value" height="value" alt="text alt"></Image>

## Head

O Nextjs possui um component Head, que é reponsável por alterar a \<head> tag o html, nela podemos alterar o \<title> favicon, adicionar scripts etc. 

Caso queira alterar o \<html> tag, para mudar o 'lang' por exemplo, é necessário criar um arquivo de configuração.

##  CSS

O Nextjs possui suporte nativo a css, sass, ele utiliza o conceito de CSS-in-JS, que é o css dentro de components JSX.

### SASS

O Nextjs permite que import Sass usando '.scss e '.sass' extensão, mas antes deverá instalar o suporte ao sass com o seguinte comando:

> npm install sass

### Typescript 

O Nextjs possui suporte integrado a Typescript, para utilizar é necessário algumas configurações, vamos lá !

- Crie um arquivo tsconfig.json
- Instalar a biblioteca para rodar o typescript
- > npm install --save-dev typescript @types/react
- Criar o arquivo 'next-env.d.ts, que garante que os tipos Next.js sejam lidos pelo compilador do Typescript, **Não alterar este arquivo**