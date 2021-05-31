import {Component, OnInit, SimpleChanges} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {Subject} from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    message: any;

    constructor(private alertService: AlertService) {
    }

    ngOnInit(): void {

        this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }

    clear(): void {
        this.alertService.clear();
    }

}
