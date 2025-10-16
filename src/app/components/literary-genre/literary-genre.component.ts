import { Component, input } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { LiteraryGenre } from '../book/book';


@Component({
  selector: 'app-literary-genre',
  imports: [BookComponent],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css'
})
export class LiteraryGenreComponent {

  genre = input.required<LiteraryGenre>();
}
