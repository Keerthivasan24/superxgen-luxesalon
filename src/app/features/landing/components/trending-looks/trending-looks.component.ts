import { Component } from '@angular/core';
@Component({ selector:'app-trending-looks', templateUrl:'./trending-looks.component.html', styleUrls:['./trending-looks.component.scss'] })
export class TrendingLooksComponent {
  activeFilter = 'All';
  filters = ['All','Hair','Skin','Bridal','Men\'s'];
  looks = [
    { title:'Balayage Waves', category:'Hair',   salon:'Toni & Guy',   area:'Koramangala' },
    { title:'Bridal Glow',    category:'Bridal', salon:'Lakmé Luxe',   area:'MG Road' },
    { title:'Textured Crop',  category:'Men\'s', salon:'Enrich Salon', area:'HSR Layout' },
    { title:'Glass Skin',     category:'Skin',   salon:'YLG Salon',    area:'Jayanagar' },
    { title:'Copper Ombre',   category:'Hair',   salon:'Jean-Claude',  area:'Indiranagar' },
    { title:'Bridal Updo',    category:'Bridal', salon:'Naturals',     area:'Whitefield' },
  ];
  get filtered() {
    return this.activeFilter === 'All' ? this.looks : this.looks.filter(l => l.category === this.activeFilter);
  }
}