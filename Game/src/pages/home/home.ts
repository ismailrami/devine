import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { StartPage } from '../start/start';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //attribute

  
  person: string;
  pass: string;
  language: string;
	private lan_glob = ["Albanian","Arabic","Belarusian","Bulgarian","Chinese","Croatian","Czech","Danish","Dutch","English","Estonian","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Latvian","Lithuanian","Macedonian","Norwegian","Polish","Portuguese","Romanian","Russian","Serbian","Slovak","Slovenian","Spanish","Swedish","Thai","Turkish","Ukrainian","Vietnamese"];
	
  users: any;

    constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  }

  


    private onSubmit() {
     
    this.navCtrl.push(StartPage);
    
  }
}
