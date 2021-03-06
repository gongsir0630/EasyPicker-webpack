import ajax from '../ajax'

function createZip(course: string, tasks: string, username: string) {
    const data = {
        course,
        tasks,
        username
    }
    return ajax.post<any, BaseResponse>('file/createZip', data)
}

function checkFileIsExistQiniu(key: string) {
    return ajax.get<any, BaseResponse<{ isExist: boolean }>>('file/qiniu/exist', {
        params: {
            key
        },
        baseURL: '/server2'
    })
}

/**
 * 查询文件是否存在
 */
function checkFileIsExist(username: string, course: string, tasks: string, filename: string) {
    return ajax.get<any, BaseResponse>('file/check', {
        params: {
            username,
            course,
            tasks,
            filename
        },
        baseURL: '/server2'
    })
}

/**
 * 获取文件数量
 * @param {String} username 
 * @param {String} course 
 * @param {String} tasks 
 */
function checkFileCount(username, course, tasks) {
    return ajax.get('file/count', {
        params: {
            username,
            course,
            tasks,
        },
        baseURL: '/server2'
    })
}


/**
 * 获取文件下载链接
 */
function getFileDownloadUrl(username: string, course: string, tasks: string, filename: string) {
    return ajax.get('file/qiniu/download', {
        params: {
            username,
            course,
            tasks,
            filename
        },
        baseURL: '/server2'
    })
}

function compressOssFile(username, course, tasks) {
    return ajax.post('file/qiniu/compress', {
        username,
        course,
        tasks
    }, { baseURL: '/server2' })
}

function getcompressFileStatus(url) {
    return ajax.post('file/qiniu/compress/status', {
        url
    }, { baseURL: '/server2' })
}

export default {
    createZip,
    checkFileIsExistQiniu,
    checkFileIsExist,
    checkFileCount,
    getFileDownloadUrl,
    compressOssFile,
    getcompressFileStatus
}