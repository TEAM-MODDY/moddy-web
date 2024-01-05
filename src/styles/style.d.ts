import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      ModdyBlue: string;
      ModdyBlue2: string;
      ModdyBlue3: string;
      ModdyBlue4: string;
      ModdySky: string;
      ModdyPurple: string;
      ModdyBk: string;
      ModdyWt: string;
      ModdyGray100: string;
      ModdyGray50: string;
      ModdyGray20: string;
      ModdyGray10: string;
      ModdyGray05: string;
    };
    fonts: {
      Title01: SerializedStyles;
      Title02: SerializedStyles;
      Title03: SerializedStyles;
      Title04: SerializedStyles;
      Headline01: SerializedStyles;
      Headline02: SerializedStyles;
      Headline03: SerializedStyles;
      Headline04: SerializedStyles;
      Body01: SerializedStyles;
      Body02: SerializedStyles;
      Body02_En: SerializedStyles;
      Body03: SerializedStyles;
      Body04: SerializedStyles;
      Caption01: SerializedStyles;
      Caption02: SerializedStyles;
      Caption03: SerializedStyles;
      Caption03_En: SerializedStyles;
    };
  }
}
