# Step 1

first clone a copy of the git git repository into this folder (yes the git git repo)...

```git clone git://git.kernel.org/pub/scm/git/git.git```

## Group commits by author by year

- run the `./contributors_by_year.sh` script

## Analyze the line counts for the top 3 all-time contributors

- must be ran in the git git repo (yes the git git repo)

1) ```git log --shortstat --author "Junio C Hamano" --since "April 1 2005" --until "now" | grep "files\? changed" | awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed", files, "lines inserted:", inserted, "lines deleted:", deleted}'```

files changed 15531 lines inserted: 243198 lines deleted: 98577 (inserted - deleted = 144,621)

At the time of recording, Hamano has contributed ~3.6x more lines of code to Git than the next biggest all-time contributors as measured by commit count: Jeff King & Johannes Schindelin

and ~6x more lines of code to Git than Torvalds himself

2) ```git log --shortstat --author "Jeff King" --since "April 1 2005" --until "now" | grep "files\? changed" | awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed", files, "lines inserted:", inserted, "lines deleted:", deleted}'```

files changed 8304 lines inserted: 78893 lines deleted: 40235 (inserted - deleted = 38,658)

3) ```git log --shortstat --author "Johannes Schindelin" --since "April 1 2005" --until "now" | grep "files\? changed" | awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed", files, "lines inserted:", inserted, "lines deleted:", deleted}'```

files changed 4905 lines inserted: 71998 lines deleted: 32425 (inserted - deleted = 39,573)

SOURCE: `https://peff.net/peff/`
SOURCE: `https://github.com/dscho?tab=overview`

WHY NOT?!) ```git log --shortstat --author "Linus Torvalds" --since "April 1 2005" --until "now" | grep "files\? changed" | awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed", files, "lines inserted:", inserted, "lines deleted:", deleted}'```

files changed 2517 lines inserted: 43156 lines deleted: 19130 (inserted - deleted = 24,026)

## LINES CONTRIBUTED SUMMARY

JUNIO HAMANO
15,531 files changed & 144,621 active lines contributed

JEFF KING
8,304 files changed & 38,658 active lines contributed

JOHANNES SCHINDELIN
4,905 files changed & 39,573 active lines contributed

LINUS TORVALDS
2,517 files changed & 24,026 active lines contributed

``` .txt
At the time of recording...

Hamano has contributed ~3.6x more lines of code than the next largest all-time commit contributors (Jeff King & Johannes Schindelin)

and ~6x more lines of code than Torvalds himself
```
