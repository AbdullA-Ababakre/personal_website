---
sidebar_position: 1
---

Web 页面至少由 HTML、CSS 和 JavaScript 三个部分构成，其中 HTML 会经过 HTML Parser 将 HTML 结构转换成**DOM Tree**；CSS 会经过 CSS Parser 将 CSS 转换成**CSSOM Tree**，正如下图所示：

https://ssqphnzv7a.feishu.cn/space/api/box/stream/download/asynccode/?code=NmY0NzhhM2U2Y2ViZWMzODM4OGIxMjk3ZTk0MTMyNmZfbGZFNHFRZU05bUVqeVl5SGl0Vm1sT2ZNY1VsUjNRd01fVG9rZW46Ym94Y25iZ21UNDBhdXVoanlteVo0bG1WeFc0XzE2OTIwNDkyMTc6MTY5MjA1MjgxN19WNA

DOM 树和 CSSOM 树将会构建出渲染树：

https://ssqphnzv7a.feishu.cn/space/api/box/stream/download/asynccode/?code=NTFhOGEzNTg1YzMwODc2YzFkZjExNzNkZDc5NjJjMjFfQW5xZk1TZXB1Y2U3WUN0SWJzUGhzM1ljVjRMVnQwR0xfVG9rZW46Ym94Y25GUDZqcFF6eUw4WlBlaUZvTXZJYWdVXzE2OTIwNDkyMTc6MTY5MjA1MjgxN19WNA

最终经过几个过程就渲染出我们所能看到的 Web 页面：

https://ssqphnzv7a.feishu.cn/space/api/box/stream/download/asynccode/?npmcode=ZTI5MWViOTkwNzM1NzE0OTI5Mjg0ODNjNjc0MWI3MThfWjBvZ3I4SlhveUtVWmJpM3Zza3BnekFwQ3hCekxORDZfVG9rZW46Ym94Y25HT1llOWVJOUpNZWRHb0t3MUJDTDlnXzE2OTIwNDkyMTc6MTY5MjA1MjgxN19WNA

如果再把 AOM（可访问树）引入起来的话，大致就像下图这样：

https://ssqphnzv7a.feishu.cn/space/api/box/stream/download/asynccode/?code=MTY4ZGQ5YzhhMzEyMzQ0M2FiMDcxMGFjMTIzMmY3NTFfVlhuS28welpGV1hObkxSeDlwdjJ6OHlEd2VsVEd0YUdfVG9rZW46Ym94Y25ETW9oSWN5SzRnVERxc0E5cjRmZk1jXzE2OTIwNDkyMTc6MTY5MjA1MjgxN19WNA
