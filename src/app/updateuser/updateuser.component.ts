import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../model/user.model';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})

export class UpdateuserComponent implements OnInit {

  id:any;
  user:any;

  constructor(  private crudservice: CrudService,
                private formBuilder: FormBuilder,
                private router: Router,
                private activateRoute: ActivatedRoute) {

                  this.id = this.activateRoute.snapshot.paramMap.get('id');


                  var myFormData = new FormData();

                  myFormData.append('userid', this.id);

                  this.crudservice.getsingleuser(myFormData);
                  setTimeout(()=>{
                  this.user = this.crudservice.singleuserdata;
                  this.editForm.controls["firstname"].setValue(this.user.username);
                  this.editForm.controls["email"].setValue(this.user.email);
                  }, 100)

                }

  //Edit User
  editForm: FormGroup;
  submitted = false;

  get f() { return this.editForm.controls; }
  onSubmit() {

  this.submitted = true;
  // stop here if form is invalid
  if (this.editForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {

    // Initialize Params Object
     var myFormData = new FormData();

   // Begin assigning parameters

      myFormData.append('updateUsername', this.editForm.value.firstname);
      myFormData.append('updateEmail', this.editForm.value.email);
      myFormData.append('updateid', this.user.id);

      this.crudservice.updateuser(myFormData);
      this.router.navigate([`/users`]);
  }

}

  ngOnInit(): void {
    //Add User form validations
    this.editForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

      firstname: ['', [Validators.required]]
      });
  }

}
