export function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  let i = s.length;

  while (true) {
    const ok = window(s, i).find((ss) => {
      return isPalindrome(ss);
    });

    if (ok) {
      return ok;
    }

    i -= 1;

    if (i <= 1) {
      break;
    }
  }

  return s[0] ? s[0] : "";
}

export function isPalindrome(s: string): boolean {
  let firstIndex = 0;
  let lastIndex = s.length - 1;

  while (firstIndex <= lastIndex) {
    if (s[firstIndex] !== s[lastIndex]) {
      return false;
    }

    firstIndex += 1;
    lastIndex -= 1;
  }

  return true;
}

export function window(s: string, length: number): string[] {
  let result: string[] = [];

  for (let i = 0; i + length <= s.length; i++) {
    result.push(s.slice(i, i + length));
  }

  return result;
}
