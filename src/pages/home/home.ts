import {Component} from '@angular/core';
import {NavController, ModalController, Platform} from 'ionic-angular';
import {Http} from '@angular/http';
import {SettingsPage} from '../settings/settings';
import {Data} from '../../providers/data';
import {Reddit} from '../../providers/reddit';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {FormControl} from '@angular/forms';
import {Keyboard} from '@ionic-native/keyboard/ngx';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { UserPage } from '../user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  posts: Array<any> = [];
  gifs: Array<string> = [];
  foo: any;
  obj: any;
  //settings = ['hot', 'new', 'controversial', 'top', 'rising'];
  subredditValue: string;
  subredditControl: FormControl;
  authors: Array<string> = [];
  imgUrl: Array<string> = [];
  avatarUrl: Array<string> = [];
  upsUrl: Array<string> = [];
  karmaUrl: Array<string> = [];
  public settings: object = {}

  constructor(
    public dataService: Data,
    public navCtrl: NavController,
    public http: Http,
    private inAppBrowser: InAppBrowser,
    public platform: Platform,
    private keyboard: Keyboard,
    public redditService: Reddit,
    public modalCtrl: ModalController
  ) {
    this.subredditControl = new FormControl();

    // get settings from Local Storage
    this.dataService.getData().then(res =>{
      if(res == null){
        // LS empty - set initial object
        this.dataService.save({sort: 'hot'})
      } else {
        this.settings = JSON.parse(res);
      }
      this.getPosts()

  })
  }

  getPosts(){
    this.redditService.fetchAll(this.settings).subscribe(res =>{
      for(let i=0; i < res.data.children.length -1; i++){
        // make sure only non-moderators and posts with images are displayed
         if(res.data.children[i].data['author'] != 'AutoModerator' && res.data.children[i].data['url'].slice(-4)=='.jpg'){
          this.posts.push(res.data.children[i].data);
        }
      }
    })
  }

  showUser(val){
      let author = this.posts[val]['author'];
      const modal = this.modalCtrl.create(UserPage, {author: author});
      modal.onDidDismiss((data)=> {});
      modal.present();
  }

  showComments(post): void {
    let browser = this.inAppBrowser.create(
      'http://reddit.com' + post.permalink,
      '_system'
    );
  }

  openSettings(): void {
    let settingsModal = this.modalCtrl.create(SettingsPage, {
      settings: this.settings
    });
    settingsModal.onDidDismiss(settings => {
      if (settings) {
        this.settings = settings;
        //clear all posts to start new search
        this.posts = [];
        this.getPosts();
      }
    });
    settingsModal.present();
  }

}
