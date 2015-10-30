/**
 * Created by Moritz on 29.10.2015.
 */
Template.createProject.onRendered(function () {
    $(function () {
        $("#clientName").select2();
    });
});

Template.createProject.events({
    'submit form': function (e) {
        e.preventDefault();

        var project = {
            projectName: $(e.target).find('[name=projectName]').val(),
            clientName: $(e.target).find('[name=clientName]').val()
        };

        Meteor.call('createProject', project, function (error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);

            // show this result but route anyway
            if (result.projectExists)
                alert('This project already exists');

            Router.go('projectOverview');
        });
    }
});

Template.createProject.helpers({
    getClients: function () {
        return Clients.find({}, {sort: {clientName: 1}});
    }
});