import { Component, OnInit } from '@angular/core';
import {GithubService} from './github.service';
import {RepoComponent} from'../repo/repo.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //initialize a default value, bind to form input
  userName: string="";
  //initialize properties
  repos=null;
  owner=null;
  error = null;
  constructor(private githubService: GithubService) { }
  getRepos() {
    //on submit, check if the input field is populated
    if(this.userName.length>0){
        //subscribe to the method on the githubService service
      this.githubService.getRepositories(this.userName).subscribe(
        (data)=>{
          data = JSON.parse(data['_body']);
          this.repos = data;
          if(this.repos.length <=0){
            //if there are no repos associated with the account, populate the error property, wipe owner property clean if it's defined.
            this.owner = null;
            this.error = `There are no repos connected with this name: "${this.userName}"`;
          }else{
            console.log(this.repos);
            this.owner = this.repos[0].owner;
            this.error = null;
          }
        },
        (error)=>{
          this.error =error['statusText'];
        }
      )
    }

  }
  ngOnInit() {
  }

}
