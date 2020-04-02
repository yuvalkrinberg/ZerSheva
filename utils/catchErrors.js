
function catchErrors(error, displayError){
    let errorMsg;
    if (error.response){
        // The server responsed with a code which is different from the range of 2XX
        errorMsg = error.response.data;
        console.error(errorMsg);
    }
    else if (error.request){
        // No response was received from the server
        errorMsg = error.request;
        console.error(errorMsg);
    }
    else{
        // Somthing else was happened
        errorMsg= error.message;
        console.error(errorMsg);
    }
    displayError(errorMsg);
}

export default catchErrors;