package com.ecom.ecommerce.service;

import com.ecom.ecommerce.dto.PaymentInfo;
import com.ecom.ecommerce.dto.Purchase;
import com.ecom.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}
