import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeData = [
    {
      title: 'Box 1',
      description: 'Hello I am box 1',
      thumb: 'https://blog.tuf.edu.pk/wp-content/uploads/2021/03/information-technology-mean.jpg'
    },
    {
      title: 'Box 2',
      description: 'Hello I am box 2',
      thumb: 'https://blog.tuf.edu.pk/wp-content/uploads/2021/03/information-technology-mean.jpg'
    },
    {
      title: 'Box 3',
      description: 'Hello I am box 3',
      thumb: 'https://blog.tuf.edu.pk/wp-content/uploads/2021/03/information-technology-mean.jpg'
    },
    {
      title: 'Box 4',
      description: 'Hello I am box 4',
      thumb: 'https://blog.tuf.edu.pk/wp-content/uploads/2021/03/information-technology-mean.jpg'
    },
    {
      title: 'Box 5',
      description: 'Hello I am box 5',
      thumb: 'https://blog.tuf.edu.pk/wp-content/uploads/2021/03/information-technology-mean.jpg'
    },
    {
      title: 'Box 6',
      description: 'Hello I am box 6',
      thumb: 'https://blog.tuf.edu.pk/wp-content/uploads/2021/03/information-technology-mean.jpg'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
