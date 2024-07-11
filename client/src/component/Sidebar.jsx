import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

export const Sidebar = () => {

    return (
        <div className="flex flex-col gap-6 pt-8 pb-8 h-screen bg-blue-950 w-28 text-white items-center ">
            <div>
                <Link to={"/dashboard"} className="flex flex-col items-center justify-center" >
                    <MdDashboard />
                    <h1 className="text-sm font-semibold">
                        Dashboard
                    </h1>
                </Link>
            </div>
            <div>
                <Link to={"/orders"} className="flex flex-col items-center justify-center" >
                    <IoMdCart />
                    <h1 className="text-sm font-semibold">
                        Orders
                    </h1>
                </Link>
            </div>
            <div>
                <Link to={"/reports"} className="flex flex-col items-center justify-center">
                    <TbReportAnalytics />
                    <h1 className="text-sm font-semibold">
                        Reports
                    </h1>
                </Link>
            </div>
            <div>
                <Link to={"/ndr"} className="flex flex-col items-center justify-center">
                    <FaTruckArrowRight />
                    <h1 className="text-sm font-semibold">
                        NDR
                    </h1>
                </Link>
            </div>
            <div>
                <Link to={"/ratecalculator"} className="flex flex-col items-center justify-center">
                    <FaCalculator />
                    <h1 className="text-sm font-semibold">
                        Rate Calculator
                    </h1>
                </Link>
            </div>
            <div>
                <Link to={"/channel"} className="flex flex-col items-center justify-center">
                    <FaPlug />
                    <h1 className="text-sm font-semibold">
                        Channel
                    </h1>
                </Link>
            </div>
            <div>
                <Link to={"/remittance"} className="flex flex-col items-center justify-center">
                    <FaMoneyBill />
                    <h1 className="text-sm font-semibold">
                        Remittance
                    </h1>
                </Link>
            </div>
            <div>
                <Link to={"/billing"} className="flex flex-col items-center justify-center">
                    <FaRupeeSign />
                    <h1 className="text-sm font-semibold">
                        Billing
                    </h1>
                </Link>
            </div>
        </div>
    )
}