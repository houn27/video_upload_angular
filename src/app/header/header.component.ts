import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { UserInfoService, UserState } from '../utils/user-info.service';
import { AsyncPipe} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Store} from '@ngrx/store';
import { Reset} from '../store/action';
import { StateType } from '../store/reducer';
import { selectId, selectNickname, selectUsername } from '../store/selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,MatMenuModule,AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username$=this.store.select(selectUsername);
  nickname$=this.store.select(selectNickname);
  id$=this.store.select(selectId);
  

  jumpToLogin(){
    this.router.navigate(['/login']);
    //console.log(this.userInfoService.userState);
  }

  jumpToUpload(){
    this.router.navigate(['/upload']);
  }

  jumpToHome(){
    this.router.navigate(['/']);
  }

  doLogout(){
    
    this.http.get<any>('/api/user/logout').subscribe(res => {
      if(res.status==0){
        localStorage.removeItem('token');
        this.store.dispatch(Reset());
        this.router.navigate(['/']);
      }
    })
  }

  constructor(
    private store:Store<StateType>,
    private router:Router,
    public userInfoService:UserInfoService,
    private http: HttpClient,
    ) { 
  }
}
