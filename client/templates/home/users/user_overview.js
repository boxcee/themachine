/**
 * Created by Moritz on 29.10.2015.
 */
Template.userOverview.events({
    'submit form': function (e) {
        e.preventDefault();

        var newUser = {
            username: $(e.target).find('[name=username]').val(),
            email: $(e.target).find('[name=email]').val(),
            password: $(e.target).find('[name=password]').val(),
            profile: {
                firstName: $(e.target).find('[name=firstName]').val(),
                lastName: $(e.target).find('[name=lastName]').val(),
                company: $(e.target).find('[name=company]').val(),
                roles: $(e.target).find('[name=roles]').val()
            }
        };

        Meteor.call('addUser', newUser, function (error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);

            // show this result but route anyway
            if (result.userExists)
                alert('User is already in the system.');

            Router.go('userOverview');
        });
    }
});

Template.userOverview.helpers({
    getRoles: function () {
        return Meteor.roles.find();
    }
});

Template.userOverview.onRendered(function () {
    $(function () {
        $("#roles").select2();
    });
});