import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.less'],
})
export class NewPostComponent {
    postForm: FormGroup = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(10)]),
        permalink: new FormControl({ value: '', disabled: true }, [Validators.required]),
        excerpt: new FormControl('', [Validators.required, Validators.minLength(50)]),
        content: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        postImg: new FormControl('', [Validators.required]),
    });

    showFormErrors(field: string): string | void {
        const targetField = this.postForm.get(field);
        if (targetField?.touched && !targetField.valid) {
            if (targetField.errors?.['required']) {
                return field[0].toUpperCase() + field.slice(1) + ' is required';
            }
            if (targetField.errors?.['minlength']) {
                return (
                    field[0].toUpperCase() +
                    field.slice(1) +
                    ' must be at least ' +
                    targetField.errors?.['minlength'].requiredLength +
                    ' characters long'
                );
            }
        }
    }

    onSubmit(): void {
        console.log(this.postForm.value);
    }
}
