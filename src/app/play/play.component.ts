import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeService } from '../utils/time.service';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent {
  public video_info:{path:string,name:string,date:number}={path:"",name:"",date:0};
  public jwt_token=localStorage.getItem('token');

  constructor(
    private route: ActivatedRoute, 
    public timeService:TimeService) {

  }

  ngOnInit() {
    this.video_info={
      path:this.route.snapshot.params['path'],
      name:this.route.snapshot.params['name'],
      date:this.route.snapshot.params['date'],
    }
  }



}
