import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue',
})
export class KeyValuePipe implements PipeTransform {
  transform(value: Object, ...args: any[]): any {
    return Object.keys(value);
  }
}
