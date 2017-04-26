import { Component, OnInit } from '@angular/core';
import {GithubService} from './github.service';
import {RepoComponent} from'../repo/repo.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string="";
  repos=null;
  owner=null;
  constructor(private githubService: GithubService) { }
  getRepos() {
    if(this.userName.length>0){
      this.githubService.getRepositories(this.userName).subscribe(
        (data)=>{
          data = JSON.parse(data['_body']);
          this.repos = data;
          console.log(this.repos);
          this.owner = this.repos[0].owner;
        },
        (error)=>console.error(error)
      )
    }

  }
  ngOnInit() {
  }

}
