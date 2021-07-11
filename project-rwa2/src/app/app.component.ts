import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { NavService } from './services/nav.service';
import { AppState } from './store';
import { LogOut } from './store/auth/auth.actions';
import { selectLoggedUser } from './store/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RWA-2';
  showNavButtons: boolean;
  user$=this.store.pipe(
      select(selectLoggedUser),
      filter(val => val !== undefined)
    );
  constructor(private showNavService: NavService,
    private store: Store<AppState>,
    private router: Router) {}

  ngOnInit(){
    this.showNavService.flagCurrent.subscribe(flag => this.showNavButtons=flag);
  }

  logoutClicked(){
      this.store.dispatch(LogOut());
      this.showNavService.changeFlag(false);
      this.router.navigate([`./main`]);
  }

  pocetnaClicked(){
    this.user$.subscribe(
    user=>{
        this.router.navigate([`/${user.role}/main`])
      })
  }

  profilClicked(){
    this.user$.subscribe(
    user=>{
        this.router.navigate([`/${user.role}/profil`])
      })
    }
  }