import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListAnalyticsComponent} from './list-analytics/list-analytics.component';
import {ListBookmarksComponent} from './list-bookmarks/list-bookmarks.component';
import {ListCategoriesComponent} from './list-categories/list-categories.component';
import {ListPrayerRequestsComponent} from './list-prayer-requests/list-prayer-requests.component';
import {HomeComponent} from "./home/home.component";
import {RequestPrayerComponent} from "./request-prayer/request-prayer.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'request-prayer', component: RequestPrayerComponent},
  {path: 'list-analytics', component: ListAnalyticsComponent},
  {path: 'list-bookmarks', component: ListBookmarksComponent},
  {path: 'list-categories', component: ListCategoriesComponent},
  {path: 'list-prayer-requests', component: ListPrayerRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
