import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseByIdComponent } from './components/houses/house-by-id/house-by-id.component';
import { HousesDeleteComponent } from './components/houses/houses-delete/houses-delete.component';
import { HousesRegisterComponent } from './components/houses/houses-register/houses-register.component';
import { HousesTableComponent } from './components/houses/houses-table/houses-table.component';
import { HousesUpdateComponent } from './components/houses/houses-update/houses-update.component';

const routes: Routes = [
  {
    path: "**",
    redirectTo: "/"
  },
  {
    path: '',
    component: HousesTableComponent,
  },
  {
    path: 'houses/:id',
    component: HouseByIdComponent,
  },
  {
    path: 'register',
    component: HousesRegisterComponent,
  },
  {
    path: 'update/:id',
    component: HousesUpdateComponent,
  },
  {
    path: 'delete/:id',
    component: HousesDeleteComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
