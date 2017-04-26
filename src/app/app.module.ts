import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { GithubService} from './home/github.service';
import { RepoComponent } from './repo/repo.component';
const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail/:user/:id',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
