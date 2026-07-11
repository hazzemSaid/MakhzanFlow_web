# GitHub Design Evidence: hazzemSaid/stockflow-app

Source: https://github.com/hazzemSaid/stockflow-app
Read method: git-clone
Local clone method: git clone
Ref: default branch
Repository paths discovered: 336
Snapshot files written: 47

## Intake Status

- This-device intake was used through local git or GitHub CLI.

## README (README.md)

```md
# StockFlow

Arabic-first warehouse and supermarket distribution management mobile
application built with Flutter and Supabase.

The project follows the StockFlow constitution in
`.specify/memory/constitution.md`: feature-first clean architecture,
`flutter_bloc`, `go_router`, Arabic RTL mobile UX, Supabase/PostgreSQL with
RLS, reliable inventory/invoice/debt calculations, and XLSX reporting.

## Database Architecture

<img width="960" height="400" alt="Database Architecture" src="https://github.com/user-attachments/assets/094ba734-87a6-4a3d-bbcf-7304b80122ab" />

```

## Source Evidence Inventory

### Product docs and manifests

Use these to understand product purpose, dependency stack, scripts, and public naming.

- ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md -> `context/github/hazzemSaid-stockflow-app/files/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md` (source)

### Brand assets and icons

Preserve source build/runtime paths: files under `build/` should be copied back into root `build/` with their original filenames, while non-build logos, avatars, or wordmarks can be copied into `assets/`. Reflect the preserved files in `preview/brand-assets.html`.

- assets/images/logo.png -> `context/github/hazzemSaid-stockflow-app/files/assets/images/logo.png` (binary asset)
- assets/images/logo1.png -> `context/github/hazzemSaid-stockflow-app/files/assets/images/logo1.png` (binary asset)

### Theme, tokens, and styling

Extract concrete color, typography, spacing, radius, shadow, and theme-variable values from these files.

- lib/config/theme/theme.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/config/theme/theme.dart` (source)
- lib/config/app_constraints.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/config/app_constraints.dart` (source)
- lib/config/routes/router.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/config/routes/router.dart` (source)
- lib/config/theme/stockflow_theme.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/config/theme/stockflow_theme.dart` (source)

### App shell and navigation

Use these to recreate the product frame, navigation density, sidebars, window chrome, and layout rhythm.

