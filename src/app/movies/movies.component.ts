import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
 enterYear: number=0;
 constructor(){}

ngOnInit(): void {
  
}

getMovies(){
  alert(`Entered year is: ${this.enterYear}`);
}
}
