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

    const clientUrl = "/cliente"
    const admUrl = "/adm"

    if (currentUrl === baseUrl || currentUrl === totemUrl) {
      console.log("vai volta pra onde? kkk");
    }
    if(currentUrl == clientUrl || currentUrl == admUrl)
    {
      sessionStorage.clear();
      this._lastPage.back();
    }
    else{
      this._lastPage.back();
    }
  }
}
