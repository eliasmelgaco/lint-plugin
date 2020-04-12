# @stilingue/eslint-plugin
Style Guide - Plugin ESLint para projetos stilingue em Javascript

Javascript
CSS & SASS

## Instalation

É necessário instalar 

[ESLint](http://eslint.org):

```
$ npm install eslint --save-dev

# Ou

$ yarn add eslint --dev
```

[eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json):

```
$ npm install eslint-plugin-json --save-dev

# Ou

$ yarn add eslint-plugin-json --dev
```

[confusing-browser-globals](https://www.npmjs.com/package/confusing-browser-globals):

```
$ npm install confusing-browser-globals --save-dev

# Ou

$ yarn add confusing-browser-globals --dev
```

[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import):

```
$ npm install eslint-plugin-import --save-dev

# Ou

$ yarn add eslint-plugin-import --dev
```

Depois, instalar `@stilingue/eslint-plugin`

**Nota** Se você instalou o eslint globalmente (usando a flag `g`), você deve instalar o `@stilingue/eslint-plugin`, `eslint-plugin-import` e `eslint-plugin-json` globalmente também.

## Uso

### Plugin

Adicionar `@stilingue` na seção de plugins no arquivo `.eslintrc`.

```json
{
  "plugins": [
    "@stilingue"
  ]
}
```

### Configs

Adicionar configurações na seção extends no arquivo `.eslintrc`

```json
{
  "extends": [
    "plugin:@stilingue/recommended"
  ]
}
```

### Configurações disponíveis

- `plugin:@stilingue/recommended` - JS regras recomendadas
- `plugin:@stilingue/style` - CSS & SASS/styles regras recomendadas
