import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusFive'
})
export class PlusFivePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value + 5;
  }

}
