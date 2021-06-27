import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from 'src/app/houses.service';

@Component({
  selector: 'app-houses-delete',
  templateUrl: './houses-delete.component.html',
  styleUrls: ['./houses-delete.component.css'],
})
export class HousesDeleteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private HousesService: HousesService,
    private router: Router
  ) {}

  housesReadyToDelete = {
    residencial: '',
    descricao: '',
    preco: '',
    preco_aluguel: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.HousesService.getHouseById(id).subscribe((data) => {
      this.housesReadyToDelete = data;
    });
  }

  showSpinner = false;

  deleteHouse(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.showSpinner = true;
    this.HousesService.deleteHouses(id).subscribe(() => {
      this.HousesService.message('Imóvel residencial excluído com sucesso!');
      this.router.navigate(['/']);
    });
  }

  cancelOperation(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/']);
  }
}
