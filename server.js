process.on("warning", e => console.warn(e.stack));
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 50;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://midnight-glaze-nephew.glitch.me`);
}, 280000);
///// ===== { < consts > } ===== /////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const version = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
client.login("ODkxNjgyOTEyMDc0ODYyNjAy.YVB6bA.I91sv1M8QAC4oD8XHyxSs_PNDVA");
///// ===== { < playine > } ===== /////
client.on("ready", () => {
  setInterval(() => {
    console.log(
      `${client.user.username} ready! ,Users ${client.guilds.cache.reduce(
        (a, g) => a + g.memberCount,
        0
      )}, Guilds ${client.guilds.cache.size}`
    );
    client.user.setActivity(
      `w!help | DEVιL Welcome , User ${client.guilds.cache.reduce(
        (a, g) => a + g.memberCount,
        0
      )}, servers ${client.guilds.cache.size}`
    );
  }, 15000);
});

///// ===== { < my consts > } ===== /////
const configjs = require("./config.json");
const prefix = configjs.prefix;
const bot_owner = configjs.owner;
const fixwelcome = configjs.welcomem;
const fixleave = configjs.leavem;
const fixcolor = configjs.colorm;
const fixlogo = configjs.logom;
const rast = configjs.rastm;
const ghallat = configjs.ghallatm;
const trueemo = configjs.trueemo;
const falseemo = configjs.falseemo;
const warn = configjs.warnm;
const emojiwel = configjs.welcomemo;
const emojibadge = configjs.badgem;
const emojibey = configjs.beyemo;
const emojiserver = configjs.serveremo;

///// ===== { < helpp > } ===== /////
client.on("message", message => {
  if (message.content === prefix + "help") {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    const embed = new Discord.MessageEmbed()
      .addField(
        "**First Page For Everyone :**",
        `> ${prefix}invite
> ${prefix}ping
> ${prefix}avatar
> ${prefix}profile
> ${prefix}server
> ${prefix}botinfo
> ${prefix}userinfo
> ${prefix}invinfo`
      )
      .addField(
        "**Second Page For Moderation :**",
        `> ${prefix}ban @user
> ${prefix}unban @user
> ${prefix}unban all
> ${prefix}kick @user
> ${prefix}lock
> ${prefix}unlock
> ${prefix}hide
> ${prefix}unhide
> ${prefix}roles
> ${prefix}bots
> ${prefix}emojis
> ${prefix}join`
      )
      .addField(
        "**Third Page For➪│ᴊᴏɪɴ-ᴅɪsᴄᴏʀᴅ & │ᴍᴇᴍʙᴇʀ-ʟᴇғᴛ :**",
        `
> ➪│ᴊᴏɪɴ-ᴅɪsᴄᴏʀᴅ
> │ᴍᴇᴍʙᴇʀ-ʟᴇғᴛ`
      )
      .addField(
        "**Forth Page For Protection  :**",
        `> ${prefix}anti ban [ number ]
> ${prefix}anti kick [ number ]
> ${prefix}anti channel [ number ]
> ${prefix}anti role [ number ]
> ${prefix}anti bot [ on / off ]
> ${prefix}settings
> Create antispam-logs .`
      )
      .setTitle(
        emojibadge +
          "** | ClickHere To Add **" +
          `${client.user.username}` +
          "** .**"
      )
      .setURL(
        "https://discordapp.com/oauth2/authorize?client_id=" +
          `${client.user.id}` +
          "&scope=bot&permissions=2080374975"
      )
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setImage(fixlogo)
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(embed);
  }
});

