import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Reddit {
  constructor(public http: Http) {}

  fetchPosts(settings) {
    return this.http
      .get(
        'https://www.reddit.com/r/funny/' + settings.sort + '/.json?limit=100'
      )
      .map(postData => {
        let resJ = JSON.parse(postData['_body']);
        return resJ;
      });
  }

  fetchUserData(author: string) {
    return this.http
      .get('https://www.reddit.com/user/' + author + '/about.json')
      .map(res => {
        return res;
      });
  }
}
