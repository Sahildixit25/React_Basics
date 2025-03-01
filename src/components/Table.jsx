import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData } from "../redux/actions/taskActions";

const Table = () => {
  const { table, loading, error } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  //   const [data,setData] = useState([])

  const dispatch = useDispatch();

  //   const handleFetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await response.json()
  //     console.log(":data",data)
  //     setData(data)
  //   }

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  //   useEffect(()=>{
  //     handleFetchData()
  //   },[])

//   if (loading) return <p>Loading tasks...</p>;
//   if (error) return <p>Error loading tasks: {error}</p>;

  console.log("table", table);


// for only particular column
//   useEffect(() => {
//     setFilteredData(
//       table.filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [searchTerm, table]);


  // for all columns
  useEffect(() => {
    setFilteredData(
      table.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [searchTerm, table]);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
      callDummyAPI(value);
    }, 500),
    []
  );

  console.log("sear",searchTerm)

  const callDummyAPI = async (search) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm: search }),
      });
      const data = await response.json();
      console.log("Dummy API Response:", data);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };


  return (
    <div>
      Table
      <input
        type="search"
        name="search"
        placeholder="Search by name..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <table border="1px solid black">
        <thead>
          {/* <tr> */}
          <td>id</td>
          <td>name</td>
          <td>username</td>
          <td>email</td>
          <td>Phone</td>
          {/* </tr> */}
        </thead>
        <tbody>
          {filteredData.map((ele, index) => {
            return (
              <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
