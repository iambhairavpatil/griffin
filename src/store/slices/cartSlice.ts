import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import axios from "axios";
// import OAuth from "oauth-1.0a";
// import CryptoJS from "crypto-js";

interface CartState {
  items: { id: number; quantity: number; product: any }[];
  isCartVisible: boolean;
}

const initialState: CartState = {
  items: [],
  isCartVisible: false, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      // const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      // if (itemIndex !== -1) {
      //   state.items[itemIndex].quantity += action.payload.quantity;
      // } else {
        state.items.push(action.payload);
      // }

      // const customer_key = "ck_9d1343c5533dcde594dd88017901e9dc9a4c513d";
      // const consumer_key = "cs_1d2c74719e0a0492806b9da3175f5fdf3972880c";
      
      // const oauth = new OAuth({
      //   consumer: {
      //     key: customer_key,
      //     secret: consumer_key,
      //   },
      //   signature_method: "HMAC-SHA1",
      //   hash_function(base_string, key) {
      //     return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
      //   },
      // });
      
      // const request_data = {
      //     url: `https://marathicarworld.com/backend/wordpress/wp-json/wc/store/v1/cart/add-item`,
      //     carturl: `https://marathicarworld.com/backend/wordpress/wp-json/wc/store/v1/cart`,
      //     method: "POST",
      //   };

        // const headers = oauth.toHeader(oauth.authorize(request_data));

        // dispatch(setLoading(true)); // GLOBAL LOADING START

        // axios
        // .get(request_data.carturl)
        // .then((response1) => {
        //   console.log("added to cart");
        //   console.log(response1.data);
        // })
        // .catch((error) => {
        //   console.error("Error fetching product data:", error);
        // })
        // .finally(() => {
        //   // dispatch(setLoading(false)); // GLOBAL LOADING END
        //   console.log("added to cart");
        // });


        // axios
        //   .post(request_data.url, {"id": 65, "quantity": 1} , { headers ,"crossdomain": true})
        //   .then((response) => {
        //     console.log("added to cart");
        //     console.log(response.data);
        //     // setProduct(response.data);
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching product data:", error);
        //   })
        //   .finally(() => {
        //     // dispatch(setLoading(false)); // GLOBAL LOADING END
        //     console.log("added to cart");
        //   });
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    closeCart: (state) => {
      state.isCartVisible = false; 
    },
    toggleCartVisibility: (state) => {
      state.isCartVisible = !state.isCartVisible; 
    },
  },
});

export const { addToCart, removeFromCart, closeCart, toggleCartVisibility } = cartSlice.actions;

export default cartSlice.reducer;
