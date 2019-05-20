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

  avatar: string = 'https://www.reddit.com/user/NinetyTres/about.json'

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

    this.redditService.fetchPosts().subscribe(res =>{
    //  let resJ = JSON.parse(res['_body'])

    // author
    //permalink
    //url
    //title
    //avatar

    //this.posts = res.data.children.data;


      for(let i=0; i < res.data.children.length -1; i++){
        // console.log('res:------------------------')
        // console.log(res.data.children[i].data['author']);
        // console.log(res.data.children[i].data['permalink']);
        // console.log(res.data.children[i].data['url']);
        // console.log(res.data.children[i].data['title']);

        // this.authors.push[res.data.children[i].data['author']]
        this.posts.push(res.data.children[i].data);

        // let tempUrl = 'https://www.reddit.com/user/' + res.data.children[i].data['author'] + '/about.json'
        let tempUrl ='https://www.redditstatic.com/avatars/avatar_default_11_FF66AC.png'
        this.avatarUrl.push(tempUrl);

      }

      console.log('avatarUrl: ', this.avatarUrl);




    })




    // this.http
    //   .get('https://www.reddit.com/r/motorcycles/' + this.sort + '.json?limit=100')
    //   .map(res => res.json())
    //   .subscribe(
    //     data => {
    //       this.posts = data.data.children;
    //       for (let i = 0; i <= this.posts.length - 1; i++) {
    //         console.log('url: ', data.data.children[i].data);
    //         let obj = data.data.children[i].data;
    //         this.foo = obj['post_hint'];
    //         let fooVid = obj['url'];

    //         if (obj['post_hint'] == 'image') {
    //           //console.log('valid post: ' + JSON.stringify(obj));
    //           this.gifs.push(obj);
    //         }
    //         console.log('  this.gifs');
    //         console.log(this.gifs);
    //       }
    //     },
    //     err => {
    //       console.log('Oops!');
    //     }
    //   );




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
