import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrosterService } from 'src/app/service/troster.service';
import { InvoiceComponent } from '../invoice/invoice.component';
import { MainComponent } from '../main/main.component';
import { MaterialformComponent } from '../materialform/materialform.component';
import { TestingComponent } from '../testing/testing.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { UserviewComponent } from '../userview/userview.component';
import { ViewComponent } from '../view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'userview', component: UserviewComponent },
  { path: 'userdetails/:id', component: UserdetailsComponent },
  { path: 'testing', component: TestingComponent },
  { path:'materialform',component:MaterialformComponent},
  { path:'view',component:ViewComponent},  
  { path:'view/:id',component:ViewComponent},
  {
    path:'invoice',component:InvoiceComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