- android/app/build.gradle.kts -> `context/github/hazzemSaid-stockflow-app/files/android/app/build.gradle.kts` (source)
- android/app/src/main/kotlin/com/example/stockflow/MainActivity.kt -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/kotlin/com/example/stockflow/MainActivity.kt` (source)
- lib/features/shell/presentation/cubit/app_shell_cubit.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/cubit/app_shell_cubit.dart` (source)
- lib/features/shell/presentation/cubit/app_shell_state.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/cubit/app_shell_state.dart` (source)
- lib/features/shell/presentation/models/navigation_destination.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/models/navigation_destination.dart` (source)
- lib/features/shell/presentation/pages/app_shell.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/pages/app_shell.dart` (source)
- lib/features/shell/presentation/widgets/stockflow_bottom_nav.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/widgets/stockflow_bottom_nav.dart` (source)
- android/app/src/debug/AndroidManifest.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/debug/AndroidManifest.xml` (source)
- android/app/src/main/AndroidManifest.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/AndroidManifest.xml` (source)
- android/app/src/main/res/drawable-v21/launch_background.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/res/drawable-v21/launch_background.xml` (source)
- android/app/src/main/res/drawable/launch_background.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/res/drawable/launch_background.xml` (source)
- android/app/src/main/res/values-night/styles.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/res/values-night/styles.xml` (source)
- android/app/src/main/res/values/styles.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/res/values/styles.xml` (source)
- android/app/src/profile/AndroidManifest.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/profile/AndroidManifest.xml` (source)

### Other design evidence

Inspect these only after the primary design evidence above has been used.

- integration_test/settings/settings_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/settings/settings_test.dart` (source)
- lib/features/settings/presentation/pages/settings_screen.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/settings/presentation/pages/settings_screen.dart` (source)
- android/build.gradle.kts -> `context/github/hazzemSaid-stockflow-app/files/android/build.gradle.kts` (source)
- android/settings.gradle.kts -> `context/github/hazzemSaid-stockflow-app/files/android/settings.gradle.kts` (source)
- integration_test/app_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/app_test.dart` (source)
- integration_test/auth/auth_flow_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/auth/auth_flow_test.dart` (source)
- integration_test/auth/create_company_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/auth/create_company_test.dart` (source)
- integration_test/customers/customers_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/customers/customers_test.dart` (source)
- integration_test/dashboard/dashboard_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/dashboard/dashboard_test.dart` (source)
- integration_test/invoices/invoices_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/invoices/invoices_test.dart` (source)
- integration_test/products/products_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/products/products_test.dart` (source)
- integration_test/shared/test_setup.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/shared/test_setup.dart` (source)
- ios/Runner/AppDelegate.swift -> `context/github/hazzemSaid-stockflow-app/files/ios/Runner/AppDelegate.swift` (source)
- ios/Runner/Runner-Bridging-Header.h -> `context/github/hazzemSaid-stockflow-app/files/ios/Runner/Runner-Bridging-Header.h` (source)
- ios/RunnerTests/RunnerTests.swift -> `context/github/hazzemSaid-stockflow-app/files/ios/RunnerTests/RunnerTests.swift` (source)
- lib/core/company/company_aware_state.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/company/company_aware_state.dart` (source)
- lib/core/company/company_cubit.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/company/company_cubit.dart` (source)
- lib/core/company/company_provider.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/company/company_provider.dart` (source)
- lib/core/company/company_state.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/company/company_state.dart` (source)
- lib/core/constants/app_colors.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/app_colors.dart` (source)
- lib/core/constants/app_routes.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/app_routes.dart` (source)
- lib/core/constants/app_sizes.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/app_sizes.dart` (source)
- lib/core/constants/app_strings.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/app_strings.dart` (source)
- lib/core/constants/permission_labels.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/permission_labels.dart` (source)
- lib/core/di/service_locator.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/di/service_locator.dart` (source)
- lib/core/env.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/env.dart` (source)


## Files Inspected

