import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    const URL: string = 'https://postman-echo.com/basic-auth';

    this.http.get(URL).subscribe(res => {
      console.log(res)
      return res;
    })
                                                                                          
  }

}
