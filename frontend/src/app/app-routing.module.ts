import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseByIdComponent } from './components/houses/house-by-id/house-by-id.component';
import { HousesRegisterComponent } from './components/houses/houses-register/houses-register.component';
import { HousesTableComponent } from './components/houses/houses-table/houses-table.component';

const routes: Routes = [
  {
    path: "",
    component: HousesTableComponent
  },
  {
    path: "houses/:id",
    component: HouseByIdComponent
  },
  {
    path: "register",
    component: HousesRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
