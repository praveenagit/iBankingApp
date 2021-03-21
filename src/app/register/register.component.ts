import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  debounceTime } from 'rxjs/operators';
import {Customer} from '../model/customer';


function emailMatcher(c:AbstractControl): {[Key: string]:boolean}|null{
  const emailControl=c.get('email');
  const confirmEmailControl=c.get('confirmEmail');
  if(emailControl.pristine || confirmEmailControl.pristine){
    return null;
  }
  if(emailControl.value!==confirmEmailControl.value){
    return {'match':true};
  }
  
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerForm:FormGroup;
  customer=new Customer();
  emailMessage: string;

  

  private validationMessages=  {
    required: 'please enter the email',
    email: 'please enter a valid email'

  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm=this.fb.group({
      Name:['',[Validators.required,Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email:['',[Validators.required,Validators.email]],
        confirmEmail:['',Validators.required],
      },{validator:emailMatcher}),
      phone: ''
      
      

    });
    
    const emailControl=this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(
      value => this.setMessage(emailControl)
    );


  }

  
  setMessage(c:AbstractControl):void{
    this.emailMessage='';
    if((c.touched||c.dirty)&&c.errors){
      this.emailMessage=Object.keys(c.errors).map(
        key=>this.validationMessages[key]).join('');
    }
  }

  save(){
    console.log(this.customerForm);
    console.log('saved: '+JSON.stringify(this.customerForm.value));
  }
 

}
