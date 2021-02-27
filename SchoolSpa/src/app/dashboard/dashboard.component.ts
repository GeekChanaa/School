import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private _authService : AuthService) { 
    this.loadCSS();
    this.loadScripts();
  }

  //logging out
  logout(){
    console.log("ok");
    this._authService.logout();
  }

  ngOnInit() {
  }


  
  loadCSS(){
    const dynamicScripts = [ 
      "/assets/css/vendor.css",
      "/assets/css/style.css",
      "/assets/fonts/Gilroy/style.css",
      "/assets/fonts/LineIcons/Pro-Regular/font-css/LineIcons.css",
      "/assets/css/vlt-plugins.min.css",
      '/assets/css/vlt-main.css',
      "/assets/css/custom.css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
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
        "https://unpkg.com/headroom.js@0.9.4/dist/headroom.js",
        "https://unpkg.com/headroom.js@0.9.4/dist/jQuery.headroom.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/masonry/3.3.2/masonry.pkgd.js",
        "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/jquery.magnific-popup.min.js",
        "/assets/scripts/jquery.lavalamp.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js",
        "/assets/scripts/sticky-kit.min.js",
        "/assets/scripts/app.js",
        
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
  }

}
