import { Component } from '@angular/core';


import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, vmwAppIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(vmwAppIcon);


@Component({
  selector: 'janjique-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'presence';
}
