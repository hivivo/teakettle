import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = true;
  name: string;

  constructor(protected service: TestService) { }

  ngOnInit() {
    this.service
      .getName()
      .subscribe(
        name => this.name = name,
        error => console.log(error),
        () => this.isLoading = false
      );
  }

}
