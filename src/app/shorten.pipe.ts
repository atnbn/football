import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit);
    } else if (value.startsWith('FC')) {
      return value.substr(0, 3);
    }
    return value;
  }
}
