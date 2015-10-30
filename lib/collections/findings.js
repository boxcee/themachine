/**
 * Created by Moritz on 30.10.2015.
 */
Findings = new Mongo.Collection('findings');
Findings.attachSchema(new SimpleSchema({
    projectId: {
        type: String,
        max: 20
    },
    largeN: {
        type: Boolean
    },
    picPageNumber: {
        type: Number,
        max: 50,
        optional: true
    },
    initialExtraction: {
        type: String,
        max: 500
    },
    page: {
        type: Number
    },
    country: {
        type: String,
        max: 20,
        custom: function () {
            if (!this.value && !this.field('region').value) {
                return ("Region/Country is missing");
            }
        },
        optional: true
    },
    region: {
        type: String,
        max: 20,
        custom: function () {
            if (!this.value && !this.field('country').value) {
                return ('Region/Country is missing')
            }
        },
        optional: true
    },
    findingSource: {
        type: String,
        max: 50
    },
    notesToReviewer: {
        type: String,
        max: 200,
        optional: true
    },
    extractUser: {
        type: String,
        max: 20
    },
    finalReviewerComments: {
        type: String,
        max: 20,
        optional: true
    },
    identifier: {
        type: String,
        max: 20,
        optional: true
    },
    finalFinding: {
        type: String,
        max: 500,
        optional: true
    },
    readyForConsolidation: {
        type: Boolean,
        optional: true
    },
    finalComment: {
        type: String,
        max: 250,
        optional: true
    }
}));