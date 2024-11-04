package com.aziz.service;

import com.aziz.modal.SellerReport;

public interface SellerReportService {

    SellerReport getSellerReport(String sellerId);
    SellerReport updateSellerReport(SellerReport sellerReport);
}
