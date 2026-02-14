import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:kontob_flutter/app/routes/app_pages.dart';
import 'package:kontob_flutter/utils/colors.dart';

class NotFoundView extends StatelessWidget {
  const NotFoundView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Page not found',
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(color: primaryColor),
            ),
            const SizedBox(height: 24),
            OutlinedButton.icon(
              onPressed: () => Get.offAllNamed(Routes.HOME),
              icon: const Icon(Icons.home),
              label: const Text('Back to Shop'),
            ),
          ],
        ),
      ),
    );
  }
}
