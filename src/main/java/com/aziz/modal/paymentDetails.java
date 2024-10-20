package com.aziz.modal;

import com.aziz.domain.PaymentStatus;
import lombok.Data;

@Data
public class paymentDetails {

    private String paymentId;
    private String paypalPaymentLinkId;
    private String paypalPaymentlinkReferenceId;
    private String paypalPaymentLinkStatus;
    private String paypalPaymentIdZWSP;
    private PaymentStatus status;
}
