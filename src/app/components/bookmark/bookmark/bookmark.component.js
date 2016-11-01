const bookmark = {
    bindings: {
        bookmark: '<',
        onSelect: '&',
        onDelete: '&'
    },
    templateUrl: './bookmark.html',
    controller: 'BookmarkController'
};

angular
    .module('components.bookmark')
    .component('bookmark', bookmark);
