import "./list.scss"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Footer from "../../components/footer/Footer"

const List = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
        <Footer />
      </div>
    </div>
  )
}

export default List