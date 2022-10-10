#!/bin/zsh

cd git
for i in {2005..2022}
    do
        echo "Year is: $i"
        nextYear=$((i+1))
        echo "Next year is: $nextYear"
        git shortlog -sn --branches master --no-merges \
        --since="01 Jan $i" --before="01 Jan $nextYear" | head -30 \
        > ../commitsByYear/$i.txt        
done
