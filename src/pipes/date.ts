import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
import * as moment from 'moment';

@Pipe({
    name: 'dateCompareFilter'
})
@Injectable()
export class DateComparePipe implements PipeTransform {
    transform(compareDate : any): any {
        if (compareDate) {
            let firstDate  = new Date();
            firstDate  = new Date(firstDate.setHours(0));
             firstDate  = new Date(firstDate.setMinutes(0));
              firstDate  = new Date(firstDate.setSeconds(0));
            let secondDate  = new Date(compareDate);
            return firstDate >= secondDate;
        }
    }
}