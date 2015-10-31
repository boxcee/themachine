/**
 * Created by Moritz on 30.10.2015.
 */
Meteor.methods({
    createNewUser: function (doc) {

        check(doc, Meteor.users);

        console.log(doc);

        var newUser = Accounts.createUser(doc);

        Roles.addUsersToRoles(newUser, doc.profile.roles);
        // Meteor.users.update(newUser);
    }
});