import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListPrayerRequestsComponent} from './list-prayer-requests/list-prayer-requests.component';
import {ListCategoriesComponent} from './list-categories/list-categories.component';
import {ListBookmarksComponent} from './list-bookmarks/list-bookmarks.component';
import {ListAnalyticsComponent} from './list-analytics/list-analytics.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {NgOptimizedImage} from "@angular/common";
import {PrayerDetailsModalComponent} from './prayer-details-modal/prayer-details-modal.component';
import {HomeComponent} from './home/home.component';
import { RequestPrayerComponent } from './request-prayer/request-prayer.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPrayerRequestsComponent,
    ListCategoriesComponent,
    ListBookmarksComponent,
    ListAnalyticsComponent,
    PrayerDetailsModalComponent,
    HomeComponent,
    RequestPrayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
