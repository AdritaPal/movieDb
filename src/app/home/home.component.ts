import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from '../config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  imageAPI = "https://image.tmdb.org/t/p/w500";

  getData(){


    this.http.get('https://api.themoviedb.org/3/trending/movie/week?api_key='+api.apiKey).subscribe((res)=>{
      this.data = res;
      console.log(this.data);
      
    })
  }

}
