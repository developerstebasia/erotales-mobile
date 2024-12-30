import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {width = 32, height = 32, fill = '#5873FF'} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.1456 8.42347L16.416 6.15306C16.518 6.05102 16.6371 6 16.7731 6C16.9092 6 17.0282 6.05102 17.1303 6.15306L19.4007 8.42347C19.4857 8.5085 19.507 8.60204 19.4645 8.70408C19.4219 8.80612 19.3412 8.85714 19.2221 8.85714H14.3242C14.2051 8.85714 14.1243 8.80612 14.0818 8.70408C14.0393 8.60204 14.0605 8.5085 14.1456 8.42347ZM16.416 25.8469L14.1456 23.5765C14.0605 23.4915 14.0393 23.398 14.0818 23.2959C14.1243 23.1939 14.2051 23.1429 14.3242 23.1429H19.2221C19.3412 23.1429 19.4219 23.1939 19.4645 23.2959C19.507 23.398 19.4857 23.4915 19.4007 23.5765L17.1303 25.8469C17.0282 25.949 16.9092 26 16.7731 26C16.6371 26 16.518 25.949 16.416 25.8469Z"
        fill={fill}
      />
      <Path
        d="M9.29592 19.2658H13.5306C13.7857 19.2658 14.0026 19.3551 14.1811 19.5336C14.3597 19.7122 14.449 19.9291 14.449 20.1842C14.449 20.4393 14.3597 20.6561 14.1811 20.8347C14.0026 21.0132 13.7857 21.1025 13.5306 21.1025H7.61224C7.44218 21.1025 7.29762 21.043 7.17857 20.9239C7.05952 20.8049 7 20.6603 7 20.4903V19.5209C7 19.4018 7.01701 19.287 7.05102 19.1765C7.08503 19.066 7.14456 18.9682 7.22959 18.8831L12.1531 12.7352H8.12245C7.86735 12.7352 7.65051 12.6459 7.47194 12.4673C7.29337 12.2887 7.20408 12.0719 7.20408 11.8168C7.20408 11.5617 7.29337 11.3449 7.47194 11.1663C7.65051 10.9877 7.86735 10.8984 8.12245 10.8984H13.7857C13.9558 10.8984 14.1003 10.958 14.2194 11.077C14.3384 11.1961 14.398 11.3406 14.398 11.5107V12.4801C14.398 12.5991 14.381 12.7139 14.3469 12.8245C14.3129 12.935 14.2534 13.0328 14.1684 13.1178L9.29592 19.2658Z"
        fill={fill}
      />
      <Path
        d="M19.4857 18.6535L18.8989 20.4393C18.8309 20.6263 18.7118 20.7836 18.5418 20.9112C18.3717 21.0387 18.1846 21.1025 17.9806 21.1025C17.6404 21.1025 17.3641 20.9622 17.1515 20.6816C16.9389 20.401 16.9006 20.0906 17.0367 19.7505L20.0979 11.5617C20.1829 11.3576 20.3105 11.1961 20.4806 11.077C20.6506 10.958 20.8462 10.8984 21.0673 10.8984H21.8326C22.0537 10.8984 22.2493 10.958 22.4193 11.077C22.5894 11.1961 22.7169 11.3576 22.802 11.5617L25.8887 19.8015C26.0078 20.1246 25.9695 20.4222 25.7739 20.6944C25.5783 20.9665 25.3105 21.1025 24.9703 21.1025C24.7663 21.1025 24.5792 21.0387 24.4091 20.9112C24.2391 20.7836 24.12 20.6263 24.052 20.4393L23.4142 18.6535H19.4857ZM20.0979 16.9188H22.751L21.5265 13.0923H21.3734L20.0979 16.9188Z"
        fill={fill}
      />
    </Svg>
  );
}

export default SvgComponent;
