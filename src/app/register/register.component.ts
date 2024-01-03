import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    account: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  jumpToHome(){
    this.router.navigate(['/']);
  }

  // create a new user, jump to homepage
  onSubmit() {
    this.http.post<any>('/api/user/register',this.registerForm.value).subscribe(res => {
      if(res.status==0){
        this.jumpToHome();
      }
      this.matSnackBar.open(res.msg,'',{
        duration: 3000
      });
    });
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private matSnackBar:MatSnackBar) {}
}
