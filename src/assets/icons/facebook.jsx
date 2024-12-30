import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {width = 45, height = 45, fill = 'none', bg = '#1877F2'} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M45 22.5C45 10.125 34.875 0 22.5 0C10.125 0 0 10.125 0 22.5C0 33.75 8.2125 43.0875 19.0125 44.775V29.025H13.275V22.5H19.0125V17.55C19.0125 11.925 22.3875 8.775 27.5625 8.775C30.0375 8.775 32.625 9.225 32.625 9.225V14.7375H29.8125C27 14.7375 26.1 16.425 26.1 18.225V22.5H32.2875L31.275 29.025H25.9875V44.775C36.7875 43.0875 45 33.75 45 22.5Z"
        fill={bg}
      />
      <Path
        d="M31.2749 29.025L32.2874 22.5H26.0999V18.225C26.0999 16.425 26.9999 14.7375 29.8124 14.7375H32.6249V9.22502C32.6249 9.22502 30.0374 8.77502 27.5624 8.77502C22.3874 8.77502 19.0124 11.925 19.0124 17.55V22.5H13.2749V29.025H19.0124V44.775C20.1374 45 21.3749 45 22.4999 45C23.6249 45 24.8624 44.8875 25.9874 44.775V29.025H31.2749Z"
        fill="white"
      />
    </Svg>
  );
}

export default SvgComponent;
