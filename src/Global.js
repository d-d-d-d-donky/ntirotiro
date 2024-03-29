/* eslint-disable no-irregular-whitespace */
const RandExp = require("randexp");
const fetch = require("node-fetch");
const chalk = require("chalk");
const { Webhook } = require("discord-webhook-node");

const RAN_GEN_TOP = (length) => {
  if (!length) {
    return "";
  }

  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789×_-";
  // added 2 additional characters (possibly - and _) to the charset.
  let array;

  if ("Uint8Array" in this && "crypto" in this && length <= 65536) {
    array = new Uint8Array(length);
    this.crypto.getRandomValues(array);
  } else {
    array = new Array(length);

    for (let i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * 62);
    }
  }

  let result = "";

  for (let i = 0; i < length; i++) {
    result += possible.charAt(array[i] % 62);
  }

  return result;
};

const RAN_GEN_1 = (length) => {
  let txt = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789×";

  for (let i = 0; i < length; i++)
    txt += possible.charAt(Math.floor(Math.random() * possible.length));

  return txt;
};

const RAN_GEN_2 = (n, r = "") => {
  while (n--)
    r += String.fromCharCode(
      ((r = (Math.random() * 62) | 0), (r += r > 9 ? (r < 36 ? 55 : 61) : 48))
    );
  return r;
};

const RAN_GEN_Shuff = (v) => [...v].sort((_) => Math.random() - 0.5).join("");

const RAN_GEN_3 = (len) => {
  let str = "";
  for (let i = 0; i < len; i++) {
    let rand = Math.floor(Math.random() * 62);
    let charCode = (rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48);
    str += String.fromCharCode(charCode);
  }
  return str;
};

const RAN_GEN_Direct = new Array(24).join().replace(/(.|$)/g, function () {
  return ((Math.random() * 36) | 0)
    .toString(36)
    [Math.random() < 0.5 ? "toString" : "toUpperCase"]();
});

const RAN_GEN_Direct_C = new Array(16).join().replace(/(.|$)/g, function () {
  return ((Math.random() * 36) | 0)
    .toString(36)
    [Math.random() < 0.5 ? "toString" : "toUpperCase"]();
});

const possible =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789×";
const RAN_GEN_4 = [...Array(24)]
  .map((_) => possible[~~(Math.random() * possible.length)])
  .join("");

const RAN_GEN_4_C = [...Array(16)]
  .map((_) => possible[~~(Math.random() * possible.length)])
  .join("");

const RAN_REGEX = new RandExp(/^[0-9,a-z,A-Z]{24}$/).gen();

const RAN_REGEX_C = new RandExp(/^[0-9,a-z,A-Z]{24}$/).gen();

let E = [
  "🥳",
  "⚡",
  "🔨",
  "💘",
  "🔥",
  "🚀",
  "🎉",
  "🍰",
  "🎃",
  "🍔",
  "🍺",
  "🍼",
  "🌹",
  "🧐",
  "🤪",
  "🌀",
  "🌁",
  "😋",
  "😌",
  "😍",
  "😎",
  "😏",
  "🌈",
  "🌊",
  "🌛",
  "🌝",
  "🌞",
  "🌟",
  "🌠",
  "🌡️",
  "🌤️",
  "🌩️",
  "🌪️",
  "🌬️",
  "🌭",
  "🌮",
  "🌯",
  "🍑",
  "🌰",
];

let Welcome_txt = `            🇼​​​​​ 🇪​​​​​ 🇱 ​​​​​🇨​ ​​​​🇴​​​​​ 🇲​​​​​ 🇪
                🇹​​​​​ 🇴
        🇩​​​​​ 🇮​​​​​ 🇸​​​​​ 🇨 ​​​​​🇴​​​​​ 🇷​​​​​ 🇩​​​​​  🇳​​​​​ 🇮​​​​​ 🇹 ​​​​​🇷​​​​​ 🇴
          🇬​​​​​ 🇪​​​​​ 🇳​​​​​ 🇪​​​​​ 🇷​​​​​ 🇦​​​​​ 🇹​​​​​ 🇴​ 🇷\n\n`;

let Credit_txt = `Made by ${chalk.blue("♔ Dяεαмү アlαүεя ♔")} With ❤️\n\n`;
let Discord = `Need help? ${chalk
  .hex("#5865F2")
  .bold("Join Our Discord")} \n${chalk.blue.bold(
  "https://discord.gg/CNAJfbs5dn\n\n"
)}`;

let Welcome = Welcome_txt + Credit_txt + Discord;

module.exports = {
  fetch,
  chalk,
  RAN_GEN_TOP,
  RAN_GEN_1,
  RAN_GEN_2,
  RAN_GEN_3,
  RAN_GEN_4,
  RAN_GEN_Direct,
  RAN_GEN_Shuff,
  RAN_REGEX,
  RAN_GEN_4_C,
  RAN_REGEX_C,
  RAN_GEN_Direct_C,
  E,
  Webhook,
  Welcome,
};
