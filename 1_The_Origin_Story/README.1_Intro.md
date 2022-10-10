# Intro

Git was initially developed by **Linus Torvalds** starting in 2005.

(INSERT **Linus/Linux Pronunciation**)

At the time, **Torvalds** was being sent code snippets from people around the world voluntarily helping him build Linux.

For those who don't know, Linux is a free operating system.

**Torvalds** was being overwhelmed by the volume of contribution and he needed a tool for reviewing and editing the code he was receiving as well as tracking who they came from, why they were sent, and when they arrived.

Initially, **Torvalds** used a software called Bitkeeper to solve this problem, but, after several years of using Bitkeeper, he decided to create his own "Version Control System" (VCS).

On April 6th, 2005, **Torvalds** announced on the Linux mailing list that he would be taking a week off from working on Linux to develop an alternative to Bitkeeper. His announcement piqued the interest of hundreds of developers around the world and in less than 2 weeks, a team had organically assembled to build this "new and improved" VCS.

One of the first people who reached out to **Torvalds** after his announcement was a Japanese developer living in Los Angeles named **Junio Hamano**.

**Hamano** began contributing code to the Git project 1 week after **Torvalds** announcement and a few short months thereafter, **Hamano** took over the maintenance of the project as **Torvalds'** expressed long-term interest was not in developing Git, but returning to developing Linux ASAP.

I now present EXHIBIT A...

Here is the earliest commit history for Git and you can see that **Torvalds** worked by himself for about 2 weeks before a cast of others joined in : )

I now present EXHIBIT B...

In this chart, I have graphed which developers have contributed the most commits to Git's history and you can see that **Hamano** is by far one of the leading contributors as measured by commit count

Another metric for measuring contribution would be "lines of code contributed" and we can see by the output of the following commands that **Hamano** has contributed at least 3.6x more lines of code than each of the other top contributors and more than 6x more lines of code to Git than **Torvalds** himself..

So YES, **Linus Torvalds** appears to have created Git but **Junio Hamano's** long term contributions are noteworthy as well...

DEMO: Check out the script for scraping **Hamano's** contributions to Git's source code in `demo/contributors_by_year`

SOURCE: **Earliest commits to the Git project** - `https://git.kernel.org/pub/scm/git/git.git/log/?ofs=68100`
SOURCE: **Junio C Hamano interviewed by Jeremy Allison** - `https://www.youtube.com/watch?v=qs_xS1Y6nGc`
SOURCE: **Linus Torvalds first announcement about Git** - `https://marc.info/?l=linux-kernel&m=111280216717070&w=2`
SOURCE: **Linus/Linux Pronunciation** `https://www.youtube.com/watch?v=5IfHm6R5le0&t=3s`
SOURCE: **Hamano's LinkedIn profiled** `https://www.linkedin.com/in/gitster/`