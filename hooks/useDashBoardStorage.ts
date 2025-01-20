import { SalaryType } from "@/components/page/profileSetting/SalaryInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

export type ProfileSettingsType = {
  total?: number;
  name?: string;
  today?: number;
  achievement?: string;
  salaryInfo?: SalaryType
};

const ProfileSettingInit = { total: 0, today: 0, achievement: "" };

const storage = createJSONStorage<ProfileSettingsType>(() => AsyncStorage);

export const profileSettingAtom = atomWithStorage<ProfileSettingsType>(
  "dashboard",
  ProfileSettingInit,
  storage
);
