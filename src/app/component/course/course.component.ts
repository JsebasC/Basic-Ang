import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  course2: any; //variable que se le asigne cualquier tipo

  course: course[]; //se declara la propiedad como arreglo
  mensaje: string;

  //Se construye primero, inicializar variable
  constructor(private courseService: CourseService) {
    this.course = [];
    this.mensaje = this.PrintHolaMundo();
  }

  //Se construye de segundo, Llamada de servicio para consultar datos:
  ngOnInit(): void {
    /*Podemos llamar funcion que interacture con el servicio */

    this.GetAllCourse();
  }

  GetAllCourse() {
    this.courseService.GetAllCourse().subscribe((course: any) => {
      //debugger // debug en la consola
      // console.log(course);
      // debugger
      this.course = course;
    });
  }

  Onclick() {
    this.PrintHolaMundoVoid();
  }

  PrintHolaMundo() {
    return 'Hola mundo';
  }

  PrintHolaMundoReponseType(): string {
    return 'Hola mundo';
  }

  PrintHolaMundoVoid(): void {
    console.log('Hola mundo');
  }
}
