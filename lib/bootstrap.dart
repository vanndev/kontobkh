import 'dart:async';

import 'package:flutter/material.dart';
import 'package:url_strategy/url_strategy.dart';

Future<void> bootstrap(FutureOr<Widget> Function() builder) async {
  WidgetsFlutterBinding.ensureInitialized();
  setPathUrlStrategy();
  runApp(await builder());
}
