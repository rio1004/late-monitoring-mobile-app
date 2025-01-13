import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

type DashBoardType = {
  total?: number;
  name?: string;
  today?: number;
  achievement?: string;
};

const DashBoardInit = { total: 0, today: 0, achievement: "" };

const storage = createJSONStorage<DashBoardType>(() => AsyncStorage);

export const dashBoardAtom = atomWithStorage<DashBoardType>(
  "dashboard",
  DashBoardInit,
  storage
);
