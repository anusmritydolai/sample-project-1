import { Component, OnInit, ViewChild } from '@angular/core';
import { OthersService } from 'src/app/services/others.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private othersService: OthersService) { }

  ngOnInit(): void {
    this.othersService.getClients().subscribe((data: Client[]) => {
      this.dataSource = new MatTableDataSource<Client>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  displayedColumns: string[] = ['id', 'name', 'date', 'members', 'symbol'];
  dataSource = new MatTableDataSource<Client>();

}

export interface Client {
  id: number;
  name: string;
  date: string;
  members: { email: string, name: string }[];
  symbol: string;
}

//person_add,xyz, cancel