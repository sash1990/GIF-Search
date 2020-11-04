import { Component } from '@angular/core';
import { ApiService } from './helpers/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class AppComponent {
  title = 'test2';
  giphies: any = [];
  status= false;
  loading: boolean = false;
  constructor(private apiService: ApiService){

  }
  
  performSearch(searchTerm: HTMLInputElement): void {
    console.log(this.giphies);
    this.giphies = [];
    this.status= false;
    this.loading =true;
    setTimeout(()=>{
    let response = this.apiService.giphySearch(searchTerm.value).subscribe(
      response  => {
        this.giphies = response.data;
        this.status= true;
        this.loading =false;
      }
    )},2000);
}
}
