import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: []
});

export const getters = {
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((acc, next) => acc + +next.combinedPrice, 0);
  },
  itemNumber: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((acc, next) => acc + +next.count, 0 );
  }
};

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4();
    state.cart.push(formOutput);
  }
};

export const actions = {
  async getFooddata({ state, commit }) {
    if (state.fooddata.length) {
      return;
    }
    try {
      const response = await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      );

      const data = await response.json();
      console.log("data", data);
      commit("updateFoodData", data);
    } catch (error) {
      console.log("error", error);
    }
  }
};
