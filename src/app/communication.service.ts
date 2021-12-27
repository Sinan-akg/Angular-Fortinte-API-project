
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Subject, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()

export class CommunicationService {

    subject = new Subject<string>();

    constructor(private http: HttpClient)  {}

    pushData(data: string) {

        this.subject.next(data);
    }

    onData(): Observable<string> {

        return this.subject.asObservable();
    }
}
