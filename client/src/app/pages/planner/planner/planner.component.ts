import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';
import { ApiService } from 'src/app/core/service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Menu } from 'src/app/core/model/menu';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css'],
  providers: [ LocalStorageService, ApiService ]
})
export class PlannerComponent implements OnInit {

  public menus: Menu[];
  public menu: Menu;
  public showModalDel: boolean;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private localStorage: LocalStorageService,
              private apiService: ApiService) {
      // this.card = [];
      this.menus = [];
      this.showModalDel = false;
      this.menu = {
        _id: '',
        _user: '',
        title: ''
      };
  }

  ngOnInit(): void {
    if (this.localStorage.get('token') == null){
      this.router.navigate(['/login']);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
      this.apiService.get('/menu/user/' + this.localStorage.get('email'), this.httpOptions)
        .subscribe( response => {
          this.menus = response;
          if (this.menus.length > 0){
            this.menu = this.menus[0];
            // this.getMenu(this.menus[0]._user, this.httpOptions);
          }
        },
        error => {
          if (error.status === 401 ){
            this.router.navigateByUrl('/login', {state: {msg: 'Unauthorized'}});
          } else if (error.message === 'There are no menus for such user'){
            console.log(error);
          }
        });
    }
  }

  activeMenu(title: string): void{
    this.menu = this.menus.filter(m => m.title === title)[0];
  }

  addMenu(): void{
    this.router.navigate(['planner/menu-form']);
  }

  /*editMenu(): void{
    this.router.navigate(['planner/meal-form']);
  }*/

  deleteMenu(mid: string): void{

    this.apiService.delete('/menu/' + mid, this.httpOptions)
      .subscribe(response => {
        if (response.msg === 'menu removed'){
          this.ngOnInit();
        }
      }, error => {
        console.log(error);
      });
    this.showModalDel = false;
  }

}
