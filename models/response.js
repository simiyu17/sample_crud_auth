class JSONResponse {
    constructor(res) {
        this.res = res;
    }

    static success(message, data) {
        this.res.status(200).json({
            code: 200,
            message: message || 'success',
            data: data,
        });
    }

    static serverError(message, code, data) {
        this.res.status(code ? code : 500).json({
            code: code || 500,
            message: message || 'internal server error',
            data: data,
        });
    }
}

module.exports = JSONResponse;