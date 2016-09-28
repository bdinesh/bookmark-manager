function TagController() {
    let ctrl = this;

    ctrl.clickTag = function () {
        ctrl.onClick({
            $event: {
                tagId: ctrl.tag.id
            }
        });
    };
}

angular
    .module('components')
    .controller('TagController', TagController);