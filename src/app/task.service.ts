import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
    backlogs = [{
        title: 'Sample',
        description: 'HSUSHUSHSUSHUS',
        dueDate: '12/12/12'
    }];

    developments = [{
        title: 'Sample',
        description: 'HSUSHUSHSUSHUS',
        dueDate: '12/12/12'
    }];

    codeReviews = [{
        title: 'Sample',
        description: 'HSUSHUSHSUSHUS',
        dueDate: '12/12/12'
    }];

    acceptances = [{
        title: 'Sample',
        description: 'HSUSHUSHSU',
        dueDate: '12/12/12'
    }];

    backlogsChanged = new Subject<any>();
    developmentsChanged = new Subject<any>();
    codeReviewsChanged = new Subject<any>();
    acceptancesChanged = new Subject<any>();

    addToBacklogs = (dataObj: any) => {
        this.backlogs.push(dataObj);
        this.backlogsChanged.next(this.backlogs.slice());
    }

    moveToDevelopment = (index) => {
        const item = this.backlogs[index];
        this.backlogs.splice(index, 1);
        this.backlogsChanged.next(this.backlogs.slice());
        this.developments.push(item);
        this.developmentsChanged.next(this.developments.slice());
    }

    moveToCodeReview = (index) => {
        const item = this.developments[index];
        this.developments.splice(index, 1);
        this.developmentsChanged.next(this.developments.slice());
        this.codeReviews.push(item);
        this.codeReviewsChanged.next(this.codeReviews.slice());
    }

    moveToAcceptance = (index) => {
        const item = this.codeReviews[index];
        this.codeReviews.splice(index, 1);
        this.codeReviewsChanged.next(this.codeReviews.slice());
        this.acceptances.push(item);
        this.acceptancesChanged.next(this.acceptances.slice());
    }
}