import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  page = 1;
  maxSize = 5;
  collectionSize = 450;
  perPage = 10;
  calculateTotalPages = this.collectionSize / this.perPage;
  showingResultsText = "Showing results";
  displayingClaimsText = "Displaying claims";
  rowText = "Rows";
  showingRowsText = "Showing rows";

  selectedCount(chosenCount: number) {
    this.perPage = chosenCount;
  }
  public onPageChange(event: Event) {
    const currentPage = event;

  }
}
