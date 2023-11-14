import React from "react";
import { FC, Suspense, lazy, useMemo } from "react";

interface IIconProps{
    name: 'heart' | 'cart' | 'arrowUp' | 'arrowDown' | 'menuCart' | 'catalog';
    size: number;
}

const Icon: FC<IIconProps> = ({name, size}) =>{
    const IconSVG = useMemo(
        () =>
          lazy(
            () =>
              import(
                `./icons/${name}.svg`
              )
          ),
        [name]
      );

      return (
        <Suspense fallback={<svg width={size} height={size} />}>
          <IconSVG
            viewBox={`0 0 ${size} ${size}`}
            width={size}
            height={size}
          />
        </Suspense>
      );
}

export default Icon;