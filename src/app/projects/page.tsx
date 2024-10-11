import ArrowIcon from "@/components/ArrowIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <section>
      <div className="section-1 mt-5">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Meu Projectos
        </h1>
        <div className="mt-5 flex items-center">
          <Card>
            <CardHeader>
              <CardTitle>Angofuel</CardTitle>
              <CardDescription>
                Sistema de Geolocalização de Postos de Combustíveis
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="#"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Link do Projecto</p>
              </a>
            </CardFooter>
          </Card>
        </div>

        <p className="mb-4">
          <ul>
            <li>1. Angofuel </li>
            <li>2. AngoTic </li>
            <li>3. Site do GGPEN </li>
            <li>4. Site do CIAM </li>
            <li>5. Site do INFOSI </li>
            <li>6. Sistema de Gestão Escolar </li>
            <li>7. Aplicativo de Venda/Compra de Bolsas David Jones </li>
            <li>8. Sócia App </li>
            <li>9. App do Entregador </li>
            <li>
              10. Aplicativo de Venda/Compra de Produtos da Kosmos MarketPlace
            </li>
            <li>11. Plataforma de Análise de Mercado de negócio </li>
            <li>12. Carteira Digital da Sodiam </li>
            <li>13. Pagio Plataforma de gerenciamento de leituras </li>
            <li>14. Sistema de Gestão de Vendas de Bilhetes Online </li>
            <li>15. Sistema de Gestão Hospitalar para Triagens Rápidas</li>
          </ul>
        </p>
      </div>
    </section>
  );
}
