var axios = require('axios');

const baseUrl = "http://localhost:3000";
const salt = "ThisIsASimpleSalt";

module.exports = {
    getClient: function (client) {
        return axios.get(baseUrl+"/client?username="+client.username);
    },
    getClients: function () {
        return axios.get(baseUrl+"/client");
    },
    addClient: function (client) {
        return axios.post(baseUrl+"/client",client);
    }
}