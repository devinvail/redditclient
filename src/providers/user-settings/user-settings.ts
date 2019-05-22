import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserSettingsProvider {

  _type: string = 'hot';

  constructor(public http: HttpClient) {
    console.log('Hello UserSettingsProvider Provider');
  }

  set type (type: string) {
    this.type = type;
  }

  get type(): string {
    return this._type;
}

}
