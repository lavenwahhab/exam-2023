import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sidenav';
  theme: any = '';
  sidebar: any = '';
  constructor() {}
  ngOnInit(): void {
    var dark_mode = document.querySelector('.toggle-switch');
    dark_mode?.classList.toggle('dark');

    this.theme = localStorage.getItem('dark-theme');
    this.sidebar = localStorage.getItem('sidebar');
  }

  setTheme() {
    if (this.theme == true || this.theme == 'true') {
      this.theme = '';
      localStorage.removeItem('dark-theme');
    } else {
      localStorage.setItem('dark-theme', 'true');

      this.theme = 'true';
    }
  }
  sidebarChange() {
    if (this.sidebar == true || this.sidebar == 'true') {
      this.sidebar = '';
      localStorage.removeItem('sidebar');
    } else {
      localStorage.setItem('sidebar', 'true');

      this.sidebar = 'true';
    }
  }
}
