import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Set, SetId } from '../store/action';
import { StateType } from '../store/reducer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    account: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  jumpToHome(){
    this.router.navigate(['']);
  }

  jumpToRegister(){
    this.router.navigate(['/register']);
  }

  onSubmit() {
    this.http.post<any>('/api/user/login',this.loginForm.value).subscribe(res => {
      if(res.status==0){
        //store jwt, set a id to make intercepter attach jwt for user info request
        localStorage.setItem('token',res.data.token);
        this.store.dispatch(SetId(res.data.id));

        //set user state
        this.http.get<any>('/api/user/userinfo').subscribe(res => {
          
          this.store.dispatch(Set(res.data));
          this.matSnackBar.open(res.data.nickname + ', welcome back!','',{
            duration: 3000
          });
          this.jumpToHome();
        })
      }else{
        this.matSnackBar.open(res.msg,'',{
          duration: 3000
        });
      }
      
    });
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private matSnackBar:MatSnackBar,
    private store:Store<StateType>  ) {}

}
