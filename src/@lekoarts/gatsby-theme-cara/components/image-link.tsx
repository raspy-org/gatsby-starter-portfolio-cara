/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import Button from "./button";

// TODO: convert this to using css utils
const ImageLink = ({ imgUrl, linkUrl, alt, size="42" }) => (
  <a href={linkUrl}>
    <Button>
      <img
        src={imgUrl}
        alt={alt}
        width={size}
        height={size}
        // css={css`
        //   background-color: white;
        //   border-radius: 10px;
        //   padding: 7px;
        //   margin: 5px;
        // `}
      />
    </Button>
    
  </a>
);

export default ImageLink;
// /** @jsx jsx */
// import { jsx } from "theme-ui"
// sx={{
//   backgroundColor: 'white';
//   borderRadius: '10px';
//   padding: '7px';
//   margin: '5px';
// }}
