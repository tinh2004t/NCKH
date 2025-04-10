function generateTransactionCode() {
    const prefix = "TXN-";
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return prefix + random;
  }
  
  module.exports = generateTransactionCode;
  