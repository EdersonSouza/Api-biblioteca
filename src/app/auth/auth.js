'use strict';
import jwt from 'jsonwebtoken';
const secret ='2514301ec89fbed758da35d85a27f042'

exports.sign = payload => jwt.sign(payload, secret, {expiresIn:86400});

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token,secret);
    return data;
};

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, secret, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                req.data = decoded
                next();
            }
        });
    }
};

exports.validateSession = function (req, res, next) {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null

    if (!token) {
      res.status(401).send({ message: 'Sua sessão é inválida ou está expirada' })
      return
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Sua sessão é inválida ou está expirada' })
      }

      req.data = decoded

      next()
    })
  }