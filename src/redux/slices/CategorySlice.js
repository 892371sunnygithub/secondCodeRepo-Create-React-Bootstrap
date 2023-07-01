import {createSlice} from '@reduxjs/toolkit';
// import shortid from 'shortid';
//  export const STATUSES=Object.freeze({
//     IDLE:'idle',
//     ERROR:'error',
//     LOADING:'loading',
// });
const initialState={
      bodyData:[
    {
      name:"John",
      role:"Designer",
      location:"London",
      company:"Google",
      education:"B.tech",
      mobile:"7878787887",
      email:"john@gmail.com"
      
    },

    {
      name:"Doe",
      role:"Developer",
      location:"Mexico",
      company:"Tcs",
      education:"BBA",
      mobile:"7878787881",
      email:"doe@gmail.com"
      
    },

    {
      name:"Kain",
      role:"Developer",
      location:"America",
      company:"Hcl",
      education:"Bca",
      mobile:"7878787883",
      email:"kain@gmail.com"
      
    },

    {
      name:"Johnson",
      role:"React-Js",
      location:"United State",
      company:"Infosys",
      education:"B.tech",
      mobile:"7878787884",
      email:"johnson@gmail.com"
      
    },

    {
      name:"Vijay",
      role:"Designer",
      location:"India",
      company:"Google",
      education:"B.tech",
      mobile:"7878787882",
      email:"vijay@gmail.com"
      
    },

    {
      name:"Ajay",
      role:"Developer",
      location:"Mumbai",
      company:"Tcs",
      education:"B.tech",
      mobile:"7878787888",
      email:"ajay@gmail.com"
      
    },
  ],
  objectData:{}
};

const CategorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        getCategory:(state, action)=>{
           state.bodyData= [...state.bodyData,action.payload];
        },

        trashData:(state,action)=>{
            state.bodyData=state.bodyData.filter((cur, index)=>index !==action.payload)
        },

        editdata:(state, action)=>{
          state.objectData= action.payload;
        },

        UpdateAction:(state, action)=>{
          state.bodyData= state.bodyData.map((el)=> el.mobile==action.payload.mobile? action.payload:el)
        
        },
  
    }
})


export const {getCategory, trashData, UpdateAction, editdata}= CategorySlice.actions;
export default CategorySlice.reducer;


// Thunks

// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch, getState){
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res= await axios.get('https://fakestoreapi.com/products');
//             dispatch(setProducts(res.data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }


// https://api.pujakaitem.com/api/products