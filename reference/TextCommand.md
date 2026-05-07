# FF14 文本指令参考 / FF14 Text Command Reference

## 聊天 / Chat

### /say (/s)
- **中文指令**: /说话频道
- **英文指令**: /say
- **缩写**: /说, /s
- **语法**: `/say <message>` 或 `/s <message>`
- **说明**: 让身边小范围内（20m）的玩家看到自己的发言。只输入"/说话频道"可将默认聊天频道变更为说话频道。

### /yell (/y)
- **中文指令**: /呼喊频道
- **英文指令**: /yell
- **缩写**: /呼, /y
- **语法**: `/yell <message>` 或 `/y <message>`
- **说明**: 让身边大范围内（100m）的玩家看到自己的发言。

### /shout (/sh)
- **中文指令**: /喊话频道
- **英文指令**: /shout
- **缩写**: /喊, /sh
- **语法**: `/shout <message>` 或 `/sh <message>`
- **说明**: 让当前所在区域的所有玩家看到自己的发言。

### /tell (/t)
- **中文指令**: /悄悄话频道
- **英文指令**: /tell
- **缩写**: /悄, /t
- **语法**: `/tell <player@server> <message>`
- **说明**: 向指定玩家发送聊天消息。跨服务器发送时只能对好友或正在募集队员的队长生效。
- **示例**: `/悄 阿鲁玛@萌芽池 你好。`

### /reply (/r)
- **中文指令**: /回答
- **英文指令**: /reply
- **缩写**: /回, /r
- **语法**: `/reply <message>`
- **说明**: 向最后一次收到悄悄话的玩家发送聊天消息。

### /cleartellhistory (/cth)
- **中文指令**: /清除悄悄话记录
- **英文指令**: /cleartellhistory
- **缩写**: /cth
- **语法**: `/cleartellhistory`
- **说明**: 将悄悄话的历史记录全部清除。

### /party (/p)
- **中文指令**: /小队频道
- **英文指令**: /party
- **缩写**: /队, /p
- **语法**: `/party <message>` 或 `/p <message>`
- **说明**: 向同一小队内的全体成员发送聊天消息，无论离多远、是不是在同一地图都可以看到。

### /alliance (/a)
- **中文指令**: /团队频道
- **英文指令**: /alliance
- **缩写**: /团, /a
- **语法**: `/alliance <message>` 或 `/a <message>`
- **说明**: 向同一团队的全体成员发送聊天消息。

### /freecompany (/fc)
- **中文指令**: /部队频道
- **英文指令**: /freecompany
- **缩写**: /部, /fc
- **语法**: `/freecompany <message>` 或 `/fc <message>`
- **说明**: 向同一部队内的全体成员发送聊天消息。

### /pvpteam (/pt)
- **中文指令**: /战队频道
- **英文指令**: /pvpteam
- **缩写**: /战, /pt
- **语法**: `/pvpteam <message>` 或 `/pt <message>`
- **说明**: 向同一战队内的全体成员发送聊天消息。

### /linkshell (/l)
- **中文指令**: /通讯贝频道
- **英文指令**: /linkshell
- **缩写**: /讯, /l
- **语法**: `/linkshell <message>` 或 `/l <message>`
- **说明**: 向常用通讯贝内的玩家发送聊天消息。

### /linkshell1 ~ /linkshell8 (/l1 ~ /l8)
- **中文指令**: /通讯贝频道1 ~ /通讯贝频道8
- **英文指令**: /linkshell1 ~ /linkshell8
- **缩写**: /讯1 ~ /讯8, /l1 ~ /l8
- **语法**: `/linkshell1 <message>`
- **说明**: 向指定编号通讯贝内的玩家发送聊天信息。

### /cwlinkshell (/cwl)
- **中文指令**: /跨服贝频道
- **英文指令**: /cwlinkshell
- **缩写**: /跨, /cwl
- **语法**: `/cwlinkshell <message>` 或 `/cwl <message>`
- **说明**: 向常用跨服通讯贝内的玩家发送聊天消息。

### /cwlinkshell1 ~ /cwlinkshell8 (/cwl1 ~ /cwl8)
- **中文指令**: /跨服贝频道1 ~ /跨服贝频道8
- **英文指令**: /cwlinkshell1 ~ /cwlinkshell8
- **缩写**: /跨1 ~ /跨8, /cwl1 ~ /cwl8
- **语法**: `/cwlinkshell1 <message>`
- **说明**: 向指定编号跨服通讯贝内的玩家发送聊天消息。

