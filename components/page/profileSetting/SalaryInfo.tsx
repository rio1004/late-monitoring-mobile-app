import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useAtom } from "jotai";
import { useEffect } from "react";

import { profileSettingAtom } from "@/hooks/useDashBoardStorage";
import { useColorScheme } from "@/hooks/useColorSchemeMod";
import { Colors } from "@/constants/Colors";

export type SalaryType = {
  monthlyIncome: number | "";
  hourlyRate: number | "";
};

const { buttonStyle } = Colors[useColorScheme()];

export default function SalaryInfo() {
  const [DashBoard, setDashBoardAtom] = useAtom(profileSettingAtom);

  const methods = useForm<SalaryType>({
    defaultValues: {
      monthlyIncome: "",
      hourlyRate: "",
    },
  });

  const { control, handleSubmit, reset } = methods;

  useEffect(() => {
    console.log("render tag check");
    if (DashBoard?.salaryInfo) {
      reset({
        monthlyIncome: DashBoard.salaryInfo.monthlyIncome ?? 0,
        hourlyRate: DashBoard.salaryInfo.hourlyRate ?? 0,
      });
    }
  }, [DashBoard, reset]);

  const onSubmit = (data: SalaryType) => {
    setDashBoardAtom({
      ...DashBoard,
      salaryInfo: data,
    });
    console.log("Form Submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <ThemedText style={styles.title}>Salary Information</ThemedText>

      {/* Monthly Income Field */}
      <Controller
        name="monthlyIncome"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.field}>
            <ThemedText style={styles.label}>Monthly Income:</ThemedText>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={value?.toString()}
              onChangeText={(text) => onChange(Number(text))}
            />
          </View>
        )}
      />

      {/* Hourly Rate Field */}
      <Controller
        name="hourlyRate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.field}>
            <ThemedText style={styles.label}>Hourly Rate:</ThemedText>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={value?.toString()}
              onChangeText={(text) => onChange(Number(text))}
            />
          </View>
        )}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <ThemedText style={styles.buttonText}>Submit</ThemedText>
      </TouchableOpacity>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  button: {
    ...buttonStyle,
    alignItems: "center",
    alignSelf: "flex-end",
    width: "30%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
