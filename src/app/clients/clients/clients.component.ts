import { Component, OnInit } from '@angular/core';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private othersService: OthersService) { }

  ngOnInit(): void {
    this.othersService.getClients().subscribe(data => {
      console.log(data);
      
    })
  }

}
