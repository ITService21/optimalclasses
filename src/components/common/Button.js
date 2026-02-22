// import React from "react";

// function Button({
//   type,
//   onClick,
//   text,
//   className,
//   disabled,
//   loading,
//   noPadding,
//   icon,
// }) {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`${className} ${
//         disabled ? "cursor-not-allowed opacity-50" : ""
//       } ${loading ? "pointer-events-none" : ""}`}
//       disabled={disabled || loading}
//     >
//       {/* {loading ? "Loading..." : text} */}
//       {loading ? (
//         "Processing..."
//       ) : (
//          <div className="text-center">{text}</div>
//       )}
//     </button>
//   );
// }

// export default Button;



import React from "react";

function Button({
  type,
  onClick,
  text,
  className,
  disabled,
  loading,
  noPadding,
  icon,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${loading ? "pointer-events-none" : ""}`}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
          <span className="mx-2">Processing...</span>
        </div>
      ) : (
        <div className="text-center">{text}</div>
      )}
    </button>
  );
}

export default Button;
