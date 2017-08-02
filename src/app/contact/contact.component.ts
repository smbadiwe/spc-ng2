import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from './contact.model';
import { ContactFormService } from './contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.html'
})
export class ContactComponent implements OnInit {
    myform: FormGroup;
    formModel: ContactForm;
    hasErrors: boolean;
    formErrors = {
        'name': '',
        'email': '',
        'message': ''
    };

    validationMessages = {
        'name': {
            'required': 'Name is required.',
        },
        'email': {
            'required': 'Email is required.',
            'email': 'Invalid email address.'
        },
        'message': {
            'required': 'Email is required.'
        }
    };

    constructor(private fb: FormBuilder, private formService: ContactFormService) { }

    buildForm() {
        console.log('calling buildForm()');
        this.myform = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', Validators.required],
            website: '',
            message: ['', Validators.required]
        });
        this.myform.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
        this.hasErrors = true;
    }

    onSubmit(): void {
        if (!this.hasErrors) {
            this.formModel = this.myform.value;
            this.formService.sendContactMessage(this.formModel);

            this.myform.reset();
            this.hasErrors = true;
        }
    }

    ngOnInit(): void {
        this.buildForm();
    }

    onValueChanged(data?: any) {
        if (!this.myform) { return; }
        const form = this.myform;
        let anyControlWithValue = false;
        this.hasErrors = false;
        for (const field of Object.keys(this.formErrors)) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control) {
                if (!anyControlWithValue) {
                    anyControlWithValue = control.dirty;
                }
                if (!control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key of Object.keys(control.errors)) {
                        if (control.dirty) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                        this.hasErrors = true;
                    }
                }
            }
        }
        if (this.hasErrors && !anyControlWithValue) {
            this.hasErrors = false;
        }
    }

}
