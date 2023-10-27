![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/git/git1.png?raw=true)

## Stash

stash is a internal memory , save uncommitted, unstaged changes

- git stash
  -git stash -u (stash including not tracked before)
- git stash list
- git stash apply
- git stash pop
- git stash push -m "with a message"
- git stash pop 0|1 exct // will pop up the specific index of stash list
- git stash drop 0|1 exct // will drop specific index of stash from the list
- git stash clear // clear all the stash list

Log

- git reflog
  is a kind of snapshot of every action of our git history ,and it will save up to 40days(..). like , when we use the git reset hard command ,we lost commit id as well and by using git log we cannot see it .
- git log
  Git pull
- git pull
  Cases where there is no conflict , we do not need to do nothing
  Conflict
  git pull -> solve the conflict ->git add . -> git commit -> git push

Merge Rebase

![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/git/git2.png?raw=true)

![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/git/git3.png?raw=true)

## Git cherry pick

![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/git/git4.png?raw=true)

Reference

- https://juejin.cn/post/7131713973572861966#heading-30

- https://juejin.cn/post/6875641849646678023
