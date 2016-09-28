const bookmark = {
    bindings: {
        bookmark: '<',
        onSelect: '&',
        onDelete: '&'
    },
    templateUrl: 'bookmark.html',
    controller: 'BookmarkController'
};

angular
    .module('components')
    .component('bookmark', bookmark);
