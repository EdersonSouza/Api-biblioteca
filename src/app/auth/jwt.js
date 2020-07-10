import jwt, { verify } from 'jsonwebtoken'
const secret ='2514301ec89fbed758da35d85a27f042'

export const sign = payload => jwt.sign(payload, secret, {expiresIn:86400})
export const verify = token => jwt.verify(token, secret)