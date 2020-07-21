import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { longestPalindrome, isPalindrome, window } from "./1.ts";

Deno.test("#isPalindrome", () => {
  const result1 = isPalindrome("tomato");
  assertEquals(result1, false);

  const result2 = isPalindrome("baaab");
  assertEquals(result2, true);
});

Deno.test("#window", () => {
  const result1 = window("abc", 1);
  assertEquals(result1, ["a", "b", "c"]);

  const result2 = window("abc", 2);
  assertEquals(result2, ["ab", "bc"]);
});

Deno.test("Example 1", () => {
  const result = longestPalindrome("babad");
  assertEquals(result, "bab");
});

Deno.test("Example 2", () => {
  const result = longestPalindrome("cbbd");
  assertEquals(result, "bb");
});

Deno.test("Original", () => {
  const result1 = longestPalindrome("");
  assertEquals(result1, "");

  const result2 = longestPalindrome("ac");
  assertEquals(result2, "a");

  const result3 = longestPalindrome("abcd");
  assertEquals(result3, "a");

  const aa = longestPalindrome(
    "cyyoacmjwjubfkzrrbvquqkwhsxvmytmjvbborrtoiyotobzjmohpadfrvmxuagbdczsjuekjrmcwyaovpiogspbslcppxojgbfxhtsxmecgqjfuvahzpgprscjwwutwoiksegfreortttdotgxbfkisyakejihfjnrdngkwjxeituomuhmeiesctywhryqtjimwjadhhymydlsmcpycfdzrjhstxddvoqprrjufvihjcsoseltpyuaywgiocfodtylluuikkqkbrdxgjhrqiselmwnpdzdmpsvbfimnoulayqgdiavdgeiilayrafxlgxxtoqskmtixhbyjikfmsmxwribfzeffccczwdwukubopsoxliagenzwkbiveiajfirzvngverrbcwqmryvckvhpiioccmaqoxgmbwenyeyhzhliusupmrgmrcvwmdnniipvztmtklihobbekkgeopgwipihadswbqhzyxqsdgekazdtnamwzbitwfwezhhqznipalmomanbyezapgpxtjhudlcsfqondoiojkqadacnhcgwkhaxmttfebqelkjfigglxjfqegxpcawhpihrxydprdgavxjygfhgpcylpvsfcizkfbqzdnmxdgsjcekvrhesykldgptbeasktkasyuevtxrcrxmiylrlclocldmiwhuizhuaiophykxskufgjbmcmzpogpmyerzovzhqusxzrjcwgsdpcienkizutedcwrmowwolekockvyukyvmeidhjvbkoortjbemevrsquwnjoaikhbkycvvcscyamffbjyvkqkyeavtlkxyrrnsmqohyyqxzgtjdavgwpsgpjhqzttukynonbnnkuqfxgaatpilrrxhcqhfyyextrvqzktcrtrsbimuokxqtsbfkrgoiznhiysfhzspkpvrhtewthpbafmzgchqpgfsuiddjkhnwchpleibavgmuivfiorpteflholmnxdwewj"
  );

  console.log(aa);
});
