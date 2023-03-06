import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {
  private socket: any;
  //public gridOptions: GridOptions;

  public columnDefs;

  public rowData;
  // DefaultColDef sets props common to all Columns


  constructor() {

    this.columnDefs = [
      { field: 'id' },
      { field: 'name' },
      { field: 'age' },
      { field: 'email' },
    ];

    this.rowData = [{
        id:  1,
      name: 'John Doe',
      age:  18,
      email: 'johndoe@example.com'
    }
    ];
  };
  /*  this.socket = io('http://localhost:3000');
   this.socket.on('connect', () => {
     console.log('Socket connected');
   });
   this.socket.on('data', (data: any) => {
     console.log('Received data', data);
     this.gridOptions.api.setRowData(data);
   }); */
}
