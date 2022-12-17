import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  time:any;

  constructor(private router :Router,private http:HttpClient) { }

  ngOnInit(): void {
   
  }

  navigate()
  {
    if(this.username!='' && this.password!='' )
    {
      if(this.password == 'angular')
      {
      console.log(this.username,this.password)
      this.router.navigate(["/upload"]);
      window.alert("Login Successful")
      var formData = new FormData()
      formData.set("name",this.username)
      this.http.post('http://localhost:5000/api/login',formData, {responseType: 'text'}).subscribe((response)=>
      {
        console.log(response)
      });
      }
      else
      {
        window.alert("Incorrect Credentials!Please Check"); 
      }
    }
    else{
      window.alert("Please fill in the required details");
    }
  }


}
