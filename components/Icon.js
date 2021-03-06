import styled from "styled-components";

const IconBase = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  display: block;
`;

export const Play = (props) => (
  <svg width="26" height="25" viewBox="0 0 26 25" {...props}>
    <path
      d="M13.4166 0C6.53296 0 0.95752 5.59375 0.95752 12.5C0.95752 19.4062 6.53296 25 13.4166 25C20.3002 25 25.8757 19.4062 25.8757 12.5C25.8757 5.59375 20.3002 0 13.4166 0ZM11.7254 17.5226C11.3959 17.7705 10.9248 17.5354 10.9248 17.123V7.87697C10.9248 7.46459 11.3959 7.22949 11.7254 7.47744L17.8693 12.1005C18.1351 12.3005 18.1351 12.6995 17.8693 12.8995L11.7254 17.5226Z"
      fill="currentColor"
    />
  </svg>
);
