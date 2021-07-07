import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'highschool';
  navbarOpen = false;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

Logo="https://th.bing.com/th/id/R53b9370e358a7b170095e5510eb54299?rik=cPkB7%2f%2bgRGtDng&riu=http%3a%2f%2fm1.behance.net%2frendition%2fmodules%2f22166689%2fdisp%2f2beffce993cc83433168e3d057212e95.jpg&ehk=86wyD1Xm43vfn6zNkr6pcGKT69i3PnSLJhPli1ns14U%3d&risl=&pid=ImgRaw";
 
  

}