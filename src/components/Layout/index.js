import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'
import './index.scss'

const Layout = () => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <Topbar />
        <div className="page ">
          <div span className="tags ">
            &lt;html&gt;
            <br />
            <span className="top-tag">&lt;body&gt;</span>
          </div>
          <Outlet />
          <span className="tags bottom-tag">&lt;/body&gt;</span>
          <br />
          <span className="tags">&lt;/html&gt;</span>
        </div>
      </div>
    </>
  )
}

export default Layout