- lib/config/theme/theme.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/config/theme/theme.dart` (2656 bytes, git-clone)
- assets/images/logo.png -> `context/github/hazzemSaid-stockflow-app/files/assets/images/logo.png` (1412829 bytes, git-clone, binary asset)
- assets/images/logo1.png -> `context/github/hazzemSaid-stockflow-app/files/assets/images/logo1.png` (1439444 bytes, git-clone, binary asset)
- ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md -> `context/github/hazzemSaid-stockflow-app/files/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md` (340 bytes, git-clone)
- lib/config/app_constraints.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/config/app_constraints.dart` (187 bytes, git-clone)
- lib/config/routes/router.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/config/routes/router.dart` (15239 bytes, git-clone)
- lib/config/theme/stockflow_theme.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/config/theme/stockflow_theme.dart` (7502 bytes, git-clone)
- android/app/build.gradle.kts -> `context/github/hazzemSaid-stockflow-app/files/android/app/build.gradle.kts` (1434 bytes, git-clone)
- android/app/src/main/kotlin/com/example/stockflow/MainActivity.kt -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/kotlin/com/example/stockflow/MainActivity.kt` (128 bytes, git-clone)
- integration_test/settings/settings_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/settings/settings_test.dart` (1837 bytes, git-clone)
- lib/features/settings/presentation/pages/settings_screen.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/settings/presentation/pages/settings_screen.dart` (2905 bytes, git-clone)
- lib/features/shell/presentation/cubit/app_shell_cubit.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/cubit/app_shell_cubit.dart` (671 bytes, git-clone)
- lib/features/shell/presentation/cubit/app_shell_state.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/cubit/app_shell_state.dart` (494 bytes, git-clone)
- lib/features/shell/presentation/models/navigation_destination.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/models/navigation_destination.dart` (471 bytes, git-clone)
- lib/features/shell/presentation/pages/app_shell.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/pages/app_shell.dart` (3003 bytes, git-clone)
- lib/features/shell/presentation/widgets/stockflow_bottom_nav.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/features/shell/presentation/widgets/stockflow_bottom_nav.dart` (6348 bytes, git-clone)
- android/app/src/debug/AndroidManifest.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/debug/AndroidManifest.xml` (385 bytes, git-clone)
- android/app/src/main/AndroidManifest.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/AndroidManifest.xml` (2307 bytes, git-clone)
- android/app/src/main/res/drawable-v21/launch_background.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/res/drawable-v21/launch_background.xml` (450 bytes, git-clone)
- android/app/src/main/res/drawable/launch_background.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/res/drawable/launch_background.xml` (446 bytes, git-clone)
- android/app/src/main/res/values-night/styles.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/res/values-night/styles.xml` (1013 bytes, git-clone)
- android/app/src/main/res/values/styles.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/main/res/values/styles.xml` (1014 bytes, git-clone)
- android/app/src/profile/AndroidManifest.xml -> `context/github/hazzemSaid-stockflow-app/files/android/app/src/profile/AndroidManifest.xml` (385 bytes, git-clone)
- android/build.gradle.kts -> `context/github/hazzemSaid-stockflow-app/files/android/build.gradle.kts` (561 bytes, git-clone)
- android/settings.gradle.kts -> `context/github/hazzemSaid-stockflow-app/files/android/settings.gradle.kts` (798 bytes, git-clone)
- integration_test/app_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/app_test.dart` (383 bytes, git-clone)
- integration_test/auth/auth_flow_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/auth/auth_flow_test.dart` (7462 bytes, git-clone)
- integration_test/auth/create_company_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/auth/create_company_test.dart` (5410 bytes, git-clone)
- integration_test/customers/customers_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/customers/customers_test.dart` (5658 bytes, git-clone)
- integration_test/dashboard/dashboard_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/dashboard/dashboard_test.dart` (2023 bytes, git-clone)
- integration_test/invoices/invoices_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/invoices/invoices_test.dart` (4905 bytes, git-clone)
- integration_test/products/products_test.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/products/products_test.dart` (4854 bytes, git-clone)
- integration_test/shared/test_setup.dart -> `context/github/hazzemSaid-stockflow-app/files/integration_test/shared/test_setup.dart` (3872 bytes, git-clone)
- ios/Runner/AppDelegate.swift -> `context/github/hazzemSaid-stockflow-app/files/ios/Runner/AppDelegate.swift` (404 bytes, git-clone)
- ios/Runner/Runner-Bridging-Header.h -> `context/github/hazzemSaid-stockflow-app/files/ios/Runner/Runner-Bridging-Header.h` (39 bytes, git-clone)
- ios/RunnerTests/RunnerTests.swift -> `context/github/hazzemSaid-stockflow-app/files/ios/RunnerTests/RunnerTests.swift` (297 bytes, git-clone)
- lib/core/company/company_aware_state.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/company/company_aware_state.dart` (1043 bytes, git-clone)
- lib/core/company/company_cubit.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/company/company_cubit.dart` (4161 bytes, git-clone)
- lib/core/company/company_provider.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/company/company_provider.dart` (297 bytes, git-clone)
- lib/core/company/company_state.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/company/company_state.dart` (1349 bytes, git-clone)
- lib/core/constants/app_colors.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/app_colors.dart` (2456 bytes, git-clone)
- lib/core/constants/app_routes.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/app_routes.dart` (2038 bytes, git-clone)
- lib/core/constants/app_sizes.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/app_sizes.dart` (2791 bytes, git-clone)
- lib/core/constants/app_strings.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/app_strings.dart` (29382 bytes, git-clone)
- lib/core/constants/permission_labels.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/constants/permission_labels.dart` (2053 bytes, git-clone)
- lib/core/di/service_locator.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/di/service_locator.dart` (17760 bytes, git-clone)
- lib/core/env.dart -> `context/github/hazzemSaid-stockflow-app/files/lib/core/env.dart` (792 bytes, git-clone)

## Binary Assets Preserved

- assets/images/logo.png -> `context/github/hazzemSaid-stockflow-app/files/assets/images/logo.png`
- assets/images/logo1.png -> `context/github/hazzemSaid-stockflow-app/files/assets/images/logo1.png`

## Design-Relevant Excerpts

### lib/config/theme/theme.dart

```
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/constants/app_colors.dart';

