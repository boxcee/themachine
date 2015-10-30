/**
 * Created by Moritz on 29.10.2015.
 */
Template.clientsList.helpers({
    clients: function () {
        return Clients.find({}, {sort: {clientName: 1}});
    }
});