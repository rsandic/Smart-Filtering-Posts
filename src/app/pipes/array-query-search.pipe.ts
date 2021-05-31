import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterContains',
    pure: false
})

export class ArrayQuerySearchPipe implements PipeTransform {
    transform(items: Array<any>, conditions: { [field: string]: any }): Array<any> {
        return items.filter(item => {
            for (const field in conditions) {
                if (
                    item[field] != null &&
                    conditions[field] != null &&
                    !(item[field].toLowerCase()).includes(conditions[field].toLowerCase())) {
                    return false;
                }
            }
            return true;
        });
    }
}
