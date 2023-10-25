var Config = Config || {};

/* version */ 
Config.baseurl = "/Static-Showdown-Dex/"
const ResourcePrefix = Config.baseurl+"images/"

if (typeof window === "undefined") {
  global.window = global;
} else {
  window.exports = window;
}