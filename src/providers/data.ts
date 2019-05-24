import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {

  constructor(public storage: Storage  ) {}

  getData(): Promise<any> {
    console.log('returning new setting to storage: ', this.storage.get('settings'));
    return this.storage.get('settings');
  }

  save(data): void {
    console.log('setting new setting in LS: ', data);
    let newData = JSON.stringify(data);
    this.storage.set('settings', newData);
  }

}
