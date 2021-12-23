import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public msgErro: string = '';
  public carregando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
  ) {
    this.form = this.fb.group({
      login: [null, Validators.compose([Validators.required, Validators.email,])],
      senha:[null, Validators.required]
    });
   }

  ngOnInit(): void {
  }
  async submit():Promise<void>{
    if(this.form.invalid){
      return;
    }

    this.carregando = true;
    try {
      // autenticar usuario e salvar o token de autorizacao
      throw new Error('teste')
    } catch (e) {
      this.msgErro = e.error && e.error.message
      ? e.error.message
      :'Ocorreu algum erro ao realizar o login';
    } finally {
    this.carregando = false;
    }
  }
}
