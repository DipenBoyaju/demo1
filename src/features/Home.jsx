import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="text-center mx-auto">
      <ul className="mx-auto space-y-4">
        <Link to='/counter'><li className="p-3 border-2 border-indigo-400 w-1/2 rounded-3xl font-bold uppercase hover:bg-indigo-400 cursor-pointer hover:text-white transition-all my-3">Counter</li></Link ><Link to='/dailyform'><li className="p-3 border-2 border-indigo-400 w-1/2 rounded-3xl font-bold uppercase hover:bg-indigo-400 cursor-pointer hover:text-white transition-all my-3">Form</li></Link >
      </ul>
    </div>
  )
}
export default Home