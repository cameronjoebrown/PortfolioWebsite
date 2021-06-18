import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';
  // Track whether the menu is open. Start collapsed so it doesn't open automatically on small screens.
  public isMenuCollapsed = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): any {
    const element = document.querySelector('.navbar');
    if (window.pageYOffset > 5) {
      element.classList.remove('bg-transparent');
    } else {
      element.classList.add('bg-transparent');
    }
  }

  toggleCollapsedMenu(): any {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    const element = document.querySelector('.navbar');
    if (!this.isMenuCollapsed) {
      element.classList.remove('bg-transparent');
    } else {
      element.classList.add('bg-transparent');
    }
  }

  closeMenu(): any {
    this.isMenuCollapsed = true;
    const element = document.querySelector('.navbar');
    element.classList.add('bg-transparent');
  }
}
