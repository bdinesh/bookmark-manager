const tag = {
    bindings: {
        tag: '<',
        onClick: '&',
        onDelete: '&'
    },
    templateUrl: 'tag.html',
    controller: 'TagController'
};

angular
    .module('components.bookmark')
    .component('tag', tag);