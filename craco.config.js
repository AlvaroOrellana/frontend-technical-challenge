const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Views": path.resolve(__dirname, "src/views"),
    },
  },
};
