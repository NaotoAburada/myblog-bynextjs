import React from "react";
import Alert from "./alert";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
