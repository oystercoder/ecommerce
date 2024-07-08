import React from 'react'

const ProductReducer = (state,action) => {
    if(action.type==='LOADING')
        {
            return {
                ...state,
                isLoading:true,

            }
        }
        if(action.type==='PRODATA')
            {
                return{
                    ...state,
                    isLoading:false,
                    products:action.payload,
                    isError:false
                }
            }
            if(action.type==='API_ERROR')
                {
                    return{
                        ...state,
                        isLoading:false,
                        isError:true,
                    }
                }
            
 return state
}

export default ProductReducer