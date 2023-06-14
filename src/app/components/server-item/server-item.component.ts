import { Component, Input} from '@angular/core';
import { Server } from 'src/app/Server.model';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {
  @Input() server!:Server;
}
