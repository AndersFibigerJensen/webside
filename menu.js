const baseurl="http://localhost:5276/swagger/index.html"

const app= Vue.createApp({
    data(){
        return{
            clusterid:-1,
            productid:-1,
            storeid:-1,
            hour:-1
        }
    },
    async created()
    {
        getstorecluster()
        gethourcluster()
    },
    methods:
    {
        getstorecluster()
        {
            axios.get(baseurl)
        },
        gethourcluster()
        {
            axios.get(baseurl)
        }
    }
}).mount("App")