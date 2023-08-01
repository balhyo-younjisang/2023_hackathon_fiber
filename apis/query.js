export const stringifyQueryString = (data) => {
    const result = Object.entries(data)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    return result ? `?${result}` : ''
}