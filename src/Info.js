// import React, { useState, useEffect } from "react";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");
//   useEffect(() => {
//     // console.log("렌더링이 완료되었습니다.");
//     // console.log({ name, nickname });
//     //마운트 시에만 실행하고 싶을때 []를 입력한다 특정값만 보고싶을땐 특정 배열에 이름만 써주면 된다 [name]
//     console.log("effect");
//     console.log(name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   }, []);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };
//   return (
//     <div>
//       <input value={name} onChange={onChangeName} />
//       <input value={nickname} onChange={onChangeNickname} />
//       <div>
//         <div>
//           <b>이름 : </b>
//           {name}
//         </div>
//         <div>
//           <b>닉네임 : </b>
//           {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

import React from "react";
import UseInputs from "./UseInputs";

const Info = () => {
  const [state, onChange] = UseInputs({ name: "", nickname: "" });
  const { name, nickname } = state;
  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임 : </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
