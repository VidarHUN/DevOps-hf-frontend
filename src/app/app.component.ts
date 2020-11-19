import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-counter';

  public counterValue: number;
  counterSub : Subscription;

  constructor(private counterService: CounterService, private httpClient: HttpClient){}

  incrementCounter(){
    this.counterService.incrementCounter()
  }

  ngOnInit(){
    this.counterSub = this.counterService.incrementCounter().subscribe( data =>{
      console.log(data);
      const dataString = JSON.stringify(data);
      JSON.parse(dataString, (key, value) => {
      if (typeof value === 'number') {
      this.counterValue = value
      }
      return value;
      });

    });


    /*this.counterService.incrementCounter()
    // resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      // display its headers     
      // access the body directly, which is typed as `Config`.
      this.counterValue =  resp.body;
      console.log(this.counterValue);
    });*/

  }

  ngOnDestroy(){
    //this.counterSub.unsubscribe();
  }

}
