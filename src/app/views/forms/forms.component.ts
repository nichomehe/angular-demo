import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.less']
})
export class FormsComponent implements OnInit {
  constructor(private fb:FormBuilder){
    this.otherInfoForm = this.fb.group({
      addess:['',Validators.required]
    })
    this.otherInfoForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }
  userInfoForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });
  otherInfoForm:FormGroup;

  formErrors = {
    addess: ''
  };
  validationMessages = {
    addess: {
      required: '请输入地址'
    }
  };
  OnInit(){};
  onValueChanged(data?: any) {
    debugger
    if (!this.actionFrom) {
      return;
    }
    const form = this.otherInfoForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
 update(){

 }
 updateOther(){
   debugger
  alert('otherInfoForm====',this.otherInfoForm.value)
  event.cancelBubble = true
 }
}
