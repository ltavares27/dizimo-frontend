import { Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { Endereco } from 'src/app/shared/model/endereco.model';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html'
})
export class DetalheComponent implements OnInit {

  @Input() pessoa: Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private location: Location
    ) {
      this.pessoa = new Pessoa();
     }

  ngOnInit() {
    this.getPessoa();
  }

  getPessoa(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pessoaService.getPessoa(id)
    .subscribe(pessoa => this.pessoa = pessoa);
  }
  goBack(): void {
    this.location.back();
  }
}
