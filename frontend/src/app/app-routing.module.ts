import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseByIdComponent } from './components/houses/house-by-id/house-by-id.component';
import { HousesCadastroComponent } from './components/houses/houses-cadastro/houses-cadastro.component';
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
    path: "cadastro",
    component: HousesCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
