/* 
判断是否为外部资源
*/
export function isExternal (path) {
    return /^(http?:|mailto:|tel:)/.test(path)
}