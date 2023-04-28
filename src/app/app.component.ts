import { Component, ViewChild } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crud';

  users: any = [];
  selectedUsers: any = [];
  selectedIndex: any = null;

  @ViewChild('myForm') myForm!: NgForm;

  editMode: boolean = false;
  isUpdate:boolean=false;

  genders = [
    {
      id:1,value:'Male'
    },
    {
      id:2,value:'Female'
    }
  ];

  constructor(private fb: FormBuilder) {}

  
  updateUser(index: number) {
    console.log("update Function called");
    
    const updatedValue = this.myForm.value;
    this.users[index] = updatedValue;
    console.log(updatedValue);
    
    this.myForm.reset();
    this.selectedIndex = null;
    this.isUpdate = false;
    console.log(this.users);
    
  }
  onSubmit(form: NgForm) { 

    const newUser = this.myForm.value;
    if(this.users.length === 0){
      this.users.push(this.selectedUsers);
    this.selectedUsers = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      age: '',
      gender: '',
      mobileNo: '',
    }  
    console.log(form);
    
    }else{
      this.updateUser(this.selectedIndex);
    }
    
      }

  editUser(index: number) {
    const selectedUsers = this.users[index];
    this.myForm.setValue({
      fname: selectedUsers.fname,
      lname: selectedUsers.lname,
      email: selectedUsers.email,
      password: selectedUsers.password,
      age: selectedUsers.age,
      gender : selectedUsers.gender,
      mobile: selectedUsers.mobile,
    });
    this.selectedIndex = index;
    this.isUpdate = true;
  }


  deleteUser(index: number) {
    this.users.splice(index, 1);
    console.log(this.users);
  }  
}
