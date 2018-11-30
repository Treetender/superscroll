import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.css']
})
export class BasicScrollComponent implements OnInit {

  people;

  constructor() { 
    this.people = Array(100)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.findName(),
          bio: faker.hacker.phrase(),
          company: faker.company.companyName(),
          avatar: faker.image.avatar(),
          email: faker.internet.exampleEmail(),
          job: faker.name.jobTitle()
        };
      });
   }

  ngOnInit() {
  }

}
