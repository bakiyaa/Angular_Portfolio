import { Component } from '@angular/core';
import { ROUTER_TOKENS } from '../app.route';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  readonly ROUTER_TOKENS= ROUTER_TOKENS;
}
