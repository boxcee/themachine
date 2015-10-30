/**
 * Created by Moritz on 30.10.2015.
 */
Meteor.methods({
    createNewUser: function (doc) {
        // Important server-side check for security and data integrity
        check(doc, Schema.addUser);

        console.log(doc);

        var newUser = Accounts.createUser({
            username: doc.username,
            email: doc.email,
            password: doc.password,
            profile: doc.profile
        });

        // Meteor.users.update(newUser);
    }
});