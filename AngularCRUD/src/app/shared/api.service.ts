import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  PostEmployee(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
  }

  GetEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
  }

  deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
  }

  UpdateEmployee(id:number,data:any){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
  }
}
