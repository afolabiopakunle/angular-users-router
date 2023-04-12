import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Observable<{id: number, name: string} | Params>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.params
  }

}