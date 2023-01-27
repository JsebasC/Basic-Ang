import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { CourseComponent } from './component/course/course.component';

@NgModule({
  declarations: [    //Declara el componente
    CourseComponent
  ],
  imports: [ //Modulos principales, Instalacion lib ngix : 
    BrowserModule,
    HttpClientModule //Poder interactuar con metodos GET,POST,PUT,DELETE
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule {  
 }
