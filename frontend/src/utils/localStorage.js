export function getTokens() {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    const tokens = { accessToken: accessToken, refreshToken: refreshToken }
    return tokens
}

export async function writeAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken)
}

export async function writeRefreshToken(refreshToken) {
    localStorage.setItem('refreshToken', refreshToken)
}

export async function deleteToken() {
    localStorage.setItem('accessToken', null)
}