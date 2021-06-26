import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { House } from './components/house.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  baseApiUrl = "http://localhost:8000"

  message(message: string): void {
    this.snackbar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  verifyNullValues(data: string, value: string): void {
    if(data.length === 0 && !data.trim()) throw this.message(`${value} não pode ser nulo!`)
  }

  getHouse(): Observable<House[]> {
    const url = `${this.baseApiUrl}/api/houses`
    return this.http.get<House[]>(url)
  }

  getHouseById(id: string): Observable<House> {
    const url = `${this.baseApiUrl}/api/houses/${id}`
    return this.http.get<House>(url)
  }

  postHouses(houses: object): Observable<House> {
    const url = `${this.baseApiUrl}/api/houses/create`
    return this.http.post<House>(url, houses)
  }
  putHouses(houses: object, id: string): Observable<House> {
    const url = `${this.baseApiUrl}/api/houses/edit/${id}`
    return this.http.put<House>(url, houses)
  }
}
