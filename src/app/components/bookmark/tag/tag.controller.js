function TagController($log) {
    let self = this;

    self.$onInit = function () {
        $log.debug('Tag', self.tag);
    };
    self.clickTag = function () {
        self.onClick({
            $event: {
                tagId: self.tag.id
            }
        });
    };
}

angular
    .module('components')
    .controller('TagController', TagController);