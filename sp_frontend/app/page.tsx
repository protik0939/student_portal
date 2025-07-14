'use client'
import { useState, FormEvent, ChangeEvent, useEffect } from "react";

type MyObjectType = {
  title: string;
  body: string;
};

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [data, setData] = useState<MyObjectType[]>([]);

  const submitPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      const fData = await response.json();

      if (response.ok) {
        alert("Post submitted successfully!");
        console.log("Response:", fData);
        setTitle("");
        setBody("");
        setData([...data, { title, body }]);
      } else {
        alert("Error submitting post");
        console.error(data);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/posts/');
        if (!response.ok) {
          throw new Error(`Something went wrong!`);
        }
        const resData = await response.json();
        setData(resData);
        console.log(resData);
      }
      catch (err) {
        console.log(err);
      }
      finally {
        console.log("Data Fetched Successfully");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={submitPost} className="pt-32 pl-20">
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <input
          id="body"
          type="text"
          placeholder="Enter body"
          value={body}
          onChange={handleBodyChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="text-white">
        {data.map((item, index) => (
          <div key={index} className="border-2 rounded-xl m-2 p-4">
            <h1 className="font-semibold text-blue-400">{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
