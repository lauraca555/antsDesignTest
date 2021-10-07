

/**
 * Notify organization creation success
 */
 export const CREATE_ORGANIZATION_SUCCESS = 'CREATE_ORGANIZATION_SUCCESS';
 export const createOrganizationSuccess = organization => {
    return {
        type: CREATE_ORGANIZATION_SUCCESS,
        payload : { organization }
    };
    
}