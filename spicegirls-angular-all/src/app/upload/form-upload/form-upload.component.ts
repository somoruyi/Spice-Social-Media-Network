import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../upload.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService:UploadService) { }

  ngOnInit(): void {
  }

  selectFile(event){
    this.selectedFiles = event.target.files;
  }

  // upload(){
  //   this.progress.percentage = 0;

  //   this.currentFileUpload = this.selectedFiles.item(0);
  //   this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
  //     if(event.type === HttpEventType.UploadProgress){
  //       this.progress.percentage = Math.round(100 * event.loaded / event.total);
  //     } else if (event instanceof HttpResponse){
  //       console.log('File is completely uploaded');
  //     }
  //   });
  //   this.selectedFiles = undefined;
  // }

}