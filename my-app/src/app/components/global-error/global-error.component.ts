import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {
  constructor( public errorService: ErrorService) {}

  // To show custom message we need to subscribe and show data with first appraoch
  // ngOnInit(): void {
  //     this.errorService.handle('Something went wrong')
  // }

  ngOnInit(): void {}
}