class AppTheme {
  static const Color primaryColor = AppColors.primary;
  static const Color secondaryColor = AppColors.secondary;
  static const Color accentColor = AppColors.accent;
  static const Color backgroundColor = AppColors.appBackground;
  static const Color surfaceColor = AppColors.surface;
  static const Color textPrimaryColor = AppColors.textPrimary;
  static const Color textSecondaryColor = AppColors.textSecondary;
  static const Color inputBackground = AppColors.inputBackground;
  static const Color inputBorder = AppColors.inputBorder;

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      primaryColor: primaryColor,
      colorScheme: ColorScheme.fromSeed(
        seedColor: primaryColor,
        primary: primaryColor,
        secondary: secondaryColor,
        surface: surfaceColor,
      ),
      fontFamily: GoogleFonts.cairo().fontFamily,
      scaffoldBackgroundColor: surfaceColor,
      appBarTheme: const AppBarTheme(
        backgroundColor: primaryColor,
        foregroundColor: AppColors.white,
        centerTitle: true,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: primaryColor,
          foregroundColor: AppColors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(14),
          ),
          textStyle: GoogleFonts.cairo(
            fontWeight: FontWeight.w500,
            fontSize: 14,
          ),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: inputBackground,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: const BorderSide(color: inputBorder, width: 0.83),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: const BorderSide(color: inputBorder, width: 0.83),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: const BorderSide(color: primaryColor, width: 1),
        ),
        hintStyle: GoogleFonts.cairo(

...
```

### ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md

```
# Launch Screen Assets

You can customize the launch screen with your own desired assets by replacing the image files in this directory.

You can also do it by opening your Flutter project's Xcode project with `open ios/Runner.xcworkspace`, selecting `Runner/Assets.xcassets` in the Project Navigator and dropping in the desired images.
```

### lib/config/app_constraints.dart

```
import 'package:flutter/widgets.dart';

class StockFlowConstraints {
  static const double minDesignWidthDp = 360;
  static const EdgeInsets screenPadding = EdgeInsets.all(16);
}


```

### lib/config/routes/router.dart

```
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:stockflow/features/companies/presentation/cubit/company_settings_cubit.dart';
import '../../core/constants/app_routes.dart';
import '../../core/di/service_locator.dart';
import '../../core/company/company_cubit.dart';
import '../../core/company/company_state.dart';
import '../../features/auth/presentation/cubit/auth_cubit.dart';
import '../../features/auth/presentation/cubit/auth_state.dart';
import '../../features/auth/presentation/pages/splash_screen.dart';
import '../../features/auth/presentation/pages/login_screen.dart';
import '../../features/auth/presentation/pages/register_screen.dart';
import '../../features/auth/presentation/pages/company_selection_screen.dart';
import '../../features/auth/presentation/pages/create_company_screen.dart';
import '../../features/auth/presentation/pages/welcome_screen.dart';
import '../../features/auth/presentation/pages/join_business_screen.dart';
import '../../features/auth/presentation/pages/pending_approval_screen.dart';
import '../../features/companies/presentation/cubit/join_company_cubit.dart';
import '../../features/dashboard/presentation/pages/dashboard_screen.dart';
import '../../features/products/presentation/pages/products_screen.dart';
import '../../features/products/presentation/pages/add_edit_product_screen.dart';
import '../../features/products/presentation/pages/product_details_screen.dart';
import '../../features/customers/presentation/pages/customers_screen.dart';
import '../../features/customers/presentation/pages/add_edit_customer_screen.dart';
import '../../features/customers/presentation/pages/customer_details_screen.dart';
import '../../features/customers/presentation/pages/customer_invoices_screen.dart';
import '../../features/invoice/presentation/cubit/invoices/invoices_cubit.dart';
import '../../features/invoice/presentation/pages/invoices_screen.dart';
import '../../features/invoice/presentation/pages/create_invoice_screen.dart';
import '../../features/invoice/presentation/pages/add_payment_screen.dart';
import '../../features/invoice/presentation/pages/invoice_details_screen.dart';
import '../../features/companies/presentation/pages/company_settings_page.dart';
import '../../features/companies/presentation/pages/m
...
```

### lib/config/theme/stockflow_theme.dart

```
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class StockFlowTheme {
  static const Color darkGreen = Color(0xFF0B3A24);
  static const Color mainGreen = Color(0xFF0F5132);
  static const Color orange = Color(0xFFF97316);

  static const Color softGreen = Color(0xFFE8F1EC);
  static const Color lightOrange = Color(0xFFFFF1E6);
  static const Color softRed = Color(0xFFFEE2E2);
  static const Color grayBorder = Color(0xFFE5E5E5);

  static const Color primaryText = darkGreen;
  static const Color secondaryText = Color(0xFF737373);
  static const Color mutedText = Color(0xFF64748B);

  static ThemeData light() {
    final base = ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
    );

    final colorScheme = ColorScheme.fromSeed(
      seedColor: mainGreen,
      primary: mainGreen,
      secondary: orange,
      surface: Colors.white,
      error: const Color(0xFFB91C1C),
      brightness: Brightness.light,
    );

    final textTheme = GoogleFonts.cairoTextTheme(base.textTheme).copyWith(
      titleLarge: GoogleFonts.cairo(
        fontSize: 24,
        fontWeight: FontWeight.w500,
        height: 1.3,
        color: primaryText,
      ),
      titleMedium: GoogleFonts.cairo(
        fontSize: 18,
        fontWeight: FontWeight.w500,
        height: 1.35,
        color: primaryText,
      ),
      bodyMedium: GoogleFonts.cairo(
        fontSize: 14,
        fontWeight: FontWeight.w400,
        height: 1.6,
        color: primaryText,
      ),
      bodySmall: GoogleFonts.cairo(
        fontSize: 12,
        fontWeight: FontWeight.w400,
        height: 1.55,
        color: secondaryText,
      ),
      labelSmall: GoogleFonts.cairo(
        fontSize: 11,
        fontWeight: FontWeight.w400,
        height: 1.4,
        color: secondaryText,
      ),
    );

    const rCard = 24.0;
    const rControl = 16.0;

    return base.copyWith(
      colorScheme: colorScheme,
      scaffoldBackgroundColor: const Color(0xFFF7F8F7),
      textTheme: textTheme,
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.white,
        foregroundColor: primaryText,
        elevation: 0,
        centerTitle: false,
        titleTextStyle: textTheme.titleLarge,
      ),
      cardTheme: CardThemeData(
        color: Colors.whit
...
```

### android/app/build.gradle.kts

```
plugins {
    id("com.android.application")
    id("kotlin-android")
    // The Flutter Gradle Plugin must be applied after the Android and Kotlin Gradle plugins.
    id("dev.flutter.flutter-gradle-plugin")
}

android {
    namespace = "com.example.stockflow"
    compileSdk = flutter.compileSdkVersion
    ndkVersion = flutter.ndkVersion

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_17.toString()
    }

    defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId = "com.example.stockflow"
        // You can update the following values to match your application needs.
        // For more information, see: https://flutter.dev/to/review-gradle-config.
        minSdk = flutter.minSdkVersion
        targetSdk = flutter.targetSdkVersion
        versionCode = flutter.versionCode
        versionName = flutter.versionName
    }

    buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so `flutter run --release` works.
            signingConfig = signingConfigs.getByName("debug")
        }
    }
}

