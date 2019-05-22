import {Component} from '@angular/core';
import {NavController, ModalController, Platform} from 'ionic-angular';
import {Http} from '@angular/http';
import {SettingsPage} from '../settings/settings';
import {Data} from '../../providers/data';
import {Reddit} from '../../providers/reddit';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {FormControl} from '@angular/forms';
import {Keyboard} from '@ionic-native/keyboard/ngx';
import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx';
import {jsonpFactory} from '@angular/http/src/http_module';
import {JsonPipe} from '@angular/common';
import {stringify} from '@angular/core/src/util';
import { UserPage } from '../user/user';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  posts: Array<any> = [];
  gifs: Array<string> = [];
  foo: any;
  obj: any;
  settings = ['hot', 'new', 'controversial', 'top', 'rising'];
  subredditValue: string;
  subredditControl: FormControl;
  authors: Array<string> = [];
  imgUrl: Array<string> = [];
  avatarUrl: Array<string> = [];
  upsUrl: Array<string> = [];
  karmaUrl: Array<string> = [];
  postsDone: boolean = false;

  avatar: string = 'https://www.reddit.com/user/NinetyTres/about.json'

  constructor(
    public dataService: Data,
    public navCtrl: NavController,
    public http: Http,
    private inAppBrowser: InAppBrowser,
    public platform: Platform,
    private keyboard: Keyboard,
    public redditService: Reddit,
    public modalCtrl: ModalController,
    userSettings: UserSettingsProvider
  ) {
    this.subredditControl = new FormControl();

    this.redditService.fetchAll().subscribe(res =>{
    //  let resJ = JSON.parse(res['_body'])

    //console.log('userSettings.type: ', userSettings.type)

  //FROM MAIN JSON
    //author
    //permalink
    //url
    //title
    //ups

//FROM USER JSON
    //avatar
    //karma

      for(let i=0; i < res.data.children.length -1; i++){
        // make sure only non-moderators and posts with images are displayed
         if(res.data.children[i].data['author'] != 'AutoModerator' && res.data.children[i].data['url'].slice(-4)=='.jpg'){
          this.posts.push(res.data.children[i].data);
        }

        console.log('this.posts: ', this.posts);
      }
      this.postsDone = true;
    })
  }

  showUser(val){
      console.log('this.posts clicked: ' , this.posts[val]);

      let author = this.posts[val]['author'];
      const modal = this.modalCtrl.create(UserPage, {author: author});
      modal.onDidDismiss((data)=> {});
      modal.present();
  }

  ionViewDidLoad() {
    this.subredditControl.valueChanges
      .debounceTime(1500)
      .distinctUntilChanged()
      .subscribe(subreddit => {
        if (subreddit != '' && subreddit) {
          this.redditService.subreddit = subreddit;
          this.changeSubreddit();
          this.keyboard.hide();
        }
      });

    this.platform.ready().then(() => {
      this.loadSettings();
    });
  }

  changeSubreddit(): void {
    this.redditService.resetPosts();
  }

  showComments(post): void {
    let browser = this.inAppBrowser.create(
      'http://reddit.com' + post.permalink,
      '_system'
    );
  }

  openSettings(): void {
    let settingsModal = this.modalCtrl.create(SettingsPage, {
      perPage: this.redditService.perPage,
      sort: this.redditService.sort,
      subreddit: this.redditService.subreddit,
    });

    settingsModal.onDidDismiss(settings => {
      if (settings) {
        this.redditService.perPage = settings.perPage;
        this.redditService.sort = settings.sort;
        this.redditService.subreddit = settings.subreddit;

        this.dataService.save(settings);
        this.changeSubreddit();
      }
    });

    settingsModal.present();
  }

  loadSettings(): void {
    this.dataService.getData().then(settings => {
      if (settings && typeof settings != 'undefined') {
        //let newSettings = JSON.parse(settings);
        //this.redditService.settings = newSettings;
        // if(newSettings.length != 0){
        //   this.redditService.sort = newSettings.sort;
        //   this.redditService.perPage = newSettings.perPage;
        //   this.redditService.subreddit = newSettings.subreddit;
        // }
      }

      this.changeSubreddit();
    });
  }
}
