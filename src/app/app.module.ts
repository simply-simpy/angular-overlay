import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {LoaderComponent} from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent]
})
export class AppModule {
}
