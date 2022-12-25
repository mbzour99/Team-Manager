const TeamCont = require('../controllers/teamManager.controller');
module.exports = function(app){
    app.post('/api/Team', TeamCont.createTeam);
    app.get('/api/Teams', TeamCont.getAllTeams);
    app.get('/api/Team/:id', TeamCont.getTeam);
    app.put('/api/Team/:id', TeamCont.updateTeam);
    app.delete('/api/Team/:id', TeamCont.deleteTeam);
}