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
        max: 200
    },
    creationDate: {
        type: Date,
        label: "Date of Creation",
        optional: true
    },
    createdBy: {
        type: String,
        label: "Project Creator",
        max: 50,
        optional: true
    }
}));

Meteor.methods({
    createProject: function (projectAttributes) {
        check(Meteor.userId(), String);
        check(projectAttributes, {
            projectName: String,
            clientName: String
        });
        var projectWithSameName = Projects.findOne({projectName: projectAttributes.projectName});
        if (projectWithSameName) {
            return {
                projectExists: true,
                _id: projectWithSameName._id
            }
        }
        var user = Meteor.user();
        var post = _.extend(projectAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Projects.insert(post);
        return {
            _id: postId
        };
    }
});