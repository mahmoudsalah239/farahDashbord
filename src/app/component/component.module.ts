import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';

import { TableComponent } from './table/table.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { CardModule } from 'primeng/card';

import { AdServicesComponent } from './ad-services/ad-services.component';
import { CarformComponent } from './ad-services/carform/carform.component';

import { BeautyFormComponent } from './ad-services/beauty-form/beauty-form.component';
import { HallFormComponent } from './ad-services/hall-form/hall-form.component';
import { PhotographerFormComponent } from './ad-services/photographer-form/photographer-form.component';
import { DressFormComponent } from './ad-services/dress-form/dress-form.component';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TableComponent,
    OwnerComponent,
    OwnerDetailsComponent,
    CardModule,
    CarformComponent,
    AdServicesComponent,NgxSpinnerModule,
  ],

  declarations: [
    
  
    HallFormComponent,
    PhotographerFormComponent,
    DressFormComponent,
  ],
})
export class ComponentsModule {}
