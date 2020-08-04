import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { VotesComponent } from './votes/votes.component';
import { FooterComponent } from './footer/footer.component';
import { CandidatesService } from './services/candidates.service';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { SpeakComponent } from './speak/speak.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    VotesComponent,
    FooterComponent,
    SpeakComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
