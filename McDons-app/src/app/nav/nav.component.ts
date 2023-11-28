import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private _lastPage: Location, private route: ActivatedRoute) { }

  navigateToLastPage(){
    const currentUrl = this._lastPage.path();
    const baseUrl = ""
    const totemUrl = "/totem"

    if (currentUrl === baseUrl || currentUrl === totemUrl) {
      console.log("vai volta pra onde? kkk");
    }
    else{
      this._lastPage.back();
    }
  }
}
