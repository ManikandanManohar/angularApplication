import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { UserdetailsComponent } from './home/userdetails/userdetails.component';
import { CustomService } from './service/custom.service';
import { ErrInterceptor } from './interceptor/err.interceptor';
import { CanactivateGuard } from './guard/canactivate.guard';
import { UserviewComponent } from './home/userview/userview.component';
import { ToastrModule  } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestingComponent } from './home/testing/testing.component';
import { MainComponent } from './home/main/main.component';
import { MaterialformComponent } from './home/materialform/materialform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxPrintModule } from 'ngx-print';
import { ViewComponent } from './home/view/view.component';
import { NgbModalModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceComponent } from './home/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserdetailsComponent,
    UserviewComponent,
    TestingComponent,
    MainComponent,
    MaterialformComponent,
    ViewComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxPrintModule,
    NgbModalModule  ,NgbModule ,NgbPaginationModule
  ],
  providers: [ CanactivateGuard,CustomService,
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true
    },
    {
       provide: HTTP_INTERCEPTORS, useClass: ErrInterceptor, multi: true 
      },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
