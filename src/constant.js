const prod = {
    url: {
        API_URL: "https://myapp.herokuapp.com"

    }
}
 const dev = {
        url: {
         API_URL: "http://localhost:8080/api/v1/"
        }
}
const test = {
    url: {

        API_URL: "JSON"
    }


}
var config =test
if (process.env.NODE_ENV === "development")
    config = dev

else if (process.env.NODE_ENV === "production")
    config = prod

     
export default config