import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { ContactForm, contacts } from './contact.model';

@Injectable()
export class ContactFormService {

    delayMs = 500;
    // Fake server get; assume nothing can go wrong
    getContactMessages(): Observable<ContactForm[]> {
        return of(contacts).delay(this.delayMs); // simulate latency with delay
    }

    // Fake server update; assume nothing can go wrong
    sendContactMessage(contact: ContactForm): Observable<ContactForm> {
        contacts.push(contact);
        console.log(contacts);
        return of(contact).delay(this.delayMs); // simulate latency with delay
    }
}
