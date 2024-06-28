import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { PostsModule } from './posts/posts.module';
import { NotFoundComponent } from './not-found/not-found.component';

// Decorador NgModule con la configuración del módulo
@NgModule({
  // Declara los componentes que pertenecen al módulo
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],

  // Importa otros módulos necesarios
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule
  ],

  // Define los servicios que el módulo debe hacer disponible
  providers: [],

  // Especifica el componente que se usará como la raíz del módulo
  bootstrap: [AppComponent]
})

// Exporta la clase del módulo
export class AppModule { }
