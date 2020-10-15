const orphanages = require('./database/fakedata.js');

module.exports = {
    index: function(request, response) {
        const city = request.query.city
        return response.render('index')
    },

    orphanage: function(request, response) {
        return response.render('orphanage')
    },

    orphanages: function(request, response) {
        return response.render('orphanages', {orphanages})
    },

    createOrphanage: function(request, response) {
        return response.render('create-orphanage')
    },
}