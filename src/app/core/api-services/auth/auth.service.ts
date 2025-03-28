import { Injectable } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster/broadcaster.service';
import { AppStateService } from '../../services/app-state/app.state.service';
import { WebApiService } from '../../services/web-api-service';
import { AppBaseService } from '../base/base-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AppBaseService {

  constructor(broadcaster: BroadcasterService, appStateService: AppStateService, private webApiService: WebApiService) {
    super(broadcaster, appStateService);
    }
}
