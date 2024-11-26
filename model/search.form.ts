export class SearchForm {
  constructor(offset: number = 0, limit: number = 20) {
    this.offset = offset;
    this.limit = limit;
  }

  offset: number;
  limit: number;
}
