// import React, { useState } from "react";

// const getAverage = (numbers) => {
//   console.log("평균값 계산중...");
//   if (numbers.length === 0) return 0;
//   //reduce는 매개변수가 2개 이고 반환 값이 한개이다
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };
// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");

//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const onInsert = (e) => {
//     //input에 value값이 입력과 동시에 숫자로 변환
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber("");
//   };

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값 : </b> {getAverage(list)}
//       </div>
//     </div>
//   );
// };

// export default Average;

// import React, { useMemo, useState } from "react";

// const getAverage = (numbers) => {
//   console.log("평균값 계산중...");
//   if (numbers.length === 0) return 0;
//   //reduce는 매개변수가 2개 이고 반환 값이 한개이다
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };
// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");

//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const onInsert = (e) => {
//     //input에 value값이 입력과 동시에 숫자로 변환
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber("");
//   };
//   const avg = useMemo(() => getAverage(list), [list]);
//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값 : </b> {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

// import React, { useCallback, useMemo, useState } from "react";

// const getAverage = (numbers) => {
//   console.log("평균값 계산중...");
//   if (numbers.length === 0) return 0;
//   //reduce는 매개변수가 2개 이고 반환 값이 한개이다
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };
// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");

//   const onChange = useCallback((e) => {
//     setNumber(e.target.value);
//   }, []);

//   const onInsert = useCallback(() => {
//     //input에 value값이 입력과 동시에 숫자로 변환
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber("");
//   }, [number, list]); //number 혹은 list가 바뀌것을때만 함수 생성

//   const avg = useMemo(() => getAverage(list), [list]);
//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값 : </b> {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

// import React, { useCallback, useMemo, useRef, useState } from "react";

// const getAverage = (numbers) => {
//   console.log("평균값 계산중...");
//   if (numbers.length === 0) return 0;
//   //reduce는 매개변수가 2개 이고 반환 값이 한개이다
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };
// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");
//   const inputEl = useRef(null);

//   const onChange = useCallback((e) => {
//     setNumber(e.target.value);
//   }, []);

//   const onInsert = useCallback(() => {
//     //input에 value값이 입력과 동시에 숫자로 변환
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber("");
//     inputEl.current.focus();
//   }, [number, list]); //number 혹은 list가 바뀌것을때만 함수 생성

//   const avg = useMemo(() => getAverage(list), [list]);
//   return (
//     <div>
//       <input value={number} onChange={onChange} ref={inputEl} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값 : </b> {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) return 0;
  //reduce는 매개변수가 2개 이고 반환 값이 한개이다
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    //input에 value값이 입력과 동시에 숫자로 변환
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); //number 혹은 list가 바뀌것을때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
