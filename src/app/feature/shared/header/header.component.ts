import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppEvents } from 'src/app/core/models/appenums';
import { AppStateService } from 'src/app/core/services/app-state/app.state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() sidebarToggle = new EventEmitter<void>();
  constructor(private appStateService:AppStateService,private router:Router){    
  }
  
  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  
  logOut(path: string) {
    localStorage.clear();
    this.appStateService.sendEvent(AppEvents.LoggedIn, false);
    this.router.navigateByUrl(path);
  }
}
