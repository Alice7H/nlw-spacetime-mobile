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
