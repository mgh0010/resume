import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type CartContextValue = {
  chosenSkills: string[];
  chosenAttributes: string[];
  numItemsInCart: number;
  addSkill: (skill: string) => void;
  addAttribute: (attribute: string) => void;
  removeSkill: (skillToRemove: string) => void;
  removeAttribute: (attributeToRemove: string) => void;
  toggleSkill: (skill: string) => void;
  toggleAttribute: (attribute: string) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [chosenSkills, setChosenSkills] = useState<string[]>(["Web Dev"]);
  const [chosenAttributes, setChosenAttributes] = useState<string[]>([
    "Efficient",
  ]);

  const value = useMemo<CartContextValue>(() => {
    const addSkill = (skill: string) => {
      setChosenSkills((current) => [...current, skill]);
    };

    const addAttribute = (attribute: string) => {
      setChosenAttributes((current) => [...current, attribute]);
    };

    const removeSkill = (skillToRemove: string) => {
      setChosenSkills((current) => {
        const index = current.indexOf(skillToRemove);
        if (index < 0) {
          return current;
        }
        const copy = [...current];
        copy.splice(index, 1);
        return copy;
      });
    };

    const removeAttribute = (attributeToRemove: string) => {
      setChosenAttributes((current) => {
        const index = current.indexOf(attributeToRemove);
        if (index < 0) {
          return current;
        }
        const copy = [...current];
        copy.splice(index, 1);
        return copy;
      });
    };

    const toggleSkill = (skill: string) => {
      setChosenSkills((current) =>
        current.includes(skill)
          ? current.filter((item) => item !== skill)
          : [...current, skill],
      );
    };

    const toggleAttribute = (attribute: string) => {
      setChosenAttributes((current) =>
        current.includes(attribute)
          ? current.filter((item) => item !== attribute)
          : [...current, attribute],
      );
    };

    return {
      chosenSkills,
      chosenAttributes,
      numItemsInCart: chosenSkills.length + chosenAttributes.length,
      addSkill,
      addAttribute,
      removeSkill,
      removeAttribute,
      toggleSkill,
      toggleAttribute,
    };
  }, [chosenAttributes, chosenSkills]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
