import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { course } from 'src/app/interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url = 'http://localhost/University.API/api';

  constructor(private http: HttpClient) {}

  GetAllCourse() {
    return this.http.get(`${this.url}/Courses`);
  }

  GetByCourse(id: number) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  PostCourse(course: course) {
    return this.http.post(`${this.url}/Courses`, course)
      //Tuberia para transformar la información que viene desde el API
    //   .pipe( 
     
    // );
  }
}
