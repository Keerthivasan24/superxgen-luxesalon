import { Component } from '@angular/core';
@Component({ selector:'app-testimonials', templateUrl:'./testimonials.component.html', styleUrls:['./testimonials.component.scss'] })
export class TestimonialsComponent {
  row1 = [
    { name:'Ananya S.',    area:'Koramangala', text:'Absolutely stunning bridal experience. The attention to detail was impeccable.',         rating:5 },
    { name:'Priya M.',     area:'Indiranagar', text:'Best balayage in Bangalore, hands down. The stylist understood exactly what I wanted.',   rating:5 },
    { name:'Rohini K.',    area:'Whitefield',  text:'Luxury experience at every touchpoint. Will never go anywhere else.',                      rating:5 },
    { name:'Divya R.',     area:'HSR Layout',  text:'The keratin treatment lasted 6 months! Incredible results, zero frizz.',                  rating:5 },
  ];
  row2 = [
    { name:'Meera T.',     area:'Jayanagar',   text:'From the moment I walked in, I felt like royalty. The facial was transformative.',        rating:5 },
    { name:'Kavitha B.',   area:'MG Road',     text:'Booked in under a minute. The salon was even better than the photos.',                    rating:5 },
    { name:'Shreya N.',    area:'Marathahalli',text:'The style AI matched me with the perfect stylist. Game changer.',                         rating:5 },
    { name:'Pooja L.',     area:'Malleshwaram',text:'Perfect manicure, perfect ambience, perfect service. Truly luxury.',                      rating:5 },
  ];
}