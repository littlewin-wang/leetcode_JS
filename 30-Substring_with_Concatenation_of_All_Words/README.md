## 30. Substring with Concatenation of All Words

You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).

### 分析

- 理清题意，输出所有subStr的index，subStr满足条件是words里的所有词汇集合，顺序不一定
- 优化遍历终止条件，遍历的结束并非s的终点 
- 遍历中，每次取词符合条件则进入isValid函数判断
- isValid函数判断取出来subStr是否为words的乱序集合