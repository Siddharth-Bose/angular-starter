import { Component, Output, EventEmitter } from '@angular/core';
import { Server } from 'src/app/Server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverAdded!: EventEmitter<Server>;
  @Output() blueprintAdded!: EventEmitter<Server>;
}
