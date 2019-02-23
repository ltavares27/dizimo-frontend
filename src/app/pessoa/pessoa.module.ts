import { ReactiveFormsModule } from '@angular/forms';
import { PessoaRoutingModule } from './pessoa-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PessoaService } from './pessoa.service';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  declarations: [
    CadastrarComponent,
    ListarComponent,
    DetalheComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
