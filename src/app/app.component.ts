import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { request } from './request';
import { forkJoin } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'netflix-clone';
  baseURL = 'https://api.themoviedb.org/3';
  imgPath = 'https://image.tmdb.org/t/p/original/';

  isSticky: any;

  actionMovies: any = '';
  comedyMovies = '';
  fetchData = '';
  documentryMovies = '';
  horrorMovies = '';
  netflixOrigin = '';
  romanceMovies = '';
  topRated = '';
  trending = '';

  homePageMovie: any;
  homeBackgroundImg: any;

  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.apiData();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 2;
  }

  apiData() {
    const actionMovies = this.http.get(
      this.baseURL + request.fetchActionMovies
    );
    const comedyMovies = this.http.get(
      this.baseURL + request.fetchComedyMovies
    );
    const fetchData = this.http.get(this.baseURL + request.fetchData);
    const documentryMovies = this.http.get(
      this.baseURL + request.fetchDocumentries
    );
    const horrorMovies = this.http.get(
      this.baseURL + request.fetchHorrorMovies
    );
    const netflixOrigin = this.http.get(
      this.baseURL + request.fetchNetflixOrigin
    );
    const romanceMovies = this.http.get(
      this.baseURL + request.fetchRomanceMovies
    );
    const topRated = this.http.get(this.baseURL + request.fetchTopRated);
    const trending = this.http.get(this.baseURL + request.fetchTrending);

    forkJoin({
      actionMovies: actionMovies,
      comedyMovies: comedyMovies,
      fetchData: fetchData,
      documentryMovies: documentryMovies,
      horrorMovies: horrorMovies,
      netflixOrigin: netflixOrigin,
      romanceMovies: romanceMovies,
      topRated: topRated,
      trending: trending,
    }).subscribe((res: any) => {
      this.dataService.apiData = res;
      this.actionMovies = res.actionMovies.results;
      this.comedyMovies = res.comedyMovies.results;
      this.fetchData = res.fetchData.results;
      this.documentryMovies = res.documentryMovies.results;
      this.horrorMovies = res.horrorMovies.results;
      this.netflixOrigin = res.netflixOrigin.results;
      this.romanceMovies = res.romanceMovies.results;
      this.topRated = res.topRated.results;
      this.trending = res.trending.results;
      const data = res.trending.results;
      const random = Math.floor(Math.random() * data.length);
      this.homePageMovie = data[random];
      this.homeBackgroundImg = this.homePageMovie?.backdrop_path;
      console.log(res.actionMovies);
    });
  }
}
