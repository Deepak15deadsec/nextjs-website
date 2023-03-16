import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set: any, get: any) => ({
      referrer: "",
      phone:"",
      updateReferrer: (id: string) => {
        set((state: any) => ({
          referrer: id,
        }))
      }
    }),
    {
      name: "avni-storage",
    }
  )
);

export default useStore;
