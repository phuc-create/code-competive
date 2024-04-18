'use client'
import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../../components/ui/dialog'
import { Button } from '../../components/ui/button'
import { Form, Formik } from 'formik'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

type FormValues = {
  username: string
  password: string
}

const LoginPage: React.FC = () => {
  const handleSubmit = async (
    values: FormValues
    // formikHelpers: FormikHelpers<FormValues>
  ) => {
    // handle call api to submit form
    console.log('values: ', values)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Login to access stuck overflow.</DialogDescription>
        </DialogHeader>
        <>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => {
              return (
                <Form>
                  <div className="my-4">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      name="username"
                      placeholder="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="my-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <Button type="submit" className="">
                      Submit
                    </Button>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </>

        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default LoginPage