///// ===== { < invite > } ===== /////
client.on("message", message => {
  if (message.content.startsWith(`${prefix}invite`)) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    var embed = new Discord.MessageEmbed()
      .setTitle(
        emojibadge +
          "** | ClickHere To Add **" +
          `${client.user.username}` +
          "** .**"
      )
      .setURL(
        "https://discordapp.com/oauth2/authorize?client_id=" +
          `${client.user.id}` +
          "&scope=bot&permissions=2080374975"
      )
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setImage(fixlogo)
      .setFooter(`${message.author.tag}`, message.author.avatarURL());

    message.channel.send({ embed });
  }
});
///// ===== { < avatar > } ===== /////
client.on("message", message => {
  let Tag = message.mentions.users.first()
    ? message.mentions.users.first().tag
    : message.author.tag;
  let Avatar = message.mentions.users.first()
    ? message.mentions.users.first().avatarURL
    : message.author.avatarURL;
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "avatar")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    var mentiooned = message.mentions.users.first();

    var doma;
    if (mentiooned) {
      var doma = mentiooned;
    } else {
      var doma = message.author;
    }

    let embed = new Discord.MessageEmbed()
      .setColor(fixcolor)
      .setAuthor(Tag, Avatar)
      .setTitle("Avatar Link")
      .setURL(doma.avatarURL())
      .setImage(doma.avatarURL())
      .setFooter(Tag, Avatar);
    message.channel.send(embed);
  }
});
///// ===== { < about > } ===== /////
client.on("message", message => {
  if (message.content === prefix + "botinfo") {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    let embed = new Discord.MessageEmbed()
      .setTitle(
        emojibadge +
          "** | ClickHere To Add **" +
          `${client.user.username}` +
          "** .**"
      )
      .setURL(
        "https://discordapp.com/oauth2/authorize?client_id=" +
          `${client.user.id}` +
          "&scope=bot&permissions=2080374975"
      )

      .setDescription(
        `•••••
**Hi Im ${trueemo} | ${client.user.username} Create By : <@${bot_owner}> .
•••••
For More Information Type ${prefix}help
•••••
Servers : ${client.guilds.cache.size}
•••••
Users : ${client.users.cache.size}
•••••
Channels : ${client.channels.cache.size}**
•••••`
      )
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setImage(fixlogo)
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});
///// ===== { < profile > } ===== /////
client.on("message", message => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix + "profile")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    let member = message.mentions.users.first();

    if (args[0] && !args[1]) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send({
        files: [
          {
            name: "cutie=HyPeD.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      });
    }
    if (member) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send({
        files: [
          {
            name: "cutie=HyPeD.png",
            attachment: `https://api.probot.io/profile/${member.id}`
          }
        ]
      });
    } else if (args[1] && !member) {
      client.fetchUser(args[1]).then(userr => {
        message.channel.startTyping();
        setTimeout(() => {
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
        message.channel.send({
          files: [
            {
              name: "cutie=HyPeD.png",
              attachment: `https://api.probot.io/profile/${userr.id}`
            }
          ]
        });
      });
    }
  }
});
///// ===== { < ping > } ===== /////
client.on("message", message => {
  if (message.content === prefix + "ping") {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    let start = Date.now();
    message.channel.send("pong").then(message => {
      message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ws.ping.toFixed(0)} ms\`\`\``);
    });
  }
});
///// ===== { < server > } ===== /////
client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.cache
      .get(message.guild.id)
      .roles.cache.map(r => r.name);
    var embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL())
      .addField("**🆔 Server ID:**", message.guild.id, true)
      .addField(
        "**📅 Created On**",
        message.guild.createdAt.toLocaleString(),
        true
      )
      .addField("**👑 Owned by**", `<@${message.guild.owner.id}>`)
      .addField("**👥 Members**", `[${message.guild.memberCount}]`, true)
      .addField(
        "**💬 Channels **",
        `**${
          message.guild.channels.cache.filter(m => m.type === "text").size
        }**` +
          " text | Voice  " +
          `**${
            message.guild.channels.cache.filter(m => m.type === "voice").size
          }** `,
        true
      )
      .addField("**🌍 Others **", message.guild.region, true)
      .addField(
        "**🔐 Roles **",
        `**(${message.guild.roles.cache.size})** Role `,
        true
      )
      .addField("To see a list with all roles use", `**${prefix}roles**`, true)
      .setColor(fixcolor);
    message.channel.send({ embed: embed });
  }
});
///// ===== { < invinfo > } ===== /////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invinfo")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.cache
        .get(message.guild.id)
        .members.cache.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
      var inviteInfo = new Discord.MessageEmbed()
        .setTitle(`${trueemo} | **[ INVITE INFO ]** ${Username}`)
        .addField(
          "**Count Invites**",
          `**➥** [ Member **${Number(inviteCount)}** ]   `
        )
        .addField(
          "**Joined Server**",
          `**➥** [ From  **${daysJoined.toFixed(0)}** day ]   `
        )
        .addField(
          "**Your Invite Link**  ",
          `**➥** [ **https://discord.gg/${inviteCode || "Zm2U6we"}** ]   `
        )
        .setColor(fixcolor)
        .setThumbnail(message.author.avatarURL())
        .setImage(fixlogo)
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});
///// ===== { < ban > } ===== /////
client.on("message", message => {
  if (message.content.startsWith(`${prefix}ban`)) {
    if (!message.channel.guild)
      return message.channel
        .send(ghallat + "** | Sorry This Command Only For Servers .**")
        .then(m => m.delete(5000));
    let args = message.content.split(" ").slice(1);

    let banned =
      message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");

    // MESSAGES

    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Command: ban")
        .setDescription(
          `**Description:** Ban a member, optional time limit. \n` +
            "**Sub Commands:**\n" +
            "-ban save | Ban a user and save their messages in chat. \n" +
            "**Usage:**\n" +
            "-ban [user] (limit) (reason) \n" +
            "-ban save [user] (limit) (reason) \n" +
            "**Examples:** \n" +
            "-ban <@597253939469221891> 48h spam \n" +
            "-ban save <@597253939469221891> 48h spam "
        )
        .setColor(fixcolor);
      message.channel.send(baninfoembed);

      return;
    }

    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`${falseemo} | You Cant Ban Yourself .`)
        .setColor(fixcolor);
      message.channel.send(sanctionyourselfembed);

      return;
    }

    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Enter a reason`)
        .setColor(fixcolor);
      message.channel.send(noreasonembed);

      return;
    }

    if (!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          falseemo +
            "** | Sorry , But You Dont Have `BAN_MEMBERS` Permission .**"
        )
        .setColor(fixcolor);
      message.channel.send(nopermsembed);

      return;
    }

    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          falseemo +
            "** | Sorry , But You Dont Have `BAN_MEMBERS` Permission .**"
        )
        .setColor(fixcolor);
      message.channel.send(botnopermsembed);

      return;
    }

    message.guild.members.ban(banned, { reason: reason });

    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${banned.tag} has been successfully banned.`)
      .setColor(fixcolor);

    message.channel.send(successfullyembed);
  }
});
///// ===== { < kick > } ===== /////
client.on("message", message => {
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply(
          ghallat +
            "** | Sorry , But You Dont Have `KICK_MEMBERS` Permission .**"
        )
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply(
        ghallat + "** | Sorry , But I Dont Have `KICK_MEMBERS` Permission .**"
      );
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.reply(warn + "** | Mention The User .**");
    if (!reason) reason = "Null";
    if (!message.guild.member(user).bannable)
      return message.reply(
        ghallat + "** | I can not be higher than my rank .**"
      );

    message.guild.member(user).kick(7, user);

    message.channel.send(
      `**:white_check_mark: ${user} has been kicked ! :airplane:**`
    );
    user.send(
      `**:airplane: You are has been kicked in ${message.guild.name} reason: ${reason}**`
    );
    message.delete();
  }
});
///// ===== { < unban > } ===== /////
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.cache.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send(rast + " | **Unbanned all members .**");
    }
    if (!args)
      return message.channel.send(
        rast + " | **Please Type the member ID / all**"
      );
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`${rast} | **Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

// ======== { •user • }======== //
client.on("message", message => {
  if (message.content.startsWith(prefix + "userinfo")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    let Java = message.content.replace(/\s+/g, " ");
    Java = Java.split(" ");
    if (Java[1] != message.mentions.users.first())
      return message.channel.send(
        ":rolling_eyes: - " +
          `**${message.author.username}**` +
          ", I can't find " +
          Java[1] +
          " in the server."
      );

    var mentionned = message.mentions.users.first();
    var malo7z;
    if (mentionned) {
      var malo7z = mentionned;
    } else {
      var malo7z = message.author;
    }
    var l = "ago";
    var nh = 0;
    let date =
      moment.utc(malo7z.createdAt).format("DD/MM/YYYY") +
      " " +
      moment.utc(malo7z.createdAt).format("h:MM");
    let y = moment.utc(malo7z.createdAt).format("YY");
    let yy = moment().format("YY"),
      n = yy - y;
    let m = moment.utc(malo7z.createdAt).format("MM");
    let mm = moment().format("MM"),
      nn = mm - m;
    let d = moment.utc(malo7z.createdAt).format("DD");
    let dd = moment().format("DD"),
      nnn = dd - d;
    if (n > 0) {
      nh = n;
      l = "**years ago**";
      if (n === 1 && n !== 11) {
        nh = " ";
        l = "**a year ago**";
      }
    } else if (nn > 0) {
      nh = nn;
      l = "**months ago**";
      if (nn === 1 && nn !== 11) {
        nh = " ";
        l = "**a month ago**";
      }
    } else if (nnn > 0) {
      nh = nnn;
      l = "**days ago**";
      if (nnn === 1 && nnn !== 11) {
        nh = " ";
        l = "**a day ago**";
      }
    }
    if (n === 0 && nn === 0 && nnn === 0) {
      let h = moment.utc(malo7z.createdAt).format("hh");
      let hh = moment().format("hh"),
        mhl = hh - h;
      let m = moment.utc(malo7z.createdAt).format("mm");
      let mm = moment().format("mm"),
        mhl2 = mm - m;
      let s = moment.utc(malo7z.createdAt).format("ss");
      let ss = moment().format("ss"),
        mhl3 = ss - s;
      if (mhl > 0) {
        nh = mhl;
        l = "**hours ago**";
        if (mhl === 1 && mhl !== 11) {
          nh = " ";
          l = "**a hour ago**";
        }
      } else if (mhl2 > 0) {
        nh = mhl2;
        l = "**minutes ago**";
        if (mhl2 === 1 && mhl2 !== 11) {
          nh = " ";
          l = "**a minute ago**";
        }
      } else if (mhl3 > 0) {
        nh = mhl3;
        l = "**seconds ago**";
        if (mhl3 === 1 && mhl3 !== 11) {
          nh = " ";
          l = "**a second ago**";
        }
      }
    }
    let klo = "**" + nh + "**" + " " + l;
    let rMember = message.guild.member(
      message.mentions.users.first() || message.member
    );
    let lc = "ago";
    var nhc = 0;
    let datec =
      moment.utc(rMember.joinedAt).format("DD/MM/YYYY") +
      " " +
      moment.utc(message.member.joinedAt).format("h:MM");
    let yc = moment.utc(rMember.joinedAt).format("YY");
    let yyc = moment().format("YY"),
      nc = yyc - yc;
    let mc = moment.utc(rMember.joinedAt).format("MM");
    let mmc = moment().format("MM"),
      nnc = mmc - mc;
    let dc = moment.utc(rMember.joinedAt).format("DD");
    let ddc = moment().format("DD"),
      nnnc = ddc - dc;
    if (nc > 0) {
      nhc = nc;
      lc = "**years ago**";
      if (nc === 1 && nc !== 11) {
        nhc = " ";
        lc = "**a year ago**";
      }
    } else if (nnc > 0) {
      nhc = nnc;
      lc = "**months ago**";
      if (nnc === 1 && nnc !== 11) {
        nhc = " ";
        lc = "**a month ago**";
      }
    } else if (nnnc > 0) {
      nhc = nnnc;
      lc = "**days ago**";
      if (nnnc === 1 && nnnc !== 11) {
        nhc = " ";
        lc = "**a day ago**";
      }
    }

    if (nc === 0 && nnc === 0 && nnnc === 0) {
      let h = moment.utc(rMember.joinedAt).format("hh");
      let hh = moment().format("hh"),
        mhl = hh - h;
      let m = moment.utc(rMember.joinedAt).format("mm");
      let mm = moment().format("mm"),
        mhl2 = mm - m;
      let s = moment.utc(rMember.joinedAt).format("ss");
      let ss = moment().format("ss"),
        mhl3 = ss - s;
      if (mhl > 0) {
        nhc = mhl;
        lc = "**hours ago**";
        if (mhl === 1 && mhl !== 11) {
          nhc = " ";
          lc = "**a hour ago**";
        }
      } else if (mhl2 > 0) {
        nhc = mhl2;
        lc = "**minutes ago**";
        if (mhl2 === 1 && mhl2 !== 11) {
          nhc = " ";
          lc = "**a minute ago**";
        }
      } else if (mhl3 > 0) {
        nhc = mhl3;
        lc = "**seconds ago**";
        if (mhl3 === 1 && mhl3 !== 11) {
          nhc = " ";
          lc = "**a second ago**";
        }
      }
    }

    let kloc = "**" + nhc + "**" + " " + lc;
    const voiceChannel = rMember.voiceChannel;
    if (voiceChannel) {
      var vo = "**Online**";
    } else {
      vo = "**Offline**";
    }

    let embed = new Discord.MessageEmbed()
      .setColor(fixcolor)
      .setThumbnail(malo7z.avatarURL())
      .addField(
        "Joined Discord :",
        "``" + `${date}` + "``" + " " + "\n" + `${klo}`
      )
      .addField(
        "Joined Server :",
        "``" + `${datec}` + "``" + " " + "\n" + `${kloc}`
      )
      .addField("Last seen in voice channels :", `${vo}`)
      .setFooter(malo7z.tag, malo7z.avatarURL());
    message.channel.send(embed);
  }
});

///// ===== { < lock unlock > } ===== /////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    let lock = new Discord.MessageEmbed().addField(
      `Channel Name :** <#${message.channel.id}> .**`,`.`
    )
      .addField(`Locked By :** <@${message.author.id}> .**`,`.`)
      .setTitle(trueemo + "** | Locked Channel .**")
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed: lock });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    let lock = new Discord.MessageEmbed().addField(
      `Channel Name :** <#${message.channel.id}> .**`,`.`
    )
      .addField(`UnLocked By :** <@${message.author.id}> .**`,`.`)
      .setTitle(trueemo + "** | UnLocked Channel .**")
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed: lock });
  }
});
///// ===== { < hide unhide > } ===== /////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "hide")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
   let lock = new Discord.MessageEmbed().addField(
      `Channel Name :** <#${message.channel.id}> .**`,`.`
    )
      .addField(`Hidded By :** <@${message.author.id}> .**`,`.`)
      .setTitle(trueemo + "** | Hidded Channel .**")
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed: lock });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unhide")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      VIEW_CHANNEL: null
    });
    let lock = new Discord.MessageEmbed().addField(
      `Channel Name :** <#${message.channel.id}> .**`,`.`
    )
      .addField(`UnHidded By :** <@${message.author.id}> .**`,`.`)
      .setTitle(trueemo + "** | UnHidded Channel .**")
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed: lock });
  }
});
///// ===== { < roles > } ===== /////
client.on("message", message => {
  if (message.content.startsWith(prefix + "roles")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return message.reply(
        ghallat + "** | Sorry , But You Dont Have `MANAGE_ROLES` Permission .**"
      );
    var roles = message.guild.roles.cache
      .map(m => `${m.name}     ${m.members.size} Members`)
      .join("\n");
    return message.channel.send(`\`${roles}\``);
  }
});
///// ===== { < bots > } ===== /////
client.on("message", message => {
  if (message.content.startsWith(prefix + "bots")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.reply(
        ghallat + "** | Sorry , But You Dont Have `MANAGE_GUILD` Permission .**"
      );

    let i = 1;
    const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `
${botssize.join("\n")}`
      )
      .setAuthor(
        `Found ${
          message.guild.members.cache.filter(m => m.user.bot).size
        } Bots In This Server .`
      )
      .setTitle(`${trueemo} | ${client.user.username}`)
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setImage(fixlogo)
      .setFooter(`${message.author.tag}`, message.author.avatarURL());

    message.channel.send(embed);
  }
});
///// ===== { < emojis > } ===== /////
client.on("message", message => {
  if (message.content === prefix + "emojis") {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return message.reply(
        ghallat + "** | Sorry , But You Dont Have `MANAGE_ROLES` Permission .**"
      );

    let i = 0;
    let U = 1;
    let str = "";
    const List = message.guild.emojis.cache
      .map(e => e.toString(`${i++}`))
      .join(" ");
    let embed = new Discord.MessageEmbed()
      .setAuthor(`Found ${i} Emojis In This Server .`)
      .setDescription(List)
      .setTitle(`${trueemo} | ${client.user.username}`)
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setImage(fixlogo)
      .setFooter(`${message.author.tag}`, message.author.avatarURL());

    message.channel.send(embed);
  }
});
///// ===== { < join > } ===== /////
client.on("message", message => {
  if (message.content === prefix + "join") {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNEL"))
      return message.reply(
        ghallat +
          "** | Sorry , But You Dont Have `MANAGE_CHANNEL` Permission .**"
      );

    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply(rast + "**I Joined Your Voice Channel .**");
        })
        .catch(console.log);
    } else {
      message.reply(rast + "**Firs You Join A Voice Channel .**");
    }
  }
});
///// ===== { < anti problem > } ===== /////
let spread = JSON.parse(fs.readFileSync("./spread.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem off")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return;
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**${rast} | AntiProblem Is \`Disable\` .**`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem on")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return;

    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**${rast} | AntiProblem Is \`Enable\` .**`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});



