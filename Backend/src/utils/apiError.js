class ApiError extends Error{
    constructor(StatusCode, message= "Somthing went wrong", error=[], stack="")
    {
        super(message)
        this.StatusCode = StatusCode,
        this.data = null,
        this.message = message,
        this.success = false,
        this.error = error
    }
}

export {ApiError }