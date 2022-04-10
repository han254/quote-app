import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { quotesComponent } from './quotes/quotes.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { MyvotesComponent } from './myvotes/myvotes.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    quotesComponent,
    HighlightDirective,
    QuoteDetailsComponent,
    QuoteFormComponent,
    MyvotesComponent,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
