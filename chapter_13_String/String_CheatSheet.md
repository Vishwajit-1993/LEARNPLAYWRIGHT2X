# JavaScript String Methods — Cheat Sheet

Quick reference for **string properties**, **instance methods** (`str.method()`), and **static methods** (`String.method()`).

> Strings are **immutable** — methods return a **new** string; the original does not change.

---

## Property

| Method / Property | One-line example | Output / Result |
|-------------------|------------------|-----------------|
| `length` | `"Hello".length` | `5` |

---

## Access Character

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| Bracket `[index]` | `"Hello"[0]` | `"H"` |
| `charAt(index)` | `"Hello".charAt(1)` | `"e"` |
| `charCodeAt(index)` | `"A".charCodeAt(0)` | `65` |
| `at(index)` | `"Hello".at(-1)` | `"o"` (supports negative index) |
| `String.fromCharCode(...codes)` | `String.fromCharCode(72, 105)` | `"Hi"` |

---

## Search & Check

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| `indexOf(substring)` | `"hello".indexOf("l")` | `2` (first match index) |
| `lastIndexOf(substring)` | `"hello".lastIndexOf("l")` | `3` (last match index) |
| `includes(substring)` | `"hello".includes("ell")` | `true` |
| `startsWith(substring)` | `"https://".startsWith("https")` | `true` |
| `endsWith(substring)` | `"test.js".endsWith(".js")` | `true` |
| `search(regex)` | `"item-42".search(/\d+/)` | `5` (pattern match index) |
| `match(regex)` | `"test123".match(/\d+/)` | `["123"]` |
| `matchAll(regex)` | `[..."a1b2".matchAll(/\d/g)]` | `[["1"], ["2"]]` |

**Note:** `indexOf` = literal **substring** · `search` = **regex pattern**

---

## Extract Substring

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| `substring(start, end)` | `"Login_Test".substring(0, 5)` | `"Login"` (end not included) |
| `slice(start, end)` | `"Login_Test".slice(6)` | `"Test"` (supports negative index) |
| `substr(start, len)` | `"Hello".substr(1, 3)` | `"ell"` (legacy — avoid in new code) |

---

## Transform & Clean

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| `toUpperCase()` | `"pass".toUpperCase()` | `"PASS"` |
| `toLowerCase()` | `"FAIL".toLowerCase()` | `"fail"` |
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | `"  hi  ".trimStart()` | `"hi  "` |
| `trimEnd()` | `"  hi  ".trimEnd()` | `"  hi"` |
| `replace(old, new)` | `"FAIL".replace("FAIL", "PASS")` | `"PASS"` (first only) |
| `replaceAll(old, new)` | `"a-a".replaceAll("-", "_")` | `"a_a"` (all matches) |
| `replace(regex, new)` | `"a1b2".replace(/\d/g, "X")` | `"aXbX"` |
| `repeat(count)` | `"*".repeat(3)` | `"***"` |
| `padStart(len, char)` | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(len, char)` | `"5".padEnd(3, "0")` | `"500"` |
| `normalize()` | `"café".normalize("NFC")` | normalized Unicode string |

---

## Concat & Split

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| `+` operator | `"Hello" + " " + "World"` | `"Hello World"` |
| `concat(...strings)` | `"Hello".concat(" ", "World")` | `"Hello World"` |
| `split(separator)` | `"Pass,Fail,Skip".split(",")` | `["Pass", "Fail", "Skip"]` |

---

## Compare

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| `localeCompare(other)` | `"b".localeCompare("a")` | `1` (sort order: -1, 0, 1) |

---

## String ↔ Number Conversion (common with strings)

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| `Number(str)` | `Number("123.45")` | `123.45` |
| `parseInt(str, radix)` | `parseInt("123.45", 10)` | `123` |
| `parseFloat(str)` | `parseFloat("123.45")` | `123.45` |
| `num.toString()` | `(123).toString()` | `"123"` |
| `String(value)` | `String(true)` | `"true"` |
| `+ ""` (coercion) | `123 + ""` | `"123"` |

---

## Template & Static Helpers

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| `` `Hello ${name}` `` | `` `Hi ${"Dev"}` `` | `"Hi Dev"` |
| `String.raw`...`` | `` String.raw`Line\nTwo` `` | `"Line\\nTwo"` (literal `\n`) |
| `String.fromCodePoint()` | `String.fromCodePoint(128512)` | emoji character |

---

## ES2023+ (Unicode safety)

| Method | One-line example | Output / Result |
|--------|------------------|-----------------|
| `isWellFormed()` | `"abc".isWellFormed()` | `true` |
| `toWellFormed()` | `"abc".toWellFormed()` | `"abc"` |

---

## Playwright / QA — Quick picks

| Task | Method | Example |
|------|--------|---------|
| Check URL | `startsWith` | `url.startsWith("https://")` |
| Check file type | `endsWith` | `file.endsWith(".png")` |
| Find text on page | `includes` | `text.includes("Welcome")` |
| Clean input | `trim` | `username.trim()` |
| Parse CSV-like data | `split` | `"a,b,c".split(",")` |
| Replace locator text | `replace` | `"btn-1".replace("1", "2")` |
| Status check | `toLowerCase` | `status.toLowerCase() === "pass"` |

---

## indexOf vs search vs includes

| | **indexOf** | **search** | **includes** |
|---|-------------|------------|--------------|
| Input | Substring (text) | Regex (pattern) | Substring (text) |
| Returns | Index or `-1` | Index or `-1` | `true` / `false` |
| Example | `"abc".indexOf("b")` → `1` | `"a1".search(/\d/)` → `1` | `"abc".includes("b")` → `true` |

---

## substring vs slice

| | **substring** | **slice** |
|---|---------------|-----------|
| Negative index | Treated as `0` | Counts from end |
| Example | `"hello".substring(1, 4)` → `"ell"` | `"hello".slice(-2)` → `"lo"` |

---

## Files in this chapter

| File | Topic |
|------|-------|
| `119_String1.js` | `length`, `[0]`, `at()`, `charAt()`, case change |
| `120_StringSearch.js` | `includes`, `startsWith`, `endsWith`, `indexOf`, `search` |
| `121_Substring.js` | `substring()` |
| `122_Transform_str.js` | `trim`, `replace`, `replaceAll`, `concat`, `split` |
| `123_stringConversion.js` | String ↔ number conversion |
| `188_String.js` | String overview |

---

**Vishwajit Patil — LearnPlaywright2X**
