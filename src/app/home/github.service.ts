import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GithubService{
  constructor(private http:Http){

  }
  getRepositories(user){
    //return observable that the user can subscribe to via the component that calls the imported method.
    return this.http.get(`https://api.github.com/users/${user}/repos?per_page=100`)
  }
}
