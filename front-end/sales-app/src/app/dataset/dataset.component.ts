import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Text } from '@angular/compiler';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
  
  
  
  constructor(private router :Router,private http:HttpClient) { }

  ngOnInit(): void {
    
  }
 name : string = "" 
 file: any;
 timeline:any
 data:any



getValue(timeline:any)
{
  this.timeline= timeline;
}

getFile(event:any)
{
  this.file=event.target.files[0]
  console.log(this.file)


}


submitData()
{
  
  var  formData = new FormData();
  formData.set("file",this.file)
  formData.set("number",this.timeline)
  console.log(this.timeline)
  this.http.post('http://localhost:5000/api/upload',formData, {responseType: 'text'}).subscribe((response)=>
  {
    console.log(response)
  });
  window.alert("File Uploaded Successfully!")
}
nextpage()
{
  this.router.navigate(["/visual"]);
}
}
