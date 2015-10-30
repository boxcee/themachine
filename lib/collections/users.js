/**
 * Created by Moritz on 30.10.2015.
 */
Meteor.methods({
    addUser: function (userAttributes) {
        check(Meteor.userId(), String);
        check(userAttributes, {
            username: String,
            email: String,
            password: String,
            profile: {
                firstName: String,
                lastName: String,
                company: String,
                roles: Array
            }
        });
        var userWithSameName = Projects.findOne({username: userAttributes.username});
        if (userWithSameName) {
            return {
                userExists: true,
                _id: userWithSameName._id
            }
        }
        var postId = Accounts.createUser(userAttributes);
        return {
            _id: postId
        };
    }
});