import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsultaHistoricoComponent } from "./consulta-historico/consulta-historico.component";
import { ListagemHistoricoComponent } from "./listagem-historico/listagem-historico.component";
import { GraficoPesoComponent } from "./grafico-peso/grafico-peso.component";
import { GraficoAtividadeComponent } from "./grafico-atividade/grafico-atividade.component";

const routes: Routes = [
    {path: 'consultar', component: ConsultaHistoricoComponent},
    {path: 'listar/:id', component: ListagemHistoricoComponent},
    {path: 'grafico/peso/:id', component: GraficoPesoComponent},
    {path: 'grafico/atividade/:id', component: GraficoAtividadeComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HistoricoRoutingModule { }