import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PrayerServiceService} from '../services/prayer-services/prayer-service.service';
import {PrayerRequests} from '../models/prayer-requests.model';
import {PrayerRequestCategory} from '../models/prayer-request-category.model'
import {Categories} from '../models/categories.model';
import {PrayerRequestDTO} from '../models/prayer-request-dto.model';
import {User} from '../models/user.model';
import {PrayerRequestComment} from '../models/prayer-request-comments.model';

@Component({
  selector: 'app-list-prayer-requests',
  templateUrl: './list-prayer-requests.component.html',
  styleUrls: ['./list-prayer-requests.component.css']
})
export class ListPrayerRequestsComponent implements OnInit {

  prayerRequestDTO: PrayerRequestDTO[] = [];
  prayerRequests: PrayerRequests[] = [];
  prayerRequestCategories: PrayerRequestCategory[] = [];
  categories: Categories[] = [];
  users: User[] = [];
  selectedPrayerRequest: PrayerRequestDTO | null = null;
  prayerRequestComments: PrayerRequestComment[] = [];
  prayerRequestId: number | null = null
  commentText: string = '';
  showCommentSection: boolean | null = null;

  constructor(private route: ActivatedRoute, private service: PrayerServiceService) {
  }

  ngOnInit() {
    this.showCommentSection = false;
    this.service.getPrayers((prayerRequests) => {
      this.prayerRequests = prayerRequests;
    });

    this.service.getPrayerRequestCategories((prayerRequestCategory) => {
      this.prayerRequestCategories = prayerRequestCategory;
    });

    this.service.getCategories((categories) => {
      this.categories = categories;
    });

    this.service.getUsers((users) => {
      this.users = users;
    });
    console.log('Getting prayer request data');

    this.service.getPrayerRequestData((prayerRequestDTO: PrayerRequestDTO[]) => {
      this.prayerRequestDTO = prayerRequestDTO;
      console.log('this.prayerRequestDTO', prayerRequestDTO);
    });


  }

  public onSelectedPrayerRequest(prayerRequest: PrayerRequestDTO): void {
    this.commentText = '';
    this.prayerRequestComments = [];
    prayerRequest.isSelected = true;
    this.selectedPrayerRequest = prayerRequest;
    console.log('selectedPrayerRequest', this.selectedPrayerRequest);

  }

  onCloseDetails(prayerRequest: { selectedPrayerRequest: PrayerRequestDTO | null }): void {
    if (this.selectedPrayerRequest != null) {
      this.selectedPrayerRequest.isSelected = false;
    }
    console.log("selectedPrayerRequest", prayerRequest);
  }

  onCreateComment(prayerRequest: { selectedPrayerRequest: PrayerRequestDTO | null }): void {
    if (!this.showCommentSection) {
      console.log('showCommentSection', this.showCommentSection);
      this.showCommentSection = true;
      console.log('showCommentSection', this.showCommentSection);
    }
  }


  onGetComments(prayerRequestId: number): void {
    this.prayerRequestId = prayerRequestId;
    console.log('prayerRequestId', prayerRequestId);
    console.log('this.prayerRequestId', this.prayerRequestId);
    this.service.getComments(prayerRequestId, (prayerRequestComments: PrayerRequestComment[]) => {
      this.prayerRequestComments = prayerRequestComments;
    });
  }

  onCommentCreated() {
    console.log('Comment created!');
  }

  onSendPrayerRequestComment(param: { selectedPrayerRequest: PrayerRequestDTO | null }) {
    console.log('this.commentText', this.commentText);
    this.service.createPrayerRequestComment(param.selectedPrayerRequest!, this.commentText, this.onCommentCreated.bind(this));
    this.showCommentSection = false;
    this.commentText = "";
  }

  onPrayForThisUserRequest(param: { selectedPrayerRequest: PrayerRequestDTO | null }) {
    if (this.selectedPrayerRequest) {
      console.log('this.selectedPrayerRequest Pray button', this.selectedPrayerRequest);

    }
  }
}






