import {
  Component,
  signal,
  OnInit,
  ViewChild,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { LogMesage1Service } from './random2/services/log-mesage1.service';
import { AdminDataService } from './random2/services/admin-data.service';
import { HttpClientModule } from '@angular/common/http';

export type Courses = { id: number; name: string }[];
interface empInferface {
  id: number;
  name: string;
  role: string;
}
type ColorMode = 'lightMode' | 'darkMode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public getAdmin: AdminDataService) {
    // this.logger.log();
  }

  // @ViewChild('colorInput') colorInput!: ElementRef;
  // @HostBinding('style.backgroundColor') selectedColor!: string;
  // @HostListener('input', ['$event.target.value']) onColorChange(color: string) {
  //   this.selectedColor = color;
  // }
  // ngAfterViewInit(): void {
  //   if (this.colorInput.nativeElement.value) {
  //     this.selectedColor = this.colorInput.nativeElement.value!;
  //   }
  // }
  // randomMsg: string = 'aaaaaaaaaa';
  // courses: Courses = [
  //   { id: 1, name: 'javascript' },
  //   { id: 2, name: 'typescript' },
  //   { id: 3, name: 'c#' },
  //   { id: 4, name: 'java' },
  //   { id: 5, name: 'python' },
  // ];
  // message: string = '';
  // receiveEvent(event: string) {
  //   this.message = event;
  // }
  // changeMs() {
  //   this.randomMsg = this.randomMsg + '1';
  // }
  // counter: number = 0;
  // inputValue: string = 'new value';
  // updateValue() {
  //   this.inputValue = this.inputValue + '1';
  // }
  // constructor() {
  //   console.log('calling constructor');
  // }
  // ngOnInit(): void {
  //   console.log('calling on init');
  //   // this.startCounter();
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  // }
  // startCounter() {
  //   setInterval(() => {
  //     if (this.counter <= 5) {
  //       console.log(this.counter++);
  //     }
  //   }, 100);
  //   return null;
  // }
  // name = '';
  // email = '';
  // phone = '';
  // address = '';
  // qualifications = [{ school: '', degree: '', year: '' }];
  // submitted: boolean = false;
  // addQualification() {
  //   this.qualifications.push({ school: '', degree: '', year: '' });
  // }
  // submit() {
  //   this.submitted = true;
  // }
  // edit() {
  //   this.submitted = false;
  // }
  // employers20 = [
  //   { id: 1, name: 'jakub', salar: 2000 },
  //   { id: 2, name: 'marian', salar: 4000 },
  //   { id: 3, name: 'stefan', salar: 6000 },
  // ];
  // isAuth: boolean = false;
  // nm: string = '';
  // em: string = '';
  // emailIsValid: boolean = false;
  // formSubmitted: boolean = false;
  // showMessage() {
  //   if (this.nm.length > 5 && this.emailIsValid) {
  //     this.formSubmitted = true;
  //   } else {
  //     this.formSubmitted = false;
  //   }
  // }
  // emailValidation(e: string): void {
  //   console.log(e);
  //   if (e.includes('@')) {
  //     this.emailIsValid = true;
  //   } else {
  //     this.emailIsValid = false;
  //   }
  // }
  // applyVal = { color: 'green', 'font-size': '40px' };
  // colorMode: ColorMode = 'lightMode';
  // toggleMode() {
  //   if (this.colorMode === 'lightMode') {
  //     this.colorMode = 'darkMode';
  //   } else {
  //     this.colorMode = 'lightMode';
  //   }
  // }
  // hasText: boolean = false;
  // textInput(e: any) {
  //   if (e.target.value !== '') {
  //     this.hasText = true;
  //   } else {
  //     this.hasText = false;
  //   }
  // }
  // // updateStyles= 'updateStyles'
  // age1: number = 0;
  // isEligible: boolean = false;
  // checkAge() {
  //   // if(this.age1> 18){
  //   //   this.isEligible = true
  //   // }else{
  //   //   this.isEligible = false
  //   // }
  //   this.isEligible = this.age1 >= 18;
  // }
  // age = 10;
  // employeeRole: string = '';
  // employees = signal<empInferface[]>([
  //   {
  //     id: 1,
  //     name: 'adam',
  //     role: 'dev',
  //   },
  //   {
  //     id: 2,
  //     name: 'React',
  //     role: 'dev',
  //   },
  //   {
  //     id: 3,
  //     name: 'Node',
  //     role: 'dev',
  //   },
  //   {
  //     id: 4,
  //     name: 'MongoDb',
  //     role: 'marketing',
  //   },
  //   {
  //     id: 5,
  //     name: 'adam',
  //     role: 'marketing',
  //   },
  //   {
  //     id: 6,
  //     name: 'React',
  //     role: 'marketing',
  //   },
  //   {
  //     id: 7,
  //     name: 'Node',
  //     role: 'analyst',
  //   },
  //   {
  //     id: 8,
  //     name: 'MongoDb',
  //     role: 'analyst',
  //   },
  // ]);
  // title = 'Demo';
  // counter = 0;
  // staticInput: string = '2 way banding';
  // dynamicInput: string = 'dynamic input';
  // show: boolean = false;
  // fullstackDev = [
  //   {
  //     id: 1,
  //     name: 'Angular',
  //   },
  //   {
  //     id: 2,
  //     name: 'React',
  //   },
  //   {
  //     id: 3,
  //     name: 'Node',
  //   },
  //   {
  //     id: 1,
  //     name: 'MongoDb',
  //   },
  // ];
  // list = [
  //   {
  //     name: 'alex',
  //     age: 24,
  //   },
  //   {
  //     name: 'alex1',
  //     age: 31,
  //   },
  //   {
  //     name: 'alex2',
  //     age: 52,
  //   },
  //   {
  //     name: 'aaaa',
  //     age: 73,
  //   },
  //   {
  //     name: 'alex6',
  //     age: 16,
  //   },
  // ];
  // display(msg: string) {
  //   alert(msg)
  // }
  // incr(){
  //   this.counter++
  // }
  // keypressed(e:any){
  //   console.log(e.target.value)
  // }
  // isShift(e:KeyboardEvent){
  //   console.log(e)
  //     if(e.shiftKey && e.key === "Y"){
  //       console.log('shist + Y is pressed')
  //     }
  // }
}
