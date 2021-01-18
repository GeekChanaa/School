import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent implements OnInit {

  constructor() { 
    this.loadScripts();
  }

  
  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
        
        "/assets/vendors/jquery-3.5.1.min.js",
        "/assets/scripts/vlt-plugins.min.js",
        "/assets/scripts/vlt-helpers.js",
        "/assets/scripts/vlt-controllers.min.js",
        "/assets/scripts/custom-script.js"
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
  }

  ngOnInit() {
  }

}
