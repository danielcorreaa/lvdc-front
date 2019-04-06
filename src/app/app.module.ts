import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeModule } from './filmes/filme.module';
import { ErrorsModule } from './errors/errors.module';
import { SinginComponent } from './home/singin/singin.component';
import { HomeModule } from './home/home.module';
import { VmessageComponent } from './shared/component/vmessage/vmessage.component';
import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core.module';





@NgModule({
  declarations: [
    AppComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FilmeModule,
    ErrorsModule,
    HomeModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
