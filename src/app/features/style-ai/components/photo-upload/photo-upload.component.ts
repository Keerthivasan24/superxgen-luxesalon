import { Component, ElementRef, ViewChild } from '@angular/core';
import { StyleAiService } from '../../services/style-ai.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls:  ['./photo-upload.component.scss'],
})
export class PhotoUploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  preview:   string | null = null;
  isDragging = false;
  error:     string | null = null;

  constructor(public svc: StyleAiService) {}

  openPicker(): void { this.fileInput.nativeElement.click(); }

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.processFile(file);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const file = event.dataTransfer?.files[0];
    if (file) this.processFile(file);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(): void { this.isDragging = false; }

  private processFile(file: File): void {
    this.error = null;
    if (!file.type.startsWith('image/')) {
      this.error = 'Please upload an image file (JPG, PNG, or WEBP).';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.error = 'Image must be under 5MB.';
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.preview = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  analyse(): void {
    if (this.preview) this.svc.setPhoto(this.preview);
  }

  clearPreview(): void { this.preview = null; }
}