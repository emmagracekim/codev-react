import React from "react";
import Input from "./Input";

// function FRInput() {
//   return (
//     <div>
//       <Input type="text" />
//     </div>
//   );
// }

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
