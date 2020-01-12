import { Component, OnInit } from '@angular/core';
import {HellosService} from "../hellos.service";

@Component({
  selector: 'list-hellos',
  templateUrl: './list-hellos.component.html',
  styleUrls: ['./list-hellos.component.scss']
})
export class ListHellosComponent implements OnInit {
 
  hellos:Object;
  constructor(private _hellos:HellosService) { }

  ngOnInit() {

   // this._hellos.helloWorld();

   this._hellos.fetchHellosCollection().subscribe(data=>{
     console.log(data[0]); 
    this.hellos=data;
    //https://youtu.be/_TLhUCjY9iA?t=2483 
    //tutorial where i stopped last time
   });

  }

}
