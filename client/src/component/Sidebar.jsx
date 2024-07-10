import { Link } from "react-router-dom";

export const Sidebar = () => {

    return (
        <div className="flex flex-col gap-2 h-full bg-blue-950 w-1/6 p-12 text-white">
            <div className="m-8">

                <Link to={"/orders"} >
                    <h1 className="text-2xl">
                        Orders
                    </h1>
                </Link>
            </div>
            <div className="m-8">
                <Link to={"/reports"}>
                    <h1 className="text-2xl">
                        Reports
                    </h1>
                </Link>
            </div>
            <div className="m-8">
                <Link to={"/ndr"}>
                    <h1 className="text-2xl">
                        NDR
                    </h1>
                </Link>
            </div>
            <div className="m-8">
                <Link to={"/ratecalculator"}>
                    <h1 className="text-2xl">
                        Rate Calculator
                    </h1>
                </Link>
            </div>
            <div className="m-8">
                <Link to={"/channel"}>
                    <h1 className="text-2xl">
                        Channel
                    </h1>
                </Link>
            </div>
            <div className="m-8">
                <Link to={"/remittance"}>
                    <h1 className="text-2xl">
                        Remittance
                    </h1>
                </Link>
            </div>
            <div className="m-8">
                <Link to={"/billing"} >
                    <h1 className="text-2xl">
                        Billing
                    </h1>
                </Link>
            </div>
        </div>
    )
}