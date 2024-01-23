import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieDataService } from '../movie-data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from 'console';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  movieYear:number=0;
  users: any;
  
  constructor(private toastr:ToastrService,private https:HttpClient,private movie:MovieDataService){
    
  }


  ngOnInit(): void {
    
  }

 /* users: any;
constructor(private movie:MovieDataService){
   this.movie.getMoviess().subscribe(data=>{
    this.users=data;
   });
}
getUsersFormData(data:any){
  console.warn(data)
  this.movie.savemovie(data).subscribe((result)=>{
    console.warn(result)
  })
}*/
 
getMovies(){
  //alert(`Entered year is: ${this.enterYear}`);
  //this.toastr.success(`The year entered is:  ${this.enterYear}`);
  //this.toastr.error(`Can't fetch movie by year: ${this.movieYear} `);
  this.movie.getMovies(this.movieYear).subscribe(  data=> { 
    console.log(data)
   
  },
  error=>{
    console.log(error)
  }
  );

}
}
