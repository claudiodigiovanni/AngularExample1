import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularTest1';

  myForm:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myForm = this.fb.group({
      name:["", Validators.required],
      username:[""],
      emails: this.fb.array([
        this.fb.control('')
      ]),
      stars:this.fb.array([
        this.fb.control('')
      ])
    })
    
  }

  get emails(){
    return this.myForm.get("emails") as FormArray
  }
  get stars(){
    return this.myForm.get('stars') as FormArray
  }
  
  addEmail(){
    this.emails.push(this.fb.control(''))
  }

  addStar(){
    this.stars.push(this.fb.control(''))
  }


}

