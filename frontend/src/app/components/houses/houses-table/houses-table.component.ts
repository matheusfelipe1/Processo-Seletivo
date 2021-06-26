import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HousesService } from 'src/app/houses.service';
import { House } from '../../house.model';

@Component({
  selector: 'app-houses-table',
  templateUrl: './houses-table.component.html',
  styleUrls: ['./houses-table.component.css']
})
export class HousesTableComponent implements OnInit {

  constructor(private HousesService: HousesService, private route: Router) { }

  houses: House[] = [];

  columns = ['ID', 'Residencial', 'Empresa', 'Preço de Venda', 'Preço de Aluguel', 'Ver'];

  ngOnInit(): void {
    this.HousesService.getHouse().subscribe(data => {
      this.houses = data
    })
  }
  navigateToRegister(): void {
    this.route.navigate(['register'])
  }

}
