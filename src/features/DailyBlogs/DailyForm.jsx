import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { useFormik } from "formik";

const DailyForm = () => {

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      email: '',
      place: '',
      hobbies: [],
      country: '',
      detail: '',
      image: '',
    },
    onSubmit: (val) => {
      console.log(val);
    },

  })




  const radioData = [
    { label: 'Outdoor', value: 'outdoor', color: 'red' },
    { label: 'Indoor', value: 'indoor', color: 'green' }
  ]

  const checkData = [
    { label: 'Dance', value: 'dance', color: 'red' },
    { label: 'Sing', value: 'sing', color: 'green' }
  ]
  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto mt-5">
      <Typography variant="h4" color="blue-gray">
        Daily Blogs
      </Typography>
      <Typography color="gray" className="mt-1 font-normal mb-2">
        Add some Blogs
      </Typography>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-3">
          <Input
            size="lg"
            label="Title"
            name="title"
            onChange={handleChange}
          />
          <Input
            size="lg"
            label="Email"
            name="email"
            onChange={handleChange} />
        </div>
        <div className="">
          <label htmlFor="">Select In Place</label>
          <div className="flex gap-10">
            {
              radioData.map((rad, i) => {
                return <Radio
                  key={i}
                  label={rad.label}
                  color={rad.color}
                  value={rad.value}
                  name="place"
                  onChange={handleChange} />
              })
            }
          </div>
        </div>
        <div className="">
          <label htmlFor="">Select Hobbies</label>
          <div className="flex gap-10">
            {
              checkData.map((rad, i) => {
                return <Checkbox
                  key={i}
                  label={rad.label}
                  color={rad.color}
                  value={rad.value}
                  onChange={handleChange}
                  name="hobbies" />
              })
            }
          </div>
        </div>
        <Select label="Select Country" name="country" onChange={(e) => setFieldValue('country', e)}>
          <Option value="nepal">Nepal</Option>
          <Option value="japan">Japan</Option>
          <Option value="india">India</Option>
          <Option value="china">China</Option>
        </Select>
        <div className="w-96">
          <Textarea label="Description" name="detail" onChange={handleChange}></Textarea>
        </div>
        <div className="">
          <label htmlFor="">Select Image</label>
          <Input
            label="select image"
            type="file"
            name="image"
            onChange={(e) => {
              const file = e.target.files[0];
              const url = URL.createObjectURL(file);
              setFieldValue('image', url)
            }} />
          <div className="my-2">
            {values.image && <img src={values.image} alt="" />}
          </div>
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Submit
        </Button>


      </form>
    </Card>
  )
}
export default DailyForm