import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from "../helpers/must-match.validator";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    // this.registerForm.controls.title.errors
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('Success' + this.registerForm.value);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
