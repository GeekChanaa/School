import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.loadScripts();
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
        'assets/js/jquery.min.js',
        "/assets/vendors/jquery-3.5.1.min.js",
        "/assets/scripts/vlt-plugins.min.js",
        "/assets/scripts/vlt-helpers.js",
        "/assets/scripts/vlt-controllers.min.js"
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
