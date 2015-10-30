/**
 * Created by Moritz on 30.10.2015.
 */
Schema = {};

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

Schema.addUser = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        label: "Username",
        max: 50
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email,
        max: 100
    },
    password: {
        type: String,
        label: "Password",
        max: 50
    },
    passwordConfirmation: {
        type: String,
        label: "Confirm Password",
        // this is a custom validation to ensure the password match
        custom: function () {
            if (this.value !== this.field('password').value) {
                return ("passwordMismatch");
            }
        }
    },
    profile: {
        type: Schema.UserProfile
    }
});