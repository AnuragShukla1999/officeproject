
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {


  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      setLoading(true)
      const res = await fetch('http://localhost:7000/api/signup', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      const resData = await res.json();
      console.log(resData);

      if (res.ok) {
        toast.success("Sign Up Successfully")
        setLoading(false)
        navigate('/')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }


  return (
    <section className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="lg:w-2/5 hidden lg:block mt-24 ml-6 mr-6">
        <img
          src="/img/pattern.png"
          className="h-5/6 w-full object-cover rounded-3xl"
          alt="Pattern"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center bg-white overflow-auto">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to register.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">


            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Name
            </Typography>
            <Input
              size="lg"
              type="text"
              name="name"
              placeholder="your name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />


            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />

            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              size="lg"
              type="password"
              name="password"
              placeholder="your password"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
          </div>
          {/* <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          /> */}
          <Button className="mt-6" fullWidth onClick={handleSubmit} >
            {
              loading ? "Loading....." : "Register Now"
            }
          </Button>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
