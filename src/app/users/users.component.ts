import { Component, OnInit } from '@angular/core';

// impoeted DataService, becoz we have to in this component
import {  DataService } from '../data.service';

// observable holds the data that return from API
import { Observable } from 'rxjs';

// imports from animations functions
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  // Add this:
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger('50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })),
        {
          optional: true
        })
      ])
    ])
  ]
})

export class UsersComponent implements OnInit {

  // WE create users$ is property that holding return data from API
users$: Object;

  constructor(private data: DataService) { }
       // Data is Instance of DataSerice

  ngOnInit() {
    // ngOnInit is ng6 lifeCycle Hook
    // any code written here will executed when this component loads

    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }

}
