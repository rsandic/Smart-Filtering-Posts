import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class ArrayFilterPipe implements PipeTransform {
    transform(items: Array<any>, conditions: { [field: number]: any }): Array<any> {
        return items.filter(item => {
            for (const field in conditions) {
                if (item[field] !== conditions[field] && conditions[field] != null) {
                    return false;
                }
            }
            return true;
        });
    }
}
