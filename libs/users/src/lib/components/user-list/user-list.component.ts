import { Component, Input } from '@angular/core';
import { UsersEntity } from '../../+state/users.models';import '@cds/core/icon/register.js';

import { 
  ClarityIcons,
  checkCircleIcon,
  timesCircleIcon,
  phoneHandsetIcon 
} from '@cds/core/icon';

ClarityIcons.addIcons(checkCircleIcon);
ClarityIcons.addIcons(timesCircleIcon);
ClarityIcons.addIcons(phoneHandsetIcon);


@Component({
  selector: 'janjique-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() users!: UsersEntity[];
  @Input() workingDays!: Date[] | null | undefined;
}
