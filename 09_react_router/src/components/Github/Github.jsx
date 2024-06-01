import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/tkabir3066")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <div className="text-center text-3xl m-4 bg-gray-600 p-4 t4ext-white">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github picture" width={300} />
    </div>
  );
}

export default Github;
