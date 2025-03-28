import { BehaviorSubject } from 'rxjs';


/*
Class: AppState
Purpose: Holds application state
Notes: Keep this class small, components that need access will subscribe to observables from AppState Service
*/
export class AppState {
    public isLoggedIn$: BehaviorSubject<boolean>;
    public isProcessing$: BehaviorSubject<boolean>;
    public currentUser$: BehaviorSubject<any>;


    constructor() {
        this.isLoggedIn$ = new BehaviorSubject<boolean>(false);
        this.isProcessing$ = new BehaviorSubject<boolean>(false);

        const user: any = {
            name:'',
            phone: '',
            email: '',
            address: '',
            token: '',
            instituteId: undefined,
        };
        this.currentUser$ = new BehaviorSubject<any>(user);
    }
}
