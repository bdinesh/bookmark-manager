function BookmarkController() {
    let self = this;
    let bookmark = self.bookmark;

    self.delete = () => {
        self.onDelete(bookmark);
    };
}

angular
    .module('components.bookmark')
    .controller('BookmarkController', BookmarkController);
