import { Component } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  posts: Post[];
  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }

}
