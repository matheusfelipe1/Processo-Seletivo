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
};

@Component({
  selector: 'app-houses-cadastro',
  templateUrl: './houses-cadastro.component.html',
  styleUrls: ['./houses-cadastro.component.css'],
})
export class HousesCadastroComponent implements OnInit {
  constructor(private HousesService: HousesService, private route: Router) {}

  housesObjeto = {
    residencial: '',
    endereco: '',
    cidade: '',
    estado: '',
    bairro: '',
    preco: '',
    endereco_empresa: '',
    cep: '',
    cnpj: '',
    contato: '',
    email: '',
    descricao: '',
    uf_empresa: '',
    bairro_empresa: '',
    cidade_empresa: '',
    cep_empresa: '',
    preco_aluguel: '',
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

  descricao = new FormControl();
  onDescriptionChange() {
    this.housesObjeto.descricao = this.descricao.value;
  }

  cadastrarHouses(): void {
    try {
      Object.entries(this.housesObjeto).forEach(([key, value]) => {
        this.HousesService.verificaValoresVazios(value, error[key]);
      });
      this.HousesService.postHouses(this.housesObjeto).subscribe(() => {
        this.HousesService.message(
          `Imóvel Reseidencial ${this.housesObjeto.residencial} cadastrado com sucesso!`
        );
        this.route.navigate(['/']);
      });
    } catch (erro) {
      throw erro;
    }
  }

  cancelarOperacao(): void {
    this.route.navigate(['/']);
  }
}
