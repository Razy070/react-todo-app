import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import { isDataView } from "util/types";
import fs from "fs";




function ReadOne() {
  function GetData() {
    axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => alert(response.data))
    .catch((error) => console.log(error));
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(GetData)], {
        type: "users.json"
      }));
      a.setAttribute("download", "data.txt");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);


  }

  return (
    <div>
      {/* ReadOne */}
      <button onClick={GetData} className="btn btn-lg btn-primary">
        get 
      </button>
    </div>
  );
}

export default ReadOne;

// declare function styledComponent<Props>(
//   strs: TemplateStringsArray
// ): Component<Props>;
// interface MyProps {
//   name: string;
//   age: number;
// }
// styledComponent<MyProps>`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
// declare function tag<T>(strs: TemplateStringsArray, ...args: T[]): T;
// // inference fails because 'number' and 'string' are both candidates that conflict
// let a = tag<string | number>`${100} ${"hello"}`;



// window.onbeforeunload = () => {
//   console.log("Page Reloaded");

//   fs.writeFile("users.json", JSON.stringify(products), (ex) => {
//     if (ex) throw ex.message;

//     console.log("State copying successful.");
//   });
// };



// function products(products: any): string | NodeJS.ArrayBufferView {
//   throw new Error("Function not implemented.");
// }
// function export2txt() {
//     const originalData = {
//       members: [{
//           name: "cliff",
//           age: "34"
//         },
//         {
//           name: "ted",
//           age: "42"
//         },
//         {
//           name: "bob",
//           age: "12"
//         }
//       ]
//     };
  
//     const a = document.createElement("a");
//     a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
//       type: "text/plain"
//     }));
//     a.setAttribute("download", "data.txt");
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);

//     return (
//         <div>
//           {/* ReadOne */}
//           <button onClick={export2txt} className="btn btn-lg btn-primary">
//             get data
//           </button>
//         </div>
//       );
//   }

