export class PaginationResult {
  constructor(
    offset: number = 0,
    limit: number = 1,
    count: number = 0,
    items: Array<any> = [],
  ) {
    this.offset = offset;
    this.limit = limit;
    this.count = count;
    this.items = items;
  }

  offset: number;
  limit: number;
  count: number;
  items: Array<any>;
}
