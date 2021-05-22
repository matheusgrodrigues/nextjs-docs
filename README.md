# Leitura da documentação do Next.js

- [Sobre](#sobre)
- [Configurar](#configurar)
  - [Criar um novo projeto](#criar-um-novo-projeto)
  - [Iniciando o servidor](#iniciando-o-servidor)
- [Criar paginas](#criar-paginas)
- [Links](#links)
- [Imagens](#imagens)
- [Head](#head)
- [Css](#css)
- [Sass](#sass)
- [Pré-renderização e busca de dados](#pre-renderizacao-e-busca-de-dados)
- [Typescript](#typescript)

## Sobre

**Next.js** é um framework da biblioteca ReactJS, a ideia por traz dele é facilitar o desenvolvimento de aplicativos que utilizam React. O Next.js fornece uma estrutura organizada de arquivos, pastas e configurações para facilitar o desenvolvimento de novos projetos, e facilitar o trabalho em equipe.


O Next.js fornece configurações pré estabelecidadas, algumas delas são:

- Sistema de roteamento dinâmico (baseado em páginas)
- Pré rendenização
- Divisão de código automatico para carregamento de página mais rápido
- Roteamento do lado do cliente com pré busca otimizada
- Css e Suporte a Sass integrado e suporte para qualquer biblioteca CSS-in-JS
- Ambiente de desenvolvimento com Fast Refresh
- Rotas de API para construir endpoints de API com funções sem servidor
- Totalmente extensível (Poderá adicionar mais funcionalidades ao Next.js)

## Configurar

- **Pré requisitos**
  - Node.js versão 10.13 ou superior

--- 
### Criar um novo projeto

> npx create-next-app Next.js-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

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

Uma página no Next.js é equivalente a pasta/arquivo específico, por exemplo, já temos o arquivo pages/index.js que representa a pagina principal do sistema, abaixo alguns exemplos:

- pages/index.js - rota: '/'
- pages/posts/first-post.js - rota: '/posts/first-post 
  - O componente pode ter qualquer nome, mas é necessário exportá-lo como 'default'

--- 

## Links

Em Next.js, utiliza-se o component 'link' que é importado de 'next/link' para embrulhar o '\<a>' ancora do html.

#### Utilizando

- > import Link from 'next/link'
- > \<Link href="url">texto do link</Link>

## Imagens

O Next.js carrega imagens sob demanda, ou seja, só carrega as imagens que estão visíveis na tela do usuário, e ao rolar o mouse, carrega as novas imagens.

O Next.js também possui um component para lidar com imagens responsivas, o component 'Image', basta adicionar o tamanho proporcional ao que seria a imagem que o Next.js se encarrega de manter a qualidade, e também não deixa ultrapassar o tamanho da viewport da tela do usuário, evitando barras de scroll indesejadas.

O Next.js sempre aponta para dentro da pasta public/, ou seja, para carregar uma imagem da pasta images ficaria, /images/image.jpg.

- > import Image from 'next/image'
- > \<Image src="url" width="value" height="value" alt="text alt"></Image>

## Head

O Next.js possui um component Head, que é reponsável por alterar a \<head> tag o html, nela podemos alterar o \<title> favicon, adicionar scripts etc. 

Caso queira alterar o \<html> tag, para mudar o 'lang' por exemplo, é necessário criar um arquivo de configuração.

##  CSS

O Next.js possui suporte nativo a css, sass, ele utiliza o conceito de CSS-in-JS, que é o css dentro de components JSX.

## SASS

O Next.js permite que import Sass usando '.scss e '.sass' extensão, mas antes deverá instalar o suporte ao sass com o seguinte comando:

> npm install sass

## Pre renderizacao e busca de dados

### Pre renderizacao

Por padrão, o Next.js gera o HTML para cada página com antecedência, esse html gerado, é associado ao código javascript mínimo necessário para essa página. Quando uma página é carregada pelo navegador, seu código JavaScript é executado e torna a página totalmente interativa. (Esse processo é chamado de **hidrataçao**).

Com esse recurso, o next.js permite que o seu aplicativo seja renderizado sem JavaScript. Permitindo que você veja a interface do usuário sem executar o JavaScript, isso pode resultar em melhor desempenho de SEO.

### Formas de pre renderizacao

#### Geração estatica

É o método de pré renderização, que gera o HTML no momento da construção. O HTML pré renderizado é então **reutilizado em cada soliticação**.

#### Renderizacao do lado do servidor
É o método de pré renderização que gera o HTML em **cada solicitação**.

#### Quando usar geracao estatica x renderizacao do lado do servidor

- **Geração estática**
- Páginas de marketing
- Postagens no blog
- Listagens de produtos de comércio eletrônico
- Ajuda e documentação

- **Renderizacao do lado do servidor**
- Quando precisamos que os dados estejam sempre atualizados

### Geracao estatica com getStaticProps

Em Next.js, quando você exporta um componente de página, você também pode exportar um `async` funcção chamada `getStaticProps`. Ao fazer isso, então:

- `getStaticProps` é executado em tempo de construção na produção
- Dentro da função, você pode buscar os dados externos e enviá-los como adereços para a página.

## Typescript 

O Next.js possui suporte integrado a Typescript, para utilizar é necessário algumas configurações, vamos lá !

- Crie um arquivo tsconfig.json
- Instalar a biblioteca para rodar o typescript
- > npm install --save-dev typescript @types/react
- Criar o arquivo 'next-env.d.ts, que garante que os tipos Next.js sejam lidos pelo compilador do Typescript, **Não alterar este arquivo**
