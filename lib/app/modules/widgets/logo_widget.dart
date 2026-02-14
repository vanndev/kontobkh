import 'package:flutter/material.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:get/get_navigation/src/extension_navigation.dart';

import '../../../utils/colors.dart';

class LogoWidget extends StatelessWidget {
  final double? height;
  final double? width;

  const LogoWidget({super.key, this.width, this.height});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: (height ?? Get.height),
      width: (width ?? Get.width),
      decoration: BoxDecoration(
        border: Border.all(color: primaryColor),
        shape: BoxShape.circle,
        image: DecorationImage(image: AssetImage('assets/images/logo.jpg'), fit: BoxFit.contain),
      ),
    );
  }
}
