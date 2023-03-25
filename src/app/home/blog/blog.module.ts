import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { PipePipe } from '../pipe.pipe';
import { TrosterService } from 'src/app/service/troster.service';


@NgModule({
  declarations: [PipePipe ],
  imports: [
    CommonModule,
    BlogRoutingModule, 
   ToastrModule.forRoot(),

  ],
  providers: [TrosterService ]
})
export class BlogModule { }
