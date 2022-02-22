import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:8000", { transports: ["websockets"] });

export default function Home() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const handlepost = (e) => {
    socket.emit("room", { post: name });
  };
  socket.on("message", (data) => {
    setList([...list, data]);
  });
  return (
    <div>
      test
      <br />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handlepost}>send comment</button>
      {JSON.stringify(list)}
    </div>
  );
}
