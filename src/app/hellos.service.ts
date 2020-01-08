import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {configuration} from "../../config"


@Injectable({
  providedIn: 'root'
})
export class HellosService {

  constructor(private _http:HttpClient) { }


  helloWorld()
  {
    return console.log("Hello World!!!");
  }


   
fetchHellosCollection()
{

  return this._http.get(configuration.HTTP_REQUESTS.GET_HELLOS);
}

}
