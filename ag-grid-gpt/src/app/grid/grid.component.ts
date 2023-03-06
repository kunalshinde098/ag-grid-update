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
  public gridOptions: GridOptions;

  constructor() {
    this.gridOptions = {
      columnDefs: [
        { field: 'id' },
        { field: 'name' },
        { field: 'age' },
        { field: 'email' },
      ],
      rowData: [],
    };
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Socket connected');
    });
    this.socket.on('data', (data: any) => {
      console.log('Received data', data);
      this.gridOptions.api.setRowData(data);
    });
  }
}
