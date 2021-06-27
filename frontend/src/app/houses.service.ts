import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { House } from './components/house.model';

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  baseApiUrl = 'http://localhost:8000';

  message(message: string): void {
    this.snackbar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    // para exibir mensagens de sucesso, erro, atualização e remoção
  }

  verifyNullValues(data: string, value: string): void {
    if (data.length === 0 && !data.trim())
      throw this.message(`${value} não pode ser nulo!`);
    // este algoritmo recebe um dado e um valor, se o dado for nulo ele retorna o valor dizendo que é nulo
  }

  getHouse(): Observable<House[]> {
    const url = `${this.baseApiUrl}/api/houses`;
    return this.http.get<House[]>(url); //  função para obter os dados da url
  }

  getHouseById(id: string): Observable<House> {
    const url = `${this.baseApiUrl}/api/houses/${id}`;
    return this.http.get<House>(url); //  função para obter os dados da url pelo ID
  }

  postHouses(houses: object): Observable<House> {
    const url = `${this.baseApiUrl}/api/houses/create`;
    return this.http.post<House>(url, houses); // para inserir os dados dentro do banco através da url
  }

  putHouses(houses: object, id: string): Observable<House> {
    const url = `${this.baseApiUrl}/api/houses/edit/${id}`;
    return this.http.put<House>(url, houses);
  }

  deleteHouses(id: string): Observable<House> {
    const url = `${this.baseApiUrl}/api/houses/delete/${id}`;
    return this.http.delete<House>(url); //função para excluir os dados dentro do banco através da url
  }
}
