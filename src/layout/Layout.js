import React from 'react'
import Navbar from '../common/navbar/Navbar'
import Sidebar from '../common/sidebar/Sidebar'
import MainData from '../common/main/MainData'
import RightSidebar from '../common/rightsidebar/RightSidebar'

const Layout = ({children}) => {
    return (
        <>

            <header>
               <Navbar />
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 p-0">
                        <aside>
                            <Sidebar />
                        </aside>
                    </div>

                    <div className="col-md-6">
                        <main>
                            {/* <MainData /> */}
                            {children}
                        </main>
                    </div>

                    <div className="col-md-3">
                        <aside>
                            <RightSidebar />
                        </aside>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Layout