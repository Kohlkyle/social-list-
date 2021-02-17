import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Post } from '../interfaces/post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() postObject!: Post
  @Output() deleted = new EventEmitter<void>()

  constructor() {}

  ngOnInit(): void {}

  deletePost = (): void => {
    this.deleted.emit()
  }
}
