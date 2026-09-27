# 脑内小剧场：Stahl 精神药理学 · 日系治愈漫画风图解动画

把《Stahl 精神药理学精要》里不好懂的受体、通路和机制，拍成一出出拟人化的小剧场：神经递质是穿制服送信的快递员，受体是带锁的门，转运体是回收员，酶是清扫员，药物是戴胶囊帽的访客（参考《工作细胞》的拟人方式）。每一集用几个小场景讲一个知识点，幕数按内容多少来定。纯 HTML + Canvas，没有构建步骤。

结构和「身体小剧场」一样（共用引擎 + 每集一个文件夹 + 互动展厅），画风换成了日系治愈漫画风：奶油纸底、樱花淡彩、细线条、大眼睛的 Q 版角色，配上对话气泡、拟声词、闪光和集中线这些漫画语言。

| 文件夹 | 主题 | 对应原书 |
|---|---|---|
| `synapse/` | 突触邮局 | 第 1 章 · 化学神经传递 |
| `neurotransmission-types/` | 三种送信方式：经典、逆行和容积传递 | 第 1 章 · 神经传递的方式 |
| `endocannabinoid/` | 倒着送的信：内源性大麻素 | 第 13 章 · 大麻素系统 |
| `signal-cascades/` | 四条信号通路：从门口到细胞核 | 第 1 章 · 信号转导级联 |
| `g-protein/` | 三种接力：G 蛋白和第二信使 | 第 2 章 · G 蛋白偶联受体 |
| `plasticity/` | 基因的开关：从信号到可塑性 | 第 1 章 · 信号转导与基因表达 |
| `rna-splicing/` | 同一段基因，不同的剪法 | 第 1 章 · 关于 RNA |
| `transporter-families/` | 回收门的两大家族 | 第 2 章 · 转运体作为药物靶点 |
| `agonist/` | 受体的调光开关 | 第 2 章 · 受体与激动剂谱 |
| `receptor-regulation/` | 门变多还是变少：受体的上调和下调 | 第 2 章 · 受体的适应 |
| `enzyme-inhibitors/` | 剪刀停工：可逆和不可逆的酶抑制 | 第 2 章 · 酶作为药物靶点 |
| `cyp450/` | 肝脏里的代谢工厂 | 第 2 章 · 酶作为药物靶点（药物代谢） |
| `pharmacokinetics/` | 药在身体里的旅程：半衰期和稳态 | 第 2 章 · 药代动力学基础 |
| `ion-channels/` | 离子通道：药物的另一扇门 | 第 3 章 · 离子通道作为药物靶点 |
| `voltage-channels/` | 感应电压的门：钠通道和钙通道 | 第 3 章 · 电压敏感离子通道 |
| `psychosis/` | 多巴胺的四条铁路 | 第 4 章 · 精神病与精神分裂症 |
| `dopamine-lifecycle/` | 多巴胺的一生：合成、装箱和清除 | 第 4 章 · 多巴胺的合成与终止 |
| `glutamate-system/` | 谷氨酸的循环：神经元和星形胶质细胞 | 第 4 章 · 谷氨酸系统 |
| `serotonin-lifecycle/` | 5-HT 的一生：从色氨酸出发 | 第 4 章 · 5-HT 的合成与终止 |
| `dopamine-receptors/` | 多巴胺的五扇门 | 第 4～5 章 · 多巴胺受体 |
| `glutamate-pathways/` | NMDA 掉线以后 | 第 4 章 · 谷氨酸假说 |
| `serotonin-psychosis/` | 5-HT 与幻觉 | 第 4 章 · 5-HT 与精神病 |
| `serotonin-receptors/` | 5-HT 的受体大家庭 | 第 4～5 章 · 5-HT 受体 |
| `neurodevelopment/` | 长大的大脑：突触修剪 | 第 4 章 · 神经发育假说 |
| `other-psychoses/` | 不只是精神分裂症：各种精神病性障碍 | 第 4 章 · 其他精神病性障碍 |
| `antipsychotics/` | D2 受体的门卫 | 第 5 章 · 抗精神病药 |
| `secondary-negative/` | 药让人没劲？继发性阴性症状 | 第 5 章 · 阻断 D2 引起继发性阴性症状 |
| `basal-ganglia-loops/` | 直接通路和间接通路 | 第 5 章 · 皮层-纹状体-丘脑环路 |
| `motor-side-effects/` | 僵、抖、坐不住：药物引起的运动副作用 | 第 5 章 · 黑质纹状体 D2 与运动副作用 |
| `tardive/` | 停不下来的小动作 | 第 5 章 · 迟发性运动障碍 |
| `antipsychotic-fingerprints/` | 抗精神病药的受体指纹 | 第 5 章 · 各药物的药理特点 |
| `antipsychotic-metabolic/` | 体重和血糖：抗精神病药的代谢风险 | 第 5 章 · 心血管代谢风险 |
| `clozapine/` | 氯氮平：难治的王牌 | 第 5 章 · 氯氮平 |
| `long-acting-injectables/` | 长效针剂：慢慢释放的小仓库 | 第 5 章 · 长效注射剂 |
| `muscarinic-antipsychotic/` | 不碰 D2 的抗精神病药 | 第 5 章 · 毒蕈碱受体与新机制 |
| `depression/` | 心情的天气预报 | 第 6 章 · 心境障碍 |
| `bipolar/` | 心境的跷跷板：双相障碍 | 第 6 章 · 双相谱系 |
| `norepinephrine-system/` | 去甲肾上腺素：蓝斑的警戒哨 | 第 6 章 · 去甲肾上腺素系统 |
| `gaba-system/` | GABA：大脑的刹车系统 | 第 6 章 · GABA 系统 |
| `monoamine-brakes/` | 递质之间的刹车网络 | 第 6～7 章 · 单胺的相互调节 |
| `hpa-axis/` | 压力的传话筒：HPA 轴 | 第 6 章 · 压力与 HPA 轴 |
| `inflammation-depression/` | 身体发炎，心情也会下雨 | 第 6 章 · 炎症与抑郁 |
| `symptom-circuits/` | 症状、回路和递质：Stahl 的看病地图 | 各章 · 症状—回路—递质 |
| `treatment-outcomes/` | 有效、缓解、复发：怎样算治好了 | 第 7 章 · 抑郁治疗疗效的定义 |
| `antidepressants/` | 回收站暂停营业 | 第 7 章 · 心境障碍的治疗 |
| `mood-stabilizers/` | 锂盐和心境稳定剂 | 第 7 章 · 心境稳定剂 |
| `multimodal-antidepressants/` | 不止堵门：多模式抗抑郁药 | 第 7 章 · 多模式抗抑郁药 |
| `tca/` | 三环类：钥匙串太长的老前辈 | 第 7 章 · 三环类抗抑郁药 |
| `neurosteroids/` | 突触外的安静开关：神经甾体 | 第 7 章 · GABA-A 与神经甾体 |
| `augmentation-trd/` | 一种药不够时：增效和难治性抑郁 | 第 7 章 · 增效策略与难治性抑郁 |
| `ketamine/` | 快车道：氯胺酮与艾司氯胺酮 | 第 7 章 · 快速起效的抗抑郁治疗 |
| `future-antidepressants/` | 抗抑郁的新路线 | 第 7 章 · 心境障碍的未来治疗 |
| `anxiety/` | 杏仁核的警报器 | 第 8 章 · 焦虑、创伤及其治疗 |
| `fear-outputs/` | 杏仁核的五条广播线 | 第 8 章 · 恐惧回路的输出 |
| `worry-loop/` | 停不下来的担心：担忧回路 | 第 8 章 · 担忧回路与广泛性焦虑 |
| `ptsd/` | 恐惧的记忆：创伤后应激 | 第 8 章 · 创伤与恐惧记忆 |
| `anxiety-subtypes/` | 惊恐、社交焦虑、广泛性焦虑：同中有异 | 第 8 章 · 各类焦虑障碍的治疗 |
| `pain/` | 慢性疼痛：音量调太大的警报 | 第 9 章 · 慢性疼痛 |
| `neuropathic-pain/` | 神经自己出了错：神经病理性疼痛 | 第 9 章 · 神经病理性疼痛 |
| `fibromyalgia/` | 浑身疼、睡不好、脑子雾：纤维肌痛 | 第 9 章 · 纤维肌痛 |
| `sleep/` | 睡眠开关和叫醒员 | 第 10 章 · 睡眠与觉醒障碍 |
| `histamine/` | 组胺：清醒管家和它的四扇门 | 第 10 章 · 组胺系统 |
| `rem-sleep/` | 一夜的换班：快速眼动和非快速眼动 | 第 10 章 · 睡眠结构与神经化学 |
| `circadian/` | 身体里的小时钟 | 第 10 章 · 昼夜节律 |
| `hypnotics/` | 助眠药的一晚：药物浓度决定你的睡眠 | 第 10 章 · 失眠的治疗：催眠药 |
| `daytime-sleepiness/` | 白天为什么总犯困：呼吸暂停和轮班 | 第 10 章 · 其他原因的白天嗜睡 |
| `narcolepsy/` | 开关卡不住：发作性睡病 | 第 10 章 · 食欲素与发作性睡病 |
| `restless-legs/` | 腿里的小虫子：不宁腿综合征 | 第 10 章 · 不宁腿综合征 |
| `wake-promoting/` | 叫醒大脑的几种办法：促醒药 | 第 10 章 · 促醒药 |
| `adhd/` | 前额叶的收音机 | 第 11 章 · 注意缺陷多动障碍 |
| `alpha2a-hcn/` | 前额叶的漏水小门 | 第 11 章 · 去甲肾上腺素与前额叶网络 |
| `adhd-development/` | 前额叶的成长时间表 | 第 11 章 · 神经发育和 ADHD |
| `stimulants/` | 两种兴奋剂，两种开门法 | 第 11 章 · 兴奋剂的作用机制 |
| `dementia/` | 消失的记忆邮差 | 第 12 章 · 痴呆 |
| `dementia-types/` | 不止阿尔茨海默：其他痴呆 | 第 12 章 · 痴呆的类型 |
| `amyloid-cascade/` | 淀粉样蛋白的连锁反应 | 第 12 章 · 淀粉样蛋白级联假说 |
| `dementia-biomarkers/` | 提前看见：分期和生物标志物 | 第 12 章 · 在太晚之前诊断阿尔茨海默病 |
| `acetylcholine-system/` | 乙酰胆碱：记忆邮差的一生 | 第 12 章 · 乙酰胆碱系统 |
| `dementia-agitation/` | 痴呆里的激越和幻觉 | 第 12 章 · 痴呆的行为和精神症状 |
| `ocd-impulsivity/` | 油门和刹车：冲动与强迫 | 第 13 章 · 冲动与强迫 |
| `addiction/` | 被劫持的奖赏快递 | 第 13 章 · 冲动、强迫与成瘾 |
| `opioid-receptors/` | μ、δ、κ：阿片受体三姐妹 | 第 13 章 · 内源性阿片系统 |
| `alcohol-opioids/` | 酒精和阿片：依赖与戒断 | 第 13 章 · 酒精与阿片类物质 |
| `nicotine/` | 尼古丁的钥匙和伐尼克兰 | 第 13 章 · 尼古丁 |
| `hallucinogens/` | 致幻剂和分离性物质：两种扭曲 | 第 13 章 · 致幻剂与“派对药” |
| `behavioral-addictions/` | 没有药物也会上瘾 | 第 13 章 · 行为成瘾和冲动控制障碍 |

