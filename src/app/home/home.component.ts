import { Component } from '@angular/core';
import { UserInfoService } from '../utils/user-info.service';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store} from '@ngrx/store';
import { selectId } from '../store/selector';
import { TimeService } from '../utils/time.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule,RouterLink,AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public jwt_token=localStorage.getItem('token');
  id$=this.store.select(selectId);
  public video_list=new Array();

  //get uploaded video belonging to the user
  ngOnInit(){
    let id_val = -1;
    this.id$.subscribe(data=>id_val=data);
    if(id_val!=-1){
      this.http.get<any>('/api/video/playlist').subscribe(res => {
        if(res.status==0){
          this.video_list=res.data;
        }
      })
    }
  }

  constructor(
    private store:Store,
    private http: HttpClient,
    public timeService:TimeService,
    public userInfoService:UserInfoService ) {}
}
