import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  replyData:string="";
  @Input() dataReceivedFromParent:string="";
   
  @Output()
  emitChild:EventEmitter<string> = new EventEmitter();

  sendData(){
    this.emitChild.emit(this.replyData);
  }
}
