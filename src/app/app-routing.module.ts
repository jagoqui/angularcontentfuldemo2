import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { JobListingComponent } from './job-listing/job-listing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listings' },
  { path: 'listings', component: JobListingsComponent },
  { path: 'listing/:id', component: JobListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
