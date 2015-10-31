/**
 * Created by Moritz on 31.10.2015.
 */
if (Meteor.isClient) {
    AutoForm.hooks({
        projectInsertForm: {
            formToDoc: function (doc) {
                doc.createdByUser = Meteor.userId();
                return doc;
            }
        }
    });
}