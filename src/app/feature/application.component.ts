import { Component } from '@angular/core';
import { AppStateService } from '../core/services/app-state/app.state.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  isSidebarOpen = false;
  isProcessing = false;

  constructor(private appStateService: AppStateService){
    this.appStateService.isProcessing().subscribe(res => {
      setTimeout(() => {
        this.isProcessing = res;
      }, 0);
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

 
}
