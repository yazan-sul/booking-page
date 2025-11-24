import InputField from "../core/InputFiled";

// usernameRef: React.RefObject<HTMLInputElement>;
// passwordRef: React.RefObject<HTMLInputElement>;
export default function SigninForm() {
  return (
    <div>
      <InputField
        label="Username"
        name="username"
        // inputRef={usernameRef}
        placeHolder={"yazan"}
        type="text"
      />
      <InputField
        label="Password"
        name="password"
        // inputRef={passwordRef}
        placeHolder={""}
        type="password"
      />
    </div>
  );
}
