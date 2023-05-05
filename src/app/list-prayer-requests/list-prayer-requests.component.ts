import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrayerServiceService } from '../services/prayer-service.service';
import { PrayerRequests } from '../models/prayer-requests.model';
import { PrayerRequestCategory } from '../models/prayer-request-category.model'
import { Categories } from '../models/categories.model';
import { PrayerRequestDTO } from '../models/prayer-request-dto.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-list-prayer-requests',
  templateUrl: './list-prayer-requests.component.html',
  styleUrls: ['./list-prayer-requests.component.css']
})
export class ListPrayerRequestsComponent implements OnInit{
  prayerRequestDTO: PrayerRequestDTO[] = [];
  prayerRequests: PrayerRequests[] = [];
  prayerRequestCategories: PrayerRequestCategory[] = [];
  categories: Categories[] = [];
  users: User[] = [];
  selectedPrayerRequest: PrayerRequestDTO | null = null;
  prayerRequest: PrayerRequestDTO[] = [];
  
  constructor(private route: ActivatedRoute, private service: PrayerServiceService) {}

  ngOnInit() {

    console.log('Getting prayer request data');
    this.service.getPrayerRequestData((prayerRequestDTO: PrayerRequestDTO[]) => {
      this.prayerRequestDTO = prayerRequestDTO;
      console.log('this.prayerRequestDTO', prayerRequestDTO);
    });

  }

  public onSelectedPrayerRequest(prayerRequest: PrayerRequestDTO): void {

    prayerRequest.isSelected = true;
    this.selectedPrayerRequest = prayerRequest;
    console.log('selectedPrayerRequest', this.selectedPrayerRequest);
  }
}





