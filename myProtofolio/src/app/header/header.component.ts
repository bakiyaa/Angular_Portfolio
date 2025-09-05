import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ROUTER_TOKENS } from '../app.route';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly ROUTER_TOKENS= ROUTER_TOKENS;
closeMenu() {
throw new Error('Method not implemented.');
}
 
}
