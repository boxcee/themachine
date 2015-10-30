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

Router.route('/projects/:_id', {
    name: 'projectPage',
    data: function () {
        return Projects.findOne(this.params._id);
    }
});
Router.route('/extract/:_id', {
    name: 'extractFindings',
    data: function () {
        return Projects.findOne(this.params._id);
    }
});

Router.route('/finalreview/:_id', {
    name: 'finalReview',
    data: function () {
        return Projects.findOne(this.params._id);
    }
});

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

Router.onBeforeAction('dataNotFound', {only: 'projectPage'});