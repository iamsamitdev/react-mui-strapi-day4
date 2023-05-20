import { TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"

const Login = () => {

  // useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm()

  // onSubmit function
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField label="Username"
              type="text"
              variant="outlined"
              {...register("username", { required: true, minLength: 5 })}
              error={errors.username ? true : false}
              helperText={errors.username ? "Username is required" : ""}
            />
          </div>

          <div>
            <TextField label="Password"
              type="password"
              variant="outlined"
              {...register("password", { required: true })}
              error={errors.password ? true : false}
              helperText={errors.password ? "Password is required" : ""}
            />
          </div>
          <div>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </div>
        </form>
    </>
  )
}

export default Login