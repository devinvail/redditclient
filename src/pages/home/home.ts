import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {Http} from '@angular/http';
import {SettingsPage} from '../settings/settings';
import {Data} from '../../providers/data';
import {Reddit} from '../../providers/reddit';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {UserPage} from '../user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  posts: Array<any> = [];
  subredditValue: string;
  public settings: object = {};

  constructor(
    public dataService: Data,
    public navCtrl: NavController,
    public http: Http,
    private inAppBrowser: InAppBrowser,
    public redditService: Reddit,
    public modalCtrl: ModalController
  ) {
    // get settings from Local Storage
    this.dataService.getData().then(res => {
      console.log('data from storage? ', res)
      if (res == null) {
        // LS empty - set initial object
        this.dataService.save({sort: 'hot'});
      } else {
        this.settings = JSON.parse(res);
        console.log('this.settings: ', this.settings)
      }
      this.getPosts();
    });
  }

  getPosts() {

  //   let str = "a nut for a jar of tuna";

  //   var len = str.length;



  //   for (var i = 0; i < len/2; i++) {
  //     if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
  //         return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
  //     }



  //   function reverseString(str) {
  //         // Step 1. Use the split() method to return a new array
  //   var splitString = str.split(""); // var splitString = "hello".split("");
  //   // ["h", "e", "l", "l", "o"]

  //   // Step 2. Use the reverse() method to reverse the new created array
  //   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  //   // ["o", "l", "l", "e", "h"]

  //   // Step 3. Use the join() method to join all elements of the array into a string
  //   var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  //   // "olleh"

  //   //Step 4. Return the reversed string
  //   return joinArray; // "olleh"h
  // }
  // console.log(reverseString(str));



    this.redditService.fetchPosts(this.settings).subscribe(res => {
      for (let i = 0; i < res.data.children.length - 1; i++) {
        // make sure only non-moderators and posts with images are displayed
        if (
          res.data.children[i].data['author'] != 'AutoModerator' &&
          res.data.children[i].data['url'].slice(-4) == '.jpg'
        ) {
          this.posts.push(res.data.children[i].data);
        }
      }
    });
  }

  showUser(val) {
    let author = this.posts[val]['author'];
    const modal = this.modalCtrl.create(UserPage, {author: author});
    modal.onDidDismiss(data => {});
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
      settings: this.settings,
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
