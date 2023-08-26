/** @jsx jsx */
import { jsx } from "@emotion/react"
import BouncingButton from "./bouncing-button";

// TODO: convert this to using css utils
const ImageLinkButton = ({ imgUrl, linkUrl, alt, size=42, gradient }) => (
  <BouncingButton size={size} gradient={gradient} onClick={() => window.open(linkUrl, '_blank')}>
    <img
      src={imgUrl}
      alt={alt}
      width={size}
      height={size}
    />
  </BouncingButton>
);

export default ImageLinkButton;
