import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroSuinoComponent } from "./cadastro-suino/cadastro-suino.component";
import { EditarSuinoComponent } from "./editar-suino/editar-suino.component";
import { ListagemSuinosComponent } from "./listagem-suinos/listagem-suinos.component";

const routes: Routes = [
    {path: 'cadastrar', component: CadastroSuinoComponent},
    {path: 'editar/:id', component: EditarSuinoComponent},
    {path: 'listar', component: ListagemSuinosComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuinoRoutingModule { }