import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header: React.FC = () => (
  <>
    <title>Home Page</title>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
    />
  </>
);

const MemoHeader = React.memo(Header);

export default MemoHeader;
