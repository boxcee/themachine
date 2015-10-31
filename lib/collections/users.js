/**
 * Created by Moritz on 30.10.2015.
 */
Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        label: "First Name",
        regEx: /^[a-zA-Z-]{2,25}$/,
        max: 100,
        optional: true
    },
    lastName: {
        type: String,
        label: "Last Name",
        regEx: /^[a-zA-Z]{2,25}$/,
        max: 100,
        optional: true
    },
    organization: {
        type: String,
        label: "Organization",
        regEx: /^[a-z0-9A-z .]{3,30}$/,
        max: 150,
        optional: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: [String],
        blackbox: true,
        autoform: {
            options: function () {
                return Roles.getAllRoles().map(function (c) {
                    return {label: c.name, value: c.name};
                });
            },
            type: "select2",
            afFieldInput: {
                multiple: true
            }
        }
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    emails: {
        optional: true,
        type: [Object],
        custom: function () {
            console.log(this);
        }
    },
    "emails.$.address": {
        optional: true,
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        optional: true,
        type: Boolean
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
        autoValue: function () {
            return this.userId;
        },
        optional: true
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schema.User);