### /beginner (/b)
- **中文指令**: /新人频道
- **英文指令**: /beginner
- **缩写**: /新, /b
- **语法**: `/beginner <message>` 或 `/b <message>`
- **说明**: 向参加新人频道的所有玩家发送聊天消息。

### /echo (/e)
- **中文指令**: /默语
- **英文指令**: /echo
- **缩写**: /默, /e
- **语法**: `/echo <message>` 或 `/e <message>`
- **说明**: 显示只有自己能看到的发言内容。

### /clearlog (/cl)
- **中文指令**: /清除消息记录
- **英文指令**: /clearlog
- **缩写**: /cl
- **语法**: `/clearlog`
- **说明**: 将消息栏的历史记录全部清除。

### /quickchat (/qchat)
- **中文指令**: /快捷发言
- **英文指令**: /quickchat
- **缩写**: /qchat
- **语法**: `/quickchat <name> <substitution>`
- **说明**: 进行快捷发言。只能在群狼盛宴中使用。
- **示例**: `/快捷发言 全力攻击`

---

## 小队及社交 / Party & Social

### /join
- **中文指令**: /参加
- **英文指令**: /join
- **语法**: `/join`
- **说明**: 接受组队邀请。

### /decline
- **中文指令**: /拒绝
- **英文指令**: /decline
- **语法**: `/decline`
- **说明**: 拒绝组队邀请。

### /invite
- **中文指令**: /邀请
- **英文指令**: /invite
- **语法**: `/invite <target>`
- **说明**: 邀请指定玩家加入小队。省略代名词可以把当前所选中的玩家作为对象。

### /kick
- **中文指令**: /移除
- **英文指令**: /kick
- **语法**: `/kick <target>`
- **说明**: 将指定玩家移除小队。

### /leader
- **中文指令**: /队长
- **英文指令**: /leader
- **语法**: `/leader <target>`
- **说明**: 将队长转让给指定玩家。

### /leave
- **中文指令**: /退队
- **英文指令**: /leave
- **语法**: `/leave`
- **说明**: 退出小队。

### /partycmd (/pcmd)
- **中文指令**: /小队命令
- **英文指令**: /partycmd
- **缩写**: /小队, /pcmd
- **语法**: `/partycmd <subcommand>`
- **说明**: 运行各种组队指令。子命令: add, accept, deny, leader, leave, kick, breakup

### /partysort (/psort)
- **中文指令**: /小队排序
- **英文指令**: /partysort
- **缩写**: /psort
- **语法**: `/partysort`
- **说明**: 将小队列表按一定顺序排列。

### /readycheck (/rcheck)
- **中文指令**: /准备确认
- **英文指令**: /readycheck
- **缩写**: /rcheck
- **语法**: `/readycheck`
- **说明**: 发起准备确认。

### /ready (/rd)
- **中文指令**: /准备完毕
- **英文指令**: /ready
- **缩写**: /rd
- **语法**: `/ready`
- **说明**: 有人发起准备确认时以确认准备完毕进行回应。

### /notready (/nr)
- **中文指令**: /没有准备好
- **英文指令**: /notready
- **缩写**: /nr
- **语法**: `/notready`
- **说明**: 有人发起准备确认时以没有准备完毕进行回应。

### /countdown (/cd)
- **中文指令**: /倒计时
- **英文指令**: /countdown
- **缩写**: /cd
- **语法**: `/countdown <seconds>`
- **说明**: 设置战斗开始倒计时时间（5-30秒）。
- **示例**: `/倒计时 10`

### /friendlist (/flist)
- **中文指令**: /好友命令
- **英文指令**: /friendlist
- **缩写**: /好友, /flist
- **语法**: `/friendlist <subcommand>`
- **说明**: 运行各种好友名单相关指令。子命令: add, accept, deny, remove

### /blacklist (/blist)
- **中文指令**: /黑名单命令
- **英文指令**: /blacklist
- **缩写**: /黑名单, /blist
- **语法**: `/blacklist <subcommand>`
- **说明**: 运行各种黑名单相关指令。子命令: add, remove

---

## 目标 / Targeting

### /check (/c)
- **中文指令**: /查看
- **英文指令**: /check
- **缩写**: /c
- **语法**: `/check <target>`
- **说明**: 查看目标玩家情报。

