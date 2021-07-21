import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  userData:any;

  constructor( private http:HttpClient) { }

  public getusers():Observable<any>
      {
        
          return this.http.get('users.php');
      }

  
  //add new user    
  public adduser(userData: any)
  {
    return this.http.post('users.php/', userData).subscribe((res) => {
    console.log(res);
  });
  }
  
  //delete user
  public deleteuser(userid:any)
  {
    return this.http.post('users.php/'
    , userid).subscribe((res: any) => {});
  }


  singleuserdata:any;
  //get single user
  public getsingleuser(userid:any)
  {
    return this.http.post('users.php/'
    , userid).subscribe((res: any) => {
      this.singleuserdata = res[0];
      
    });
  }
  //update user
  public updateuser(userid:any)
  {
    return this.http.post('users.php/'
    , userid).subscribe((res: any) => {});
  }
}
