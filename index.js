const Eris = require("eris");
const config = require("./config.json");

const bot = new Eris(config.token, {
	intents: ["guildMembers"],
});

bot.on("ready", () => {
	console.log("Ready!");
	bot.editStatus("online", {
		name: "qaric",
		type: 3,
	});
});

bot.on("error", (err) => {
	console.log(err);
});

bot.on("guildMemberAdd", (guild, member) => {
	if (member.id === config.uid) {
		member.addRole(config.rid, "Qarid perma mod kekw");
	}
});