### /trade
- **中文指令**: /交易
- **英文指令**: /trade
- **语法**: `/trade`
- **说明**: 向目标玩家申请交易。

### /automove
- **中文指令**: /自动前进
- **英文指令**: /automove
- **缩写**: /前进
- **语法**: `/automove <on|off>`
- **说明**: 向当前面对的方向自动前进。

### /follow
- **中文指令**: /跟随
- **英文指令**: /follow
- **语法**: `/follow`
- **说明**: 自动跟随所选玩家。

### /target (/ta)
- **中文指令**: /选中
- **英文指令**: /target
- **缩写**: /ta
- **语法**: `/target <target>`
- **说明**: 选中指定的玩家。离自己过远的玩家无法选中。

### /targetpc (/tpc)
- **中文指令**: /选中最近玩家
- **英文指令**: /targetpc
- **缩写**: /最近玩家, /tpc
- **语法**: `/targetpc`
- **说明**: 选中可选范围内离自己距离最近的玩家。

### /targetnpc (/tnpc)
- **中文指令**: /选中最近非玩家
- **英文指令**: /targetnpc
- **缩写**: /最近非玩家, /tnpc
- **语法**: `/targetnpc`
- **说明**: 选中可选范围内离自己最近的非玩家角色。

### /targetenemy (/tenemy)
- **中文指令**: /选中最近敌人
- **英文指令**: /targetenemy
- **缩写**: /最近敌人, /tenemy
- **语法**: `/targetenemy`
- **说明**: 选中可选范围内离自己距离最近的敌人。

### /battletarget (/bt)
- **中文指令**: /战斗目标
- **英文指令**: /battletarget
- **缩写**: /bt
- **语法**: `/battletarget`
- **说明**: 选中敌视自己的距离最近的敌人。

### /assist (/as)
- **中文指令**: /目标的目标
- **英文指令**: /assist
- **缩写**: /as
- **语法**: `/assist <target>`
- **说明**: 将指定玩家的当前选中的目标作为自己的目标选中。

### /facetarget (/ft)
- **中文指令**: /转向目标
- **英文指令**: /facetarget
- **缩写**: /ft
- **语法**: `/facetarget`
- **说明**: 转身面向当前所选目标的方向。

### /nexttarget (/nt)
- **中文指令**: /右侧选择
- **英文指令**: /nexttarget
- **缩写**: /nt
- **语法**: `/nexttarget`
- **说明**: 从屏幕右侧开始按顺时针方向顺次选中敌人。

### /previoustarget (/pt)
- **中文指令**: /左侧选择
- **英文指令**: /previoustarget
- **缩写**: /pt
- **语法**: `/previoustarget`
- **说明**: 从屏幕左侧开始按逆时针方向顺次选中敌人。

### /targetlasttarget (/tlt)
- **中文指令**: /上次目标
- **英文指令**: /targetlasttarget
- **缩写**: /tlt
- **语法**: `/targetlasttarget`
- **说明**: 选中上次选中的目标。

### /targetlastenemy (/tle)
- **中文指令**: /前次敌人
- **英文指令**: /targetlastenemy
- **缩写**: /tle
- **语法**: `/targetlastenemy`
- **说明**: 重新选中前一次选中的敌人。

### /lockon (/lo)
- **中文指令**: /锁定
- **英文指令**: /lockon
- **缩写**: /lo
- **语法**: `/lockon <on|off>`
- **说明**: 锁定或解除锁定当前选中的目标。

### /focustarget
- **中文指令**: /焦点目标
- **英文指令**: /focustarget
- **缩写**: /焦点
- **语法**: `/focustarget <target>`
- **说明**: 将指定玩家设置为焦点目标。省略代名词会指定当前所选目标为焦点目标。
- **示例**: `/focustarget <t>`

### /marking (/mk)
- **中文指令**: /标记
- **英文指令**: /marking
- **缩写**: /mk
- **语法**: `/marking <type> <target>`
- **说明**: 给指定的玩家加上指定的标记。标记种类: attack1~5, bind1~3, stop1~2, square, circle, cross, triangle, clear
- **示例**: `/marking attack3 <t>`

### /waymark (/wmark)
- **中文指令**: /场景标记
- **英文指令**: /waymark
- **缩写**: /wmark
- **语法**: `/waymark <A|B|C|D|1|2|3|4> [target]`
- **说明**: 设置场景标记。已设置的情况下则会撤除。

