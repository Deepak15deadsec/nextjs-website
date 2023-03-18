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
      },
      setPhone: (phone: string) => {
        set((state: any) => ({
           phone: phone,
        }))
      }
    }),
    {
      name: "avni-storage",
    }
  )
);

export default useStore;
