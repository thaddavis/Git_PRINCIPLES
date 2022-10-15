# SHA-1 and zlib compression

In short...

the "random" 38 character filename comes from the hash value of an object's data

If you are unfamiliar with the concept of hashing, here is a quick rundown of what "hashing" or "a hash function" is all about...

DEFINITION: A hash function is a list of instructions performed on an arbitrary chunk of data that deterministically results in (or outputs) a unique value of a fixed length

The hash function used by Git is called __SHA-1__

I found a standalone implementation of SHA-1 written by a developer named Sam Wheeler and we can take a quick look at it to get a better feel for how hashing works.

--Play with SHA-1---

///

Because Git uses a hash function for storing the state of our project, it means that project files and sub-folders will never be duplicated regardless of how many snapshots we take.

For example, let's say that we take a snapshot of our project one week from now and then take another snapshot one month from now. If most of the files and sub-folders are unchanged between the two snapshots, then the objects in each snapshot will be for the most part identical and almost no new objects will be added to the database.

In effect, this means that Git is only storing the differences between new and existing data as new snapshots are taken.

The ultimate effect of this design is that Git becomes extremely efficient at storing long histories of project development. I have worked on some projects that have used Git to track 7, 8, 9, 10+ years of project history and it always baffled me how I could be downloading so much history in such a short amount of time until I understood the internals of how Git's database works.

Now let me quickly show you why the contents of the objects look so cryptic...

The reason why is because snapshot data is not stored in its raw format but is stored in a compressed format.

The compression algorithm that Git uses is called zlib

In this code snippet we can see the e2e process of how objects are created by Git.

Check out: `demos/create_blob_from_scratch` and add created objects to dummy project and test

For the final little stretch of th video, I would like to explain .pack files.

When you look at real-world Git projects and analyze the .git database you will begin seeing less objects and more pack files. Pretty much what is happening is Git is analyzing your objects for repetitive data and storing your object data in a format that reduces duplication aka .pack files

.pack files contain all the original object data but stored in a more compact format

Git periodically will run the "pack" process `git gc` on your database (for example after every 1000 snapshots or after each time you share snapshots with others using built in Git commands like `git push`)

- you can unpack objects with the following command...
`cat pack-d3042e2f432d41bf8db0357b007179d060c3f492.pack | git unpack-objects`

SOURCE: **Chapter 10 of Pro Git by Scott Chacon and Ben Straub** - `https://git-scm.com/book/en/v2/Git-Internals-Git-Objects`

SOURCE: **Sam Wheeler's Github** - `https://github.com/sbwheeler`