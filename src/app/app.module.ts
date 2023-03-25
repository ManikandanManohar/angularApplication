import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserdetailsComponent,
    UserviewComponent,
    TestingComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ CanactivateGuard,CustomService,
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true
    },
    {
       provide: HTTP_INTERCEPTORS, useClass: ErrInterceptor, multi: true 
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
