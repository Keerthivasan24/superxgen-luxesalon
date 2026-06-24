import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-browse',
  templateUrl: './area-browse.component.html',
  styleUrls: ['./area-browse.component.scss'],
})
export class AreaBrowseComponent {
  activeArea = 'Koramangala';
  areas = [
    { name:'Koramangala', count:48 }, { name:'Indiranagar', count:35 },
    { name:'Whitefield',  count:29 }, { name:'MG Road',     count:22 },
    { name:'Jayanagar',   count:31 }, { name:'HSR Layout',  count:26 },
    { name:'Marathahalli',count:19 }, { name:'Hebbal',       count:17 },
    { name:'Malleshwaram',count:21 }, { name:'Yelahanka',    count:14 },
  ];
  constructor(private router: Router) {}
  select(area: string) {
    this.activeArea = area;
    this.router.navigate(['/explore'], { queryParams: { area } });
  }
}