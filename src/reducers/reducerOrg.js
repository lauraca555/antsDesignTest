import { 
    CREATE_ORGANIZATION_SUCCESS,
    GET_CURRENT_ORGANIZATION
 } from "./../actions/actionsOrg";

 
export const organizations = (state = [], action) => {
   
    const {type, payload} = action;
   
    switch (type){
        case CREATE_ORGANIZATION_SUCCESS:{
            const {organization} = payload;
            const newOrganization = { organization }
               
            
            return state.concat(newOrganization);
            
        }
        
        default:
            return state;
    }
    
}