flutter {
    source = "../.."
}

```

### android/app/src/main/kotlin/com/example/stockflow/MainActivity.kt

```
package com.example.stockflow

import io.flutter.embedding.android.FlutterActivity

class MainActivity : FlutterActivity()

```

### integration_test/settings/settings_test.dart

```
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:stockflow/core/constants/app_strings.dart';
import 'package:stockflow/features/settings/presentation/pages/settings_screen.dart';
import '../shared/test_setup.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  group('Settings Screen', () {
    testWidgets('renders settings screen with all tiles', (tester) async {
      await tester.pumpWidget(TestSetup.wrapWithProviders(
        child: const SettingsScreen(),
        authCubit: TestSetup.createMockAuthCubit(),
        companyCubit: TestSetup.createMockCompanyCubit(selected: true),
      ));
      await tester.pumpAndSettle();

      expect(find.text(AppStrings.companySettings), findsOneWidget);
      expect(find.text(AppStrings.teamMembers), findsOneWidget);
      expect(find.text(AppStrings.signOut), findsOneWidget);
    });

    testWidgets('renders company switcher', (tester) async {
      await tester.pumpWidget(TestSetup.wrapWithProviders(
        child: const SettingsScreen(),
        authCubit: TestSetup.createMockAuthCubit(),
        companyCubit: TestSetup.createMockCompanyCubit(selected: true),
      ));
      await tester.pumpAndSettle();

      expect(find.text(AppStrings.switchCompany), findsOneWidget);
    });

    testWidgets('sign out button is tappable', (tester) async {
      await tester.pumpWidget(TestSetup.wrapWithProviders(
        child: const SettingsScreen(),
        authCubit: TestSetup.createMockAuthCubit(),
        companyCubit: TestSetup.createMockCompanyCubit(selected: true),
      ));
      await tester.pumpAndSettle();

      await tester.tap(find.text(AppStrings.signOut));
      await tester.pumpAndSettle();
    });
  });
}

