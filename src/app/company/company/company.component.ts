import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/model/post';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from 'src/app/upload-file/upload-file.component';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input('posts') post: post;

  // posts: any[] = [{title: 'gftyf'}]
  posts: post[]=[
    {name: 'jhghgfh', picture: "https://file.io/APWDCkjJyok0"}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'},
    {name: 'jhghgfh', picture: "https://file.io/APWDCkjJyok0"}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'},
    {name: 'jhghgfh', picture: "https://file.io/APWDCkjJyok0"}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'}, {name: 'jhghgfh'},
    {name: 'jhghgfh', picture: "https://file.io/APWDCkjJyok0"},
  ];
  constructor(public dialog: MatDialog) {}

  openDialog(post: post) {
    this.dialog.open(UploadFileComponent, {
      data: { picture: post.picture }
    });
  }

  ngOnInit(): void {
  }

}
