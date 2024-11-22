import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter',
  standalone: true
})
export class FormatterPipe implements PipeTransform {

  transform(value: number): string {
    let result = '';

    const day = Math.floor(value / 1440);
    if (day > 0) {
      result += `${day}day`
    }

    value -= day * 1440;
    const hours = Math.floor(value / 60);
    if (hours > 0) {
      result += `${hours}h`
    }

    value -= hours * 60;
    const minutes = Math.floor(value % 60);
    if (minutes > 0) {
      result += `${minutes}m`
    }

    return result;

  }

}
