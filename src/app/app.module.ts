import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPrayerRequestsComponent } from './list-prayer-requests/list-prayer-requests.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListBookmarksComponent } from './list-bookmarks/list-bookmarks.component';
import { ListAnalyticsComponent } from './list-analytics/list-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPrayerRequestsComponent,
    ListCategoriesComponent,
    ListBookmarksComponent,
    ListAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
