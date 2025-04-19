import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const getStoredBookData = getStoredBook();
    const convertedStoredBooks = getStoredBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBooks);
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );

    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
      setSort(type);
      
      if (type === "pages") {
          const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
          setReadList(sortedByPage);
      }

      if (type === "ratings") {
        const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
        setReadList(sortedByRatings);
    }
  };

  return (
    <div>
      <div className="bg-[#F3F3F3] text-center rounded-xl my-6">
        <h1 className="font-bold text-3xl py-8">Books</h1>
      </div>
      <div className="mb-4 flex justify-center items-center ">
        <details className="dropdown bg-[#23BE0A] rounded-xl p-2 cursor-pointer">
          <summary className="text-white text-lg font-medium m-1">
            Sort by : {sort ? sort : ""}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 items-center justify-center my-6">
            {readList.map((b) => (
              <Book key={b.bookId} book={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
