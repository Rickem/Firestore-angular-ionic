import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
    name: 'searchFilter'
})
@Injectable()
export class SearchPipe implements PipeTransform {
    transform(list: any[], data: [string, string]): any {

        if (data) {
            let search = data[0].toLowerCase();
            let from = data[1];
            if (!search) {
                return;
            }
            else {
                let searchedList = list.filter((obj) => {
                    if (obj[from]) {
                        return obj[from].toLowerCase().indexOf(search) > -1;
                    }
                })
                return searchedList.sort((a: any, b: any) => {
                    if (a[from] < b[from] || b[from] == undefined) {
                        return -1;
                    } else if (a[from] > b[from] || a[from] == undefined) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
        }

    }
}


@Pipe({
    name: 'tagSearchFilter'
})
@Injectable()
export class TagSearchPipe implements PipeTransform {
    transform(list: any[], excludedTags: any[]): any {
        if (!list) {
            return;
        } else if (!excludedTags) {
            return list;
        } else if (excludedTags) {
            return list.filter((tags) => excludedTags.indexOf(tags.tag) == -1);
        };

    }
}
