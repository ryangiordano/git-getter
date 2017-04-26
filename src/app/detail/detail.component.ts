import { Component, OnInit,OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {GithubService} from '../home/github.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  repo;
  dateCreated:string;
  constructor(private githubService: GithubService,private route:ActivatedRoute) { }

  ngOnInit() {


    let id = this.route.snapshot.params['id'];
    let userName = this.route.snapshot.params['user'];
    this.githubService.getRepositories(userName).subscribe(
      response=>{
        let repos =JSON.parse(response['_body']);
        this.repo = repos.filter(repo=>repo.id==id)[0];
        let date = new Date(this.repo.created_at);
        this.dateCreated =`${date.getMonth()}/${date.getFullYear()} `;
        console.log(this.repo)
      },
      error=>{
        console.log(error)
      }
    )
  }
  ngOnDestroy(){

  }
}
