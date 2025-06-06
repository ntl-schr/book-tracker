import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Book } from '../../global/dtos/book.dto';

@Component({
  selector: 'app-book-list',
  imports: [ButtonModule, CardModule, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  // displays a list of all books, optionally filterable or sortable

  // example for using the Book interface
  book: Book = {
    id: '1',
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    rating: 5,
    review: `
    This first book in the Harry Potter series is a masterpiece of modern fantasy literature.
    The story of an orphan boy who discovers he's a wizard has captivated millions of readers worldwide.
    Rowling masterfully creates a magical world that enchants both children and adults alike.
    The character development is profound and authentic, while the plot is engaging and full of surprises.
    A must-read for every fantasy lover!
  `,
  };
}
