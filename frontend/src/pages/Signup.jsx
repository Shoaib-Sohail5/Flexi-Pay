import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import URL from "../../config"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="bg-neutral-950 text-white text-center py-2 px-4  rounded-lg shadow-lg max-w-lg mx-auto mb-5">
        <h1 className="text-2xl font-bold">Welcome to FlexiPay</h1>
      </div>
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox onChange={(e) => {
          setFirstName(e.target.value)
        }} placeholder="Enter your first name" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value)
        }} placeholder="Enter your last name" label={"Last Name"} />
        <InputBox onChange={(e) => {
          setUserName(e.target.value)
        }} placeholder="example@gmail.com" label={"Email"} />
        <InputBox type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="********" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async() => {
              const response = await axios.post(URL, {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />

        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}