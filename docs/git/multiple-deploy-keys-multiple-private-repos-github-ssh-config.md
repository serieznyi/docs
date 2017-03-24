# How to configure multiple deploy keys for different private github repositories on the same computer without using ssh-agent

[Взято отсюда](https://gist.github.com/gubatron/d96594d982c5043be6d4)

Let's say `alice` is a github.com user, with 2 or more private repositories `repoN`.
For this example we'll work with just two repositories named `repo1` and `repo2`

`https://github.com/alice/repo1`

`https://github.com/alice/repo2`

You need to be to pull from these repositories without entering a passwords probably on a server, or on multiple servers.
You want to perform `git pull origin master` for example, and you want this to happen without asking for a password.

You don't like dealing with ssh-agent, you have discovered (or you're discovering now) about `~/.ssh/config` a file that let's your ssh client know what private key to use depending on Hostname and username, with a simple configuration entry that looks like this:

```
Host github.com
  HostName github.com
  User git
  IdentityFile /home/alice/.ssh/alice_github.id_rsa
  IdentitiesOnly yes
```

So you went ahead and created your `(alice_github.id_rsa, alice_github.id_rsa.pub)` keypair, you then also went to your repository's `.git/config` file and you modified the url of your remote `origin` to be something like this:

```
[remote "origin"]
        url = "ssh://git@github.com/alice/repo1.git"
```

And finally you went to the repository `Settings > Deploy keys` section and added the contents of `alice_github.id_rsa.pub`

At this point you could do your `git pull origin master` without entering a password without issue.

### but what about the second repository?

So your instinct will be to grab that key and add it to `repo2`'s Deploy keys, but github.com will error out and tell you that the key is already being used.

Now you go and generate another key (using `ssh-keygen -t rsa -C "alice@alice.com"` without passwords of course), and so that this doesn't become a mess, you will now name your keys like this:

 - `repo1` keypair: `(repo1.alice_github.id_rsa, repo1.alice_github.id_rsa.pub)`
 - `repo2` keypair: `(repo2.alice_github.id_rsa, repo2.alice_github.id_rsa.pub)`

You will now put the new public key on `repo2`'s Deploy keys configuration at github.com, but now you have an ssh problem to deal with. 

### How can ssh tell which key to use if the repositories are hosted on the same `github.com` domain?

Your `.ssh/config` file points to `github.com` and it doesn't know which key to use when it's time to do the pull.

So I found a trick with github.com. You can tell your ssh client that each repository lives in a different github.com subdomain, in these cases, they will be `repo1.github.com` and `repo2.github.com`

So first thing is editing the `.git/config` files on your repo clones, so they look like this instead:

For repo1
```
[remote "origin"]
        url = "ssh://git@repo1.github.com/alice/repo1.git"
```

For repo2
```
[remote "origin"]
        url = "ssh://git@repo2.github.com/alice/repo2.git"
```

And then, on your `.ssh/config` file, now you will be able to enter a configuration for each subdomain :)

```
Host repo1.github.com
  HostName github.com
  User git
  IdentityFile /home/alice/.ssh/repo1.alice_github.id_rsa
  IdentitiesOnly yes

Host repo2.github.com
  HostName github.com
  User git
  IdentityFile /home/alice/.ssh/repo2.alice_github.id_rsa
  IdentitiesOnly yes
```

Now you are able to `git pull origin master` without entering any passwords from both repositories.

If you have multiple machines, you could copy the keys to each of the machines and reuse them, but I'd advise doing the leg work to generate 1 key per machine and repo. You will have a lot more keys to handle, but you will be less vulnerable if one gets compromised.