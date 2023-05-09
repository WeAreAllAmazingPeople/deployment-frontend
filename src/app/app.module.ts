import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecretService} from './secret.service';
import {HttpClientModule} from '@angular/common/http';
import {SecretListComponent} from './list-secrets/secret-list.component';
import {AddSecretComponent} from './add-secret/add-secret.component';
import {FormsModule} from '@angular/forms';
import { ScoreOverviewComponent } from './score-overview/score-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SecretListComponent,
    AddSecretComponent,
    ScoreOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [SecretService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
