const bookmarks = [];
let adding = false;
let error = false;
let expanded = false;
let filter = 0;
let edit = false;

const getIdFromElement = function(item) {
  return $(item).find('.bookmarkContainer').data('bookmark-id');
};

const findById = function(id) {
  return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
};

const addBookmark = function(bookmarkObject) {
  this.bookmarks.push(bookmarkObject);
};

const deleteBookmark = function(id){
  this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !== id);
};

const updateBookmark = function(id, newData){
  let currentBookmark = this.findById(id);
  Object.assign(currentBookmark, newData);
};

export default {
  bookmarks,
  adding,
  error,
  expanded,
  filter,
  edit,
  findById,
  addBookmark,
  deleteBookmark,
  updateBookmark,
  getIdFromElement
};