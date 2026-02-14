import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:kontob_flutter/app/modules/app_index/app_controller.dart';
import 'package:kontob_flutter/app/modules/not_found/views/not_found_view.dart';
import 'package:kontob_flutter/app/routes/app_pages.dart';
import 'package:kontob_flutter/utils/theme.dart';

class AppIndex extends StatelessWidget {
  const AppIndex({super.key});

  @override
  Widget build(BuildContext context) {
    Get.put<AppController>(AppController());
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'កូនតូប Kontob',
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
      unknownRoute: GetPage(name: '/not-found', page: () => const NotFoundView()),
      theme: AppTheme.lightTheme,
      themeMode: ThemeMode.system,
    );
  }
}
