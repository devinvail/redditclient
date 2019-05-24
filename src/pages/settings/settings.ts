import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public settings = {
    // sort: 'hot'
  };

  constructor(
    public view: ViewController,
    public navParams: NavParams,
    public dataService: Data
    ) {
    this.settings = this.navParams.get('settings');
    console.log('this.settings in settings from params: ', this.settings);
  }

  save(): void {
     console.log('sending new settings to data service from settings: ', this.settings);
    // send new setttings to data service
    this.dataService.save(this.settings)
    this.view.dismiss(this.settings);
  }

  close(): void {
  	this.view.dismiss();
  }
}
