export interface DatabaseSchema {
  memes: Meme[];
}
interface Meme {
  // title: string;
  // id: string;
  // urlOriginal: string;
  // urlSmall: string;
  // import_datetime: string;
  // tags: string[];
  title: string;
  src: string;
  altTag: string;
  identifier: string;
}
