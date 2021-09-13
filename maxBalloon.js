/* Maximum Number of Balloons
Given a string text, you want to use the characters of text to form as many
instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of
instances that can be formed.
Example 1:
Input: text = "nlaebolko"
Output: 1
Example 2:
Input: text = "loonbalxballpoon"
Output: 2
Example 3:
Input: text = "leetcode"
Output: 0 */


const maxBalloons = (str) => {
  let map = {
    'b': 0,
    'a': 0,
    'l': 0, //need two l's
    'o': 0, //need two o's
    'n': 0,
  };

  for (let i = 0; i < str.length; i++) {

    if (map[str[i]] !== undefined) {
      map[str[i]]++;
    }
  }

  let min = +Infinity;

  for (const key in map) {
    let singleLetter = key === 'b' || key === 'a' || key === 'n';
    let doubleLetter = key === 'o' || key === 'l';

    if (singleLetter && map[key] === 0 || doubleLetter && map[key] === 1) {
      return 0;
    }

    if (doubleLetter) {
      map[key] = Math.floor(map[key] / 2);
    }

    if (min > map[key]) {
      min = map[key];
    }
  }

  return min;
}



console.log(maxBalloons('nlaebolko')); //1
console.log(maxBalloons('loonbalxballpoon')); //2
console.log(maxBalloons('krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw')); //10

console.log(maxBalloons('balllllllllllloooooooooon')) //1