import { useEffect, useRef, useState } from "react";

interface OtpProps {
  length: number;
  onSubmit: (otp: string) => void;
}

function Otp({ length }: OtpProps) {
  const [otpInput, setOtpInput] = useState(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  function handleChange(value: string, index: number) {
    const inputs = [...otpInput];
    inputs[index] = value.slice(value.length - 1);
    setOtpInput(inputs);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (
      e.key == "Backspace" &&
      !otpInput[index] &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  }

  return (
    <div>
      {otpInput.map((value, index) => (
        <input
          ref={(input) => (inputRefs.current[index] = input)}
          type="text"
          className="border-2 border-black w-10 m-2"
          value={value}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}

export default Otp;
