const success = (res, message, data, status = 200)=>{
    return res.status(status).json({
        code: 200,
        message: message,
        data: data
    })
}

const error = (res, message, status = 400)=>{
    return res.status(status).json({
        code: 400,
        message: message
    })
}

const response = (code, message, data) => {
    const resp = {code, message, data};
    resp.code = code;
    resp.message = message;
    resp.data = data;
    return resp;
}

export {success, error, response}