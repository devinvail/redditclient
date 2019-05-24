import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
} from 'ionic-angular';
import {Reddit} from '../../providers/reddit';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  author: string;
  avatar: string;
  karma: string;
  cakeDay: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public redditService: Reddit,
    public viewCtrl: ViewController
  ) {
    this.author = navParams.get('author');
  }

  ionViewDidLoad() {
    this.redditService.fetchUserData(this.author).subscribe(res => {
      let resJ = JSON.parse(res['_body']);
      this.avatar = resJ['data']['icon_img'];
      this.karma = resJ['data']['link_karma'];
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
