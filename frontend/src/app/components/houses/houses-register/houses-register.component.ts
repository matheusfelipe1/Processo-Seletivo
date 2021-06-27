import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HousesService } from 'src/app/houses.service';

interface UF {
  value: string;
  viewValue: string;
}
const error: Record<string, string> = {
  residencial: 'Nome Residencial',
  descricao: 'Descrição',
  preco: 'Preço de venda',
  preco_aluguel: 'Preço de aluguel',
  cep: 'CEP residencial',
  endereco: 'Endereço do imóvel',
  bairro: 'Bairro do imóvel',
  cidade: 'Cidade do imóvel',
  estado: 'Estado do imóvel',
  cep_empresa: 'CEP da empresa',
  endereco_empresa: 'Endereço da empresa',
  bairro_empresa: 'Bairro da empresa',
  cidade_empresa: 'Cidade da empresa',
  uf_empresa: 'Estado da empresa',
  contato: 'Contato da empresa',
  email: 'E-mail da empresa',
  cnpj: 'CNPJ da empresa',
};

@Component({
  selector: 'app-houses-register',
  templateUrl: './houses-register.component.html',
  styleUrls: ['./houses-register.component.css'],
})
export class HousesRegisterComponent implements OnInit {
  constructor(private HousesService: HousesService, private route: Router) {}

  housesObject = {
    residencial: '',
    descricao: '',
    preco: '',
    preco_aluguel: '',
    cep: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep_empresa: '',
    endereco_empresa: '',
    bairro_empresa: '',
    cidade_empresa: '',
    uf_empresa: '',
    contato: '',
    email: '',
    cnpj: '',
  };

  ngOnInit(): void {}

  ufs: UF[] = [
    { value: 'RO', viewValue: 'RO' },
    { value: 'AC', viewValue: 'AC' },
    { value: 'AM', viewValue: 'AM' },
    { value: 'RR', viewValue: 'RR' },
    { value: 'PA', viewValue: 'PA' },
    { value: 'AP', viewValue: 'AP' },
    { value: 'TO', viewValue: 'TO' },
    { value: 'MA', viewValue: 'MA' },
    { value: 'PI', viewValue: 'PI' },
    { value: 'CE', viewValue: 'CE' },
    { value: 'RN', viewValue: 'RN' },
    { value: 'PB', viewValue: 'PB' },
    { value: 'PE', viewValue: 'PE' },
    { value: 'AL', viewValue: 'AL' },
    { value: 'SE', viewValue: 'SE' },
    { value: 'BA', viewValue: 'BA' },
    { value: 'MG', viewValue: 'MG' },
    { value: 'ES', viewValue: 'ES' },
    { value: 'RJ', viewValue: 'RJ' },
    { value: 'SP', viewValue: 'SP' },
    { value: 'PR', viewValue: 'PR' },
    { value: 'SC', viewValue: 'SC' },
    { value: 'RS', viewValue: 'RS' },
    { value: 'MS', viewValue: 'MS' },
    { value: 'MT', viewValue: 'MT' },
    { value: 'GO', viewValue: 'GO' },
    { value: 'DF', viewValue: 'DF' },
  ];

  description = new FormControl();
  onDescriptionChange() {
    this.housesObject.descricao = this.description.value;
  }

  showSpinner = false;

  registerHouses(): void {
    try {
      Object.entries(this.housesObject).forEach(([key, value]) => {
        this.HousesService.verifyNullValues(value, error[key]);
        // esse algoritmo entra dentro objeto e verifica se suas chaves estão nulas, se sim, quais
      });
      this.showSpinner = true;
      this.HousesService.postHouses(this.housesObject).subscribe(() => {
        this.HousesService.message(
          `Imóvel Residencial ${this.housesObject.residencial} cadastrado com sucesso!`
        );
        this.route.navigate(['/']);
      });
    } catch (error) {
      throw error;
    }
  }

  cancelOperation(): void {
    this.route.navigate(['/']);
  }
}
