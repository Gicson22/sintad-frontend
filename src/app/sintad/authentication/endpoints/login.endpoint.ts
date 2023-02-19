import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/commons/interfaces/login.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginEndpoint {
  private readonly url = `${environment.apiExperience}/login`;

  constructor(private httpClient: HttpClient) {}

  login(body: ILogin) {
    return this.httpClient.post(this.url, body, { observe: 'response' });
  }
}
