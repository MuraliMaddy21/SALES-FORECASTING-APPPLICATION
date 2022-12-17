import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {
  data:any
  username=""
  time:any

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:5000/api/login",{responseType:'text'}).subscribe((data)=>
    {
      console.log(data)
      this.username=data
      let date: Date = new Date();  
      this.time=date;
    });
    
  }

getdata()
{
  
  Chart.register(...registerables);
    const myChart = new Chart("mychart", {
      type: 'line',
      data: {
          labels: ['Months'],
          datasets: [{
              label: 'SALES FORECASTING',
              data: [{"Month":"1964-01","Sales":2815},{"Month":"1964-02","Sales":2672},{"Month":"1964-03","Sales":2755},{"Month":"1964-04","Sales":2721},{"Month":"1964-05","Sales":2946},{"Month":"1964-06","Sales":3036},{"Month":"1964-07","Sales":2282},{"Month":"1964-08","Sales":2212},{"Month":"1964-09","Sales":2922},{"Month":"1964-10","Sales":4301},{"Month":"1964-11","Sales":5764},{"Month":"1964-12","Sales":7312},{"Month":"1965-01","Sales":2541},{"Month":"1965-02","Sales":2475},{"Month":"1965-03","Sales":3031},{"Month":"1965-04","Sales":3266},{"Month":"1965-05","Sales":3776},{"Month":"1965-06","Sales":3230},{"Month":"1965-07","Sales":3028},{"Month":"1965-08","Sales":1759},{"Month":"1965-09","Sales":3595},{"Month":"1965-10","Sales":4474},{"Month":"1965-11","Sales":6838},{"Month":"1965-12","Sales":8357},{"Month":"1966-01","Sales":3113},{"Month":"1966-02","Sales":3006},{"Month":"1966-03","Sales":4047},{"Month":"1966-04","Sales":3523},{"Month":"1966-05","Sales":3937},{"Month":"1966-06","Sales":3986},{"Month":"1966-07","Sales":3260},{"Month":"1966-08","Sales":1573},{"Month":"1966-09","Sales":3528},{"Month":"1966-10","Sales":5211},{"Month":"1966-11","Sales":7614},{"Month":"1966-12","Sales":9254},{"Month":"1967-01","Sales":5375},{"Month":"1967-02","Sales":3088},{"Month":"1967-03","Sales":3718},{"Month":"1967-04","Sales":4514},{"Month":"1967-05","Sales":4520},{"Month":"1967-06","Sales":4539},{"Month":"1967-07","Sales":3663},{"Month":"1967-08","Sales":1643},{"Month":"1967-09","Sales":4739},{"Month":"1967-10","Sales":5428},{"Month":"1967-11","Sales":8314},{"Month":"1967-12","Sales":10651},{"Month":"1968-01","Sales":3633},{"Month":"1968-02","Sales":4292},{"Month":"1968-03","Sales":4154},{"Month":"1968-04","Sales":4121},{"Month":"1968-05","Sales":4647},{"Month":"1968-06","Sales":4753},{"Month":"1968-07","Sales":3965},{"Month":"1968-08","Sales":1723},{"Month":"1968-09","Sales":5048},{"Month":"1968-10","Sales":6922},{"Month":"1968-11","Sales":9858},{"Month":"1968-12","Sales":11331},{"Month":"1969-01","Sales":4016},{"Month":"1969-02","Sales":3957},{"Month":"1969-03","Sales":4510},{"Month":"1969-04","Sales":4276},{"Month":"1969-05","Sales":4968},{"Month":"1969-06","Sales":4677},{"Month":"1969-07","Sales":3523},{"Month":"1969-08","Sales":1821},{"Month":"1969-09","Sales":5222},{"Month":"1969-10","Sales":6872},{"Month":"1969-11","Sales":10803},{"Month":"1969-12","Sales":13916},{"Month":"1970-01","Sales":2639},{"Month":"1970-02","Sales":2899},{"Month":"1970-03","Sales":3370},{"Month":"1970-04","Sales":3740},{"Month":"1970-05","Sales":2927},{"Month":"1970-06","Sales":3986},{"Month":"1970-07","Sales":4217},{"Month":"1970-08","Sales":1738},{"Month":"1970-09","Sales":5221},{"Month":"1970-10","Sales":6424},{"Month":"1970-11","Sales":9842},{"Month":"1970-12","Sales":13076},{"Month":"1971-01","Sales":3934},{"Month":"1971-02","Sales":3162},{"Month":"1971-03","Sales":4286},{"Month":"1971-04","Sales":4676},{"Month":"1971-05","Sales":5010},{"Month":"1971-06","Sales":4874},{"Month":"1971-07","Sales":4633},{"Month":"1971-08","Sales":1659},{"Month":"1971-09","Sales":5951},{"Month":"1971-10","Sales":6981},{"Month":"1971-11","Sales":9851},{"Month":"1971-12","Sales":12670},{"Month":"1972-01","Sales":4348},{"Month":"1972-02","Sales":3564},{"Month":"1972-03","Sales":4577},{"Month":"1972-04","Sales":4788},{"Month":"1972-05","Sales":4618},{"Month":"1972-06","Sales":5312},{"Month":"1972-07","Sales":4298},{"Month":"1972-08","Sales":1413},{"Month":"1972-09","Sales":5877}],
              parsing: {
                xAxisKey:'Month',
                yAxisKey: 'Sales'
            },
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
  console.log("Plotted Successfully!")
}
}