### /statusoff
- **中文指令**: /解除状态
- **英文指令**: /statusoff
- **语法**: `/statusoff <status>`
- **说明**: 解除指定的强化状态效果。
- **示例**: `/statusoff 舍身`

---

## 技能/热键栏 / Skills & Hotbars

### /action (/ac)
- **中文指令**: /技能
- **英文指令**: /action
- **缩写**: /ac
- **语法**: `/action <skill> <target>`
- **说明**: 对指定目标使用指定技能。以自己为目标的技能可以省略输入代名词。地面目标技能可使用子命令: 代名词(向目标发动), 地面关(直接发动)
- **示例**: `/ac "Holy Spirit" <t>`, `/ac 治疗 <2>`

### /blueaction
- **中文指令**: /青魔法技能
- **英文指令**: /blueaction
- **语法**: `/blueaction <spell> <target>`
- **说明**: 对指定目标使用指定青魔法技能。
- **示例**: `/blueaction 水炮 <t>`

### /pvpaction (/pvpac)
- **中文指令**: /对战技能
- **英文指令**: /pvpaction
- **缩写**: /pvpac
- **语法**: `/pvpaction <skill> <target>`
- **说明**: 对指定目标使用指定对战技能。

### /generalaction (/gaction)
- **中文指令**: /共通技能
- **英文指令**: /generalaction
- **缩写**: /gaction
- **语法**: `/generalaction <skill> <target>`
- **说明**: 对指定的玩家发动指定的共通技能。
- **示例**: `/generalaction 随机坐骑`

### /companionaction (/cac)
- **中文指令**: /搭档技能
- **英文指令**: /companionaction
- **缩写**: /cac
- **语法**: `/companionaction <skill>`
- **说明**: 命令搭档使用指定搭档技能。无需指定目标。
- **示例**: `/companionaction 自由战术`

### /petaction (/pac)
- **中文指令**: /召唤兽技能
- **英文指令**: /petaction
- **缩写**: /pac
- **语法**: `/petaction <skill> <target>`
- **说明**: 命令召唤兽对指定目标使用指定召唤兽技能。
- **示例**: `/petaction 等待指示`

### /mount
- **中文指令**: /坐骑
- **英文指令**: /mount
- **语法**: `/mount <mount_name>`
- **说明**: 乘上指定的坐骑。在骑乘状态下会跳下坐骑。省略坐骑名时也会跳下坐骑。
- **示例**: `/mount 专属陆行鸟`

### /minion
- **中文指令**: /宠物
- **英文指令**: /minion
- **语法**: `/minion <minion_name>`
- **说明**: 召唤出指定的宠物。
- **示例**: `/minion 巧儿陆行鸟`

### /recast
- **中文指令**: /复唱时间
- **英文指令**: /recast
- **缩写**: /复唱
- **语法**: `/recast <skill>`
- **说明**: 在对话框内显示技能的复唱时间。
- **示例**: `/recast 以太超流`

### /additionalaction (/aaction)
- **中文指令**: /额外技能
- **英文指令**: /additionalaction
- **缩写**: /aaction
- **语法**: `/additionalaction <skill> <on|off>`
- **说明**: 将指定的额外技能设置到当前职业上。

### /bluespellbook
- **中文指令**: /青魔法书
- **英文指令**: /bluespellbook
- **语法**: `/bluespellbook <subcommand>`
- **说明**: 对青魔法进行有效技能设置。子命令: set, preset, remove

### /hotbar
- **中文指令**: /热键栏
- **英文指令**: /hotbar
- **语法**: `/hotbar <subcommand>`
- **说明**: 对热键栏进行操作及设置。子命令: set, change, copy, display, share, remove
- **示例**: `/hotbar set 随机坐骑 1 1`

### /crosshotbar (/chotbar)
- **中文指令**: /十字热键栏
- **英文指令**: /crosshotbar
- **缩写**: /chotbar
- **语法**: `/crosshotbar <subcommand>`
- **说明**: 对十字热键栏进行操作及设置。

---

## 战斗 / Combat

### /battlemode (/bm)
- **中文指令**: /武器状态
- **英文指令**: /battlemode
- **缩写**: /bm
- **语法**: `/battlemode <on|off>`
- **说明**: 切换拔出和收回武器状态。

---

## 宏专用 / Macro Only

### /wait
- **中文指令**: /等待
- **英文指令**: /wait
- **语法**: `/wait <seconds>`
- **说明**: 在宏指令中用来调整时间的命令。等待时间设为"1"相当于1秒。最多可以设置为60。

