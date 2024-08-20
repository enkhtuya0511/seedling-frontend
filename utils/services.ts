import { GetTeachersInput } from "@/generated";

export function handleData(value: any, field: string, setSearchInput: (arg: any) => void) {
  if (field !== "priceRange") {
    setSearchInput((prev: any) => ({ ...prev, [field]: value }));
  } else {
    setSearchInput((prev: any) => ({
      ...prev,
      priceRange: { max: value[1].toString(), min: value[0].toString() },
    }));
  }
}

export const handlePress = (label: any, field: keyof GetTeachersInput, setSearchInput: (arg: any) => void) => {
  setSearchInput((prev: any) => {
    const currentFieldArray = (prev[field] || []) as string[];
    if (currentFieldArray?.includes(label))
      return {
        ...prev,
        [field]: currentFieldArray.filter((item) => item !== label),
      };
    else return { ...prev, [field]: [...currentFieldArray, label] };
  });
};
