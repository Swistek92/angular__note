import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  // user: { username: string } = { username: '' };

  submitForm(myForm: NgForm) {
    if (myForm.valid) {
      console.log(+JSON.stringify(myForm.value));
      // alert('submit ');
      // console.log(this.user);
    }
  }

  resetValue(myForm: NgForm) {
    myForm.resetForm();
  }
  setDefault(myForm: NgForm) {
    myForm.resetForm({
      name: 'lalal',
      email: 'lalala@lalal.pl',
    });
  }
}
