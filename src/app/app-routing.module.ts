import { ComprarComponent } from './components/comprar/comprar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SaibaMaisComponent } from './components/saiba-mais/saiba-mais.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'saiba-mais/:indice' , component: SaibaMaisComponent},
  { path: '', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'comprar', component: ComprarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
