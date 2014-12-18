(function () {
    angular
        .module('breakLinkModule')
        .controller('BreakLink', BreakLink);

    function BreakLink() {
        /* jshint validthis: true */
        var vm = this;

        vm.link = '';

        ////////////

        vm.getLink = function () {
            console.log(vm.link);
        };
    }


})();