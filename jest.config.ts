import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  transform: {},
};

export default createJestConfig(customJestConfig);
