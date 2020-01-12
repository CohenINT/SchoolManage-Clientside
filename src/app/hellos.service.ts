import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {configuration} from "../../config"
import { Person } from './person';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HellosService {

  constructor(private _http:HttpClient) { }


  helloWorld()
  {
    return console.log("Hello World!!!");
  }

submitHelloForm(data:{content:Person}) : Observable<any>
{//return ok message from server after posting
return this._http.post(configuration.HTTP_REQUESTS.POST_HELLO,data);
}
   
fetchHellosCollection()
{
  return this._http.get(configuration.HTTP_REQUESTS.GET_HELLOS);
}



}
