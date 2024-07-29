import  { useState } from "react";
import ReactPaginate from "react-paginate";
import data from "./data";

export const Pagination = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="p-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="w-full border-b bg-gray-300 text-left text-sm leading-normal">
              <th className="px-4 py-2">UserId</th>
              <th className="px-4 py-2">UserName</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {currentItems &&
              currentItems.map((value, index) => (
                <tr key={index} className="border-b text-sm text-gray-600">
                  <td className="px-4 py-2">{value.id}</td>
                  <td className="px-4 py-2">{value.name}</td>
                  <td className="px-4 py-2">{value.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-4 space-x-2"
        pageClassName="px-4 py-2 border rounded"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-4 py-2 border rounded"
        nextClassName="px-4 py-2 border rounded"
        breakClassName="px-4 py-2 border rounded"
      />
    </>
  );
};
