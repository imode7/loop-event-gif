import React, { useEffect, useState } from "react";
import Image from "./Image";

const Gif = ({ image_array = [], delay = 1000, width = 100, height = 100 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /**
     * 계속 돌려야됨. 어떻게 돌릴것인가?
     * useEffect에서 dependency가 바뀔때마다 리렌더링하면서 useEffect를 다시 호출한다.
     * 결과적으로 계속 갱신되면서 바뀜.
     * */
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setCount((cnt) => {
          if (cnt === image_array.length - 1) {
            return 0;
          } else {
            return cnt + 1;
          }
        }),
      delay
    );

    return () => clearTimeout(timeout);
  }, [count, image_array, delay]);

  return (
    <div>
      <Image
        count={count}
        url={image_array[count]}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Gif;
