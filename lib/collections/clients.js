/**
 * Created by Moritz on 29.10.2015.
 */
Clients = new Mongo.Collection('clients');
Clients.attachSchema(new SimpleSchema({
    clientName: {
        type: String,
        label: "Mandator Name",
        max: 200
    }
}));

Meteor.methods({
    addClient: function (clientAttributes) {
        check(Meteor.userId(), String);
        check(clientAttributes, {
            clientName: String
        });
        var clientWithSameName = Clients.findOne({clientName: clientAttributes.clientName});
        if (clientWithSameName) {
            return {
                clientExists: true,
                _id: clientWithSameName._id
            }
        }
        var user = Meteor.user();
        var client = _.extend(clientAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var clientId = Clients.insert(client);
        return {
            _id: clientId
        };
    },
    deleteClient: function (client) {
        check(Meteor.userId(), String);
        var clientWithSameName = Clients.findOne(client);
        if (!clientWithSameName) {
            return {clientAlreadyDeleted: true}
        }
        Clients.remove(client, function () {
            return {clientDeleted: true}
        });
    }
});