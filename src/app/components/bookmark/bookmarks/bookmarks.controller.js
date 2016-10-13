function BookmarksController($state) {
    let self = this;
    let bookmarks = self.bookmarks;

    self.goToBookmark = event => {
        $state.go('bookmark', {
            id: event.bookmark.id
        });
    };

    self.deleteBookmark = event => {
        let idx = bookmarks.indexOf(event.bookmark);
        bookmarks.splice(idx, 1);
    };

    self.addBookmark = event => {
        bookmarks.push(event.bookmark);
    };
}

angular
    .module('components.bookmark')
    .controller('BookmarksController', BookmarksController);