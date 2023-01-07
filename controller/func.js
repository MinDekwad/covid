const dayjs = require('dayjs');

exports.convertDateTime = (paramArr) => {
    paramArr = Array.isArray(paramArr) ? paramArr : [paramArr]
    let result = paramArr.map((objData) => {
        return {
            ...objData,
            created_date : dayjs(objData.created_date).format('YYYY-MM-DD HH:mm:ss'),
            updated_date : dayjs(objData.updated_date).format('YYYY-MM-DD HH:mm:ss')
        }
    })
    return result
}