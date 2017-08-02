import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  goTo(event): void {
    const location = event.target.href;
    const id = location.substring(location.lastIndexOf('#'));
    console.log(id + ' clicked');
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
    const mobileNav = document.querySelector('.mobile-navigation');
    if (mobileNav) {
      this.slideToggle(mobileNav);
    }
  }

  slideToggle(element) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }

  siblings(n) {
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
}
