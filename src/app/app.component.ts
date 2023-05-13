import {Component} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pray4MeApp';
  version = "1.0";

  constructor(private router: Router) {
  }

  public displayPrayerList() {
    this.router.navigate(['list-prayer-requests']);
  }

  public displayRequestPrayer() {
    this.router.navigate(['request-prayer']);
  }

  public displayVersion() {
    alert(this.title + "\n\n" + "Version: " + this.version);
  }
}

