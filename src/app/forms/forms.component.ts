import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  myForm: FormGroup;
  step: any = 1;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      userDetails: this.formBuilder.group({
        fname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }),
      additionalDetails: this.formBuilder.group({
        mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        address: ['', Validators.required],
        country: ['', Validators.required],
        gender: ['', Validators.required],
      }),
      feedback: this.formBuilder.group({
        comments: [''],
      }),
    });
  }

  get userDetails() {
    return this.myForm.get('userDetails') as FormGroup;
  }
  get additionalDetails() {
    return this.myForm.get('additionalDetails') as FormGroup;
  }

  btnPrevious() {
    this.step -= 1;
  }
  btnNext() {
    const userDetailsGroup = this.myForm.get('userDetails') as FormGroup;
    const additionalDetailsGroup = this.myForm.get(
      'additionalDetails'
    ) as FormGroup;

    if (userDetailsGroup.invalid && this.step === 1) {
      console.log(userDetailsGroup);
      return;
    }
    if (additionalDetailsGroup.invalid && this.step == 2) {
      return;
    }
    if (this.step < 3) {
      this.step += 1;
    }
  }
  formSubmit() {
    if (this.myForm.valid) {
      this.isSubmitted = true;
    }
    console.log(this.myForm.value);
  }
}

// constructor() {
//   this.myForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     age: new FormControl('', [Validators.required, Validators.min(18)]),
//   });
// }

// usernameControl = new FormControl('', [
//   Validators.required,
//   Validators.minLength(3),
//   Validators.maxLength(10),
// ]);

// showValue() {
//   console.log(this.usernameControl);
//   console.log('value: ' + this.usernameControl.value);
//   console.log('status: ' + this.usernameControl.valid);
//   console.log(this.usernameControl.errors);
// }

// console.log(this.myForm.value);
// const userAge = this.myForm.get('age')?.value;
// if (userAge < 18) {
//   console.log('user 18');
// } else {
//   console.log(userAge);
// }
// user: { username: string } = { username: '' };
// submitForm(myForm: NgForm) {
//   if (myForm.valid) {
//     console.log(+JSON.stringify(myForm.value));
//     // alert('submit ');
//     // console.log(this.user);
//   }
// }
// resetValue(myForm: NgForm) {
//   myForm.resetForm();
// }
// setDefault(myForm: NgForm) {
//   myForm.resetForm({
//     name: 'lalal',
//     email: 'lalala@lalal.pl',
//   });
// }
