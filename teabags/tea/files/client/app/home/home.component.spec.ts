import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { TestService } from '../services/test.service';

describe('Component: Home', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, HttpModule ],
      declarations: [ HomeComponent ],
      providers: [ TestService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the loading spinner', () => {
    expect(fixture.debugElement.query(By.css('md-spinner'))).toBeTruthy();
  });

});
