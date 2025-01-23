import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from './models';
import { generarStringRandom } from '../../../../shared/utilidades';

@Component({
  selector: 'app-students',
  standalone: false,
  
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  studentForm: FormGroup;

  displayedColumns: string[] = ['id', 'nombre', 'apellido'];
  dataSource = [];

  estudiantes: Estudiante[] = [
    {
      id:generarStringRandom(),
      nombre: "Jacinto",
      apellido: "Rios",
    },
    {
      id:generarStringRandom(),
      nombre: "Marta",
      apellido: "Norma",
    }
  ];

  

  constructor(private fb: FormBuilder){
    this.studentForm = this.fb.group({
      nombre: [null,Validators.required],
      apellido: [null,Validators.required],
    });
  }

  onSubmit(){
    if(this.studentForm.invalid){
      this.studentForm.markAllAsTouched();
    }else{
      console.log(this.studentForm.value);

      this.estudiantes.push({
        id: generarStringRandom(),
        ...this.studentForm.value
      })
    }
    
  }
}