所有集用到的医学数字和说法汇总在 `docs/医学核对清单.md`（各集的原稿在 `docs/checklist/`），发布前请逐条核对。

> 本项目是学习笔记性质的原创图解，与原书作者和出版社无关；角色和机制都做了简化，不能替代医生的诊断和用药建议。

## 运行

下载整个项目并解压，双击根目录的 `index.html`，就会打开「脑内小剧场」展厅：

- **按脑区**：一张卡通大脑侧面图，点前额叶、纹状体、伏隔核、杏仁核、海马、下丘脑、中脑、脑干，或者右上角的“突触放大镜”，底部会弹出展签，列出这个地方上演的小剧场。已开演的脑区会发光，筹备中的是灰色。
- **按章节**：按原书章节（第 5 版）分组列出。
- **角色图鉴**：认识常驻演员——多巴胺、5-HT、去甲肾上腺素、GABA、谷氨酸、乙酰胆碱、回收员、清扫员、剪刀手和药物访客。
- **即将开播**：正在筹备的新栏目预告——副作用诊察室、药物撞车现场、吃药冷知识、受体卡牌图鉴、递质的一天、看完考考你。
- 进入某一集后，点“← 回到展厅”或用手机的返回手势回到展厅。网址里的 `#synapse` 这类后缀会直接打开对应的一集。

