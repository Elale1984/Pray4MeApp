import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrayerRequests } from '../models/prayer-requests.model';
import { PrayerRequestCategory } from '../models/prayer-request-category.model';
import { PrayerRequestDTO } from '../models/prayer-request-dto.model';
import { Categories } from '../models/categories.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class PrayerServiceService {
  private host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  public getPrayers(
    callback: (prayerRequests: PrayerRequests[]) => void
  ): void {
    this.http
      .get<PrayerRequests[]>(this.host + '/prayer-requests')
      .subscribe((prayerRequests: PrayerRequests[]) => {
        callback(prayerRequests);
      });
  }

  public getPrayerRequestCategories(
    callback: (prayerRequestCategory: PrayerRequestCategory[]) => void
  ): void {
    this.http
      .get<PrayerRequestCategory[]>(this.host + '/prayer-request-category')
      .subscribe((prayerRequestCategories: PrayerRequestCategory[]) => {
        console.log('Categories = ', prayerRequestCategories);
        callback(prayerRequestCategories);
      });
  }

  public getCategories(
    callback: (categories: Categories[]) => void
  ): void {
    this.http
      .get<Categories[]>(this.host + '/categories/:categoryId')
      .subscribe((categories: Categories[]) => {
        console.log('Categories = ', categories);
        callback(categories);
      });
  }

  public getUsers(
    callback: (users: User[]) => void
  ): void {
    this.http
      .get<User[]>(this.host + '/users')
      .subscribe((users: User[]) => {
        console.log('Users = ', users);
        callback(users);
      });
  }

  public getPrayerRequestData(callback: (prayerRequestsDTO: PrayerRequestDTO[]) => void): void {
    this.getPrayers(prayerRequests => {
      this.getPrayerRequestCategories(prayerRequestCategories => {
        const categoryIds = prayerRequestCategories?.map(category => category.categoryId) ?? [];
        this.getCategories(categories => {
          const filteredCategories = categories?.filter(category => categoryIds.includes(category.categoryId));
          this.getUsers(users => {
            const prayerRequestsDTO: PrayerRequestDTO[] = prayerRequests?.map(prayerRequest => {
              const prayerRequestCategory = prayerRequestCategories?.find(category => category.prayerRequestId === prayerRequest.prayerRequestId);
              const category = filteredCategories?.find(category => prayerRequestCategory?.categoryId === category.categoryId);
              const user = users?.find(user => user.userId === prayerRequest.userId);

              return {
                category: category ? category.name : '',
                text: prayerRequest.text,
                createdAt: prayerRequest.createdAt,
                username: user ? user.username : '',
                isAnswered: prayerRequest.isAnswered,
                isSelected: false
              };
            }) ?? [];

            callback(prayerRequestsDTO);
          });
        });
      });
    });
  }
}
