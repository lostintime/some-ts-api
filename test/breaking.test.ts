import { expect } from "chai"
import { SomeApi } from "../src"
import { SomeApi as SomeApiV1 } from "@lostintime/some-api-base"

describe("API", () => {
  describe("Breaking Changes", () => {
    it("didn't happen yet", () => {
      const useApi = (newApi: SomeApi): SomeApiV1 => newApi
      // This asertion is just to satisfy linter that useApi is used
      // Otherwise useApi signature is all we care about for version compatibility test
      expect(useApi).is.a("function")
    })
  })
})
