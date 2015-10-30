/**
 * Created by Moritz on 29.10.2015.
 */
Template.client.events({
    'click button': function (e) {
        e.preventDefault();

        var client = this;

        Meteor.call('deleteClient', client, function (error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);

            // show this result but route anyway
            if (result.clientAlreadyDeleted)
                alert('This client has already been deleted.');

            if (result.clientDeleted)
                alert('Client has been removed from database.');

            Router.go('addClient');
        });
    }
});