import 'package:flutter/foundation.dart';
import 'package:get/get.dart';
import '../../../../core/models/product_model.dart';

class HomeController extends GetxController {
  final products = <ProductModel>[].obs;

  @override
  void onInit() {
    super.onInit();
    loadProducts();
  }

  void loadProducts() {
    final availableImages = [
      "assets/products/img_M_1.jpg",
      // "assets/products/img_M_2.jpg",
      // "assets/products/img_M_3.jpg",
      // "assets/products/img_M_4.jpg",
      "assets/products/img_M_5.jpg",
      "assets/products/img_M_6.jpg",
      "assets/products/img_M_7.jpg",
      "assets/products/img_M_8.jpg",
      "assets/products/img_M_9.jpg",
      "assets/products/img_M_10.jpg",
      "assets/products/img_M_11.jpg",
      "assets/products/img_M_12.jpg",
      "assets/products/img_M_13.jpg",
      "assets/products/img_M_14.jpg",
      "assets/products/img_L_15.jpg",
      "assets/products/img_M_16.jpg",
      "assets/products/img_M_17.jpg",
      "assets/products/img_L_18.jpg",
      "assets/products/img_M_19.jpg",
      "assets/products/img_M_20.jpg",
      "assets/products/img_L_21.jpg",
      "assets/products/img_M_22.jpg",
      "assets/products/img_M_23.jpg",
      "assets/products/img_L_24.jpg",
      "assets/products/img_M_25.jpg",
      "assets/products/img_M_26.jpg",
      "assets/products/img_M_27.jpg",
      "assets/products/img_M_28.jpg",
      "assets/products/img_M_29.jpg",
      "assets/products/img_L_30.jpg",
      "assets/products/img_L_31.jpg",
      "assets/products/img_M_32.jpg",
      "assets/products/img_L_33.jpg",
      "assets/products/img_M_34.jpg",
      "assets/products/img_M_35.jpg",
      "assets/products/img_M_36.jpg",
      "assets/products/img_M_37.jpg",
      "assets/products/img_M_38.jpg",
      "assets/products/img_M_39.jpg",
      "assets/products/img_M_40.jpg",
      "assets/products/img_M_41.jpg",
      "assets/products/img_M_42.jpg",
      "assets/products/img_L_43.jpg",
      "assets/products/img_L_44.jpg",
      "assets/products/img_M_45.jpg",
      "assets/products/img_M_46.jpg",
      "assets/products/img_M_47.jpg",
      "assets/products/img_M_48.jpg",
      "assets/products/img_L_49.jpg",
      "assets/products/img_M_50.jpg",
    ];

    final List<Map<String, dynamic>> mockData = [];

    for (int i = 0; i < availableImages.length; i++) {
      String image = availableImages[i];
      if (!kDebugMode) {
        image = "assets/${availableImages[i]}";
      }
      final isM = image.contains("_M_");
      final price = isM ? 4.0 : 5.0;
      final inStock = true;
      final isNew = i % 3 == 0;
      final hasDiscount = i % 4 == 0;
      final discount = 0;
      final originalPrice = 0;

      final id = 'p${(i + 1).toString().padLeft(3, '0')}';

      mockData.add({
        "id": id,
        "title": "Product $id",
        "titleKh": "ផលិតផល ដង្កៀប",
        "description": "This is the description for Product $id",
        "price": price,
        "originalPrice": originalPrice,
        "discount": discount,
        "category": "Category ${(i % 5) + 1}",
        "variant": isM ? "M" : "L",
        "images": [image],
        "inStock": inStock,
        "isNew": isNew,
      });
    }

    products.value = mockData.map((e) => ProductModel.fromJson(e)).toList();
  }
}
