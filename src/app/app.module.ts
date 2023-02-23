import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameListComponent } from './game-list/game-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import {TokenInterceptor} from "./services/token.interceptor";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    GameListComponent,
    ShortenPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSortModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
