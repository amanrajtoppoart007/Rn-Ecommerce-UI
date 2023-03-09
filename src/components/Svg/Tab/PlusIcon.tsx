import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = ({color}: {color: string}) => {
  return (
    <Svg width={60} height={60} viewBox="0 0 512 512">
      <Path
        fillRule="evenodd"
        d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0z"
        clipRule="evenodd"
        data-original="#4bae4f"
        fill={color}
      />
      <Path
        fill="#FFF"
        d="M116 279.6v-47.3c0-4.8 3.9-8.8 8.8-8.8h98.9v-98.8c0-4.8 3.9-8.8 8.8-8.8h47.3c4.8 0 8.7 3.9 8.7 8.8v98.9h98.8c4.8 0 8.8 3.9 8.8 8.8v47.3c0 4.8-3.9 8.7-8.8 8.7h-98.9v98.8c0 4.8-3.9 8.8-8.7 8.8h-47.3c-4.8 0-8.8-3.9-8.8-8.8v-98.9h-98.8c-4.9.1-8.8-3.9-8.8-8.7z"
        data-original="#ffffff"
      />
    </Svg>
  );
};

export default PlusIcon;
