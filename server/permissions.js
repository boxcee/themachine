/**
 * Created by Moritz on 29.10.2015.
 */
/*Accounts.validateNewUser(function () {
 var loggedInUser = Meteor.user();

 if (Roles.userIsInRole(loggedInUser, ['admin', 'manage-users'])) {
 return true;
 }

 throw new Meteor.Error(403, "Not authorized to create new users");
 });*/

//Security.permit(['insert', 'update', 'remove']).collections([Projects, Clients, Meteor.users]).ifHasRole('admin').apply();
Security.permit(['insert', 'update', 'remove']).collections([Meteor.users, Clients, Projects, Findings]).apply();