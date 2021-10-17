import {KEEP_URL_AVATAR} from './Actions';
export const imageUrl = (state = [], action) => {
    const {type, payload} = action;
    switch(type){
        case KEEP_URL_AVATAR:{
            const { ImagUrl } = payload; 
            const newImagUrl = {
                ImagUrl   
            }
            return state.concat(newImagUrl);
        }
        default:
            return state;
    }
    
}