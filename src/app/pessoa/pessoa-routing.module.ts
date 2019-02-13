import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const pessoaRoutes: Routes = [
  { path: 'cadastro', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(pessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
