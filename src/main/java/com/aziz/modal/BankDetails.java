package com.aziz.modal;

import lombok.Data;

@Data
public class BankDetails {
    private String accountNumber;
    private String accountHolderName;
    private String iban;
}