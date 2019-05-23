import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public settings = {
    sort: 'hot'
  };

  constructor(
    public view: ViewController,
    public navParams: NavParams,
    public dataService: Data
    ) {
    this.settings = this.navParams.get('settings');
  }

  save(): void {
     console.log('getting type in settings: ', this.settings);
    // save new setttings to LS
    this.dataService.save(this.settings)
    this.view.dismiss(this.settings);
  }

  close(): void {
  	this.view.dismiss();
  }
}
