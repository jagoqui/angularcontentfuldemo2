import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from '../environments/environment';
import { TypeJobListingFields } from './content-types';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });
  constructor() {}
  getJobListings(query?: object){
    return from(
    this.client.getEntries<TypeJobListingFields>(Object.assign({
     content_type: 'jobListing'
    }, query))
    );
  }
  getJobListingById(jobListingId: string, query?: any){
   return from(
     this.client.getEntry<TypeJobListingFields>(jobListingId, query)
     );
  }
}
