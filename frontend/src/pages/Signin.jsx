import { useState } from "react"
import { SignInURL } from "../../config"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e) => {
          setUserName(e.target.value)
        }} placeholder="Your email" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }}
        placeholder="******" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async() => {
              const response = await axios.post(SignInURL, {
              username,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}
          label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}
