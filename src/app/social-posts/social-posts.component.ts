import { Component, OnInit } from '@angular/core'
import { Post } from '../interfaces/post'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  showForm: boolean = false
  myPosts: Post[] = [
    {
      title: 'Something about tuesday',
      thought: 'today seems long',
    },
    {
      title: 'It snowed a bunch today',
      thought: 'i am stuck inside my house and cant leave',
    },
    {
      title: 'Angular',
      thought: 'this is super tough',
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1)
  }

  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post)
    this.toggleForm()
  }

  toggleForm = () => {
    this.showForm = !this.showForm
  }
}
