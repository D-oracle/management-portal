import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  userRole: any;
  user: any = '';
  name: string = this.user.firstname
  contextItems = [
    { title: 'Profile', link: '/pages/profile', icon: 'person-outline'},
    { title: 'Logout', icon: 'log-out-outline' },
  ];


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
      title: 'Requests',
      icon: 'layers-outline',
      link: './requests',
      children: [
        {
          title: 'New Requests',
          link: './requests/new'
        },
        {
          title: 'Active Requests',
          link: './requests/active'
        },
        {
          title: 'Completed Requests',
          link: './requests/completed'
        },
      ],
    },
    {
      title: 'Clients',
      icon: { icon: 'people-outline', pack: 'eva' },
      link: './clients'
    },
    {
      title: 'E-agents',
      icon: { icon: 'people-outline', pack: 'eva' },
      link: './agents'
    },
    {
      title: 'Leads',
      icon: 'person-add-outline',
      link: './leads'
    },
  ];

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
    this.gotoadmin()
  }

  logout() {
    this.authService.logout();
  }

  getUser() {
    this.user = this.authService.getUser()
  }

  gotoadmin() {
    if(this.user.role == 'admin') {
      this.contextItems.push({title: 'Admin', link: './admin/dashboard', icon: 'link-outline'})
    } else if(this.user.role == 'management') {
      this.contextItems.push({title: 'Management', link: './admin/dashboard', icon: 'link-outline'})
    }
  }

}
