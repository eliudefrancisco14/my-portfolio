import { renderToString } from "react-dom/server";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";

// Usado só no build: gera o HTML estático da página inicial,
// para que motores de busca e pré-visualizações de links vejam o conteúdo sem JavaScript.
export function render() {
  return renderToString(
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  );
}
