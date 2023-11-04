function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkilesMemberController',
        controllerAs: 'vm',
        bindToController: true,
        sope: {
            member: '~'
        }
    };
}