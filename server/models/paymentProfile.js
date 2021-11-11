export const paymentProfile = {
  paymentType: {
    type: String,
    enum: ["mastercard", "visa"],
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  expiredDate: {
    type: Date,
    required: true
  },
  nameOnCard: {
    type: String
  }
};