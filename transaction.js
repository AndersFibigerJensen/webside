const baseurl="http://localhost:5276/"

const app= Vue.createApp({
    data()
    {
        return{
            Stores:[],
            Products:[],
            Productid:0,
            Storeid:0
        };
    },
    async created()
    {
        this.getstores()
        this.getproducts()
        console.log("did it")
    },
    methods:
    {
        async getstores()
        {
            try
            {
                const response= await axios.get(baseurl + "Api/Store")
                this.Stores=response.data
            }
            catch(ex)
            {
                alert(ex.message)
            }         
        },
        async getproducts()
        {
            try
            {
                const response= await axios.get(baseurl + "Api/Product")
                this.Products=response.data
            }
            catch(ex)
            {
                alert(ex.message)
            }         
        },
        async postTransaction()
        {
            try
            {
                axios.Post(baseurl + "Transaction?storeid="+Storeid+ "&product="+Productid)
                console.log("working")
            }
            catch(ex)
            {
                alert(ex.message)
            }
        }
    }
}).mount('#app')