# PaginationExampleAngular16
Pagination Example for Angular16 and ng_bootstrap 15

I have encountered an issue with an Angular pagination component. The provided StackBlitz example demonstrates how the "Prev" and "First" buttons are hidden when the user is on the first page, and the "Last" and "Next" buttons are hidden when the user is on the last page. The example works perfectly fine in Angular 10, ng-bootstrap 7.0.

However, after upgrading to Angular 16.1.4, ng-bootstrap 15.0.1, the functionality no longer works as expected. I have ensured that the related CSS code is included in the project to handle the hiding of the buttons:

li.page-item.disabled {
  display: none;
}
Unfortunately, this CSS rule doesn't seem to be working correctly in Angular 16.

Here is the StackBlitz link to the sample project: StackBlitz Angular 10, ng-bootstrap 7 Pagination Example

Could someone please help me identify the issue and provide a solution to hide the "First" and "Prev" buttons when the user is on the first page and hide the "Last" and "Next" buttons when the user is on the last page in Angular 16?


run it at stackBlitz:
https://stackblitz.com/github.com/liuw10612/PaginationExampleAngular16

