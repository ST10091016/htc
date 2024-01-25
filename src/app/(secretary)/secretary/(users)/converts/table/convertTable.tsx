"use client";

import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable';

export default function ConvertTable({ converts }: { converts: any }) {
    const [userData, setUserData] = useState(converts);
    const [search, setSearchTerm] = useState("");
    const [order, setOrder] = useState("ASC");
    const tableRef = useRef(null);
    const sorting = (col: any) => {
        if (order === "ASC") {
            const sorted = [...userData].sort((a: any, b: any) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setUserData(sorted);
            setOrder("DESC");
        }
        if (order === "DESC") {
            const sorted = [...userData].sort((a: any, b: any) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setUserData(sorted);
            setOrder("ASC");
        }
    };

    const [loader, setLoader] = useState(false);

    const downloadPDF = () => {
        setLoader(true);

        const pdf = new jsPDF("l", "pt", "a4");
        const options = {
            margin: { top: 40, right: 30, bottom: 10, left: 30 },
            beforePageContent: function (data) {
                pdf.text("Converts", 40, 30);
            },
        };

        const columns: any[] = [];
        const rows: any[] = [];

        // Check if tableRef.current is not null before querying
        if (tableRef.current) {
            // Extract column headers
            const allColumns = tableRef.current.querySelectorAll('thead th');
            allColumns.forEach((th, index) => {
                // Exclude the last column
                if (index < allColumns.length - 1) {
                    columns.push({ header: th.innerText, dataKey: th.getAttribute('data-field') });
                }
            });

            // Extract data rows
            tableRef.current.querySelectorAll('tbody tr').forEach((tr) => {
                const row = [];
                tr.querySelectorAll('td').forEach((td, index) => {
                    // Exclude the last column
                    if (index < allColumns.length - 1) {
                        row.push(td.innerText);
                    }
                });
                rows.push(row);
            });

            try {
                pdf.autoTable({
                    columns,
                    body: rows,
                    startY: 70,
                    theme: 'grid',
                    styles: { overflow: 'linebreak' },
                    columnStyles: {
                        0: { overflow: 'linebreak' },
                        1: { overflow: 'linebreak' },
                        // Add more column styles if needed
                    },
                    ...options,
                });
            } catch (error) {
                console.error("Error during autoTable:", error);
            }

            setLoader(false);
            pdf.save("Convert.pdf");
        } else {
            console.error("Table element not found");
            setLoader(false);
        }
    };

    return (
        <>
            {/* Display convert data in a table */}
            <div className="relative overflow-x-auto py-10 justify-center">
                <div className=" py-8 flex flex-col items-center">
                    <form>
                        <div className="flex items-center justify-between mb-3 px-6">
                            <div>
                                <input
                                    onChange={(e: any) => setSearchTerm(e.target.value)}
                                    className="px-6 block py-3"
                                    placeholder="Search"
                                />
                            </div>
                            <button
                              type="button"
                              onClick={downloadPDF}
                              disabled={!(loader === false)}
                              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-6"
                          >
                              {loader ? <span>Downloading</span> : <span>Download PDF</span>}
                          </button>
                        </div>
                    </form>
                </div>
                <br />
                <div className="convert relative overflow-x-auto shadow-md sm:rounded-lg">
                    <h1 className="text-xl font-bold text-center py-4">Converts</h1>
                    <table className="convert w-full text-sm text-left text-gray-600 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-blue-400 dark:bg-gray-700 text-white">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                    onClick={() => sorting("firstName")}
                                >
                                    Name ↑↓
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                    onClick={() => sorting("lastName")}
                                >
                                    Surname ↑↓
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                    onClick={() => sorting("worshipCenter")}
                                >
                                    Worship Center ↑↓
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                    onClick={() => sorting("phone")}
                                >
                                    Phone Number ↑↓
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                    onClick={() => sorting("email")}
                                >
                                    Email ↑↓
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                    onClick={() => sorting("gender")}
                                >
                                    Gender ↑↓
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                    onClick={() => sorting("status")}
                                >
                                    Status ↑↓
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Follow Up Person
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Convert Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {converts
                                .filter(
                                    (convert: any) =>
                                        convert.firstName
                                            .toLowerCase()
                                            .includes(search.toLowerCase()) ||
                                        convert.lastName
                                            .toLowerCase()
                                            .includes(search.toLowerCase()) ||
                                        convert.email
                                            .toLowerCase()
                                            .includes(search.toLowerCase()) ||
                                        convert.phone
                                            .toLowerCase()
                                            .includes(search.toLowerCase()) ||
                                        convert.gender
                                            .toLowerCase()
                                            .includes(search.toLowerCase()) ||
                                        []
                                )
                                .map((convert: any) => (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={convert.id}
                                    >
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.firstName}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.lastName}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.worshipCenter}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.phone}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.email}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.gender}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.status}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.followUp}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4">
                                            {convert.actions}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
