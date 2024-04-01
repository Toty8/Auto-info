import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'accountAge'
})
export class AccountAgeByDaysPipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): unknown {

    return moment(date).fromNow();
  }

}
