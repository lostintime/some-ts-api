import { expect } from "chai"
import { SomeApi } from "../src"
import { SomeApi as SomeApiV1 } from "@lostintime/some-api-base"

describe("API", () => {
  describe("Breaking Changes", () => {
    it("didn't happen yet", () => {
      const useApi = (newApi: SomeApi): SomeApiV1 => newApi
      // Breaking changes test is coming here, after first version is published
      expect(useApi).is.a("funtion")
    })
  })
})