```

### lib/features/settings/presentation/pages/settings_screen.dart

```
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../core/company/company_cubit.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/constants/app_strings.dart';
import '../../../../core/constants/app_sizes.dart';
import '../../../../core/constants/app_routes.dart';
import '../../../../core/di/service_locator.dart';
import '../../../../core/permissions/permission_service.dart';
import '../../../../core/widgets/company_switcher.dart';
import '../../../auth/presentation/cubit/auth_cubit.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final authCubit = context.read<AuthCubit>();

    return SafeArea(
      child: ListView(
        padding: EdgeInsets.all(AppSizes.spacingMedium),
        children: [
          const CompanySwitcher(),
          SizedBox(height: AppSizes.spacingMedium),
          _SettingsCard(
            children: [
              _SettingsTile(
                icon: Icons.business,
                label: AppStrings.companySettings,
                onTap: () => context.go('${AppRoutes.settings}/company'),
              ),
              Divider(height: 1, indent: AppSizes.spacingXLarge * 2),
              _SettingsTile(
                icon: Icons.people,
                label: AppStrings.teamMembers,
                onTap: () => context.go('${AppRoutes.settings}/members'),
              ),
            ],
          ),
          SizedBox(height: AppSizes.spacingLarge),
          Card(
            child: ListTile(
              leading: Icon(Icons.logout, color: AppColors.error),
              title: Text(AppStrings.signOut),
              onTap: () {
                context.read<CompanyCubit>().clearCompany();
                sl<PermissionService>().clear();
                authCubit.signOut();
              },
            ),
          ),
        ],
      ),
    );
  }
}

class _SettingsCard extends StatelessWidget {
  final List<Widget> children;

  const _SettingsCard({required this.children});

  @override
  Widget build(BuildContext context) {
    return Card(child: Column(children: children));
  }
}

