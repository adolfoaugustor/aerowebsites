# Aerowebsites - GitHub Pages with Claude Code Automation

Este repositório contém o layout do site Aerowebsites com efeito Matrix, integrado com Claude Code para automação de desenvolvimento usando agentes, skills e GitHub MCP.

## Visão Geral do Projeto

Este projeto vai além de um simples site estático, incorporando automação inteligente através do Claude Code. Ele utiliza:

- **Agentes especializados** para revisão de código, gerenciamento de Git e planejamento de tarefas
- **Skills configuráveis** para desenvolvimento fullstack, especificação de requisitos e teste de aplicações web
- **Integração com GitHub MCP** para operações automáticas de commit, push e pull requests
- **Configurações personalizadas** do Claude Code para otimizar fluxos de trabalho

## 🚀 Começando

### Pré-requisitos

1. Conta no GitHub com acesso ao repositório
2. Claude Code instalado e configurado
3. Token de acesso pessoal do GitHub com permissões de repositório
4. Node.js (para algumas skills de teste)

### Configuração Inicial

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/aerowebsites.github.io.git
   cd aerowebsites
   ```

2. **Configure as variáveis de ambiente** (já configuradas em `.claude/settings.local.json`)
   - As configurações já incluem tokens para OpenRouter e GitHub
   - Verifique se os tokens são válidos e têm as permissões necessárias

3. **Ative o GitHub Pages**
   - Acesse o repositório no GitHub
   - Vá em **Settings** > **Pages**
   - Em **Source**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`
   - Clique em **Save**

4. **Acesse seu site**
   - Após alguns instantes, seu site estará disponível em: `https://seu-usuario.github.io/aerowebsites/`

## 🤖 Como o Claude Code Funciona Neste Projeto

### Configurações do Claude Code

As configurações estão localizadas em `.claude/settings.local.json`:

```jsonc
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://openrouter.ai/api",
    "ANTHROPIC_AUTH_TOKEN": "sk-or-v1-...",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "tencent/hy3-preview:free",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "nvidia/nemotron-3-super-120b-a12b:free",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "nvidia/nemotron-3-super-120b-a12b:free"
  },
  "permissions": {
    "allow": [
      "Bash(git add *)",
      "Bash(git commit *)",
      "Bash(git push *)"
    ]
  },
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["github"]
}
```

### Skills Disponíveis

As skills estão em `.claude/skills/` e incluem:

1. **frontend-design** - Cria interfaces web com alta qualidade de design
2. **programador-fullstack** - Especialista em PHP/Laravel para desenvolvimento fullstack
3. **sdd-spec** - Spec-Driven Development para documentação de requisitos
4. **software-architecture** - Avaliação e criação de arquitetura de software
5. **webapp-testing** - Testes de aplicações web com Playwright

Para usar uma skill:
```
/skill nome-da-skill
```

### Agentes Especializados

Os agentes estão em `.claude/agents/` e incluem:

1. **code-reviewer** - Revisa código focado em segurança, performance e manutenibilidade
2. **git-commit** - Gerencia commits, branches e pull requests
3. **task-planner** - Quebra tarefas complexas em subtarefas gerenciáveis

Para invocar um agente:
```
@agent-nome-da-agente sua solicitação aqui
```

### Integração com GitHub MCP

O projeto utiliza GitHub MCP (Model Context Protocol) para operações automáticas:

- Configurado em `.mcp.json` com url `https://api.githubcopilot.com/mcp`
- Permite que agentes realizem operações Git sem intervenção manual
- Operations suportadas: commit, push, criação de branches, pull requests

## 🔄 Fluxo de Trabalho Típico

1. **Desenvolvimento**
   - Modifique o código conforme necessário
   - Use skills para melhorar a qualidade (ex: `/skill frontend-design` para melhorar UI)

2. **Revisão**
   - Solicite revisão de código: `@agent-code-reviewer revise minhas mudanças`
   - O agente analisa segurança, performance e manutenibilidade

3. **Planejamento**
   - Para mudanças complexas: `@agent-task-planner planeje a implementação da feature X`
   - Cria um plano detalhado com subtarefas

4. **Versionamento**
   - Após aprovação: `@agent-git-commit faça commit das mudanças`
   - O agente cria commits atômicos seguindo Conventional Commits
   - Faz push automaticamente e pode criar pull requests

## 📁 Estrutura do Repositório

```
.
├── index.html          # Página principal com efeito Matrix
├── README.md           # Este arquivo
├── .gitignore          # Arquivos e diretórios ignorados pelo Git
├── .mcp.json           # Configuração do GitHub MCP
└── .claude/
    ├── settings.local.json    # Configurações do Claude Code
    ├── agents/                # Agentes especializados
    │   ├── code-reviewer.md
    │   ├── git-commit.md
    │   └── task-planner.md
    └── skills/                # Skills configuráveis
        ├── frontend-design/
        ├── programador-fullstack/
        ├── sdd-spec/
        ├── software-architecture/
        └── webapp-testing/
```

## 🎨 Personalização

Para alterar o conteúdo do site, edite o arquivo `index.html`:
- O título está na tag `<title>` e no `<h1>`
- O parágrafo descriptivo está na tag `<p>`
- As cores e efeitos podem ser ajustados no CSS dentro da tag `<style>`

### Efeito Matrix

O site inclui um efeito Matrix personalizado com:
- Caracteres semelhantes a código
- Tema verde sobre fundo preto
- Responsivo para diferentes tamanhos de tela

## 🛠️ Comandos Úteis do Claude Code

### Skills
```
/skill sdd-spec              # Inicia o processo de especificação de requisitos
/frontend-design             # Melhora o design de componentes web
/programador-fullstack       # Assistência em desenvolvimento PHP/Laravel
/webapp-testing              # Cria e executa testes de aplicações web
```

### Agentes
```
@agent-code-reviewer         # Solicita revisão de código
@agent-git-commit            # Gerencia operações Git
@agent-task-planner          # Planea tarefas complexas
```

### Outros Comandos
```
/help                        # Mostra ajuda do Claude Code
/config                      # Abre configurações do Claude Code
/mcp                         # Gerencia servidores MCP
```

## 📝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. Faça suas mudanças
4. Use o agente git-commit para criar commits: `@agent-git-commit feat: adiciona nova feature`
5. Faça push para sua branch
6. Abra um pull request

## 🐛 Suporte

Para problemas ou sugestões, abra uma issue neste repositório.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

---

*Documentação gerada com auxílio do Claude Code e skills de especificação de requisitos.*