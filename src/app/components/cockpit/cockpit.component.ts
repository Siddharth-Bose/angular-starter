import { Component, Output, EventEmitter } from '@angular/core';
import { Server } from 'src/app/Server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverAdded= new EventEmitter<Server>;
  @Output() blueprintAdded= new EventEmitter<Server>;
  name!:string
  content!:string
  serverAdd(){
    this.serverAdded.emit({name:this.name, content:this.content})
  }
  blueprintAdd(){
    this.blueprintAdded.emit({name:this.name, content:this.content})
    
  }
}
