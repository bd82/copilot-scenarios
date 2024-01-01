import { semverIsStatic } from "./semver-is-static.mjs";
import { expect } from "chai";

// TODO: implement some tests

describe("semverIsStatic", () => {
  describe("when the version is a range, should return false", () => {
    it("for ^1.0.0", () => {
      const version = "^1.0.0";
      const actual = semverIsStatic(version);
      expect(actual).to.be.false;
    });

    it("for ~1.0.0", () => {
      const version = "~1.0.0";
      const actual = semverIsStatic(version);
      expect(actual).to.be.false;
    });

    it("for 1.0.0 - 2.0.0", () => {
      const version = "1.0.0 - 2.0.0";
      const actual = semverIsStatic(version);
      expect(actual).to.be.false;
    });

    it("for 1.0.0 || 2.0.0", () => {
      const version = "1.0.0 || 2.0.0";
      const actual = semverIsStatic(version);
      expect(actual).to.be.false;
    });
  });

  describe("when the version is static, should return true", () => {
    it("for 1.0.0", () => {
      const version = "1.0.0";
      const actual = semverIsStatic(version);
      expect(actual).to.be.true;
    });

    it("for v4.3.0", () => {
      const version = "v4.3.0";
      const actual = semverIsStatic(version);
      expect(actual).to.be.true;
    });

    it("for =1.0.0", () => {
      const version = "=1.0.0";
      const actual = semverIsStatic(version);
      expect(actual).to.be.true;
    });

    it("for =v1.0.0", () => {
      const version = "=v1.0.0";
      const actual = semverIsStatic(version);
      expect(actual).to.be.true;
    });

    it("for =1.0.0-rc.1", () => {
      const version = "=1.0.0-rc.1";
      const actual = semverIsStatic(version);
      expect(actual).to.be.true;
    });
  });
});
