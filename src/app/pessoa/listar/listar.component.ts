import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/shared/model/pessoa.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit {

  listaPessoas: Array<Pessoa>;
  listaPessoas$: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.listaPessoas$ = this.listarPessoas();
  }

  listarPessoas(): Observable<Pessoa[]> {
    return this.pessoaService.listar();
  }

  listarPessoasSubscribe(): void {
    this.pessoaService.listar().subscribe(
      (lista) => { // try
        this.listaPessoas = lista;
      },
      (err: Error) => { // catch
      console.log(err);
      });
  }

}
