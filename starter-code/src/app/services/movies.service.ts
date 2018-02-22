import { Injectable } from "@angular/core";
import movies from "../../sample-movies";

@Injectable()
export class MoviesService {
  movies: string;
  misPelis: Array<any> = movies;
  constructor() {}

  getMovies() {
    return this.misPelis;
  }

  getMovie(id) {
    for (let i = 0; i < this.misPelis.length; i++) {
      if (this.misPelis[i].id == id) {
        return this.misPelis[i];
      }
    }
  }
}
