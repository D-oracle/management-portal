import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  contextItems = [
    { title: 'Pages', link: './pages/dashboard'},
    { title: 'Profile', link: './pages/profile', icon: 'person-outline'},
    { title: 'Logout', icon: 'log-out-outline'},
  ];
  
  user: any = '';
  name: string = this.user.firstname

  constructor(
    private sidebarService: NbSidebarService,
    private authService: AuthService,
    private nbmenu: NbMenuService, 
    private router: Router
    ) {}


  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }


  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: './dashboard'
    },
    {
      title: 'Management',
      icon: 'edit-outline',
      link: '',
      children: [
        {
          title: 'Add Staff',
          icon: 'person-add-outline',
          link: './management/add-staff'
        },
        {
          title: 'Manage Staff',
          icon: 'settings-outline',
          link: './management/manage-staff'
        },
        {
          title: 'Add Agent',
          icon: 'person-add-outline',
          link: './management/add-agent'
        },
        {
          title: 'Manage Agents',
          icon: 'settings-outline',
          link: './management/manage-agent'
        },
        {
          title: 'Add Service',
          icon: 'plus-circle-outline',
          link: './management/add-service'
        },
        {
          title: 'Manage Service',
          icon: 'activity-outline',
          link: './management/manage-service'
        },
      ],
    },
    {
      title: 'Applicants',
      icon: { icon: 'person-done-outline', pack: 'eva' },
      link: './applicants'
    },
    {
      title: 'Account',
      icon: 'credit-card-outline',
      link: './account'
    },
    {
      title: 'Configurations',
      icon: 'settings-2-outline',
      link: '',
      children: [
        {
          title: 'Create Role',
          icon: 'plus-outline',
          link: './configurations/create-role'
        },
        {
          title: 'Manage Role',
          icon: 'edit-2-outline',
          link: './configurations/manage-role'
        },
        {
          title: 'Add Location',
          icon: 'maximize-outline',
          link: './configurations/add-location'
        },
        {
          title: 'Manage Location',
          icon: 'color-picker-outline',
          link: './configurations/manage-location'
        },
      ],
    },
    {
      title: 'Events',
      icon: 'flag-outline',
      link: './event'
    },
  ];

  logout() {
    this.authService.logout();
  }
  
  ngOnInit(): void {
    this.nbmenu.onItemClick()
    .pipe(
      filter(({tag}) => tag === 'my-context-menu'),
      map(({item: {title}}) => title),
    )
    .subscribe(link => {
      console.log(link)
      if (link == 'Logout') {
        this.logout()
      }
    })

    this.getUser();
  }

  getUser() {
    this.user = this.authService.getUser()
  }

}
