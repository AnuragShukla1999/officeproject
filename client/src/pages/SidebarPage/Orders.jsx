// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Orders = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>

            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-200 w-full">
                    <thead>
                        <tr className="bg-blue-400">
                            <th className="border border-gray-800 px-4 py-2">Column A</th>
                            <th className="border border-gray-800 px-4 py-2">Column B</th>
                            <th className="border border-gray-800 px-4 py-2">Column C</th>
                            <th className="border border-gray-800 px-4 py-2">Column D</th>
                            <th className="border border-gray-800 px-4 py-2">Column E</th>
                            <th className="border border-gray-800 px-4 py-2">Column F</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example rows, replace with dynamic data */}
                        <tr className="bg-slate-200">
                            <td className="border border-gray-800 px-4 py-2">Data A1</td>
                            <td className="border border-gray-800 px-4 py-2">Data B1</td>
                            <td className="border border-gray-800 px-4 py-2">Data C1</td>
                            <td className="border border-gray-800 px-4 py-2">Data 1</td>
                            <td className="border border-gray-800 px-4 py-2">Data C1</td>
                            <td className="border border-gray-800 px-4 py-2">Data C1</td>
                        </tr>
                        <tr className="bg-slate-200">
                            <td className="border border-gray-800 px-4 py-2">Data A2</td>
                            <td className="border border-gray-800 px-4 py-2">Data B2</td>
                            <td className="border border-gray-800 px-4 py-2">Data C2</td>
                            <td className="border border-gray-800 px-4 py-2">Data C2</td>
                            <td className="border border-gray-800 px-4 py-2">Data C2</td>
                            <td className="border border-gray-800 px-4 py-2">Data C2</td>
                        </tr>
                        <tr className="bg-slate-200">
                            <td className="border border-gray-800 px-4 py-2">Data A3</td>
                            <td className="border border-gray-800 px-4 py-2">Data B3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                        </tr>
                        <tr className="bg-slate-200">
                            <td className="border border-gray-800 px-4 py-2">Data A3</td>
                            <td className="border border-gray-800 px-4 py-2">Data B3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                        </tr>
                        <tr className="bg-slate-200">
                            <td className="border border-gray-800 px-4 py-2">Data A3</td>
                            <td className="border border-gray-800 px-4 py-2">Data B3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                        </tr>
                        <tr className="bg-slate-200">
                            <td className="border border-gray-800 px-4 py-2">Data A3</td>
                            <td className="border border-gray-800 px-4 py-2">Data B3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                            <td className="border border-gray-800 px-4 py-2">Data C3</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
