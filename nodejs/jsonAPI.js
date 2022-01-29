var axios = require('axios');

const baseUrl = "http://localhost:3000";
const salt = "ThisIsASimpleSalt";

module.exports = {
    getClient: function (client) {
        return axios.get(baseUrl+"/cliente?username="+client.username);
    },
    getClients: function () {
        return axios.get(baseUrl+"/cliente");
    },
    addClient: function (client) {
        return axios.post(baseUrl+"/cliente",client);
    }
}