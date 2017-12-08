import { Component, ViewChild, ElementRef } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { CalendarComponentOptions,  } from 'ion2-calendar'

import { Platform } from 'ionic-angular';


declare var google: any;


@Component({
    selector: 'page-multi-date-calendar',
    templateUrl: 'multiDateCalendar.html'
})
export class MultiDateCalendarPage {

    date: string;

    dateDiff = 4;
    dateMulti: string[];
    SelectedDates = [];
    type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    optionsMulti: CalendarComponentOptions = {
        pickMode: 'multi',
        disableWeeks: [1],
        from: new Date(2017, 11, 23),
        to: new Date(2020, 11, 31),
    };
    dateRange: { from: string; to: string; };
    optionsRange: CalendarComponentOptions = {
        pickMode: 'range'
    };


    constructor() { }

    monthChange(changes) {
        console.log(changes)
      }
    onChange($event) {
        console.log($event);
        let dateValue = new Date($event[$event.length - 1]);
        console.log(dateValue);
        this.SelectedDates.push(dateValue);

        this.optionsMulti.from = this.subtractDays(new Date($event[$event.length - 1]), this.dateDiff);
        this.optionsMulti.to = this.addDays(new Date($event[$event.length - 1]), this.dateDiff);
        this.optionsMulti.disableWeeks = [0,6];
        console.log(this.optionsMulti);
    }
    addDays(date, days) {
        let tempDate = date;
        console.log(date, days)
        tempDate.setDate(tempDate.getDate() + parseInt(days));
        console.log(tempDate, 'tempDate')
        return tempDate;
    };
    subtractDays(date, days) {
        let tempDate = date;
        console.log(date, days)
        tempDate.setDate(tempDate.getDate() - parseInt(days));
        console.log(tempDate, 'tempDate')
        return tempDate;
    };

}