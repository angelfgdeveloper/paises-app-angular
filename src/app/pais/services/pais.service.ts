import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set('fields', 'flags,capital,name,population,cca2');
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    // name/aruba?fullText=true
    return this.http.get<Country[]>(url, { params: this.httpParams });
    // .pipe(
    //   catchError(err => of([]))
    // );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    // https://restcountries.com/v3.1/alpha?codes=col,pe,at
    const params = new HttpParams().set('codes', id);
    const url = `${this.apiUrl}/alpha`;
    return this.http.get<Country>(url, { params });
  }

  buscarRegion(region: string): Observable<Country[]> {
    // flags,capital,name,population,cca2
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
