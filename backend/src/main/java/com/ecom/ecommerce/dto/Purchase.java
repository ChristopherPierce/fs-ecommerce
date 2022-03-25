package com.ecom.ecommerce.dto;

import com.ecom.ecommerce.entity.Address;
import com.ecom.ecommerce.entity.Customer;
import com.ecom.ecommerce.entity.Order;
import com.ecom.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
