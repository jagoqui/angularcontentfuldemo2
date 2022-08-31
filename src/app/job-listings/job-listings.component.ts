import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { TypeJobListingFields } from '../content-types';
import { Entry } from 'contentful';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {

  jobListings: Entry<TypeJobListingFields>[] | undefined;
  
  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
    this.getJobListings();
  }
  getJobListings(){
  	this.contentService.getJobListings()
  	.subscribe({
   	  next: (entryCollection) => {
   	    this.jobListings = entryCollection.items;
   	    console.log(this.jobListings);
   	  }
   });
  }
}

