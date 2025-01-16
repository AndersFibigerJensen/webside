const baseurl="http://localhost:5276/swagger/index.html"

const app=Vue.createApp({
    data() {
        return {
            products:[],
            stores:[],
            product:{id:null,name:null},
            store:{id:null,name:null}
        };
    },
    async created()
    {
        this.products=await this.getproducts()
        this.stores=await this.getstores()
    },
    methods:
    {
        async getstores()
        {
            try
            {
                 await axios.get(baseurl)
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
                 await axios.get(baseurl)
            }
            catch(ex)
            {
                alert(ex.message)
            }  
        },
        async getstores(storeid)
        {
            try
            {
                axios.get(baseurl/storeid)
            }
            catch(ex)
            {
                alert(ex.message)
            }  
        },
        async getidproduct(productid)
        {
            try
            {
                axios.get(baseurl/productid)
            }
            catch(ex)
            {
                alert(ex.message)
            }  
        },
        async addtransaction()
        {
            
            datetime.now()
            axios.post()
        }
    }
}).mount("#app")