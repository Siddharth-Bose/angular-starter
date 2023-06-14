import { Component } from '@angular/core';
import { Server } from './Server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers:Server[]=[
    new Server('Server 1','Server 1 Content')
  ];

  
}
