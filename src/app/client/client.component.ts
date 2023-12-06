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
    JOBID:new FormControl(),
    id:new FormControl(),


  });

  buttonVariable:string = "Store Category"


  flag:boolean = false;
  clients:Array<Client>=[];
  constructor(public clientService:ClientService){}  // DI for Service class 

  
  ngOnInit(): void {
    this.clientService.loadClientDetails().subscribe({
      next:(result:any)=> {
        this.clients=result;
      },
      error:(error:any)=> {
        console.log(error);
       
      },
      complete:()=> {
        console.log("Done!")
      }
      })
    }


    loadClientInfo() : void {  //for loading data with button. 

      
  
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
  

    storeClientMeeting(): void {
      let meeting = this.clientRef.value
      
    if (this.buttonVariable=="Store Category"){

    
      this.clientService.storeClientMeeting(meeting).subscribe({

        next:(result: any)=> {
          console.log(result);
          
        },

        error:(error:any)=> {
          console.log(error);
        },

        complete:()=> {
          this.loadClientInfo();
          
        }
      
      })

      this.buttonVariable="Store Category"
    }else {

      this.clientService.updateClientMeeting(meeting).subscribe({

        next:(result: any)=> {
          console.log(result);
          
        },

        error:(error:any)=> {
          console.log(error);
        },

        complete:()=> {
          this.loadClientInfo();
          
        }
      
      });
      
      this.buttonVariable="Store Category"
    }

      
    }


    deleteMeeting(id: any): void {

     // console.log(id)
     this.clientService.deleteMeeting(id).subscribe({
      next:(result:any)=> {
        console.log(result)
      },
      error: (error: any)=> {
        console.error();
        
      },
      complete:()=>  {
        this.loadClientInfo();
      }
      
     })

    }

    updateMeeting(client: any): void {

      //console.log(id)

      this.clientRef.get("name")?.setValue(client.name);
      this.clientRef.get("JOBID")?.setValue(client.JOBID);
      this.clientRef.get("id")?.setValue(client.id);

      this.buttonVariable= "Update Meeting";
      }
      

    


 


}
  



