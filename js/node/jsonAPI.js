var axios = require('axios');

const baseUrl = "https://json-server-hideyoshi-com.herokuapp.com";
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