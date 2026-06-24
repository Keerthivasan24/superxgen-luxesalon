import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { AiHeroComponent } from './components/ai-hero/ai-hero.component';
import { AiLoadingComponent } from './components/ai-loading/ai-loading.component';
import { AiResultsComponent } from './components/ai-results/ai-results.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { StyleAiPageComponent } from './components/style-ai-page/style-ai-page.component';
import { StyleGalleryComponent } from './components/style-gallery/style-gallery.component';
import { StyleQuizComponent } from './components/style-quiz/style-quiz.component';



@NgModule({
  declarations: [
    StyleAiPageComponent,
    AiHeroComponent,
    PhotoUploadComponent,
    StyleQuizComponent,
    AiLoadingComponent,
    AiResultsComponent,
    StyleGalleryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: StyleAiPageComponent }]),
  ],
})
export class StyleAiModule {}