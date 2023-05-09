import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Secret} from './model/secret';
import {HttpClient} from '@angular/common/http';
import {CreateSecret} from './model/create-secret';


@Injectable({
  providedIn: 'root'
})
export class SecretService {
  private secretUrl: string;

  constructor(private http: HttpClient) {
    this.secretUrl = 'http://localhost:8080/secrets';
  }

  public findAll(): Observable<Secret[]> {
    return this.http.get<Secret[]>(this.secretUrl);
  }

  public save(secret: CreateSecret): Observable<any> {
    return this.http.post<CreateSecret>(this.secretUrl, secret);
  }

}
