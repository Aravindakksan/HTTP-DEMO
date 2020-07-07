import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  headerData
  getService(): Observable<any> {
    return this.http.get(
      "https://5f0475dc8b06d60016ddeb09.mockapi.io/HTTPDemoData"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }

  postService(data):Observable<any> {
    return this.http.post("https://5f0475dc8b06d60016ddeb09.mockapi.io/HTTPDemoData",data)
  }

  delProduct(id):Observable<any>{
    return this.http.delete(`https://5f0475dc8b06d60016ddeb09.mockapi.io/HTTPDemoData/${id}`)
  }

//   private url="https://5f0475dc8b06d60016ddeb09.mockapi.io/HTTPDemoData";
}
