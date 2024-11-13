import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../shared/dtos/item.dto';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private apiUrl = 'http://localhost:3000/items';

    constructor(private http: HttpClient) { }

    getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(this.apiUrl);
    }
}
