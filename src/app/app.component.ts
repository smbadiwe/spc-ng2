import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  goTo(event): void {
    const location = event.target.href;
    const id = location.substring(location.lastIndexOf('#'));
    window.location.hash = id;
    const locDom = document.querySelector(id);
    if (locDom) {
      locDom.parentElement.scrollIntoView();
    }

    // set the clicked link as active and unset the rest
    const clickedLi = event.target.parentElement;
    if (clickedLi) {
      clickedLi.classList.add('current-menu-item');
      const sibs = this.siblings(clickedLi);
      sibs.forEach(elm => {
        elm.classList.remove('current-menu-item');
      });
      this.toggleMobileNav();
    }
  }

  toggleMobileNav(): void {
    const mobileNav = <any>document.querySelector('.mobile-navigation');
    if (mobileNav) {
      if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block';
      } else {
        mobileNav.style.display = 'none';
      }
    }
  }

  siblings(n): any[] {
    const result = [];
    const children = n.parentElement.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      if (child !== n) {
        result.push(child);
      }
    }
    return result;
  }

  ngOnInit(): void {
    const hero = <any>document.querySelector('.hero');
    if (hero) {
      hero.flexslider({
        directionNav: false,
        controlNav: true
      });
    }

    const map = <any>document.querySelector('.map');
    if (map) {
      const latitude = map.data("latitude");
      const longitude = map.data("longitude");
      if (map.length) {

        map.gmap3({
          map: {
            options: {
              center: [latitude, longitude],
              zoom: 15,
              scrollwheel: false
            }
          },
          marker: {
            latLng: [latitude, longitude],
            options: {
              icon: "assets/images/map-pin.png"
            }
          }
        });

      }
    }
  }
}
