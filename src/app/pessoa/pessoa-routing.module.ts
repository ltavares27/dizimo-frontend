import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const pessoaRoutes: Routes = [
  { path: 'cadastro', component: CadastrarComponent },
  { path: 'listar', component: ListarComponent }

];

@NgModule({
  imports: [RouterModule.forChild(pessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
