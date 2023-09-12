import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogComponentComponent } from './create-blog-component.component';

describe('CreateBlogComponentComponent', () => {
  let component: CreateBlogComponentComponent;
  let fixture: ComponentFixture<CreateBlogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBlogComponentComponent]
    });
    fixture = TestBed.createComponent(CreateBlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
