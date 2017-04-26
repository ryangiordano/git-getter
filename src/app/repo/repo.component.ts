import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input()
  repo;
  dateCreated:string;
  constructor() { }

  ngOnInit() {
    let date = new Date(this.repo.created_at);
    this.dateCreated =`${date.getMonth()}/${date.getFullYear()} `;

  }

}
