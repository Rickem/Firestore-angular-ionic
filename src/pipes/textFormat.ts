import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
    name: 'OmangIdFilter'
})
@Injectable()
export class OmangIdPipe implements PipeTransform {
    transform(omangId: string): any {
        if (omangId) {
            for (let i = 1; i < 5; i++) {
                let omangId1 = omangId.substring(0, i) + 'x' + omangId.substring(i + 1);
                omangId = omangId1
            }
            return omangId;
        }
    }
}