import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroPesoComponent } from "./cadastro-peso/cadastro-peso.component";
import { ControlePesoComponent } from "./controle-peso/controle-peso.component";
import { EditarPesoComponent } from "./editar-peso/editar-peso.component";

const routes: Routes = [
    {path: 'cadastrar', component: CadastroPesoComponent},
    {path: 'consultar', component: ControlePesoComponent},
    {path: 'editar/:id', component: EditarPesoComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PesoRoutingModule { }