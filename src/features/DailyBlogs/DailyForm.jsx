import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addToBLogs } from "./dailySlice";
import { useNavigate } from "react-router";


const DailyForm = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  const { blogs } = useSelector((state) => state.dailySlice)
  console.log(blogs);

  const { values, handleChange,
    handleSubmit, setFieldValue } = useFormik({
      initialValues: {
        title: '',
        email: '',
        place: '',
        hobbies: [],
        country: '',
        detail: '',
        image: null
      },
      onSubmit: (val) => {
        dispatch(addToBLogs({ ...val, id: nanoid() }));
        nav(-1);
      },

    });




  const radioData = [
    { label: 'Outdoor', value: 'outdoor', color: 'red' },
    { label: 'Indoor', value: 'indoor', color: 'green' },
  ];
  const checkData = [
    { label: 'Dance', value: 'dance', color: 'red' },
    { label: 'Sing', value: 'sing', color: 'green' },
  ];

  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-3">
      <Typography variant="h4" color="blue-gray">
        Daily Blogs
      </Typography>
      <Typography color="gray" className="mt-1 mb-3 font-normal">
        Add Some Blogs
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            onChange={handleChange}
            size="lg"
            label="Title"
            name="title"
          />
          <Input
            size="lg"
            label="Email"
            name="email"
            onChange={handleChange}
          />
          <div >
            <h1>Select In Place</h1>
            <div className="flex gap-10">
              {radioData.map((rad, i) => {
                return <Radio key={i} label={rad.label}
                  onChange={handleChange}
                  color={rad.color}
                  value={rad.value}
                  name="place" />
              })}
            </div>
          </div>

          <div >
            <h1>Select Hobbies</h1>
            <div className="flex gap-10">
              {checkData.map((rad, i) => {
                return <Checkbox
                  key={i}
                  label={rad.label}
                  onChange={handleChange}
                  color={rad.color}
                  value={rad.value} name="hobbies" />
              })}
            </div>
          </div>

          <Select
            onChange={(e) => setFieldValue('country', e)}
            name="country"
            label="Select Country">
            <Option value="nepal">Nepal</Option>
            <Option value="india">India</Option>
            <Option value="china">China</Option>

          </Select>
          <div className="w-96">
            <Textarea
              name="detail"
              onChange={handleChange}
              label="Description" />
          </div>

          <div>

            <Input
              onChange={(e) => {
                const file = e.target.files[0];
                const url = URL.createObjectURL(file);
                setFieldValue('image', url);
              }}
              name="image"
              label="select image"
              type="file" />
            <div className="my-2">
              {values.image && <img src={values.image} alt="" />}
            </div>

          </div>

        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default DailyForm