///// ===== { < anti swear > } ===== /////
let swear = JSON.parse(fs.readFileSync("./swear.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti swear off")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return;
    swear[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**${rast} | AntiSwear Is \`Disable\` .**`);
    fs.writeFile("./swear.json", JSON.stringify(swear), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti swear on")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return;
    swear[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**${rast} | AntiSwear Is \`Enable\` .**`);
    fs.writeFile("./swear.json", JSON.stringify(swear), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
const configswear = require("./config2.json");
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (
    configswear.FILTER_LIST.some(word =>
      message.content.toLowerCase().includes(word)
    )
  ) {
    if (!message.channel.guild) return;
    if (!swear[message.guild.id])
      swear[message.guild.id] = {
        onoff: "Off"
      };
    if (swear[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(`**${warn} | Please Dont Swear .**`);
  }
});

////// ===== { < welcome > } ===== /////
/*client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.cache.find(
    channel => channel.name === "➪│ᴊᴏɪɴ-ᴅɪsᴄᴏʀᴅ" || channel.name === "➪│ᴊᴏɪɴ-ᴅɪsᴄᴏʀᴅ"
  );
  if (!welcomer) return;
  if (welcomer) {
    welcomer.send(
      `> **| Welcome <@${member.user.id}> To : | ${member.guild.name} .**`
    );
  }
});*/
client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.cache.find(
    channel => channel.name === "➪│ᴊᴏɪɴ-ᴅɪsᴄᴏʀᴅ" || channel.name === "➪│ᴊᴏɪɴ-ᴅɪsᴄᴏʀᴅ"
  );
  if (!welcomer) return;
  if (welcomer) {
    moment.locale("en-ly");
    let norelden = new Discord.MessageEmbed()
      .setColor(fixcolor)
      .setThumbnail(member.user.avatarURL())
      .setAuthor(member.user.username, member.user.avatarURL())
      .addField("✍🏻 | Member Tag :", `**${member.user.tag}**`)
      .addField("🆔 | Member ID :", `**${member.user.id}**`)
      .addField("1️⃣ | You Are Number :", `**${member.guild.memberCount}**`)
      .addField(
        "| Create Your Account :",
        `** ${moment(member.user.createdAt).format(
          "D/M/YYYY h:mm a"
        )} **\n** \`${moment(member.user.createdAt).fromNow()}\` **`,
        true
      )
      .addField(
        "🚪 | Join Server :",
        `** ${moment(member.joinedAt).format("D/M/YYYY h:mm a")} \n\`\`${moment(
          member.joinedAt
        )
          .startOf(" ")
          .fromNow()}\`\` **`,
        true
      )
      .setImage(fixwelcome)
      .setFooter(`${member.user.tag}`, member.user.avatarURL());

    welcomer.send({ embed: norelden });
  }
});

///// ===== { < leave > } ===== /////
client.on("guildMemberRemove", member => {
  let welcomer = member.guild.channels.cache.find(
    channel => channel.name === "│ᴍᴇᴍʙᴇʀ-ʟᴇғᴛ" || channel.name === "│ᴍᴇᴍʙᴇʀ-ʟᴇғᴛ"
  );
  if (!welcomer) return;
  if (welcomer) {
    moment.locale("en-ly");
    let norelden = new Discord.MessageEmbed()
      .setColor(fixcolor)
      .setThumbnail(member.user.avatarURL())
      .setAuthor(member.user.username, member.user.avatarURL())
      .addField("✍🏻 | Member Tag :", `**${member.user.tag}**`)
      .addField("🆔 | Member ID :", `**${member.user.id}**`)
      .addField("1️⃣ | Server Member :", `**${member.guild.memberCount}**`)
      .addField(
        "| Create Your Account :",
        `** ${moment(member.user.createdAt).format(
          "D/M/YYYY h:mm a"
        )} **\n** \`${moment(member.user.createdAt).fromNow()}\` **`,
        true
      )
      .addField(
        "🚪 | Join Server :",
        `** ${moment(member.joinedAt).format("D/M/YYYY h:mm a")} \n\`\`${moment(
          member.joinedAt
        )
          .startOf(" ")
          .fromNow()}\`\` **`,
        true
      )
      .setImage(fixleave)
      .setFooter(`${member.user.tag}`, member.user.avatarURL());

    welcomer.send({ embed: norelden });
  }
});
///// ===== { < security > } ===== /////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3,
      time: 0.1
    };

  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.owner.user.id) {
      if (bot_owner.includes(message.id));
      let anti = new Discord.MessageEmbed()
        .setTitle(`${trueemo} | ${client.user.username}`)
        .setDescription(
          falseemo + "** | Sorry , Only `OWNERSHIP` Can Use This Command .**"
        )
        .setColor(fixcolor)
        .setThumbnail(message.author.avatarURL())
        .setFooter(`${message.author.tag}`, message.author.avatarURL());

      return message.channel.send(anti);
    }
    {
      let typeanum = new Discord.MessageEmbed()
        .setTitle(`${trueemo} | ${client.user.username}`)
        .setDescription("**" + falseemo + " | Type A Number .**")
        .setColor(fixcolor)
        .setThumbnail(message.author.avatarURL())
        .setFooter(`${message.author.tag}`, message.author.avatarURL());

      {
        let onlyanum = new Discord.MessageEmbed()
          .setTitle(`${trueemo} | ${client.user.username}`)
          .setDescription("**" + falseemo + " | Only Type A Number .**")
          .setColor(fixcolor)
          .setThumbnail(message.author.avatarURL())
          .setFooter(`${message.author.tag}`, message.author.avatarURL());

        ///////
        if (message.content.startsWith(prefix + "anti ban")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].banLimit = num;
          {
            let ban = new Discord.MessageEmbed()
              .setTitle(`${trueemo} | ${client.user.username}`)
              .setColor(fixcolor)
              .setThumbnail(message.author.avatarURL())
              .setFooter(`${message.author.tag}`, message.author.avatarURL())
              .setDescription(
                `**${trueemo} | Changed \`Anti Ban\` To : ${config[message.guild.id].banLimit} .**`
              );

            message.channel.send(ban);
          }
        }
        if (message.content.startsWith(prefix + "anti kick")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].kickLimits = num;
          {
            let ban = new Discord.MessageEmbed()
              .setTitle(`${trueemo} | ${client.user.username}`)
              .setColor(fixcolor)
              .setThumbnail(message.author.avatarURL())
              .setFooter(`${message.author.tag}`, message.author.avatarURL())
              .setDescription(
                `**${trueemo} | Changed \`Anti Kick\` To : ${config[message.guild.id].kickLimits} .**`
              );

            message.channel.send(ban);
          }
        }
        if (message.content.startsWith(prefix + "anti role")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleDelLimit = num;
          {
            let roled = new Discord.MessageEmbed()
              .setTitle(`${trueemo} | ${client.user.username}`)
              .setColor(fixcolor)
              .setThumbnail(message.author.avatarURL())
              .setFooter(`${message.author.tag}`, message.author.avatarURL())
              .setDescription(
                `**${trueemo} | Changed \`Anti RoleD\` To : ${config[message.guild.id].roleDelLimit} .**`
              );

            message.channel.send(roled);
          }
        }
        if (message.content.startsWith(prefix + "anti role")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleCrLimits = num;
          {
            let rolec = new Discord.MessageEmbed()
              .setTitle(`${trueemo} | ${client.user.username}`)
              .setColor(fixcolor)
              .setThumbnail(message.author.avatarURL())
              .setFooter(`${message.author.tag}`, message.author.avatarURL())
              .setDescription(
                `**${trueemo} | Changed \`Anti RoleC\` To : ${config[message.guild.id].roleCrLimits} .**`
              );

            message.channel.send(rolec);
          }
        }
        if (message.content.startsWith(prefix + "anti channel")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaDelLimit = num;
          {
            let ban = new Discord.MessageEmbed()
              .setTitle(`${trueemo} | ${client.user.username}`)
              .setColor(fixcolor)
              .setThumbnail(message.author.avatarURL())
              .setFooter(`${message.author.tag}`, message.author.avatarURL())
              .setDescription(
                `**${trueemo} | Changed \`Anti ChannelD\` To : ${config[message.guild.id].chaDelLimit} .**`
              );

            message.channel.send(ban);
          }
        }
        if (message.content.startsWith(prefix + "anti channel")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaCrLimit = num;
          {
            let ban = new Discord.MessageEmbed()
              .setTitle(`${trueemo} | ${client.user.username}`)
              .setColor(fixcolor)
              .setThumbnail(message.author.avatarURL())
              .setFooter(`${message.author.tag}`, message.author.avatarURL())
              .setDescription(
                `**${trueemo} | Changed \`Anti ChannelC\` To : ${config[message.guild.id].chaCrLimit} .**`
              );

            message.channel.send(ban);
          }
        }
        if (message.content.startsWith(prefix + "anti time")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].time = num;
          {
            let ban = new Discord.MessageEmbed()
              .setTitle(`${trueemo} | ${client.user.username}`)
              .setColor(fixcolor)
              .setThumbnail(message.author.avatarURL())
              .setFooter(`${message.author.tag}`, message.author.avatarURL())
              .setDescription(
                `**${trueemo} | Changed \`Anti Time\` To : ${config[message.guild.id].time} .**`
              );

            message.channel.send(ban);
          }
        }
        fs.writeFile(
          "./configg.json",
          JSON.stringify(config, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrchan = new Discord.MessageEmbed()
            .setTitle(`${trueemo} | ${client.user.username}`)
            .setColor(fixcolor)
            .setFooter(`Server : ${channel.guild.name}`)
            .setDescription(
              `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
            );

          channel.guild.owner.send(warncrchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelchan = new Discord.MessageEmbed()
            .setTitle(`${trueemo} | ${client.user.username}`)
            .setColor(fixcolor)
            .setFooter(`Server : ${channel.guild.name}`)
            .setDescription(
              `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
            );

          channel.guild.owner.send(warndelchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelrole = new Discord.MessageEmbed()
            .setTitle(`${trueemo} | ${client.user.username}`)
            .setColor(fixcolor)
            .setFooter(`Server : ${channel.guild.name}`)
            .setDescription(
              `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Roles\` .**`
            );

          channel.guild.owner.send(warndelrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrrole = new Discord.MessageEmbed()
            .setTitle(`${trueemo} | ${client.user.username}`)
            .setColor(fixcolor)
            .setFooter(`Server : ${channel.guild.name}`)
            .setDescription(
              `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
            );

          channel.guild.owner.send(warncrrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnban1 = new Discord.MessageEmbed()
            .setTitle(`${trueemo} | ${client.user.username}`)
            .setColor(fixcolor)
            .setFooter(`Server : ${guild.guild.name}`)
            .setDescription(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            );

          guild.owner.send(warnban1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnkick1 = new Discord.MessageEmbed()
            .setTitle(`${trueemo} | ${client.user.username}`)
            .setColor(fixcolor)
            .setFooter(`Server : ${guild.guild.name}`)
            .setDescription(
              `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
            );

          guild.owner.send(warnkick1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        chaCrLimit: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e => {
            let warnban2 = new Discord.MessageEmbed()
              .setTitle(`${trueemo} | ${client.user.username}`)
              .setColor(fixcolor)
              .setFooter(`Server : ${guild.guild.name}`)
              .setDescription(
                `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
              );

            guild.owner.send(warnban2);
          });
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "settings")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return;
    let embed = new Discord.MessageEmbed()
      .setTitle(
        emojibadge +
          "** | ClickHere To Add **" +
          `${client.user.username}` +
          "** .**"
      )
      .setURL(
        "https://discordapp.com/oauth2/authorize?client_id=" +
          `${client.user.id}` +
          "&scope=bot&permissions=2080374975"
      )

      .setDescription(
        `**${trueemo} | Anti Ban Is : ${config[message.guild.id].banLimit}
•••••
${trueemo} | Anti Kick Is : ${config[message.guild.id].kickLimits}
•••••
${trueemo} | Anti ChannelD Is : ${config[message.guild.id].chaDelLimit}
•••••
${trueemo} | Anti ChannelC Is : ${config[message.guild.id].chaCrLimit}
•••••
${trueemo} | Anti RoleD Is : ${config[message.guild.id].roleDelLimit}
•••••
${trueemo} | Anti RoleC Is : ${config[message.guild.id].roleCrLimits}
•••••
${trueemo} | Anti Time Is : ${config[message.guild.id].time}**`
      )
      .setColor(fixcolor)
      .setThumbnail(message.author.avatarURL())
      .setImage(fixlogo)
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});
///// ===== { < anti bot > } ===== /////
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
    if (bot_owner.includes(message.id)) if (!message.channel.guild) return;
    if (!message.member.hasPermission("OWNERSHIP")) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**${rast} | AntiBot Is \`Enable\` .**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
    if (bot_owner.includes(message.id)) if (!message.channel.guild) return;
    if (!message.member.hasPermission("OWNERSHIP")) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**${rast} | AntiBot Is \`Disable\` .**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
///// ===== { < anti spam > } ===== /////
let authors = [];
let warned = [];
let punishedList = [];
let messageLog = [];

module.exports = async (client, options) => {
  /* Declaring our options which we are going to work on */

  const limitUntilWarn = (options && options.limitUntilWarn) || 3; // Default value: 3. Explication: This is the limit where you get the warn message. If the member X sent over 3 messages within the interval, he get warned
  const limitUntilMuted = (options && options.limitUntilMuted) || 5; // Default value: 5. Explication: This is the limit where you get Punished. If the member X sent over 5 messages within the interval, he get muted.
  const interval = (options && options.interval) || 2000; //Default Time: 2000MS (1000 milliseconds = 1 second, 2000 milliseconds = 2 seconds etc...). Explication: The interval where the messages are sent. Practically if member X sent 5+ messages within 2 seconds, he get muted
  const warningMessage =
    (options && options.warningMessage) ||
    "if you don't stop from spamming, I'm going to punish you!"; // Default Message: if you don't stop from spamming, I'm going to punish you!. Explication: None, it's just a message you get for the warning phase.
  const muteMessage =
    (options && options.muteMessage) ||
    "was muted since we don't like too much advertisement type people!"; // Default Message: "was muted since we don't like too much advertisement type people!". Explication: The message sent after member X was punished
  const maxDuplicatesWarning = (options && options.maxDuplicatesWarning) || 7; // Default value: 7. Explication: When people are spamming the same message, <limitUntilWarn> is ignored and this will trigger when member X sent over 7+ message that are the same.
  const maxDuplicatesMute = (options && options.maxDuplicatesMute) || 10; // Deafult value: 10 Explication: The limit where member X get muted after sending too many messages(10+).
  const ignoredRoles = (options && options.ignoredRoles) || []; // Default value: None. Explication: The members with this role(or roles) will be ignored if they have it. Suggest to not add this to any random guys.
  const ignoredMembers = (options && options.ignoredMembers) || []; // Default value: None. Explication: These members are directly affected and they do not require to have the role above. Good for undercover pranks.
  const mutedRole = (options && options.mutedRole) || "muted"; // Default value: muted. Explication: Here you put the name of the role that should not let people write/speak or anything else in your server. If there is no role set, by default, the module will attempt to create the role for you & set it correctly for every channel in your server. It will be named "muted".
  const timeMuted = (options && options.timeMuted) || 1000 * 600; // Default value: 10 minutes. Explication: This is how much time member X will be muted. if not set, default would be 10 min.
  const logChannel = (options && options.logChannel) || "AntiSpam-logs"; // Default value: "AhtiSpam-logs". Explication: This is the channel where every report about spamming goes to. If it's not set up, it will attempt to create the channel.

  // If something is added wrong, throw an error

  if (isNaN(limitUntilWarn))
    throw new Error(
      "ERROR: <limitUntilWarn> option is not set up right! Please check it again to be a number in settings."
    );
  if (isNaN(limitUntilMuted))
    throw new Error(
      "ERROR: <limitUntilMuted> option is not set up right! Please add a number in settings."
    );
  if (isNaN(interval))
    throw new Error(
      "ERROR: <interval> option is not set up right! Please add a number in settings."
    );
  if (!isNaN(warningMessage) || warningMessage.length < 5)
    throw new Error(
      "ERROR: <warningMessage> option must be a string and have at least 5 characters long (Including space)."
    );
  if (!isNaN(muteMessage) || muteMessage.length < 5)
    throw new Error(
      "ERROR: <muteMessage> option must be a string and have at least 5 characters long (Including space)."
    );
  if (isNaN(maxDuplicatesWarning))
    throw new Error(
      "ERROR: <maxDuplicatesWarning> option is not set up right! Please check it again to be a number in settings."
    );
  if (isNaN(maxDuplicatesMute))
    throw new Error(
      "ERROR: <maxDuplicatesMute> option is not set up right! Please check it again to be a number in settings."
    );
  if (isNaN(timeMuted))
    throw new Error(
      "ERROR: <timeMuted> option is not set up right! Please check it again to be a number in settings."
    );
  if (ignoredRoles.constructor !== Array)
    throw new Error(
      "ERROR: <ignoredRoles> option is not set up right! Please check it again to be an array in settings."
    );
  if (ignoredMembers.constructor !== Array)
    throw new Error(
      "ERROR: <ignoredMembers> option is not set up right! Please check it again to be an array in settings."
    );

  // Custom 'checkMessage' event that handles messages
  client.on("checkMessage", async message => {
    //time variables
    let clock = new Date();
    let ss = String(clock.getSeconds()).padStart(2, "0");
    let min = String(clock.getMinutes()).padStart(2, "0");
    let hrs = String(clock.getHours()).padStart(1, "0");
    clock = hrs + ":" + min + ":" + ss;

    let TheDate = new Date();
    let zilelesaptamanii = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let weekday = zilelesaptamanii[TheDate.getDay()];
    let dd = String(TheDate.getDate()).padStart(2, "0");
    let mon = String(TheDate.getMonth() + 1);
    let year = String(TheDate.getFullYear()).padStart(4, "00");
    TheDate = weekday + ", " + mon + "/" + dd + "/" + year;
    //end of time variables

    //verify if it's pm or AM
    let amORpm;
    if (hrs >= 0 && hrs <= 12) {
      amORpm = "AM";
    } else {
      amORpm = "PM";
    }
    // The Mute function.
    const MuteMember = async (m, muteMsg) => {
      for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].author == m.author.id) {
          messageLog.splice(i);
        }
      }

      punishedList.push(m.author.id);

      let user = m.guild.members.cache.get(m.author.id);
      let ReportChannel = m.guild.channels.cache.find(
        ch => ch.name === logChannel
      );
      if (!ReportChannel) {
        try {
          ReportChannel = await m.guild.channels
            .create("antispam-logs", {
              type: "text",
              permissionOverwrites: [
                {
                  id: m.guild.id,
                  deny: ["VIEW_CHANNEL"]
                }
              ]
            })
            .then(m =>
              m.send(
                `Created **\`anti-spam-Logs\`** channel since a channel for reports wasn't provided from beginning when setting up the module.`
              )
            )
            .catch(console.error);
        } catch (e) {
          console.log(e.stack);
        }
      } // end of creating the channel for anti spam logs

      let role = m.guild.roles.cache.find(namae => namae.name === mutedRole);
      if (!role) {
        try {
          role = await m.guild.roles.create({
            data: {
              name: "muted",
              color: "#000000",
              permissions: []
            },
            reason: `muted role wasn't found! Created a new one!`
          });
          m.guild.channels.cache.forEach(async (thechann, id) => {
            await thechann.updateOverwrite(role, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SEND_TTS_MESSAGES: false,
              ATTACH_FILES: false,
              SPEAK: false
            });
          });
          ReportChannel.send(
            `Created **\`muted\`** role since a role(to be applied to muted person) wasn't provided from beginning when setting up the module.`
          );
        } catch (e) {
          console.log(e.stack);
        }
      } //end of creating the role

      if (user) {
        user.roles
          .add(role)
          .then(() => {
            m.channel.send(`<@!${m.author.id}>, ${muteMsg}`);
            let muteEmbed = new MessageEmbed()
              .setAuthor(
                " Action | Auto Mute",
                `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`
              )
              .addField("Member muted:", `${user}`)
              .addField(
                `How much time got muted?:`,
                `${timeMuted} seconds (10 min)`
              )
              .addField("Reason of mute: ", `Spam`)
              .addField(
                `When it was muted that person:`,
                TheDate + " at " + clock + " " + amORpm
              )
              .setColor("#D9D900");
            ReportChannel.send(muteEmbed);
            setTimeout(() => {
              user.roles.remove(role);
              let unmutedEmbed = new MessageEmbed()
                .setAuthor("Action | Auto Unmute")
                .addField(`Member unmuted:`, `${user}`)
                .addField(`Reason of unmute:`, `Time Expired(10 min)`)
                .setColor("#D9D900");
              ReportChannel.send(unmutedEmbed);
            }, timeMuted);
            return true;
          })
          .catch(e => {
            m.guild.owner.send(
              `Oops, seems like i don't have sufficient permissions to mute <@!${message.author.id}>!\n It can be that or another type of error happened! Tell me on github: https://github.com/MirageZoe/ \n Everything happened on ${TheDate} at ${clock} ${amORpm} with message:\n\n\`${e.message}\`\n\n *P.S: If this is the first time getting something like this, most likely because it was not set up good the log channel at beginning and didn't know where to send the reports. Do not panic, next time it will work since he created the channel where to send the reports!*`
            );
            return false;
          });
      } //end of user
    };

    // The warning function.
    const WarnMember = async (m, reply) => {
      warned.push(m.author.id);
      m.channel.send(`<@${m.author.id}>, ${reply}`);
    };

    if (message.author.bot) return;
    if (
      message.channel.type !== "text" ||
      !message.member ||
      !message.guild ||
      !message.channel.guild
    )
      return;

    if (
      message.member.roles.cache.some(r => ignoredRoles.includes(r.name)) ||
      ignoredMembers.includes(message.author.tag)
    )
      return;

    if (message.author.id !== client.user.id) {
      let currentTime = Math.floor(Date.now());
      authors.push({
        time: currentTime,
        author: message.author.id
      });

      messageLog.push({
        message: message.content,
        author: message.author.id
      });

      let msgMatch = 0;
      for (var i = 0; i < messageLog.length; i++) {
        if (
          messageLog[i].message == message.content &&
          messageLog[i].author == message.author.id &&
          message.author.id !== client.user.id
        ) {
          msgMatch++;
        }
      }

      if (
        msgMatch == maxDuplicatesWarning &&
        !warned.includes(message.author.id)
      ) {
        WarnMember(message, warningMessage);
      }

      if (
        msgMatch == maxDuplicatesMute &&
        !punishedList.includes(message.author.id)
      ) {
        MuteMember(message, muteMessage);
      }

      var matched = 0;

      for (var i = 0; i < authors.length; i++) {
        if (authors[i].time > currentTime - interval) {
          matched++;
          if (
            matched == limitUntilWarn &&
            !warned.includes(message.author.id)
          ) {
            WarnMember(message, warningMessage);
          } else if (matched == limitUntilMuted) {
            if (!punishedList.includes(message.author.id)) {
              MuteMember(message, muteMessage);
            }
          }
        } else if (authors[i].time < currentTime - interval) {
          authors.splice(i);
          warned.splice(warned.indexOf(authors[i]));
          punishedList.splice(warned.indexOf(authors[i]));
        }

        if (messageLog.length >= 200) {
          messageLog.shift();
        }
      }
    }
  });
};
