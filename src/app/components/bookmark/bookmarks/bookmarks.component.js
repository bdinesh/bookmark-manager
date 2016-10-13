const bookmarks = {
    templateUrl: './bookmarks.html',
    controller: 'BookmarksController',
    bindings: {
        bookmarks: '<'
    }
};

angular
    .module('components.bookmark')
    .component('bookmarks', bookmarks)
    .config(function ($stateProvider) {
        $stateProvider
            .state('bookmarks', {
                parent: 'app',
                url: '/bookmarks',
                component: 'bookmarks',
                resolve: {
                    bookmarks: BookmarkService => {
                        return BookmarkService.getBookmarks();
                    }
                }
            });
    });
