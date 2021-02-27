import React from "react";

export const CommentsContext = React.createContext(null);

export default function MovieCommentsContext(props) {
  return <CommentsContext.Provider {...props} />;
}
