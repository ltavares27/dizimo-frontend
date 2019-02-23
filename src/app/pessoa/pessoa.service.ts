import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../shared/model/pessoa.model';

import { httpOptions } from '../shared/config/config';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class PessoaService {
  constructor(private http: HttpClient) {}
  urlApi = 'https://dizimo-app.herokuapp.com/';

  cadastrar(pessoa: Pessoa): Observable<Pessoa> {
    const urlCadastrar = this.urlApi + 'pessoas/save';
    console.log(pessoa);
    return this.http.post<Pessoa>(urlCadastrar, pessoa, httpOptions);
    }

  listar(): Observable<Pessoa[]> {
    const urlBuscarTodos = this.urlApi + 'pessoas/list';
    return this.http.get<Pessoa[]>(urlBuscarTodos);
      //.pipe(catchError(null)); aqui da pra capturar erro
  }
  getPessoa(id: number): Observable<Pessoa> {
    const urlDetalhe = this.urlApi + 'pessoas/get/' + id;
    return this.http.get<Pessoa>(urlDetalhe);
    //throw new Error("Method not implemented.");
  }
}
