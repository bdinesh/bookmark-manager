function BookmarkService($resource) {
    let self = this;

    self.getBookmarks = function () {
        const Bookmarks = $resource('data/bookmarks.json');
        let bookmarks = Bookmarks.get();
    };
}

angular
    .module('components.bookmark')
    .service('BookmarkService', BookmarkService);
