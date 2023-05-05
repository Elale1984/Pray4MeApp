import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pray4MeApp';

  constructor (private router: Router) { }

  public displayPrayerList(){
    this.router.navigate(['list-prayer-requests'], {queryParams: { data: new Date()}});
  }
}

