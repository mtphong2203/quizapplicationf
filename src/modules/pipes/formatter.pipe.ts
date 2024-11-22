import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter',
  standalone: true
})
export class FormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
