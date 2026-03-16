
const errorResponseBody = {
    err:{},
    data:{},
    message:"",
    success: false
}

const successResponseBody = {
    err:{},
    data:{},
    success: true,
    message:"Successfully process the requet"
}


module.exports = {
    errorResponseBody,
    successResponseBody
};