import { Component, input } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { LiteraryGenre } from '../book/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literary-genre',
  imports: [BookComponent,
            CommonModule
    ],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css'
})
export class LiteraryGenreComponent {

  genre = input.required<LiteraryGenre>();
}
