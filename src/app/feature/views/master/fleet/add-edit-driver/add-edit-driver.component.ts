import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-edit-driver',
  templateUrl: './add-edit-driver.component.html',
  styleUrls: ['./add-edit-driver.component.scss']
})
export class AddEditDriverComponent implements OnInit {
  title: string = 'Add';
  file: any;
  showModal = false;
  capturedImage: string | null = null;
  private stream!: MediaStream;

  @ViewChild('video', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;
  constructor() { }

  ngOnInit() {
  }

  openImagePicker(id: string) {
    document.getElementById(id)?.click();
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    let formData: any = new FormData();
    console.log(this.file);
  }

  async openCamera() {
    this.showModal = true;
    this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
    this.videoRef.nativeElement.srcObject = this.stream;
  }

  capture() {
    const video = this.videoRef.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

    this.capturedImage = canvas.toDataURL('image/png');
  }

  closeCamera() {
    this.showModal = false;
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

}
