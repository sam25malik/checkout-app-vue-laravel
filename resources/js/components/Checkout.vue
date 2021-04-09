<template>
    <center>
    <form @submit.prevent="submit">
        <img src="https://tendo-static.s3-ap-southeast-1.amazonaws.com/200x200/assets/logo/tp-icon-2000x2000.png"/>
        <div class="form-group" id="form-1">
            <label for="summary" id="label">Summary</label>
            <input type="text" class="form-control" name="summary" id="summary" v-model="fields.summary" />
        </div>
    
        <div class="form-group" id="form-1">
            <label for="invoice" id="label">Invoice#</label>
            <input type="text" class="form-control" name="invoice" id="invoice" v-model="fields.invoice" />
        </div>
    
        <div class="form-group" id="form-1">
            <label for="total" id="label">Total</label>
            <input type="number" class="form-control" name="total" id="total" v-model="fields.total" />
        </div>

        <center><button type="submit" class="btn btn-primary" id="btn">Checkout</button></center>
    </form>
    </center>
</template>

<script>
    export default {
        data() {
        return {
          fields: {'summary':'T-Shirt Red Man', 'invoice':'ABCD-1234-5678', 'total':1000, 'currency':"PHP"},
          errors: {},
          success: false,
          loaded: true,
          action: '',
        }
      },

        methods: {
        submit() {
          this.errors = {};
          console.log('submit',this.fields);
          var postData = {
            "tp_amount": this.fields.total,   
            "tp_currency": this.fields.currency,
            "tp_merchant_order_id": "TEST_ORDER_ID_12345",
            "tp_redirect_url": "https://domain.com/redirect_url_path?query=string",
            "tp_merchant_user_id": "123",
            "x_signature":"42aeb43b66c6f19e329a2f3e36cbf1c82cc4de9f0074a32de36c9b4a272f6cff"
        };

        let axiosConfig = {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzEzNTY0MS0zOWEwLTQ4M2ItYmViYy0zMzdiZTY1YjI1NjciLCJqdGkiOiJlNWVhZDIxMjc1NDk5OTk1ODI1MTczZGYzYzYzNDRkNWRhNWMzZGM4N2Y3ZjkzZGJlM2IwZGQxMDljMGFiMWU4OWVkOWUyZDJkOWM2NmM5OSIsImlhdCI6MTYxNzg3NTMzMSwibmJmIjoxNjE3ODc1MzMxLCJleHAiOjE2MTg0ODAxMzAsInN1YiI6IiIsInNjb3BlcyI6W119.I337K70g9Bvjy9BWzktJXajiiycYWPOJq5BBGMU8eg-UZ_Bdlx_XGNdr-D7Ze4QQXLtpXdKCEaWx1v9smtOHL6QaZ7bGcwUlMIEHP2G_BRDa1IBAR3X8PtNoKlPrBXO3MTZSqpd9hGKXFHGNjIztd1yy9Si-iN-AUDcRstdV2QJ3_MPdvl3b7cdnars2bTzrC_jnWbtFwPZfuC-A4NTsKDHDThbkoxae6wkQdg4-Z7by9lpPOLH3aflJ1smK1EhZbN4lGC6o7JfEfpKhxtgfy5moR1RjciPHh07Y3GKgCoj0-wCX4JOU_Y68boIRV282Os2846eRPzmY67Incq82NdsGEANdOT9PGI46cM-aijyncvLrlMkn7Ou6JtfdOI9NEBaksgSWqxomYbo1dO183c4oOYZKKEE6RSWqofSaLBiOQXmZnpGKgKNTNV79eufhgNmdIM7oFnAbS20RkN1hWcvq1rVW2dIXIdpye3DIStMmwe8LDfhisulenlgvFWIVJW35y_Io0ooZMlPakGbgT9cM75A8bXd-Scrlt3QfTdfS5XJbPX5Aj4fg62eJdQbp0B9BBqcIkNvnHd9bSHLjorE07Gu9yLMrjNIIX5ODxUrCglJiRCjWqh6_WJTyHrwwyoZKheCacfLVXmo92VkTKHUc68yjf01Z5pNsJQCbR4k',
          }
        };
        const axios = require("axios");

        axios.post('https://sandbox.tendopay.ph/payments/api/v2/order', postData, axiosConfig)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
          window.open(res.data.authorize_url);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
        },
      },
    }
</script>

<style scoped>
.form-control {
  border: 1px solid black;
  font-size:20px;
}

#summary{
  margin-left:10px;    
  font-size:20px !important;
}

#invoice{
  margin-left:22px;    
  font-size:20px !important;
}

#total{
    margin-left: 50px;
    font-size:20px !important;
}

#form-1{ 
 margin-top:30px !important;
}

#form-template{
  margin-left:-40px !important;
}

#btn{
  margin-left: -20px;
  margin-top: 20px;
  border: 1px solid black;
  font-size:20px !important;
}

#label{
  font-size:20px !important;
}

</style>


