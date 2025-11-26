module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "react-app",
    "react-app/jest",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },

  overrides: [
    // Unit testit
    {
      files: ["tests/**/*.spec.js"],
      parserOptions: {
        sourceType: "module",
      },
      env: {
        node: true,
      },
      rules: {
        "testing-library/prefer-screen-queries": "off",
        "testing-library/no-render-in-setup": "off",
        "testing-library/await-async-utils": "off",
      },
    },
    {
      files: ["src/**/*.jsx"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
  },
};
