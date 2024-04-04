import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const DailyForm = () => {
  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto mt-5">
      <Typography variant="h4" color="blue-gray">
        Daily Blogs
      </Typography>
      <Typography color="gray" className="mt-1 font-normal mb-2">
        Add some Blogs
      </Typography>
      <form className="">
        <div className="mb-1 flex flex-col gap-6">
          <div className="">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Title
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default DailyForm