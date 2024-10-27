import React, { useState } from "react";
import { data } from "./data";
import { Button } from "react-bootstrap";

export default function BirthdayComponent() {
  const [users, setUsers] = useState(data);
  const [showMore, setShowMore] = useState(false);
  function removeuser(id) {
    const filteredData = users.filter((meraData) => meraData.id !== id);
    setUsers(filteredData);
  }
  return (
    <div className="bg-pink-400 w-1/3 mx-auto mt-4 p-4">
      <h1 className="text-center">Birthday Component</h1>
      <h1 className="text-center">{users.length}</h1>
      <main className="main flex flex-col justify-center">
        {users.map((meraData) => {
          return (
            <div
              className="w-full flex justify-between items-center"
              key={meraData.id}
            >
              <div className="user-info flex gap-2 items-center">
                <img
                  src={meraData.avatar}
                  alt=""
                  className="h-20 w-20 rounded-full"
                />
                <div className="info">
                  <h5>{meraData.name}</h5>
                  <p>{meraData.age}</p>
                  <div>{meraData.dob}</div>
                  <p>
                    {showMore ? meraData.info.substring(0, 10) : meraData.info}

                    <Button size="sm" onClick={() => setShowMore(!showMore)}>
                      {showMore ? "Read more" : "Show less"}
                    </Button>
                  </p>
                </div>
              </div>
              <Button
                variant="danger"
                className="h-10"
                onClick={() => removeuser(meraData.id)}
              >
                Delete
              </Button>
            </div>
          );
        })}
        <Button variant="danger" className="mt-2" onClick={() => setUsers([])}>
          Clear All
        </Button>
      </main>
    </div>
  );
}
