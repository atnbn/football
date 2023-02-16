import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any): unknown {
    if (value.startsWith('FC')) {
      return value.substr(0, 2);
    }
    return value;
  }
}
