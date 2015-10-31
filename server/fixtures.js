/**
 * Created by Moritz on 29.10.2015.
 */
if (Roles.getAllRoles().count() === 0) {
    Roles.createRole('admin');
    Roles.createRole('manage-users');
    Roles.createRole('super-admin');
    Roles.createRole('extract');
    Roles.createRole('final-review');
    Roles.createRole('guest');
    Roles.createRole('default');
}

if (Meteor.users.find().count() === 0) {
    var newUser = Accounts.createUser({
        username: 'magnificent',
        password: 'test',
        email: 'msc@marketlogicsoftware.com',
        profile: {
            firstName: 'Moritz',
            lastName: 'Schmitz',
            organization: 'Market Logic Software',
            roles: ['admin']
        }
    });
    Roles.addUsersToRoles(newUser, ['admin']);
    console.log("Admin user created.");
}