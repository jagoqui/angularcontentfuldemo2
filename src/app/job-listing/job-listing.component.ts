import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContentService } from '../content.service';
import { TypeJobListingFields } from '../content-types';




@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

  jobListing: TypeJobListingFields | null = null;
  constructor(public contentService: ContentService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.contentService.getJobListingById(params.get('id') as string)
      )).subscribe({
   	  next: (entry) => {
   	    this.jobListing = entry.fields;
      }});
  }
}