### /macroicon (/micon)
- **中文指令**: /宏图标
- **英文指令**: /macroicon
- **缩写**: /micon
- **语法**: `/macroicon <icon_name> [category]`
- **说明**: 用户宏专用。在热键栏上显示指定图标名的图标。分类: action, blueaction, pvpaction, general, emote, buddy, pet, minion, mount, item, marking, waymark, gearset, classjob, quickchat

### /macrolock (/mlock)
- **中文指令**: /锁定宏指令
- **英文指令**: /macrolock
- **缩写**: /锁宏, /mlock
- **语法**: `/macrolock`
- **说明**: 宏指令专用，使用该命令之后，在同一个宏内的所有指令完成之前不允许执行其他宏指令。

### /macroerror (/merror)
- **中文指令**: /宏错误提示
- **英文指令**: /macroerror
- **缩写**: /merror
- **语法**: `/macroerror <on|off>`
- **说明**: 设置是否显示在运行宏命令的过程中出现的错误提示。

### /macrocancel (/mcancel)
- **中文指令**: /取消宏
- **英文指令**: /macrocancel
- **缩写**: /mcancel
- **语法**: `/macrocancel`
- **说明**: 只能在对话栏中输入。停止正在执行的宏指令。

---

## 其他功能 / Other Functions

### /title
- **中文指令**: /称号
- **英文指令**: /title
- **语法**: `/title <subcommand>`
- **说明**: 改变称号。子命令: set, remove

### /gearset (/gs)
- **中文指令**: /套装
- **英文指令**: /gearset
- **缩写**: /gs
- **语法**: `/gearset <subcommand>`
- **说明**: 进行套装相关的操作。子命令: change, view, save, remove

### /itemsort (/isort)
- **中文指令**: /道具整理
- **英文指令**: /itemsort
- **缩写**: /整理, /isort
- **语法**: `/itemsort <subcommand>`
- **说明**: 可以以比"自动整理"更加详细的设置来整理物品的排列顺序。

### /itemsearch (/isearch)
- **中文指令**: /道具检索
- **英文指令**: /itemsearch
- **缩写**: /isearch
- **语法**: `/itemsearch <keyword>`
- **说明**: 通过输入发言内容对所持物品进行检索。
- **示例**: `/itemsearch 恢复药`

### /levelsync (/lsync)
- **中文指令**: /等级同步
- **英文指令**: /levelsync
- **缩写**: /lsync
- **语法**: `/levelsync <on|off>`
- **说明**: 在危命任务等有等级限制的情况时使用这个命令可以进行等级同步。

### /visor
- **中文指令**: /头部装备
- **英文指令**: /visor
- **语法**: `/visor`
- **说明**: 对头部装备进行操作。针对可以开合以及有明暗表现等功能的装备。

### /legacymark (/lmark)
- **中文指令**: /十二神印记
- **英文指令**: /legacymark
- **缩写**: /神印, /lmark
- **语法**: `/legacymark <on|off>`
- **说明**: 设置是否显示自己角色的十二神印记。

### /facecamera (/fcam)
- **中文指令**: /面向镜头
- **英文指令**: /facecamera
- **缩写**: /fcam
- **语法**: `/facecamera`
- **说明**: 将角色视线转向镜头视角。

### /grouppose (/gpose)
- **中文指令**: /集体动作
- **英文指令**: /grouppose
- **缩写**: /gpose
- **语法**: `/grouppose`
- **说明**: 执行集体动作。

### /idlingcamera (/icam)
- **中文指令**: /观景视角
- **英文指令**: /idlingcamera
- **缩写**: /icam
- **语法**: `/idlingcamera [target]`
- **说明**: 切换为景观视角。

### /petsize
- **中文指令**: /召唤兽尺寸
- **英文指令**: /petsize
- **语法**: `/petsize <pet_name> <small|medium|large>`
- **说明**: 变更特定召唤兽的尺寸。
- **示例**: `/petsize 亚灵神巴哈姆特 中`

### /ridepillion
- **中文指令**: /共同骑乘
- **英文指令**: /ridepillion
- **语法**: `/ridepillion <party_slot> <seat>`
- **说明**: 搭乘所选队员的坐骑。座位编号1-7。
- **示例**: `/ridepillion <2> 1`

