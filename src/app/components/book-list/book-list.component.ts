import { Component, OnInit } from '@angular/core';
import { Book, LiteraryGenre } from '../book/book';
import { books } from '../../mock-books';
import { LiteraryGenreComponent } from "../literary-genre/literary-genre.component";

@Component({
  selector: 'app-book-list',
  imports: [LiteraryGenreComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{

  genres: LiteraryGenre[] = [];
  booksPerGenre: Map<string, Book[]> = new Map(); 

  ngOnInit(): void {
      this.booksPerGenre = new Map();

      books.forEach((book) => {
        const genreId = book.literaryGenre.id
        if(!this.booksPerGenre.has(genreId)){
          this.booksPerGenre.set(genreId, [])
        }
        this.booksPerGenre.get(genreId)?.push(book)
      })

      this.genres = [
        {
        id: 'romance',
        value: "Romance",
        books: this.booksPerGenre.get("romance") ?? []
    },
    {
        id: 'misterio',
        value: 'Mistério',
        books: this.booksPerGenre.get("misterio") ?? []
    },
    {
        id: 'fantasia',
        value: 'Fantasia',
        books: this.booksPerGenre.get("fantasia") ?? []
    },
    {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        books: this.booksPerGenre.get("ficcao-cientifica") ?? []
    },
    {
        id: 'tecnicos',
        value: 'Técnicos',
        books: this.booksPerGenre.get("tecnicos") ?? []
    },
      ]
  }


}
