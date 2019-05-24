import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Reddit } from '../../providers/reddit';
import * as moment from 'moment';


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
    this.author = navParams.get('author')
    console.log('this.author: ', this.author);
    let mom = moment(1454521239279).format("DD MMM YYYY hh:mm a");
    console.log('mom: ', mom)
  }

  ionViewDidLoad() {

    this.redditService.fetchUserData(this.author).subscribe(res => {
      let resJ = JSON.parse(res['_body'])
        console.log('res from user call: ');
        console.log(resJ['data']);
        this.avatar = resJ['data']['icon_img'];
        this.karma = resJ['data']['link_karma'];
    })
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
