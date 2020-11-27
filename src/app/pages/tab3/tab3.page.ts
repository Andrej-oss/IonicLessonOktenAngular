import { Component } from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  comments: Comment[];
  constructor(private commentService: CommentService) {
    this.commentService.getComments().subscribe(data => this.comments = data);
  }

}
