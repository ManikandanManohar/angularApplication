import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrosterService } from 'src/app/service/troster.service';
import { MainComponent } from '../main/main.component';
import { TestingComponent } from '../testing/testing.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { UserviewComponent } from '../userview/userview.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'userview', component: UserviewComponent },
  { path: 'userdetails/:id', component: UserdetailsComponent },
  {
    path: 'testing', component: TestingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
