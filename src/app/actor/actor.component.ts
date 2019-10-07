import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  // Component has access to the DatabaseService 
  // Bring me this DatabaseService and reference "dbService" variable, each time you want to call this service use "this.dbService"
  constructor( private dbService:DatabaseService ) { }

  // event callback
  ngOnInit() {
  }

}
