/**
 * Created by Moritz on 29.10.2015.
 */
Template.projectOverview.helpers({
    projects: function () {
        return Projects.find({}, {sort: {projectName: 1}});
    }
});