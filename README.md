# Template React + Vite + Tailwind para GitHub Pages (Org)

Este projeto é um template de site institucional para uma organização no GitHub Pages.

## 1. Instalar dependências

```bash
npm install
```

## 2. Correr localmente

```bash
npm run dev
```

## 3. Gerar build

```bash
npm run build
```

A pasta gerada será `dist/`.

## 4. Publicar no GitHub Pages da organização

Cria um repositório com este nome exato:

```bash
nome-da-org.github.io
```

Exemplo:

```bash
404.github.io
```

Depois tens duas opções:

### Opção A — publicar a pasta `dist`
Fazes o build localmente e envias o conteúdo da pasta `dist/` para o branch que estiver configurado para o GitHub Pages.

### Opção B — GitHub Actions
Podes configurar um workflow para fazer deploy automático sempre que fizeres push.

## 5. Personalização rápida

Edita estes pontos:

- `src/App.jsx` → textos, secções e conteúdos
- `index.html` → título e descrição
- links de contacto
- nome da organização

## Nota

Se o site for publicado na raiz `https://nome-da-org.github.io`, não precisas de mexer no `base` do Vite.
