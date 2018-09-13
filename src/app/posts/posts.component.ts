import { Component, OnInit } from '@angular/core';

// imported DataService, becoz we have to in this component
import {  DataService } from '../data.service';

// observable holds the data that return from API
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // WE create users$ is property that holding return data from API
  posts$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
  }

}
