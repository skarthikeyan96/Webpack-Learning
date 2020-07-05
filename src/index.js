/**
 * CommonJS modules
 * module.exports -- Default export
 * exports.{function name or variable name} -- Named Export
 */
import "./css/main.css";

import name from "./nav";
import { red, blue } from "./footer";

import image from "./images/220px-Assassin's_Creed.jpg";
console.log(image);

console.log(name());
console.log(red);
console.log(blue);
