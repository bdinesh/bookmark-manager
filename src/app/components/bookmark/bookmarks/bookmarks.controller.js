function BookmarksController($state, $log) {
    let self = this;

    self.$onInit = () => {
        $log.debug('Bookmarks', self.bookmarks);
    };

    // self.$onchanges = changes => {
    //     if (changes.bookmarks) {
    //         self.bookmarks = angular.copy(self.bookmarks);
    //     }
    // };

    self.goToBookmark = event => {
        $state.go('bookmark', {
            id: event.bookmark.id
        });
    };

    self.deleteBookmark = event => {
        let idx = self.bookmarks.indexOf(event.bookmark);
        self.bookmarks.splice(idx, 1);
    };

    self.addBookmark = event => {
        self.bookmarks.push(event.bookmark);
    };
}

angular
    .module('components.bookmark')
    .controller('BookmarksController', BookmarksController);