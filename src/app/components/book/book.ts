export interface Book {
      title: string;
      author: string;
      favourite: boolean;
      literaryGenre: LiteraryGenre;
      image: string;
}

export interface LiteraryGenre{
      id: string,
      value: string,
      books: Book[]
}