...
```

### lib/features/shell/presentation/cubit/app_shell_cubit.dart

```
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../core/constants/app_routes.dart';
import 'app_shell_state.dart';

class AppShellCubit extends Cubit<AppShellState> {
  AppShellCubit() : super(const AppShellState());

  static const List<String> routeOrder = AppRoutes.shellRoutes;

  int indexForRoute(String route) {
    final idx = routeOrder.indexOf(route);
    return idx >= 0 ? idx : 0;
  }

  void syncRoute(String route, int selectedIndex) {
    if (route == state.currentRoute && selectedIndex == state.selectedIndex) {
      return;
    }
    emit(state.copyWith(currentRoute: route, selectedIndex: selectedIndex));
  }
}

```

### lib/features/shell/presentation/cubit/app_shell_state.dart

```
import '../../../../core/constants/app_routes.dart';

class AppShellState {
  final String currentRoute;
  final int selectedIndex;

  const AppShellState({
    this.currentRoute = AppRoutes.dashboard,
    this.selectedIndex = 0,
  });

  AppShellState copyWith({
    String? currentRoute,
    int? selectedIndex,
  }) {
    return AppShellState(
      currentRoute: currentRoute ?? this.currentRoute,
      selectedIndex: selectedIndex ?? this.selectedIndex,
    );
  }
}

```

### lib/features/shell/presentation/models/navigation_destination.dart

```
import 'package:flutter/material.dart';

class NavigationDestinationData {
  final String route;
  final String labelAr;
  final String semanticLabelAr;
  final IconData icon;
  final bool isCenterAction;
  final int sortOrderRtl;

  const NavigationDestinationData({
    required this.route,
    required this.labelAr,
    required this.semanticLabelAr,
    required this.icon,
    this.isCenterAction = false,
    required this.sortOrderRtl,
  });
}

```


## Next Design-System Work

- Use these source paths and snapshots as evidence before writing `DESIGN.md`.
- Convert the inventory above into a Claude Design-style package: `README.md`, `SKILL.md`, `colors_and_type.css`, `preview/colors-*`, `preview/typography-specimens.html`, `preview/spacing-*`, `preview/components-*`, `preview/brand-assets.html`, `ui_kits/app/`, and preserved `assets/`, `build/`, or `fonts/` when evidence exists.
- `ui_kits/app/index.html` must be a browser-reviewable component entry: load `../../colors_and_type.css`, load or import at least three files from `ui_kits/app/components/`, and mount the composed UI through ReactDOM/Babel or compiled browser-ready JavaScript. Do not duplicate a static HTML mock when modular component files exist.
- `ui_kits/app/components/App.jsx` (or equivalent app shell) must compose source-backed role components such as Sidebar, AssistantsList, ChatArea, InputBar, and MessageBubble, not merely list their filenames.
- Claude-style UI-kit entry skeleton for direct JSX kits:
  - `<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>`
  - `<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>`
  - `<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>`
  - `<link rel="stylesheet" href="../../colors_and_type.css">`
  - `<div id="root"></div>`
  - Load role components from `components/*.jsx` with `<script type="text/babel" src="components/ComponentName.jsx"></script>`.
  - Mount with `const { App } = window; const root = ReactDOM.createRoot(document.getElementById("root")); root.render(<App />);`.
- Preserve at least three high-signal source examples outside `context/` under `source_examples/` when reusable component snapshots exist, so future agents can compare generated components against original source structure.
- When a captured asset path begins with `build/`, copy the snapshot back into a root `build/` path with its original filename, such as `context/.../files/build/icon.png` -> `build/icon.png`. Do not satisfy build/runtime icon evidence by only renaming those files into `assets/`.
- Make `preview/brand-assets.html` visibly load preserved asset files from `assets/` or `build/`; do not redraw captured logos/icons as inline placeholders.
- Extract concrete colors, typography, spacing, radius, component behavior, assets, and product tone only when supported by inspected files.
- If evidence is missing or ambiguous, mark that uncertainty instead of inventing tokens.
