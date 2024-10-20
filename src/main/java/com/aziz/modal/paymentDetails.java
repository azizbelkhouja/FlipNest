package com.aziz.modal;

import com.aziz.domain.PaymentStatus;
import lombok.Data;

@Data
public class paymentDetails {

    private String paymentId;
    private String stripePaymentLinkId;
    private String stripePaymentlinkReferenceId;
    private String stripePaymentLinkStatus;
    private String stripePaymentIdZWSP;
    private PaymentStatus status;
}
