import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Interface } from 'readline';
interface User {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
})
export class AsyncComponent implements OnInit {
  constructor(private http: HttpClient) {}

  deteleData() {
    this.http
      .delete<any>('http://localhost:3000/users/102')
      .subscribe((data) => {
        console.log(data);
      });
  }

  putData() {
    this.http
      .get<any>('http://localhost:3000/users/200')
      .subscribe((updateDate) => {
        updateDate.name = 'aaa';
        updateDate.email = 'ccc';

        this.http
          .put('http://localhost:3000/users/200', updateDate)
          .subscribe((res) => {
            console.log(res);
          });
      });
  }

  postData() {
    const user = {
      id: '102',
      name: 'aaaa',
      email: 'yyyyy',
    };
    const secoundUser = this.getUserById(2);

    this.http.post('http://localhost:3000/users', user).subscribe((res) => {
      console.log('post res', res);
    });
  }
  getData() {
    const user = {
      id: 102,
      name: 'aaaa',
      email: 'yyyyy',
    };

    this.http.get('http://localhost:3000/users').subscribe((res) => {
      console.log('post res', res);
    });
  }

  getUserById(id: number) {
    this.http.get('http://localhost:3000/users/' + id).subscribe((res) => {
      console.log('post res', res);
      return res as User;
    });
  }

  jsonData$: Observable<any> | undefined;

  ngOnInit(): void {
    const src1 = of(1, 2, 3, 4);
    const src2 = EMPTY;

    src1.subscribe({
      next: (value) => {
        console.log('next src1', value);
      },
      complete: () => {
        console.log('complete src1 ');
      },
    });

    src2.subscribe({
      next: (value) => {
        console.log('next ', value);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  fetchData() {
    this.jsonData$ = new Observable<any>((obs) => {
      fetch('https://dummyjson.com/products/categories')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          obs.next(data);
          obs.complete();
        })
        .catch((err) => obs.error(err));
    });
  }

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   if (isPlatformServer(this.platformId)) {
  //     // Server-side rendering logic
  //     this.value$ = new Observable((observer) => {
  //       const date = new Date();
  //       const estTime = date.toLocaleString('en-US', {
  //         timeZone: 'America/New_York',
  //         dateStyle: 'full',
  //         timeStyle: 'full',
  //       });
  //       observer.next(estTime);
  //       observer.complete(); // Complete the observable to prevent SSR timeout
  //     });
  //   } else {
  //     // Client-side rendering logic
  //     this.value$ = new Observable((observer) => {
  //       const interval = setInterval(() => {
  //         const date = new Date();
  //         const estTime = date.toLocaleString('en-US', {
  //           timeZone: 'America/New_York',
  //           dateStyle: 'full',
  //           timeStyle: 'full',
  //         });
  //         observer.next(estTime);
  //       }, 1000);

  //       // Clean up the interval on unsubscribe
  //       return () => clearInterval(interval);
  //     });
  //   }
  // }
}
