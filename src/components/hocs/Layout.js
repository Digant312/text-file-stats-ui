import React from "react";
import Header from "../common/Header";

const withLayout = (PageComponent) => {
  return (
    <div>
      <Header />
      <PageComponent />
      {/* Footer can be added here... */}
    </div>
  );
};

export default withLayout;
