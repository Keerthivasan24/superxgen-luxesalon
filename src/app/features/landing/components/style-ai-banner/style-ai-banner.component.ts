import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ selector:'app-style-ai-banner', templateUrl:'./style-ai-banner.component.html', styleUrls:['./style-ai-banner.component.scss'] })
export class StyleAiBannerComponent { constructor(private router:Router){} go(){ this.router.navigate(['/style-ai']); } }