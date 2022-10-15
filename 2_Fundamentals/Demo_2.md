# The objects in the database

What I will now show you was taken from a book by Scott Chacon and Ben Straub called `Pro Git`...

Let's start by introducing two commands that will allow us to inspect objects in our database...

```.sh
git cat-file -p <HASH>
git cat-file -t <HASH>
```

Let's inspect the first object we see in the database...

We get the hash of the object by copying the object filename and prepending it with the 2 letters of the folder in which it is stored...

```.sh
git cat-file -p 77af27a090bae5e489cd80ff65023bc2acccbd6f
git cat-file -t 77af27a090bae5e489cd80ff65023bc2acccbd6f

We can run these commands to learn more about the object we are inspecting...

Let's now run these cat-file commands on the remaining objects in our database...

git cat-file -p bede47a642df341f8bca67d3078fcaddb145fcd6
git cat-file -t bede47a642df341f8bca67d3078fcaddb145fcd6

git cat-file -p c1b9bd6552d5f709ba9b987c6bf08dfaabfd8c5c
git cat-file -t c1b9bd6552d5f709ba9b987c6bf08dfaabfd8c5c
```

Here is where we inspected the first object
Here is where we inspected the 2nd object
and here is where we inspected the 3rd object

Each time a snapshot is taken of our project ONE commit object will be created as a byproduct

A "commit" is a fancy way of saying "a snapshot of our project".

...

These 3 object types (blobs, trees, and commits) can be used to rebuild the state of our project at any point in time.

If any project were to have more files and folders, then these 3 object types would still be able to describe project state at any point in time.

Most of the objects you will find in a Git database are either blobs, trees, or commits...

There is only one other type of object stored in the database and that 4th and final object type is the tag object

To be exhaustive, let's quickly create a tag object to make sure we understand the concept of tags...

```.sh
git tag -a original_list -m "My first official list"
git cat-file -p <TAG_OBJECT_HASH>
git cat-file -t <TAG_OBJECT_HASH>
```

Tags are human friendly names for snapshots (or commits)

The tag we just made gives us a human-friendly name for referencing the state of our project at a particular point in time.

Let's say, hypothetically, that I updated this list of my all-time 3 favorite songs every month for the next 10 years. 10 years from now, I could use the tags I created along the way to inspect what my list looked like at different points in time.

We could always use the "random" commit id to reference the state of our projects, but a human-friendly name is much more intuitive than a "random" series of 40 characters.

So now that we've seen examples of all the object types stored in the database, let's summarize our findings...

__Git stores all the SNAPSHOTS of our project in a local database__
__This database stores all snapshots via 4 object types__
__blobs - are how file contents are stored__
__trees - are how folders are stored__
__commits - are how snapshots are stored (commits are comprised of blobs and trees)__
__tags - are human-friendly names for snapshots (aka commits)__
__These 4 object types can be combined to rebuild the state of any project at any point in time__

Coming up next is the 3rd and final demo of this video where we learn how the random 38 character object filenames are generated and why their contents look so cryptic

SOURCE: **Chapter 10 of Pro Git by Scott Chacon and Ben Straub** - `https://git-scm.com/book/en/v2/Git-Internals-Git-Objects`