### /alarm
- **中文指令**: /闹钟
- **英文指令**: /alarm
- **语法**: `/alarm <name> <time_type> [repeat] <time> [advance]`
- **说明**: 设置闹钟。时间类型: lt(本地时间), st(服务器时间), et(艾欧泽亚时间)
- **示例**: `/alarm "集合时间" lt 2000 10`

### /hud
- **中文指令**: /指定窗口
- **英文指令**: /hud
- **语法**: `/hud <window_name> <on|off>`
- **说明**: 设置是否显示指定的界面窗口。

### /hudreset
- **中文指令**: /重置界面
- **英文指令**: /hudreset
- **语法**: `/hudreset`
- **说明**: 将当前的界面位置以及缩放率重置回初始状态。

### /uiscale
- **中文指令**: /界面缩放
- **英文指令**: /uiscale
- **语法**: `/uiscale <60|80|90|100|110|120|140|reset>`
- **说明**: 更改当前界面窗口的缩放倍率。

### /random
- **中文指令**: /随机数
- **英文指令**: /random
- **语法**: `/random [max]`
- **说明**: 在0~999的数字中随机抽选出一个并显示在消息窗口中。可指定上限值(2-999)。
- **示例**: `/random 22`

### /dice
- **中文指令**: /掷骰
- **英文指令**: /dice
- **语法**: `/dice [channel] [max]`
- **说明**: 从0~999中随机抽取一个数字发送到当前或指定聊天频道。
- **示例**: `/dice party 16`

### /playtime (/ptime)
- **中文指令**: /游戏时间
- **英文指令**: /playtime
- **缩写**: /ptime
- **语法**: `/playtime`
- **说明**: 显示当前角色的累计游戏时间。

### /logout
- **中文指令**: /标题画面
- **英文指令**: /logout
- **语法**: `/logout`
- **说明**: 退出游戏，回到标题画面。

### /shutdown
- **中文指令**: /关闭游戏
- **英文指令**: /shutdown
- **语法**: `/shutdown`
- **说明**: 退出并结束游戏。

### /search (/sea)
- **中文指令**: /搜索命令
- **英文指令**: /search
- **缩写**: /搜索, /sea
- **语法**: `/search <conditions>`
- **说明**: 以指定条件搜索玩家。

### /lookingforparty (/lfp)
- **中文指令**: /希望组队
- **英文指令**: /lookingforparty
- **缩写**: /lfp
- **语法**: `/lookingforparty <on|off> [jobs]`
- **说明**: 将在线状态设置为"希望组队"。

### /busy
- **中文指令**: /忙碌
- **英文指令**: /busy
- **语法**: `/busy <on|off>`
- **说明**: 将在线状态设置为"忙碌"。

### /away (/afk)
- **中文指令**: /离开
- **英文指令**: /away
- **缩写**: /离, /afk
- **语法**: `/away <on|off>`
- **说明**: 将在线状态设置为"离开"。

---

## 设置 / Settings

### /autolockon
- **中文指令**: /自动锁定
- **英文指令**: /autolockon
- **语法**: `/autolockon <on|off>`
- **说明**: 开启"开始自动攻击时自动锁定"功能。

### /autofacetarget
- **中文指令**: /自动转向目标
- **英文指令**: /autofacetarget
- **语法**: `/autofacetarget <on|off>`
- **说明**: 开启发动技能时转身面向目标的功能。

### /targetring
- **中文指令**: /目标环
- **英文指令**: /targetring
- **语法**: `/targetring <on|off>`
- **说明**: 显示目标环。

### /targetline
- **中文指令**: /目标线
- **英文指令**: /targetline
- **语法**: `/targetline <on|off>`
- **说明**: 显示目标线。

### /autotarget
- **中文指令**: /自动选中
- **英文指令**: /autotarget
- **语法**: `/autotarget <on|off>`
- **说明**: 开启"未选中目标时自动选中"的功能。

### /displayhead
- **中文指令**: /显示头部装备
- **英文指令**: /displayhead
- **语法**: `/displayhead <on|off>`
- **说明**: 显示自己的头部装备。

### /displayarms
- **中文指令**: /显示武器
- **英文指令**: /displayarms
- **语法**: `/displayarms <on|off>`
- **说明**: 收回武器时显示自己的主手装备及副手装备。

### /autosheathe (/ashathe)
- **中文指令**: /自动收回武器
- **英文指令**: /autosheathe
- **缩写**: /ashathe
- **语法**: `/autosheathe <on|off>`
- **说明**: 开启自动收回武器的功能。

