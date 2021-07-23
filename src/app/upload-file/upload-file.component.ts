import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OthersService } from '../services/others.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  public picture: string;
  loading: boolean = false;
  file: File;
  constructor(@Inject(MAT_DIALOG_DATA) public data, private othersService: OthersService) { }

  ngOnInit(): void {
    this.picture = this.data.picture
  }

  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.picture = reader.result as string;
    };
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.othersService.upload(this.file).subscribe(
        (event: any) => {
          console.log(event);
          
            if (typeof (event) === 'object') {

                // Short link via api response
              let x = [];
              if (localStorage.getItem('images')) x = JSON.parse(localStorage.getItem('images'));
              x.push(event.link);
              localStorage.setItem('images', JSON.stringify(x));
                this.loading = false; // Flag variable 
            }
        }
    );
}
}
