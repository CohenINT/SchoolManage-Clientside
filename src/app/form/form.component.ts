import { Component, OnInit } from '@angular/core';
import {Person} from "../person";
import { HellosService } from '../hellos.service';
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model=new Person(1,"","","");
  submitted=false;
  
  
   // TODO: Remove this when we're done
  //  get diagnostic() { return JSON.stringify(this.model); }
   
  constructor(private _hellos:HellosService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.submitted=true;
    this._hellos.submitHelloForm({content:this.model})
    .subscribe(data=> {console.log("succeded in loading new hello to server "+data.hello)
     console.log(data);
    },(err)=>{console.log("Failed! "+err)}); 
    console.log(this.model);
    this.model=new Person(2,"","","");

  }

}
