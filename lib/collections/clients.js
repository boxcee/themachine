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