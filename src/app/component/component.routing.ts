import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';

import { AdServicesComponent } from './ad-services/ad-services.component';
import { CarformComponent } from './ad-services/carform/carform.component';
import { DressFormComponent } from './ad-services/dress-form/dress-form.component';
import { BeautyFormComponent } from './ad-services/beauty-form/beauty-form.component';
import { HallFormComponent } from './ad-services/hall-form/hall-form.component';
import { PhotographerFormComponent } from './ad-services/photographer-form/photographer-form.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'Owner',
        component: OwnerComponent,
      },
      {
        path: 'AddService',
        component: AdServicesComponent,
        // children: [{ path: 'addCar', component: CarformComponent }],
      },
      { path: 'AddService/addCar', component: CarformComponent },
      { path: 'AddService/addDress', component: DressFormComponent },
      { path: 'AddService/addBeauty', component: BeautyFormComponent },
      { path: 'AddService/addHall', component: HallFormComponent },
      {
        path: 'AddService/addPhotographer',
        component: PhotographerFormComponent,
      },
      {
        path: 'Owner/OwnerDetails/:id',
        component: OwnerDetailsComponent,
      },
    ],
  },
];
