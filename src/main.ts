import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class App {
  name = 'Angular';

  arr2 = [{ a: '' }, { b: '' }, { d: '' }];
  arr1 = [{ a: 1 }, { b: 1 }, { c: 1 }];
  arr3: any = [];

  mergeArrays(arr1: any, arr2: any) {
    const mergedArray = arr1.concat(arr2);

    const result = mergedArray.reduce((accumulator: any, currentValue: any) => {
      const index = accumulator.findIndex(
        (item: any) => Object.keys(item)[0] === Object.keys(currentValue)[0]
      );
      if (index === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);

    return result;
  }
  ngOnInit() {
    this.arr3 = this.mergeArrays(this.arr1, this.arr2);
    console.log(this.arr3);
  }
}

bootstrapApplication(App);
