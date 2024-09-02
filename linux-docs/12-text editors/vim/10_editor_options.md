# Change editor options

We can customize the behavior and appearance of the editor by changing various settings and options.

you can use it to enable or disable features, adjust formatting, and modify the way vim operates

# Commonly used options

## Show line numbers

Enable line numbers

```
:set number
```

Disable line numbers

```
:set nonumber
```

## Case-Insensitive Search

Enable Case-Insensitive Search:

```sh
:set ignorecase
```

Disable Case-Insensitive Search:

```sh
:set noignorecase
```

Make Search Case-Sensitive Only If Uppercase Letters Are Used:

```sh
:set smartcase
```

# Saving Settings Permanently

If you want to make these settings permanent, you can add the desired `:set` commands to your `.vimrc` file (located in your home directory, e.g., `~/.vimrc`):

```vim
" Example .vimrc
set number " Show line numbers
set relativenumber " Show relative line numbers
set tabstop=4 " Set tab width to 4 spaces
set shiftwidth=4 " Set shift width to 4 spaces
set expandtab " Use spaces instead of tabs
set ignorecase " Ignore case in search
set smartcase " Make search case-sensitive if uppercase letters are used
set hlsearch " Highlight search results
set showcmd " Show command in the status line
set wrap " Enable line wrapping
```
