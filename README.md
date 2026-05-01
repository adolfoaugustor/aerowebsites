# Aerowebsites - GitHub Pages Setup

Este repositório contém o layout do site Aerowebsites, pronto para ser hospedado no GitHub Pages.

## Como configurar

1. **Faça um fork ou clone este repositório**
   ```bash
   git clone https://github.com/seu-usuario/aerowebsites.github.io.git
   ```

2. **Certifique-se de que o arquivo `index.html` está na raiz do repositório**
   - Este repositório já contém o `index.html` na raiz

3. **Ative o GitHub Pages**
   - Acesse o repositório no GitHub
   - Vá em **Settings** > **Pages**
   - Em **Source**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`
   - Clique em **Save**

4. **Acesse seu site**
   - Após alguns instantes, seu site estará disponível em: `https://seu-usuario.github.io/aerowebsites/`
   - Se o repositório for nomeado como `seu-usuario.github.io`, o site estará em: `https://seu-usuario.github.io`

## Estrutura do repositório

```
.
├── index.html          # Página principal com efeito Matrix
└── README.md           # Este arquivo
```

## Personalização

Para alterar o conteúdo do site, edite o arquivo `index.html`:
- O título está na tag `<title>` e no `<h1>`
- O parágrafo descriptivo está na tag `<p>`
- As cores e efeitos podem ser ajustados no CSS dentro da tag `<style>`

## Efeito Matrix

O site inclui um efeito Matrix personalizado com caracteres semelhantes a código, tema verde sobre fundo preto, responsivo para diferentes tamanhos de tela.

## Suporte

Para problemas ou sugestões, abra uma issue neste repositório.