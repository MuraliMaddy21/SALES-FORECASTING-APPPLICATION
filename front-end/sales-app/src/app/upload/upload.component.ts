import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
username=""
time:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5000/api/login",{responseType:'text'}).subscribe((data)=>
    {
      console.log(data)
      this.username=data
      let date: Date = new Date();  
      this.time=date;
    });
  }

}
