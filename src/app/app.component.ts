import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'dizimo-frontend';
  formTeste: FormGroup;

  ngOnInit(){
    this.initForm();
  }

  initForm(): void {
    this.formTeste = new FormGroup({
      email: new FormControl('', [Validators.email])
    });
  }

  teste(): void {
    alert('UM TROUXA CLICOU!!!!!!!');
  }
}
