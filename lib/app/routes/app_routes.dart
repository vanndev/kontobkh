part of 'app_pages.dart';

abstract class Routes {
  Routes._();
  static const HOME = _Paths.HOME;
  static const PRODUCT_DETAIL = _Paths.PRODUCT_DETAIL;
  static const NOT_FOUND = _Paths.NOT_FOUND;
  static const STARTUP = _Paths.STARTUP;
}

abstract class _Paths {
  _Paths._();
  static const HOME = '/';
  static const PRODUCT_DETAIL = '/product/:id';
  static const NOT_FOUND = '/not-found';
  static const STARTUP = '/startup';
}
