# NLW Spacetime - Mobile (Trilha ignite)

## Aula 1 - Iniciando o projeto

- Expo
- NativeWind
- ESLint + Prettier Tailwind

Por padrão usamos o css in js no react native, mas neste projeto aplicamos o tailwind CSS, para isso, informamos o comando `npm i nativewind` e `npm i tailwindcss -D` no terminal.

Para criar o arquivo `tailwind.config.js` usamos o comando `npx tailwindcss init`, dentro do arquivo criado, adicionamos os caminhos a todos os arquivos de componentes.

Adicionamos o plugin babel ao arquivo de configuração do babel: `babel.config.js`.

E, como estamos usamos o typescript, ao invés de criar um arquivo app.d.ts referenciando os tipos, utilizamos o `tsconfig.json`.

Assim como no servidor e na parte web, utilizamos as configurações de análise de código da Rocketseat, e o plugin prettier tailwind com os comandos:`npm i @rocketseat/eslint-config -D` e
`npm i prettier-plugin-tailwindcss -D`, respectivamente.

## Aula 2 - Layout

- Configurações de fontes
- Blur background
- Stripes svg
- Seção Hero
- Copyright

### Fontes

Na configuração de fontes, utilizamos o expo google fonts Roboto e Bai-Jumjeree.

### Import de PNG

Para o blur, existe configurações que não são suportadas pelo react-native, por isso utilizamos uma imagem.

O typescript passa por um processo que o compilador usa para descobrir a que se refere uma importação, chamamos esse processo de `Resolução de módulos`, quando não encontramos a referência temos o erro semelhante a `cannot find module file-name.png`, para isso, em um arquivo chamado `assets.d.ts` declaramos a imagem como um formato png.

### Import de SVG

Para importar arquivos svg no React Native para transformar imagens SVG em componentes React
instalamos o `react-native-svg` e do `react-native-svg-transformer` (referenciado na documentação da Expo). Isso torna possível usar o mesmo código para React Native e Web.

Configuramos o empacotador Metro de acordo com a versão para Expo através do arquivo `metro.config.js`.

E com estamos usando o Typescript, precisamos referenciá-lo, descrito no [React Native SVG transformer](https://github.com/kristerkari/react-native-svg-transformer).

## Aula 3 - Autenticação

- Instalação do `expo-auth-session`
- Configuração Github OAuth (Expo)
- Obtendo Github `code` mobile
- Salvando token no secure store
- Navegando usuário
- Utilizando Expo Router
- Personalizando rota inicial do app

Seguimos a documentação para a instalação do expo auth session com o comando `npx expo install expo-auth-session expo-crypto`

No dispositivo móvel, o WebBrowser vai ser aberto ao invés de uma página de redirecionamento ao Login do Github. `npx expo install expo-web-browser`

Como a aplicação mobile não possui cookies, usamos o secure store com o comando `npx expo install expo-secure-store`.

Na [documentação](https://expo.github.io/router/docs/), está escrito para usar o comando `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler` para usar as rotas.

## Aula 4 - Rotas e Nova memória

- Definindo layout das rotas
- Personalizando rota inicial do app
- Página de nova memória

O componente `Slot` do expo-router renderizará as rotas filhas, mas como teremos outras páginas, usamos o componente `Stack` para fazer a parte de navegação de rotas em 'pilha'.

O react native possui o hook `useSafeAreaInsets` que fornece informações de inserção de área segura do dispositivo, assim podemos posicionar os elementos de interface adequadamente.

## Aula 5 - Criação e listagem

- Selecionando imagem da galeria
- Preview da imagem
- Criando nova memória
- Layout da listagem
- Botão de logout
- Buscando memórias da API

Instalamos o expo-image-picker para acessar imagens da galeria ou as fotos da câmera para isso executamos o `npx expo install expo-image-picker`

Usamos a biblioteca 'dayjs' para manipular datas na aplicação, executamos o comando para `npm install dayjs` instalá-lo.
