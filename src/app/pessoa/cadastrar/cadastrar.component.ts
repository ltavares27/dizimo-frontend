import { PessoaService } from './../pessoa.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/model/pessoa.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html'
})
export class CadastrarComponent implements OnInit {

  constructor(private pessoaService: PessoaService) { }

  formTeste: FormGroup;
  pessoaServidor: Pessoa;

  ngOnInit() {
    this.initForm();
  }

  cadastrar(): void {
    if (this.formTeste.valid) {
      this.pessoaService.cadastrar(this.formTeste.value).subscribe((pessoa) => {
        console.log(pessoa);
        this.pessoaServidor = pessoa;
        console.log(this.pessoaServidor);
    });
    } else {
      alert('Formulario invalido!');
    }
    console.log(this.formTeste.value);
  }

  initForm(): void {
    this.formTeste = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      endereco: new FormGroup({
        logradouro: new FormControl('', [Validators.required]),
        numero: new FormControl('', [Validators.required]),
        cep: new FormControl('', [Validators.required]),
        cidade: new FormControl('', [Validators.required]),
        estado: new FormControl('', [Validators.required])
      })
    });
  }
}
