# Overview of .git

- I have created a demo project (or folder) called `tracks` that holds a `songs.txt` file with my 3 all-time favorite songs listed inside of it

```.txt
1. Last Last - Burna Boy
2. What What - Samwell
3. Bohemian Rhapsody - Queen

```

Assuming you have Git installed, the way you would start tracking how this list changes over time is with this command...

- `git init`

If we now look at our project, we see that Git has added a .git folder at the root

I will now briefly explain what each of the files and sub-folders in the .git folder are for...

.git/
    hooks/ -> custom scripts that will be triggered at different points when using git
    info/ -> you will find high-level information about your project
    objects/ -> this is where all the snapshots of your project will be stored aka this is the database I was referring to
    refs/ -> is where human-friendly names of our snaphots are stored (refs is short for references)
    config -> is a file you can use for configuring the way Git will interact with your project
    description -> can hold a text description about our project
    HEAD -> where we specify the active snapshot of the project

Ok...

Now that we've had an overview of the .git folder, let's look closer at the database...

If we look in the database we see empty folders (we see nothing). And this is because we have not yet taken a snapshot of our project. The commands I will now write may seem bizzare, but all they are doing is taking a snapshot of the project.

- $ git status
- $ git add -A
- $ git commit -m "Initial Snapshot"
- $ git log

We've taken our first snapshot and now let's look at the database again...

We should now see more folders in the database, particularly folders named with 2 characters that hold files named with a random series of 38 characters. These files are where your snapshot has been stored.

In the next demo, we will take a closer look at these database files (or objects)!
