import * as Font from "expo-font";
import { useState } from "react";

/*** 폰트 로드 * 비동기이기 때문에 폰트 로딩 후 렌더링 */
export const loadingFont = async () => {
  await Font.loadAsync({
    BlackHanSans: require("../assets/fonts/BlackHanSans-Regular.ttf"),
    NanumPen: require("../assets/fonts/NanumPenScript-Regular.ttf"),
    BlackOpsOne: require("../assets/fonts/BlackOpsOne-Regular.ttf"),
  });
};
