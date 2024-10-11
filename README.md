DragonWeb 2011 is a legacy tool that provides access to some of the older games.
This is the original 2011 Dragon Web. The source tree had multiple branches. The issue was that the latest version had TypeScript and Flow support, as well as Less and Sass support. It didn't make much sense to have all of these at the same time. It had plugin support, but there wasn't any opportunity to use separate file format support as a plugin. This was part of the strict design.
Because of the 2011 design, it was possible to run with Node.js and Rhino too. However, for that, a Makefile was used instead of CommonJS (required) modules or ECMAScript (import) modules.
It's not perfect but more stable than the later openDragon and the DragonTS. 
