var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class SearchForm {
  constructor(offset = 0, limit = 20) {
    __publicField(this, "offset");
    __publicField(this, "limit");
    this.offset = offset;
    this.limit = limit;
  }
}
class PaginationResult {
  constructor(offset = 0, limit = 1, count = 0, items = []) {
    __publicField(this, "offset");
    __publicField(this, "limit");
    __publicField(this, "count");
    __publicField(this, "items");
    this.offset = offset;
    this.limit = limit;
    this.count = count;
    this.items = items;
  }
}
export {
  PaginationResult as P,
  SearchForm as S
};
//# sourceMappingURL=pagination.result-CyiXrpld.js.map
