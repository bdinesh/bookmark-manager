function BookmarkService($http) {
    let self = this;

    self.getBookmarks = function () {
        return $http
            .get('data/bookmarks.json')
            .then(response => response.data);
    };
}

angular
    .module('components.bookmark')
    .service('BookmarkService', BookmarkService);
