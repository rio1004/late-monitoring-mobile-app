import React from "react";
import { View, StyleSheet, ViewStyle, Text, TextInput, Button } from "react-native";
import { useForm, FormProvider, UseFormReturn } from "react-hook-form";
import { useColorScheme } from "@/hooks/useColorSchemeMod";
import { Colors } from "@/constants/Colors";

// Define the props for DesignForm
interface DesignFormProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onSubmit: (data: any) => void; // Handler for form submission
  defaultValues?: Record<string, any>; // Default values for form fields
}

const DesignForm: React.FC<DesignFormProps> = ({ children, style, onSubmit, defaultValues }) => {
  const methods = useForm({ defaultValues }); // Initialize react-hook-form
  const theme = Colors[useColorScheme()];
  const { primary, background } = theme;

  return (
    <FormProvider {...methods}>
      <View style={[styles.container, { backgroundColor: background }, style]}>
        {children}
        <Button
          title="Submit"
          color={primary}
          onPress={methods.handleSubmit(onSubmit)}
        />
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 4,
      padding: 8,
      marginBottom: 16,
    },
  });