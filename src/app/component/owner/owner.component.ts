import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersService } from 'src/app/services/owners.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { OwnerDetailsComponent } from '../owner-details/owner-details.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [
    CommonModule,
    PaginationComponent,
    OwnerDetailsComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent implements OnInit {
  owners: any[] = [];
  currentPage = 1;
  pageSize = 4;
  totalPages = 1;
  getStatusClass(status: number): string {
    switch (status) {
      case 0:
        return 'Active';
      case 1:
        return 'Inactive';
      case 2:
        return 'Suspended';
      default:
        return '';
    }
  }

  getAlternativeStatus(status: number): string {
    switch (status) {
      case 0:
        return 'Active';
      case 1:
        return 'Inactive';
      case 2:
        return 'Suspended';
      default:
        return '';
    }
  }

  constructor(private OwnersService: OwnersService) {}
  ngOnInit(): void {
    this.loadOwners(this.currentPage);
  }
  loadOwners(page: number): void {
    this.OwnersService.getOwners(page, this.pageSize).subscribe((response) => {
      this.owners = response.data;
      this.totalPages = response.paginationInfo.totalPages;
    });
  }
  onPageChanged(page: number): void {
    this.currentPage = page;
    this.loadOwners(this.currentPage);
  }
}
