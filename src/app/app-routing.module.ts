import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecretListComponent} from './list-secrets/secret-list.component';
import {AddSecretComponent} from './add-secret/add-secret.component';

const routes: Routes = [
  {path: 'secrets', component: SecretListComponent},
  {path: 'addsecret', component: AddSecretComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
