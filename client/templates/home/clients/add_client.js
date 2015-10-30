/**
 * Created by Moritz on 29.10.2015.
 */
Template.addClient.events({
    'submit form': function (e) {
        e.preventDefault();

        var client = {
            clientName: $(e.target).find('[name=clientName]').val()
        };

        Meteor.call('addClient', client, function (error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);

            // show this result but route anyway
            if (result.clientExists)
                alert('This project already exists');

            Router.go('addClient');
        });
    }
});