const crypto = require('crypto');
const { verifySignature, generateToken } = require('./AuthStarter/TokenUtils');

// Token Generation
exports.generateToken = async (clientId, secretKey) => {
    return generateToken(clientId, secretKey);
};

// Token Verification
exports.verifyToken = (token, publicKey) => {
    return verifySignature(token, publicKey);
};
