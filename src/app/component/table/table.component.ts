import { Component, OnInit } from '@angular/core';
import { Product, TopSelling, TableRows, Employee } from './table-data';
import { NgFor } from '@angular/common';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],

  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {
  topSelling: Product[];

  trow: TableRows[];

  constructor(private OwnersService: OwnersService) {
    this.topSelling = TopSelling;

    this.trow = Employee;
  }
  ngOnInit(): void {}
}
