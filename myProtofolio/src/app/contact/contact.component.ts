import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports:[ReactiveFormsModule,CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
})
export class ContactComponent{


  userform: FormGroup;
  userSubmitted: any;

  // ✅ Fix: "constructor" was misspelled as "contructor"
  constructor(private fb: FormBuilder) {
    console.log('ContactComponent loaded');
    // ✅ Initialize the form with controls
    this.userform = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userform.valid) {
      this.userSubmitted =true;
      console.log('Form Submitted:', this.userform.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
