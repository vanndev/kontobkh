import 'package:get/get.dart';
import 'package:kontob_flutter/app/routes/app_pages.dart';

class StartupController extends GetxController {
  void onInit() {
    super.onInit();
    _start();
  }

  Future<void> _start() async {
    await Future.delayed(Duration(seconds: 3));
    Get.offNamed(Routes.HOME);
  }
}
