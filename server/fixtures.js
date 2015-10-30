/**
 * Created by Moritz on 29.10.2015.
 */
if (Projects.find().count() === 0) {
    Projects.insert({
        projectName: 'Project 1',
        clientName: 'Mondelez'
    });

    Projects.insert({
        projectName: 'Meteor',
        clientName: 'http://meteor.com'
    });

    Projects.insert({
        projectName: 'The Meteor Book',
        clientName: 'http://themeteorbook.com'
    });
}

var adminUser = Meteor.users.findOne({username: 'magnificent'});
if (!adminUser) {
    user = Accounts.createUser({
        username: 'magnificent',
        email: 'msc@marketlogicsoftware.com',
        password: 'test',
        profile: {
            firstName: 'Moritz',
            lastName: 'Schmitz von Hülst',
            company: 'Market Logic Software',
            roles: ['admin', 'manage-users']
        }
    });
    Roles.addUsersToRoles(user, ['admin', 'manage-users'], Roles.GLOBAL_GROUP)
}