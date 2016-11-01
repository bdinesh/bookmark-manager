function BookmarkController($log) {
    let self = this;

    self.$onchanges = changes => {
        if (changes.bookmark) {
            self.bookmark = angular.copy(self.bookmark);
            $log.debug('bookmark', self.bookmark);
        }
    };

    self.delete = () => {
        self.onDelete({
            $event: {
                bookmark: self.bookmark
            }
        });
    };

    self.click = () => {
        self.onSelect({
            $event: {
                bookmark: self.bookmark
            }
        });
    }
}

angular
    .module('components.bookmark')
    .controller('BookmarkController', BookmarkController);
