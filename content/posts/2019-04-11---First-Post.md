---
title: Starting your own dotfiles repository
date: '2016-09-01T23:46:37.121Z'
template: 'post'
draft: false
slug: '/posts/starting-dotfiles'
category: 'toolkit'
tags:
  - 'UNIX'
  - 'Developer toolkit'
description: 'Every developer should have one of these'
socialImage: '/media/image-2.jpg'
---

I'm going to talk you through why you should do this, and get you started with a basic setup that you can configure and extend to your hearts desire.

Dotfiles are text based configuration files for applicaitons, like vim, git etc. They are typically hidden from view if you browse using a file explorer like Dolphin, or Finder in MacOS. When you first setup your computer, all your applications will have default configurations, and typically are not as useful as they _could_ be.

Setting up a dotfiles repository allows your to sync configuration across all devices you use, automate a new computer setup and share your config with other users.

This becomes especially useful when you discover a shortcut or feature that requires editing a dotfile. For example, I use a few git specific aliases `$ s` for `$ git status`. Were it not for my dotfiles, I would need to manually edit my `$ ~/.zshrc` on my work laptop, home desktop and home laptop to get the same functionality across all my devices. With my dotfiles repo, I simply clone and run my install script to get this, along with a miriad of other personal settings that I use in my day to day workflow.

Lets get started...

### Create a dotfiles repostiory on Github

Pretty self-explanatory - [Head over to github.com](github.com) and create a new repo.

### Clone your new repo and add some basic functionality

This varies person to person, but I like to have an `install.sh` entry point, and then split OS specific things into their own subfolders. So a basic file structure might look something like this:

```
install.sh
  /os
    /macos
      install.sh
      .Brewfile
    /manjaro
      install.sh
```

In my dotfiles root folder, I include all my dotfiles (`.zshrc`, `.vimrc`), `gitconfig` and the entrypoint `install.sh`.

`install.sh` contains the basics, and anything common across UNIX OSs. So, start off with

```
DOTLOC=$HOME/repos/dotfiles
FUNPATH=/usr/local/share/zsh/site-functions

# install and configure macos packages
./os/macos/install.sh
./osmacos/configure.sh

# link required files
echo "Linking Files..."
for file in zshrc zshenv gitconfig gitignore nvimrc
do
  rm ~/.$file &>/dev/null
  ln -s "$DOTLOC/$file" ~/.$file
done
ln -s $(pwd)/init.vim ~/.config/nvim/init.vim

# cleanup old prompt files
if [[ -x $FUNPATH/prompt_pure_setup && -x $FUNPATH/async ]]; then
  rm -f $FUNPATH/prompt_pure_setup
  rm -f $FUNPATH/async
fi

# install ohmyzsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# change default shell to zsh
chsh -s zsh
```

![Nulla faucibus vestibulum eros in tempus. Vestibulum tempor imperdiet velit nec dapibus](/media/image-2.jpg)

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.

Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
