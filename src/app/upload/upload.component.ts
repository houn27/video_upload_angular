import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  selectedFile: any = null;
  hasUpload=false;
  
  fileChanged(event:any){
    
    this.selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('video', this.selectedFile);
    
    // subscribe(): pass an observer object with two callback functions: 
    // next() is called when request successfully, otherwise error() is called
    this.http.post('api/video/upload', formData).subscribe({
      next:res =>{
        this.hasUpload=true;
      },
      error:error=>{
        if(error.status==401){
          this.matSnackBar.open("please log in ...",'',{duration: 2000});
        }
      }
    });
  }


  constructor(
    private http: HttpClient,
    private matSnackBar:MatSnackBar  ) {}
}
