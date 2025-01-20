# EAS DashBoard

![EAS](dashboard.png)

## Installation Guide

### Getting Started

1. **Create an EAS Expo Account**

   - Visit the [Expo EAS](https://expo.dev/eas) website and sign up for an account.

2. **Install the EAS CLI**
   - Run the following command in your terminal to install the EAS CLI globally:
     ```bash
     npm install -g eas-cli
     ```

### Project Setup

3. **Login to EAS**

   - Authenticate your account by running:
     ```bash
     eas login
     ```
   - Follow the prompts to log in using your Expo account credentials.

4. **Initialize EAS in Your Project**
   - Navigate to your project directory and run:
     ```bash
     eas init
     ```
   - This command sets up the required configuration files for EAS in your project.

### Building Your Project and Deploy To EAS

5. **Create a Build**

   - Run the following command to create a build:
     ```bash
     eas build
     ```
   - Follow the prompts to configure your build for Android or iOS.

6. **Monitor Your Build**
   - Check the build status directly in the terminal or visit the [EAS Dashboard](https://expo.dev/accounts/YOUR_ACCOUNT_NAME/projects/YOUR_PROJECT_NAME/builds).

### Updating Your Project

7. **Publish Updates**
   - Use the following command to publish updates to your app:
     ```bash
     eas update
     ```
   - This ensures your users receive the latest updates without needing a new build.

### Additional Resources

- [EAS Documentation](https://docs.expo.dev/eas/)
- [Expo CLI Reference](https://docs.expo.dev/workflow/expo-cli/)
