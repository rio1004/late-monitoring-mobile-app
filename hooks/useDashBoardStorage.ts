import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

type ProfileSettingsType = {
  total?: number;
  name?: string;
  today?: number;
  achievement?: string;
};

const ProfileSettingInit = { total: 0, today: 0, achievement: "" };

const storage = createJSONStorage<ProfileSettingsType>(() => AsyncStorage);

export const profileSettingAtom = atomWithStorage<ProfileSettingsType>(
  "dashboard",
  ProfileSettingInit,
  storage
);
