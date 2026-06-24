import { Component } from '@angular/core';

export interface Salon {
  id: number;
  name: string;
  area: string;
  rating: number;
  reviews: number;
  priceLevel: string;
  tags: string[];
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-featured-salons',
  templateUrl: './featured-salons.component.html',
  styleUrls: ['./featured-salons.component.scss'],
})
export class FeaturedSalonsComponent {
  salons: Salon[] = [
    { id:1, name:'Toni & Guy',        area:'Koramangala', rating:4.9, reviews:842, priceLevel:'₹₹₹₹', tags:['Hair','Bridal','Colour'],    image:'assets/images/salon1.jpg', badge:'Top Rated' },
    { id:2, name:'Jean-Claude Biguine',area:'Indiranagar', rating:4.8, reviews:631, priceLevel:'₹₹₹₹', tags:['Hair','Skin','Nails'],      image:'assets/images/salon2.jpg', badge:'Premium' },
    { id:3, name:'Lakmé Salon',        area:'MG Road',     rating:4.7, reviews:1203,priceLevel:'₹₹₹',  tags:['Bridal','Makeup','Facial'],  image:'assets/images/salon3.jpg' },
    { id:4, name:'Naturals Luxe',      area:'Whitefield',  rating:4.7, reviews:519, priceLevel:'₹₹₹',  tags:['Hair','Keratin','Spa'],      image:'assets/images/salon4.jpg' },
    { id:5, name:'Enrich Salon',       area:'HSR Layout',  rating:4.6, reviews:738, priceLevel:'₹₹₹',  tags:['Colour','Wax','Facial'],     image:'assets/images/salon5.jpg', badge:'New' },
    { id:6, name:'YLG Salon',          area:'Jayanagar',   rating:4.6, reviews:944, priceLevel:'₹₹',   tags:['Hair','Threading','Nails'],  image:'assets/images/salon6.jpg' },
  ];

  onMouseMove(e: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width  - 0.5;
    const cy = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${cx * 14}deg) rotateX(${-cy * 14}deg) translateZ(12px)`;
    const shine = card.querySelector('.card-shine') as HTMLElement;
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(cx + 0.5) * 100}% ${(cy + 0.5) * 100}%, rgba(201,168,76,0.15) 0%, transparent 60%)`;
    }
  }

  onMouseLeave(card: HTMLElement) {
    card.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)`;
    const shine = card.querySelector('.card-shine') as HTMLElement;
    if (shine) shine.style.background = 'none';
  }
}