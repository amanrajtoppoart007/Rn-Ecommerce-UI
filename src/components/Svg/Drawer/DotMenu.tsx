import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const DotMenu = () => {
  return (
    <Svg width={25} height={25} viewBox="0 0 60.123 60.123">
      <Path
        d="M57.124 51.893H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zm0-18.831H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zm0-18.831H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6z"
        data-original="#000000"
        fill="#000000"
      />
      <Circle
        cx={4.029}
        cy={11.463}
        r={4.029}
        data-original="#000000"
        fill="#000000"
      />
      <Circle
        cx={4.029}
        cy={30.062}
        r={4.029}
        data-original="#000000"
        fill="#000000"
      />
      <Circle
        cx={4.029}
        cy={48.661}
        r={4.029}
        data-original="#000000"
        fill="#000000"
      />
    </Svg>
  );
};

export default DotMenu;
