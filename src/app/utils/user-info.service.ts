import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

// state management of log in user information

export interface UserState{
  id:number,
  username:string,
  nickname:string
}

@Injectable({
  providedIn: 'root'
})

// userState$: public observable
// _userState$: private subject
// userState: public accessable state
export class UserInfoService {
  //public oberver 
  userState$: Observable<UserState>;
  
  //Subject object: 1 to n
  private _userState$=new BehaviorSubject<UserState>({id:-1,username:"",nickname:""});
  constructor() { 
    //asObservable return a observer (1 to 1), let public subscribe mannully
    this.userState$ = this._userState$.asObservable();
  }
  get userState(): UserState {
    return this._userState$.getValue();
  }

  set userState(user:UserState){
    this._userState$.next(user);
  }

}


// ------------- use -----------------
// {{userInfoService.userState.username}}
// {{userInfoService.userState.nickname}}

//------------- set -----------------
// this.userInfoService.userState=res.data;
// this.userInfoService.userState={id:-1,username:"",nickname:""}



