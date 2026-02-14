import 'package:flutter/material.dart';

const String notoSansKhmer = 'NotoSansKhmer';

class AppTextStyle {
  AppTextStyle._();

  static bool _isKhmer(BuildContext context) {
    return Localizations.localeOf(context).languageCode == 'km';
  }

  static TextStyle _baseStyle(
    BuildContext context,
    TextStyle? style, {
    FontWeight? fontWeight,
    double? height,
    Color? color,
  }) {
    if (_isKhmer(context)) {
      return (style ?? const TextStyle()).copyWith(
        fontFamily: notoSansKhmer,
        fontWeight: fontWeight,
        height: height,
        color: color,
      );
    }

    return TextStyle();
  }

  // ===== HEADLINES =====
  static TextStyle headlineLarge(BuildContext context) =>
      _baseStyle(context, Theme.of(context).textTheme.headlineLarge, fontWeight: FontWeight.bold);

  static TextStyle headlineMedium(BuildContext context) =>
      _baseStyle(context, Theme.of(context).textTheme.headlineMedium, fontWeight: FontWeight.w600);

  // ===== TITLES =====
  static TextStyle titleLarge(BuildContext context) =>
      _baseStyle(context, Theme.of(context).textTheme.titleLarge, fontWeight: FontWeight.w600);

  static TextStyle titleMedium(BuildContext context) =>
      _baseStyle(context, Theme.of(context).textTheme.titleMedium, fontWeight: FontWeight.w500);

  // ===== BODY =====
  static TextStyle bodyLarge(BuildContext context) =>
      _baseStyle(context, Theme.of(context).textTheme.bodyLarge, height: 1.4);

  static TextStyle bodyMedium(BuildContext context) =>
      _baseStyle(context, Theme.of(context).textTheme.bodyMedium, height: 1.5);

  static TextStyle bodySmall(BuildContext context) => _baseStyle(
    context,
    Theme.of(context).textTheme.bodySmall,
    color: Theme.of(context).hintColor,
  );

  // ===== LABEL =====
  static TextStyle labelSmall(BuildContext context) =>
      _baseStyle(context, Theme.of(context).textTheme.labelSmall, fontWeight: FontWeight.w500);
}
