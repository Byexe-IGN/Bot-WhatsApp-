require("./global")

const mess = {
   wait: "*`[!]` processing, please wait a moment..!!*",
   success: "*`[!]` successful process..!!*",
   on: "*`[ On Feature..!! ]`*", 
   off: "*`[ Off Feature..!! ]`*",
   query: {
       text: "*`[!]` where is the text?*",
       link: "*`[!]` Where is the link?*",
   },
   error: {
       fitur: "*`[!]` Sorry, there is an error in the feature. Please chat with the Bot Developer so it can be fixed immediately.`*",
   },
   only: {
       group: "*`[!]` This feature can only be accessed within a group*",
       private: "`[!]` This feature can only be accessed in private chat`",
       owner: "*`[!]` This feature is for owners only`*",
       admin: "*`[!]` This feature can only be accessed by admin*",
       badmin: "*`[!]` The bot must be an admin first*",
       premium: "*`[!]` This Feature Can Only Be Accessed By Premium Members*",
       murbug: "*`[!]` This feature can only be accessed by Murbug members", 
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})