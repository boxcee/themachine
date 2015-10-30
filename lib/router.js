/**
 * Created by Moritz on 29.10.2015.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return [
            Meteor.subscribe('projects'),
            Meteor.subscribe('clients'),
            Meteor.subscribe('userData')
        ];
    }
});

Router.route('/', {name: 'projectOverview'});

Router.route('/createproject', {name: 'createProject'});
Router.route('/addclient', {name: 'addClient'});
Router.route('/usermanagement', {name: 'userOverview'});

var requireAdmin = function () {
    var user = Meteor.user();
    if (!Roles.userIsInRole(user, 'admin')) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('insufficientRights');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireAdmin, {only: 'createProject'});
Router.onBeforeAction(requireAdmin, {only: 'addClient'});
Router.onBeforeAction(requireAdmin, {only: 'userOverview'});