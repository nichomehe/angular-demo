import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleNum'
})
export class DoubleNumPipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    return value * 2;
  }

}
