import Link from "next/link"

function AdminPage() {
    return (
        <div>
            <div className="flex justify-between  md:flex-wrap ">
                <div className="w-4/12 bg-black h-screen text-white md:text-xl lg:text-2xl">
                    <div className="border-2 border-white p-4 flex justify-center items-center mt-2">
                        <Link href={"/"} >Home</Link>
                    </div>

                    <div className="flex justify-center items-center p-4 border-white border-2 mt-2 ">
                        <Link href={"/about"}> About Us</Link>
                    </div>
                    <div className="flex justify-center items-center p-4 border-white border-2 mt-2 ">
                        <Link href={"/Courses"} >Courses</Link>

                    </div>
                    <div className="flex justify-center items-center p-4 border-white border-2 mt-2 ">
                        <Link href={"/Contact"} >Contact us</Link>

                    </div>


                </div>
                <div className="w-8/12 bg-blue-500 h-auto">
                    <div className="flex justify-center items-center mt-2">
                        <h1 className="text-white md:text-2xl lg:text-4xl "> Welcome  to Admin Page</h1>
                    </div>
                    <div className="flex flex-wrap justify-around overflow-y-visible">
                        <div className="w-60 h-60 border-white border-2">

                        </div>
                        <div className="w-60 h-60 border-white border-2">
                            
                        </div>
                        <div className="w-60 h-60 border-white border-2">
                            
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default AdminPage