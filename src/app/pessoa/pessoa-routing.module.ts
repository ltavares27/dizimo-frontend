import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheComponent } from './detalhe/detalhe.component';

const pessoaRoutes: Routes = [
  { path: 'cadastro', component: CadastrarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'detalhe/:id', component: DetalheComponent }

];

@NgModule({
  imports: [RouterModule.forChild(pessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
