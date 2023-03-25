import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService implements OnInit {
 
 
  getDataById(id: string) {
    throw new Error('Method not implemented.');
  }
  private  ApiUrl =environment.API_URL;
  private Mock_API=environment.mock_api;

  private login_URL = this.ApiUrl+ "auth/new/login"
  private user_Details = this.ApiUrl + 'auth/new/user-details';
  private mock_api=this.Mock_API + 'mockapi';

  constructor(
    
    private http: HttpClient,
    public router :Router,
    ) { }
  ngOnInit(): void {
  }

    Login(data : any){
      return this.http.post<any>(this.login_URL,data);
    }
    UserDetail(){
      return this.http.get<any>(this.user_Details);
    };
    Gettoken( ){
      return (localStorage.getItem('token') );
   };
   Logout(){
    localStorage.clear();
    this.router.navigate(['login'])
   };
   Getcareers() {
    return this.http.get<any>(this.mock_api);
  };
  createCarrers( data:any) {
    return this.http.post<any>(this.mock_api, data);
  };
  deletejob(id: any) {
    return this.http.delete<any>(this.mock_api + '/' + id);
  };
Edit(id:any){
  return this.http.get<any>(this.mock_api + '/' + id);
};
Update(data:any,id:any){
  return this.http.put<any>(this.mock_api + '/' + id, data);
};
get_file(): Observable<any>{
  return this.http.get( this.mock_api+ '/get_image'  )}
}
