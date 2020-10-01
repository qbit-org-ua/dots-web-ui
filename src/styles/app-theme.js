import { createTitle } from "./helpers";

export const colorScheme = {
  backgroundColor:"#212529",
  sidebarColor:"#272B2F",
  headingColor: "#18A0FB",
  accentColor: "#E74D2B",
  textColor: "#E5E5E5",
  blockColor: "#272B2F",
  error: "#ff5757"
};

// backgroundColor: `linear-gradient(180deg, #1D1F3D 0%, #1B1C28 100%)`,
// sidebarColor: `linear-gradient(178.31deg, #282B4A 45.28%, #151832 91.79%)`,


// font-family: Nunito;
export const nunitoFont = {
  weights: {
    black: 900,
    regular: 400,
    light: 200,
  },
  sizes: {
    titleL: "33px",
    titleM: "24px",
    titleS: "20px",
    textL: "20px",
    textM: "",
    textS: "",
  },
};

export const appTitles = {
  h1: createTitle(
    colorScheme.headingColor,
    nunitoFont.sizes.titleL,
    nunitoFont.weights.black
  ),
  h2: createTitle(
    colorScheme.textColor,
    nunitoFont.sizes.titleM,
    nunitoFont.weights.black
  ),
  h3: createTitle(
    colorScheme.textColor,
    nunitoFont.sizes.titleM,
    nunitoFont.weights.regular
  ),
};
export const appText = {
  large: `color: ${colorScheme.textColor}; font-size: ${nunitoFont.sizes.textL}; text-align: justify; `,
  medium: ``,
  small: ``,
};
export const appButtons = {
  submit: `
    padding: 10px 30px;
    color: white; 
    background: #F45827;
    font-size: ${nunitoFont.sizes.titleS};
    border-style: none;
    cursor: pointer;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    `,
  submitFocus: `
    outline: none;
  `,
  submitHover: `
    background: linear-gradient(106.54deg, #FF3D00 17.76%, #F45827 61.45%);
  `,
};

export const appFields = {
  inputField: `
    background-color: transparent;
    border-style: none;
    border: none;
    border-bottom: 2px solid ${colorScheme.accentColor};
    color: ${colorScheme.textColor};
    font-size: 20px;
    `,
  inputFieldFocus: ` 
    outline: none;
    border-bottom: 3px solid ${colorScheme.accentColor};`,
};
