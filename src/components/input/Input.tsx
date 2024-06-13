import { Input as ShadcnInput } from "@/components/ui/input"

interface InputProps {
  textAlign?: 'left' | 'center' | 'right';
}

export const Input = ({ textAlign }: InputProps) => {
  return (
    <ShadcnInput />
  )
}