/**
 * Created by Moritz on 29.10.2015.
 */
Meteor.publish('projects', function () {
    return Projects.find();
});

Meteor.publish('clients', function () {
    return Clients.find();
});

Meteor.publish(null, function () {
    return Meteor.roles.find({})
});

Meteor.publish('userData', function () {
    var user = this.userId;
    if (Roles.userIsInRole(user, ['admin', 'manage-users'])) {
        return Meteor.users.find({}, {fields: {password: 0}});
    } else {
        this.ready();
    }
});