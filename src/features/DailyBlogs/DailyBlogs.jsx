import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from 'react-icons/fa'
import { IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { removeBLogs } from "./dailySlice";

const DailyBlogs = () => {

  const nav = useNavigate();

  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => state.dailySlice)

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  };

  const handleDelete = (blog) => {
    // console.log(blog.id);
    // console.log(blog.id);
    dispatch(removeBLogs({ id: blog.id }))
    setOpen(false)
  }

  return (
    <div className="grid grid-cols-3">
      {
        blogs.map((blog) => {
          return <div key={blog.id} className="space-y-2">
            <h1>{blog.title}</h1>
            <img src={blog.imagePreview} alt="" />
            <p>{blog.hobbies}</p>
            <p>{blog.email}</p>
            <div className="flex justify-end space-x-4">
              <IconButton size="sm" color="green" onClick={() => nav(`/editform/${blog.id}`)}><FaEdit color="white" size={14} /></IconButton>
              <IconButton size="sm" color="red" onClick={handleOpen}><FaTrash color="white" size={14} /></IconButton>
            </div>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Are you Sure you want to Delete?</DialogHeader>
              {/* <DialogBody>
                Are you Sure you want to Delete?
              </DialogBody> */}
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={() => handleDelete(blog)}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        })
      }
    </div>
  )
}
export default DailyBlogs