import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:kontob_flutter/app/modules/product_detail/controllers/product_detail_controller.dart';

import '../../../../utils/app_text_style.dart';
import '../../../../utils/colors.dart';
import '../../../../utils/screen_size.dart';

class ProductDetailView extends GetView<ProductDetailController> {
  const ProductDetailView({super.key});

  @override
  Widget build(BuildContext context) {
    final isMobile = ScreenSize.isMobile(context);
    final isTablet = ScreenSize.isTablet(context);
    final padding = isMobile ? 16.0 : 32.0;
    final product = controller.product['data'];

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        title: Text(product.titleKh ?? product.title ?? ''),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(padding),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // IMAGE
            ClipRRect(
              borderRadius: BorderRadius.circular(16),
              child: Image(
                image: AssetImage(
                  (product.images != null && product.images!.isNotEmpty)
                      ? product.images!.first
                      : "",
                ),
                width: double.infinity,
                height: isMobile
                    ? 500
                    : isTablet
                    ? 400
                    : 500,
                fit: isMobile ? BoxFit.cover : BoxFit.contain,
                errorBuilder: (_, __, ___) =>
                    const Center(child: Icon(Icons.inventory_2_outlined, size: 40)),
              ),
            ),
            const SizedBox(height: 16),

            // TITLE
            Text(
              product.titleKh ?? product.title ?? '',
              style: AppTextStyle.titleMedium(
                context,
              ).copyWith(fontSize: isMobile ? 18 : 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 4),
            // Text(
            //   product.title ?? '',
            //   style: TextStyle(fontSize: isMobile ? 14 : 18, color: Colors.grey[600]),
            // ),
            // const SizedBox(height: 12),

            // PRICE
            Text(
              "\$${product.price?.toStringAsFixed(2)}",
              style: AppTextStyle.titleMedium(
                context,
              ).copyWith(fontSize: isMobile ? 18 : 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 12),

            // SIZE & STOCK
            Row(
              children: [
                Chip(
                  label: Text(
                    "Size: ${product.variant ?? 'M'}",
                    style: AppTextStyle.titleMedium(context).copyWith(fontSize: isMobile ? 14 : 20),
                  ),
                  backgroundColor: secondaryColor,
                ),
                // const SizedBox(width: 12),
                // Chip(
                //   label: Text(
                //     product.inStock ?? false ? "In Stock" : "Out of Stock",
                //     style: TextStyle(color: product.inStock ?? false ? Colors.green : Colors.red),
                //   ),
                //   backgroundColor: Colors.grey[100],
                // ),
              ],
            ),

            // const SizedBox(height: 16),

            // DESCRIPTION
            // Text(
            //   "Description",
            //   style: TextStyle(fontSize: isMobile ? 16 : 20, fontWeight: FontWeight.bold),
            // ),
            // const SizedBox(height: 8),
            // Text(
            //   product.description ?? '',
            //   style: TextStyle(fontSize: isMobile ? 14 : 16, color: Colors.grey[700], height: 1.4),
            // ),
          ],
        ),
      ),
    );
  }
}
