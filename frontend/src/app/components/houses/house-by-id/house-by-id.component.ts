import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from 'src/app/houses.service';

@Component({
  selector: 'app-house-by-id',
  templateUrl: './house-by-id.component.html',
  styleUrls: ['./house-by-id.component.css'],
})
export class HouseByIdComponent implements OnInit {
  constructor(
    private HousesService: HousesService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  housesById = {
    id: '',
    cep: '',
    endereco: '',
    cidade: '',
    estado: '',
    residencial: '',
    descricao: '',
    endereco_empresa: '',
    cidade_empresa: '',
    bairro_empresa: '',
    uf_empresa: '',
    cep_empresa: '',
    bairro: '',
    complemento: '',
    preco: '',
    preco_aluguel: '',
    cnpj: '',
    contato: '',
    email: '',
  };

  ngOnInit(): void {
    const getId = this.router.snapshot.paramMap.get('id');
    if (!getId) return;
    this.HousesService.getHouseById(getId).subscribe((data) => {
      const houses = Object(data);
      this.housesById = houses;
    });
  }
  navigateToUpdate(id: string): void {
    const url = `update/${id}`;
    this.route.navigate([url]);
  }
  navigateToDelete(id: string): void {
    const url = `delete/${id}`;
    this.route.navigate([url]);
  }
}