### /targetself
- **中文指令**: /选中自己
- **英文指令**: /targetself
- **语法**: `/targetself <on|off>`
- **说明**: 开启可以选中自己作为目标的功能。

### /mastervolume
- **中文指令**: /整体音量
- **英文指令**: /mastervolume
- **语法**: `/mastervolume <0-100>`
- **说明**: 改变整体音量。

### /bgm
- **中文指令**: /背景音乐
- **英文指令**: /bgm
- **语法**: `/bgm <0-100>`
- **说明**: 改变背景音乐的音量。

### /soundeffects
- **中文指令**: /音效
- **英文指令**: /soundeffects
- **语法**: `/soundeffects <0-100>`
- **说明**: 改变音效的音量。

### /voice
- **中文指令**: /语音
- **英文指令**: /voice
- **语法**: `/voice <0-100>`
- **说明**: 改变语音的音量。

### /systemsounds
- **中文指令**: /系统音
- **英文指令**: /systemsounds
- **语法**: `/systemsounds <0-100>`
- **说明**: 改变系统音的音量。

### /mountbgm
- **中文指令**: /坐骑音乐
- **英文指令**: /mountbgm
- **语法**: `/mountbgm <on|off>`
- **说明**: 设置是否播放坐骑自带的背景音乐。

### /graphicpresets (/gpreset)
- **中文指令**: /图像设置预设
- **英文指令**: /graphicpresets
- **缩写**: /gpreset
- **语法**: `/graphicpresets <1-5>`
- **说明**: 将图像设置切换为预设设置。1:标准(笔记本), 2:标准(台式), 3:高品质(笔记本), 4:高品质(台式), 5:最高品质

### /battleeffect
- **中文指令**: /战斗特效
- **英文指令**: /battleeffect
- **语法**: `/battleeffect <target> <type>`
- **说明**: 对战斗特效进行设置。目标: self, party, other, enemypc。类型: all, simple, off

### /actionerror (/aerror)
- **中文指令**: /技能错误
- **英文指令**: /actionerror
- **缩写**: /aerror
- **语法**: `/actionerror <on|off>`
- **说明**: 开启显示发动技能时屏幕中的错误提示。

### /recasterror (/rerror)
- **中文指令**: /复唱错误
- **英文指令**: /recasterror
- **缩写**: /rerror
- **语法**: `/recasterror <on|off>`
- **说明**: 开启显示复唱中无法使用技能的错误提示。

---

## 呼出菜单 / Menu Commands

### /actionlist (/alist)
- **中文指令**: /技能菜单
- **英文指令**: /actionlist
- **缩写**: /alist
- **语法**: `/actionlist`
- **说明**: 打开技能菜单。

### /character (/gear)
- **中文指令**: /角色
- **英文指令**: /character
- **缩写**: /装备, /gear
- **语法**: `/character`
- **说明**: 打开角色窗口。

### /inventory (/bag)
- **中文指令**: /物品
- **英文指令**: /inventory
- **缩写**: /背包, /bag
- **语法**: `/inventory`
- **说明**: 打开物品窗口。

### /dutyfinder (/dfinder)
- **中文指令**: /任务搜索器
- **英文指令**: /dutyfinder
- **缩写**: /任务, /dfinder
- **语法**: `/dutyfinder`
- **说明**: 打开任务搜索器。

### /teleport
- **中文指令**: /传送
- **英文指令**: /teleport
- **语法**: `/teleport`
- **说明**: 打开传送窗口。

### /return
- **中文指令**: /返回
- **英文指令**: /return
- **语法**: `/return`
- **说明**: 实行返回操作。

### /map
- **中文指令**: /地图
- **英文指令**: /map
- **语法**: `/map`
- **说明**: 打开地图窗口。

### /macros
- **中文指令**: /用户宏
- **英文指令**: /macros
- **缩写**: /宏
- **语法**: `/macros`
- **说明**: 打开用户宏窗口。

### /emotelist (/elist)
- **中文指令**: /情感动作
- **英文指令**: /emotelist
- **缩写**: /elist
- **语法**: `/emotelist`
- **说明**: 打开情感动作窗口。

### /partyfinder (/pfinder)
- **中文指令**: /队员招募
- **英文指令**: /partyfinder
- **缩写**: /招募, /pfinder
- **语法**: `/partyfinder`
- **说明**: 打开队员招募窗口。

