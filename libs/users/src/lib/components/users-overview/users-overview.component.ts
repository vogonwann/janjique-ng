import { Component } from '@angular/core';
import { UsersFacade } from '../../+state/users.facade';
import { Observable } from 'rxjs';
import { UsersEntity } from '../../+state/users.models';

@Component({
  selector: 'janjique-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.scss'],
})
export class UsersOverviewComponent {
  users$: Observable<UsersEntity[]>;
  constructor(private readonly facade: UsersFacade) {
    this.facade.init();
    this.users$ = this.facade.allUsers$;
  }
}