每一集也可以单独打开：`<主题>/index.html`（导出视频时用的就是它）。页面要和 `shared/` 文件夹放在一起才能显示。

播放时键盘 ← / → 切换场景，空格暂停；手机上点一下画面进入下一幕。

## 导出视频和配音

和身体小剧场相同：

```bash
npm install
node record.js synapse                 # 横版 16:9，1920×1080
node record.js synapse --ratio 3:4     # 竖版 3:4，1080×1440
python3 make_audio.py synapse          # 先生成配音和背景音乐（离线 Kokoro 中文语音，见脚本开头的说明）
node record.js synapse --audio         # 带配音
```

## 发布到小红书「小工具」

```bash
pip install fonttools brotli
python3 build_xhs.py                  # 输出 dist/xiaohongshu/brain-theater.zip
python3 build_xhs.py --only-listed    # 有新集还在制作时，只打包已加进展厅的
```

打包时会用 terser 压缩 JS（先 `npm install`），并检查：兼容安卓 8.1 自带的 Chrome 61（ES2017，`tools/check_compat.js`）、总包 < 10MB、没有网络请求（站酷快乐体按用到的字裁剪后打包进去）、没有内联脚本和内联事件。

## 项目结构

- `index.html`：展厅（大脑地图 + 按章节 + 角色图鉴 + 即将开播 + 播放器）。
- `shared/engine.js`：共用引擎。日系漫画风画笔（Q 版拟人角色 `chara()`、对话气泡 `say()`、拟声词、闪光、樱花瓣、集中线、网点）、突触零件（末梢、受体、转运体、囊泡、离子、电信号）、小剧场登记与切换、网页播放和逐帧录制。
- `shared/catalog.js`：展厅目录。脑区的名字和一句小知识、原书章节分组、角色图鉴的介绍，以及“即将开播”的新栏目预告（`upcoming`）。
- `assets/icon/`：图标。改 `icon.html` 里的 SVG，再运行 `node tools/icon.js` 导出 1024 / 512 / 192 三种尺寸的 PNG。
- `shared/hub.js`、`shared/hub.css`、`shared/style.css`：展厅交互和页面样式。
- `<主题>/scene.js`：每一集的动画，用 `Anima.register(id, meta, factory)` 登记。`meta` 里有标题、对应章节（`chapter`）、所属脑区（`regions`）、章节分组（`parts`）和出场角色（`cast`）。
- `<主题>/index.html`：单独播放这一集的页面，以及 `video-meta`（配音的片头引子、读法替换）。
- `docs/制作指南.md`：新做一集的完整说明（引擎 API、画风和叙事约定、检查方法）。
- `tools/shoot.js`：逐幕截图检查画面；`tools/check_compat.js`：Chrome 61 兼容性检查。

### 新做一集

见 `docs/制作指南.md`。简单说：复制 `synapse/` 改成新主题，写好 `CH` 和画面代码，截图检查每一幕，然后在根目录 `index.html` 末尾加一行 `<script src="<主题>/scene.js"></script>`。
