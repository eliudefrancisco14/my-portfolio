# eliudefrancisco.com

Portfólio de Eliúde Francisco, Desenvolvedor de Software · Aplicações de Dados.

## Stack

- Vite + React + TypeScript + Tailwind CSS + framer-motion
- Página inicial pré-renderizada no build (`src/entry-server.tsx` + `scripts/prerender.mjs`) para SEO e pré-visualizações de links
- Formulário de contacto numa função da Vercel (`api/contact.ts`) que envia email pelo [Resend](https://resend.com)
- Publicado na Vercel, domínio `eliudefrancisco.com`

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:8080
npm test           # testes (validação do formulário e função de contacto)
npm run typecheck
npm run build      # gera dist/ com a página pré-renderizada
```

O formulário só envia emails na Vercel (ou com `vercel dev`), porque depende da função `api/contact.ts`.

## Variáveis de ambiente (Vercel → Settings → Environment Variables)

| Nome | Obrigatória | Descrição |
| --- | --- | --- |
| `RESEND_API_KEY` | Sim | Chave da API do Resend |
| `CONTACT_TO_EMAIL` | Não | Para onde vão as mensagens (por defeito o email pessoal) |
| `CONTACT_FROM_EMAIL` | Não | Remetente, num domínio verificado no Resend |

## Onde editar o conteúdo

Textos, projetos, experiência e competências estão todos em `src/data/portfolio.ts`.
Imagens dos projetos em `public/projects/` (formato `.webp`, 1280 px de largura).

## Histórico

A versão anterior em Next.js está guardada no branch `legacy-nextjs`.
