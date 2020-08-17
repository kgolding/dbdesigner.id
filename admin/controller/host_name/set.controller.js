const axios = require("axios")

module.exports = {
    async action(host_name) {
        const port = process.env.APP_PORT || 80
        var respond = await axios.post(`http://localhost:${port}/api/v1/admin/host_name/set`, {
            host_name: host_name
        })
        if (respond.data.success === true) {
            console.log("Host Name is : ")
            var host_name = respond.data.payload.host_name
            console.log(host_name)

        } else {
            console.log("Error " + respond.data.message)
        }
    }
}