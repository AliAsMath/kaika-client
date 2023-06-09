import * as React from "react";
import { Input } from "@material-tailwind/react";
import { FC } from "react";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import { InputProps } from "../../types/components/inputBox-type";
import { useTranslation } from "react-i18next";

const InputBox: FC<InputProps> = ({
  id,
  name,
  label,
  type,
  disabled,
  register,
  error,
  value,
  onChange,
}) => {

  const {t} = useTranslation()
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className="relative">
      <Input
        name={name}
        autoComplete="new-password"
        id={id}
        type={type}
        disabled={disabled}
        label={t(label)}
        className="text-gray-400 autofill:!bg-transparent autofill:!shadow-black"
        {...register(name, {
          onchange: () => console.log("hio"),
        })}
        value={value}
        onChange={changeHandler}
      />
      {error && (
        <div className="fill-red-500 absolute right-1 top-2.5 text-xl">
          <ShieldExclamationIcon width={20} color="#ED4337" />
        </div>
      )}
      {error && <p className="text-sm text-[#ED4337] mt-1 ml-2">{t(error)}</p>}
    </div>
  );
};

export default InputBox;
