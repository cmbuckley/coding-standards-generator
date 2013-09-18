# Coding Standards Generator


## Configuration Options

### Encoding

The character encoding for files. Defaults to `"utf8"`.

### Format

The format of the line endings. Valid options are `"unix"`, `"windows"` and `"mac"`. The default is `"unix"`.

### Indentation

Defines how code should be indented. The `character` may be `"space"` or `"tab"`, and the `count` is a positive integer. The default is 4 spaces.

### Braces

This defines the indentation and placement of braces. The options are `"k&r"`, `"otb"`, `"allman"` and `"whitesmiths"`. The default is `"otb"`.

### Variables

This defines the naming conventions for variables:

* `hungarian` controls the use of Hungarian notation. The default is `false`.
* `style` defines the type of separator for variables consisting of multiple words. The options are `"camel"` or `"underscore"`. The default is `"camel"`.
* `privacy` controls the recommendation to prepend private/protected functions and variables with an underscore or similar. The default is `false`.

### Structures

This defines the placement of whitespace and characters in control structures. By default, no whitespace will be inserted.

Each individual control structure (`if`, `for`, `while`, `switch`, `try`, `return`) inherits from the default `whitespace` configuration.

* `opening` defines whether a space character should be inserted `before` and `after` the opening parenthesis of a control block.
* `closing` defines whether a space character should be inserted `before` and `after` the closing parenthesis of a control block.

#### If Statements

The `else` option defines properties unique to `else` statements:

* `cuddled` defines whether the `else` statement should be on the same line as the closing brace of the `if` statement.

#### For Loops

`terminator` defines whether a space character should be inserted `before` and `after` the expression terminator (e.g. semicolon).

#### Switch Statements

`indentation` defines the indentation within a switch statement.

* The `case` option controls the indentation for the `case` and `default` statements (default 1).
* The `statement` option controls the indentation for the code within the `case` statements. (default 2).
* The `break` option controls the indentation for the `break` statements at the end of each code block (default 2).

#### Return Statements

The `parentheses` option controls whether the return value should be wrapped in parentheses.

### Operators

#### Binary Operators

The `whitespace` option controls whether binary operators should be surrounded by whitespace (default `false`).


### Languages

Languages can opt to override any of the above configuration options. The custom recommendations for a lanugage will only be included if it is present in the `languages` configuration.
