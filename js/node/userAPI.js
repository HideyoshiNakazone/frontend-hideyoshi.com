var jsonAPI = require('./jsonAPI.js');
var sha256 = require('js-sha256');

var pepper = "ThisIsASimplePepper";

var getRandomString = function (length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

module.exports = {
    verifyClientData : function (client) {
        return jsonAPI.getClient(client).then(function (response) {
            var servClient = response.data[0];
            if (servClient && servClient.username == client.username) {
                let passwdToVerify = sha256(pepper + client.passwd + servClient.salt);
                if (passwdToVerify == servClient.passwd) {
                    return servClient;
                } else {
                    throw new Error("Wrong Password, please try again.");
                }
            } else {
                throw new Error("User not found, please create a new User Account");
            }
        })
    },
    createClient: function (client) {
        
        return jsonAPI.getClients().then(function(response) {
            
            let clients = response.data;
            let serial = 0;
            clients.forEach(function (e) {
                if (e.id > serial) {
                    serial = e.id;
                }
            });
            client.id = serial + 1;
        
            client.full_name = client.full_name.toLowerCase();
            
            clients.some(e => function (e) {
                if (e.email == client.email) {
                    return false
                }
            });
            clients.some(e => function (e) {
                if (e.username == client.username) {
                    return false
                }
            });
            
            client.salt = getRandomString(24);
            client.passwd = sha256(pepper+client.passwd+client.salt);

            return jsonAPI.addClient(client).then(function (response) {
                return client;
            }, function (error) {
                return false;
            });

        }, function (error) {
            console.log(error);
        });

    }
}