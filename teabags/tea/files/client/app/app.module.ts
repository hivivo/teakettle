import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { RoutingModule } from './routing.module';
import { TestService } from './services/test.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FlexLayoutModule,
    MatToolbarModule, MatCardModule, MatProgressSpinnerModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
