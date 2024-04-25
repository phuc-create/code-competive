'use client'
import { Form, Formik } from 'formik'
import React from 'react'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Database } from '../../supabase/types/supabase'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../../components/ui/select'
import { Textarea } from '../../components/ui/textarea'
import { createSupabaseBrowerClient } from '../../supabase/supabaseClient'
import { useToast } from '../../components/ui/use-toast'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../../components/ui/alert-dialog'
import { Editor } from '@monaco-editor/react'
import { useTheme } from 'next-themes'

type FormValues = {
  categories: string
  constraints: string
  descriptions: string
  level: Database['public']['Enums']['levels']
  name: string
  starter_func_name: string
  template_code: string
  title: string
}

const AddProblemPage: React.FC = () => {
  const { toast } = useToast()
  const { theme } = useTheme()
  const handleSubmit = async (
    values: FormValues
    // formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log('values here: ', {
      ...values,
      constraints: values.constraints.split(',')
    })
    // try {
    //   const supabase = createSupabaseBrowerClient()
    //   const { data, error } = await supabase
    //     .from('problems')
    //     .insert([{ ...values, categories: values.categories.split(',') }])
    //     .select()
    //   if (data) {
    //     toast({
    //       title: 'Added',
    //       description: 'Added new problem successflly.'
    //     })
    //   } else {
    //     if (error) {
    //       toast({
    //         variant: 'destructive',
    //         title: 'Uh oh! Something went wrong.',
    //         description:
    //           'There was a problem with your request: ' + error.message
    //       })
    //     }
    //   }
    // } catch (error) {
    //   console.log(error)
    //   toast({
    //     variant: 'destructive',
    //     title: 'Uh oh! Something went wrong.',
    //     description: 'There was a problem with your request: ' + error
    //   })
    // }

    // handle call api to submit form
  }
  return (
    <div className="mx-auto my-0 min-w-[700px] flex-1 flex-col items-center justify-between px-2 md:px-12">
      <>
        <Formik
          initialValues={{
            title: '',
            name: '',
            level: 'easy',
            starter_func_name: '',
            template_code: `/**
* list input properties here
* input: ...
* output: ...
*/
const functionName = (...args_here) => {
  // write your code here
}`,
            categories: '',
            constraints: `<!--design your list of constraints here-->
<li></li>
<li></li>
<li></li>
            `,
            descriptions: '<!--design your html description here-->'
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, setFieldValue }) => {
            const handleChangeViaEditor = (field: string, v: string) => {
              setFieldValue(field, v)
            }
            return (
              <Form>
                <div className="mt-4">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <Select
                    name="level"
                    onValueChange={v => handleChangeViaEditor('level', v)}
                  >
                    <Label>Levels</Label>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Level</SelectLabel>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-4">
                  <Label htmlFor="starter_func_name">Start function name</Label>
                  <Input
                    type="text"
                    name="starter_func_name"
                    placeholder="start name"
                    value={values.starter_func_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="template_code">Template code</Label>
                  <Editor
                    className="overflow-hidden"
                    height={'300px'}
                    value={values.template_code}
                    language={'javascript'}
                    onChange={v =>
                      handleChangeViaEditor('template_code', v || '')
                    }
                    theme={theme === 'dark' ? 'vs-dark' : theme}
                    defaultLanguage="javascript"
                    options={{
                      fontSize: 14,
                      hover: { enabled: false },
                      lineNumbers: 'on',
                      tabSize: 2,
                      minimap: {
                        enabled: false
                      },
                      quickSuggestions: false,
                      inlayHints: {
                        enabled: 'off'
                      },
                      parameterHints: {
                        enabled: false
                      }
                    }}
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="categories">Categories</Label>
                  <Input
                    type="text"
                    name="categories"
                    placeholder="categories, seperated by comma"
                    value={values.categories}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="constraints">Constraints</Label>
                  <Editor
                    className="overflow-hidden"
                    height={'300px'}
                    value={values.constraints}
                    language={'html'}
                    onChange={v =>
                      handleChangeViaEditor('constraints', v || '')
                    }
                    theme={theme === 'dark' ? 'vs-dark' : theme}
                    defaultLanguage="html"
                    options={{
                      fontSize: 14,
                      hover: { enabled: false },
                      lineNumbers: 'on',
                      tabSize: 2,
                      minimap: {
                        enabled: false
                      },
                      quickSuggestions: false,
                      inlayHints: {
                        enabled: 'off'
                      },
                      parameterHints: {
                        enabled: false
                      }
                    }}
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="descriptions">Descriptions</Label>

                  <Editor
                    className="overflow-hidden"
                    height={'300px'}
                    value={values.descriptions}
                    language={'html'}
                    onChange={v =>
                      handleChangeViaEditor('descriptions', v || '')
                    }
                    theme={theme === 'dark' ? 'vs-dark' : theme}
                    defaultLanguage="html"
                    options={{
                      fontSize: 14,
                      hover: { enabled: false },
                      lineNumbers: 'on',
                      tabSize: 2,
                      minimap: {
                        enabled: false
                      },
                      quickSuggestions: false,
                      inlayHints: {
                        enabled: 'off'
                      },
                      parameterHints: {
                        enabled: false
                      }
                    }}
                  />
                </div>

                <div className="my-4 flex items-center justify-start gap-4">
                  {/* <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant={'outline'}>Submit</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction asChild type="submit">
                          <Button
                            type="submit"
                            className=""
                            variant={'outline'}
                          >
                            Continue
                          </Button>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog> */}
                  <Button type="submit" className="">
                    Submit
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </>
    </div>
  )
}
export default AddProblemPage
