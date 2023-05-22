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

## Aula 2

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
