/**
 * Created by Moritz on 29.10.2015.
 */
Template.usersList.helpers({
    users: function () {
        return Meteor.users.find({}, {sort: {username: 1}});
    }
});