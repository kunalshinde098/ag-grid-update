import { Component } from "@angular/core";
import { io } from "socket.io-client";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private socket: any;
  columnDefs = [{ field: "make", filter: true, sortable: true }, { field: "model", filter: true, sortable: true }, { field: "price", filter: true, sortable: true }];

  defaultColDef = {
    sortable: true
  };

  rowData = [];

  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Socket connected');
    });
    this.socket.on('data', (data: any) => {
      //console.log('Received data', data);
      //this.rowData.push(data);
      this.rowData = (data);
    });
  }
}
