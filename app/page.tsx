import axios from "axios";
import ExpenseTracker from "@/components/ExpenseTracker";
import Image from "next/image";

// async function getTest() {
//   const res = await axios.get("http://localhost:8000/api/test");
//   return res.data;
// }

// async function postTest() {
//   try {
//     const res = await axios.post("http://localhost:8000/api/test", {
//       name: `mattbruer${Math.floor(Math.random() * 1000)}`,
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default async function Home() {
  // const [test] = await Promise.all([getTest()]);

  // await postTest();
  return (
    <div className="m-5">
      <h1 id="hello">hello</h1>
      {/* <p>{JSON.stringify(test)}</p> */}
      <Image
        priority
        src="/trezo-12.jpg"
        alt="headshot"
        width="0"
        height="0"
        sizes="300px"
        style={{ width: "300px", height: "auto" }}
      />
      <h1 className="text-8xl underline mb-5">Life</h1>

      <ExpenseTracker />

      {/* <p>bills paid and unpaid</p>
      <p>health</p>
      <p>food</p>
      <p>gf</p>
      <p>pool</p>
      <p>ideas</p>
      <p>photos</p>
      <p>email</p>
      <p>calendar</p>
      <p>job</p>
      <p>music</p>
      <p>stickies</p> */}
    </div>
  );
}
