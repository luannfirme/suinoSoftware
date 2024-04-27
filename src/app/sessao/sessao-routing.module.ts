import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroSessaoComponent } from "./cadastro-sessao/cadastro-sessao.component";
import { EditarSessaoComponent } from "./editar-sessao/editar-sessao.component";
import { ListagemSessoesComponent } from "./listagem-sessoes/listagem-sessoes.component";
import { DetalhesSessaoComponent } from "./detalhes-sessao/detalhes-sessao.component";

const routes: Routes = [
    {path: 'cadastrar', component: CadastroSessaoComponent},
    {path: 'editar/:id', component: EditarSessaoComponent},
    {path: 'listar', component: ListagemSessoesComponent},
    {path: 'detalhes/:id', component: DetalhesSessaoComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessaoRoutingModule { }