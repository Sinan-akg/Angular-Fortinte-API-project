import { TestBed } from '@angular/core/testing';
import { CommunicationService } from 'C:/Users/sinan/Contacts/Projetwebdevfortnite/src/app/services/communication.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

describe('CommunicationService', () => {
  let service: CommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


