module.exports = {
  extends: "airbnb-base",
  rules: {
    "no-plusplus": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "no-self-assign": "off",
    "no-mixed-operators": "off",
    "no-shadow": "off"
  },
  env: {
    node: true,
    jasmine: true
  }
};
