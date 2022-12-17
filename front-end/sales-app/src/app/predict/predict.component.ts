import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
    username=""
    time:any
    chartdata:any
    

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5000/api/login",{responseType:'text'}).subscribe((data)=>
    {
      console.log(data)
      this.username=data
      let date:Date= new Date()
      this.time=date;
    });
  }
  

  
  getdata()
  {
     this.http.get("http://localhost:5000/api/upload",{responseType:'text'}).subscribe((data)=>
     {
            console.log(data)
            this.chartdata=data
            
            
     });
     console.log(this.chartdata)
     Chart.register(...registerables);
    const myChart = new Chart("mychart2", {
      type: 'line',
      data: {
          labels: ['1972-10-01','1972-11-01','1972-12-01','1973-01-01','1973-02-01','1973-03-01','1973-04-01','1973-05-01','1973-06-01','1973-07-01','1973-08-01','1973-09-01','1973-10-01','1973-11-01','1973-12-01','1974-01-01'],
          datasets: [{
              label: 'SALES FORECASTING',
              data:[7024.2634644 ,  9996.41965587, 12892.15215183,
                4561.51024667,  3718.81811132,  4792.36156282,  5034.6108463 ,
                5047.95701897,  5488.57385912,  4593.62764064,  1676.13845865,
                6146.22452437,  7262.51292767, 10194.73597991, 13057.412305  ,
                4731.2016586 ],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 3
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }


}
