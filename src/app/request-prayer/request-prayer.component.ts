import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PrayerServiceService} from "../services/prayer-services/prayer-service.service";
import {Categories} from "../models/categories.model";
import {PrayerRequests} from "../models/prayer-requests.model";

@Component({
  selector: 'app-request-prayer',
  templateUrl: './request-prayer.component.html',
  styleUrls: ['./request-prayer.component.css']
})
export class RequestPrayerComponent implements OnInit {

  prayerRequest: string = "";
  selectedCategory: number = 0;
  categories: Categories[] = [];
  prayerRequests: PrayerRequests[] = [];
  prayerRequestId: number = -1;

  constructor(private route: ActivatedRoute, private service: PrayerServiceService) {
  }

  ngOnInit(): void {
    this.selectedCategory = 0;
    this.prayerRequest = "";
    // Getting the categories for the dropdown menu
    this.service.getCategories((categories) => {
      this.categories = categories;
    });

    // Getting the prayer requests
    this.service.getPrayers((prayerRequests: PrayerRequests []) => {
      this.prayerRequests = prayerRequests;
      this.prayerRequestId = prayerRequests.length + 1;
      console.log("prayerRequestId", this.prayerRequestId);
    });
  }

  // On created PrayerRequest confirmation
  onPrayerRequestCreated() {
    console.log("The prayer request was successfully added");
  }

  // Handling validation for form controls
  createPrayerRequest(param: { prayerRequest: string | null }, param1: { selectedCategory: number | null }) {
    if (!this.prayerRequest) {
      document.getElementsByName('prayerRequest')[0].classList.add('is-invalid');
      return;
    }

    if (!this.selectedCategory) {
      document.getElementsByName('selectedCategory')[0].classList.add('is-invalid');
      return;
    }

    console.log("Submitted Prayer Request", this.prayerRequest);
    console.log("Submitted Category => ", this.selectedCategory);

    this.service.createPrayerRequest(this.prayerRequests, param.prayerRequest!, param1.selectedCategory!, this.onPrayerRequestCreated.bind(this));
    this.service.createPrayerRequestCategory(this.prayerRequestId, this.selectedCategory, this.onPrayerRequestCategoryCreated.bind(this));
  }

  onPrayerRequestCategoryCreated() {
    console.log("The prayer request category was successfully added");
  }

  onPrayerRequestInput() {
    const prayerRequestInput = document.getElementsByName('prayerRequest')[0];
    if (this.prayerRequest) {
      prayerRequestInput.classList.remove('is-invalid');
      prayerRequestInput.classList.add('is-valid');
    } else {
      prayerRequestInput.classList.remove('is-valid');
    }
  }

  onCategorySelect() {
    const categorySelect = document.getElementsByName('selectedCategory')[0];
    if (this.selectedCategory) {
      categorySelect.classList.remove('is-invalid');
      categorySelect.classList.add('is-valid');
    } else {
      categorySelect.classList.remove('is-valid');
    }

  }


}
