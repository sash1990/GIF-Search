import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './helpers/api.service';
// import { NgxMasonryModule } from 'ngx-masonry';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import NgMasonryGridModule
import { NgMasonryGridModule } from 'ng-masonry-grid';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    NgMasonryGridModule,
    // BrowserAnimationsModule,
    // NgxMasonryModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
