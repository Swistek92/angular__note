import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  id: string = '';
  name: string = '';
  dsc: string = '';
  price: number = 0;
  img: string = '';
  // constructor(private route: ActivatedRoute) {
  //   const params = this.route.snapshot.params;
  //   this.id = params['id'];
  // }

  courses = [
    {
      id: 1,
      name: 'html',
      dsc: 'html hmtl html',
      img: 'https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png',
      price: 666,
    },
    {
      id: 2,
      name: 'css',
      dsc: 'css css',
      img: 'https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png',
      price: 666,
    },
    {
      id: 3,
      name: 'js',
      dsc: 'js ',
      img: 'https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png',
      price: 666,
    },
  ];

  // id2: string = '';

  constructor(private route: ActivatedRoute) {
    // const params = this.route.snapshot.params;
    // this.id = params['id'];

    this.route.queryParams.subscribe((params) => {
      // this.id = params['id'];
      this.name = params['name'];
      // this.name = params['name']?.replace(/,/g, '').trim(); // Usuwanie przecinków i białych znaków

      const course = this.courses.find((course) => course.name === this.name);

      console.log('  course ' + course);
      if (course) {
        this.id = course.id.toString();
        this.price = course.price;
        this.dsc = course.dsc;
        this.img = course.img;
      }
      console.log(params);
    });
  }
}
