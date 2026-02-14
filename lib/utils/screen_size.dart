import 'package:flutter/material.dart';

class ScreenSize {
  ScreenSize._();

  static double width(BuildContext context) => MediaQuery.of(context).size.width;

  static double height(BuildContext context) => MediaQuery.of(context).size.height;

  // Breakpoints
  static bool isMobile(BuildContext context) => width(context) < 600;

  static bool isTablet(BuildContext context) => width(context) >= 600 && width(context) < 1024;

  static bool isDesktop(BuildContext context) => width(context) >= 1024;
}
