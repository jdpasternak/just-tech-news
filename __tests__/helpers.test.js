const { format_date, format_plural, format_url } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2022-02-01 14:20:00");

  expect(format_date(date)).toBe("2/1/2022");
});

test("format_plural() returns a word pluralized based on a word and an amount passed to it", () => {
  const word1 = "tiger";
  const amount1 = 2;

  const word2 = "lion";
  const amount2 = 1;

  expect(format_plural(word1, amount1)).toBe("tigers");
  expect(format_plural(word2, amount2)).toBe("lion");
});

test("format_url() returns a simplified url string", () => {
  const url1 = format_url("http://test.com/page/1");
  const url2 = format_url("https://www.coolstuff.com/abcdefg/");
  const url3 = format_url("http://www.google.com?q=hello");

  expect(url1).toBe("test.com");
  expect(url2).toBe("coolstuff.com");
  expect(url3).toBe("google.com");
});
