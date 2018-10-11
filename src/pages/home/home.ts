import { Component } from '@angular/core';
import { NavController,LoadingController,ActionSheetController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { MusicplayerPage } from '../musicplayer/musicplayer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public allMusic:any[] =[];
  constructor(public navCtrl: NavController,private musicProvider:MusicProvider,public loadingController:LoadingController,public shareController:ActionSheetController) {
 

  }

  ionViewDidLoad(){
  			let allMusicloading=this.loadingController.create({
  				content:"All music getting from server"
  			});
  			allMusicloading.present();
  			 this.musicProvider.getMusic()
  			.subscribe((res:any)=>{
  			allMusicloading.dismiss();
  			this.allMusic=res});
  		}
  	shareSong(){
  		let shareSongAction=this.shareController.create({
  				title:"Share Song",
  				buttons:[{
  					text:"Facebook",
  				},
  				{
  					text:"Twiter",
  				},
  				{
  					text:"Share"
  				}
  				]
  		});
  		shareSongAction.present();
  	}
  	gotoMusic(music){
  			this.navCtrl.push(MusicplayerPage,{
  			music:music
  			});


  	}

}
