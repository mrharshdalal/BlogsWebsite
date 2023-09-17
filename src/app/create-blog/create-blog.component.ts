import { Component } from '@angular/core';
import { CreateBlogService } from './create-blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {
  blogPost: any = {};
  selectedImage: File | null = null;

  constructor(private createBlogService: CreateBlogService) { }

  onSubmit() {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('title', this.blogPost.title);
      formData.append('content', this.blogPost.content);
      formData.append('image', this.selectedImage, this.selectedImage.name);

      this.createBlogService.createBlogPost(formData).subscribe(
        (response) => {
          console.log('Blog post created successfully:', response);
          // Clear form or navigate to another page as needed
        },
        (error) => {
          console.error('Error creating blog post:', error);
        }
      );
    }
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
    }
  }  
}
