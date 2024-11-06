import Projects from "@/components/app/Projects";
import ArrowIcon from "@/components/ArrowIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <div className="section-1 mt-5">
        <Projects />
        {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Meu Projectos
        </h1>
        <div className="mt-5 mb-2 items-center">
          <Link href="#" className="w-full flex my-4">
            <Card className="w-full flex">
              <CardHeader>
                <CardTitle>
                  Angofuel{" "}
                  <span className="italic text-sm text-gray-400">
                    - Sistema de Geolocalização de Postos de Combustíveis
                  </span>
                </CardTitle>

                <CardDescription className="text-justify">
                  Descrição do Sistema de Geolocalização de Postos de
                  Combustíveis. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Maiores repellat quaerat ducimus provident,
                  aliquid incidunt quasi illo praesentium? Placeat provident,
                  temporibus dolore aperiam ad consequatur deleniti. Aliquid
                  doloremque ab sapiente.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="#" className="w-full flex my-4">
            <Card className="w-full flex">
              <CardHeader>
                <CardTitle>
                  AngoTic{" "}
                  <span className="italic text-sm text-gray-400">
                    - Nome completo do Projecto
                  </span>
                </CardTitle>

                <CardDescription className="text-justify">
                  Descrição do Projecto. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Maiores repellat quaerat ducimus provident,
                  aliquid incidunt quasi illo praesentium? Placeat provident,
                  temporibus dolore aperiam ad consequatur deleniti. Aliquid
                  doloremque ab sapiente.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
        <p className="mb-4">
          <>
            <>1. Angofuel </>
            <>2. </>
            <>3. Site do GGPEN </>
            <>4. Site do CIAM </>
            <>5. Site do INFOSI </>
            <>6. Sistema de Gestão Escolar </>
            <>7. Aplicativo de Venda/Compra de Bolsas David Jones </>
            <>8. Sócia App </>
            <>9. App do Entregador </>
            <>Aplicativo de Venda/Compra de Bolsas David Jones</>
            <>
              10. Aplicativo de Venda/Compra de Produtos da Kosmos MarketPlace{" "}
            </>
            <>11. Plataforma de Análise de Mercado de negócio </>
            <>12. Carteira Digital da Sodiam </>
            <>13. Pagio Plataforma de gerenciamento de leituras </>
            <>14. Sistema de Gestão de Vendas de Bilhetes Online </>
            <>15. Sistema de Gestão Hospitalar para Triagens Rápidas</>
          </>
        </p> */}
      </div>
    </section>
  );
}
