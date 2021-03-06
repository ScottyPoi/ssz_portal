"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./styles/styles.css");
const App_1 = __importDefault(require("./App"));
react_dom_1.default.render(<App_1.default></App_1.default>, document.querySelector("#root"));
