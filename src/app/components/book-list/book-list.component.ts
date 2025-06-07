import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Book } from '../../global/dtos/book.dto';
import { BookService } from '../../global/services/book.service';

@Component({
  selector: 'app-book-list',
  imports: [ButtonModule, CardModule, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
// displays a list of all books, optionally filterable or sortable
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => (this.books = data),
      error: (err) => console.error('Error loading books:', err),
    });
  }
}
