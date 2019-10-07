import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actorsDB: any[] = [];
  
  section = 1;

  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";

  // Component has access to the DatabaseService 
  // Bring me this DatabaseService and reference "dbService" variable, each time you want to call this service use "this.dbService"
  // Angular will create a new instance of DatabaseService (if not available) and inject it under the name ‘dbService’
  constructor( private dbService:DatabaseService ) { }

  //Get all Actors
  onGetActors() {
    // if ".subscribe" is missing, nothing will happen 
    // will return datatype of observable, will describe it to the user once the data becomes available 
    // parenthesis within subscribe provides the handler 
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }
  
  //Create a new Actor, POST request
  onSaveActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.createActor(obj).subscribe(result => {
      this.onGetActors();
    });
  }

  // Update an Actor
  onSelectUpdate(item) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  onUpdateActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.updateActor(this.actorId, obj).subscribe(result => {
      this.onGetActors();
    });
  }

  //Delete Actor
  onDeleteActor(item) {
    this.dbService.deleteActor(item._id).subscribe(result => {
      this.onGetActors();
    });
  }

  // This lifecycle callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetActors();
  }
  changeSection(sectionId) {
    this.section = sectionId;
    this.resetValues();
  }

  resetValues() {
    this.fullName = "";
    this.bYear = 0;
    this.actorId = "";
  }

}
