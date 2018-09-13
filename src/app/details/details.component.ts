import { Component, OnInit } from '@angular/core';

// impoeted DataService, becoz we have to in this component
import {  DataService } from '../data.service';

// observable holds the data that return from API
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // WE create users$ is property that holding return data from API
     users$: Object;


  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.users$ = params.id );
   }
  // Data is Instance of DataSerice, and route is Instane of ActivatedRoute

  ngOnInit() {
    this.data.getUser(this.users$).subscribe(
      data => this.users$ = data
    );
  }

}
