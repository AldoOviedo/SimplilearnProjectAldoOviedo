import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientRef = new FormGroup({

    name: new FormControl(),
    JOBID:new FormControl()

  });


  flag:boolean = false;
  clients:Array<Client>=[];
  constructor(public clientService:ClientService){}  // DI for Service class 

  
  ngOnInit(): void {
    this.clientService.loadClientDetails().subscribe({
      next:(result:any)=> {
        this.clients=result;
      },
      error:(error:any)=> {
        console.log(error)
      },
      complete:()=> {
        console.log("Done!")
      }
      })
    }

    storeClientMeeting(): void {
      let meeting = this.clientRef.value
      console.log(meeting);
    }

  loadClientInfo() : void {  //for loading data with button. 

    this.flag=true;

      this.clientService.loadClientDetails().subscribe({

        next:(result:any)=> {
          this.clients=result;

        },
        error:(error:any)=> {

          console.log(error)

        },
        complete:()=> {

          console.log("done!")

        }
      })

  }

 


}
  