### /goldsaucer (/saucer)
- **中文指令**: /金碟游乐场
- **英文指令**: /goldsaucer
- **缩写**: /金碟, /saucer
- **语法**: `/goldsaucer`
- **说明**: 打开金碟游乐场窗口。

### /achievements
- **中文指令**: /成就
- **英文指令**: /achievements
- **语法**: `/achievements`
- **说明**: 打开成就列表。

### /currency
- **中文指令**: /货币一览
- **英文指令**: /currency
- **缩写**: /货币
- **语法**: `/currency`
- **说明**: 打开货币一览窗口。

### /characterconfig (/cconfig)
- **中文指令**: /角色设置
- **英文指令**: /characterconfig
- **缩写**: /cconfig
- **语法**: `/characterconfig`
- **说明**: 打开角色设置窗口。

### /systemconfig (/sconfig)
- **中文指令**: /系统设置
- **英文指令**: /systemconfig
- **缩写**: /sconfig
- **语法**: `/systemconfig`
- **说明**: 打开系统设置窗口。

### /hudlayout
- **中文指令**: /界面设置
- **英文指令**: /hudlayout
- **语法**: `/hudlayout [1-4]`
- **说明**: 进行界面设置相关的操作。

---

## 代名词 / Substitution Variables

| 变量 | 中文别名 | 说明 |
|------|----------|------|
| `<t>`, `<target>` | `<目标>` | 显示当前目标的名称 |
| `<tt>`, `<t2t>` | `<目标的目标>` | 显示当前目标的目标的角色名 |
| `<me>` | `<自己>` | 显示自己的角色名 |
| `<r>`, `<reply>` | `<回复>` | 显示最后向自己发送悄悄话的角色名 |
| `<1>` ~ `<8>` | — | 显示小队列表中指定编号成员的名字 |
| `<f>`, `<focus>` | `<焦点目标>` | 显示焦点目标的角色名 |
| `<lt>` | `<上次目标>` | 显示上一个目标角色名 |
| `<le>` | `<最后选定的敌人>` | 显示最后一个目标的敌人名 |
| `<la>` | `<上次攻击者>` | 显示最后一个攻击自己的敌人名 |
| `<c>` | `<搭档>` | 显示自己召唤出的搭档名 |
| `<p>` | `<召唤兽>` | 显示自己召唤出的召唤兽的名字 |
| `<mo>` | `<鼠标>` | 显示鼠标所指向的角色名 |
| `<hp>` | `<体力>` | 显示自己角色体力的当前值/最大值 |
| `<hpp>` | `<剩余体力>` | 显示自己角色体力的剩余百分比 |
| `<mp>` | `<魔力>` | 显示自己角色魔力的当前值/最大值 |
| `<mpp>` | `<剩余魔力>` | 显示自己角色魔力的剩余百分比 |
| `<job>` | `<职业>` | 显示自己角色现在的职业和等级 |
| `<pos>` | `<坐标>` | 显示自己角色目前所在的地区名和坐标 |
| `<se.1>` ~ `<se.16>` | — | 在发言中使用，目标角色全体都能听到对应的音效 |
| `<attack1>` ~ `<attack5>` | `<攻击1>` ~ `<攻击5>` | 显示设置了攻击标记的角色名 |
| `<bind1>` ~ `<bind3>` | `<止步1>` ~ `<止步3>` | 显示设置了止步标记的角色名 |
| `<stop1>` ~ `<stop2>` | `<禁止1>` ~ `<禁止2>` | 显示设置了禁止标记的角色名 |
| `<square>` | `<方块>` | 显示设置了方块标志的角色名 |
| `<circle>` | `<圆圈>` | 显示设置了圆圈标志的角色名 |
| `<cross>` | `<十字>` | 显示设置了十字标志的角色名 |
| `<triangle>` | `<三角>` | 显示设置了三角标志的角色名 |
| `<targethpp>` | `<目标剩余体力>` | 显示目标体力的剩余百分比 |
| `<focushpp>` | `<焦点目标剩余体力>` | 显示焦点目标体力的剩余百分比 |
| `<targetclass>` | `<目标职业>` | 显示目标的职业和等级 |
| `<focusclass>` | `<焦点目标职业>` | 显示焦点目标的职业和等级 |
| `<flag>` | — | 如果当前地图上有标记，显示为地区名和坐标 |
| `<wait.N>` | `<等待.N>` | 宏中等待N秒（最多60） |
| `<recast.SkillName>` | `<复唱.技能名>` | 显示指定技能剩余的复唱时间 |
