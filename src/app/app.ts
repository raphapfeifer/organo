import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { BookListComponent } from './components/book-list/book-list.component';
import { LiteraryGenreComponent } from "./components/literary-genre/literary-genre.component";



@Component({
  selector: 'app-root',
  imports: [Header, Footer, BookListComponent, LiteraryGenreComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
