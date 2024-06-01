import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const params = useParams();
  const { id } = params;
  return (
    <div className="bg-gray-600 text-white text-3xl text-center my-5 p-5">
      User: {id}
    </div>
  );
}

export default User;
