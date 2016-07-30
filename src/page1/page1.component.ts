import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Page1Service } from './page1.service';
import { Hero } from '../types';


@Component({
  moduleId: module.id,
  selector: 'my-page1',
  template: `
    <h3>Hero List</h3>
    
    <div>
      <ul class="list-group">
        <li *ngFor="let hero of heroes | async" class="list-group-item">
          <button class="btn btn-outline-primary btn-sm" (click)="editHero(hero)">Edit</button>
          <button class="btn btn-outline-warning btn-sm" (click)="deleteHero(hero)">Delete</button>
          <span>id: {{hero.id}} / name: {{hero.name}}</span>
        </li>
      </ul>
    </div>
    <div>
      <button class="btn btn-outline-primary" (click)="addHero()">Add Hero</button>
    </div>
  `,
  providers: [Page1Service],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Component implements OnInit {

  constructor(
    public service: Page1Service,
    public router: Router,
    public cd: ChangeDetectorRef
  ) { }

  ngOnInit() { }


  addHero() {
    this.router.navigate(['/page2']);
  }

  editHero(hero: Hero) {
    this.router.navigate(['/page2', hero.id]);
  }

  deleteHero(hero: Hero) {
    this.service.deleteHero(hero);
  }

  get heroes() { return this.service.heroes$; }

}