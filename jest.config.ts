import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  projects: [
    {
      testPathIgnorePatterns: ["<rootDir>/node_modules/"],
      preset: "ts-jest",
      displayName: "casa-de-adolescentes",
      testMatch: ["<rootDir>/services/casa-de-adolescentes/**/*.spec.ts"]
    },
    {
      testPathIgnorePatterns: ["<rootDir>/node_modules/"],
      preset: "ts-jest",
      displayName: "main-portal",
      testMatch: ["<rootDir>/services/main-portal/**/*.spec.ts"]
    }
  ]
}
export default config
