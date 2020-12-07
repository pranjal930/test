import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  description = "abc &gt efg &gt ghi &gt ";
  constructor(private metaTagService:Meta){}
  ngOnInit(){
    this.metaTagService.addTags([
      { property:'og:description' , content : this.description },
				{ name:'description' , content : this.description },
				{ property:'og:title' , content : "Rapidken - Fast Learning" },
				{ property:'title' , content : "Rapidken - Fast Learning" },
				{ property:'twitter:card' , content : "summary" },
				{ property:'twitter:title' , content : "Rapidken - Fast Learning" },
				{ property:'twitter:description' , content : this.description },
			/* 	{ name:'image', property: 'og:image', itemprop:'image', content : GlobalUtils.getBaseURL() + 'rapidken-client/assets/icons/rapidken-512x512.png' },
				{ property: 'twitter:image' , content : GlobalUtils.getBaseURL() + 'rapidken-client/assets/icons/rapidken512x512.png' }, */
				{ property: 'og:type' , content : 'twitter:card' },
				{ property: 'og:image:height' , content : '1300' },
				{ property: 'og:image:width' , content : '1300' },
				{ property:'og:url',content:window.location.href},
				{ name: 'robots', content: 'index, follow'},

    ])
  }
}