const data = require('../database');

const infosPersoDataMapper = {
    // Récuperation des infos persos de la BDD
    getAllInfos: async () => {
        const sqlQuery = 
    },

    getAllCards: async () => {
        const sqlQuery = {
          text : `SELECT * FROM "card"`
        };
    
        const result = await database.query(sqlQuery);
        return result.rows;
    
      },
}