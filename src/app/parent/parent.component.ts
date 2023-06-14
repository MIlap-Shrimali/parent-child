import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message:string="";
  dataReceivedFromChild:string="";

 getDatafromchild(data:any){
   this.dataReceivedFromChild = data;
}
}