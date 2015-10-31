/**
 * Created by Moritz on 29.10.2015.
 */
Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({
    projectName: {
        type: String,
        label: "Name of Project",
        max: 200
    },
    clientName: {
        type: String,
        label: "Name of Mandator",
        max: 200,
        autoform: {
            options: function () {
                return Clients.find().map(function (c) {
                    return {label: c.clientName, value: c.clientName};
                });
            },
            type: "select2",
            placeholder: "Name of Mandator"
        }
    },
    responsible: {
        type: String,
        label: "Responsibility",
        max: 50,
        autoform: {
            options: function () {
                return Meteor.users.find().map(function (c) {
                    return {
                        label: c.profile.firstName + " " + c.profile.lastName,
                        value: c.profile.firstName + " " + c.profile.lastName
                    };
                })
            },
            type: "select2"
        },
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    },
    createdByUser: {
        type: String,
        max: 20,
        autoform: {
            type: "hidden"
        }
    }
}));