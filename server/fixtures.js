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