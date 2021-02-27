import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { 
    this.loadCSS();
    this.loadScripts();
  }

  loadCSS(){
    const dynamicScripts = [ 
      "/assets/css/framework/bootstrap.min.css",
      "/assets/fonts/Gilroy/style.css",
      "/assets/fonts/LineIcons/Pro-Regular/font-css/LineIcons.css",
      "/assets/css/vlt-plugins.min.css",
      '/assets/css/vlt-main.min.css',
      "/assets/css/custom.css",
      
    ];
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('link'); 
      node.href = dynamicScripts[i]; 
      node.rel = 'stylesheet';
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
  }


  
  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
        "/assets/vendors/jquery-3.5.1.min.js",
        "/assets/scripts/vlt-plugins.min.js",
        "/assets/scripts/vlt-helpers.js",
        "/assets/scripts/vlt-controllers.min.js",
        "/assets/scripts/custom-script.js",
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
