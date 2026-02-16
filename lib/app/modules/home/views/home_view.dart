import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:kontob_flutter/app/modules/home/controllers/home_controller.dart';
import 'package:kontob_flutter/app/routes/app_pages.dart';
import 'package:kontob_flutter/utils/app_text_style.dart';
import 'package:url_launcher/url_launcher_string.dart';

import '../../../../core/models/product_model.dart';
import '../../../../utils/colors.dart';
import '../../../../utils/screen_size.dart';
import '../../widgets/logo_widget.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    final isMobile = ScreenSize.isMobile(context);

    return Scaffold(
      body: NestedScrollView(
        headerSliverBuilder: (context, innerBoxIsScrolled) {
          return [
            SliverAppBar(
              backgroundColor: Colors.white,
              surfaceTintColor: Colors.transparent,
              elevation: innerBoxIsScrolled ? 2 : 0,
              pinned: true,
              floating: false,
              automaticallyImplyLeading: false,
              titleSpacing: 16,
              title: Row(
                children: [
                  LogoWidget(height: isMobile ? 40 : 50, width: isMobile ? 40 : 50),
                  const SizedBox(width: 16),
                  Text(
                    "កូនតូប - KONTOB",
                    style: isMobile
                        ? AppTextStyle.titleMedium(context)
                        : AppTextStyle.titleLarge(context),
                  ),
                ],
              ),
              actions: [
                IconButton(
                  onPressed: () {
                    // Open Telegram link
                    launchUrlString("https://t.me/chhouenlinna");
                  },
                  icon: Image.asset("assets/images/telegram.png", width: 24, height: 24),
                  tooltip: "Telegram",
                ),
                IconButton(
                  onPressed: () {
                    // Open TikTok profile
                    launchUrlString("https://www.tiktok.com/@kontobkh");
                  },
                  icon: Image.asset("assets/images/tiktok.png", width: 24, height: 24),
                  tooltip: "TikTok",
                ),
                IconButton(
                  onPressed: () {
                    // Open Facebook page
                    launchUrlString("https://web.facebook.com/profile.php?id=100083314422130");
                  },
                  icon: Image.asset("assets/images/facebook.png", width: 24, height: 24),
                  tooltip: "Facebook",
                ),
                const SizedBox(width: 8), // padding at the end
              ],
            ),
          ];
        },

        body: CustomScrollView(
          slivers: [
            // Your product grid/list
            Obx(() {
              final isMobile = ScreenSize.isMobile(context);
              final isTablet = ScreenSize.isTablet(context);
              final isDesktop = ScreenSize.isDesktop(context);

              int crossAxisCount = 2;
              double childAspectRatio = 0.72;

              if (isTablet) {
                crossAxisCount = 3;
                childAspectRatio = 0.75;
              }

              if (isDesktop) {
                crossAxisCount = 5;
                childAspectRatio = 0.8;
              }

              return SliverPadding(
                padding: EdgeInsets.symmetric(horizontal: isDesktop ? 60 : 20, vertical: 20),
                sliver: SliverGrid(
                  delegate: SliverChildBuilderDelegate((context, index) {
                    final product = controller.products[index];
                    return _productCard(context, product);
                  }, childCount: controller.products.length),
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: crossAxisCount,
                    mainAxisSpacing: 20,
                    crossAxisSpacing: 20,
                    childAspectRatio: childAspectRatio,
                  ),
                ),
              );
            }),

            SliverToBoxAdapter(
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 32),
                color: secondaryColor,
                child: ScreenSize.isMobile(context)
                    ? _buildMobileFooter(context)
                    : _buildDesktopFooter(context),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _productCard(BuildContext context, ProductModel product) {
    return InkWell(
      onTap: () {
        Get.toNamed(Routes.PRODUCT_DETAIL, arguments: {"data": product});
      },
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 10,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // IMAGE SECTION
            Expanded(
              child: Stack(
                children: [
                   ClipRRect(
                    borderRadius: BorderRadius.circular(16),
                    child: CachedNetworkImage(
                      imageUrl: product.images!.first,
                      width: double.infinity,
                      fit: BoxFit.cover,
                      placeholder: (_, __) => const Center(child: CircularProgressIndicator()),
                      errorWidget: (_, __, ___) =>
                      const Center(child: Icon(Icons.inventory_2_outlined, size: 40)),
                    ),
                  ),

                  // Discount Badge
                  if ((product.discount ?? 0) > 0)
                    Positioned(
                      top: 8,
                      left: 8,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.red,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          "-${product.discount}%",
                          style: AppTextStyle.bodyMedium(context),
                        ),
                      ),
                    ),

                  // Out of stock overlay
                  if (product.inStock == false)
                    Container(
                      decoration: BoxDecoration(
                        color: Colors.black.withOpacity(0.5),
                        borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
                      ),
                      child: const Center(
                        child: Text(
                          "Out of Stock",
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                ],
              ),
            ),

            // INFO SECTION
            Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    product.titleKh ?? product.title ?? '',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: AppTextStyle.titleLarge(context),
                  ),
                  const SizedBox(height: 6),
                  Text("Size : ${product.variant}", style: AppTextStyle.titleMedium(context)),
                  const SizedBox(height: 6),

                  Text(
                    "\$${product.price?.toStringAsFixed(2)}",
                    style: AppTextStyle.titleLarge(
                      context,
                    ).copyWith(fontWeight: FontWeight.bold, fontSize: 18, color: primaryColor),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildMobileFooter(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text("កូនតូប - KONTOB", style: AppTextStyle.titleLarge(context)),
        const SizedBox(height: 8),
        const Text("ដែលអ្នកអាចទុកចិត្តបាន សម្រាប់ទំនិញគុណភាពល្អ តម្លៃសមរម្យ"),
        const SizedBox(height: 16),

        _footerItem(Icons.phone, "Call: 096 247 0636"),
        _footerItem(Icons.telegram, "Telegram: @hhouenlinna"),
        _footerItem(Icons.facebook, "Facebook: កូនតូប-KONTOB"),
        _footerItem(Icons.music_note, "TikTok: @kontobkh"),

        const SizedBox(height: 24),
        const Divider(),
        const SizedBox(height: 8),
        const Text(
          "© KONTOB. All rights reserved.",
          style: TextStyle(fontSize: 12, color: Colors.grey),
        ),
      ],
    );
  }

  Widget _buildDesktopFooter(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        // About
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text("កូនតូប - KONTOB", style: AppTextStyle.titleLarge(context)),
              const SizedBox(height: 8),
              const Text("ដែលអ្នកអាចទុកចិត្តបាន សម្រាប់ទំនិញគុណភាពល្អ តម្លៃសមរម្យ"),
            ],
          ),
        ),

        const SizedBox(width: 24),

        // Contact
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Text("Contact"),
              SizedBox(height: 8),
              Text("Phone: 096 247 0636"),
              Text("Telegram: @hhouenlinna"),
              Text("Facebook: កូនតូប-KONTOB"),
              Text("TikTok: @kontobkh"),
            ],
          ),
        ),
      ],
    );
  }

  Widget _footerItem(IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6),
      child: Row(
        children: [
          Icon(icon, size: 18, color: Colors.black54),
          const SizedBox(width: 8),
          Text(text),
        ],
      ),
    );
  }
}
