var documenterSearchIndex = {"docs":
[{"location":"#TerminalLoggers.jl-1","page":"Home","title":"TerminalLoggers.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"TerminalLoggers provides a logger type TerminalLogger which can format your log messages in a richer way than the default ConsoleLogger which comes with the julia standard Logging library.","category":"page"},{"location":"#Installation-and-setup-1","page":"Home","title":"Installation and setup","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"pkg> add https://github.com/c42f/TerminalLoggers.jl","category":"page"},{"location":"#","page":"Home","title":"Home","text":"To use TerminalLogger in all your REPL sessions by default, you may add a snippet such as the following to your startup file (in .julia/config/startup.jl)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"atreplinit() do repl\n    try\n        @eval begin\n            import Logging: global_logger\n            import TerminalLoggers: TerminalLogger\n            global_logger(TerminalLogger(stderr))\n        end\n    catch\n    end\nend","category":"page"},{"location":"#Progress-bars-1","page":"Home","title":"Progress bars","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"TerminalLogger displays progress logging as a set of progress bars which are cleanly separated from the rest of the program output at the bottom of the terminal. Try an example like the following","category":"page"},{"location":"#","page":"Home","title":"Home","text":"global_logger(TerminalLogger(stderr, right_justify=120))\nfor i=1:100\n    @info \"Some progress\" progress=i/100\n    if i == 50\n        @warn \"Middle of computation\" i\n    end\n    sleep(0.01)\nend\n@info \"Done\"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"note: Note\nRendering progress bars separately doesn't yet work on windows due to limitations of the windows console and its interaction with libuv. We expect this will eventually be solved with some combination of libuv updates and the new windows terminal.","category":"page"},{"location":"#API-Reference-1","page":"Home","title":"API Reference","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"TerminalLogger","category":"page"},{"location":"#TerminalLoggers.TerminalLogger","page":"Home","title":"TerminalLoggers.TerminalLogger","text":"TerminalLogger(stream=stderr, min_level=LogLevel(-1); meta_formatter=default_metafmt,\n               show_limited=true, right_justify=0)\n\nLogger with formatting optimized for interactive readability in a text console (for example, the Julia REPL). This is an enhanced version of the terminal logger Logging.ConsoleLogger which comes installed in the REPL by default.\n\nLog levels less than min_level are filtered out.\n\nMessage formatting can be controlled by setting keyword arguments:\n\nmeta_formatter is a function which takes the log event metadata (level, _module, group, id, file, line) and returns a color (as would be passed to printstyled), prefix and suffix for the log message.  The default is to prefix with the log level and a suffix containing the module, file and line location.\nshow_limited limits the printing of large data structures to something which can fit on the screen by setting the :limit IOContext key during formatting.\nright_justify is the integer column which log metadata is right justified at. The default is zero (metadata goes on its own line).\n\n\n\n\n\n","category":"type"}]
}
