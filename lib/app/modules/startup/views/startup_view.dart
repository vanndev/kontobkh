import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:kontob_flutter/app/modules/widgets/logo_widget.dart';
import 'package:kontob_flutter/utils/screen_size.dart';

import '../controllers/startup_controller.dart';

class StartupView extends GetView<StartupController> {
  @override
  final controller = Get.put(StartupController());

  StartupView({super.key});

  @override
  Widget build(BuildContext context) {
    final dHeight = ScreenSize.isMobile(context) ? 0.3 : 0.2;
    final dWidth = ScreenSize.isMobile(context) ? 0.3 : 0.2;

    return Scaffold(
      body: SafeArea(
        child: SizedBox(
          height: Get.height,
          width: Get.width,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              LogoWidget(height: Get.height * dHeight, width: Get.width * dWidth),
              SizedBox(height: 16),
              CircularProgressIndicator.adaptive(),
            ],
          ),
        ),
      ),
    );
  }
}
