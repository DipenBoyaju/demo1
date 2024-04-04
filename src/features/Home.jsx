import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="text-center mx-auto">
      <ul className="mx-auto">
        <Link to='/counter'><li className="p-3 border-2 border-indigo-400 w-1/2 rounded-3xl font-bold uppercase hover:bg-indigo-400 cursor-pointer hover:text-white transition-all">Counter</li></Link >
      </ul>
    </div>
  )
}
export default Home