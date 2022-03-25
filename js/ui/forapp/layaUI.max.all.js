var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var AddSkillsUI=(function(_super){
		function AddSkillsUI(){
			
		    this.img_bg=null;
		    this.btn_close=null;
		    this.skill_name=null;
		    this.btn_determine=null;
		    this.img_skill=null;

			AddSkillsUI.__super.call(this);
		}

		CLASS$(AddSkillsUI,'ui.AddSkillsUI',_super);
		var __proto__=AddSkillsUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AddSkillsUI.uiView);

		}

		AddSkillsUI.uiView={"type":"View","props":{"mouseThrough":true},"child":[{"type":"Image","props":{"y":154,"x":214,"width":239,"var":"img_bg","skin":"gameres/png/addskills_bg.png","sizeGrid":"0,14,0,81","name":"img_bg","height":129},"child":[{"type":"Button","props":{"var":"btn_close","top":-22,"stateNum":2,"skin":"gameres/ui/btn_close.png","right":-22,"name":"close"}},{"type":"Label","props":{"y":35,"x":85,"var":"skill_name","valign":"middle","text":"刺杀剑术","overflow":"hidden","name":"skill_name","fontSize":20,"color":"#e29d13","bold":true}},{"type":"Text","props":{"y":67,"x":85,"valign":"middle","text":"是否装备这个技能","fontSize":17,"color":"#f6d697"}},{"type":"Button","props":{"width":68,"var":"btn_determine","stateNum":2,"skin":"gameres/ui/btn_ok.png","right":2.5,"name":"determine","labelSize":16,"labelColors":"#f6d697,#e29d13","label":"确定","height":24,"bottom":3}},{"type":"Image","props":{"y":39,"x":20,"width":45,"var":"img_skill","skin":"gameres/ui/addskills_img.png","name":"img_skill","height":45}}]}]};
		return AddSkillsUI;
	})(View);
var AlertUI=(function(_super){
		function AlertUI(){
			
		    this.img_bg=null;

			AlertUI.__super.call(this);
		}

		CLASS$(AlertUI,'ui.AlertUI',_super);
		var __proto__=AlertUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AlertUI.uiView);

		}

		AlertUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":117,"x":167,"width":545,"var":"img_bg","skin":"gameres/png/fenghao_res.png","sizeGrid":"5,5,5,5","height":242,"alpha":1},"child":[{"type":"Box","props":{"y":-117,"x":-167,"width":470,"name":"sel_node","height":52},"child":[{"type":"Button","props":{"y":256,"x":262,"width":26,"stateNum":2,"skin":"gameres/ui/alert_sel_btn.png","name":"btn_sel_0","height":26}},{"type":"Button","props":{"y":256,"x":527,"stateNum":2,"skin":"gameres/ui/alert_sel_btn.png","name":"btn_sel_1"}},{"type":"Text","props":{"y":260,"x":304,"wordWrap":true,"valign":"middle","text":"1111","name":"lbl_sel_0","fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":260,"x":567,"wordWrap":true,"valign":"middle","text":"1111","name":"lbl_sel_1","fontSize":18,"color":"#ffffff","align":"left"}}]},{"type":"TextInput","props":{"y":97,"x":68,"width":413,"type":"number","text":"0","name":"txt_input","height":22,"fontSize":18,"font":"SimSun","color":"#efe9e9","borderColor":"#51462e","bgColor":"#201f1f"}},{"type":"Text","props":{"y":49,"x":41,"wordWrap":true,"width":450,"valign":"middle","text":"xxxxxxxxxxxxxxxx","name":"lbl_txt_ipt","height":32,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":3,"x":38,"wordWrap":true,"width":460,"valign":"middle","name":"lbl_title","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":51,"x":48,"wordWrap":true,"width":450,"valign":"middle","text":"xxxxxxxxxxxxxxxx","name":"lbl_txt","height":113,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":-159,"x":-222,"name":"node_grop"},"child":[{"type":"Button","props":{"y":343,"x":286,"stateNum":2,"skin":"gameres/ui/alert_btn_rigjt.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#ffffff,#ffffff","label":"确定"}},{"type":"Button","props":{"y":343,"x":575,"stateNum":2,"skin":"gameres/ui/alert_btn_rigjt.png","name":"btn_cnl","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#ffffff,#ffffff","label":"取消"}}]},{"type":"Button","props":{"y":186,"x":212,"stateNum":2,"skin":"gameres/ui/alert_btn_rigjt.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#ffffff,#ffffff","label":"确定"}}]}]};
		return AlertUI;
	})(View);
var AutoItemUI=(function(_super){
		function AutoItemUI(){
			
		    this.img_bg=null;
		    this.img_itembg=null;
		    this.img_item=null;
		    this.btn_use=null;
		    this.btn_close=null;
		    this.lab_itemName=null;

			AutoItemUI.__super.call(this);
		}

		CLASS$(AutoItemUI,'ui.AutoItemUI',_super);
		var __proto__=AutoItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AutoItemUI.uiView);

		}

		AutoItemUI.uiView={"type":"Dialog","props":{"y":0,"x":0,"width":163,"height":203},"child":[{"type":"Image","props":{"var":"img_bg","skin":"gameres/ui/autoItem.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":55,"x":59,"width":68,"var":"img_itembg","skin":"gameres/ui/img_bag_bg.png","height":68},"child":[{"type":"Image","props":{"var":"img_item","centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":162,"x":48,"var":"btn_use","stateNum":2,"skin":"gameres/ui/btn_autoItem.png","labelStrokeColor":"#191919","labelStroke":1,"labelSize":17,"labelFont":"SimHei","labelColors":"#ffedcb,#ffedcb","label":"使用(5)"}},{"type":"Button","props":{"y":-20,"x":122,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Label","props":{"y":132,"x":17,"width":149,"visible":true,"var":"lab_itemName","height":20,"fontSize":18,"font":"SimHei","color":"#ffffff","align":"center"}}]}]};
		return AutoItemUI;
	})(Dialog);
var AuxiliaryUI=(function(_super){
		function AuxiliaryUI(){
			
		    this.img_base=null;
		    this.btn_exit=null;
		    this.box0=null;
		    this.backmusic=null;
		    this.clear=null;
		    this.nameshow3=null;
		    this.showhp=null;
		    this.gameVoice=null;
		    this.voiceLable=null;
		    this.viewValue=null;
		    this.showExp=null;
		    this.ShowName=null;
		    this.ShowTitle=null;
		    this.nameshow1=null;
		    this.nameshow2=null;
		    this.nameshow4=null;
		    this.banCkilcMove=null;
		    this.heroeqsecure=null;
		    this.unpack=null;
		    this.notLock=null;
		    this.hidePlayer=null;
		    this.hideMonster=null;
		    this.i_delayShow=null;
		    this.showBlue=null;
		    this.smooth=null;
		    this.viewControl=null;
		    this.humsimple=null;
		    this.monsimple=null;
		    this.doubleRocker=null;
		    this.weaponsimple=null;
		    this.autoWear=null;
		    this.box1=null;
		    this.z_autoskill_1=null;
		    this.z_autoskill_2=null;
		    this.z_autoskill_3=null;
		    this.z_autoskill_4=null;
		    this.zs_gwcs=null;
		    this.zs_lyjf=null;
		    this.zs_zrjf=null;
		    this.f_autoskill_1=null;
		    this.d_autoskill_2=null;
		    this.d_autoskill_1=null;
		    this.d_autoskill_3=null;
		    this.d_autoskill_4=null;
		    this.f_keepskill_1=null;
		    this.d_autoskill_7=null;
		    this.d_autoskill_8=null;
		    this.d_autoskill_6=null;
		    this.d_autoskill_5=null;
		    this.box2=null;
		    this.hpN_img=null;
		    this.autohp=null;
		    this.automp=null;
		    this.autohp_mp2=null;
		    this.autohp_mp=null;
		    this.autotp1=null;
		    this.autotp=null;
		    this.hptimetext=null;
		    this.hp_time=null;
		    this.mptimetext=null;
		    this.mp_time=null;
		    this.mpN_img=null;
		    this.mppercentagetext=null;
		    this.mp_pro=null;
		    this.mp_vs=null;
		    this.hppercentagetext=null;
		    this.hp_pro=null;
		    this.hp_vs=null;
		    this.hpS_img=null;
		    this.hptimetext1=null;
		    this.hp_mp_time=null;
		    this.mptimetext1=null;
		    this.hp_mp_time2=null;
		    this.mpS_img=null;
		    this.hppercentagetext2=null;
		    this.Hp_mp_pro2=null;
		    this.Hp_mp_vs2=null;
		    this.hppercentagetext1=null;
		    this.Hp_mp_pro=null;
		    this.Hp_mp_vs=null;
		    this.tp_img=null;
		    this.tptimetext=null;
		    this.tp_time_vs=null;
		    this.tptimetext1=null;
		    this.tp_time_vs2=null;
		    this.tp1_img=null;
		    this.tppercentagetext1=null;
		    this.tp_pro1=null;
		    this.tp_vs1=null;
		    this.tppercentagetext=null;
		    this.tp_pro=null;
		    this.tp_vs=null;
		    this.box3=null;
		    this.searchMonster=null;
		    this.allCancel=null;
		    this.monsterlist=null;
		    this.isExclude=null;
		    this.monsterName=null;
		    this.btn_ref_mon=null;
		    this.box4=null;
		    this.allPick=null;
		    this.allColor=null;
		    this.allAutopick=null;
		    this.allShow=null;
		    this.itemlist=null;
		    this.itemname=null;
		    this.isshow=null;
		    this.ispickup=null;
		    this.special=null;
		    this.prompt=null;
		    this.scrollBar=null;
		    this.itemtext=null;
		    this.btn_ref=null;
		    this.itemSort_select=null;
		    this.itemSort_bg=null;
		    this.itemSort_all=null;
		    this.itemSort_skill=null;
		    this.itemSort_weapon=null;
		    this.itemSort_clothes=null;
		    this.itemSort_jewelry=null;
		    this.itemSort_drug=null;
		    this.itemSort_others=null;
		    this.pickPlan=null;
		    this.box5=null;
		    this.ds_cure_limit=null;
		    this.ds_limit_pro=null;
		    this.ds_limit_slider=null;
		    this.ds_cure_list=null;
		    this.ds_cure=null;
		    this.ds_summon_list=null;
		    this.ds_summon=null;
		    this.poison_ds=null;
		    this.group_ds_list=null;
		    this.group_ds=null;
		    this.single_ds_list=null;
		    this.single_ds=null;
		    this.group_fs_list=null;
		    this.group_fs=null;
		    this.single_fs_list=null;
		    this.single_fs=null;
		    this.exercise_list=null;
		    this.ds_cure_time=null;
		    this.ds_time_slider=null;
		    this.exercise_time=null;
		    this.exercise_slider=null;
		    this.pickItemsFirst=null;
		    this.exercise=null;
		    this.auto_dodge=null;
		    this.box6=null;
		    this.hpN_imgH=null;
		    this.autotpH=null;
		    this.autohp_mp2H=null;
		    this.autohp_mpH=null;
		    this.autompH=null;
		    this.autohpH=null;
		    this.hptimetextH=null;
		    this.hp_timeH=null;
		    this.mptimetextH=null;
		    this.mp_timeH=null;
		    this.mpN_imgH=null;
		    this.mppercentagetextH=null;
		    this.mp_proH=null;
		    this.mp_vsH=null;
		    this.hppercentagetextH=null;
		    this.hp_proH=null;
		    this.hp_vsH=null;
		    this.hpS_imgH=null;
		    this.hptimetext1H=null;
		    this.hp_mp_timeH=null;
		    this.mptimetext1H=null;
		    this.hp_mp_time2H=null;
		    this.mpS_imgH=null;
		    this.hppercentagetext2H=null;
		    this.Hp_mp_pro2H=null;
		    this.Hp_mp_vs2H=null;
		    this.hppercentagetext1H=null;
		    this.Hp_mp_proH=null;
		    this.Hp_mp_vsH=null;
		    this.tptimetextH=null;
		    this.tp_time_vsH=null;
		    this.tppercentagetextH=null;
		    this.tp_proH=null;
		    this.tp_vsH=null;
		    this.tab=null;
		    this.item0=null;
		    this.item1=null;
		    this.item2=null;
		    this.item3=null;
		    this.item4=null;
		    this.item5=null;
		    this.item6=null;

			AuxiliaryUI.__super.call(this);
		}

		CLASS$(AuxiliaryUI,'ui.AuxiliaryUI',_super);
		var __proto__=AuxiliaryUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AuxiliaryUI.uiView);

		}

		AuxiliaryUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_base","skin":"gameres/png/auxiliary_bg.png","name":"img_base","height":465,"centerY":3,"centerX":0},"child":[{"type":"Button","props":{"y":-4,"x":637,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit"}},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box0","name":"box0","height":396},"child":[{"type":"CheckBox","props":{"y":108,"x":337,"var":"backmusic","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"backmusic","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"背景音乐"}},{"type":"CheckBox","props":{"y":234,"x":29,"var":"clear","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"clear","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"清理尸体(1秒)"}},{"type":"CheckBox","props":{"y":66,"x":29,"var":"nameshow3","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"nameshow3","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"人物显名"}},{"type":"CheckBox","props":{"y":66,"x":183,"var":"showhp","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"showhp","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"显示血条"}},{"type":"HSlider","props":{"y":320,"x":108,"width":180,"var":"gameVoice","value":50,"skin":"gameres/ui/timeslider.png","showLabel":false,"scaleY":0.8,"scaleX":0.8,"name":"gameVoice","min":1,"max":101,"height":32}},{"type":"Label","props":{"y":325,"x":29,"text":"游戏音量","fontSize":18,"color":"#e19c34"}},{"type":"Label","props":{"y":365,"x":29,"text":"视图缩放","fontSize":18,"color":"#e19c34"}},{"type":"Label","props":{"y":325,"x":262,"width":17.796875,"var":"voiceLable","text":"50","name":"voiceLable","height":16,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":366,"x":261,"var":"viewValue","text":"100%","fontSize":16,"color":"#ffffff","align":"center"}},{"type":"CheckBox","props":{"y":108,"x":183,"var":"showExp","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"showExp","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"显示经验"}},{"type":"CheckBox","props":{"y":24,"x":29,"var":"ShowName","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"ShowName","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"只显人名"}},{"type":"CheckBox","props":{"y":24,"x":183,"var":"ShowTitle","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"ShowTitle","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"隐藏称号"}},{"type":"CheckBox","props":{"y":108,"x":29,"var":"nameshow1","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"nameshow1","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"怪物显名"}},{"type":"CheckBox","props":{"y":150,"x":29,"var":"nameshow2","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"nameshow2","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"NPC显名"}},{"type":"CheckBox","props":{"y":192,"x":29,"var":"nameshow4","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"nameshow4","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"宠物显名"}},{"type":"CheckBox","props":{"y":150,"x":337,"var":"banCkilcMove","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"banCkilcMove","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"禁止点击移动"}},{"type":"CheckBox","props":{"y":66,"x":337,"var":"heroeqsecure","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"heroeqsecure","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"英雄开盾"}},{"type":"CheckBox","props":{"y":24,"x":337,"var":"unpack","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"unpack","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"自动解包"}},{"type":"CheckBox","props":{"y":192,"x":337,"var":"notLock","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"notLock","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"禁止自动锁定"}},{"type":"CheckBox","props":{"y":150,"x":183,"var":"hidePlayer","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"hidePlayer","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"屏蔽玩家"}},{"type":"CheckBox","props":{"y":192,"x":183,"var":"hideMonster","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"hideMonster","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"屏蔽怪物"}},{"type":"CheckBox","props":{"y":276,"x":29,"var":"i_delayShow","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"i_delayShow","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"延迟显示"}},{"type":"CheckBox","props":{"y":234,"x":337,"var":"showBlue","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"showBlue","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"护身显蓝"}},{"type":"CheckBox","props":{"y":234,"x":205,"var":"smooth","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"smooth","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"平滑模式"}},{"type":"HSlider","props":{"y":359,"x":109,"width":180,"var":"viewControl","value":50,"skin":"gameres/ui/timeslider.png","showLabel":false,"scaleY":0.8,"scaleX":0.8,"min":1,"max":101,"height":32}},{"type":"CheckBox","props":{"y":276,"x":205,"var":"humsimple","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"humsimple","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"人物简装"}},{"type":"CheckBox","props":{"y":276,"x":337,"var":"monsimple","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"monsimple","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"怪物简装"}},{"type":"CheckBox","props":{"y":354,"x":337,"var":"doubleRocker","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"doubleRocker","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"双摇杆"}},{"type":"CheckBox","props":{"y":315,"x":337,"var":"weaponsimple","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"weaponsimple","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"武器简装"}},{"type":"CheckBox","props":{"y":65,"x":337,"var":"autoWear","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"autoWear","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"9","labelColors":"#e0c9aa,#c69c61","label":"自动穿戴"}}]},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box1","name":"box1","height":396},"child":[{"type":"CheckBox","props":{"y":44,"x":11,"var":"z_autoskill_1","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"z_autoskill_1","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"刀刀刺杀"}},{"type":"CheckBox","props":{"y":44,"x":149,"var":"z_autoskill_2","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"z_autoskill_2","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动烈火"}},{"type":"CheckBox","props":{"y":84,"x":11,"var":"z_autoskill_3","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"z_autoskill_3","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"智能半月"}},{"type":"CheckBox","props":{"y":84,"x":308,"var":"z_autoskill_4","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"z_autoskill_4","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动开天斩"}},{"type":"CheckBox","props":{"y":44,"x":308,"var":"zs_gwcs","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"zs_gwcs","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"隔位刺杀"}},{"type":"CheckBox","props":{"y":124,"x":11,"var":"zs_lyjf","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"zs_lyjf","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动龙影剑法"}},{"type":"CheckBox","props":{"y":84,"x":149,"var":"zs_zrjf","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"zs_zrjf","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动逐日剑法"}},{"type":"CheckBox","props":{"y":201,"x":11,"var":"f_autoskill_1","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"f_autoskill_1","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"持续开盾"}},{"type":"CheckBox","props":{"y":356,"x":10,"var":"d_autoskill_2","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"d_autoskill_2","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"持续隐身"}},{"type":"ComboBox","props":{"y":285,"x":126,"width":85,"var":"d_autoskill_1","skin":"gameres/ui/auxiliary_combobox.png","sizeGrid":"0,21,0,0","selectedIndex":0,"name":"d_autoskill_1","labels":"互换,红毒,绿毒","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":24}},{"type":"CheckBox","props":{"y":278,"x":11,"var":"d_autoskill_3","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"d_autoskill_3","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动毒符"}},{"type":"Label","props":{"y":15,"x":11,"text":"战士","fontSize":20,"color":"#fbf1b3"}},{"type":"Label","props":{"y":251,"x":11,"text":"道士","fontSize":20,"color":"#fbf1b3"}},{"type":"Label","props":{"y":173,"x":11,"text":"法师","fontSize":20,"color":"#fbf1b3"}},{"type":"CheckBox","props":{"y":317,"x":11,"var":"d_autoskill_4","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"d_autoskill_4","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"治愈术只对自己释放"}},{"type":"CheckBox","props":{"y":202,"x":148,"var":"f_keepskill_1","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"f_keepskill_1","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"持续施法"}},{"type":"ComboBox","props":{"y":288,"x":436,"width":60,"var":"d_autoskill_7","skin":"gameres/ui/auxiliary_combobox.png","sizeGrid":"0,21,0,0","selectedIndex":0,"name":"d_autoskill_7","labels":"30,60,90,120","labelSize":18,"labelPadding":"0,0,0,5","itemSize":20,"height":20}},{"type":"ComboBox","props":{"y":329,"x":436,"width":60,"var":"d_autoskill_8","skin":"gameres/ui/auxiliary_combobox.png","sizeGrid":"0,21,0,0","selectedIndex":0,"name":"d_autoskill_8","labels":"30,60,90,120","labelSize":18,"labelPadding":"0,0,0,5","itemSize":20,"height":20}},{"type":"Label","props":{"y":287,"x":394,"text":"间隔","fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":328,"x":395,"text":"间隔","fontSize":20,"color":"#ffffff"}},{"type":"CheckBox","props":{"y":318,"x":214,"var":"d_autoskill_6","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"d_autoskill_6","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"10","labelColors":"#ffffff","label":"自动圣神战甲术"}},{"type":"CheckBox","props":{"y":278,"x":215,"var":"d_autoskill_5","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"d_autoskill_5","labelStrokeColor":"#ffffff","labelSize":20,"labelPadding":"10","labelColors":"#ffffff","label":"自动幽灵盾"}}]},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box2","name":"box2","height":396},"child":[{"type":"Image","props":{"y":8,"x":3,"width":491,"height":130},"child":[{"type":"Image","props":{"y":29,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":39,"x":15,"width":58,"skin":"gameres/ui/auxiliary_heal_img.png","height":29}},{"type":"Image","props":{"y":78,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":89,"x":15,"width":58,"skin":"gameres/ui/auxiliary_magic_img.png","height":29}},{"type":"Label","props":{"y":33,"x":215,"text":"%自动吃药","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":7,"x":207,"text":"普通药设置","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":80,"x":119,"text":"魔法值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":80,"x":215,"text":"%自动吃药","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":44,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":44,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":95,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":95,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}}]},{"type":"Image","props":{"y":138,"x":3,"width":491,"height":130},"child":[{"type":"Image","props":{"y":29,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":39,"x":15,"width":58,"skin":"gameres/ui/auxiliary_heal_img.png","height":29}},{"type":"Image","props":{"y":78,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":89,"x":15,"width":58,"skin":"gameres/ui/auxiliary_magic_img.png","height":29}},{"type":"Label","props":{"y":33,"x":215,"text":"%自动吃药","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":7,"x":207,"text":"瞬回药设置","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":80,"x":119,"text":"魔法值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":80,"x":215,"text":"%自动吃药","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":47,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":47,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":92,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":92,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}}]},{"type":"Image","props":{"y":267,"x":3,"width":491,"height":130},"child":[{"type":"Image","props":{"y":29,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":39,"x":15,"width":58,"skin":"gameres/ui/auxiliary_heal_img.png","height":29}},{"type":"Image","props":{"y":74,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":84,"x":15,"width":58,"skin":"gameres/ui/auxiliary_magic_img.png","height":29}},{"type":"Label","props":{"y":33,"x":215,"text":"%自动传送","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":7,"x":217,"text":"保护设置","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":78,"x":119,"text":"魔法值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":78,"x":215,"text":"%自动传送","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":47,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":47,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":90,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":90,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}}]},{"type":"Image","props":{"y":44,"x":290,"width":33,"var":"hpN_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"hpN_img","height":33},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"CheckBox","props":{"y":43,"x":429,"width":62,"var":"autohp","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autohp","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":36}},{"type":"CheckBox","props":{"y":93,"x":429,"width":62,"var":"automp","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"automp","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":36}},{"type":"CheckBox","props":{"y":221,"x":429,"width":77,"var":"autohp_mp2","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autohp_mp2","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":38}},{"type":"CheckBox","props":{"y":176,"x":429,"width":77,"var":"autohp_mp","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autohp_mp","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":36}},{"type":"CheckBox","props":{"y":347,"x":429,"width":77,"var":"autotp1","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autotp1","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":38}},{"type":"CheckBox","props":{"y":305,"x":429,"width":77,"var":"autotp","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autotp","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":36}},{"type":"Button","props":{"y":45,"x":365,"var":"hptimetext","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"hptimetext","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":-2,"x":50,"visible":false,"var":"hp_time","skin":"gameres/ui/textslider.png","showLabel":false,"name":"hp_time","min":5,"max":10}}]},{"type":"Button","props":{"y":94,"x":365,"var":"mptimetext","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"mptimetext","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":-2,"x":50,"visible":false,"var":"mp_time","skin":"gameres/ui/textslider.png","showLabel":false,"name":"mp_time","min":5,"max":10}}]},{"type":"Image","props":{"y":93,"x":290,"var":"mpN_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"mpN_img"},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"Label","props":{"y":89,"x":186,"var":"mppercentagetext","text":"100","name":"mppercentagetext","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":18,"x":-102,"width":200,"var":"mp_pro","value":100,"skin":"gameres/ui/auxiliary_mppro.png","name":"mp_pro","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"mp_vs","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"mp_vs","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":40,"x":186,"width":21,"var":"hppercentagetext","text":"100","name":"hppercentagetext","height":12,"fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":18,"x":-102,"width":200,"var":"hp_pro","value":100,"skin":"gameres/ui/auxiliary_hppro.png","name":"hp_pro","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"hp_vs","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"hp_vs","min":1,"max":100,"height":20}}]},{"type":"Image","props":{"y":177,"x":290,"var":"hpS_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"hpS_img"},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"Button","props":{"y":178,"x":365,"var":"hptimetext1","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"hptimetext1","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":1,"x":51,"visible":false,"var":"hp_mp_time","skin":"gameres/ui/textslider.png","showLabel":false,"name":"hp_mp_time","min":1,"max":5}}]},{"type":"Button","props":{"y":223,"x":365,"var":"mptimetext1","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"mptimetext1","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":0,"x":51,"visible":false,"var":"hp_mp_time2","skin":"gameres/ui/textslider.png","showLabel":false,"name":"hp_mp_time2","min":1,"max":5}}]},{"type":"Image","props":{"y":222,"x":290,"var":"mpS_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"mpS_img"},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"Label","props":{"y":218,"x":186,"var":"hppercentagetext2","text":"100","name":"hppercentagetext2","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"Hp_mp_pro2","value":100,"skin":"gameres/ui/auxiliary_mppro.png","name":"Hp_mp_pro2","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"Hp_mp_vs2","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"Hp_mp_vs2","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":171,"x":186,"var":"hppercentagetext1","text":"100","name":"hppercentagetext1","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"Hp_mp_pro","value":100,"skin":"gameres/ui/auxiliary_hppro.png","name":"Hp_mp_pro","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"Hp_mp_vs","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"Hp_mp_vs","min":1,"max":100,"height":20}}]},{"type":"Image","props":{"y":305,"x":290,"var":"tp_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"tp_img"},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"Button","props":{"y":305,"x":365,"var":"tptimetext","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"tptimetext","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":-21,"x":49,"visible":false,"var":"tp_time_vs","skin":"gameres/ui/textslider.png","showLabel":false,"name":"tp_time_vs","min":15,"max":30}}]},{"type":"Button","props":{"y":352,"x":365,"var":"tptimetext1","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"tptimetext1","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":-62,"x":50,"visible":false,"var":"tp_time_vs2","skin":"gameres/ui/textslider.png","showLabel":false,"name":"tp_time_vs2","min":15,"max":30}}]},{"type":"Image","props":{"y":352,"x":290,"var":"tp1_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"tp1_img"},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"Label","props":{"y":344,"x":186,"var":"tppercentagetext1","text":"100","name":"tppercentagetext1","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"tp_pro1","value":100,"skin":"gameres/ui/auxiliary_mppro.png","name":"tp_pro1","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"tp_vs1","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"tp_vs1","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":299,"x":186,"var":"tppercentagetext","text":"100","name":"tppercentagetext","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"tp_pro","value":100,"skin":"gameres/ui/auxiliary_hppro.png","name":"tp_pro","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"tp_vs","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"tp_vs","min":1,"max":100,"height":20}}]}]},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box3","name":"box3","height":396},"child":[{"type":"Label","props":{"y":57,"x":180,"width":133,"valign":"middle","text":"自动战斗筛选","strokeColor":"#000000","height":25,"fontSize":20,"color":"#fbf1b3","bold":true}},{"type":"Label","props":{"y":58,"x":30,"width":92,"valign":"middle","text":"怪物名字","height":25,"fontSize":20,"color":"#fbf1b3","bold":true}},{"type":"Image","props":{"y":15,"x":232,"skin":"gameres/ui/search_img.png","scaleY":0.5,"scaleX":0.5}},{"type":"TextInput","props":{"y":20,"x":33,"width":191,"var":"searchMonster","promptColor":"#5e4730","prompt":"输入物品关键字查找","name":"searchMonster","height":30,"fontSize":14,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16","align":"center"}},{"type":"TextArea","props":{"y":370,"x":30,"width":317,"text":"开始自动挂机后不会攻击勾选中的怪物","height":22,"fontSize":18,"font":"SimHei","color":"#ff0400","bold":true}},{"type":"CheckBox","props":{"y":53,"x":311,"var":"allCancel","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","name":"allCancel"}},{"type":"List","props":{"y":89,"x":19,"width":481,"var":"monsterlist","vScrollBarSkin":"gameres/ui/vscroll.png","name":"monsterlist","height":263},"child":[{"type":"Box","props":{"y":0,"x":0,"width":480,"name":"render","height":40},"child":[{"type":"Image","props":{"y":35,"width":480,"skin":"gameres/png/red_line.png"}},{"type":"CheckBox","props":{"y":0,"x":212,"var":"isExclude","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","name":"isExclude"}},{"type":"Label","props":{"y":5,"x":7,"width":90,"var":"monsterName","valign":"middle","text":"怪物名字","name":"monsterName","height":30,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"}}]}]},{"type":"Button","props":{"y":362,"x":398,"width":95,"var":"btn_ref_mon","stateNum":2,"skin":"gameres/ui/btn_ref.png","name":"btn_ref_mon","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","height":33}}]},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box4","name":"box4","mouseThrough":true,"height":396},"child":[{"type":"Image","props":{"y":7,"x":0,"width":501,"skin":"gameres/png/auxiliary_item_bg.png","height":386},"child":[{"type":"Image","props":{"y":0,"x":0,"width":501,"skin":"gameres/png/auxiliary_item_kuang1.png","height":51}},{"type":"Image","props":{"y":330,"x":0,"width":501,"skin":"gameres/png/auxiliary_item_kuang2.png","height":58}}]},{"type":"CheckBox","props":{"y":14,"x":226,"width":38,"var":"allPick","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"allPick","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","height":36}},{"type":"CheckBox","props":{"y":13,"x":314,"width":38,"var":"allColor","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"allColor","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","height":36}},{"type":"CheckBox","props":{"y":13,"x":438,"width":38,"var":"allAutopick","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"allAutopick","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","height":36}},{"type":"CheckBox","props":{"y":15,"x":138,"width":38,"var":"allShow","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"allShow","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","height":36}},{"type":"Label","props":{"y":24,"x":4,"text":"物品名称","fontSize":18,"font":"SimHei","color":"#e19c34"}},{"type":"Label","props":{"y":24,"x":98,"text":"显示","fontSize":18,"font":"SimHei","color":"#e19c34"}},{"type":"Label","props":{"y":24,"x":186,"text":"拾取","fontSize":18,"font":"SimHei","color":"#e19c34"}},{"type":"Label","props":{"y":24,"x":274,"text":"颜色","fontSize":18,"font":"SimHei","color":"#e19c34"}},{"type":"Label","props":{"y":24,"x":362,"text":"挂机拾取","fontSize":18,"font":"SimHei","color":"#e19c34"}},{"type":"List","props":{"y":57,"x":4,"width":495,"var":"itemlist","vScrollBarSkin":"gameres/ui/vscroll.png","repeatY":8,"repeatX":1,"name":"itemlist","height":283},"child":[{"type":"Box","props":{"y":1,"x":0,"width":600,"name":"render","height":40},"child":[{"type":"Label","props":{"y":9,"x":0,"var":"itemname","text":"物品名称","name":"itemname","fontSize":18,"color":"#e0c9aa"}},{"type":"CheckBox","props":{"y":1,"x":134,"var":"isshow","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"isshow","labelStrokeColor":"#ffffff","labelSize":17,"labelPadding":"5,,,5","labelColors":"#ffffff"}},{"type":"CheckBox","props":{"y":1,"x":223,"var":"ispickup","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"ispickup","labelStrokeColor":"#ffffff","labelSize":17,"labelPadding":"5,,,5","labelColors":"#ffffff"}},{"type":"CheckBox","props":{"y":1,"x":311,"var":"special","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"special","labelStrokeColor":"#ffffff","labelSize":17,"labelPadding":"5,,,5","labelColors":"#ffffff"}},{"type":"CheckBox","props":{"y":1,"x":435,"var":"prompt","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"prompt","labelStrokeColor":"#ffffff","labelSize":17,"labelPadding":"5,,,5","labelColors":"#ffffff"}}]},{"type":"VScrollBar","props":{"y":-11,"x":405,"width":20,"var":"scrollBar","name":"scrollBar","height":165}}]},{"type":"TextInput","props":{"y":350,"x":13,"width":96,"var":"itemtext","promptColor":"#ca9f63","prompt":"关键字查找","name":"itemtext","height":33,"fontSize":18,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16","align":"center"}},{"type":"Button","props":{"y":350,"x":391,"width":95,"var":"btn_ref","stateNum":2,"skin":"gameres/ui/btn_ref.png","name":"btn_ref","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","height":33}},{"type":"Image","props":{"y":354,"x":111,"width":50,"skin":"gameres/ui/search_img.png","scaleY":0.5,"scaleX":0.5,"height":50}},{"type":"Button","props":{"y":350,"x":295,"width":95,"var":"itemSort_select","stateNum":2,"skin":"gameres/ui/itemSort_all.png","name":"itemSort_select","height":33}},{"type":"Image","props":{"y":71,"x":279,"width":125,"visible":false,"var":"itemSort_bg","skin":"gameres/png/itemSort_bg.png","name":"itemSort_bg","height":289},"child":[{"type":"Button","props":{"y":8,"x":15,"width":95,"var":"itemSort_all","stateNum":2,"skin":"gameres/ui/itemSort_all.png","name":"全部","labelSize":50,"labelColors":"yellow","height":33}},{"type":"Button","props":{"y":48,"x":15,"width":95,"var":"itemSort_skill","stateNum":2,"skin":"gameres/ui/itemSort_skill.png","name":"书籍类","height":33}},{"type":"Button","props":{"y":88,"x":15,"width":95,"var":"itemSort_weapon","stateNum":2,"skin":"gameres/ui/itemSort_weapon.png","name":"武器类","height":33}},{"type":"Button","props":{"y":128,"x":15,"width":95,"var":"itemSort_clothes","stateNum":2,"skin":"gameres/ui/itemSort_clothes.png","name":"衣服类","height":33}},{"type":"Button","props":{"y":168,"x":15,"width":95,"var":"itemSort_jewelry","stateNum":2,"skin":"gameres/ui/itemSort_jewelry.png","name":"饰品类","height":33}},{"type":"Button","props":{"y":208,"x":15,"width":95,"var":"itemSort_drug","stateNum":2,"skin":"gameres/ui/itemSort_drug.png","name":"药品类","height":33}},{"type":"Button","props":{"y":248,"x":15,"width":95,"var":"itemSort_others","stateNum":2,"skin":"gameres/ui/itemSort_others.png","name":"其它类","height":33}}]},{"type":"ComboBox","props":{"y":358,"x":234,"width":49,"var":"pickPlan","skin":"gameres/ui/auxiliary_combobox.png","sizeGrid":"0,21,0,0","selectedIndex":0,"name":"pickPlan","labels":"1,2","labelSize":18,"labelPadding":"0,0,0,5","itemSize":20,"height":20}},{"type":"Label","props":{"y":359,"x":159,"width":64,"text":"拾取方案","height":18,"fontSize":18,"font":"SimHei","color":"#e19c34"}}]},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box5","name":"box5","height":396},"child":[{"type":"Label","props":{"y":115,"x":36,"width":39,"valign":"middle","text":"道士","height":25,"fontSize":18,"color":"#fbf1b3"}},{"type":"Label","props":{"y":9,"x":36,"width":39,"valign":"middle","text":"法师","height":25,"fontSize":18,"color":"#fbf1b3"}},{"type":"Label","props":{"y":289,"x":148,"width":91,"valign":"middle","text":"%时，每隔","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":289,"x":37,"width":39,"valign":"middle","text":"HP低于","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":291,"x":100,"width":48,"var":"ds_cure_limit","text":"3","strokeColor":"#000000","stroke":2,"restrict":"0-9","promptColor":"#ffffff","name":"ds_cure_limit","height":20,"fontSize":18,"editable":false,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16","align":"center"},"child":[{"type":"ProgressBar","props":{"y":35,"x":-70,"width":304,"var":"ds_limit_pro","value":100,"skin":"gameres/ui/auxiliary_hppro.png","name":"ds_limit_pro","height":10}},{"type":"HSlider","props":{"y":21,"x":-72,"width":309,"var":"ds_limit_slider","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"ds_limit_slider","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":289,"x":289,"width":81,"valign":"middle","text":"使用技能","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"ComboBox","props":{"y":289,"x":367,"width":114,"visibleNum":4,"var":"ds_cure_list","skin":"gameres/ui/auxiliary_combobox.png","selectedIndex":0,"scrollBarSkin":"gameres/ui/vscroll.png","name":"ds_cure_list","labels":"治疗术,群体治疗术","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":25}},{"type":"CheckBox","props":{"y":251,"x":197,"var":"ds_cure","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"ds_cure","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动治疗"}},{"type":"ComboBox","props":{"y":225,"x":199,"visibleNum":4,"var":"ds_summon_list","skin":"gameres/ui/auxiliary_combobox.png","selectedIndex":0,"scrollBarSkin":"gameres/ui/vscroll.png","name":"ds_summon_list","labels":"召唤骷髅,召唤神兽","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":25}},{"type":"CheckBox","props":{"y":216,"x":35,"var":"ds_summon","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"ds_summon","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动召唤宠物"}},{"type":"CheckBox","props":{"y":251,"x":35,"var":"poison_ds","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"poison_ds","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动施毒术"}},{"type":"Label","props":{"y":188,"x":305,"width":151,"valign":"middle","text":"不勾选默认不使用","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"ComboBox","props":{"y":188,"x":155,"visibleNum":4,"var":"group_ds_list","skin":"gameres/ui/auxiliary_combobox.png","selectedIndex":0,"scrollBarSkin":"gameres/ui/vscroll.png","name":"group_ds_list","labels":"火墙,爆裂火焰,冰咆哮","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":25}},{"type":"CheckBox","props":{"y":179,"x":35,"var":"group_ds","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"group_ds","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"群体技能"}},{"type":"Label","props":{"y":149,"x":305,"width":132,"valign":"middle","text":"不勾选默认平砍","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"ComboBox","props":{"y":149,"x":155,"visibleNum":4,"var":"single_ds_list","skin":"gameres/ui/auxiliary_combobox.png","selectedIndex":0,"scrollBarSkin":"gameres/ui/vscroll.png","name":"single_ds_list","labels":"灵魂火符","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":25}},{"type":"CheckBox","props":{"y":140,"x":35,"var":"single_ds","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"single_ds","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"单体技能"}},{"type":"Label","props":{"y":83,"x":305,"width":151,"valign":"middle","text":"不勾选默认不使用","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"ComboBox","props":{"y":83,"x":155,"visibleNum":4,"var":"group_fs_list","skin":"gameres/ui/auxiliary_combobox.png","selectedIndex":0,"scrollBarSkin":"gameres/ui/vscroll.png","name":"group_fs_list","labels":"火墙,爆裂火焰,冰咆哮","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":25}},{"type":"CheckBox","props":{"y":74,"x":35,"var":"group_fs","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"group_fs","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"群体技能"}},{"type":"Label","props":{"y":43,"x":305,"width":132,"valign":"middle","text":"不勾选默认平砍","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"ComboBox","props":{"y":43,"x":155,"visibleNum":4,"var":"single_fs_list","skin":"gameres/ui/auxiliary_combobox.png","selectedIndex":0,"scrollBarSkin":"gameres/ui/vscroll.png","name":"single_fs_list","labels":"火球术,大火球,雷电术","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":25}},{"type":"CheckBox","props":{"y":34,"x":35,"var":"single_fs","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"single_fs","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"单体技能"}},{"type":"ComboBox","props":{"y":363,"x":362,"width":114,"visibleNum":4,"var":"exercise_list","skin":"gameres/ui/auxiliary_combobox.png","selectedIndex":0,"scrollBarSkin":"gameres/ui/vscroll.png","name":"exercise_list","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":25}},{"type":"Label","props":{"y":363,"x":273,"width":81,"valign":"middle","text":"使用技能","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":286,"x":244,"var":"ds_cure_time","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"ds_cure_time","labelSize":18,"labelColors":"#ffffff","label":"3"},"child":[{"type":"VSlider","props":{"y":-23,"x":57,"visible":false,"var":"ds_time_slider","skin":"gameres/ui/textslider.png","showLabel":false,"name":"ds_time_slider","min":1,"max":10}}]},{"type":"Button","props":{"y":360,"x":214,"var":"exercise_time","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"exercise_time","labelSize":18,"labelColors":"#ffffff","label":"3"},"child":[{"type":"VSlider","props":{"y":-67,"x":54,"visible":false,"var":"exercise_slider","skin":"gameres/ui/textslider.png","showLabel":false,"name":"exercise_slider","min":1,"max":10}}]},{"type":"Label","props":{"y":363,"x":159,"width":39,"valign":"middle","text":"间隔","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"CheckBox","props":{"y":216,"x":340,"var":"pickItemsFirst","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"pickItemsFirst","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"优先拾取物品"}},{"type":"CheckBox","props":{"y":354,"x":36,"var":"exercise","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"exercise","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"自动练功"}},{"type":"CheckBox","props":{"y":251,"x":340,"var":"auto_dodge","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"auto_dodge","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"10","labelColors":"#ffffff","label":"挂机自动躲避"}}]},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box6","name":"box6","height":396},"child":[{"type":"Image","props":{"y":8,"x":3,"width":491,"height":130},"child":[{"type":"Image","props":{"y":29,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":39,"x":15,"width":58,"skin":"gameres/ui/auxiliary_heal_img.png","height":29}},{"type":"Image","props":{"y":78,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":89,"x":15,"width":58,"skin":"gameres/ui/auxiliary_magic_img.png","height":29}},{"type":"Label","props":{"y":33,"x":215,"text":"%自动吃药","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":7,"x":207,"text":"普通药设置","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":80,"x":119,"text":"魔法值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":80,"x":215,"text":"%自动吃药","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":44,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":44,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":95,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":95,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}}]},{"type":"Image","props":{"y":138,"x":3,"width":491,"height":130},"child":[{"type":"Image","props":{"y":29,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":39,"x":15,"width":58,"skin":"gameres/ui/auxiliary_heal_img.png","height":29}},{"type":"Image","props":{"y":78,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":89,"x":15,"width":58,"skin":"gameres/ui/auxiliary_magic_img.png","height":29}},{"type":"Label","props":{"y":33,"x":215,"text":"%自动吃药","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":7,"x":207,"text":"瞬回药设置","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":80,"x":119,"text":"魔法值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":80,"x":215,"text":"%自动吃药","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":47,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":47,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":92,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":92,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}}]},{"type":"Image","props":{"y":267,"x":3,"width":491,"height":98},"child":[{"type":"Image","props":{"y":29,"x":7,"width":482,"skin":"gameres/png/auxiliary_green_bg.png","height":49}},{"type":"Image","props":{"y":39,"x":15,"width":58,"skin":"gameres/ui/auxiliary_heal_img.png","height":29}},{"type":"Label","props":{"y":33,"x":215,"text":"%自动传送","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","fontSize":11,"color":"#ddaf52"}},{"type":"Label","props":{"y":7,"x":200,"text":"英雄回收设置","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":47,"x":323,"text":"间隔","fontSize":18,"color":"#ddaf52"}},{"type":"Label","props":{"y":47,"x":408,"text":"秒","fontSize":18,"color":"#ddaf52"}}]},{"type":"Image","props":{"y":44,"x":290,"width":33,"var":"hpN_imgH","skin":"gameres/ui/auxiliary_itemkuang.png","name":"hpN_imgH","height":33},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"CheckBox","props":{"y":305,"x":429,"width":77,"var":"autotpH","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autotpH","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":36}},{"type":"CheckBox","props":{"y":221,"x":429,"width":77,"var":"autohp_mp2H","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autohp_mp2H","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":38}},{"type":"CheckBox","props":{"y":176,"x":429,"width":77,"var":"autohp_mpH","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autohp_mpH","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":36}},{"type":"CheckBox","props":{"y":93,"x":429,"width":62,"var":"autompH","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autompH","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":36}},{"type":"CheckBox","props":{"y":43,"x":429,"width":62,"var":"autohpH","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"autohpH","labelStrokeColor":"#ffffff","labelSize":18,"labelPadding":"9","labelColors":"#ddaf52","label":"开","height":36}},{"type":"Button","props":{"y":45,"x":365,"var":"hptimetextH","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"hptimetextH","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":-2,"x":50,"visible":false,"var":"hp_timeH","skin":"gameres/ui/textslider.png","showLabel":false,"name":"hp_timeH","min":5,"max":10}}]},{"type":"Button","props":{"y":94,"x":365,"var":"mptimetextH","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"mptimetextH","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":-2,"x":50,"visible":false,"var":"mp_timeH","skin":"gameres/ui/textslider.png","showLabel":false,"name":"mp_timeH","min":5,"max":10}}]},{"type":"Image","props":{"y":93,"x":290,"var":"mpN_imgH","skin":"gameres/ui/auxiliary_itemkuang.png","name":"mpN_imgH"},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"Label","props":{"y":87,"x":186,"var":"mppercentagetextH","text":"100","name":"mppercentagetextH","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":18,"x":-102,"width":200,"var":"mp_proH","value":100,"skin":"gameres/ui/auxiliary_mppro.png","name":"mp_proH","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"mp_vsH","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"mp_vsH","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":40,"x":186,"width":21,"var":"hppercentagetextH","text":"100","name":"hppercentagetextH","height":12,"fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":18,"x":-102,"width":200,"var":"hp_proH","value":100,"skin":"gameres/ui/auxiliary_hppro.png","name":"hp_proH","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"hp_vsH","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"hp_vsH","min":1,"max":100,"height":20}}]},{"type":"Image","props":{"y":177,"x":290,"var":"hpS_imgH","skin":"gameres/ui/auxiliary_itemkuang.png","name":"hpS_imgH"},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"Button","props":{"y":178,"x":365,"var":"hptimetext1H","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"hptimetext1H","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":1,"x":51,"visible":false,"var":"hp_mp_timeH","skin":"gameres/ui/textslider.png","showLabel":false,"name":"hp_mp_timeH","min":1,"max":5}}]},{"type":"Button","props":{"y":223,"x":365,"var":"mptimetext1H","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"mptimetext1H","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":0,"x":51,"visible":false,"var":"hp_mp_time2H","skin":"gameres/ui/textslider.png","showLabel":false,"name":"hp_mp_time2H","min":1,"max":5}}]},{"type":"Image","props":{"y":222,"x":290,"var":"mpS_imgH","skin":"gameres/ui/auxiliary_itemkuang.png","name":"mpS_imgH"},"child":[{"type":"Image","props":{"name":"drug"}}]},{"type":"Label","props":{"y":218,"x":186,"var":"hppercentagetext2H","text":"100","name":"hppercentagetext2H","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"Hp_mp_pro2H","value":100,"skin":"gameres/ui/auxiliary_mppro.png","name":"Hp_mp_pro2H","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"Hp_mp_vs2H","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"Hp_mp_vs2H","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":171,"x":186,"var":"hppercentagetext1H","text":"100","name":"hppercentagetext1H","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"Hp_mp_proH","value":100,"skin":"gameres/ui/auxiliary_hppro.png","name":"Hp_mp_proH","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"Hp_mp_vsH","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"Hp_mp_vsH","min":1,"max":100,"height":20}}]},{"type":"Button","props":{"y":305,"x":365,"var":"tptimetextH","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"tptimetextH","labelSize":18,"labelColors":"#ffffff","label":"9"},"child":[{"type":"VSlider","props":{"y":-21,"x":49,"visible":false,"var":"tp_time_vsH","skin":"gameres/ui/textslider.png","showLabel":false,"name":"tp_time_vsH","min":0,"max":60}}]},{"type":"Label","props":{"y":299,"x":186,"var":"tppercentagetextH","text":"100","name":"tppercentagetextH","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"tp_proH","value":100,"skin":"gameres/ui/auxiliary_hppro.png","name":"tp_proH","height":10}},{"type":"HSlider","props":{"y":4,"x":-105,"width":205,"var":"tp_vsH","skin":"gameres/ui/auxiliary_hpsli.png","showLabel":false,"name":"tp_vsH","min":1,"max":100,"height":20}}]}]},{"type":"Tab","props":{"y":63,"x":30,"width":131,"var":"tab","selectedIndex":0,"name":"tab","height":370,"direction":"vertical"},"child":[{"type":"Button","props":{"y":-6,"x":-5,"width":142,"var":"item0","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"item0","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"基本设置","height":49}},{"type":"Button","props":{"y":43,"x":5,"width":142,"var":"item1","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"item1","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"职业设置","height":49}},{"type":"Button","props":{"y":92,"x":9,"width":142,"var":"item2","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"item2","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"保护设置","height":49}},{"type":"Button","props":{"y":141,"x":-6,"width":142,"var":"item3","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"item3","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"怪物设置","height":49}},{"type":"Button","props":{"y":10,"x":6,"width":142,"var":"item4","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"item4","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"拾取设置","height":49}},{"type":"Button","props":{"y":239,"x":-5,"width":142,"var":"item5","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"item5","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"自动战斗","height":49}},{"type":"Button","props":{"y":295,"x":0,"width":142,"visible":false,"var":"item6","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"item6","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"英雄设置","height":49}}]},{"type":"Image","props":{"y":21,"x":324,"width":65,"skin":"gameres/ui/auxiliary_title.png","height":29}}]}]};
		return AuxiliaryUI;
	})(View);
var BaiTanUI=(function(_super){
		function BaiTanUI(){
			

			BaiTanUI.__super.call(this);
		}

		CLASS$(BaiTanUI,'ui.BaiTanUI',_super);
		var __proto__=BaiTanUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BaiTanUI.uiView);

		}

		BaiTanUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":84,"x":599,"skin":"gameres/png/baitan_bg.png","name":"img_bg"}},{"type":"Button","props":{"y":348,"x":731,"stateNum":2,"skin":"gameres/ui/baitan_btn_esc.png","name":"btn_esc"}},{"type":"Button","props":{"y":348,"x":622,"stateNum":2,"skin":"gameres/ui/baitan_btn_ok.png","name":"btn_baitan"}},{"type":"Label","props":{"y":292,"x":680,"name":"lbl_item_name","fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":320,"x":680,"name":"lbl_item_price","fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":319,"x":610,"text":"出售价格：","fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":292,"x":608,"text":"物品名称：","fontSize":16,"color":"#ffffff"}},{"type":"Button","props":{"y":68,"x":780,"width":60,"stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit","height":60}},{"type":"Image","props":{"y":139,"x":625,"name":"item_0"}},{"type":"Image","props":{"y":139,"x":668,"name":"item_1"}},{"type":"Image","props":{"y":139,"x":710,"name":"item_2"}},{"type":"Image","props":{"y":139,"x":751,"name":"item_3"}},{"type":"Image","props":{"y":139,"x":793,"name":"item_4"}},{"type":"Image","props":{"y":180,"x":625,"name":"item_5"}},{"type":"Image","props":{"y":180,"x":668,"name":"item_6"}},{"type":"Image","props":{"y":180,"x":710,"name":"item_7"}},{"type":"Image","props":{"y":180,"x":751,"name":"item_8"}},{"type":"Image","props":{"y":180,"x":793,"name":"item_9"}},{"type":"Image","props":{"y":219,"x":625,"name":"item_10"}},{"type":"Image","props":{"y":219,"x":668,"name":"item_11"}},{"type":"Image","props":{"y":219,"x":710,"name":"item_12"}},{"type":"Image","props":{"y":219,"x":751,"name":"item_13"}},{"type":"Image","props":{"y":219,"x":793,"name":"item_14"}},{"type":"Image","props":{"y":259,"x":625,"name":"item_15"}},{"type":"Image","props":{"y":259,"x":668,"name":"item_16"}},{"type":"Image","props":{"y":259,"x":710,"name":"item_17"}},{"type":"Image","props":{"y":259,"x":751,"name":"item_18"}},{"type":"Image","props":{"y":259,"x":793,"name":"item_19"}},{"type":"Label","props":{"y":90,"x":613,"width":200,"text":"你的摊位","name":"lbl_tw_name","height":18,"fontSize":18,"color":"#ffffff","align":"center"}}]};
		return BaiTanUI;
	})(View);
var BoxUI=(function(_super){
		function BoxUI(){
			
		    this.close=null;

			BoxUI.__super.call(this);
		}

		CLASS$(BoxUI,'ui.BoxUI',_super);
		var __proto__=BoxUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BoxUI.uiView);

		}

		BoxUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"name":"boxbackdrop"},"child":[{"type":"Label","props":{"y":136,"x":124,"width":109,"text":"点击开启宝箱","name":"boxname","height":25,"color":"#07b000"}}]},{"type":"Image","props":{"y":50,"x":50,"skin":"gameres/png/box_bg.png","name":"itemshow"},"child":[{"type":"Image","props":{"y":68,"x":42,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":68,"x":99,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":68,"x":157,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":123,"x":42,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":123,"x":157,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":176,"x":42,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":176,"x":99,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":176,"x":157,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":115,"x":92,"skin":"gameres/ui/box_item_bg.png"}},{"type":"Image","props":{"y":74,"x":49,"width":30,"pivotX":0,"name":"item_0","height":30}},{"type":"Image","props":{"y":74,"x":106,"width":30,"name":"item_1","height":30}},{"type":"Image","props":{"y":74,"x":164,"width":30,"name":"item_2","height":30}},{"type":"Image","props":{"y":129,"x":49,"width":30,"name":"item_3","height":30}},{"type":"Image","props":{"y":129,"x":107,"width":30,"name":"item_4","height":30}},{"type":"Image","props":{"y":129,"x":164,"width":30,"name":"item_5","height":30}},{"type":"Image","props":{"y":182,"x":49,"width":30,"name":"item_6","height":30}},{"type":"Image","props":{"y":182,"x":106,"width":30,"name":"item_7","height":30}},{"type":"Image","props":{"y":182,"x":164,"width":30,"name":"item_8","height":30}},{"type":"Button","props":{"y":244,"x":81,"stateNum":2,"skin":"gameres/ui/box_btn_ok.png","name":"but_itemok"}},{"type":"Button","props":{"y":6,"x":189,"var":"close","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.7,"scaleX":0.7,"name":"close"}}]}]};
		return BoxUI;
	})(View);
var box_itemUI=(function(_super){
		function box_itemUI(){
			
		    this.btn_ok=null;
		    this.btn_esc=null;

			box_itemUI.__super.call(this);
		}

		CLASS$(box_itemUI,'ui.box_itemUI',_super);
		var __proto__=box_itemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_itemUI.uiView);

		}

		box_itemUI.uiView={"type":"View","props":{"width":675,"mouseThrough":true,"height":50},"child":[{"type":"Text","props":{"y":15,"x":-3,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_idx","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":15,"x":116,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_name","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":15,"x":234,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_cnt","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":15,"x":353,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_tj","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":10,"x":478,"width":85,"var":"btn_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","sizeGrid":"0,0,0,0","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"label","height":30}},{"type":"Button","props":{"y":10,"x":576,"width":85,"var":"btn_esc","stateNum":2,"skin":"gameres/ui/btn_ok.png","sizeGrid":"0,0,0,0","name":"btn_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"label","height":30}}]};
		return box_itemUI;
	})(View);
var box_item1UI=(function(_super){
		function box_item1UI(){
			

			box_item1UI.__super.call(this);
		}

		CLASS$(box_item1UI,'ui.box_item1UI',_super);
		var __proto__=box_item1UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_item1UI.uiView);

		}

		box_item1UI.uiView={"type":"View","props":{"width":675,"height":50},"child":[{"type":"Text","props":{"y":16,"x":-5,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_idx","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":77,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_name","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":162,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_cnt","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":244,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_tj","fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":11,"x":428,"width":85,"stateNum":2,"skin":"gameres/ui/btn_ok.png","sizeGrid":"0,0,0,0","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"label","height":30}},{"type":"Button","props":{"y":11,"x":549,"width":85,"stateNum":2,"skin":"gameres/ui/btn_ok.png","sizeGrid":"0,0,0,0","name":"btn_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"Arial","labelColors":"#ffffff,#ffffff","label":"label","height":30}}]};
		return box_item1UI;
	})(View);
var box_item2UI=(function(_super){
		function box_item2UI(){
			

			box_item2UI.__super.call(this);
		}

		CLASS$(box_item2UI,'ui.box_item2UI',_super);
		var __proto__=box_item2UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_item2UI.uiView);

		}

		box_item2UI.uiView={"type":"View","props":{"width":500,"height":50},"child":[{"type":"Image","props":{"y":7,"x":17,"skin":"gameres/png/spr_sel.png","name":"img_sel"}},{"type":"Text","props":{"y":16,"x":14,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_0","height":0,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":144,"width":50,"strokeColor":"#000000","stroke":2,"name":"lbl_1","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":232,"width":50,"strokeColor":"#000000","stroke":2,"name":"lbl_2","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":315,"width":70,"strokeColor":"#000000","stroke":2,"name":"lbl_3","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":9,"x":389,"width":86,"stateNum":2,"skin":"gameres/ui/btn_ok.png","scaleY":1,"name":"btn_change_title","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff","label":"修改封号","height":30}}]};
		return box_item2UI;
	})(View);
var box_item3UI=(function(_super){
		function box_item3UI(){
			

			box_item3UI.__super.call(this);
		}

		CLASS$(box_item3UI,'ui.box_item3UI',_super);
		var __proto__=box_item3UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_item3UI.uiView);

		}

		box_item3UI.uiView={"type":"View","props":{"width":675,"height":40},"child":[{"type":"Text","props":{"y":3,"x":18,"strokeColor":"#000000","stroke":2,"name":"lbl_title","fontSize":18,"color":"#ddaf52"}},{"type":"Text","props":{"y":13,"x":28,"strokeColor":"#000000","name":"lbl_text","fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":4,"x":450,"width":84,"stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"bnt_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"确 定","height":32}},{"type":"Button","props":{"y":4,"x":567,"width":84,"stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"bnt_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"取 消","height":32}}]};
		return box_item3UI;
	})(View);
var box_item4UI=(function(_super){
		function box_item4UI(){
			
		    this.btn=null;
		    this.txt=null;
		    this.posX=null;
		    this.posY=null;

			box_item4UI.__super.call(this);
		}

		CLASS$(box_item4UI,'ui.box_item4UI',_super);
		var __proto__=box_item4UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_item4UI.uiView);

		}

		box_item4UI.uiView={"type":"View","props":{"width":180,"height":35},"child":[{"type":"Text","props":{"y":6,"x":123,"width":50,"var":"btn","valign":"middle","text":"复制","name":"btn","height":26,"fontSize":18,"color":"#fbf1b3","align":"left"}},{"type":"TextArea","props":{"y":9,"x":17,"width":90,"var":"txt","text":"两亿元","overflow":"hidden","name":"txt","mouseEnabled":false,"height":20,"fontSize":18,"editable":false,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":14,"x":251,"visible":false,"var":"posX","name":"posX"}},{"type":"Text","props":{"y":24,"x":261,"visible":false,"var":"posY","name":"posY"}}]};
		return box_item4UI;
	})(View);
var buy_itemUI=(function(_super){
		function buy_itemUI(){
			

			buy_itemUI.__super.call(this);
		}

		CLASS$(buy_itemUI,'ui.buy_itemUI',_super);
		var __proto__=buy_itemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(buy_itemUI.uiView);

		}

		buy_itemUI.uiView={"type":"View","props":{"width":280,"height":40},"child":[{"type":"Text","props":{"y":10,"x":7,"strokeColor":"#000000","stroke":2,"name":"lbl_name","fontSize":18,"color":"#ffffff"}},{"type":"Text","props":{"y":10,"x":166,"strokeColor":"#000000","stroke":2,"name":"lbl_price","fontSize":18,"color":"#ffffff"}},{"type":"Image","props":{"y":1,"x":-3,"width":288,"skin":"gameres/png/img_img.png","name":"img_sel","height":38}}]};
		return buy_itemUI;
	})(View);
var ChangePwdSceneUI=(function(_super){
		function ChangePwdSceneUI(){
			

			ChangePwdSceneUI.__super.call(this);
		}

		CLASS$(ChangePwdSceneUI,'ui.ChangePwdSceneUI',_super);
		var __proto__=ChangePwdSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ChangePwdSceneUI.uiView);

		}

		ChangePwdSceneUI.uiView={"type":"View","props":{"width":1136,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":420,"skin":"gameres/png/imageLogin.png","name":"bg2","height":405,"centerY":0,"centerX":-5}},{"type":"TextInput","props":{"y":180,"x":526,"width":190,"strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#e2dddd","prompt":"请输入用户名....","overflow":"hidden","name":"username","maxChars":20,"height":32,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":300,"x":526,"width":190,"type":"password","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#e2dddd","prompt":"请输入新密码...","overflow":"hidden","name":"password","maxChars":20,"height":33,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":360,"x":526,"width":190,"type":"password","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#e2dddd","prompt":"请再次输入新密码...","overflow":"hidden","name":"confirmpassword","maxChars":20,"height":32,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":240,"x":526,"width":190,"type":"password","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#e2dddd","prompt":"请输入原密码...","overflow":"hidden","name":"oldpassword","maxChars":20,"height":32,"fontSize":18,"color":"#fbf8f8"}},{"type":"Button","props":{"y":413,"x":440,"width":101,"stateNum":2,"skin":"gameres/ui/btn_reg_submit.png","name":"btn_ChangePwd","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Button","props":{"y":413,"x":593,"width":101,"stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","name":"btn_reback","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Label","props":{"y":182,"x":438,"text":"用户名:","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":243,"x":414,"text":"当前密码:","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":303,"x":438,"text":"新密码:","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":362,"x":417,"text":"重复密码:","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Image","props":{"y":127,"x":506,"width":112,"skin":"gameres/ui/xgtitle.png","height":29}}]};
		return ChangePwdSceneUI;
	})(View);
var Chat1UI=(function(_super){
		function Chat1UI(){
			
		    this.chat_bg=null;
		    this.chat_panel=null;
		    this.input_txt=null;
		    this.btn_add=null;
		    this.chat_oder=null;
		    this.chat_face=null;
		    this.chat_item=null;
		    this.chat_pos=null;
		    this.panel_cmd=null;
		    this.chat_face_bg=null;
		    this.list_face=null;
		    this.chat_item_bg=null;
		    this.list_special=null;

			Chat1UI.__super.call(this);
		}

		CLASS$(Chat1UI,'ui.Chat1UI',_super);
		var __proto__=Chat1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Chat1UI.uiView);

		}

		Chat1UI.uiView={"type":"View","props":{"y":0,"x":0,"width":520,"scaleY":1,"scaleX":1,"mouseThrough":false,"height":600,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"width":483,"var":"chat_bg","skin":"gameres/png/chat_bg.png","name":"chat_bg","mouseThrough":false,"height":600}},{"type":"Image","props":{"y":427,"x":534,"width":379,"visible":false,"pivotY":127,"pivotX":300,"name":"spr_bg_img","height":219,"alpha":0}},{"type":"Image","props":{"y":425,"x":-204,"width":330,"visible":false,"skin":"gameres/png/chat_big.png","name":"spr_bg","height":122,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"List","props":{"y":18,"x":138,"width":325,"repeatX":0,"name":"list_txt","height":477}},{"type":"Panel","props":{"y":18,"x":138,"width":330,"var":"chat_panel","name":"chat_panel","height":478}},{"type":"Button","props":{"y":21,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_gongliao_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"公 共","height":45}},{"type":"Button","props":{"y":81,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_system_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"系 统","height":45}},{"type":"Button","props":{"y":140,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_nearby_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"附 近","height":45}},{"type":"Button","props":{"y":200,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_hanhua_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"喊 话","height":45}},{"type":"Button","props":{"y":259,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_hanghui_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"行 会","height":45}},{"type":"Button","props":{"y":319,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_team_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"队 伍","height":45}},{"type":"Button","props":{"y":370,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_siliao_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"私 聊","height":45}},{"type":"Button","props":{"y":252,"x":482,"visible":true,"stateNum":2,"skin":"gameres/ui/chat_btn_hide.png","scaleY":0.6,"scaleX":0.6,"name":"btn_hide"}},{"type":"Image","props":{"y":539,"x":6,"width":471,"name":"img_send","height":50},"child":[{"type":"Button","props":{"y":1,"x":374,"width":97,"stateNum":2,"skin":"gameres/ui/chat_btn_send.png","name":"btn_send","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"label":"发 送","height":48}},{"type":"TextInput","props":{"y":1,"x":0,"width":326,"var":"input_txt","skin":"gameres/png/chat.png","sizeGrid":"6,13,3,6","padding":"3,5,3,5","overflow":"hidden","name":"input_txt","height":48,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":-43,"x":-294,"width":97,"stateNum":2,"skin":"gameres/ui/chat_btn_send.png","name":"btn_teshu_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"label":"命 令","height":48}},{"type":"Button","props":{"y":-1,"x":321,"width":53,"var":"btn_add","stateNum":2,"skin":"gameres/ui/add.png","height":49}}]},{"type":"Button","props":{"y":505,"x":145,"width":30,"var":"chat_oder","stateNum":2,"skin":"gameres/ui/chat_oder.png","name":"chat_oder","height":30}},{"type":"Button","props":{"y":505,"x":224,"width":30,"var":"chat_face","stateNum":2,"skin":"gameres/ui/chat_face.png","name":"chat_face","height":30}},{"type":"Button","props":{"y":505,"x":302,"width":30,"var":"chat_item","stateNum":2,"skin":"gameres/ui/chat_item.png","name":"chat_item","height":30}},{"type":"Button","props":{"y":505,"x":381,"width":30,"var":"chat_pos","stateNum":2,"skin":"gameres/ui/chat_pos.png","name":"chat_pos","height":30}},{"type":"Image","props":{"y":344,"x":139,"width":111,"var":"panel_cmd","skin":"gameres/ui/chat_bg_order.png","name":"panel_cmd","height":152},"child":[{"type":"Button","props":{"y":36,"x":3,"width":105,"visible":false,"stateNum":2,"skin":"gameres/ui/chat_select_order.png","name":"btn_chuanyin","labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"labelAlign":"center","label":"千里传音","height":30}},{"type":"Button","props":{"y":90,"x":0,"width":93,"visible":false,"stateNum":2,"skin":"gameres/ui/chat_select_order.png","name":"btn_del_hanghui","labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"labelAlign":"center","label":"退出行会","height":30}},{"type":"Button","props":{"y":60,"x":0,"width":93,"visible":false,"stateNum":2,"skin":"gameres/ui/chat_select_order.png","name":"btn_add_hanghui","labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"labelAlign":"center","label":"加入行会","height":30}},{"type":"Button","props":{"y":0,"x":0,"width":92,"visible":false,"stateNum":2,"skin":"gameres/ui/chat_select_order.png","name":"btn_rest","labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"labelAlign":"center","label":"召唤物控制","height":30}}]},{"type":"Image","props":{"y":265,"x":139,"width":271,"visible":false,"var":"chat_face_bg","skin":"gameres/png/chat_face_bg.png","name":"chat_face_bg","height":230},"child":[{"type":"List","props":{"y":4,"x":2,"width":266,"var":"list_face","name":"list_face","height":206}}]},{"type":"Image","props":{"y":265,"x":183,"width":281,"visible":false,"var":"chat_item_bg","skin":"gameres/png/chat_item_bg.png","name":"chat_item_bg","height":230},"child":[{"type":"List","props":{"y":3,"x":3,"width":274,"var":"list_special","name":"list_special","height":207}}]}]};
		return Chat1UI;
	})(View);
var chatconfigUI=(function(_super){
		function chatconfigUI(){
			
		    this.cb_voice=null;
		    this.cb_microphone=null;
		    this.btn_close=null;
		    this.box_select=null;

			chatconfigUI.__super.call(this);
		}

		CLASS$(chatconfigUI,'ui.chatconfigUI',_super);
		var __proto__=chatconfigUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(chatconfigUI.uiView);

		}

		chatconfigUI.uiView={"type":"View","props":{"width":504,"height":333},"child":[{"type":"Image","props":{"skin":"gameres/png/chatbj.png"},"child":[{"type":"CheckBox","props":{"y":77,"x":95,"var":"cb_voice","stateNum":2,"skin":"gameres/ui/btn1.png","name":"cb_voice"}},{"type":"Label","props":{"y":9,"x":168,"text":"聊天室设置","strokeColor":"#000000","stroke":1,"fontSize":20,"color":"#e8b656"}},{"type":"Label","props":{"y":12,"x":271,"text":"(立即生效)","strokeColor":"#000000","stroke":1,"fontSize":18,"color":"#f8ab01"}},{"type":"CheckBox","props":{"y":77,"x":350,"var":"cb_microphone","stateNum":2,"skin":"gameres/ui/btn1.png","name":"cb_microphone"}},{"type":"Label","props":{"y":83,"x":30,"text":"声音","strokeColor":"#000000","stroke":2,"fontSize":22,"color":"#e4e4e3"}},{"type":"Label","props":{"y":83,"x":270,"text":"麦克风","strokeColor":"#000000","stroke":2,"fontSize":22,"color":"#e4e4e3"}},{"type":"Label","props":{"y":156,"x":192,"text":"聊天室选项","strokeColor":"#000000","stroke":2,"fontSize":22,"color":"#e4e4e3"}},{"type":"Button","props":{"y":-21,"x":444,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Box","props":{"y":184,"x":27,"width":450,"var":"box_select","height":127}}]}]};
		return chatconfigUI;
	})(View);
var crystalUI=(function(_super){
		function crystalUI(){
			
		    this.img_bg=null;
		    this.bg_cqb=null;
		    this.lab_cqb_all2=null;
		    this.lab_cqb_all1=null;
		    this.lab_owniron=null;
		    this.lab_cqb_state=null;
		    this.btn_help=null;
		    this.lab_exchange=null;
		    this.lab_price=null;
		    this.lab_smelt1=null;
		    this.lab_smelt2=null;
		    this.btn_smelt=null;
		    this.lab_change1=null;
		    this.lab_change2=null;
		    this.btn_change=null;
		    this.btn_close=null;
		    this.bg_bind=null;
		    this.btn_bind_ok=null;
		    this.btn_bind_close=null;
		    this.bg_buy=null;
		    this.lab_havesmelt=null;
		    this.lab_costsmelt=null;
		    this.btn_buycqb_minus=null;
		    this.btn_buycqb_plus=null;
		    this.btn_buycqb_max=null;
		    this.btn_buycqb_ok=null;
		    this.btn_buycqb_cancel=null;
		    this.lab_buycqb_num=null;
		    this.bg_sell=null;
		    this.lab_havecqb=null;
		    this.lab_changecoin=null;
		    this.btn_sellcqb_minus=null;
		    this.btn_sellcqb_plus=null;
		    this.btn_sellcqb_max=null;
		    this.btn_sellcqb_ok=null;
		    this.btn_sellcqb_cancel=null;
		    this.lab_sellcqb_num=null;
		    this.bg_login=null;
		    this.ipt_login_account=null;
		    this.ipt_login_psw=null;
		    this.btn_login_close=null;
		    this.btn_login=null;
		    this.txt_login_mail=null;
		    this.txt_login_register=null;
		    this.bg_cell=null;
		    this.ipt_cell_account=null;
		    this.ipt_cell_code=null;
		    this.btn_cell_close=null;
		    this.btn_cell=null;
		    this.txt_login_psw=null;
		    this.txt_cell_register=null;
		    this.btn_cell_code=null;
		    this.bg_register=null;
		    this.ipt_register_account=null;
		    this.ipt_register_code=null;
		    this.btn_cregister_close=null;
		    this.btn_register=null;
		    this.btn_register_code=null;
		    this.ipt_register_psw=null;
		    this.ipt_register_invite=null;
		    this.btn_register_back=null;
		    this.bg_secondPsw=null;
		    this.btn_spsw_close=null;
		    this.btn_spsw_ok=null;
		    this.btn_spsw_cancel=null;
		    this.ipt_secondPsw=null;
		    this.bg_help=null;
		    this.txt_help=null;
		    this.btn_help_close=null;

			crystalUI.__super.call(this);
		}

		CLASS$(crystalUI,'ui.crystalUI',_super);
		var __proto__=crystalUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(crystalUI.uiView);

		}

		crystalUI.uiView={"type":"View","props":{"y":0,"x":0,"width":1136,"top":0,"scaleY":1,"scaleX":1,"right":0,"mouseThrough":true,"left":0,"height":600,"bottom":0},"child":[{"type":"Image","props":{"y":-7,"x":73,"width":990,"var":"img_bg","skin":"gameres/png/crystal_bg.png","sizeGrid":"90,105,78,82","name":"img_bg","height":614},"child":[{"type":"Image","props":{"y":38,"x":344,"skin":"gameres/ui/crystal_boxtitle.png"},"child":[{"type":"Image","props":{"y":0,"x":95,"skin":"gameres/ui/crystal_title.png"}}]},{"type":"Image","props":{"y":64,"x":37,"var":"bg_cqb","skin":"gameres/png/crystal_bg1.png","name":"bg_cqb"},"child":[{"type":"Image","props":{"y":30,"x":623,"width":254,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":69}},{"type":"Label","props":{"y":71,"x":811,"width":60,"var":"lab_cqb_all2","text":"0","name":"lab_cqb_all2","height":16,"fontSize":16,"color":"#09e3f6","align":"center"}},{"type":"Label","props":{"y":44,"x":811,"width":60,"var":"lab_cqb_all1","text":"0","name":"lab_cqb_all1","height":16,"fontSize":16,"color":"#09e3f6","align":"center"}},{"type":"Image","props":{"y":68,"x":785,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Image","props":{"y":39,"x":785,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Text","props":{"y":71,"x":633,"text":"当前未兑换CQB总量","fontSize":16,"color":"#eac054"}},{"type":"Text","props":{"y":43,"x":633,"text":"当前服务器CQB总量","fontSize":16,"color":"#eac054"}},{"type":"Image","props":{"y":130,"x":336,"width":232,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":40}},{"type":"Label","props":{"y":143,"x":496,"width":60,"var":"lab_owniron","text":"0","name":"lab_owniron","height":16,"fontSize":16,"color":"#c8b7b7","align":"center"}},{"type":"Image","props":{"y":138,"x":462,"skin":"gameres/ui/crystal_icon2.png"}},{"type":"Text","props":{"y":142,"x":369,"text":"拥有黑铁矿","fontSize":16,"color":"#c8b7b7"}},{"type":"Text","props":{"y":80,"x":354,"text":"CQB钱包状态：","fontSize":18,"color":"#c8b7b7"}},{"type":"Label","props":{"y":82,"x":486,"width":60,"var":"lab_cqb_state","text":"未登录","name":"lab_cqb_state","height":16,"fontSize":18,"color":"#ff0000","align":"center"}},{"type":"Button","props":{"y":183,"x":332,"var":"btn_help","stateNum":2,"skin":"gameres/ui/crystal_que.png","name":"btn_help"}},{"type":"Text","props":{"y":190,"x":370,"text":"黑铁兑换比例：","fontSize":18,"color":"#c8b7b7"}},{"type":"Label","props":{"y":192,"x":496,"width":60,"var":"lab_exchange","text":"0","name":"lab_exchange","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Text","props":{"y":220,"x":370,"text":"当前CQB：","fontSize":18,"color":"#c8b7b7"}},{"type":"Label","props":{"y":221,"x":460,"width":60,"var":"lab_price","text":"0","name":"lab_price","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":265,"x":115,"skin":"gameres/png/crystal_bg2.png"},"child":[{"type":"Image","props":{"y":8,"x":74,"skin":"gameres/ui/crystal_title4.png"}},{"type":"Image","props":{"y":67,"x":90,"skin":"gameres/ui/crystal_icon2.png"}},{"type":"Label","props":{"y":71,"x":123,"width":54,"var":"lab_smelt1","text":"200","name":"lab_smelt1","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":94,"x":107,"skin":"gameres/ui/crystal_change.png"}},{"type":"Image","props":{"y":149,"x":97,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Label","props":{"y":153,"x":129,"width":54,"var":"lab_smelt2","text":"1","name":"lab_smelt2","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Button","props":{"y":187,"x":80,"var":"btn_smelt","stateNum":2,"skin":"gameres/ui/crystal_btn1.png","name":"btn_smelt","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"冶  炼"}}]},{"type":"Image","props":{"y":265,"x":556,"skin":"gameres/png/crystal_bg2.png"},"child":[{"type":"Image","props":{"y":8,"x":75,"skin":"gameres/ui/crystal_title7.png"}},{"type":"Image","props":{"y":68,"x":97,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Label","props":{"y":72,"x":130,"width":54,"var":"lab_change1","text":"1","name":"lab_change1","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":94,"x":107,"skin":"gameres/ui/crystal_change.png"}},{"type":"Image","props":{"y":150,"x":95,"width":25,"skin":"gameres/ui/00010.png","height":23}},{"type":"Label","props":{"y":153,"x":129,"width":54,"var":"lab_change2","text":"137","name":"lab_change2","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Button","props":{"y":187,"x":80,"var":"btn_change","stateNum":2,"skin":"gameres/ui/crystal_btn1.png","name":"btn_change","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"兑  换"}}]}]},{"type":"Button","props":{"y":9,"x":891,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"btn_close"}},{"type":"Image","props":{"y":190,"x":316,"width":352,"var":"bg_bind","skin":"gameres/png/crystal_bg2.png","name":"bg_bind","height":308},"child":[{"type":"Image","props":{"y":12,"x":102,"skin":"gameres/ui/crystal_title3.png","scaleY":1.2,"scaleX":1.2}},{"type":"TextArea","props":{"y":65,"x":16,"width":322,"text":"    进行冶炼水晶、兑换黑铁矿、兑换游戏币，首先要绑定水晶钱包账户，否则无法使用相关兑换功能。       对不起由于当前账户没有绑定水晶钱包账户，所以无法进行操作,操作是否前往绑定水晶钱包账户？","height":165,"fontSize":20,"editable":false,"color":"#ff0400"}},{"type":"Button","props":{"y":237,"x":38.5,"var":"btn_bind_ok","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","name":"btn_bind_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"前往绑定"}},{"type":"Button","props":{"y":237,"x":186,"var":"btn_bind_close","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_bind_close","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"确 定"}}]},{"type":"Image","props":{"y":230,"x":301,"width":388,"visible":false,"var":"bg_buy","skin":"gameres/png/crystal_bg2.png","sizeGrid":"55,15,15,35","name":"bg_buy","height":236},"child":[{"type":"Image","props":{"y":11,"x":43,"skin":"gameres/ui/crystal_boxtitle.png"}},{"type":"Image","props":{"y":10,"x":144,"skin":"gameres/ui/crystal_title4.png"}},{"type":"Image","props":{"y":60,"x":190,"skin":"gameres/ui/crystal_icon2.png"}},{"type":"Text","props":{"y":62,"x":118,"text":"当前拥有","fontSize":16,"color":"#c8b7b7"}},{"type":"Label","props":{"y":62,"x":225,"width":54,"var":"lab_havesmelt","text":"0","name":"lab_havesmelt","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":129,"x":190,"skin":"gameres/ui/crystal_icon2.png"}},{"type":"Text","props":{"y":131,"x":117,"text":"需要消耗","fontSize":16,"color":"#c8b7b7"}},{"type":"Label","props":{"y":131,"x":224,"width":54,"var":"lab_costsmelt","text":"0","name":"lab_costsmelt","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Text","props":{"y":96,"x":26,"text":"购买数量","fontSize":18,"color":"#ff7000"}},{"type":"Button","props":{"y":90,"x":103,"var":"btn_buycqb_minus","stateNum":3,"skin":"gameres/ui/shop_minus.png","name":"btn_buycqb_minus"}},{"type":"Image","props":{"y":94,"x":139,"width":94,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":28}},{"type":"Button","props":{"y":90,"x":239,"var":"btn_buycqb_plus","stateNum":3,"skin":"gameres/ui/shop_plus.png","name":"btn_buycqb_plus"}},{"type":"Button","props":{"y":92,"x":286,"var":"btn_buycqb_max","stateNum":2,"skin":"gameres/ui/crystal_btn1.png","name":"btn_buycqb_max","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"最  大"}},{"type":"Button","props":{"y":177,"x":50,"var":"btn_buycqb_ok","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","name":"btn_buycqb_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"冶  炼"}},{"type":"Button","props":{"y":177,"x":222,"var":"btn_buycqb_cancel","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_buycqb_cancel","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"取  消"}},{"type":"TextInput","props":{"y":100,"x":145,"width":80,"var":"lab_buycqb_num","text":"0","name":"lab_buycqb_num","height":16,"fontSize":16,"editable":true,"color":"#c8b7b7","align":"center"}}]},{"type":"Image","props":{"y":230,"x":301,"width":388,"visible":false,"var":"bg_sell","skin":"gameres/png/crystal_bg2.png","sizeGrid":"55,15,15,35","name":"bg_sell","height":236},"child":[{"type":"Image","props":{"y":11,"x":43,"skin":"gameres/ui/crystal_boxtitle.png"}},{"type":"Image","props":{"y":10,"x":144,"skin":"gameres/ui/crystal_title7.png"}},{"type":"Image","props":{"y":60,"x":190,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Text","props":{"y":62,"x":118,"text":"当前拥有","fontSize":16,"color":"#c8b7b7"}},{"type":"Label","props":{"y":62,"x":225,"width":54,"var":"lab_havecqb","text":"0","name":"lab_havecqb","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":129,"x":169,"width":25,"skin":"gameres/ui/00010.png","height":21}},{"type":"Text","props":{"y":131,"x":114,"text":"可兑换","fontSize":16,"color":"#c8b7b7"}},{"type":"Label","props":{"y":130,"x":203,"width":54,"var":"lab_changecoin","text":"0","name":"lab_changecoin","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Text","props":{"y":96,"x":26,"text":"兑换数量","fontSize":18,"color":"#ff7000"}},{"type":"Button","props":{"y":90,"x":103,"var":"btn_sellcqb_minus","stateNum":3,"skin":"gameres/ui/shop_minus.png","name":"btn_sellcqb_minus"}},{"type":"Image","props":{"y":94,"x":139,"width":94,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":28}},{"type":"Button","props":{"y":90,"x":239,"var":"btn_sellcqb_plus","stateNum":3,"skin":"gameres/ui/shop_plus.png","name":"btn_sellcqb_plus"}},{"type":"Button","props":{"y":92,"x":286,"var":"btn_sellcqb_max","stateNum":2,"skin":"gameres/ui/crystal_btn1.png","name":"btn_sellcqb_max","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"最  大"}},{"type":"Button","props":{"y":177,"x":50,"var":"btn_sellcqb_ok","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","name":"btn_sellcqb_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"兑  换"}},{"type":"Button","props":{"y":177,"x":222,"var":"btn_sellcqb_cancel","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_sellcqb_cancel","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"取  消"}},{"type":"TextInput","props":{"y":100,"x":145,"width":80,"var":"lab_sellcqb_num","text":"0","name":"lab_sellcqb_num","height":16,"fontSize":16,"editable":true,"color":"#c8b7b7","align":"center"}}]},{"type":"Image","props":{"y":131,"x":229,"visible":false,"var":"bg_login","skin":"gameres/png/crystal_login_bg.png","name":"bg_login"},"child":[{"type":"TextInput","props":{"y":86,"x":102,"width":373,"var":"ipt_login_account","promptColor":"#3b3131","prompt":"请输入您的账号","name":"ipt_login_account","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":156,"x":102,"width":373,"var":"ipt_login_psw","type":"password","promptColor":"#3b3131","prompt":"请输入您的密码","name":"ipt_login_psw","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":17,"x":455,"var":"btn_login_close","stateNum":1,"skin":"gameres/ui/crystal_btn_close.png","name":"btn_login_close"}},{"type":"Button","props":{"y":222,"x":140,"var":"btn_login","stateNum":1,"skin":"gameres/ui/crystal_btn_login.png","name":"btn_login"}},{"type":"Text","props":{"y":302,"x":62,"width":115,"var":"txt_login_mail","text":"短信登录","name":"txt_login_mail","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0300","align":"center"}},{"type":"Text","props":{"y":302,"x":340,"width":133,"var":"txt_login_register","text":"账号注册>>","name":"txt_login_register","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0300","align":"center"}}]},{"type":"Image","props":{"y":131,"x":229,"visible":false,"var":"bg_cell","skin":"gameres/png/crystal_celllogin_bg.png","name":"bg_cell"},"child":[{"type":"TextInput","props":{"y":86,"x":102,"width":373,"var":"ipt_cell_account","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入您的账号","name":"ipt_cell_account","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":156,"x":102,"width":194,"var":"ipt_cell_code","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入验证码","name":"ipt_cell_code","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":17,"x":455,"var":"btn_cell_close","stateNum":1,"skin":"gameres/ui/crystal_btn_close.png","name":"btn_cell_close"}},{"type":"Button","props":{"y":222,"x":140,"var":"btn_cell","stateNum":1,"skin":"gameres/ui/crystal_btn_login.png","name":"btn_cell"}},{"type":"Text","props":{"y":302,"x":62,"width":115,"var":"txt_login_psw","text":"密码登录","name":"txt_login_psw","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0300","align":"center"}},{"type":"Text","props":{"y":302,"x":340,"width":133,"var":"txt_cell_register","text":"账号注册>>","name":"txt_cell_register","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0300","align":"center"}},{"type":"Button","props":{"y":150,"x":336,"width":140,"var":"btn_cell_code","stateNum":1,"skin":"gameres/ui/crystal_btn_code.png","sizeGrid":"9,9,9,9","name":"btn_cell_code","labelSize":20,"labelColors":"#ffffff","height":48}}]},{"type":"Image","props":{"y":131,"x":229,"visible":false,"var":"bg_register","skin":"gameres/png/crystal_register_bg.png","name":"bg_register"},"child":[{"type":"TextInput","props":{"y":99,"x":105,"width":373,"var":"ipt_register_account","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入您的账号","name":"ipt_register_account","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":171,"x":105,"width":194,"var":"ipt_register_code","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入验证码","name":"ipt_register_code","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":17,"x":455,"var":"btn_cregister_close","stateNum":1,"skin":"gameres/ui/crystal_btn_close.png","name":"btn_cregister_close"}},{"type":"Button","props":{"y":397,"x":140,"var":"btn_register","stateNum":1,"skin":"gameres/ui/crystal_btn_register.png","name":"btn_register"}},{"type":"Button","props":{"y":166,"x":334,"width":140,"var":"btn_register_code","stateNum":1,"skin":"gameres/ui/crystal_btn_code.png","sizeGrid":"9,9,9,9","name":"btn_register_code","labelSize":20,"labelColors":"#ffffff","height":48}},{"type":"TextInput","props":{"y":246,"x":105,"width":373,"var":"ipt_register_psw","promptColor":"#3b3131","prompt":"请输入6-12位密码","name":"ipt_register_psw","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":318,"x":105,"width":373,"var":"ipt_register_invite","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入邀请码","name":"ipt_register_invite","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":19,"x":17,"var":"btn_register_back","stateNum":1,"skin":"gameres/ui/crystal_btn_back.png","name":"btn_register_back"}}]},{"type":"Image","props":{"y":189,"x":308,"width":374,"visible":false,"var":"bg_secondPsw","skin":"gameres/png/crystal_bg2.png","sizeGrid":"55,15,15,35","name":"bg_secondPsw","height":236},"child":[{"type":"Image","props":{"y":9,"x":138,"skin":"gameres/ui/crystal_title7.png"}},{"type":"Button","props":{"y":-18,"x":314,"var":"btn_spsw_close","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"btn_spsw_close"}},{"type":"Button","props":{"y":173,"x":223.5,"var":"btn_spsw_ok","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","name":"btn_spsw_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffedcb","label":"确认兑换"}},{"type":"Button","props":{"y":173,"x":52,"var":"btn_spsw_cancel","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_spsw_cancel","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffedcb","label":"取消"}},{"type":"Text","props":{"y":70,"x":60,"text":"CQB兑换","fontSize":16,"color":"#ffedcb"}},{"type":"Text","props":{"y":70,"x":127,"text":"黑铁","fontSize":16,"color":"#00FF1E"}},{"type":"Text","props":{"y":70,"x":159,"text":"\\战纪币","fontSize":16,"color":"#ffE63F"}},{"type":"Text","props":{"y":70,"x":211,"text":"，需要安全码","fontSize":16,"color":"#ffedcb"}},{"type":"Image","props":{"y":111,"x":85,"width":209,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":33}},{"type":"TextInput","props":{"y":117,"x":92,"width":195,"var":"ipt_secondPsw","prompt":"请输入安全码","name":"ipt_secondPsw","height":22,"fontSize":16,"color":"#ffffff"}}]},{"type":"Image","props":{"y":189,"x":308,"width":374,"visible":false,"var":"bg_help","skin":"gameres/png/crystal_bg2.png","sizeGrid":"55,15,15,35","name":"bg_help","height":236},"child":[{"type":"Text","props":{"y":13,"x":147,"text":"帮助说明","fontSize":20,"color":"#f9cf4a"}},{"type":"TextArea","props":{"y":53,"x":43,"width":291,"var":"txt_help","text":"帮助说明","overflow":"scroll","name":"txt_help","height":156,"fontSize":16,"editable":false,"color":"#ffffff"}},{"type":"Button","props":{"y":-17,"x":312,"var":"btn_help_close","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"btn_help_close"}}]}]}]};
		return crystalUI;
	})(View);
var DoubleRockerUI=(function(_super){
		function DoubleRockerUI(){
			
		    this.img_run_bg=null;
		    this.box_run_otherDir=null;
		    this.img_run_dir=null;
		    this.img_run_qiu=null;
		    this.img_walk_bg=null;
		    this.box_walk_otherDir=null;
		    this.img_walk_dir=null;
		    this.img_walk_qiu=null;

			DoubleRockerUI.__super.call(this);
		}

		CLASS$(DoubleRockerUI,'ui.DoubleRockerUI',_super);
		var __proto__=DoubleRockerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DoubleRockerUI.uiView);

		}

		DoubleRockerUI.uiView={"type":"View","props":{"width":250,"height":200},"child":[{"type":"Image","props":{"y":1,"x":123,"var":"img_run_bg","skin":"gameres/ui/double_rocke_run_bj.png","name":"img_run_bg"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":123,"var":"box_run_otherDir","name":"box_run_otherDir","height":123},"child":[{"type":"Image","props":{"y":-5,"x":44,"skin":"gameres/ui/double_rocke_run_0.png"}},{"type":"Image","props":{"y":9,"x":76,"skin":"gameres/ui/double_rocke_run_1.png"}},{"type":"Image","props":{"y":45,"x":94,"skin":"gameres/ui/double_rocke_run_2.png"}},{"type":"Image","props":{"y":78,"x":77,"skin":"gameres/ui/double_rocke_run_3.png"}},{"type":"Image","props":{"y":94,"x":44,"skin":"gameres/ui/double_rocke_run_4.png"}},{"type":"Image","props":{"y":75,"x":11,"skin":"gameres/ui/double_rocke_run_5.png"}},{"type":"Image","props":{"y":45,"x":-5,"skin":"gameres/ui/double_rocke_run_6.png"}},{"type":"Image","props":{"y":15,"x":10,"skin":"gameres/ui/double_rocke_run_7.png"}}]},{"type":"Image","props":{"var":"img_run_dir","skin":"gameres/png/double_rocker_hu_run_0.png","name":"img_run_dir","mouseThrough":true}}]},{"type":"Image","props":{"y":38,"x":161,"var":"img_run_qiu","skin":"gameres/ui/double_rocker_run.png","name":"img_run_qiu","mouseThrough":true,"mouseEnabled":true}},{"type":"Image","props":{"y":88,"x":1,"var":"img_walk_bg","skin":"gameres/ui/double_rocke_walk_bj.png","name":"img_walk_bg"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":142,"var":"box_walk_otherDir","name":"box_walk_otherDir","height":142},"child":[{"type":"Image","props":{"y":-3,"x":35,"skin":"gameres/ui/double_rocke_walk_0.png"}},{"type":"Image","props":{"y":9,"x":61,"skin":"gameres/ui/double_rocke_walk_1.png"}},{"type":"Image","props":{"y":38,"x":76,"skin":"gameres/ui/double_rocke_walk_2.png"}},{"type":"Image","props":{"y":64,"x":62,"skin":"gameres/ui/double_rocke_walk_3.png"}},{"type":"Image","props":{"y":78,"x":36,"skin":"gameres/ui/double_rocke_walk_4.png"}},{"type":"Image","props":{"y":64,"x":9,"skin":"gameres/ui/double_rocke_walk_5.png"}},{"type":"Image","props":{"y":38,"x":-5,"skin":"gameres/ui/double_rocke_walk_6.png"}},{"type":"Image","props":{"y":14,"x":5,"skin":"gameres/ui/double_rocke_walk_7.png"}}]},{"type":"Image","props":{"var":"img_walk_dir","skin":"gameres/png/double_rocker_hu_walk_0.png","name":"img_walk_dir"}}]},{"type":"Image","props":{"y":115,"x":27,"var":"img_walk_qiu","skin":"gameres/ui/double_rocker_walk.png","name":"img_walk_qiu"}}]};
		return DoubleRockerUI;
	})(View);
var doudizhuUI=(function(_super){
		function doudizhuUI(){
			
		    this.ddz_bg=null;
		    this.wj1=null;
		    this.img_play1=null;
		    this.img_yb_play1=null;
		    this.text_yb_play1=null;
		    this.img_play1_fen=null;
		    this.img_zhenying1=null;
		    this.name_play1=null;
		    this.wj2=null;
		    this.img_play2=null;
		    this.img_yb_play2=null;
		    this.text_yb_play2=null;
		    this.img_play2_fen=null;
		    this.img_zhenying2=null;
		    this.name_play2=null;
		    this.text_ready2go=null;
		    this.wj3=null;
		    this.img_play3=null;
		    this.img_yb_play3=null;
		    this.text_yb_play3=null;
		    this.img_play3_fen=null;
		    this.img_zhenying3=null;
		    this.name_play3=null;
		    this.text_ready3go=null;
		    this.btn_exit=null;
		    this.btn_ready=null;
		    this.btn_1=null;
		    this.btn_2=null;
		    this.btn_3=null;
		    this.btn_tishi=null;
		    this.btn_chupai=null;
		    this.btn_chongxuan=null;
		    this.btn_buchu=null;
		    this.btn_tuoguan=null;
		    this.btn_huan=null;
		    this.btn_yao=null;
		    this.btn_liao=null;
		    this.list_shoupai=null;
		    this.btn_off_tuoguan=null;
		    this.list_dipai=null;
		    this.box_outcard1=null;
		    this.box_outcard2=null;
		    this.box_outcard3=null;
		    this.text_desk_num=null;
		    this.img_play1_buchu=null;
		    this.img_play3_buchu=null;
		    this.img_play2_buchu=null;
		    this.play1_time=null;
		    this.play1_time_text=null;
		    this.play2_time=null;
		    this.play2_time_text=null;
		    this.play3_time=null;
		    this.play3_time_text=null;
		    this.game_result=null;
		    this.game_win=null;
		    this.btn_chongkai=null;
		    this.img_game_dizhu1=null;
		    this.img_game_dizhu2=null;
		    this.img_game_dizhu3=null;
		    this.text_gameplay1name=null;
		    this.text_gameplay1_dizhu=null;
		    this.text_gameplay1_beishu=null;
		    this.text_gameplay1_jiesuan=null;
		    this.text_gameplay2name=null;
		    this.text_gameplay2_dizhu=null;
		    this.text_gameplay2_beishu=null;
		    this.text_gameplay2_jiesuan=null;
		    this.text_gameplay3name=null;
		    this.text_gameplay3_dizhu=null;
		    this.text_gameplay3_beishu=null;
		    this.text_gameplay3_jiesuan=null;
		    this.yuanbao=null;
		    this.dizhu=null;
		    this.beilv=null;

			doudizhuUI.__super.call(this);
		}

		CLASS$(doudizhuUI,'ui.doudizhuUI',_super);
		var __proto__=doudizhuUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(doudizhuUI.uiView);

		}

		doudizhuUI.uiView={"type":"View","props":{"width":870,"height":500},"child":[{"type":"Image","props":{"width":870,"var":"ddz_bg","skin":"ui/doudizhu/00055.png","name":"ddz_bg","height":500},"child":[{"type":"Image","props":{"y":-38,"x":-51,"var":"wj1","name":"wj1"},"child":[{"type":"Image","props":{"y":380,"x":128,"var":"img_play1","skin":"ui/doudizhu/00114.png","name":"img_play1"}},{"type":"Image","props":{"y":337,"x":127,"var":"img_yb_play1","skin":"ui/doudizhu/00018.png","name":"img_yb_play1"},"child":[{"type":"Text","props":{"y":7,"x":9,"width":52,"var":"text_yb_play1","valign":"middle","text":"17","stroke":2,"name":"text_yb_play1","height":22,"fontSize":14,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":370,"x":193,"var":"img_play1_fen","skin":"ui/doudizhu/00106.png","name":"img_play1_fen"}},{"type":"Image","props":{"y":396,"x":197,"var":"img_zhenying1","skin":"ui/doudizhu/00116.png","name":"img_zhenying1"}},{"type":"Text","props":{"y":448,"x":116,"width":94,"var":"name_play1","valign":"middle","text":"啊沙发上","strokeColor":"#000000","stroke":2,"overflow":"hidden","name":"name_play1","height":15,"fontSize":14,"font":"SimSun","color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":62,"x":-95,"var":"wj2","name":"wj2"},"child":[{"type":"Image","props":{"y":-2,"x":814,"var":"img_play2","skin":"ui/doudizhu/00115.png","name":"img_play2"}},{"type":"Image","props":{"y":86,"x":810,"var":"img_yb_play2","skin":"ui/doudizhu/00018.png","name":"img_yb_play2"},"child":[{"type":"Text","props":{"y":6,"x":9,"width":52,"var":"text_yb_play2","valign":"middle","text":"17","stroke":2,"name":"text_yb_play2","height":22,"fontSize":14,"color":"#FFFFFF","align":"center"}}]},{"type":"Image","props":{"y":64,"x":751,"var":"img_play2_fen","skin":"ui/doudizhu/00106.png","name":"img_play2_fen"}},{"type":"Image","props":{"y":18,"x":787,"var":"img_zhenying2","skin":"ui/doudizhu/00117.png"}},{"type":"Text","props":{"y":68,"x":792,"width":110,"var":"name_play2","valign":"middle","text":"大概都快两个","strokeColor":"#000000","stroke":2,"overflow":"hidden","name":"name_play2","height":15,"fontSize":14,"font":"SimSun","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":-2,"x":787,"wordWrap":true,"width":24,"var":"text_ready2go","valign":"middle","text":"已准备","stroke":2,"name":"text_ready2go","height":73,"fontSize":18,"font":"SimSun","color":"#f4f1f1","align":"center"}}]},{"type":"Image","props":{"y":190,"x":-49,"var":"wj3","name":"wj3"},"child":[{"type":"Image","props":{"y":-131,"x":127,"var":"img_play3","skin":"ui/doudizhu/00114.png","name":"img_play3"}},{"type":"Image","props":{"y":-43,"x":126,"var":"img_yb_play3","skin":"ui/doudizhu/00018.png","name":"img_yb_play3"},"child":[{"type":"Text","props":{"y":7,"x":10,"width":52,"var":"text_yb_play3","valign":"middle","text":"17","stroke":2,"name":"text_yb_play3","height":22,"fontSize":14,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":-63,"x":210,"var":"img_play3_fen","skin":"ui/doudizhu/00106.png","name":"img_play3_fen"}},{"type":"Image","props":{"y":-111,"x":197,"var":"img_zhenying3","skin":"ui/doudizhu/00117.png","name":"img_zhenying3"}},{"type":"Text","props":{"y":-60,"x":111,"width":94,"var":"name_play3","valign":"middle","text":"更宽容涵","strokeColor":"#000000","stroke":2,"overflow":"hidden","name":"name_play3","height":15,"fontSize":14,"font":"SimSun","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":-133,"x":196,"wordWrap":true,"width":24,"var":"text_ready3go","valign":"middle","text":"已准备","stroke":2,"name":"text_ready3go","height":73,"fontSize":18,"font":"SimSun","color":"#f4f1f1","align":"center"}}]},{"type":"Button","props":{"y":438,"x":767,"var":"btn_exit","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_exit","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"退"}},{"type":"Button","props":{"y":266,"x":382,"var":"btn_ready","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_ready","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"准备"}},{"type":"Button","props":{"y":289,"x":278,"var":"btn_1","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_1","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"1分"}},{"type":"Button","props":{"y":289,"x":395,"var":"btn_2","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_2","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"2分"}},{"type":"Button","props":{"y":289,"x":512,"var":"btn_3","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_3","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"3分"}},{"type":"Button","props":{"y":284,"x":565,"var":"btn_tishi","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_tishi","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"提示"}},{"type":"Button","props":{"y":284,"x":208,"var":"btn_chupai","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_chupai","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"出牌"}},{"type":"Button","props":{"y":284,"x":327,"var":"btn_chongxuan","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_chongxuan","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"重选"}},{"type":"Button","props":{"y":284,"x":446,"var":"btn_buchu","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_buchu","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"不出"}},{"type":"Button","props":{"y":438,"x":675,"var":"btn_tuoguan","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_tuoguan","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"托"}},{"type":"Button","props":{"y":438,"x":721,"var":"btn_huan","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_huan","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"换"}},{"type":"Button","props":{"y":438,"x":629,"var":"btn_yao","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_yao","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"邀"}},{"type":"Button","props":{"y":438,"x":583,"var":"btn_liao","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_liao","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"聊"}},{"type":"List","props":{"y":322,"x":200,"width":460,"var":"list_shoupai","name":"list_shoupai","height":100}},{"type":"Button","props":{"y":325,"x":355,"visible":false,"var":"btn_off_tuoguan","stateNum":2,"skin":"ui/doudizhu/00019.png","name":"btn_off_tuoguan"}},{"type":"Box","props":{"y":58,"x":299,"width":258,"var":"list_dipai","name":"list_dipai","height":106}},{"type":"Box","props":{"y":170,"x":155,"width":546,"var":"box_outcard1","name":"box_outcard1","height":115}},{"type":"Box","props":{"y":170,"x":218,"width":483,"var":"box_outcard2","name":"box_outcard2","height":115}},{"type":"Box","props":{"y":170,"x":155,"width":483,"var":"box_outcard3","name":"box_outcard3","height":115}},{"type":"Text","props":{"y":32,"x":335,"width":0,"var":"text_desk_num","valign":"middle","name":"text_desk_num","height":0,"fontSize":14,"color":"#52f406","align":"center"}}]},{"type":"Image","props":{"y":253,"x":402,"var":"img_play1_buchu","skin":"ui/doudizhu/00112.png","name":"img_play1_buchu"}},{"type":"Image","props":{"y":216,"x":91,"var":"img_play3_buchu","skin":"ui/doudizhu/00112.png","name":"img_play3_buchu"}},{"type":"Image","props":{"y":218,"x":729,"var":"img_play2_buchu","skin":"ui/doudizhu/00112.png","name":"img_play2_buchu"}},{"type":"Image","props":{"y":226,"x":400,"var":"play1_time","skin":"ui/doudizhu/00111.png","name":"play1_time"},"child":[{"type":"Text","props":{"y":21,"x":11,"width":25,"var":"play1_time_text","name":"play1_time_text","height":20,"fontSize":24,"color":"#FFFFFF","align":"center"}}]},{"type":"Image","props":{"y":201,"x":728,"var":"play2_time","skin":"ui/doudizhu/00111.png","name":"play2_time"},"child":[{"type":"Text","props":{"y":21,"x":11,"width":25,"var":"play2_time_text","name":"play2_time_text","height":20,"fontSize":24,"color":"#FFFFFF","align":"center"}}]},{"type":"Image","props":{"y":200,"x":89,"var":"play3_time","skin":"ui/doudizhu/00111.png","name":"play3_time"},"child":[{"type":"Text","props":{"y":21,"x":11,"width":25,"var":"play3_time_text","name":"play3_time_text","height":20,"fontSize":24,"color":"#FFFFFF","align":"center"}}]},{"type":"Image","props":{"y":50,"x":158,"var":"game_result","skin":"ui/doudizhu/00011.png","name":"game_result"},"child":[{"type":"Image","props":{"y":12,"x":150,"var":"game_win","skin":"ui/doudizhu/00008.png","name":"game_win"}},{"type":"Button","props":{"y":327,"x":246,"var":"btn_chongkai","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_chongkai","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"再来一把"}},{"type":"Image","props":{"y":154,"x":36,"skin":"ui/doudizhu/00012.png"}},{"type":"Image","props":{"y":212,"x":36,"skin":"ui/doudizhu/00012.png"}},{"type":"Image","props":{"y":270,"x":36,"skin":"ui/doudizhu/00012.png"}},{"type":"Image","props":{"y":168,"x":67,"visible":false,"var":"img_game_dizhu1","skin":"ui/doudizhu/00010.png","name":"img_game_dizhu1"}},{"type":"Image","props":{"y":224,"x":67,"visible":false,"var":"img_game_dizhu2","skin":"ui/doudizhu/00010.png","name":"img_game_dizhu2"}},{"type":"Image","props":{"y":284,"x":67,"visible":false,"var":"img_game_dizhu3","skin":"ui/doudizhu/00010.png","name":"img_game_dizhu3"}},{"type":"Label","props":{"y":138,"x":134,"text":"角色名","fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":138,"x":256,"text":"底注","fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":138,"x":349,"text":"倍率","fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":138,"x":432,"text":"结算","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":171,"x":110,"width":99,"var":"text_gameplay1name","valign":"middle","text":"123建设","overflow":"hidden","name":"text_gameplay1name","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":171,"x":234,"width":70,"var":"text_gameplay1_dizhu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay1_dizhu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":171,"x":338,"width":52,"var":"text_gameplay1_beishu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay1_beishu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":171,"x":410,"width":70,"var":"text_gameplay1_jiesuan","valign":"middle","text":"10000","overflow":"hidden","name":"text_gameplay1_jiesuan","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":227,"x":110,"width":99,"var":"text_gameplay2name","valign":"middle","text":"123建设","overflow":"hidden","name":"text_gameplay2name","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":227,"x":234,"width":70,"var":"text_gameplay2_dizhu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay2_dizhu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":227,"x":338,"width":52,"var":"text_gameplay2_beishu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay2_beishu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":227,"x":410,"width":70,"var":"text_gameplay2_jiesuan","valign":"middle","text":"10000","overflow":"hidden","name":"text_gameplay2_jiesuan","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":287,"x":110,"width":99,"var":"text_gameplay3name","valign":"middle","text":"123建设","overflow":"hidden","name":"text_gameplay3name","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":287,"x":234,"width":70,"var":"text_gameplay3_dizhu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay3_dizhu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":287,"x":338,"width":52,"var":"text_gameplay3_beishu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay3_beishu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":287,"x":410,"width":70,"var":"text_gameplay3_jiesuan","valign":"middle","text":"10000","overflow":"hidden","name":"text_gameplay3_jiesuan","height":17,"fontSize":14,"color":"#ffffff","align":"center"}}]},{"type":"Label","props":{"y":448,"x":63,"width":144,"var":"yuanbao","valign":"middle","text":"元宝：5000","stroke":2,"height":26,"fontSize":14,"color":"#fadba7","align":"center"}},{"type":"Label","props":{"y":448,"x":219,"width":110,"var":"dizhu","valign":"middle","text":"底注：200","stroke":2,"height":24,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":448,"x":342,"width":111,"var":"beilv","valign":"middle","text":"倍率：200","stroke":2,"height":24,"fontSize":14,"color":"#ffffff","align":"center"}}]};
		return doudizhuUI;
	})(View);
var DrugSetupUI=(function(_super){
		function DrugSetupUI(){
			
		    this.Drug_bg=null;
		    this.Drug_but=null;
		    this.but_rest=null;
		    this.but_Close=null;

			DrugSetupUI.__super.call(this);
		}

		CLASS$(DrugSetupUI,'ui.DrugSetupUI',_super);
		var __proto__=DrugSetupUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DrugSetupUI.uiView);

		}

		DrugSetupUI.uiView={"type":"View","props":{"y":60,"x":150,"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":26,"x":136,"var":"Drug_bg","skin":"gameres/png/setupwin.png"},"child":[{"type":"Button","props":{"y":51,"x":23,"width":250,"var":"Drug_but","height":226},"child":[{"type":"Image","props":{"y":1,"x":50,"width":49,"height":49}},{"type":"Image","props":{"y":1,"x":151,"width":49,"height":49}},{"type":"Image","props":{"y":89,"x":201,"width":49,"height":49}},{"type":"Image","props":{"y":175,"x":151,"width":49,"height":49}},{"type":"Image","props":{"y":175,"x":50,"width":49,"height":49}},{"type":"Image","props":{"y":89,"x":1,"width":49,"height":49}}]},{"type":"Button","props":{"y":129,"x":112,"var":"but_rest","stateNum":2,"skin":"gameres/ui/setup_rest.png","labelStrokeColor":"#e1f408"}},{"type":"Button","props":{"y":-8,"x":233,"width":60,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png","height":60}}]}]};
		return DrugSetupUI;
	})(View);
var FriendUI=(function(_super){
		function FriendUI(){
			
		    this.img_base=null;
		    this.btn_exit=null;
		    this.btn_nearby=null;
		    this.btn_friend=null;
		    this.btn_hmd=null;
		    this.friend_list=null;
		    this.btn_chat=null;
		    this.btn_add=null;
		    this.btn_del=null;
		    this.btn_team=null;
		    this.btn_add_group=null;
		    this.btn_del_hmd=null;
		    this.btn_add_hmd=null;
		    this.input_node=null;
		    this.btn_ok=null;
		    this.btn_esc=null;
		    this.lbl_desc=null;
		    this.input_str=null;
		    this.btn_copy=null;

			FriendUI.__super.call(this);
		}

		CLASS$(FriendUI,'ui.FriendUI',_super);
		var __proto__=FriendUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(FriendUI.uiView);

		}

		FriendUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_base","skin":"gameres/png/friend_bg.png","name":"img_base","height":465,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":64,"x":190,"width":495,"skin":"gameres/png/hanghuidi.png","sizeGrid":"26,26,26,20","height":37}},{"type":"Button","props":{"y":-7,"x":643,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit"}},{"type":"Button","props":{"y":113,"x":29,"width":142,"var":"btn_nearby","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"btn_nearby","labelStroke":2,"labelSize":25,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"附近玩家","height":49}},{"type":"Button","props":{"y":63,"x":29,"width":142,"var":"btn_friend","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"btn_friend","labelStroke":2,"labelSize":25,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"我的好友","height":49}},{"type":"Button","props":{"y":163,"x":29,"width":142,"var":"btn_hmd","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"btn_hmd","labelStroke":2,"labelSize":25,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"黑名单","height":49}},{"type":"List","props":{"y":90,"x":188,"width":498,"var":"friend_list","name":"friend_list","height":310}},{"type":"Button","props":{"y":408,"x":47,"width":100,"var":"btn_chat","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_chat","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"私聊","height":40}},{"type":"Button","props":{"y":408,"x":434,"width":100,"var":"btn_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_add","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"添加好友","height":40}},{"type":"Button","props":{"y":408,"x":567,"width":100,"var":"btn_del","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_del","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"删除好友","height":40}},{"type":"Text","props":{"y":68,"x":252,"width":60,"text":"玩家姓名","strokeColor":"#000000","stroke":2,"height":25,"fontSize":20,"color":"#c69c61","bold":false,"align":"center"}},{"type":"Button","props":{"y":408,"x":177,"width":100,"var":"btn_team","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_team","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"邀请组队","height":40}},{"type":"Button","props":{"y":408,"x":307,"width":100,"var":"btn_add_group","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_add_group","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"邀请入会","height":40}},{"type":"Text","props":{"y":68,"x":377,"width":60,"text":"性别","strokeColor":"#000000","stroke":2,"height":25,"fontSize":20,"color":"#c69c61","bold":false,"align":"center"}},{"type":"Text","props":{"y":68,"x":580,"width":60,"text":"行会","strokeColor":"#000000","stroke":2,"height":25,"fontSize":20,"color":"#c69c61","bold":false,"align":"center"}},{"type":"Button","props":{"y":408,"x":434,"width":115,"var":"btn_del_hmd","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_del_hmd","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"删除黑名单","height":40}},{"type":"Button","props":{"y":408,"x":177,"width":115,"var":"btn_add_hmd","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_add_hmd","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"添加黑名单","height":40}},{"type":"Image","props":{"y":104,"x":216,"var":"input_node","skin":"gameres/png/hanghui2_img_bg_2.png","sizeGrid":"80,60,60,60","name":"input_node"},"child":[{"type":"Button","props":{"y":138,"x":75,"width":70,"var":"btn_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"确定","height":25}},{"type":"Button","props":{"y":138,"x":212,"width":70,"var":"btn_esc","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"取消","height":25}},{"type":"Text","props":{"y":27,"x":60,"wordWrap":true,"width":237,"var":"lbl_desc","text":"所属行会","name":"lbl_desc","height":25,"fontSize":18,"color":"#ddaf52","bold":true,"align":"center"}},{"type":"TextInput","props":{"y":78,"x":19,"width":312,"var":"input_str","strokeColor":"#f5ffff","sizeGrid":"40,40,40,40","restrict":"0-9a-zA-Z\\u4e00-\\u9fa5","name":"input_str","height":25,"fontSize":18,"color":"#ffffff","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"Text","props":{"y":74,"x":314,"width":36,"visible":false,"var":"btn_copy","valign":"middle","text":"粘贴","name":"btn_copy","height":28,"fontSize":14,"color":"#D7B581","align":"center"}}]},{"type":"Image","props":{"y":21,"x":322,"width":65,"skin":"gameres/ui/friend_title.png","height":28}},{"type":"Text","props":{"y":68,"x":476,"width":60,"text":"等级","strokeColor":"#000000","stroke":2,"height":25,"fontSize":20,"color":"#c69c61","bold":false,"align":"center"}}]}]};
		return FriendUI;
	})(View);
var friend_itemUI=(function(_super){
		function friend_itemUI(){
			

			friend_itemUI.__super.call(this);
		}

		CLASS$(friend_itemUI,'ui.friend_itemUI',_super);
		var __proto__=friend_itemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(friend_itemUI.uiView);

		}

		friend_itemUI.uiView={"type":"View","props":{"width":500,"height":40},"child":[{"type":"Image","props":{"y":0,"x":1,"width":500,"skin":"gameres/png/g_03.png","name":"img_sel","height":40}},{"type":"Text","props":{"y":11,"x":30,"width":140,"text":"0","name":"lbl_0","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":11,"x":194,"width":40,"text":"1","name":"lbl_1","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":11,"x":293,"width":50,"text":"2","name":"lbl_2","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":11,"x":349,"width":140,"text":"2","name":"lbl_3","fontSize":18,"color":"#ffffff","align":"center"}}]};
		return friend_itemUI;
	})(View);
var fsredpackUI=(function(_super){
		function fsredpackUI(){
			
		    this.fasongpack=null;
		    this.combox_gold=null;
		    this.combox_index=null;
		    this.txt_gold=null;
		    this.txt_edit=null;
		    this.txt_msg=null;
		    this.pack_logo=null;
		    this.edit_gold=null;
		    this.edit_gold_count=null;
		    this.pack_msg=null;
		    this.but_pakSend=null;
		    this.but_close=null;
		    this.Lb_haoy=null;
		    this.box_haoy=null;

			fsredpackUI.__super.call(this);
		}

		CLASS$(fsredpackUI,'ui.fsredpackUI',_super);
		var __proto__=fsredpackUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(fsredpackUI.uiView);

		}

		fsredpackUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"scaleY":1,"scaleX":1,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":42,"x":177,"var":"fasongpack","skin":"gameres/png/redpak_bg.png"},"child":[{"type":"Label","props":{"y":65,"x":40,"width":75,"text":"货币类型：","strokeColor":"#000000","stroke":2,"height":29,"fontSize":14,"color":"#e8e4e4"}},{"type":"Label","props":{"y":65,"x":269,"width":75,"text":"红包范围：","strokeColor":"#000000","stroke":2,"height":29,"fontSize":14,"color":"#e8e4e4"}},{"type":"ComboBox","props":{"y":74,"x":115,"width":140,"var":"combox_gold","skin":"gameres/ui/redpak_combobox.png","sizeGrid":"4,20,4,4","selectedIndex":0,"pivotY":12,"pivotX":3,"labels":"元宝,金币","labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","itemSize":18,"height":24}},{"type":"ComboBox","props":{"y":74,"x":341,"width":140,"var":"combox_index","skin":"gameres/ui/redpak_combobox.png","sizeGrid":"4,20,4,4","selectedIndex":3,"pivotY":12,"pivotX":3,"labels":"行会,队伍,国家,全服,好友","labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","itemSize":18,"height":24}},{"type":"Label","props":{"y":173,"x":59,"var":"txt_gold","text":"红包金额：","strokeColor":"#000000","stroke":2,"fontSize":14,"color":"#e8e4e4"}},{"type":"Label","props":{"y":217,"x":59,"var":"txt_edit","text":"红包数量：","strokeColor":"#000000","stroke":2,"fontSize":14,"color":"#e8e4e4"}},{"type":"Label","props":{"y":260,"x":73,"var":"txt_msg","text":"祝福语：","strokeColor":"#000000","stroke":2,"fontSize":14,"color":"#e8e4e4"}},{"type":"Image","props":{"y":113,"x":241,"width":35,"var":"pack_logo","skin":"gameres/ui/00689.png","height":35}},{"type":"TextInput","props":{"y":168,"x":170,"width":142,"var":"edit_gold","type":"number","strokeColor":"#896b4d","stroke":1,"height":24,"fontSize":14,"color":"#efe9e9","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"TextInput","props":{"y":212,"x":170,"width":142,"var":"edit_gold_count","type":"number","strokeColor":"#896b4d","stroke":1,"height":24,"fontSize":14,"color":"#efe9e9","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"TextInput","props":{"y":255,"x":170,"width":312,"var":"pack_msg","text":"恭喜发财,大吉大利!","strokeColor":"#896b4d","stroke":1,"height":24,"fontSize":14,"color":"#efe9e9","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"Button","props":{"y":366,"x":78,"width":90,"var":"but_pakSend","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"塞钱进红包","height":25}},{"type":"Button","props":{"y":366,"x":332,"width":90,"var":"but_close","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"退 出","height":25}},{"type":"Label","props":{"y":173,"x":59,"visible":false,"var":"Lb_haoy","text":"好友选择：","strokeColor":"#000000","stroke":2,"fontSize":14,"color":"#e8e4e4"}},{"type":"ComboBox","props":{"y":180,"x":172,"width":142,"visible":false,"var":"box_haoy","skin":"gameres/ui/redpak_combobox.png","sizeGrid":"4,20,4,4","selectedIndex":3,"pivotY":12,"pivotX":3,"labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","itemSize":18,"height":24}},{"type":"Text","props":{"y":25,"x":221,"text":"发红包","strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#ddaf52","align":"center"}}]}]};
		return fsredpackUI;
	})(View);
var fuckUI=(function(_super){
		function fuckUI(){
			

			fuckUI.__super.call(this);
		}

		CLASS$(fuckUI,'ui.fuckUI',_super);
		var __proto__=fuckUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(fuckUI.uiView);

		}

		fuckUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Button","props":{"y":210,"x":209,"label":"label"}},{"type":"ComboBox","props":{"y":120,"x":310,"labels":"label1,label2"}},{"type":"Image","props":{"y":151,"x":156}}]};
		return fuckUI;
	})(View);
var GameMainUI=(function(_super){
		function GameMainUI(){
			
		    this.role_head=null;
		    this.panel_head=null;
		    this.img_hp=null;
		    this.img_mp=null;
		    this.headinfo_img=null;
		    this.lbl_att_type=null;
		    this.panel_att_type=null;
		    this.atttype_all=null;
		    this.atttype_couple=null;
		    this.atttype_guild=null;
		    this.atttype_mentor=null;
		    this.atttype_peace=null;
		    this.atttype_red=null;
		    this.atttype_team=null;
		    this.lbl_hp=null;
		    this.lbl_mp=null;
		    this.lbl_level=null;
		    this.herohead_bg=null;
		    this.hero_power=null;
		    this.hero_exp=null;
		    this.hero_mp=null;
		    this.hero_hp=null;
		    this.herohead_sex=null;
		    this.hero_name=null;
		    this.hero_loyal=null;
		    this.lbl_herohp=null;
		    this.lbl_heromp=null;
		    this.hero_level=null;
		    this.targethead_bg=null;
		    this.target_hpBar=null;
		    this.target_job=null;
		    this.target_hpNum=null;
		    this.target_name=null;
		    this.target_level=null;
		    this.target_menu=null;
		    this.target_menu_name=null;
		    this.menu_info=null;
		    this.menu_friend=null;
		    this.menu_team=null;
		    this.menu_chat=null;
		    this.menu_shield=null;
		    this.menu_guild=null;
		    this.Drug_bg=null;
		    this.Drug_0=null;
		    this.Drug_1=null;
		    this.Drug_2=null;
		    this.Drug_3=null;
		    this.Drug_4=null;
		    this.Drug_5=null;
		    this.chat_bg=null;
		    this.chat_list=null;
		    this.img_changeChat=null;
		    this.btn_public=null;
		    this.btn_guild=null;
		    this.btn_troops=null;
		    this.btn_siliao=null;
		    this.btn_chatChange=null;
		    this.btn_chat=null;
		    this.show_drug_kuang=null;
		    this.panel_node=null;
		    this.img_mini=null;
		    this.pl_mini=null;
		    this.infoStateBaox=null;
		    this.fpsLab=null;
		    this.delayLab=null;
		    this.btn_list=null;
		    this.btn_rank_list=null;
		    this.bnt_shop=null;
		    this.bnt_chongzi=null;
		    this.bnt_bysc=null;
		    this.bnt_game_fl=null;
		    this.bnt_game_hd=null;
		    this.bnt_new_user=null;
		    this.btn_recharge_reward=null;
		    this.btn_vip=null;
		    this.onLine=null;
		    this.onLine_bonus=null;
		    this.btn_bonusClose=null;
		    this.hero_panel=null;
		    this.herocall_btn=null;
		    this.herobag_btn=null;
		    this.herolock_btn=null;
		    this.herostate_btn=null;
		    this.heroguard_btn=null;
		    this.showbonus=null;
		    this.lbl_map_name=null;
		    this.lbl_map_grid=null;
		    this.bnt_show=null;
		    this.btn_openmini=null;
		    this.btn_autohook=null;
		    this.btn_lock=null;
		    this.hero_li=null;
		    this.hero_hide=null;
		    this.petState_btn=null;
		    this.heroatt_btn=null;
		    this.auto_pick=null;
		    this.img_mail_Logo=null;
		    this.btn_set=null;
		    this.btn_hanghui=null;
		    this.btn_jiaoyi=null;
		    this.btn_bag=null;
		    this.btn_team=null;
		    this.btn_friend=null;
		    this.btn_xiaotui=null;
		    this.btn_redpack=null;
		    this.btn_baitan=null;
		    this.btn_zhaomu=null;
		    this.btn_att=null;
		    this.btn_off_target=null;
		    this.bnt_role=null;
		    this.img_hint=null;
		    this.btn_bag0=null;
		    this.btn_get_item=null;
		    this.img_rwbj=null;
		    this.btn_qing=null;
		    this.ta_gmtest=null;
		    this.btn_gm_gb=null;
		    this.btn_gm_qk=null;
		    this.btn_position=null;

			GameMainUI.__super.call(this);
		}

		CLASS$(GameMainUI,'ui.GameMainUI',_super);
		var __proto__=GameMainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameMainUI.uiView);

		}

		GameMainUI.uiView={"type":"View","props":{"x":0,"width":1136,"top":0,"right":0,"mouseThrough":true,"left":0,"height":600,"bottom":0},"child":[{"type":"Image","props":{"width":10,"var":"role_head","top":0,"left":0,"height":10},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"panel_head","name":"panel_head","mouseThrough":true},"child":[{"type":"Image","props":{"y":0,"x":0,"width":246,"skin":"gameres/png/gamemain_hum_blood_bg.png","scaleY":1.2,"scaleX":1.2,"height":97},"child":[{"type":"Image","props":{"y":18,"x":78,"width":142,"var":"img_hp","skin":"gameres/png/gamemain_hp_red.png","name":"img_hp","height":14,"anchorX":0}},{"type":"Image","props":{"y":37,"x":78,"width":142,"var":"img_mp","skin":"gameres/png/gamemain_mp_blue.png","name":"img_mp","height":14,"anchorX":0}},{"type":"Image","props":{"y":0,"x":0,"width":246,"skin":"gameres/png/gamemain_head_title.png","height":97}},{"type":"Image","props":{"y":13,"x":11,"width":69,"var":"headinfo_img","skin":"gameres/ui/head_img-2.png","name":"headinfo_img","height":73}},{"type":"Label","props":{"y":58,"x":84,"valign":"middle","text":"LV","fontSize":15,"color":"#fea100"}}]},{"type":"Button","props":{"y":72,"x":182,"var":"lbl_att_type","stateNum":1,"skin":"gameres/ui/atttype_peace.png","scaleY":0.655,"scaleX":0.655,"name":"lbl_att_type","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Panel","props":{"y":72,"x":272,"width":54,"visible":false,"var":"panel_att_type","name":"panel_att_type","height":182},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"atttype_all","stateNum":1,"skin":"gameres/ui/atttype_all.png","scaleY":0.5,"scaleX":0.5,"name":"atttype_all","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":26,"x":0,"var":"atttype_couple","stateNum":1,"skin":"gameres/ui/atttype_couple.png","scaleY":0.5,"scaleX":0.5,"name":"atttype_couple","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":52,"x":0,"var":"atttype_guild","stateNum":1,"skin":"gameres/ui/atttype_guild.png","scaleY":0.5,"scaleX":0.5,"name":"atttype_guild","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":78,"x":0,"var":"atttype_mentor","stateNum":1,"skin":"gameres/ui/atttype_mentor.png","scaleY":0.5,"scaleX":0.5,"name":"atttype_mentor","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":104,"x":0,"var":"atttype_peace","stateNum":1,"skin":"gameres/ui/atttype_peace.png","scaleY":0.5,"scaleX":0.5,"name":"atttype_peace","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":130,"x":0,"var":"atttype_red","stateNum":1,"skin":"gameres/ui/atttype_red.png","scaleY":0.5,"scaleX":0.5,"name":"atttype_red","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":156,"x":0,"var":"atttype_team","stateNum":1,"skin":"gameres/ui/atttype_team.png","scaleY":0.5,"scaleX":0.5,"name":"atttype_team","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}}]},{"type":"Text","props":{"y":21,"x":134,"width":0,"var":"lbl_hp","valign":"middle","text":"300/300","strokeColor":"#000000","stroke":2,"name":"lbl_hp","height":0,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":45,"x":134,"var":"lbl_mp","valign":"middle","text":"200/200","strokeColor":"#000000","stroke":2,"name":"lbl_mp","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":98,"x":132,"width":22,"var":"lbl_level","valign":"middle","text":"999","strokeColor":"#000000","stroke":2,"pivotY":30,"pivotX":9,"name":"lbl_level","height":22,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":9,"x":338,"visible":false,"var":"herohead_bg","name":"herohead_bg"},"child":[{"type":"Image","props":{"width":203,"skin":"gameres/png/hero_blood_bg.png","scaleY":1.2,"scaleX":1.2,"height":77,"alpha":1},"child":[{"type":"Image","props":{"y":59,"x":79,"width":0,"var":"hero_power","skin":"gameres/png/hero_power.png","name":"hero_power","height":5}},{"type":"Image","props":{"y":40,"x":69,"width":110,"var":"hero_exp","skin":"gameres/png/hero_exp.png","name":"hero_exp","height":9}},{"type":"Image","props":{"y":30,"x":70,"width":110,"var":"hero_mp","skin":"gameres/png/hero_mp.png","name":"hero_mp","height":9}},{"type":"Image","props":{"y":19,"x":70,"width":110,"var":"hero_hp","skin":"gameres/png/hero_hp.png","name":"hero_hp","height":9}},{"type":"Image","props":{"y":0,"x":0,"width":203,"skin":"gameres/png/herohead_bg.png","height":77}},{"type":"Image","props":{"y":6,"x":7,"width":63,"var":"herohead_sex","skin":"gameres/ui/herohead0.png","name":"herohead_sex","height":64}},{"type":"Image","props":{"y":53,"x":57,"width":22,"skin":"gameres/ui/herolv_bg.png","height":22}}]},{"type":"Text","props":{"y":-2,"x":94,"width":100,"var":"hero_name","text":"英雄","strokeColor":"#000000","stroke":2,"overflow":"hidden","name":"hero_name","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":87,"x":93,"text":"忠诚度","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ffffff"}},{"type":"Text","props":{"y":87,"x":148,"var":"hero_loyal","text":"0.0","strokeColor":"#000000","stroke":2,"name":"hero_loyal","fontSize":18,"color":"#ffffff"}},{"type":"Text","props":{"y":18.99999999999997,"x":108,"width":0,"var":"lbl_herohp","valign":"middle","text":"300/300","strokeColor":"#000000","stroke":2,"name":"lbl_herohp","height":0,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":32.99999999999997,"x":108,"var":"lbl_heromp","valign":"middle","text":"200/200","strokeColor":"#000000","stroke":2,"name":"lbl_heromp","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":66,"x":71,"width":22,"var":"hero_level","valign":"middle","text":"99","name":"hero_level","height":22,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":12,"x":594,"visible":false,"var":"targethead_bg","name":"targethead_bg"},"child":[{"type":"Image","props":{"y":30,"x":40,"width":137,"var":"target_hpBar","skin":"gameres/png/target_blood.png","name":"target_hpBar","height":10}},{"type":"Image","props":{"y":0,"x":0,"width":180,"skin":"gameres/png/target_head.png","height":50}},{"type":"Image","props":{"y":8,"x":1,"width":43,"var":"target_job","skin":"gameres/ui/target_ds.png","name":"target_job","height":34}},{"type":"Text","props":{"y":25,"x":46,"width":130,"var":"target_hpNum","valign":"middle","text":"300/300","strokeColor":"#000000","stroke":2,"name":"target_hpNum","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":7,"x":44,"width":128,"var":"target_name","valign":"middle","text":"鸡","strokeColor":"#000000","stroke":2,"name":"target_name","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":35,"x":2,"width":46,"var":"target_level","valign":"middle","text":"99999","name":"target_level","height":12,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":220,"x":435,"width":266,"visible":false,"var":"target_menu","skin":"gameres/png/target_menu.png","name":"target_menu","height":202},"child":[{"type":"Text","props":{"y":15,"x":36,"width":189,"var":"target_menu_name","valign":"middle","text":"鸡","strokeColor":"#000000","stroke":2,"name":"target_menu_name","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":47,"x":29,"width":87,"var":"menu_info","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_info","labelSize":14,"labelColors":"#ffffff","label":"查看信息","height":30}},{"type":"Button","props":{"y":98,"x":29,"width":87,"var":"menu_friend","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_friend","labelSize":14,"labelColors":"#ffffff","label":"加为好友","height":30}},{"type":"Button","props":{"y":149,"x":29,"width":87,"var":"menu_team","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_team","labelSize":14,"labelColors":"#ffffff","label":"邀请组队","height":30}},{"type":"Button","props":{"y":47,"x":142,"width":87,"var":"menu_chat","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_chat","labelSize":14,"labelColors":"#ffffff","label":"私  聊","height":30}},{"type":"Button","props":{"y":98,"x":143,"width":87,"var":"menu_shield","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_shield","labelSize":14,"labelColors":"#ffffff","label":"屏蔽发言","height":30}},{"type":"Button","props":{"y":149,"x":143,"width":87,"var":"menu_guild","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_guild","labelSize":14,"labelColors":"#ffffff","label":"邀请入会","height":30}}]}]},{"type":"Image","props":{"width":450,"name":"chat_node","height":58,"centerX":0,"bottom":115},"child":[{"type":"Image","props":{"width":373,"var":"Drug_bg","top":0,"right":0,"mouseThrough":true,"left":80,"height":58,"bottom":0},"child":[{"type":"Image","props":{"y":11,"x":0,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":11,"x":50,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":11,"x":100,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":11,"x":150,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":11,"x":200,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":11,"x":250,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Button","props":{"y":11,"x":0,"width":40,"var":"Drug_0","name":"0","labelColors":"#f9f3f3","height":36,"centerY":0}},{"type":"Button","props":{"y":11,"x":50,"width":40,"var":"Drug_1","name":"1","labelColors":"#f9f3f3","height":36,"centerY":0}},{"type":"Button","props":{"y":11,"x":100,"width":40,"var":"Drug_2","name":"2","labelColors":"#f9f3f3","height":36,"centerY":0}},{"type":"Button","props":{"y":11,"x":150,"width":40,"var":"Drug_3","name":"3","labelColors":"#f9f3f3","height":36,"centerY":0}},{"type":"Button","props":{"y":11,"x":200,"width":40,"var":"Drug_4","name":"4","labelColors":"#f9f3f3","height":36,"centerY":0}},{"type":"Button","props":{"y":11,"x":250,"width":40,"var":"Drug_5","name":"5","labelColors":"#f9f3f3","height":36,"centerY":0}}]},{"type":"Image","props":{"y":57,"var":"chat_bg","skin":"gameres/png/gamemain_chat_bg .png","sizeGrid":"10,10,10,10","right":0,"name":"chat_bg","left":0,"height":104},"child":[{"type":"List","props":{"y":2,"x":56,"width":392,"var":"chat_list","name":"chat_list","height":98}},{"type":"Image","props":{"y":-150,"x":0,"visible":false,"var":"img_changeChat","scaleY":1.2,"scaleX":1.2},"child":[{"type":"Button","props":{"width":70,"var":"btn_public","stateNum":2,"skin":"gameres/ui/gamemain_chat_public.png","name":"public","height":31}},{"type":"Button","props":{"y":31,"width":70,"var":"btn_guild","stateNum":2,"skin":"gameres/ui/gamemain_chat_guild.png","name":"guild","height":31}},{"type":"Button","props":{"y":62,"width":70,"var":"btn_troops","stateNum":2,"skin":"gameres/ui/gamemain_chat_troops.png","name":"troops","height":31}},{"type":"Button","props":{"y":93,"width":70,"var":"btn_siliao","stateNum":2,"skin":"gameres/ui/gamemain_chat_siliao.png","name":"siliao","height":31}}]},{"type":"Button","props":{"y":6,"x":10,"width":34,"var":"btn_chatChange","stateNum":2,"skin":"gameres/ui/chat_public.png","scaleY":1.2,"scaleX":1.2,"name":"chatChange","height":34}},{"type":"Button","props":{"y":55,"x":11,"width":34,"var":"btn_chat","stateNum":2,"skin":"gameres/ui/img_chat.png","scaleY":1.2,"scaleX":1.2,"height":34}}]},{"type":"Button","props":{"y":11,"x":382,"var":"show_drug_kuang","stateNum":1,"skin":"gameres/ui/hero_suo.png","scaleY":0.8,"scaleX":0.8,"name":"show_drug_kuang"}}]},{"type":"Image","props":{"var":"panel_node","top":0,"right":0,"name":"panel_node","mouseThrough":true,"left":0,"bottom":0},"child":[{"type":"Image","props":{"width":151,"var":"img_mini","top":0,"skin":"gameres/ui/minimapkuang.png","sizeGrid":"27,31,15,30","scaleY":1.05,"scaleX":1.05,"right":0,"name":"img_mini","height":133},"child":[{"type":"Image","props":{"width":213,"scaleY":0.6,"scaleX":0.6,"height":125,"centerY":0,"centerX":0}},{"type":"Text","props":{"y":100,"x":28,"valign":"middle","name":"lbl_role_pos","fontSize":16,"color":"#d1af00","align":"center"}},{"type":"Panel","props":{"width":145,"var":"pl_mini","top":29,"right":3,"name":"pl_mini","left":4,"height":100,"bottom":3}},{"type":"Box","props":{"var":"infoStateBaox","top":135,"right":0,"name":"infoStateBaox","left":0,"height":18},"child":[{"type":"Label","props":{"visible":false,"text":"FPS:","strokeColor":"#101010","stroke":2,"fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":0,"x":35,"visible":false,"var":"fpsLab","text":"60","strokeColor":"#101010","stroke":2,"name":"fpsLab","fontSize":14,"color":"#10bb24"}},{"type":"Label","props":{"y":0,"x":48,"text":"PING:","strokeColor":"#101010","stroke":2,"fontSize":14,"color":"#f6f6f6"}},{"type":"Label","props":{"y":0,"x":89,"var":"delayLab","text":"60ms","strokeColor":"#101010","stroke":2,"name":"delayLab","fontSize":14,"color":"#10bb24"}}]}]},{"type":"Image","props":{"width":315,"var":"btn_list","top":0,"right":200,"mouseThrough":true,"height":140},"child":[{"type":"Button","props":{"y":70,"x":126,"width":55,"var":"btn_rank_list","stateNum":2,"skin":"gameres/ui/btn_new.png","name":"btn_rank_list","height":55}},{"type":"Button","props":{"y":70,"x":62,"width":55,"var":"bnt_shop","stateNum":2,"skin":"gameres/ui/btn_shagnc.png","name":"bnt_shop","height":55}},{"type":"Button","props":{"y":10,"x":62,"width":55,"visible":true,"var":"bnt_chongzi","stateNum":2,"skin":"gameres/ui/btn_recherage.png","name":"bnt_chongzi","height":55}},{"type":"Button","props":{"y":10,"x":126,"width":55,"var":"bnt_bysc","stateNum":2,"skin":"gameres/ui/btn_shop.png","name":"bnt_bysc","height":55}},{"type":"Button","props":{"y":10,"x":190,"width":55,"var":"bnt_game_fl","stateNum":2,"skin":"gameres/ui/btn_fuli.png","name":"bnt_game_fl","height":55}},{"type":"Button","props":{"y":10,"x":254,"width":55,"var":"bnt_game_hd","stateNum":2,"skin":"gameres/ui/btn_active.png","name":"bnt_game_hd","height":55}},{"type":"Button","props":{"y":70,"x":254,"width":55,"visible":true,"var":"bnt_new_user","stateNum":2,"skin":"gameres/ui/btn_new_user.png","name":"bnt_new_user","labelColors":"#ffffff","height":55}},{"type":"Button","props":{"y":70,"x":190,"width":55,"visible":true,"var":"btn_recharge_reward","stateNum":2,"skin":"gameres/ui/btn_recharge_first.png","name":"btn_recharge_reward","labelColors":"#ffffff","height":55}},{"type":"Button","props":{"y":10,"x":-2,"width":55,"var":"btn_vip","stateNum":2,"skin":"gameres/ui/btn_vip.png","name":"btn_vip","height":55}},{"type":"Button","props":{"y":70,"x":-2,"width":55,"var":"onLine","stateNum":2,"skin":"gameres/ui/btn_online.png","name":"onLine","labelSize":15,"labelColors":"#ffffff","height":55}}]},{"type":"Image","props":{"width":300,"visible":false,"var":"onLine_bonus","top":-250,"skin":"gameres/png/bg_online.png","name":"onLine_bonus","left":-350,"height":180},"child":[{"type":"Button","props":{"y":3,"x":261,"var":"btn_bonusClose","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_bonusClose"}}]},{"type":"Image","props":{"width":204,"var":"hero_panel","top":170,"scaleY":1.2,"scaleX":1.2,"right":93,"name":"hero_panel","mouseThrough":true,"height":45},"child":[{"type":"Button","props":{"y":1,"x":160,"width":36,"var":"herocall_btn","stateNum":2,"skin":"gameres/ui/herocall_btn.png","name":"herocall_btn","height":38}},{"type":"Button","props":{"y":1,"x":80,"width":36,"visible":false,"var":"herobag_btn","stateNum":2,"skin":"gameres/ui/herobag_btn.png","name":"herobag_btn","height":38}},{"type":"Button","props":{"y":1,"x":40,"width":36,"visible":false,"var":"herolock_btn","stateNum":2,"skin":"gameres/ui/herolock_btn.png","name":"herolock_btn","height":38}},{"type":"Button","props":{"y":1,"x":120,"width":36,"visible":false,"var":"herostate_btn","stateNum":2,"skin":"gameres/ui/herostate_btn1.png","name":"herostate_btn","height":38}},{"type":"Button","props":{"y":1,"x":0,"width":36,"visible":false,"var":"heroguard_btn","stateNum":2,"skin":"gameres/ui/heroguard_btn.png","name":"heroguard_btn","labelColors":"#ffffff","height":38}}]},{"type":"Image","props":{"width":50,"visible":false,"var":"showbonus","top":244,"right":300,"name":"showbonus","height":50}},{"type":"Label","props":{"width":114,"var":"lbl_map_name","valign":"middle","top":5,"text":"小地图","strokeColor":"#000000","stroke":2,"right":38,"overflow":"hidden","name":"lbl_map_name","height":24,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"width":67,"var":"lbl_map_grid","valign":"middle","top":114,"text":"999,999","strokeColor":"#000000","stroke":2,"right":15,"name":"lbl_map_grid","height":16,"fontSize":14,"color":"#ffffff","align":"right"}},{"type":"Button","props":{"width":32,"var":"bnt_show","top":3,"stateNum":1,"skin":"gameres/ui/map_showbtn1.png","scaleY":1.2,"scaleX":1.2,"right":163,"name":"bnt_show","height":32}},{"type":"Button","props":{"width":31,"var":"btn_openmini","top":3,"stateNum":2,"skin":"gameres/ui/minimapjian.png","right":3,"name":"btn_openmini","height":26}},{"type":"Button","props":{"width":50,"var":"btn_autohook","top":239,"stateNum":2,"skin":"gameres/ui/guaji.png","scaleY":1.2,"scaleX":1.2,"right":96,"height":50}},{"type":"Button","props":{"width":48,"var":"btn_lock","top":239,"stateNum":2,"skin":"gameres/ui/btn_lock.png","scaleY":1.2,"scaleX":1.2,"right":20,"name":"btn_lock","height":49}},{"type":"Button","props":{"width":30,"var":"hero_li","top":178,"stateNum":1,"skin":"gameres/ui/hero_fang.png","right":50,"name":"hero_li","height":30}},{"type":"Button","props":{"width":32,"var":"hero_hide","top":159,"stateNum":2,"skin":"gameres/ui/hero_li.png","scaleY":1.2,"scaleX":1.2,"right":0,"name":"hero_hide","height":56}},{"type":"Button","props":{"width":36,"visible":false,"var":"petState_btn","top":247,"stateNum":2,"skin":"gameres/ui/btn_petstate.png","scaleY":1.2,"scaleX":1.2,"right":175,"name":"petState_btn","height":38}},{"type":"Button","props":{"width":36,"visible":false,"var":"heroatt_btn","top":247,"stateNum":2,"skin":"gameres/ui/heroatt_btn.png","scaleY":1.2,"scaleX":1.2,"right":238,"name":"heroatt_btn","height":38}},{"type":"Button","props":{"width":36,"visible":true,"var":"auto_pick","top":361,"stateNum":2,"skin":"gameres/ui/auto_pick.png","scaleY":1.2,"scaleX":1.2,"right":258,"name":"auto_pick","height":38}},{"type":"Image","props":{"width":50,"visible":false,"var":"img_mail_Logo","top":304,"right":300,"height":50}}]},{"type":"Image","props":{"width":340,"scaleY":1.2,"scaleX":1.2,"name":"btn_btnList","mouseThrough":true,"height":150,"centerX":0,"bottom":0},"child":[{"type":"Button","props":{"y":81,"x":267,"width":46,"var":"btn_set","stateNum":2,"skin":"gameres/ui/btn_set.png","name":"btn_set","height":47}},{"type":"Button","props":{"y":81,"x":86,"width":46,"var":"btn_hanghui","stateNum":2,"skin":"gameres/ui/btn_hanghui.png","name":"btn_hanghui","height":47},"child":[{"type":"Image","props":{"y":0,"x":45,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint"}}]},{"type":"Button","props":{"y":25,"x":86,"width":46,"var":"btn_jiaoyi","stateNum":2,"skin":"gameres/ui/btn_jiaoyi.png","name":"btn_jiaoyi","height":47},"child":[{"type":"Image","props":{"y":0,"x":45,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint"}}]},{"type":"Button","props":{"y":25,"x":26,"width":46,"var":"btn_bag","stateNum":2,"skin":"gameres/ui/btn_bag.png","name":"btn_bag","height":47},"child":[{"type":"Image","props":{"y":0,"x":45,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint"}}]},{"type":"Button","props":{"y":25,"x":147,"width":46,"var":"btn_team","stateNum":2,"skin":"gameres/ui/btn_team.png","name":"btn_team","height":47},"child":[{"type":"Image","props":{"y":0,"x":45,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint"}}]},{"type":"Button","props":{"y":81,"x":207,"width":46,"var":"btn_friend","stateNum":2,"skin":"gameres/ui/btn_guanxi.png","name":"btn_friend","height":47},"child":[{"type":"Image","props":{"y":0,"x":45,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint"}}]},{"type":"Button","props":{"y":25,"x":267,"width":46,"var":"btn_xiaotui","stateNum":2,"skin":"gameres/ui/btn_exit.png","name":"btn_xiaotui","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff,#ffffff","height":47}},{"type":"Button","props":{"y":81,"x":26,"width":46,"var":"btn_redpack","stateNum":2,"skin":"gameres/ui/btn_redpack.png","name":"btn_redpack","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff","height":47},"child":[{"type":"Image","props":{"y":0,"x":45,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint"}}]},{"type":"Button","props":{"y":81,"x":147,"width":46,"var":"btn_baitan","stateNum":2,"skin":"gameres/ui/btn_baitan.png","name":"btn_baitan","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff,#ffffff","height":47},"child":[{"type":"Image","props":{"y":0,"x":45,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint"}}]},{"type":"Button","props":{"y":25,"x":207,"width":46,"visible":true,"var":"btn_zhaomu","stateNum":2,"skin":"gameres/ui/btn_mail.png","name":"btn_zhaomu","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff,#ffffff","height":47},"child":[{"type":"Image","props":{"y":0,"x":45,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint"}}]}]},{"type":"Image","props":{"top":0,"right":0,"name":"panel_att","mouseThrough":true,"left":0,"bottom":0},"child":[{"type":"Panel","props":{"y":119,"x":188,"width":400,"name":"panel_rotate","mouseThrough":true,"mouseEnabled":false,"height":400,"alpha":0}},{"type":"Sprite","props":{"y":164,"x":202,"width":300,"name":"scroll_skills","mouseThrough":true,"mouseEnabled":false,"height":300,"alpha":0}},{"type":"Button","props":{"width":115,"var":"btn_att","stateNum":2,"skin":"gameres/ui/btn_att.png","right":20,"name":"btn_att","height":115,"bottom":20},"child":[{"type":"Image","props":{"y":-43,"x":-48,"skin":"gameres/png/slidetiparrow.png","scaleY":0.5,"scaleX":0.5}}]},{"type":"Button","props":{"y":-291,"x":-370,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_0","labelColors":"#ffffff","height":57}},{"type":"Button","props":{"y":-285,"x":-443,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_1","labelColors":"#ffffff","height":57}},{"type":"Button","props":{"y":-157,"x":-229,"width":64,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.8,"scaleX":0.8,"name":"btn_target","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","label":"锁定","height":64}},{"type":"Button","props":{"y":-256,"x":-507,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_2","labelColors":"#","height":57}},{"type":"Button","props":{"y":-150,"x":-387,"width":64,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.8,"scaleX":0.8,"name":"btn_warou","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff","label":"挖肉","height":64}},{"type":"Button","props":{"y":-151,"x":-310,"width":64,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.8,"scaleX":0.8,"name":"btn_wakuang","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","label":"挖矿","height":64}},{"type":"Button","props":{"y":-77,"x":-426,"width":46,"visible":false,"stateNum":2,"skin":"gameres/ui/humrun.png","selected":false,"name":"btn_move_type","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":46}},{"type":"Button","props":{"y":-152,"x":-469,"width":64,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.8,"scaleX":0.8,"name":"btn_get_item","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","label":"捡取","height":64}},{"type":"Button","props":{"y":-205,"x":-563,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_3","labelColors":"#","height":57}},{"type":"Button","props":{"y":-135,"x":-595,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_4","labelColors":"#","height":57}},{"type":"Button","props":{"y":-63,"x":-606,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_5","labelColors":"#","height":57}},{"type":"Button","props":{"y":-74,"x":-361,"width":50,"visible":false,"var":"btn_off_target","stateNum":2,"skin":"gameres/ui/offtarget.png","scaleY":0.8,"scaleX":0.8,"name":"btn_off_target","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":50}}]},{"type":"Image","props":{"width":612,"name":"panel_ctrl","mouseThrough":true,"height":100,"centerX":0,"bottom":0},"child":[{"type":"Image","props":{"x":0,"width":612,"skin":"gameres/png/pro_bg.png","height":14.4,"centerX":0,"bottom":0}},{"type":"Image","props":{"width":588,"skin":"gameres/png/pro_base.png","name":"img_exp","left":12,"height":9.6,"bottom":0}},{"type":"Image","props":{"x":0,"width":612,"skin":"gameres/png/pro_up.png","height":14.4,"centerX":0,"bottom":0}},{"type":"Label","props":{"text":"415644/5415","strokeColor":"#000000","stroke":1,"name":"lbl_exp","fontSize":14,"color":"#f4ce8e","centerX":0,"bottom":-1}},{"type":"Button","props":{"width":54,"var":"bnt_role","stateNum":2,"skin":"gameres/ui/btn_juese.png","name":"bnt_role","left":20,"height":54,"bottom":20},"child":[{"type":"Image","props":{"y":0,"x":32,"visible":false,"var":"img_hint","skin":"gameres/ui/img_hint.png","scaleY":0.7,"scaleX":0.7,"name":"img_hint"}}]},{"type":"Button","props":{"width":54,"var":"btn_bag0","stateNum":2,"skin":"gameres/ui/btn_bag.png","right":20,"name":"btn_bag0","labelColors":"#","height":54,"bottom":20}},{"type":"Button","props":{"y":25,"width":54,"var":"btn_get_item","stateNum":2,"skin":"gameres/ui/humma.png","name":"btn_get_item","left":-50,"labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff","height":54,"bottom":20}}]},{"type":"Image","props":{"y":58,"x":-203,"width":169,"var":"img_rwbj","skin":"gameres/png/rw_bj2.png","name":"img_rwbj","height":34}},{"type":"Button","props":{"y":14,"x":292,"var":"btn_qing","stateNum":1,"skin":"gameres/ui/head_hide.png","scaleY":0.8,"scaleX":0.8}},{"type":"TextArea","props":{"y":12,"x":262,"width":392,"visible":false,"var":"ta_gmtest","vScrollBarSkin":"gameres/ui/vscroll.png","type":"text","skin":"gameres/png/img_kuang.png","overflow":"scroll","height":391,"color":"#ffffff"},"child":[{"type":"Button","props":{"y":4,"x":282,"var":"btn_gm_gb","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_bonusClose","label":"关闭"}},{"type":"Button","props":{"y":46,"x":280,"var":"btn_gm_qk","stateNum":2,"skin":"gameres/ui/btn_close.png","label":"清空"}}]},{"type":"Button","props":{"width":118,"var":"btn_position","stateNum":2,"skin":"gameres/ui/btn_position.png","scaleY":0.5,"scaleX":0.5,"left":0,"height":118,"bottom":0}}]};
		return GameMainUI;
	})(View);
var GameSceneUI=(function(_super){
		function GameSceneUI(){
			
		    this.maplayer=null;
		    this.btn_edge=null;

			GameSceneUI.__super.call(this);
		}

		CLASS$(GameSceneUI,'ui.GameSceneUI',_super);
		var __proto__=GameSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameSceneUI.uiView);

		}

		GameSceneUI.uiView={"type":"View","props":{},"child":[{"type":"Box","props":{"y":-186,"x":99,"var":"maplayer","name":"maplayer"},"child":[{"type":"Button","props":{"y":186,"x":-493,"width":393,"var":"btn_edge","name":"btn_edge","height":500}}]}]};
		return GameSceneUI;
	})(View);
var HangHui2UI=(function(_super){
		function HangHui2UI(){
			
		    this.img_bg=null;
		    this.btn_notice=null;
		    this.btn_rolelist=null;
		    this.btn_waijiao=null;
		    this.btn_chat=null;
		    this.btn_zhaomu=null;
		    this.img_rolelist=null;
		    this.list_title=null;
		    this.btn_title_add=null;
		    this.list_role=null;
		    this.btn_title_set=null;
		    this.btn_title_del=null;
		    this.btn_title_change=null;
		    this.btn_remove_role=null;
		    this.img_notice=null;
		    this.lbl_des_title=null;
		    this.notice_inputImg=null;
		    this.notice_input=null;
		    this.btn_notice_editor=null;
		    this.btn_notice_sumit=null;
		    this.lbl_cnt=null;
		    this.lbl_name=null;
		    this.img_chat=null;
		    this.list_chat=null;
		    this.img_zhaoxian=null;
		    this.list_zhaoxian=null;
		    this.btn_sel_zhan=null;
		    this.btn_sel_fa=null;
		    this.btn_sel_dao=null;
		    this.btn_zhaomu_editor=null;
		    this.btn_zhaomu_zhanshi=null;
		    this.btn_zhaomu_fashi=null;
		    this.btn_zhaomu_daoshi=null;
		    this.lbl_zm_info=null;
		    this.lbl_zm_lv=null;
		    this.btn_zhaomu_ok=null;
		    this.btn_zhaomu_esc=null;
		    this.btn_zhaomu_mdm=null;
		    this.img_waijiao=null;
		    this.list_waijiao=null;
		    this.btn_waijiao_look=null;
		    this.btn_waijiao_add=null;
		    this.btn_waijiao_fight=null;
		    this.btn_waijiao_can=null;
		    this.btn_exit=null;
		    this.img_Editor=null;
		    this.lbl_title=null;
		    this.lbl_desc=null;
		    this.input_str=null;
		    this.btn_ok=null;
		    this.btn_esc=null;
		    this.input_str1=null;
		    this.input_str2=null;
		    this.lbl_input_desc0=null;
		    this.lbl_input_desc1=null;
		    this.btn_exit1=null;
		    this.changetitle=null;
		    this.btn_exit3=null;
		    this.title_list=null;

			HangHui2UI.__super.call(this);
		}

		CLASS$(HangHui2UI,'ui.HangHui2UI',_super);
		var __proto__=HangHui2UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HangHui2UI.uiView);

		}

		HangHui2UI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"scaleY":1,"scaleX":1,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_bg","skin":"gameres/png/img_bg.png","sizeGrid":"45,80,100,80","name":"img_bg","height":465,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":61,"x":29,"width":84,"var":"btn_notice","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_notice","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"公 告","height":42}},{"type":"Button","props":{"y":61,"x":124,"width":84,"var":"btn_rolelist","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_rolelist","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"成 员","height":42}},{"type":"Button","props":{"y":61,"x":219,"width":84,"var":"btn_waijiao","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_waijiao","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"外 交","height":42}},{"type":"Button","props":{"y":61,"x":314,"width":84,"var":"btn_chat","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_chat","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"聊 天","height":42}},{"type":"Button","props":{"y":61,"x":409,"width":84,"var":"btn_zhaomu","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_zhaomu","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"招 贤","height":42}},{"type":"Image","props":{"y":104,"x":31,"width":651,"var":"img_rolelist","sizeGrid":"26,26,26,20","name":"img_rolelist","height":283},"child":[{"type":"Image","props":{"y":0,"x":1,"width":648,"skin":"gameres/png/hanghuidi.png","sizeGrid":"26,26,26,20","height":37}},{"type":"List","props":{"y":37,"x":6,"width":173,"var":"list_title","name":"list_title","height":214}},{"type":"Button","props":{"y":294,"x":21,"width":100,"var":"btn_title_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_title_add","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"添加封号","height":47},"child":[{"type":"List","props":{"y":-246,"x":154,"width":463,"var":"list_role","name":"list_role","height":218}}]},{"type":"Button","props":{"y":294,"x":149,"width":100,"var":"btn_title_set","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_title_set","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"设置封号","height":47}},{"type":"Button","props":{"y":294,"x":277,"width":100,"var":"btn_title_del","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_title_del","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"删除封号","height":47}},{"type":"Button","props":{"y":294,"x":533,"width":100,"var":"btn_title_change","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_title_change","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"转让城主","height":47}},{"type":"Button","props":{"y":294,"x":405,"width":100,"var":"btn_remove_role","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_remove_role","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"踢出工会","height":47}},{"type":"Label","props":{"y":5,"x":70,"text":"称号","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":530,"text":"操作","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":401,"text":"等级","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":344,"text":"性别","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":290,"text":"职业","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":200,"text":"角色名","fontSize":20,"color":"#c69c61"}},{"type":"Image","props":{"y":48,"x":177,"width":1,"skin":"gameres/ui/hanghui_shuxian.png","height":214}}]},{"type":"Image","props":{"y":104,"x":30,"width":652,"var":"img_notice","sizeGrid":"26,26,26,20","name":"img_notice","height":280},"child":[{"type":"Text","props":{"y":12,"x":395,"var":"lbl_des_title","text":"公告内容","strokeColor":"#000000","name":"lbl_des_title","fontSize":20,"color":"#d4d4d4"}},{"type":"Image","props":{"y":44,"x":240,"width":410,"var":"notice_inputImg","height":228},"child":[{"type":"TextArea","props":{"y":5,"x":4,"wordWrap":true,"width":402,"var":"notice_input","vScrollBarSkin":"gameres/ui/vscroll.png","type":"text","text":"TextArea","strokeColor":"#000000","sizeGrid":"2,2,2,,","overflow":"scroll","name":"notice_input","leading":2,"height":220,"fontSize":20,"font":"SimSun","color":"#e0bf94"}}]},{"type":"Button","props":{"y":294,"x":545,"width":100,"var":"btn_notice_editor","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_notice_editor","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"编 辑","height":47}},{"type":"Button","props":{"y":294,"x":441,"width":100,"var":"btn_notice_sumit","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_notice_sumit","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"提 交","height":47}},{"type":"Text","props":{"y":49,"x":3,"text":"行会名称:","fontSize":20,"color":"#e0bf94"}},{"type":"Text","props":{"y":81,"x":3,"text":"行会人数:","overflow":"hidden","fontSize":20,"color":"#e0bf94"}},{"type":"Text","props":{"y":81,"x":93,"var":"lbl_cnt","text":"xxx","name":"lbl_cnt","fontSize":20,"color":"#e0bf94"}},{"type":"Text","props":{"y":49,"x":93,"var":"lbl_name","text":"行会名字七个字","name":"lbl_name","fontSize":20,"color":"#e0bf94"}},{"type":"Label","props":{"y":12,"x":78,"text":"行会信息","fontSize":20,"color":"#d4d4d4"}},{"type":"Image","props":{"y":28,"x":239,"width":1,"skin":"gameres/ui/hanghui_shuxian.png","height":214}}]},{"type":"Image","props":{"y":103,"x":28,"width":655,"var":"img_chat","sizeGrid":"26,26,26,20","name":"img_chat","height":283},"child":[{"type":"List","props":{"y":2,"x":2,"width":644,"var":"list_chat","name":"list_chat","height":254}}]},{"type":"Image","props":{"y":104,"x":31,"width":651,"var":"img_zhaoxian","name":"img_zhaoxian","mouseThrough":false,"height":283},"child":[{"type":"List","props":{"y":41,"x":185,"width":461,"var":"list_zhaoxian","name":"list_zhaoxian","height":210}},{"type":"Button","props":{"y":166,"x":2,"width":20,"var":"btn_sel_zhan","stateNum":2,"skin":"gameres/ui/check.png","name":"btn_sel_zhan","mouseEnabled":false,"labelSize":22,"labelColors":"#ffffff","height":20}},{"type":"Button","props":{"y":166,"x":62,"width":20,"var":"btn_sel_fa","stateNum":2,"skin":"gameres/ui/check.png","name":"btn_sel_fa","mouseEnabled":false,"labelSize":22,"labelColors":"#ffffff","height":20}},{"type":"Button","props":{"y":166,"x":120,"width":20,"var":"btn_sel_dao","stateNum":2,"skin":"gameres/ui/check.png","name":"btn_sel_dao","mouseEnabled":false,"labelSize":22,"labelColors":"#ffffff","height":20}},{"type":"Button","props":{"y":215,"x":55,"width":70,"var":"btn_zhaomu_editor","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_zhaomu_editor","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"编 辑","height":25}},{"type":"Text","props":{"y":166,"x":22,"var":"btn_zhaomu_zhanshi","text":"战士","strokeColor":"#000000","stroke":2,"name":"btn_zhaomu_zhanshi","fontSize":20,"color":"#c69c61"}},{"type":"Text","props":{"y":166,"x":81,"var":"btn_zhaomu_fashi","text":"法师","strokeColor":"#000000","stroke":2,"name":"btn_zhaomu_fashi","fontSize":20,"color":"#c69c61"}},{"type":"Text","props":{"y":166,"x":139,"width":28,"var":"btn_zhaomu_daoshi","text":"道士","strokeColor":"#000000","stroke":2,"name":"btn_zhaomu_daoshi","height":14,"fontSize":20,"color":"#c69c61"}},{"type":"Text","props":{"y":124,"x":3,"text":"等级","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#c69c61"}},{"type":"TextInput","props":{"y":43,"x":11,"wordWrap":true,"width":164,"var":"lbl_zm_info","strokeColor":"#000000","stroke":2,"sizeGrid":"30,30,30,18","padding":"5,5,5,5","name":"lbl_zm_info","mouseEnabled":false,"leading":3,"height":66,"fontSize":14,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16","align":"left"}},{"type":"TextInput","props":{"y":123,"x":45,"width":130,"var":"lbl_zm_lv","text":"1","strokeColor":"#000000","stroke":2,"sizeGrid":"30,30,30,18","name":"lbl_zm_lv","mouseThrough":false,"height":24,"fontSize":20,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"Button","props":{"y":215,"x":15,"width":70,"var":"btn_zhaomu_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_zhaomu_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"提 交","height":25}},{"type":"Button","props":{"y":215,"x":98,"width":70,"var":"btn_zhaomu_esc","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_zhaomu_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"取 消","height":25}},{"type":"Button","props":{"y":296,"x":553,"width":100,"var":"btn_zhaomu_mdm","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_zhaomu_mdm","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"招贤","height":47}},{"type":"Image","props":{"y":0,"x":1,"width":648,"skin":"gameres/png/hanghuidi.png","height":37}},{"type":"Label","props":{"y":5,"x":54,"text":"招募信息","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":206,"text":"角色名","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":303,"text":"性别","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":355,"text":"职业","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":414,"text":"等级","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":538,"text":"操作","fontSize":20,"color":"#c69c61"}}]},{"type":"Image","props":{"y":106,"x":32,"width":649,"var":"img_waijiao","sizeGrid":"26,26,26,20","name":"img_waijiao","height":278},"child":[{"type":"List","props":{"y":7,"x":6,"width":172,"var":"list_waijiao","name":"list_waijiao","height":221}},{"type":"Button","props":{"y":290,"x":-2,"width":100,"var":"btn_waijiao_look","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_waijiao_look","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelFont":"Arial","labelColors":"#e2b984,#e2b984","label":"关注行会","height":47}},{"type":"Button","props":{"y":290,"x":128,"width":100,"var":"btn_waijiao_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_waijiao_add","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#e2b984,#e2b984","label":"行会结盟","height":47}},{"type":"Button","props":{"y":290,"x":258,"width":100,"var":"btn_waijiao_fight","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_waijiao_fight","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#e2b984,#e2b984","label":"行会宣战","height":47}},{"type":"CheckBox","props":{"y":306,"x":528,"var":"btn_waijiao_can","stateNum":2,"skin":"gameres/ui/btn_sel.png","name":"btn_waijiao_can","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"允许联盟"}}]},{"type":"Button","props":{"y":7,"x":646,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"name":"btn_exit"}},{"type":"Image","props":{"y":109,"x":19,"width":648,"var":"img_Editor","skin":"gameres/png/hanghui2_img_bg_2.png","sizeGrid":"30,65,50,60","name":"img_Editor","height":261},"child":[{"type":"Box","props":{"y":-124,"x":-223,"width":960,"mouseEnabled":false,"height":640}},{"type":"Text","props":{"y":14,"x":202,"width":220,"var":"lbl_title","valign":"middle","text":"cccccccc","strokeColor":"#000000","stroke":2,"name":"lbl_title","height":23,"fontSize":24,"color":"#ddaf52","align":"center"}},{"type":"Text","props":{"y":68,"x":73,"wordWrap":true,"width":480,"var":"lbl_desc","text":"cccccccc","name":"lbl_desc","fontSize":18,"color":"#ddaf52","align":"center"}},{"type":"TextInput","props":{"y":118,"x":66,"width":500,"var":"input_str","sizeGrid":"30,30,30,30","name":"input_str","maxChars":14,"height":25,"fontSize":18,"font":"SimSun","color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"Button","props":{"y":197,"x":136,"width":80,"var":"btn_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"label","height":28}},{"type":"Button","props":{"y":197,"x":377,"width":80,"var":"btn_esc","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"label","height":28}},{"type":"TextInput","props":{"y":88,"x":66,"width":500,"var":"input_str1","sizeGrid":"30,30,30,30","name":"input_str1","maxChars":14,"height":25,"fontSize":18,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"TextInput","props":{"y":148,"x":66,"width":500,"var":"input_str2","sizeGrid":"30,30,30,30","name":"input_str2","maxChars":14,"height":25,"fontSize":18,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"Text","props":{"y":60,"x":35,"var":"lbl_input_desc0","text":"cccccccc","name":"lbl_input_desc0","fontSize":18,"color":"#ddaf52","align":"center"}},{"type":"Text","props":{"y":121,"x":35,"var":"lbl_input_desc1","text":"cccccccc","name":"lbl_input_desc1","fontSize":18,"color":"#ddaf52","align":"center"}},{"type":"Button","props":{"y":3,"x":607,"var":"btn_exit1","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"name":"btn_exit1","labelSize":20,"labelColors":"#ffffff"}}]},{"type":"Image","props":{"y":143,"x":140,"var":"changetitle","skin":"gameres/png/hanghui2_img_bg_2.png","name":"changetitle"},"child":[{"type":"Button","props":{"y":-1,"x":318,"var":"btn_exit3","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"name":"btn_exit3"}},{"type":"List","props":{"y":8,"x":5,"width":312,"var":"title_list","name":"title_list","height":186}}]},{"type":"Image","props":{"y":27,"x":324,"width":65,"skin":"gameres/ui/hanghui_title.png","height":31}}]}]};
		return HangHui2UI;
	})(View);
var HangHuiWorldUI=(function(_super){
		function HangHuiWorldUI(){
			
		    this.img_bg=null;
		    this.btn_exit=null;
		    this.list_hanghui=null;
		    this.btn_lj=null;
		    this.btn_add=null;
		    this.img_AddGuild=null;
		    this.lbl_desc=null;
		    this.input_str=null;
		    this.btn_add1=null;
		    this.btn_esc1=null;
		    this.btn_exit1=null;
		    this.img_GuildInfo=null;
		    this.btn_join=null;
		    this.btn_back=null;
		    this.guildInfo_List=null;
		    this.btn_exit2=null;
		    this.lbl_title=null;

			HangHuiWorldUI.__super.call(this);
		}

		CLASS$(HangHuiWorldUI,'ui.HangHuiWorldUI',_super);
		var __proto__=HangHuiWorldUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HangHuiWorldUI.uiView);

		}

		HangHuiWorldUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_bg","skin":"gameres/png/img_bg1.png","sizeGrid":"45,80,110,80","name":"img_bg","mouseThrough":true,"height":465,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":-1,"x":629,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit"}},{"type":"List","props":{"y":99,"x":18,"width":653,"var":"list_hanghui","name":"list_hanghui","height":285}},{"type":"Image","props":{"y":69,"x":32,"width":648,"skin":"gameres/png/hanghuidi.png","sizeGrid":"26,26,26,20","height":37}},{"type":"Text","props":{"y":75,"x":53,"text":"排名","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ddaf52","bold":true}},{"type":"Text","props":{"y":75,"x":154,"text":"行会名称","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ddaf52","bold":true}},{"type":"Text","props":{"y":75,"x":272,"text":"在线人数","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ddaf52","bold":true}},{"type":"Text","props":{"y":75,"x":394,"text":"总人数","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ddaf52","bold":true}},{"type":"Text","props":{"y":75,"x":535,"text":"操作方式","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ddaf52","bold":true}},{"type":"Button","props":{"y":395,"x":102,"width":100,"var":"btn_lj","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_lj","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"了解行会","height":47}},{"type":"Button","props":{"y":395,"x":509,"width":100,"var":"btn_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_add","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"申请加入","height":47}},{"type":"Image","props":{"y":45,"x":65,"width":553,"var":"img_AddGuild","skin":"gameres/png/hanghui2_img_bg_2.png","sizeGrid":"30,65,50,60","name":"img_AddGuild","height":339},"child":[{"type":"Text","props":{"y":9,"x":166,"width":220,"valign":"middle","text":"添加行会","strokeColor":"#000000","stroke":2,"name":"lbl_title","fontSize":24,"color":"#ddaf52","align":"center"}},{"type":"Text","props":{"y":100,"x":36,"wordWrap":true,"width":480,"var":"lbl_desc","text":"请输入行会名字","name":"lbl_desc","fontSize":18,"color":"#ddaf52","align":"center"}},{"type":"TextInput","props":{"y":188,"x":26,"width":500,"var":"input_str","strokeColor":"#000000","stroke":2,"sizeGrid":"30,30,30,30","name":"input_str","height":25,"fontSize":18,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"Button","props":{"y":271,"x":110,"width":70,"var":"btn_add1","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_add1","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"添加","height":25}},{"type":"Button","props":{"y":271,"x":351,"width":70,"var":"btn_esc1","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_esc1","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"返回","height":25}},{"type":"Button","props":{"y":0,"x":515,"var":"btn_exit1","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"name":"btn_exit1","labelSize":20,"labelColors":"#ffffff"}}]},{"type":"Image","props":{"y":45,"x":65,"width":553,"var":"img_GuildInfo","skin":"gameres/png/hanghui2_img_bg_2.png","sizeGrid":"30,65,50,60","name":"img_GuildInfo","height":339},"child":[{"type":"Button","props":{"y":271,"x":110,"width":70,"var":"btn_join","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_join","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"加入","height":25}},{"type":"Button","props":{"y":271,"x":351,"width":70,"var":"btn_back","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_back","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"返回","height":25}},{"type":"List","props":{"y":47,"x":12,"width":524,"var":"guildInfo_List","name":"guildInfo_List","height":219}},{"type":"Button","props":{"y":1,"x":516,"var":"btn_exit2","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"name":"btn_exit2","labelSize":20,"labelColors":"#ffffff"}},{"type":"Text","props":{"y":9,"x":166,"width":220,"var":"lbl_title","valign":"middle","text":"了解行会","strokeColor":"#000000","stroke":2,"name":"lbl_title","fontSize":24,"color":"#ddaf52","align":"center"}}]},{"type":"Image","props":{"y":26,"x":292,"width":131,"skin":"gameres/ui/shijiehanghui_title.png","height":32}}]}]};
		return HangHuiWorldUI;
	})(View);
var health_hintUI=(function(_super){
		function health_hintUI(){
			
		    this.img_bg=null;
		    this.hint_bg=null;
		    this.btn_ok=null;
		    this.txt=null;
		    this.progressBar=null;
		    this.barNum=null;
		    this.lb_tip=null;

			health_hintUI.__super.call(this);
		}

		CLASS$(health_hintUI,'ui.health_hintUI',_super);
		var __proto__=health_hintUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(health_hintUI.uiView);

		}

		health_hintUI.uiView={"type":"View","props":{"y":0,"x":0,"width":1136,"name":"health_hint","height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"var":"img_bg","top":0,"skin":"gameres/png/hint_000.png","right":0,"name":"img_bg","left":0,"bottom":0}},{"type":"Image","props":{"y":38,"width":300,"var":"hint_bg","skin":"gameres/png/00807.png","name":"hint_bg","height":422,"centerX":0},"child":[{"type":"Button","props":{"var":"btn_ok","stateNum":1,"skin":"gameres/ui/00758.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","centerX":0,"bottom":10}},{"type":"TextArea","props":{"y":13,"width":263,"visible":false,"var":"txt","name":"txt","mouseEnabled":false,"height":335,"fontSize":18,"editable":false,"color":"#ffffff","centerX":1}}]},{"type":"ProgressBar","props":{"width":780,"var":"progressBar","skin":"gameres/png/main_load.png","name":"progressBar","centerX":0,"bottom":60},"child":[{"type":"Image","props":{"y":-13,"x":-63,"skin":"gameres/png/main_load_bg.png"}},{"type":"Text","props":{"y":-7,"x":356,"width":67,"var":"barNum","valign":"middle","text":"100%","name":"barNum","height":27,"fontSize":22,"color":"#ffffff","align":"center"}}]},{"type":"Label","props":{"y":493,"visible":true,"var":"lb_tip","text":"资源加载中，请稍后...","strokeColor":"#080000","stroke":2,"fontSize":16,"color":"#ffffff","centerX":0}}]};
		return health_hintUI;
	})(View);
var HeroWinUI=(function(_super){
		function HeroWinUI(){
			
		    this.Hero_bg=null;
		    this.Kuang_bg_1=null;
		    this.Hero_ico=null;
		    this.Item_0=null;
		    this.img_Hair=null;
		    this.Item_1=null;
		    this.Item_16=null;
		    this.Item_4=null;
		    this.hero_drums=null;
		    this.Item_14=null;
		    this.Item_2=null;
		    this.Item_13=null;
		    this.Item_15=null;
		    this.Item_3=null;
		    this.Item_5=null;
		    this.Item_7=null;
		    this.Item_12=null;
		    this.Item_11=null;
		    this.Item_10=null;
		    this.Item_9=null;
		    this.Item_8=null;
		    this.Item_6=null;
		    this.itemScorse=null;
		    this.state_bg=null;
		    this.stateData=null;
		    this.state_alb=null;
		    this.AttributeData=null;
		    this.state_skill=null;
		    this.Skill_List=null;
		    this.title_bg=null;
		    this.fashion_bg=null;
		    this.check_fashion=null;
		    this.fashion_hum=null;
		    this.fashion_body=null;
		    this.fashion_weapon=null;
		    this.Item_21=null;
		    this.Item_27=null;
		    this.Item_28=null;
		    this.Item_29=null;
		    this.Item_26=null;
		    this.Item_25=null;
		    this.Item_24=null;
		    this.Item_23=null;
		    this.Item_22=null;
		    this.Item_20=null;
		    this.but_tab6=null;
		    this.but_tab4=null;
		    this.but_tab5=null;
		    this.but_tab3=null;
		    this.but_tab2=null;
		    this.but_tab1=null;
		    this.but_Close=null;

			HeroWinUI.__super.call(this);
		}

		CLASS$(HeroWinUI,'ui.HeroWinUI',_super);
		var __proto__=HeroWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HeroWinUI.uiView);

		}

		HeroWinUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"x":80,"width":363,"var":"Hero_bg","skin":"gameres/png/00029_new.png","height":500,"centerY":0},"child":[{"type":"Image","props":{"width":340,"var":"Kuang_bg_1","height":370,"centerY":4,"centerX":0,"alpha":0.85},"child":[{"type":"Image","props":{"var":"Hero_ico","skin":"gameres/png/00376-1.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":70,"x":63,"width":49,"var":"Item_0","height":134}},{"type":"Image","props":{"y":40,"x":75,"width":22,"var":"img_Hair","height":20}},{"type":"Image","props":{"y":-6,"x":9,"width":44,"var":"Item_1","height":121}},{"type":"Image","props":{"y":73,"x":107,"width":49,"var":"Item_16","height":86}},{"type":"Image","props":{"y":31,"x":62,"width":49,"var":"Item_4","height":34}}]},{"type":"Image","props":{"y":304,"x":208,"width":48,"var":"hero_drums","skin":"gameres/ui/item_drum.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_14","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":126,"x":19,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_2","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":67,"x":19,"width":48,"skin":"gameres/ui/item_hat.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_13","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":67,"x":271,"width":48,"skin":"gameres/ui/item_horse.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_15","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":126,"x":271,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_3","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":184,"x":271,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_5","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":243,"x":271,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_7","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":304,"x":271,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_12","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":304,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_11","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":304,"x":82,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_10","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":304,"x":19,"width":48,"skin":"gameres/ui/item_amulet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_9","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":243,"x":19,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_8","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":184,"x":19,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_6","height":49,"centerY":0,"centerX":0}}]},{"type":"Label","props":{"y":55,"x":170,"width":106,"visible":false,"var":"itemScorse","valign":"middle","text":"装备评分：","right":75,"name":"itemScorse","height":14,"fontSize":14,"color":"#eee9e9","align":"right"}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_bg","height":350,"centerY":33,"centerX":-1},"child":[{"type":"Label","props":{"y":10,"x":140,"top":10,"text":"状态","fontSize":20,"color":"#ffffff","centerX":0,"bold":true}},{"type":"Panel","props":{"var":"stateData","top":50,"right":20,"left":20,"bottom":20}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_alb","height":350,"centerY":33,"centerX":-1},"child":[{"type":"Label","props":{"y":-69,"x":140,"top":10,"text":"属性","fontSize":20,"color":"#ffffff","centerX":0,"bold":true}},{"type":"Panel","props":{"var":"AttributeData","top":50,"right":20,"left":20,"bottom":20}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_skill","height":350,"centerY":33,"centerX":-1},"child":[{"type":"List","props":{"y":-12,"x":11,"width":307,"var":"Skill_List","vScrollBarSkin":"gameres/ui/vscroll.png","height":357}}]},{"type":"Image","props":{"y":108,"x":46,"visible":false,"var":"title_bg","skin":"gameres/png/title_bg.png","name":"title_bg"}},{"type":"Image","props":{"width":340,"visible":false,"var":"fashion_bg","name":"fashion_bg","height":370,"centerY":22,"centerX":0},"child":[{"type":"Label","props":{"y":10,"x":150,"top":10,"text":"时装","fontSize":20,"color":"#ffffff","centerX":0,"bold":true}},{"type":"CheckBox","props":{"y":373,"x":122,"width":81,"var":"check_fashion","stateNum":3,"skin":"gameres/ui/00017.png","name":"check_fashion","labelSize":18,"labelColors":"#008000,#ffff00,#ffff00","label":"时装外显","height":20}},{"type":"Image","props":{"width":168,"var":"fashion_hum","skin":"gameres/png/00376-1.png","name":"fashion_hum","height":234,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":72,"x":59,"width":57,"var":"fashion_body","name":"fashion_body","height":128}},{"type":"Image","props":{"y":5,"x":19,"width":44,"var":"fashion_weapon","name":"fashion_weapon","height":142}},{"type":"Image","props":{"y":21,"x":68,"width":44,"var":"Item_21","name":"Item_21","height":44}}]},{"type":"Image","props":{"y":298,"x":69,"width":58,"skin":"gameres/ui/item_belt.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_27","name":"Item_27","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":58,"skin":"gameres/ui/item_shoes.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_28","name":"Item_28","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":221,"width":58,"skin":"gameres/ui/item_stone.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_29","name":"Item_29","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":25,"width":58,"skin":"gameres/ui/item_medal.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_26","name":"Item_26","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":25,"width":58,"skin":"gameres/ui/item_ring.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_25","name":"Item_25","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":257,"width":58,"skin":"gameres/ui/item_ring.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_24","name":"Item_24","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":25,"width":58,"skin":"gameres/ui/item_bracelet.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_23","name":"Item_23","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":257,"width":58,"skin":"gameres/ui/item_bracelet.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_22","name":"Item_22","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":257,"width":58,"skin":"gameres/ui/item_necklace.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_20","name":"Item_20","height":44,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":394,"x":-29,"width":39,"visible":false,"var":"but_tab6","stateNum":3,"skin":"gameres/ui/00041.png","name":"6","height":66}},{"type":"Button","props":{"y":328,"x":-29,"width":39,"var":"but_tab4","stateNum":3,"skin":"gameres/ui/00036.png","name":"4","height":66}},{"type":"Button","props":{"y":130,"x":-29,"width":39,"var":"but_tab5","stateNum":3,"skin":"gameres/ui/00039.png","name":"5","height":66}},{"type":"Button","props":{"y":262,"x":-29,"width":39,"var":"but_tab3","stateNum":3,"skin":"gameres/ui/00037.png","name":"3","height":66}},{"type":"Button","props":{"y":196,"x":-29,"width":39,"var":"but_tab2","stateNum":3,"skin":"gameres/ui/00038.png","name":"2","height":66}},{"type":"Button","props":{"y":64,"x":-29,"width":39,"var":"but_tab1","stateNum":3,"skin":"gameres/ui/00040.png","name":"1","height":66}},{"type":"Button","props":{"y":28,"x":309,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close_new.png"}}]}]};
		return HeroWinUI;
	})(View);
var HumWinUI=(function(_super){
		function HumWinUI(){
			
		    this.Hum_bg=null;
		    this.Kuang_bg_1=null;
		    this.hum_ico=null;
		    this.img_Hair=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_16=null;
		    this.Item_4=null;
		    this.img_head=null;
		    this.Item_head=null;
		    this.img_drums=null;
		    this.Item_14=null;
		    this.Item_12=null;
		    this.Item_9=null;
		    this.Item_6=null;
		    this.Item_5=null;
		    this.Item_10=null;
		    this.Item_11=null;
		    this.Item_8=null;
		    this.Item_7=null;
		    this.Item_3=null;
		    this.Item_2=null;
		    this.Item_15=null;
		    this.Item_13=null;
		    this.Item_30=null;
		    this.Item_40=null;
		    this.guildName=null;
		    this.itemScorse=null;
		    this.state_alb=null;
		    this.AttributeData=null;
		    this.state_bg=null;
		    this.stateData=null;
		    this.state_icon=null;
		    this.HumIcon_List=null;
		    this.IconShow=null;
		    this.state_skill=null;
		    this.Skill_List=null;
		    this.fashion_bg=null;
		    this.check_fashion=null;
		    this.fashion_hum=null;
		    this.fashion_body=null;
		    this.Item_21=null;
		    this.fashion_weapon=null;
		    this.Item_27=null;
		    this.Item_28=null;
		    this.Item_29=null;
		    this.Item_25=null;
		    this.Item_24=null;
		    this.Item_23=null;
		    this.Item_22=null;
		    this.Item_20=null;
		    this.Item_26=null;
		    this.but_tab1=null;
		    this.but_tab2=null;
		    this.but_tab3=null;
		    this.but_tab5=null;
		    this.but_tab4=null;
		    this.but_tab6=null;
		    this.but_Close=null;
		    this.charName=null;

			HumWinUI.__super.call(this);
		}

		CLASS$(HumWinUI,'ui.HumWinUI',_super);
		var __proto__=HumWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HumWinUI.uiView);

		}

		HumWinUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":50,"x":100,"width":363,"var":"Hum_bg","skin":"gameres/png/00029_new.png","height":500},"child":[{"type":"Image","props":{"width":340,"var":"Kuang_bg_1","height":370,"centerY":4,"centerX":0,"alpha":0.85},"child":[{"type":"Image","props":{"var":"hum_ico","skin":"gameres/png/00376-1.png","centerY":18,"centerX":0},"child":[{"type":"Image","props":{"y":41,"x":75,"width":22,"var":"img_Hair","height":20}},{"type":"Image","props":{"y":70,"x":68.5,"width":49,"var":"Item_0","name":"Item_0","height":134}},{"type":"Image","props":{"y":5,"x":18,"width":44,"var":"Item_1","name":"Item_1","height":121}},{"type":"Image","props":{"y":84,"x":112,"width":49,"var":"Item_16","name":"Item_16","height":86}},{"type":"Image","props":{"y":30,"x":62,"width":49,"var":"Item_4","name":"Item_4","height":34}}]},{"type":"Image","props":{"y":38,"x":271,"width":48,"var":"img_head","skin":"gameres/ui/item_helmet.png","name":"img_head","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_head","name":"head","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":208,"width":48,"var":"img_drums","skin":"gameres/ui/item_drum.png","height":48},"child":[{"type":"Image","props":{"y":3,"x":16,"width":49,"var":"Item_14","name":"Item_14","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":271,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_12","name":"Item_12","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":19,"width":48,"skin":"gameres/ui/item_amulet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_9","name":"Item_9","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":194,"x":19,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_6","name":"Item_6","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":194,"x":271,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_5","name":"Item_5","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":82,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_10","name":"Item_10","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_11","name":"Item_11","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":246,"x":19,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_8","name":"Item_8","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":246,"x":271,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_7","name":"Item_7","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":142,"x":271,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_3","name":"Item_3","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":142,"x":19,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_2","name":"Item_2","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":90,"x":271,"width":48,"skin":"gameres/ui/item_horse.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_15","name":"Item_15","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":90,"x":19,"width":48,"skin":"gameres/ui/item_hat.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_13","name":"Item_13","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":349,"x":15,"width":309,"skin":"gameres/png/00029_new_1.png","height":61}},{"type":"Button","props":{"y":356,"var":"Item_30","stateNum":2,"skin":"gameres/ui/item_box1.png","name":"30","left":90}},{"type":"Button","props":{"y":356,"var":"Item_40","stateNum":2,"skin":"gameres/ui/item_box2.png","right":90}},{"type":"Label","props":{"y":30,"var":"guildName","valign":"middle","name":"guildName","fontSize":20,"color":"#eee9e9","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":62,"width":106,"visible":false,"var":"itemScorse","valign":"middle","text":"装备评分：","right":75,"name":"itemScorse","height":14,"fontSize":14,"color":"#eee9e9","align":"right"}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_alb","height":350,"centerY":33,"centerX":-1},"child":[{"type":"Panel","props":{"y":0,"x":17,"width":288,"var":"AttributeData","height":348}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_bg","height":350,"centerY":33,"centerX":-1},"child":[{"type":"Panel","props":{"y":0,"x":17,"width":288,"var":"stateData","height":348}}]},{"type":"Image","props":{"width":287,"visible":false,"var":"state_icon","skin":"gameres/png/title_bg.png","sizeGrid":"208,0,152,0","name":"state_icon","height":360,"centerY":38,"centerX":-1},"child":[{"type":"List","props":{"y":55,"x":-1,"width":159,"var":"HumIcon_List","vScrollBarSkin":"gameres/ui/vscroll.png","name":"HumIcon_List","height":300}},{"type":"Image","props":{"y":5,"x":117,"var":"IconShow","skin":"gameres/ui/icon_k.png","name":"IconShow"}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_skill","height":350,"centerY":33,"centerX":-1},"child":[{"type":"List","props":{"y":-12,"x":11,"width":307,"var":"Skill_List","height":357}}]},{"type":"Image","props":{"width":340,"visible":false,"var":"fashion_bg","name":"fashion_bg","height":370,"centerY":19,"centerX":0},"child":[{"type":"Label","props":{"y":10,"text":"时装","fontSize":20,"color":"#ffffff","centerX":0,"bold":true,"align":"center"}},{"type":"CheckBox","props":{"var":"check_fashion","stateNum":3,"skin":"gameres/ui/00017.png","name":"check_fashion","labelSize":18,"labelColors":"#008000,#ffff00,#ffff00","label":"时装外显","centerX":0,"bottom":-22}},{"type":"Image","props":{"width":168,"var":"fashion_hum","skin":"gameres/png/00376-1.png","name":"fashion_hum","height":234,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":72,"x":59,"width":57,"var":"fashion_body","name":"fashion_body","height":133}},{"type":"Image","props":{"y":21,"x":68,"width":44,"var":"Item_21","name":"Item_21","height":44}},{"type":"Image","props":{"y":5,"x":19,"width":44,"var":"fashion_weapon","name":"fashion_weapon","height":142}}]},{"type":"Image","props":{"y":298,"x":69,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_27","name":"Item_27","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_28","name":"Item_28","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":221,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_29","name":"Item_29","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":25,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_25","name":"Item_25","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":263,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_24","name":"Item_24","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":25,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_23","name":"Item_23","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":263,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_22","name":"Item_22","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":263,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_20","name":"Item_20","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":25,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_26","name":"Item_26","height":44,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":64,"x":-29,"width":39,"var":"but_tab1","stateNum":3,"skin":"gameres/ui/00040.png","name":"1","height":66}},{"type":"Button","props":{"y":196,"x":-29,"width":39,"var":"but_tab2","stateNum":3,"skin":"gameres/ui/00038.png","name":"2","height":66}},{"type":"Button","props":{"y":262,"x":-29,"width":39,"var":"but_tab3","stateNum":3,"skin":"gameres/ui/00037.png","name":"3","height":66}},{"type":"Button","props":{"y":130,"x":-29,"width":39,"var":"but_tab5","stateNum":3,"skin":"gameres/ui/00039.png","name":"5","height":66}},{"type":"Button","props":{"y":394,"x":-29,"width":39,"var":"but_tab4","stateNum":3,"skin":"gameres/ui/00036.png","name":"4","height":66}},{"type":"Button","props":{"y":328,"x":-29,"width":39,"var":"but_tab6","stateNum":3,"skin":"gameres/ui/00041.png","name":"6","height":66}},{"type":"Button","props":{"y":27,"x":308,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close_new.png"}},{"type":"Label","props":{"var":"charName","top":28,"name":"charName","fontSize":22,"color":"#eee9e9","centerX":0,"bold":true}}]}]};
		return HumWinUI;
	})(View);
var JiaoYiWinUI=(function(_super){
		function JiaoYiWinUI(){
			
		    this.JiaoYi_bg=null;
		    this.but_Close=null;
		    this.but_QueR=null;
		    this.but_ok=null;
		    this.Hum_List=null;
		    this.txt_HumName=null;
		    this.Me_List=null;
		    this.txt_Me_Name=null;
		    this.InPut_Hum_Gold=null;
		    this.InPut_Me_Gold=null;

			JiaoYiWinUI.__super.call(this);
		}

		CLASS$(JiaoYiWinUI,'ui.JiaoYiWinUI',_super);
		var __proto__=JiaoYiWinUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(JiaoYiWinUI.uiView);

		}

		JiaoYiWinUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":35,"x":290,"var":"JiaoYi_bg","skin":"gameres/png/jiaoyibg.png"},"child":[{"type":"Button","props":{"y":-4,"x":220,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":389,"x":55,"width":70,"var":"but_QueR","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","label":"确认","height":25}},{"type":"Button","props":{"y":389,"x":165,"width":70,"var":"but_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","label":"交易","height":25}},{"type":"Text","props":{"y":25,"x":127,"text":"交易","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ddaf52","bold":true,"align":"center"}},{"type":"List","props":{"y":86,"x":21,"width":251,"var":"Hum_List","height":100}},{"type":"Text","props":{"y":59,"x":26,"var":"txt_HumName","text":"交易","fontSize":20,"color":"#E8B656","bold":false}},{"type":"List","props":{"y":248,"x":21,"width":251,"var":"Me_List","height":100}},{"type":"Text","props":{"y":221,"x":26,"var":"txt_Me_Name","text":"交易","fontSize":20,"color":"#E8B656","bold":false}},{"type":"Image","props":{"y":353,"x":126,"skin":"gameres/ui/jiaoyi_icon.png"}},{"type":"Image","props":{"y":352,"x":158,"width":110,"skin":"gameres/ui/jiaoyi_input.png","height":20}},{"type":"Image","props":{"y":192,"x":127,"skin":"gameres/ui/jiaoyi_icon.png"}},{"type":"Image","props":{"y":189,"x":159,"width":110,"skin":"gameres/ui/jiaoyi_input.png","height":20}},{"type":"TextInput","props":{"y":189,"x":159,"width":111,"var":"InPut_Hum_Gold","type":"number","height":20,"editable":false,"color":"#ffffff"}},{"type":"TextInput","props":{"y":352,"x":158,"width":111,"var":"InPut_Me_Gold","type":"text","restrict":"0-9","height":20,"color":"#ffffff"}}]}]};
		return JiaoYiWinUI;
	})(View);
var LoginSceneUI=(function(_super){
		function LoginSceneUI(){
			
		    this.img_select=null;
		    this.cache=null;
		    this.notic_show=null;
		    this.notic_show1=null;
		    this.last_select=null;
		    this.change_select=null;
		    this.last_name=null;
		    this.start_select=null;
		    this.img_server=null;
		    this.section_list=null;
		    this.server_hint=null;
		    this.img_account_list=null;
		    this.account_list=null;
		    this.arer_btn=null;
		    this.server_state_img=null;
		    this.arer_near1=null;
		    this.near1_state=null;
		    this.arer_near2=null;
		    this.near2_state=null;
		    this.btn_closeaccount_list=null;
		    this.list_select=null;
		    this.serve_list=null;
		    this.btn_server_quit=null;
		    this.select_hint=null;
		    this.imageLogin=null;
		    this.panel_login=null;
		    this.tex_name=null;
		    this.tex_psw=null;
		    this.btn_zc=null;
		    this.btn_xg=null;
		    this.btn_login=null;
		    this.btn_zc1=null;
		    this.label_qq=null;
		    this.label_wx=null;
		    this.btn_backserver=null;
		    this.btn_qq=null;
		    this.txt_userAgreement=null;
		    this.txt_privatePolicy=null;
		    this.checkBox_agreeMent=null;
		    this.btn_wx=null;
		    this.routeSel=null;
		    this.label_qqwx=null;
		    this.btn_forgetPsw=null;
		    this.img_userAgreement_bg=null;
		    this.panel_userAgreement=null;
		    this.no_agreement=null;
		    this.img_privatePolicy_bg=null;
		    this.panel_privatePolicy=null;
		    this.no_policy=null;
		    this.img_account=null;
		    this.btn_know=null;
		    this.account_name=null;
		    this.account_psw=null;
		    this.img_register=null;
		    this.btn_register=null;
		    this.register_name=null;
		    this.register_psw=null;
		    this.btn_registerimg=null;
		    this.reg_bg=null;
		    this.username=null;
		    this.password=null;
		    this.confirmpassword=null;
		    this.btn_reg=null;
		    this.btn_reback=null;
		    this.reg_birthday=null;
		    this.reg_que1=null;
		    this.reg_ans1=null;
		    this.reg_que2=null;
		    this.reg_ans2=null;
		    this.txt_tip=null;
		    this.img_findPas=null;
		    this.btn_findPas=null;
		    this.real_ui=null;
		    this.bg1=null;
		    this.find_name=null;
		    this.find_birthday=null;
		    this.find_q1=null;
		    this.find_a1=null;
		    this.find_q2=null;
		    this.find_a2=null;
		    this.btn_FindPwd=null;
		    this.btn_reback1=null;
		    this.bg2=null;
		    this.set_name=null;
		    this.set_birthday=null;
		    this.set_q1=null;
		    this.set_a1=null;
		    this.set_q2=null;
		    this.set_a2=null;
		    this.btn_update=null;
		    this.btn_reback2=null;
		    this.notice1_bg=null;
		    this.know_notice1_btn=null;
		    this.notice1_panel=null;
		    this.notice_bg=null;
		    this.notice_ok=null;
		    this.notice_panel=null;
		    this.notice_title_lab=null;
		    this.notice_directory_list=null;
		    this.notice_title_box=null;
		    this.notice_box=null;
		    this.new_notice_icon=null;
		    this.notice_show1_copy=null;
		    this.img_qishiyou_list=null;
		    this.qishiyou_account_list=null;
		    this.qishiyou_arer_btn=null;
		    this.qishiyou_arer_near1=null;
		    this.qishiyou_arer_near2=null;
		    this.btn_closeaccount_qishiyou=null;

			LoginSceneUI.__super.call(this);
		}

		CLASS$(LoginSceneUI,'ui.LoginSceneUI',_super);
		var __proto__=LoginSceneUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.RealVerificationUI",ui.RealVerificationUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoginSceneUI.uiView);

		}

		LoginSceneUI.uiView={"type":"View","props":{"width":1136,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":1136,"skin":"gameres/png/login_bg.png","height":600,"centerY":0,"centerX":0}},{"type":"Panel","props":{"y":-1,"x":2,"width":1136,"visible":false,"var":"img_select","name":"img_select","mouseThrough":true,"mouseEnabled":true,"height":600},"child":[{"type":"Button","props":{"y":98,"x":1021,"width":103,"visible":false,"var":"cache","stateNum":2,"skin":"gameres/ui/cache.png","name":"cache","height":92}},{"type":"Button","props":{"y":2,"x":1021,"width":103,"visible":true,"var":"notic_show","stateNum":2,"skin":"gameres/ui/notic_btn.png","name":"notic_show","height":92}},{"type":"Button","props":{"y":386,"x":1040,"width":70,"visible":true,"var":"notic_show1","stateNum":1,"skin":"gameres/png/16+.png","name":"notic_show1","height":90}},{"type":"Panel","props":{"y":232,"x":235,"width":666,"visible":false,"var":"last_select","name":"last_select","mouseThrough":true,"height":283},"child":[{"type":"Image","props":{"y":74,"x":124,"width":418,"var":"change_select","skin":"gameres/ui/select_band.png","name":"change_select","height":46},"child":[{"type":"Button","props":{"y":8,"x":249,"stateNum":2,"skin":"gameres/ui/change_select.png"}},{"type":"Text","props":{"y":6,"x":36,"width":113,"var":"last_name","valign":"middle","text":"战纪688区","name":"last_name","height":30,"fontSize":22,"color":"#32ff00","align":"center"}},{"type":"Image","props":{"y":9,"x":8,"skin":"gameres/ui/green.png"}}]},{"type":"Button","props":{"y":129,"x":212,"var":"start_select","stateNum":2,"skin":"gameres/ui/strat_last.png","name":"start_select"}}]}]},{"type":"Image","props":{"y":41,"x":621,"width":333,"visible":false,"var":"img_server","height":479},"child":[{"type":"List","props":{"y":30,"x":48,"width":312,"var":"section_list","name":"section_list","height":479}},{"type":"Image","props":{"y":24,"x":98,"width":131,"visible":false,"skin":"gameres/ui/servertitle.png","height":30}},{"type":"Image","props":{"y":477,"x":-67,"visible":false,"var":"server_hint","skin":"gameres/ui/server_hint.png","name":"server_hint"}}]},{"type":"Image","props":{"y":31,"x":155,"width":816,"var":"img_account_list","skin":"gameres/png/select_area_2.png","name":"img_account_list","mouseThrough":true,"height":531},"child":[{"type":"List","props":{"y":77,"x":269,"width":495,"var":"account_list","spaceY":10,"spaceX":18,"repeatX":2,"name":"account_list","height":307},"child":[{"type":"Box","props":{"y":5,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"arer_btn","stateNum":2,"skin":"gameres/ui/area_button.png","name":"arer_btn","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}},{"type":"Image","props":{"y":18,"x":15,"visible":false,"var":"server_state_img","name":"server_state_img"}}]}]},{"type":"HBox","props":{"y":422,"x":274,"width":496,"space":20,"height":52},"child":[{"type":"Box","props":{"y":1,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"arer_near1","stateNum":2,"skin":"gameres/ui/area_button.png","name":"arer_near1","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}},{"type":"Image","props":{"y":17,"x":15,"visible":false,"var":"near1_state","name":"near1_state"}}]},{"type":"Box","props":{"y":1,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"arer_near2","stateNum":2,"skin":"gameres/ui/area_button.png","selected":false,"name":"arer_near2","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}},{"type":"Image","props":{"y":17,"x":15,"visible":false,"var":"near2_state","name":"near2_state"}}]}]},{"type":"Button","props":{"y":428,"x":730,"width":199,"visible":false,"stateNum":2,"skin":"gameres/ui/area_button.png","labelStroke":2,"labelSize":22,"labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":45}},{"type":"Button","props":{"y":428,"x":949,"width":199,"visible":false,"stateNum":2,"skin":"gameres/ui/area_button.png","labelStroke":2,"labelSize":22,"labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":45}},{"type":"Button","props":{"y":-10,"x":743,"var":"btn_closeaccount_list","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closeaccount_list","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}}]},{"type":"Image","props":{"y":51,"x":139,"width":333,"visible":false,"var":"list_select","name":"list_select","height":479},"child":[{"type":"Text","props":{"y":11,"x":124,"strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#ffffff","align":"center"}},{"type":"List","props":{"y":68,"x":55,"width":209,"var":"serve_list","vScrollBarSkin":"gameres/ui/vscroll.png","spaceY":10,"selectedIndex":0,"repeatX":1,"name":"serve_list","height":295},"child":[{"type":"Button","props":{"x":4,"width":200,"visible":false,"stateNum":2,"skin":"gameres/ui/area_button.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":24,"labelPadding":"6,0,6,0","labelColors":"#D7B581,#D7B581","label":"蜜雪冰城","height":52}}]},{"type":"Button","props":{"y":15,"x":268,"width":46,"visible":false,"var":"btn_server_quit","stateNum":2,"skin":"gameres/ui/but_close.png","name":"btn_server_quit","height":46}},{"type":"Image","props":{"y":24,"x":98,"width":131,"visible":false,"skin":"gameres/ui/servertitle.png","height":30}},{"type":"Image","props":{"y":477,"x":-65,"visible":false,"var":"select_hint","skin":"gameres/ui/server_hint.png","name":"select_hint"}}]},{"type":"Image","props":{"width":491,"var":"imageLogin","skin":"gameres/png/imageLogin.png","name":"imageLogin","mouseThrough":true,"height":353,"centerY":0,"centerX":0},"child":[{"type":"Panel","props":{"y":108,"x":58,"width":389,"var":"panel_login","name":"panel_login","height":212},"child":[{"type":"Image","props":{"y":9,"x":0,"width":40,"skin":"gameres/ui/id.png","height":34}},{"type":"Image","props":{"y":59,"x":3,"width":34,"skin":"gameres/ui/password.png","height":42}},{"type":"TextInput","props":{"y":7,"x":46,"width":217,"var":"tex_name","valign":"middle","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","restrict":"0-9a-zA-Z","padding":"0,0,0,10","name":"tex_name","height":33,"fontSize":20,"color":"#ffffff"}},{"type":"TextInput","props":{"y":61,"x":46,"width":217,"var":"tex_psw","valign":"middle","type":"password","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","restrict":"0-9a-zA-Z`~!@#$%^&*()_+-=;'.|?<>/[]{}\"","padding":"0,0,0,10","name":"tex_psw","maxChars":10,"height":33,"fontSize":20,"color":"#ffffff"}},{"type":"Button","props":{"y":0,"x":266,"width":103,"var":"btn_zc","stateNum":2,"skin":"gameres/ui/regist_new_use.png","height":44}},{"type":"Button","props":{"y":57,"x":266,"width":103,"var":"btn_xg","stateNum":2,"skin":"gameres/ui/change_pwd.png","height":44}},{"type":"Button","props":{"y":118,"x":9,"width":132,"var":"btn_login","stateNum":2,"skin":"gameres/ui/00777.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff","height":50}},{"type":"Button","props":{"y":118,"x":200,"width":132,"var":"btn_zc1","stateNum":2,"skin":"gameres/ui/00778.png","name":"btn_zc1","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff","height":50}}]},{"type":"Label","props":{"y":295,"x":158,"width":80,"var":"label_qq","text":"QQ登录","name":"QQ登录","height":22,"fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Label","props":{"y":295,"x":279,"width":80,"var":"label_wx","text":"微信登录","name":"微信登录","height":22,"fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Button","props":{"y":-2,"x":409,"var":"btn_backserver","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_backserver","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}},{"type":"Button","props":{"y":288,"x":127,"width":33,"var":"btn_qq","stateNum":1,"skin":"gameres/ui/qq.png","name":"btn_qq","height":33}},{"type":"Image","props":{"y":358,"x":13,"width":454,"skin":"gameres/ui/redpak_item.png","height":29},"child":[{"type":"Box","props":{},"child":[{"type":"Text","props":{"y":5,"x":323,"width":18,"text":"和","height":18,"fontSize":18,"color":"#f9f9f9"}},{"type":"Text","props":{"y":5,"x":85,"width":163,"text":"我已详细阅读并同意","height":18,"fontSize":18,"color":"#f9f9f9"}},{"type":"Text","props":{"y":5,"x":250,"var":"txt_userAgreement","text":"用户协议","name":"txt_userAgreement","fontSize":18,"color":"#ff0e0a"}},{"type":"Text","props":{"y":5,"x":345,"var":"txt_privatePolicy","text":"隐私政策","name":"txt_privatePolicy","fontSize":18,"color":"#ff0e0a"}},{"type":"CheckBox","props":{"y":-1,"x":52,"var":"checkBox_agreeMent","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","scaleY":0.8,"scaleX":0.8,"name":"checkBox_agreeMent"}}]}]},{"type":"Button","props":{"y":288,"x":243,"width":33,"var":"btn_wx","stateNum":1,"skin":"gameres/ui/wx.png","name":"btn_wx","height":33}},{"type":"RadioGroup","props":{"y":369,"x":202,"var":"routeSel","space":50,"skin":"gameres/ui/serversite.png","name":"routeSel","labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff","direction":"horizontal"}},{"type":"Image","props":{"y":20,"x":204,"width":83,"skin":"gameres/ui/logintitle.png","height":35}},{"type":"Label","props":{"y":265,"x":125,"visible":false,"var":"label_qqwx","text":"——  使用其他账号登录  ——","strokeColor":"#150e09","stroke":2,"name":"label_qqwx","fontSize":16,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Button","props":{"y":301,"x":359,"var":"btn_forgetPsw","stateNum":2,"skin":"gameres/ui/forgetPsw.png","name":"btn_forgetPsw"}},{"type":"Image","props":{"y":-51,"x":-51,"var":"img_userAgreement_bg","skin":"gameres/png/userAgreement_bg.png","name":"img_userAgreement_bg"},"child":[{"type":"Panel","props":{"y":40,"x":30,"width":534,"var":"panel_userAgreement","name":"panel_userAgreement","height":391}},{"type":"Button","props":{"y":-21,"x":531,"var":"no_agreement","stateNum":2,"skin":"gameres/ui/but_close.png","name":"no_agreement"}}]},{"type":"Image","props":{"y":-51,"x":-51,"var":"img_privatePolicy_bg","skin":"gameres/png/privatePolicy_bg.png","name":"img_privatePolicy_bg"},"child":[{"type":"Panel","props":{"y":40,"x":30,"width":534,"var":"panel_privatePolicy","name":"panel_privatePolicy","height":390}},{"type":"Button","props":{"y":-21,"x":530,"var":"no_policy","stateNum":2,"skin":"gameres/ui/but_close.png","name":"no_policy"}}]}]},{"type":"Image","props":{"width":490,"var":"img_account","skin":"gameres/png/00790.png","name":"img_account","height":195,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":140,"x":197,"width":110,"var":"btn_know","stateNum":2,"skin":"gameres/ui/00777.png","name":"btn_know","height":42}},{"type":"Label","props":{"y":25,"x":53,"width":388,"text":"系统已自动为您生成账号密码，请截图保存","strokeColor":"#150e09","stroke":2,"height":22,"fontSize":20,"color":"#bcb080","bold":false}},{"type":"Label","props":{"y":69,"x":117,"width":60,"text":"账号：","strokeColor":"#150e09","stroke":2,"height":23,"fontSize":20,"color":"#93fe4c"}},{"type":"Label","props":{"y":103,"x":117,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"height":23,"fontSize":20,"color":"#93fe4c"}},{"type":"Text","props":{"y":69,"x":190,"width":152,"var":"account_name","text":"账号","strokeColor":"#150e09","stroke":2,"name":"account_name","height":27,"fontSize":20,"font":"Microsoft YaHei","color":"#93fe4c"}},{"type":"Text","props":{"y":103,"x":190,"width":162,"var":"account_psw","text":"密码","strokeColor":"#150e09","stroke":2,"name":"account_psw","height":28,"fontSize":20,"font":"Microsoft YaHei","color":"#93fe4c"}}]},{"type":"Image","props":{"width":542,"var":"img_register","skin":"gameres/png/00790.png","name":"img_register","height":215,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":148,"width":110,"var":"btn_register","stateNum":2,"skin":"gameres/ui/00777.png","name":"btn_register","height":42,"centerX":0}},{"type":"Label","props":{"y":25,"width":479,"text":"系统已自动为您生成账号密码，请截图保存","strokeColor":"#150e09","stroke":2,"fontSize":25,"color":"#bcb080","centerX":0,"bold":false}},{"type":"Label","props":{"y":74,"x":159,"width":60,"text":"账号：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Label","props":{"y":111,"x":159,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":74,"x":232,"width":152,"var":"register_name","text":"账号","strokeColor":"#150e09","stroke":2,"name":"register_name","fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":111,"x":232,"width":162,"var":"register_psw","text":"密码","strokeColor":"#150e09","stroke":2,"name":"register_psw","fontSize":22,"color":"#93fe4c"}},{"type":"Image","props":{"y":188,"x":217,"width":110,"var":"btn_registerimg","skin":"gameres/ui/00768.png","skewX":-180,"name":"btn_registerimg","height":42}}]},{"type":"Image","props":{"y":44,"x":228,"visible":false,"var":"reg_bg","skin":"gameres/png/img_regbg.png","name":"reg_bg","mouseThrough":false,"centerY":0,"centerX":0},"child":[{"type":"TextInput","props":{"y":74,"x":174,"width":200,"var":"username","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入用户名....","name":"username","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":119,"x":174,"width":200,"var":"password","type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入密码...","name":"password","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":161,"x":174,"width":200,"var":"confirmpassword","type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请再次输入密码...","name":"confirmpassword","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"Button","props":{"y":426,"x":118,"width":101,"var":"btn_reg","stateNum":2,"skin":"gameres/ui/btn_reg_submit.png","sizeGrid":"4,4,4,4","name":"btn_reg","labelStrokeColor":"#000000","labelStroke":2,"height":44}},{"type":"Button","props":{"y":426,"x":257,"width":101,"var":"btn_reback","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","sizeGrid":"4,4,4,4","name":"btn_reback","labelStrokeColor":"#000000","labelStroke":2,"height":44}},{"type":"TextArea","props":{"y":79,"x":400,"width":224,"type":"text","text":"您的帐号名称可以包括：字符、数字的组合。帐号名称长度必须为4或以上。请仔细输入创建帐号所需的信息。您的帐号可以登录游戏及我们的网站，以取得一些相关信息。建议您的登录帐号不要和游戏中的角色名相同，以确保您的密码不会被暴力破解。","strokeColor":"#000000","stroke":2,"leading":5,"height":328,"fontSize":18,"editable":false,"color":"#ffffff","bgColor":"#090a05"}},{"type":"TextInput","props":{"y":206,"x":174,"width":200,"var":"reg_birthday","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","name":"reg_birthday","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":248,"x":174,"width":200,"var":"reg_que1","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入问题一","name":"reg_que1","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":293,"x":174,"width":200,"var":"reg_ans1","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入答案一","name":"reg_ans1","maxChars":12,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":336,"x":174,"width":200,"var":"reg_que2","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入问题二","name":"reg_que2","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":381,"x":174,"width":200,"var":"reg_ans2","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入答案二","name":"reg_ans2","maxChars":12,"height":30,"fontSize":18,"color":"#fbf8f8"}}]},{"type":"Label","props":{"visible":false,"var":"txt_tip","text":"连接服务器中,请稍等...","strokeColor":"#000000","stroke":3,"fontSize":30,"color":"#ddaf52","centerY":0,"centerX":0}},{"type":"Image","props":{"y":10,"x":10,"width":542,"visible":false,"var":"img_findPas","skin":"gameres/png/00790.png","name":"img_findPas","height":215,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":148,"var":"btn_findPas","stateNum":2,"skin":"gameres/ui/00758.png","name":"btn_findPas","centerX":0}},{"type":"Label","props":{"y":25,"width":479,"text":"密码已找回，请截图保存","strokeColor":"#150e09","stroke":2,"fontSize":25,"color":"#bcb080","centerX":0,"bold":false}},{"type":"Label","props":{"y":90,"x":157,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":90,"x":230,"width":162,"text":"密码","strokeColor":"#150e09","stroke":2,"name":"pas_findPas","fontSize":22,"color":"#93fe4c"}}]},{"type":"RealVerification","props":{"y":104,"x":274,"visible":false,"var":"real_ui","mouseThrough":true,"runtime":"ui.RealVerificationUI"}},{"type":"Image","props":{"y":103,"x":305,"visible":false,"var":"bg1","skin":"gameres/png/imageLogin.png","name":"bg1"},"child":[{"type":"Label","props":{"y":92,"x":101,"text":"游戏账号","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":130,"x":101,"text":"你的生日","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":168,"x":125,"text":"问题一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":207,"x":125,"text":"答案一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":245,"x":125,"text":"问题二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":283,"x":125,"text":"答案二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"TextInput","props":{"y":92,"x":246,"width":190,"var":"find_name","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"游戏账号","overflow":"hidden","name":"find_name","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":129,"x":246,"width":190,"var":"find_birthday","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","overflow":"hidden","name":"find_birthday","maxChars":10,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":166,"x":246,"width":190,"var":"find_q1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_q1","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":204,"x":246,"width":190,"var":"find_a1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_a1","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":241,"x":246,"width":190,"var":"find_q2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_q2","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":278,"x":246,"width":190,"var":"find_a2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_a2","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":320,"x":145,"width":101,"var":"btn_FindPwd","stateNum":2,"skin":"gameres/ui/00698.png","name":"btn_FindPwd","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Button","props":{"y":320,"x":308,"width":101,"var":"btn_reback1","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","name":"btn_reback1","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}}]},{"type":"Image","props":{"y":103,"x":295,"visible":false,"var":"bg2","skin":"gameres/png/imageLogin.png","name":"bg2"},"child":[{"type":"Label","props":{"y":92,"x":101,"text":"游戏账号","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":130,"x":101,"text":"你的生日","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":168,"x":125,"text":"问题一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":207,"x":125,"text":"答案一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":245,"x":125,"text":"问题二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":283,"x":125,"text":"答案二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"TextInput","props":{"y":92,"x":246,"width":190,"var":"set_name","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"游戏账号","overflow":"hidden","name":"set_name","maxChars":20,"height":32,"fontSize":18,"editable":false,"color":"#ffffff"}},{"type":"TextInput","props":{"y":129,"x":246,"width":190,"var":"set_birthday","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","overflow":"hidden","name":"set_birthday","maxChars":10,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":166,"x":246,"width":190,"var":"set_q1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_q1","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":204,"x":246,"width":190,"var":"set_a1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_a1","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":241,"x":246,"width":190,"var":"set_q2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_q2","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":278,"x":246,"width":190,"var":"set_a2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_a2","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":320,"x":145,"width":101,"var":"btn_update","stateNum":2,"skin":"gameres/ui/00698.png","name":"btn_update","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Button","props":{"y":320,"x":308,"width":101,"var":"btn_reback2","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","name":"btn_reback2","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Image","props":{"y":23,"x":205,"skin":"gameres/ui/update_account.png"}}]},{"type":"Image","props":{"var":"notice1_bg","skin":"gameres/png/notice_bg.png","name":"notice1_bg","centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":381,"x":227,"var":"know_notice1_btn","stateNum":2,"skin":"gameres/ui/notice_ok.png","name":"know_notice1_btn"}},{"type":"Panel","props":{"y":44,"x":14,"width":568,"var":"notice1_panel","name":"notice1_panel","height":334}}]},{"type":"Image","props":{"y":0,"x":0,"width":1136,"visible":false,"var":"notice_bg","skin":"gameres/png/login_bg.png","name":"notice_bg","height":600},"child":[{"type":"Image","props":{"width":680,"skin":"gameres/png/notice_list_bg.png","height":442,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":345,"x":373,"width":125,"var":"notice_ok","stateNum":2,"skin":"gameres/ui/notice_know.png","name":"notice_ok","height":51}},{"type":"List","props":{"y":77,"x":231,"width":410,"var":"notice_panel","repeatX":1,"name":"notice_panel","height":261},"child":[{"type":"Label","props":{"text":"内容","renderType":"render","fontSize":18,"color":"#ffffff"}}]},{"type":"Label","props":{"y":49,"x":394,"var":"notice_title_lab","text":"更新提示","name":"notice_title_lab","fontSize":22,"color":"#ff6000"}},{"type":"List","props":{"y":35,"x":37,"width":170,"var":"notice_directory_list","repeatY":7,"repeatX":1,"name":"notice_directory_list","height":374},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"notice_title_box","renderType":"render","name":"notice_title_box"},"child":[{"type":"Button","props":{"y":0,"x":0,"width":171,"var":"notice_box","strokeColors":"#000000,#000000,#000000,#000000","stateNum":2,"skin":"gameres/ui/notice_selected.png","name":"notice_box","labelStroke":3,"labelSize":21,"labelColors":"#746a6a,#f6d9b9","label":"更新提示","height":53}},{"type":"Image","props":{"y":4,"x":5,"width":27,"var":"new_notice_icon","skin":"gameres/ui/new_notice_icon.png","name":"new_notice_icon","height":39}}]}]}]}]},{"type":"Button","props":{"y":385,"x":1042,"width":70,"var":"notice_show1_copy","stateNum":1,"skin":"gameres/png/16+.png","name":"notice_show1_copy","height":90}},{"type":"Image","props":{"y":32,"x":154,"width":816,"visible":false,"var":"img_qishiyou_list","skin":"gameres/png/select_area.png","name":"img_qishiyou_list","mouseThrough":true,"height":531},"child":[{"type":"List","props":{"y":77,"x":53,"width":711,"var":"qishiyou_account_list","spaceY":10,"spaceX":0,"repeatX":3,"name":"qishiyou_account_list","height":307},"child":[{"type":"Box","props":{"y":5,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_btn","stateNum":2,"skin":"gameres/ui/area_button.png","name":"qishiyou_arer_btn","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]}]},{"type":"HBox","props":{"y":422,"x":274,"width":496,"space":20,"height":52},"child":[{"type":"Box","props":{"y":1,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_near1","stateNum":2,"skin":"gameres/ui/area_button.png","name":"qishiyou_arer_near1","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]},{"type":"Box","props":{"y":1,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_near2","stateNum":2,"skin":"gameres/ui/area_button.png","selected":false,"name":"qishiyou_arer_near2","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]}]},{"type":"Button","props":{"y":-10,"x":744,"var":"btn_closeaccount_qishiyou","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closeaccount_qishiyou","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}}]}]};
		return LoginSceneUI;
	})(View);
var LoginScene1212UI=(function(_super){
		function LoginScene1212UI(){
			
		    this.img_select=null;
		    this.cache=null;
		    this.notic_show=null;
		    this.notic_show1=null;
		    this.last_select=null;
		    this.change_select=null;
		    this.last_name=null;
		    this.start_select=null;
		    this.img_server=null;
		    this.section_list=null;
		    this.server_hint=null;
		    this.img_account_list=null;
		    this.account_list=null;
		    this.arer_btn=null;
		    this.server_state_img=null;
		    this.arer_near1=null;
		    this.near1_state=null;
		    this.arer_near2=null;
		    this.near2_state=null;
		    this.btn_closeaccount_list=null;
		    this.list_select=null;
		    this.serve_list=null;
		    this.btn_server_quit=null;
		    this.select_hint=null;
		    this.imageLogin=null;
		    this.panel_login=null;
		    this.tex_name=null;
		    this.tex_psw=null;
		    this.btn_zc=null;
		    this.btn_xg=null;
		    this.btn_login=null;
		    this.btn_zc1=null;
		    this.label_qq=null;
		    this.label_wx=null;
		    this.btn_backserver=null;
		    this.btn_qq=null;
		    this.txt_userAgreement=null;
		    this.txt_privatePolicy=null;
		    this.checkBox_agreeMent=null;
		    this.btn_wx=null;
		    this.routeSel=null;
		    this.label_qqwx=null;
		    this.btn_forgetPsw=null;
		    this.img_userAgreement_bg=null;
		    this.panel_userAgreement=null;
		    this.yes_agreement=null;
		    this.no_agreement=null;
		    this.img_privatePolicy_bg=null;
		    this.panel_privatePolicy=null;
		    this.yes_policy=null;
		    this.no_policy=null;
		    this.img_account=null;
		    this.btn_know=null;
		    this.account_name=null;
		    this.account_psw=null;
		    this.img_register=null;
		    this.btn_register=null;
		    this.register_name=null;
		    this.register_psw=null;
		    this.btn_registerimg=null;
		    this.reg_bg=null;
		    this.username=null;
		    this.password=null;
		    this.confirmpassword=null;
		    this.btn_reg=null;
		    this.btn_reback=null;
		    this.reg_birthday=null;
		    this.reg_que1=null;
		    this.reg_ans1=null;
		    this.reg_que2=null;
		    this.reg_ans2=null;
		    this.txt_tip=null;
		    this.img_findPas=null;
		    this.btn_findPas=null;
		    this.real_ui=null;
		    this.bg1=null;
		    this.find_name=null;
		    this.find_birthday=null;
		    this.find_q1=null;
		    this.find_a1=null;
		    this.find_q2=null;
		    this.find_a2=null;
		    this.btn_FindPwd=null;
		    this.btn_reback1=null;
		    this.bg2=null;
		    this.set_name=null;
		    this.set_birthday=null;
		    this.set_q1=null;
		    this.set_a1=null;
		    this.set_q2=null;
		    this.set_a2=null;
		    this.btn_update=null;
		    this.btn_reback2=null;
		    this.notice_bg=null;
		    this.notice_ok=null;
		    this.notice_panel=null;
		    this.notice_show1_copy=null;
		    this.img_qishiyou_list=null;
		    this.qishiyou_account_list=null;
		    this.qishiyou_arer_btn=null;
		    this.qishiyou_arer_near1=null;
		    this.qishiyou_arer_near2=null;
		    this.btn_closeaccount_qishiyou=null;

			LoginScene1212UI.__super.call(this);
		}

		CLASS$(LoginScene1212UI,'ui.LoginScene1212UI',_super);
		var __proto__=LoginScene1212UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.RealVerificationUI",ui.RealVerificationUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoginScene1212UI.uiView);

		}

		LoginScene1212UI.uiView={"type":"View","props":{"width":1136,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":1136,"skin":"gameres/png/login_bg.png","height":600,"centerY":0,"centerX":0}},{"type":"Panel","props":{"y":-1,"x":2,"width":1136,"visible":false,"var":"img_select","name":"img_select","mouseThrough":true,"mouseEnabled":true,"height":600},"child":[{"type":"Button","props":{"y":98,"x":1021,"width":103,"visible":false,"var":"cache","stateNum":2,"skin":"gameres/ui/cache.png","name":"cache","height":92}},{"type":"Button","props":{"y":2,"x":1021,"width":103,"visible":true,"var":"notic_show","stateNum":2,"skin":"gameres/ui/notic_btn.png","name":"notic_show","height":92}},{"type":"Button","props":{"y":386,"x":1040,"width":70,"visible":true,"var":"notic_show1","stateNum":1,"skin":"gameres/png/16+.png","name":"notic_show1","height":90}},{"type":"Panel","props":{"y":232,"x":235,"width":666,"visible":false,"var":"last_select","name":"last_select","mouseThrough":true,"height":283},"child":[{"type":"Image","props":{"y":74,"x":124,"width":418,"var":"change_select","skin":"gameres/ui/select_band.png","name":"change_select","height":46},"child":[{"type":"Button","props":{"y":8,"x":249,"stateNum":2,"skin":"gameres/ui/change_select.png"}},{"type":"Text","props":{"y":6,"x":36,"width":113,"var":"last_name","valign":"middle","text":"战纪688区","name":"last_name","height":30,"fontSize":22,"color":"#32ff00","align":"center"}},{"type":"Image","props":{"y":9,"x":8,"skin":"gameres/ui/green.png"}}]},{"type":"Button","props":{"y":129,"x":212,"var":"start_select","stateNum":2,"skin":"gameres/ui/strat_last.png","name":"start_select"}}]}]},{"type":"Image","props":{"y":41,"x":621,"width":333,"visible":false,"var":"img_server","height":479},"child":[{"type":"List","props":{"y":30,"x":48,"width":312,"var":"section_list","name":"section_list","height":479}},{"type":"Image","props":{"y":24,"x":98,"width":131,"visible":false,"skin":"gameres/ui/servertitle.png","height":30}},{"type":"Image","props":{"y":477,"x":-67,"visible":false,"var":"server_hint","skin":"gameres/ui/server_hint.png","name":"server_hint"}}]},{"type":"Image","props":{"y":31,"x":155,"width":816,"var":"img_account_list","skin":"gameres/png/select_area_2.png","name":"img_account_list","mouseThrough":true,"height":531},"child":[{"type":"List","props":{"y":77,"x":269,"width":495,"var":"account_list","spaceY":10,"spaceX":18,"repeatX":2,"name":"account_list","height":307},"child":[{"type":"Box","props":{"y":5,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"arer_btn","stateNum":2,"skin":"gameres/ui/area_button.png","name":"arer_btn","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}},{"type":"Image","props":{"y":18,"x":15,"visible":false,"var":"server_state_img","name":"server_state_img"}}]}]},{"type":"HBox","props":{"y":422,"x":274,"width":496,"space":20,"height":52},"child":[{"type":"Box","props":{"y":1,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"arer_near1","stateNum":2,"skin":"gameres/ui/area_button.png","name":"arer_near1","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}},{"type":"Image","props":{"y":17,"x":15,"visible":false,"var":"near1_state","name":"near1_state"}}]},{"type":"Box","props":{"y":1,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"arer_near2","stateNum":2,"skin":"gameres/ui/area_button.png","selected":false,"name":"arer_near2","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}},{"type":"Image","props":{"y":17,"x":15,"visible":false,"var":"near2_state","name":"near2_state"}}]}]},{"type":"Button","props":{"y":428,"x":730,"width":199,"visible":false,"stateNum":2,"skin":"gameres/ui/area_button.png","labelStroke":2,"labelSize":22,"labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":45}},{"type":"Button","props":{"y":428,"x":949,"width":199,"visible":false,"stateNum":2,"skin":"gameres/ui/area_button.png","labelStroke":2,"labelSize":22,"labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":45}},{"type":"Button","props":{"y":-10,"x":743,"var":"btn_closeaccount_list","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closeaccount_list","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}}]},{"type":"Image","props":{"y":51,"x":139,"width":333,"visible":false,"var":"list_select","name":"list_select","height":479},"child":[{"type":"Text","props":{"y":11,"x":124,"strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#ffffff","align":"center"}},{"type":"List","props":{"y":68,"x":55,"width":209,"var":"serve_list","vScrollBarSkin":"gameres/ui/vscroll.png","spaceY":10,"selectedIndex":0,"repeatX":1,"name":"serve_list","height":295},"child":[{"type":"Button","props":{"x":4,"width":200,"visible":false,"stateNum":2,"skin":"gameres/ui/area_button.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":24,"labelPadding":"6,0,6,0","labelColors":"#D7B581,#D7B581","label":"蜜雪冰城","height":52}}]},{"type":"Button","props":{"y":15,"x":268,"width":46,"visible":false,"var":"btn_server_quit","stateNum":2,"skin":"gameres/ui/but_close.png","name":"btn_server_quit","height":46}},{"type":"Image","props":{"y":24,"x":98,"width":131,"visible":false,"skin":"gameres/ui/servertitle.png","height":30}},{"type":"Image","props":{"y":477,"x":-65,"visible":false,"var":"select_hint","skin":"gameres/ui/server_hint.png","name":"select_hint"}}]},{"type":"Image","props":{"width":491,"var":"imageLogin","skin":"gameres/png/imageLogin.png","name":"imageLogin","mouseThrough":true,"height":353,"centerY":0,"centerX":0},"child":[{"type":"Panel","props":{"y":108,"x":58,"width":389,"var":"panel_login","name":"panel_login","height":212},"child":[{"type":"Image","props":{"y":9,"x":0,"width":40,"skin":"gameres/ui/id.png","height":34}},{"type":"Image","props":{"y":59,"x":3,"width":34,"skin":"gameres/ui/password.png","height":42}},{"type":"TextInput","props":{"y":7,"x":46,"width":217,"var":"tex_name","valign":"middle","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","restrict":"0-9a-zA-Z","padding":"0,0,0,10","name":"tex_name","height":33,"fontSize":20,"color":"#ffffff"}},{"type":"TextInput","props":{"y":61,"x":46,"width":217,"var":"tex_psw","valign":"middle","type":"password","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","restrict":"0-9a-zA-Z`~!@#$%^&*()_+-=;'.|?<>/[]{}\"","padding":"0,0,0,10","name":"tex_psw","maxChars":10,"height":33,"fontSize":20,"color":"#ffffff"}},{"type":"Button","props":{"y":0,"x":266,"width":103,"var":"btn_zc","stateNum":2,"skin":"gameres/ui/regist_new_use.png","height":44}},{"type":"Button","props":{"y":57,"x":266,"width":103,"var":"btn_xg","stateNum":2,"skin":"gameres/ui/change_pwd.png","height":44}},{"type":"Button","props":{"y":118,"x":9,"width":132,"var":"btn_login","stateNum":2,"skin":"gameres/ui/00777.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff","height":50}},{"type":"Button","props":{"y":118,"x":200,"width":132,"var":"btn_zc1","stateNum":2,"skin":"gameres/ui/00778.png","name":"btn_zc1","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff","height":50}}]},{"type":"Label","props":{"y":295,"x":158,"width":80,"var":"label_qq","text":"QQ登录","name":"QQ登录","height":22,"fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Label","props":{"y":295,"x":279,"width":80,"var":"label_wx","text":"微信登录","name":"微信登录","height":22,"fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Button","props":{"y":-2,"x":409,"var":"btn_backserver","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_backserver","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}},{"type":"Button","props":{"y":288,"x":127,"width":33,"var":"btn_qq","stateNum":1,"skin":"gameres/ui/qq.png","name":"btn_qq","height":33}},{"type":"Image","props":{"y":358,"x":13,"width":454,"skin":"gameres/ui/redpak_item.png","height":29},"child":[{"type":"Box","props":{},"child":[{"type":"Text","props":{"y":5,"x":323,"width":18,"text":"和","height":18,"fontSize":18,"color":"#f9f9f9"}},{"type":"Text","props":{"y":5,"x":85,"width":163,"text":"我已详细阅读并同意","height":18,"fontSize":18,"color":"#f9f9f9"}},{"type":"Text","props":{"y":5,"x":250,"var":"txt_userAgreement","text":"用户协议","name":"txt_userAgreement","fontSize":18,"color":"#ff0e0a"}},{"type":"Text","props":{"y":5,"x":345,"var":"txt_privatePolicy","text":"隐私政策","name":"txt_privatePolicy","fontSize":18,"color":"#ff0e0a"}},{"type":"CheckBox","props":{"y":-1,"x":52,"var":"checkBox_agreeMent","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","scaleY":0.8,"scaleX":0.8,"name":"checkBox_agreeMent"}}]}]},{"type":"Button","props":{"y":288,"x":243,"width":33,"var":"btn_wx","stateNum":1,"skin":"gameres/ui/wx.png","name":"btn_wx","height":33}},{"type":"RadioGroup","props":{"y":369,"x":202,"var":"routeSel","space":50,"skin":"gameres/ui/serversite.png","name":"routeSel","labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff","direction":"horizontal"}},{"type":"Image","props":{"y":20,"x":204,"width":83,"skin":"gameres/ui/logintitle.png","height":35}},{"type":"Label","props":{"y":265,"x":125,"visible":false,"var":"label_qqwx","text":"——  使用其他账号登录  ——","strokeColor":"#150e09","stroke":2,"name":"label_qqwx","fontSize":16,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Button","props":{"y":301,"x":359,"var":"btn_forgetPsw","stateNum":2,"skin":"gameres/ui/forgetPsw.png","name":"btn_forgetPsw"}},{"type":"Image","props":{"y":-51,"x":-51,"var":"img_userAgreement_bg","skin":"gameres/png/userAgreement_bg.png","name":"img_userAgreement_bg"},"child":[{"type":"Panel","props":{"y":40,"x":30,"width":534,"var":"panel_userAgreement","name":"panel_userAgreement","height":391}},{"type":"Button","props":{"y":384,"x":154,"visible":false,"var":"yes_agreement","stateNum":2,"name":"yes_agreement"}},{"type":"Button","props":{"y":-21,"x":531,"var":"no_agreement","stateNum":2,"skin":"gameres/ui/but_close.png","name":"no_agreement"}}]},{"type":"Image","props":{"y":-51,"x":-51,"var":"img_privatePolicy_bg","skin":"gameres/png/privatePolicy_bg.png","name":"img_privatePolicy_bg"},"child":[{"type":"Panel","props":{"y":40,"x":30,"width":534,"var":"panel_privatePolicy","name":"panel_privatePolicy","height":390}},{"type":"Button","props":{"y":384,"x":154,"visible":false,"var":"yes_policy","stateNum":2,"name":"yes_policy"}},{"type":"Button","props":{"y":-21,"x":530,"var":"no_policy","stateNum":2,"skin":"gameres/ui/but_close.png","name":"no_policy"}}]}]},{"type":"Image","props":{"width":490,"var":"img_account","skin":"gameres/png/00790.png","name":"img_account","height":195,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":140,"x":197,"width":110,"var":"btn_know","stateNum":2,"skin":"gameres/ui/00777.png","name":"btn_know","height":42}},{"type":"Label","props":{"y":25,"x":53,"width":388,"text":"系统已自动为您生成账号密码，请截图保存","strokeColor":"#150e09","stroke":2,"height":22,"fontSize":20,"color":"#bcb080","bold":false}},{"type":"Label","props":{"y":69,"x":117,"width":60,"text":"账号：","strokeColor":"#150e09","stroke":2,"height":23,"fontSize":20,"color":"#93fe4c"}},{"type":"Label","props":{"y":103,"x":117,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"height":23,"fontSize":20,"color":"#93fe4c"}},{"type":"Text","props":{"y":69,"x":190,"width":152,"var":"account_name","text":"账号","strokeColor":"#150e09","stroke":2,"name":"account_name","height":27,"fontSize":20,"font":"Microsoft YaHei","color":"#93fe4c"}},{"type":"Text","props":{"y":103,"x":190,"width":162,"var":"account_psw","text":"密码","strokeColor":"#150e09","stroke":2,"name":"account_psw","height":28,"fontSize":20,"font":"Microsoft YaHei","color":"#93fe4c"}}]},{"type":"Image","props":{"width":542,"var":"img_register","skin":"gameres/png/00790.png","name":"img_register","height":215,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":148,"width":110,"var":"btn_register","stateNum":2,"skin":"gameres/ui/00777.png","name":"btn_register","height":42,"centerX":0}},{"type":"Label","props":{"y":25,"width":479,"text":"系统已自动为您生成账号密码，请截图保存","strokeColor":"#150e09","stroke":2,"fontSize":25,"color":"#bcb080","centerX":0,"bold":false}},{"type":"Label","props":{"y":74,"x":159,"width":60,"text":"账号：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Label","props":{"y":111,"x":159,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":74,"x":232,"width":152,"var":"register_name","text":"账号","strokeColor":"#150e09","stroke":2,"name":"register_name","fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":111,"x":232,"width":162,"var":"register_psw","text":"密码","strokeColor":"#150e09","stroke":2,"name":"register_psw","fontSize":22,"color":"#93fe4c"}},{"type":"Image","props":{"y":188,"x":217,"width":110,"var":"btn_registerimg","skin":"gameres/ui/00768.png","skewX":-180,"name":"btn_registerimg","height":42}}]},{"type":"Image","props":{"y":44,"x":228,"visible":false,"var":"reg_bg","skin":"gameres/png/img_regbg.png","name":"reg_bg","mouseThrough":false,"centerY":0,"centerX":0},"child":[{"type":"TextInput","props":{"y":74,"x":174,"width":200,"var":"username","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入用户名....","name":"username","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":119,"x":174,"width":200,"var":"password","type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入密码...","name":"password","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":161,"x":174,"width":200,"var":"confirmpassword","type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请再次输入密码...","name":"confirmpassword","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"Button","props":{"y":426,"x":118,"width":101,"var":"btn_reg","stateNum":2,"skin":"gameres/ui/btn_reg_submit.png","sizeGrid":"4,4,4,4","name":"btn_reg","labelStrokeColor":"#000000","labelStroke":2,"height":44}},{"type":"Button","props":{"y":426,"x":257,"width":101,"var":"btn_reback","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","sizeGrid":"4,4,4,4","name":"btn_reback","labelStrokeColor":"#000000","labelStroke":2,"height":44}},{"type":"TextArea","props":{"y":79,"x":400,"width":224,"type":"text","text":"您的帐号名称可以包括：字符、数字的组合。帐号名称长度必须为4或以上。请仔细输入创建帐号所需的信息。您的帐号可以登录游戏及我们的网站，以取得一些相关信息。建议您的登录帐号不要和游戏中的角色名相同，以确保您的密码不会被暴力破解。","strokeColor":"#000000","stroke":2,"leading":5,"height":328,"fontSize":18,"editable":false,"color":"#ffffff","bgColor":"#090a05"}},{"type":"TextInput","props":{"y":206,"x":174,"width":200,"var":"reg_birthday","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","name":"reg_birthday","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":248,"x":174,"width":200,"var":"reg_que1","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入问题一","name":"reg_que1","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":293,"x":174,"width":200,"var":"reg_ans1","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入答案一","name":"reg_ans1","maxChars":12,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":336,"x":174,"width":200,"var":"reg_que2","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入问题二","name":"reg_que2","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":381,"x":174,"width":200,"var":"reg_ans2","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入答案二","name":"reg_ans2","maxChars":12,"height":30,"fontSize":18,"color":"#fbf8f8"}}]},{"type":"Label","props":{"visible":false,"var":"txt_tip","text":"连接服务器中,请稍等...","strokeColor":"#000000","stroke":3,"fontSize":30,"color":"#ddaf52","centerY":0,"centerX":0}},{"type":"Image","props":{"y":10,"x":10,"width":542,"visible":false,"var":"img_findPas","skin":"gameres/png/00790.png","name":"img_findPas","height":215,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":148,"var":"btn_findPas","stateNum":2,"skin":"gameres/ui/00758.png","name":"btn_findPas","centerX":0}},{"type":"Label","props":{"y":25,"width":479,"text":"密码已找回，请截图保存","strokeColor":"#150e09","stroke":2,"fontSize":25,"color":"#bcb080","centerX":0,"bold":false}},{"type":"Label","props":{"y":90,"x":157,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":90,"x":230,"width":162,"text":"密码","strokeColor":"#150e09","stroke":2,"name":"pas_findPas","fontSize":22,"color":"#93fe4c"}}]},{"type":"RealVerification","props":{"y":104,"x":274,"visible":false,"var":"real_ui","mouseThrough":true,"runtime":"ui.RealVerificationUI"}},{"type":"Image","props":{"y":103,"x":305,"visible":false,"var":"bg1","skin":"gameres/png/imageLogin.png","name":"bg1"},"child":[{"type":"Label","props":{"y":92,"x":101,"text":"游戏账号","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":130,"x":101,"text":"你的生日","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":168,"x":125,"text":"问题一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":207,"x":125,"text":"答案一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":245,"x":125,"text":"问题二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":283,"x":125,"text":"答案二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"TextInput","props":{"y":92,"x":246,"width":190,"var":"find_name","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"游戏账号","overflow":"hidden","name":"find_name","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":129,"x":246,"width":190,"var":"find_birthday","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","overflow":"hidden","name":"find_birthday","maxChars":10,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":166,"x":246,"width":190,"var":"find_q1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_q1","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":204,"x":246,"width":190,"var":"find_a1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_a1","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":241,"x":246,"width":190,"var":"find_q2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_q2","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":278,"x":246,"width":190,"var":"find_a2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_a2","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":320,"x":145,"width":101,"var":"btn_FindPwd","stateNum":2,"skin":"gameres/ui/00698.png","name":"btn_FindPwd","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Button","props":{"y":320,"x":308,"width":101,"var":"btn_reback1","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","name":"btn_reback1","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}}]},{"type":"Image","props":{"y":103,"x":295,"visible":false,"var":"bg2","skin":"gameres/png/imageLogin.png","name":"bg2"},"child":[{"type":"Label","props":{"y":92,"x":101,"text":"游戏账号","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":130,"x":101,"text":"你的生日","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":168,"x":125,"text":"问题一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":207,"x":125,"text":"答案一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":245,"x":125,"text":"问题二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":283,"x":125,"text":"答案二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"TextInput","props":{"y":92,"x":246,"width":190,"var":"set_name","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"游戏账号","overflow":"hidden","name":"set_name","maxChars":20,"height":32,"fontSize":18,"editable":false,"color":"#ffffff"}},{"type":"TextInput","props":{"y":129,"x":246,"width":190,"var":"set_birthday","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","overflow":"hidden","name":"set_birthday","maxChars":10,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":166,"x":246,"width":190,"var":"set_q1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_q1","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":204,"x":246,"width":190,"var":"set_a1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_a1","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":241,"x":246,"width":190,"var":"set_q2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_q2","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":278,"x":246,"width":190,"var":"set_a2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_a2","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":320,"x":145,"width":101,"var":"btn_update","stateNum":2,"skin":"gameres/ui/00698.png","name":"btn_update","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Button","props":{"y":320,"x":308,"width":101,"var":"btn_reback2","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","name":"btn_reback2","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Image","props":{"y":23,"x":205,"skin":"gameres/ui/update_account.png"}}]},{"type":"Image","props":{"y":0,"x":0,"width":1136,"visible":false,"var":"notice_bg","skin":"gameres/png/login_bg.png","name":"notice_bg","height":600},"child":[{"type":"Image","props":{"y":78,"x":270,"skin":"gameres/png/notice_bg.png"},"child":[{"type":"Button","props":{"y":381,"x":230,"var":"notice_ok","stateNum":2,"skin":"gameres/ui/notice_ok.png","name":"notice_ok"}},{"type":"Panel","props":{"y":40,"x":30,"width":534,"var":"notice_panel","name":"notice_panel","height":334}}]}]},{"type":"Button","props":{"y":385,"x":1042,"width":70,"var":"notice_show1_copy","stateNum":1,"skin":"gameres/png/16+.png","name":"notice_show1_copy","height":90}},{"type":"Image","props":{"y":32,"x":154,"width":816,"visible":false,"var":"img_qishiyou_list","skin":"gameres/png/select_area.png","name":"img_qishiyou_list","mouseThrough":true,"height":531},"child":[{"type":"List","props":{"y":77,"x":53,"width":711,"var":"qishiyou_account_list","spaceY":10,"spaceX":0,"repeatX":3,"name":"qishiyou_account_list","height":307},"child":[{"type":"Box","props":{"y":5,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_btn","stateNum":2,"skin":"gameres/ui/area_button.png","name":"qishiyou_arer_btn","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]}]},{"type":"HBox","props":{"y":422,"x":274,"width":496,"space":20,"height":52},"child":[{"type":"Box","props":{"y":1,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_near1","stateNum":2,"skin":"gameres/ui/area_button.png","name":"qishiyou_arer_near1","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]},{"type":"Box","props":{"y":1,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_near2","stateNum":2,"skin":"gameres/ui/area_button.png","selected":false,"name":"qishiyou_arer_near2","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]}]},{"type":"Button","props":{"y":-10,"x":744,"var":"btn_closeaccount_qishiyou","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closeaccount_qishiyou","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}}]}]};
		return LoginScene1212UI;
	})(View);
var LookHumUI=(function(_super){
		function LookHumUI(){
			
		    this.LookHum_bg=null;
		    this.Kuang_bg_2=null;
		    this.hum_ico2=null;
		    this.img_Hair=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_16=null;
		    this.Item_4=null;
		    this.Item_13=null;
		    this.Item_15=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_7=null;
		    this.Item_8=null;
		    this.Item_11=null;
		    this.Item_10=null;
		    this.Item_5=null;
		    this.Item_6=null;
		    this.Item_9=null;
		    this.Item_12=null;
		    this.Item_14=null;
		    this.img_head=null;
		    this.Item_head=null;
		    this.copyname=null;
		    this.Item_30=null;
		    this.Item_40=null;
		    this.user_title=null;
		    this.itemScorse=null;
		    this.New_kuang=null;
		    this.fashion_hum=null;
		    this.fashion_body=null;
		    this.Item_21=null;
		    this.fashion_weapon=null;
		    this.Item_27=null;
		    this.Item_28=null;
		    this.Item_29=null;
		    this.Item_25=null;
		    this.Item_24=null;
		    this.Item_23=null;
		    this.Item_22=null;
		    this.Item_20=null;
		    this.Item_26=null;
		    this.lookHumIcon_bg=null;
		    this.LookIcon_List=null;
		    this.IconShow=null;
		    this.Tab_1=null;
		    this.Tab_2=null;
		    this.Tab_3=null;
		    this.but_Close=null;
		    this.uaer_name=null;

			LookHumUI.__super.call(this);
		}

		CLASS$(LookHumUI,'ui.LookHumUI',_super);
		var __proto__=LookHumUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LookHumUI.uiView);

		}

		LookHumUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"y":44,"x":53,"width":363,"var":"LookHum_bg","skin":"gameres/png/00029_new.png","height":500},"child":[{"type":"Image","props":{"width":340,"var":"Kuang_bg_2","height":370,"centerY":4,"centerX":0,"alpha":0.85},"child":[{"type":"Image","props":{"y":86,"x":86,"var":"hum_ico2","skin":"gameres/png/00376-1.png","centerX":0},"child":[{"type":"Image","props":{"y":41,"x":75,"width":22,"var":"img_Hair","height":20}},{"type":"Image","props":{"y":70,"x":68.5,"width":49,"var":"Item_0","height":134}},{"type":"Image","props":{"y":5,"x":18,"width":44,"var":"Item_1","height":121}},{"type":"Image","props":{"y":84,"x":112,"width":49,"var":"Item_16","height":86}},{"type":"Image","props":{"y":30,"x":62,"width":49,"var":"Item_4","height":34}}]},{"type":"Image","props":{"y":90,"x":19,"width":48,"skin":"gameres/ui/item_hat.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_13","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":90,"x":271,"width":48,"skin":"gameres/ui/item_horse.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_15","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":142,"x":19,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_2","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":142,"x":271,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_3","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":246,"x":271,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_7","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":246,"x":19,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_8","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_11","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":82,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_10","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":194,"x":271,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_5","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":194,"x":19,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_6","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":19,"width":48,"skin":"gameres/ui/item_amulet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_9","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":271,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_12","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":208,"width":48,"skin":"gameres/ui/item_drum.png","height":48},"child":[{"type":"Image","props":{"y":3,"x":16,"width":49,"var":"Item_14","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":349,"x":15,"width":309,"skin":"gameres/png/00029_new_1.png","height":61}},{"type":"Image","props":{"y":38,"x":271,"width":48,"var":"img_head","skin":"gameres/ui/item_helmet.png","name":"img_head","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_head","name":"head","height":49,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":33,"x":20,"width":66,"var":"copyname","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"copyname","labelSize":14,"labelColors":"#fbf1b3,#fbf1b3","label":"复制名字","height":25}},{"type":"Button","props":{"y":356,"x":97,"var":"Item_30","stateNum":2,"skin":"gameres/ui/item_box1.png","name":"30","left":90}},{"type":"Button","props":{"y":356,"x":203,"var":"Item_40","stateNum":2,"skin":"gameres/ui/item_box2.png"}},{"type":"Label","props":{"y":30,"var":"user_title","fontSize":18,"color":"#ffffff","centerX":0,"bold":true}},{"type":"Label","props":{"y":65,"width":106,"visible":false,"var":"itemScorse","valign":"middle","text":"装备评分：","right":75,"name":"itemScorse","height":14,"fontSize":14,"color":"#eee9e9","align":"right"}}]},{"type":"Image","props":{"width":340,"var":"New_kuang","name":"New_kuang","height":370,"centerY":19,"centerX":0},"child":[{"type":"Image","props":{"y":68,"x":86,"width":168,"var":"fashion_hum","skin":"gameres/png/00376-1.png","name":"fashion_hum","height":234,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":72,"x":59,"width":57,"var":"fashion_body","name":"fashion_body","height":133}},{"type":"Image","props":{"y":21,"x":68,"width":44,"var":"Item_21","name":"Item_21","height":44}},{"type":"Image","props":{"y":5,"x":19,"width":44,"var":"fashion_weapon","name":"fashion_weapon","height":142}}]},{"type":"Image","props":{"y":298,"x":69,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_27","name":"Item_27","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_28","name":"Item_28","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":221,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_29","name":"Item_29","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":25,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_25","name":"Item_25","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":263,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_24","name":"Item_24","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":25,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_23","name":"Item_23","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":263,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_22","name":"Item_22","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":263,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_20","name":"Item_20","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":25,"width":48,"visible":false,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_26","name":"Item_26","height":44,"centerY":0,"centerX":0}}]}]},{"type":"Image","props":{"width":287,"visible":false,"var":"lookHumIcon_bg","skin":"gameres/png/title_bg.png","sizeGrid":"208,0,152,0","name":"lookHumIcon_bg","height":360,"centerY":38,"centerX":-1},"child":[{"type":"List","props":{"y":55,"x":-1,"width":159,"var":"LookIcon_List","vScrollBarSkin":"gameres/ui/vscroll.png","name":"LookIcon_List","height":300}},{"type":"Image","props":{"y":3,"x":117,"var":"IconShow","skin":"gameres/ui/icon_k.png","name":"IconShow"}}]},{"type":"Button","props":{"y":64,"x":-29,"width":39,"var":"Tab_1","stateNum":3,"skin":"gameres/ui/00040.png","name":"1","height":66}},{"type":"Button","props":{"y":130,"x":-29,"width":39,"var":"Tab_2","stateNum":3,"skin":"gameres/ui/00039.png","name":"2","height":66}},{"type":"Button","props":{"y":196,"x":-29,"width":39,"var":"Tab_3","stateNum":3,"skin":"gameres/ui/00041.png","name":"3","height":66}},{"type":"Button","props":{"y":27,"x":309,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close_new.png"}},{"type":"Label","props":{"var":"uaer_name","top":28,"strokeColor":"#000000","stroke":1,"fontSize":22,"centerX":0,"bold":true}}]}]};
		return LookHumUI;
	})(View);
var LookShousUI=(function(_super){
		function LookShousUI(){
			
		    this.Shoushi_bg=null;
		    this.but_Close=null;
		    this.sKuang=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_4=null;
		    this.Item_5=null;
		    this.Item_6=null;
		    this.Item_7=null;
		    this.Item_8=null;
		    this.Item_9=null;
		    this.Item_10=null;
		    this.Item_11=null;

			LookShousUI.__super.call(this);
		}

		CLASS$(LookShousUI,'ui.LookShousUI',_super);
		var __proto__=LookShousUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LookShousUI.uiView);

		}

		LookShousUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":62,"x":185,"var":"Shoushi_bg","skin":"gameres/png/shengxiao.png"},"child":[{"type":"Button","props":{"y":-5,"x":168,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":55,"x":17,"width":206,"var":"sKuang","height":156},"child":[{"type":"Image","props":{"y":6,"x":4,"width":44,"var":"Item_0","name":"0","height":44}},{"type":"Image","props":{"y":6,"x":54,"width":44,"var":"Item_1","name":"1","height":44}},{"type":"Image","props":{"y":6,"x":104,"width":44,"var":"Item_2","name":"2","height":44}},{"type":"Image","props":{"y":6,"x":154,"width":44,"var":"Item_3","name":"3","height":44}},{"type":"Image","props":{"y":54,"x":4,"width":44,"var":"Item_4","name":"4","height":44}},{"type":"Image","props":{"y":54,"x":54,"width":44,"var":"Item_5","name":"5","height":44}},{"type":"Image","props":{"y":54,"x":104,"width":44,"var":"Item_6","name":"6","height":44}},{"type":"Image","props":{"y":54,"x":154,"width":44,"var":"Item_7","name":"7","height":44}},{"type":"Image","props":{"y":104,"x":4,"width":44,"var":"Item_8","name":"8","height":44}},{"type":"Image","props":{"y":104,"x":54,"width":44,"var":"Item_9","name":"9","height":44}},{"type":"Image","props":{"y":104,"x":104,"width":44,"var":"Item_10","name":"10","height":44}},{"type":"Image","props":{"y":104,"x":154,"width":44,"var":"Item_11","name":"11","height":44}}]}]}]};
		return LookShousUI;
	})(View);
var LookShoushiUI=(function(_super){
		function LookShoushiUI(){
			
		    this.img_bg=null;
		    this.btn_close=null;
		    this.img_box=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_4=null;
		    this.Item_5=null;

			LookShoushiUI.__super.call(this);
		}

		CLASS$(LookShoushiUI,'ui.LookShoushiUI',_super);
		var __proto__=LookShoushiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LookShoushiUI.uiView);

		}

		LookShoushiUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":82,"x":205,"var":"img_bg","skin":"gameres/png/shoushi.png"},"child":[{"type":"Button","props":{"y":-3,"x":110,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":55,"x":15,"width":149,"var":"img_box","height":104},"child":[{"type":"Image","props":{"y":5,"x":6,"width":44,"var":"Item_0","name":"0","height":44}},{"type":"Image","props":{"y":5,"x":53,"width":44,"var":"Item_1","name":"1","height":44}},{"type":"Image","props":{"y":5,"x":100,"width":44,"var":"Item_2","name":"2","height":44}},{"type":"Image","props":{"y":53,"x":6,"width":44,"var":"Item_3","name":"3","height":44}},{"type":"Image","props":{"y":53,"x":53,"width":44,"var":"Item_4","name":"4","height":44}},{"type":"Image","props":{"y":53,"x":100,"width":44,"var":"Item_5","name":"5","height":44}}]}]}]};
		return LookShoushiUI;
	})(View);
var LooksShopUI=(function(_super){
		function LooksShopUI(){
			
		    this.LookShop_bg=null;
		    this.Look_S_List=null;
		    this.txt_Name=null;
		    this.txt_Gold=null;
		    this.txt_ShopName=null;
		    this.but_Close=null;
		    this.but_Exit=null;
		    this.but_Buy=null;

			LooksShopUI.__super.call(this);
		}

		CLASS$(LooksShopUI,'ui.LooksShopUI',_super);
		var __proto__=LooksShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LooksShopUI.uiView);

		}

		LooksShopUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":21,"x":310,"var":"LookShop_bg","skin":"gameres/png/myshopwin.png"},"child":[{"type":"List","props":{"y":102,"x":18,"width":252,"var":"Look_S_List","height":201}},{"type":"Text","props":{"y":323,"x":28,"text":"物品名称：","fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":350,"x":28,"text":"物品价格：","fontSize":16,"color":"#ffffff"}},{"type":"TextInput","props":{"y":320,"x":107,"width":145,"var":"txt_Name","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"TextInput","props":{"y":347,"x":107,"width":145,"var":"txt_Gold","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"TextInput","props":{"y":66,"x":101,"width":160,"var":"txt_ShopName","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"Button","props":{"y":-5,"x":222,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":377,"x":159,"width":70,"var":"but_Exit","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581","label":"取消","height":25}},{"type":"Text","props":{"y":69,"x":26,"text":"摊位名称：","fontSize":16,"color":"#c7915d"}},{"type":"Text","props":{"y":28,"x":128,"width":39,"text":"摆摊","height":16,"fontSize":16,"color":"#c7915d","bold":true}},{"type":"Button","props":{"y":377,"x":62,"width":70,"var":"but_Buy","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581","label":"购买","height":25}}]}]};
		return LooksShopUI;
	})(View);
var MailUI=(function(_super){
		function MailUI(){
			
		    this.img_imgbg=null;
		    this.lab_limited=null;
		    this.btn_close=null;
		    this.btn_deleteMail=null;
		    this.btn_deleteAll=null;
		    this.btn_getAllItem=null;
		    this.btn_getItem=null;
		    this.list_itemList=null;
		    this.text_mome=null;
		    this.text_time=null;
		    this.text_sendName=null;
		    this.text_caption=null;
		    this.list_mailList=null;
		    this.box_move=null;
		    this.lab_currentMailCount=null;
		    this.lab_maxMailCount=null;

			MailUI.__super.call(this);
		}

		CLASS$(MailUI,'ui.MailUI',_super);
		var __proto__=MailUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MailUI.uiView);

		}

		MailUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_imgbg","skin":"gameres/png/mail_bg.png","height":465,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":384,"x":278,"var":"lab_limited","fontSize":15,"color":"#c8c1b9"}},{"type":"Button","props":{"y":2,"x":649,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.83,"scaleX":0.83}},{"type":"Button","props":{"y":408,"x":580,"width":100,"var":"btn_deleteMail","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStroke":2,"labelSize":20,"labelPadding":"3","labelColors":"#cea978,#cea978,#cea978","label":"删除","height":46}},{"type":"Button","props":{"y":408,"x":151,"width":100,"var":"btn_deleteAll","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStroke":1,"labelSize":20,"labelPadding":"3","labelColors":"#cea978,#cea978,#cea978","label":"删除已读","height":46}},{"type":"Button","props":{"y":408,"x":34,"width":100,"var":"btn_getAllItem","stateNum":2,"skin":"gameres/ui/btn_getAllItem.png","labelStrokeColor":"#0c3608","labelStroke":3,"labelSize":20,"labelPadding":"3","labelColors":"#f0d8b8,#f0d8b8,#f0d8b8","label":"全部提取","height":46}},{"type":"Button","props":{"y":340,"x":582,"width":96,"var":"btn_getItem","stateNum":2,"skin":"gameres/ui/btn_extract.png","labelStroke":0,"labelSize":20,"labelPadding":"3","labelColors":"#ffffff,#ffffff,#ffffff","label":"提取","height":38}},{"type":"List","props":{"y":328,"x":275,"width":361,"var":"list_itemList","spaceX":2,"scaleY":0.83,"scaleX":0.83,"height":65},"child":[{"type":"Box","props":{"y":0,"x":0,"width":66,"renderType":"render","height":65},"child":[{"type":"Image","props":{"skin":"gameres/ui/img_bag_bg.png","name":"img_itembg"},"child":[{"type":"Image","props":{"name":"img_item","centerY":0,"centerX":0}},{"type":"Label","props":{"y":50,"x":0,"width":60,"text":"100","name":"lab_maxCount","height":12,"fontSize":12,"color":"#10c810","align":"right"}},{"type":"Label","props":{"y":38,"x":0,"width":60,"text":"100","name":"lab_currentCount","height":12,"fontSize":12,"color":"#ffffff","align":"right"}}]}]}]},{"type":"Image","props":{"y":153,"x":272,"width":410,"skin":"gameres/png/rw_bg.png","sizeGrid":"10,10,10,10","height":161},"child":[{"type":"Text","props":{"y":2,"x":2,"wordWrap":true,"width":406,"var":"text_mome","overflow":"scroll","mouseEnabled":true,"height":159,"fontSize":18,"color":"#c8c1b9"}}]},{"type":"Image","props":{"y":112,"x":563,"width":120,"skin":"gameres/png/rw_bg.png","sizeGrid":"10,10,10,10","height":29},"child":[{"type":"Text","props":{"y":9,"x":-1,"width":119,"var":"text_time","height":25,"fontSize":13,"color":"#c8c1b9"}}]},{"type":"Image","props":{"y":112,"x":273,"width":290,"skin":"gameres/png/rw_bg.png","sizeGrid":"10,10,10,10","height":30},"child":[{"type":"Text","props":{"y":8,"x":0,"width":290,"var":"text_sendName","height":25,"fontSize":14,"color":"#c8c1b9"}}]},{"type":"Image","props":{"y":76,"x":274,"width":408,"skin":"gameres/png/rw_bg.png","sizeGrid":"10,10,10,10","height":30},"child":[{"type":"Text","props":{"y":8,"x":0,"width":404,"var":"text_caption","height":25,"fontSize":14,"color":"#c8c1b9"}}]},{"type":"List","props":{"y":71,"x":23,"width":241,"var":"list_mailList","spaceY":-6,"repeatY":100,"height":334},"child":[{"type":"Box","props":{"y":0,"x":0,"width":241,"renderType":"render","height":61},"child":[{"type":"Image","props":{"y":0,"x":0,"width":241,"skin":"gameres/png/select_bg2.png","name":"img_skin","height":61}},{"type":"Label","props":{"y":9,"x":8,"text":"发送者","stroke":1,"name":"lab_sendName","fontSize":13,"color":"#e2720c"}},{"type":"Label","props":{"y":26,"x":8,"text":"邮件标题邮件标题邮件标题邮件标","stroke":1,"name":"lab_caption","fontSize":13,"color":"#e2b984"}},{"type":"Label","props":{"y":9,"x":208,"text":"未读","stroke":1,"name":"lab_state","fontSize":13,"color":"#cd1411"}},{"type":"Label","props":{"y":44,"x":8,"width":82,"name":"lab_date","height":13,"fontSize":10,"color":"#c8c1b9","align":"left"}},{"type":"Label","props":{"y":43,"x":144,"width":87,"text":"14日后过期","name":"lab_limited","height":12,"fontSize":11,"color":"#c8c1b9","align":"right"}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":652,"var":"box_move","height":73}},{"type":"Label","props":{"y":435,"x":252,"width":46,"var":"lab_currentMailCount","text":"0","height":15,"fontSize":15,"color":"#c8c1b9","align":"right"}},{"type":"Label","props":{"y":435,"x":301,"width":3,"text":"/","height":12,"fontSize":15,"color":"#c8c1b9"}},{"type":"Label","props":{"y":435,"x":309,"width":49,"var":"lab_maxMailCount","text":"0","height":15,"fontSize":15,"color":"#c8c1b9","align":"left"}}]}]};
		return MailUI;
	})(View);
var minimapUI=(function(_super){
		function minimapUI(){
			
		    this.Big_mapimg=null;
		    this.lb_mapname=null;
		    this.btn_close=null;
		    this.but_goto=null;
		    this.npc_list=null;
		    this.boxmap=null;

			minimapUI.__super.call(this);
		}

		CLASS$(minimapUI,'ui.minimapUI',_super);
		var __proto__=minimapUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(minimapUI.uiView);

		}

		minimapUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"Big_mapimg","skin":"gameres/png/img_bj.png","height":465,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":418,"x":38,"width":133,"var":"lb_mapname","text":"啊啊啊啊啊啊","strokeColor":"#000000","height":20,"fontSize":22,"color":"#c4b4a1"}},{"type":"Button","props":{"y":-3,"x":641,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":406,"x":564,"width":100,"var":"but_goto","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffe9aa,#ffe9aa","label":"寻 路","height":47}},{"type":"List","props":{"y":95,"x":537,"width":150,"var":"npc_list","height":302}},{"type":"Panel","props":{"y":208,"x":276,"width":497,"var":"boxmap","pivotY":144,"pivotX":249,"height":334}},{"type":"Image","props":{"y":20,"x":327,"width":60,"skin":"gameres/ui/map_title.png","height":30}},{"type":"Image","props":{"y":62,"x":535,"width":154,"skin":"gameres/ui/npclist.png","height":37}}]}]};
		return minimapUI;
	})(View);
var MyShopMsgUI=(function(_super){
		function MyShopMsgUI(){
			
		    this.MyShopMsg_bg=null;
		    this.but_baitan=null;
		    this.but_Close=null;
		    this.txt_GoldCount=null;
		    this.btns_box=null;
		    this.but_Gold=null;
		    this.goldname2=null;
		    this.but_bindCionNum=null;
		    this.goldname5=null;
		    this.but_GameGold=null;
		    this.goldname1=null;
		    this.but_bindGoldNum=null;
		    this.goldname6=null;
		    this.but_gamePointNum=null;
		    this.goldname7=null;
		    this.but_GameDiamond=null;
		    this.goldname4=null;
		    this.but_GameGird=null;
		    this.goldname3=null;

			MyShopMsgUI.__super.call(this);
		}

		CLASS$(MyShopMsgUI,'ui.MyShopMsgUI',_super);
		var __proto__=MyShopMsgUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MyShopMsgUI.uiView);

		}

		MyShopMsgUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":122,"x":213,"var":"MyShopMsg_bg","skin":"gameres/png/myshopmsg.png"},"child":[{"type":"Button","props":{"y":205,"x":116,"width":70,"var":"but_baitan","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"确定","height":25}},{"type":"Button","props":{"y":205,"x":281,"width":70,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"取消","height":25}},{"type":"TextInput","props":{"y":82,"x":106,"width":241,"var":"txt_GoldCount","restrict":"0-9","maxChars":9,"height":22,"color":"#ffffff"}},{"type":"Box","props":{"y":0,"x":0,"width":449,"var":"btns_box","name":"btns_box","mouseThrough":true,"height":238},"child":[{"type":"Box","props":{"y":109,"x":123,"width":0,"mouseThrough":true,"height":0},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_Gold","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":3,"x":23,"var":"goldname2","text":"金币出售","name":"goldname2","color":"#ffffff"}}]},{"type":"Box","props":{"y":109,"x":230,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_bindCionNum","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":3,"x":23,"var":"goldname5","text":"绑定金币出售","name":"goldname5","color":"#ffffff"}}]},{"type":"Box","props":{"y":134,"x":123,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"but_GameGold","stateNum":2,"skin":"gameres/ui/check.png","selected":false,"height":20}},{"type":"Text","props":{"y":3,"x":22,"var":"goldname1","text":"元宝出售","name":"goldname1","color":"#ffffff"}}]},{"type":"Box","props":{"y":134,"x":230,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_bindGoldNum","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":3,"x":22,"var":"goldname6","text":"绑定元宝出售","name":"goldname6","color":"#ffffff"}}]},{"type":"Box","props":{"y":158,"x":123,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_gamePointNum","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":3,"x":22,"var":"goldname7","text":"游戏点出售","name":"goldname7","color":"#ffffff"}}]},{"type":"Box","props":{"y":158,"x":230,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_GameDiamond","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":4,"x":23,"var":"goldname4","text":"金刚石出售","name":"goldname4","color":"#ffffff"}}]},{"type":"Box","props":{"y":182,"x":123,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_GameGird","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":4,"x":22,"var":"goldname3","text":"灵符出售","name":"goldname3","color":"#ffffff"}}]}]}]}]};
		return MyShopMsgUI;
	})(View);
var MyStoreUI=(function(_super){
		function MyStoreUI(){
			
		    this.img_bg=null;
		    this.btn_close=null;
		    this.box_0=null;
		    this.text_num0=null;
		    this.ListItem=null;
		    this.box_1=null;
		    this.text_num1=null;
		    this.ListOne=null;
		    this.box_2=null;
		    this.text_num2=null;
		    this.ListTwo=null;
		    this.box_3=null;
		    this.box_4=null;
		    this.txt_storeName=null;
		    this.txt_storeTime=null;
		    this.txt_storeSelling=null;
		    this.txt_storeSelled=null;
		    this.txt_storeStorage=null;
		    this.position=null;
		    this.category=null;
		    this.btn_search=null;
		    this.sort=null;
		    this.type=null;
		    this.img_item=null;
		    this.btn_baitan=null;
		    this.btn_add=null;
		    this.type2=null;
		    this.type1=null;
		    this.ShopType=null;
		    this.price_low=null;
		    this.price_high=null;
		    this.input_search=null;
		    this.price=null;
		    this.btn_sell=null;
		    this.btn_sold=null;
		    this.btn_mydepot=null;
		    this.btn_diary=null;
		    this.btn_information=null;
		    this.btn_first=null;
		    this.btn_previous=null;
		    this.btn_next=null;
		    this.btn_last=null;

			MyStoreUI.__super.call(this);
		}

		CLASS$(MyStoreUI,'ui.MyStoreUI',_super);
		var __proto__=MyStoreUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MyStoreUI.uiView);

		}

		MyStoreUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":652,"var":"img_bg","skin":"gameres/png/personalstore_bg.png","height":439,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":-5,"x":581,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"close"}},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_0","name":"0","height":237},"child":[{"type":"Label","props":{"y":0,"x":533,"width":65,"valign":"middle","text":"取回物品","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":468,"width":65,"valign":"middle","text":"返回仓库","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":327,"width":141,"valign":"middle","text":"添加日期","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":266,"width":61,"valign":"middle","text":"物品类别","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":157,"width":109,"valign":"middle","text":"销售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":48,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":1,"width":47,"valign":"middle","height":37,"borderColor":"#B89458","align":"center"}},{"type":"Text","props":{"y":-50,"x":454,"var":"text_num0","text":"正在出售：1/1","name":"text_num0","color":"#e8a448","align":"left"}},{"type":"List","props":{"y":37,"x":1,"width":598,"var":"ListItem","name":"ListItem","height":198}}]},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_1","name":"1","height":237},"child":[{"type":"Label","props":{"y":0,"x":516,"width":83,"valign":"middle","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":375,"width":141,"valign":"middle","text":"出售时间","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":266,"width":109,"valign":"middle","text":"销售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":157,"width":109,"valign":"middle","text":"用户名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":48,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":1,"width":47,"valign":"middle","height":37,"borderColor":"#B89458","align":"center"}},{"type":"Text","props":{"y":-50,"x":454,"var":"text_num1","text":"已经出售：1/1","name":"text_num1","color":"#e8a448","align":"left"}},{"type":"List","props":{"y":37,"x":1,"width":598,"var":"ListOne","name":"ListOne","height":198}}]},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_2","name":"2","height":237},"child":[{"type":"Label","props":{"x":1,"width":47,"valign":"middle","height":37,"borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":48,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":157,"width":109,"valign":"middle","text":"销售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":266,"width":61,"valign":"middle","text":"物品类别","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":327,"width":141,"valign":"middle","text":"添加日期","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":468,"width":65,"valign":"middle","text":"放入店铺","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":533,"width":65,"valign":"middle","text":"取回物品","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Text","props":{"y":-50,"x":454,"var":"text_num2","text":"我的仓库：1/1","name":"text_num2","color":"#e8a448","align":"left"}},{"type":"List","props":{"y":37,"x":1,"width":598,"var":"ListTwo","name":"ListTwo","height":198}}]},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_3","name":"3","height":237}},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_4","name":"4","height":237},"child":[{"type":"Text","props":{"y":12,"x":23,"var":"txt_storeName","valign":"middle","text":"店铺名称：少林","name":"txt_storeName","color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":35,"x":23,"var":"txt_storeTime","valign":"middle","text":"开业时间：2019-02-12  09:58:54","name":"txt_storeTime","color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":58,"x":23,"var":"txt_storeSelling","valign":"middle","text":"正在出售：4","name":"txt_storeSelling","color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":80,"x":23,"var":"txt_storeSelled","valign":"middle","text":"已经出售：2","name":"txt_storeSelled","color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":103,"x":23,"var":"txt_storeStorage","valign":"middle","text":"我的仓库：3","name":"txt_storeStorage","color":"#e8a448","align":"left"}}]},{"type":"Text","props":{"y":24,"x":282,"text":"我的店铺","fontSize":22,"color":"#e8a448"}},{"type":"Text","props":{"y":354,"x":22,"text":"位置","color":"#c0c0c0"}},{"type":"Text","props":{"y":382,"x":22,"text":"类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":408,"x":22,"text":"价格范围","color":"#c0c0c0"}},{"type":"Text","props":{"y":355,"x":132,"text":"关键字","color":"#c0c0c0"}},{"type":"Text","props":{"y":382,"x":173,"text":"排序","color":"#c0c0c0"}},{"type":"Text","props":{"y":412,"x":181,"text":"之间","color":"#c0c0c0"}},{"type":"Text","props":{"y":412,"x":209,"text":"类型","color":"#c0c0c0"}},{"type":"Text","props":{"y":386,"x":490,"text":"类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":414,"x":388,"text":"价格","color":"#c0c0c0"}},{"type":"Text","props":{"y":383,"x":388,"text":"类型","color":"#c0c0c0"}},{"type":"Text","props":{"y":356,"x":388,"text":"位置","color":"#c0c0c0"}},{"type":"ComboBox","props":{"y":353,"x":51,"width":72,"visibleNum":10,"var":"position","skin":"gameres/ui/combobox.png","selectedIndex":0,"labels":"正在出售,已经出售,我的仓库","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":381,"x":76,"width":47,"visibleNum":10,"var":"category","skin":"gameres/ui/00094.png","selectedIndex":0,"labels":"所有,装饰,补给,强化,好友,限量,奇珍","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"Button","props":{"y":354,"x":254,"width":40,"var":"btn_search","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_search","labelColors":"#e8d4a8,#e8a448","label":"搜索","height":20}},{"type":"ComboBox","props":{"y":381,"x":200,"width":92,"visibleNum":10,"var":"sort","skin":"gameres/ui/combobox.png","selectedIndex":0,"labels":"价格从低到高,价格从高到低","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":408,"x":236,"width":56,"visibleNum":10,"var":"type","skin":"gameres/ui/00094.png","sizeGrid":"-79,23,-68,8","selectedIndex":0,"labels":"不限,元宝,游戏点,金币","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff","height":22}},{"type":"Image","props":{"y":357,"x":307,"var":"img_item","skin":"gameres/ui/00099.png","name":"img_item"}},{"type":"Button","props":{"y":409,"x":538,"width":65,"var":"btn_baitan","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_baitan","labelColors":"#e8d4a8,#e8a448","label":"开始摆摊","height":20}},{"type":"Button","props":{"y":408,"x":488,"width":40,"var":"btn_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_add","labelColors":"#e8d4a8,#e8a448","label":"增加","height":20}},{"type":"ComboBox","props":{"y":381,"x":519,"width":62,"visibleNum":10,"var":"type2","skin":"gameres/ui/00094.png","selectedIndex":0,"labels":"装饰,补给,强化,好友,限量,奇珍","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff","height":22}},{"type":"ComboBox","props":{"y":379,"x":416,"width":62,"visibleNum":10,"var":"type1","skin":"gameres/ui/00094.png","selectedIndex":0,"labels":"元宝,游戏点,金币","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff","height":22}},{"type":"ComboBox","props":{"y":352,"x":416,"width":62,"visibleNum":10,"var":"ShopType","skin":"gameres/ui/00094.png","selectedIndex":0,"labels":"店铺,仓库","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff","height":22}},{"type":"TextInput","props":{"y":407,"x":76,"width":47,"var":"price_low","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":407,"x":130,"width":47,"var":"price_high","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":353,"x":172,"width":77,"var":"input_search","promptColor":"#ffffff","name":"input_search","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":408,"x":416,"width":62,"var":"price","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"Button","props":{"y":72,"x":29,"width":90,"var":"btn_sell","stateNum":2,"skin":"gameres/ui/btn_ok.png","selected":true,"name":"0","labelColors":"#e8d4a8,#e8a448","label":"正在出售","height":34}},{"type":"Button","props":{"y":72,"x":117,"width":90,"var":"btn_sold","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"1","labelColors":"#e8d4a8,#e8a448","label":"已经出售","height":34}},{"type":"Button","props":{"y":72,"x":206,"width":90,"var":"btn_mydepot","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"2","labelColors":"#e8d4a8,#e8a448","label":"我的仓库","height":34}},{"type":"Button","props":{"y":72,"x":295,"width":90,"var":"btn_diary","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"3","labelColors":"#e8d4a8,#e8a448","label":"信息日记","height":34}},{"type":"Button","props":{"y":72,"x":384,"width":90,"var":"btn_information","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"4","labelColors":"#e8d4a8,#e8a448","label":"基本信息","height":34}},{"type":"Button","props":{"y":357,"x":482,"var":"btn_first","stateNum":3,"skin":"gameres/ui/btn_first.png","name":"btn_first"}},{"type":"Button","props":{"y":357,"x":512,"var":"btn_previous","stateNum":3,"skin":"gameres/ui/btn_previous.png","name":"btn_previous"}},{"type":"Button","props":{"y":357,"x":557,"var":"btn_next","stateNum":3,"skin":"gameres/ui/btn_next.png","name":"btn_next"}},{"type":"Button","props":{"y":357,"x":603,"var":"btn_last","stateNum":3,"skin":"gameres/ui/btn_last.png","name":"btn_last"}}]}]};
		return MyStoreUI;
	})(View);
var MyStoreItemUI=(function(_super){
		function MyStoreItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemName=null;
		    this.ItemPrice=null;
		    this.ItemType=null;
		    this.ItemTime=null;
		    this.ItemBack=null;
		    this.ItemRetrieve=null;

			MyStoreItemUI.__super.call(this);
		}

		CLASS$(MyStoreItemUI,'ui.MyStoreItemUI',_super);
		var __proto__=MyStoreItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MyStoreItemUI.uiView);

		}

		MyStoreItemUI.uiView={"type":"View","props":{"width":598,"height":37},"child":[{"type":"Image","props":{"width":598,"var":"img_bg","name":"img_bg","height":37},"child":[{"type":"Label","props":{"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"x":47,"width":109,"var":"ItemName","valign":"middle","overflow":"hidden","name":"ItemName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":156,"width":109,"var":"ItemPrice","valign":"middle","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":265,"width":61,"var":"ItemType","valign":"middle","overflow":"hidden","name":"ItemType","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":326,"width":141,"var":"ItemTime","valign":"middle","overflow":"hidden","name":"ItemTime","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":467,"width":65,"var":"ItemBack","valign":"middle","underline":true,"overflow":"hidden","name":"ItemBack","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":532,"width":65,"var":"ItemRetrieve","valign":"middle","underline":true,"overflow":"hidden","name":"ItemRetrieve","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return MyStoreItemUI;
	})(View);
var NewBagUI=(function(_super){
		function NewBagUI(){
			
		    this.Bagimg_bg=null;
		    this.Bag_List=null;
		    this.txt_wsize=null;
		    this.txt_BindGameGold=null;
		    this.txt_gameg=null;
		    this.txt_BindGold=null;
		    this.txt_gold=null;
		    this.but_re=null;
		    this.but_Close=null;

			NewBagUI.__super.call(this);
		}

		CLASS$(NewBagUI,'ui.NewBagUI',_super);
		var __proto__=NewBagUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewBagUI.uiView);

		}

		NewBagUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"y":48,"x":85,"width":442,"var":"Bagimg_bg","skin":"gameres/png/00018_new.png","height":508},"child":[{"type":"List","props":{"x":25,"width":395,"var":"Bag_List","top":60,"height":297}},{"type":"Text","props":{"y":29,"x":272,"var":"txt_wsize","text":"负重： 200/300","fontSize":16,"color":"#f9ac01"}},{"type":"TextArea","props":{"y":415,"x":276,"width":122,"visible":false,"var":"txt_BindGameGold","valign":"middle","text":"0","overflow":"hidden","mouseEnabled":false,"height":24,"fontSize":14,"font":"SimSun","color":"#f6f1f1","borderColor":"#51462e","bgColor":"#1e1a16","align":"left"}},{"type":"TextArea","props":{"y":388,"x":276,"width":122,"visible":false,"var":"txt_gameg","valign":"middle","text":"0","overflow":"hidden","mouseEnabled":false,"height":24,"fontSize":14,"font":"SimSun","color":"#f6f1f1","borderColor":"#51462e","bgColor":"#1e1a16","align":"left"}},{"type":"TextArea","props":{"y":415,"x":81,"width":122,"visible":false,"var":"txt_BindGold","valign":"middle","text":"0","overflow":"hidden","mouseEnabled":false,"height":24,"fontSize":14,"font":"SimSun","color":"#f6f1f1","borderColor":"#51462e","bgColor":"#1e1a16","align":"left"}},{"type":"TextArea","props":{"y":388,"x":81,"width":122,"visible":false,"var":"txt_gold","valign":"middle","text":"0","overflow":"hidden","mouseEnabled":false,"height":24,"fontSize":14,"font":"SimSun","color":"#f6f1f1","borderColor":"#51462e","bgColor":"#1e1a16","align":"left"}},{"type":"Image","props":{"y":391,"x":52,"visible":false,"skin":"gameres/ui/jiaoyi_icon.png"}},{"type":"Image","props":{"y":389,"x":240,"visible":false,"skin":"gameres/ui/bag_yuanbao .png"}},{"type":"Image","props":{"y":420,"x":52,"visible":false,"skin":"gameres/ui/bag_bj.png"}},{"type":"Image","props":{"y":420,"x":247,"visible":false,"skin":"gameres/ui/bag_zuanshi.png"}},{"type":"Button","props":{"y":460,"x":346,"width":83,"var":"but_re","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelSize":20,"labelPadding":"3","labelColors":"#ffe9aa,#ffe9aa","label":"刷新","height":39}},{"type":"Button","props":{"y":460,"x":14,"width":83,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","height":39}},{"type":"Button","props":{"y":460,"x":97,"width":83,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","height":39}},{"type":"Button","props":{"y":460,"x":180,"width":83,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","height":39}},{"type":"Button","props":{"y":460,"x":263,"width":83,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","height":39}},{"type":"Button","props":{"y":-7,"x":381,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close_new.png"}}]}]};
		return NewBagUI;
	})(View);
var NewHeroBagUI=(function(_super){
		function NewHeroBagUI(){
			
		    this.HeroBag_bg=null;
		    this.but_Close=null;
		    this.item_bg=null;
		    this.but_re=null;
		    this.HeroBag_List=null;

			NewHeroBagUI.__super.call(this);
		}

		CLASS$(NewHeroBagUI,'ui.NewHeroBagUI',_super);
		var __proto__=NewHeroBagUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewHeroBagUI.uiView);

		}

		NewHeroBagUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":56,"x":505,"var":"HeroBag_bg","skin":"gameres/png/herobag_bg.png"},"child":[{"type":"Button","props":{"y":-9,"x":237,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":55,"x":28,"width":255,"var":"item_bg","height":195}},{"type":"Button","props":{"y":293,"x":211,"width":70,"var":"but_re","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","label":"刷新","height":25}},{"type":"Text","props":{"y":20,"x":106,"text":"英雄包裹","strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#E8B656","align":"center"}},{"type":"List","props":{"y":55,"x":28,"width":255,"var":"HeroBag_List","height":195}}]}]};
		return NewHeroBagUI;
	})(View);
var NewItemInfoUI=(function(_super){
		function NewItemInfoUI(){
			
		    this.Item_bg=null;
		    this.m_List=null;
		    this.but_bg=null;
		    this.img_name=null;
		    this.img_logo=null;
		    this.img_butbg=null;
		    this.but_Close=null;
		    this.ItemDescTop=null;
		    this.ShopTextNum=null;
		    this.ShopTextPic=null;
		    this.ShopNum=null;
		    this.shop_minus=null;
		    this.shop_plus=null;
		    this.ShopPic=null;
		    this.change_side=null;
		    this.wear_txt=null;

			NewItemInfoUI.__super.call(this);
		}

		CLASS$(NewItemInfoUI,'ui.NewItemInfoUI',_super);
		var __proto__=NewItemInfoUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewItemInfoUI.uiView);

		}

		NewItemInfoUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":92,"x":255,"width":290,"var":"Item_bg","skin":"gameres/png/skill_bg.png","sizeGrid":"92,31,70,35","height":290},"child":[{"type":"Panel","props":{"y":77,"x":11,"width":263,"var":"m_List","name":"m_List","height":141}},{"type":"List","props":{"y":77,"x":11,"width":263,"height":141}},{"type":"Image","props":{"width":260,"var":"but_bg","left":11,"height":44,"bottom":13},"child":[{"type":"Button","props":{"y":9,"x":87,"width":85,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelSize":18,"labelColors":"#D7B581,#D7B581","label":"刷新刷新","height":25}},{"type":"Button","props":{"y":9,"x":0,"width":85,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelSize":18,"labelColors":"#D7B581,#D7B581","label":"刷新刷新","height":25}},{"type":"Button","props":{"y":9,"x":175,"width":85,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelSize":18,"labelColors":"#D7B581,#D7B581","label":"刷新刷新","height":25}}]},{"type":"Image","props":{"y":11,"x":11,"width":248,"var":"img_name","height":54},"child":[{"type":"Image","props":{"y":2,"x":2,"width":50,"var":"img_logo","height":50}}]},{"type":"Image","props":{"y":85,"x":9,"width":104,"var":"img_butbg","height":133}},{"type":"Button","props":{"var":"but_Close","top":-28,"stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"right":-26}},{"type":"Label","props":{"y":45,"x":70,"width":187,"var":"ItemDescTop","name":"ItemDescTop","height":14,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":160,"x":60,"visible":false,"var":"ShopTextNum","text":"购买数量：","name":"ShopTextNum","left":65,"fontSize":18,"color":"#ffffff","bottom":102}},{"type":"Label","props":{"y":193,"x":60,"width":90,"visible":false,"var":"ShopTextPic","text":"购买总价：","name":"ShopTextPic","left":65,"height":18,"fontSize":18,"color":"#ffffff","bottom":70}},{"type":"TextInput","props":{"y":158,"x":140,"width":80,"visible":false,"var":"ShopNum","text":"1","strokeColor":"#896b4d","stroke":1,"restrict":"0-9","name":"ShopNum","left":145,"fontSize":14,"editable":true,"color":"#efe9e9","bottom":100,"borderColor":"#51462e","bgColor":"#1e1a16","align":"center"},"child":[{"type":"Button","props":{"y":0,"x":-1,"width":22,"var":"shop_minus","stateNum":3,"skin":"gameres/ui/shop_minus.png","name":"shop_minus","height":22}},{"type":"Button","props":{"y":0,"x":58,"width":22,"var":"shop_plus","stateNum":3,"skin":"gameres/ui/shop_plus.png","name":"shop_plus","height":22}}]},{"type":"TextInput","props":{"y":191,"x":140,"width":80,"visible":false,"var":"ShopPic","text":"100","strokeColor":"#896b4d","stroke":1,"name":"ShopPic","left":145,"fontSize":14,"editable":false,"color":"#efe9e9","bottom":67,"borderColor":"#51462e","bgColor":"#1e1a16","align":"center"}},{"type":"Button","props":{"y":74,"x":228,"width":49,"visible":false,"var":"change_side","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"change_side","labelSize":16,"labelColors":"#D7B581,#D7B581","labelAlign":"center","label":"切换","height":32}},{"type":"Text","props":{"y":22,"x":207,"var":"wear_txt","text":"穿戴中","name":"wear_txt","fontSize":14,"color":"#01ff15"}}]}]};
		return NewItemInfoUI;
	})(View);
var NewMyShopUI=(function(_super){
		function NewMyShopUI(){
			
		    this.MyShop_bg=null;
		    this.Shop_List=null;
		    this.txt_Name=null;
		    this.txt_Gold=null;
		    this.txt_ShopName=null;
		    this.but_Close=null;
		    this.but_begin=null;
		    this.but_exit=null;

			NewMyShopUI.__super.call(this);
		}

		CLASS$(NewMyShopUI,'ui.NewMyShopUI',_super);
		var __proto__=NewMyShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewMyShopUI.uiView);

		}

		NewMyShopUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":39,"x":290,"var":"MyShop_bg","skin":"gameres/png/myshopwin.png"},"child":[{"type":"List","props":{"y":100,"x":19,"width":252,"var":"Shop_List","height":201}},{"type":"Text","props":{"y":322,"x":28,"text":"物品名称：","fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":349,"x":28,"text":"物品价格：","fontSize":16,"color":"#ffffff"}},{"type":"TextInput","props":{"y":319,"x":107,"width":145,"var":"txt_Name","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"TextInput","props":{"y":346,"x":107,"width":145,"var":"txt_Gold","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"TextInput","props":{"y":66,"x":101,"width":160,"var":"txt_ShopName","text":"TextInput","height":22,"fontSize":16,"color":"#ffffff"}},{"type":"Button","props":{"y":-4,"x":221,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":380,"x":63,"width":70,"var":"but_begin","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"摆摊","height":25}},{"type":"Button","props":{"y":380,"x":161,"width":70,"var":"but_exit","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"取消","height":25}},{"type":"Text","props":{"y":68,"x":25,"text":"摊位名称：","fontSize":16,"color":"#c7915d"}},{"type":"Text","props":{"y":26,"x":125,"text":"摆摊","strokeColor":"#000000","stroke":2,"fontSize":24,"font":"SimSun","color":"#ddaf52","bold":true,"align":"center"}}]}]};
		return NewMyShopUI;
	})(View);
var NewNpcShopUI=(function(_super){
		function NewNpcShopUI(){
			
		    this.NpcShop_bg=null;
		    this.win_gb=null;
		    this.M_List=null;
		    this.Npc_Repair=null;
		    this.but_Close=null;
		    this.Npc_Repair2=null;
		    this.Npc_Sell=null;
		    this.Npc_BuyBj=null;
		    this.Npc_Buy=null;
		    this.inf_bg=null;
		    this.inf_Close=null;
		    this.M_List2=null;
		    this.pageup=null;
		    this.pagedown=null;
		    this.pageNum=null;

			NewNpcShopUI.__super.call(this);
		}

		CLASS$(NewNpcShopUI,'ui.NewNpcShopUI',_super);
		var __proto__=NewNpcShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewNpcShopUI.uiView);

		}

		NewNpcShopUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":380,"var":"NpcShop_bg","skin":"gameres/png/npcitems.png","height":422},"child":[{"type":"Image","props":{"y":113,"x":22,"width":341,"var":"win_gb","height":229},"child":[{"type":"List","props":{"y":0,"x":0,"width":341,"var":"M_List","height":228}},{"type":"Button","props":{"y":321,"x":13,"width":70,"visible":false,"var":"Npc_Repair","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"0","labelColors":"#D7B581,#D7B581","label":"修理","height":25}},{"type":"Button","props":{"y":-116,"x":290,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":320,"x":95,"width":70,"visible":false,"var":"Npc_Repair2","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"1","labelColors":"#D7B581,#D7B581","label":"特殊修理","height":25}},{"type":"Button","props":{"y":334,"x":-94,"width":70,"visible":false,"var":"Npc_Sell","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"2","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","label":"出售","height":25}},{"type":"Button","props":{"y":256,"x":24,"width":70,"var":"Npc_BuyBj","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"4","labelColors":"#D7B581,#D7B581","label":"绑金购买","height":25}},{"type":"Button","props":{"y":256,"x":240,"width":70,"var":"Npc_Buy","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"3","labelColors":"#D7B581,#D7B581","label":"金币购买","height":25}},{"type":"Image","props":{"y":-59,"x":340,"width":149,"visible":false,"var":"inf_bg","skin":"gameres/png/npcitems2.png","height":292},"child":[{"type":"Button","props":{"y":-11,"x":112,"var":"inf_Close","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.6,"scaleX":0.6}},{"type":"List","props":{"y":25,"x":14,"width":103,"var":"M_List2","height":263}},{"type":"Button","props":{"y":61,"x":114,"var":"pageup","stateNum":2,"skin":"gameres/ui/pageup.png","name":"pageup"}},{"type":"Button","props":{"y":191,"x":114,"var":"pagedown","stateNum":2,"skin":"gameres/ui/pagedown.png","name":"pagedown"}},{"type":"Text","props":{"y":108,"x":123,"text":"第","fontSize":16,"color":"#c2ab0e","bold":true}},{"type":"Text","props":{"y":158,"x":123,"text":"页","fontSize":16,"color":"#c2ab0e","bold":true}},{"type":"Text","props":{"y":132,"x":127,"var":"pageNum","text":"3","name":"pageNum","fontSize":16,"color":"#28ff00"}}]}]},{"type":"Text","props":{"y":66,"x":43,"text":"物品名称","fontSize":18,"color":"#c2ab0e","bold":false}},{"type":"Text","props":{"y":66,"x":195,"text":"物品价格","fontSize":18,"color":"#c2ab0e"}}]}]};
		return NewNpcShopUI;
	})(View);
var NewNpcWinUI=(function(_super){
		function NewNpcWinUI(){
			
		    this.Npc_bg=null;
		    this.Show_gb=null;
		    this.but_Close=null;

			NewNpcWinUI.__super.call(this);
		}

		CLASS$(NewNpcWinUI,'ui.NewNpcWinUI',_super);
		var __proto__=NewNpcWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewNpcWinUI.uiView);

		}

		NewNpcWinUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"Npc_bg","skin":"gameres/png/npc_di.png"},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":560,"var":"Show_gb","name":"Show_gb","height":215}},{"type":"Image","props":{"y":0,"x":0,"width":0,"height":0}},{"type":"Button","props":{"y":-20,"x":499,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}}]}]};
		return NewNpcWinUI;
	})(View);
var NewSaleShopUI=(function(_super){
		function NewSaleShopUI(){
			
		    this.NpcShop_bg=null;
		    this.win_gb=null;
		    this.M_List=null;
		    this.but_Close=null;
		    this.Npc_Buy=null;
		    this.inf_bg=null;
		    this.inf_Close=null;
		    this.M_List2=null;
		    this.pageup=null;
		    this.pagedown=null;
		    this.pageNum=null;

			NewSaleShopUI.__super.call(this);
		}

		CLASS$(NewSaleShopUI,'ui.NewSaleShopUI',_super);
		var __proto__=NewSaleShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewSaleShopUI.uiView);

		}

		NewSaleShopUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":380,"var":"NpcShop_bg","skin":"gameres/png/npcitems.png","height":422},"child":[{"type":"Image","props":{"y":113,"x":22,"width":341,"var":"win_gb","height":229},"child":[{"type":"List","props":{"y":0,"x":0,"width":341,"var":"M_List","height":228}},{"type":"Button","props":{"y":-116,"x":285,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":256,"x":240,"width":70,"var":"Npc_Buy","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"3","labelColors":"#D7B581,#D7B581","label":"购  买","height":25}},{"type":"Image","props":{"y":-78,"x":349,"width":340,"visible":false,"var":"inf_bg","skin":"gameres/png/npcitems2.png","height":381},"child":[{"type":"Button","props":{"y":-11,"x":301,"var":"inf_Close","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.6,"scaleX":0.6}},{"type":"List","props":{"y":47,"x":14,"width":282,"var":"M_List2","height":314}},{"type":"Button","props":{"y":68,"x":296,"var":"pageup","stateNum":2,"skin":"gameres/ui/pageup.png","name":"pageup"}},{"type":"Button","props":{"y":198,"x":296,"var":"pagedown","stateNum":2,"skin":"gameres/ui/pagedown.png","name":"pagedown"}},{"type":"Text","props":{"y":115,"x":305,"text":"第","fontSize":16,"color":"#c2ab0e","bold":true}},{"type":"Text","props":{"y":165,"x":305,"text":"页","fontSize":16,"color":"#c2ab0e","bold":true}},{"type":"Text","props":{"y":139,"x":309,"var":"pageNum","text":"3","name":"pageNum","fontSize":16,"color":"#28ff00"}},{"type":"Text","props":{"y":20,"x":14,"text":"物品名称","fontSize":18,"color":"#c2ab0e","bold":false}},{"type":"Text","props":{"y":20,"x":166,"text":"物品价格","fontSize":18,"color":"#c2ab0e"}}]}]},{"type":"Text","props":{"y":66,"x":43,"text":"物品名称","fontSize":18,"color":"#c2ab0e","bold":false}},{"type":"Text","props":{"y":66,"x":195,"text":"物品价格","fontSize":18,"color":"#c2ab0e"}}]}]};
		return NewSaleShopUI;
	})(View);
var NewStoreRomUI=(function(_super){
		function NewStoreRomUI(){
			
		    this.Store_bg=null;
		    this.m_List=null;
		    this.but_Close=null;

			NewStoreRomUI.__super.call(this);
		}

		CLASS$(NewStoreRomUI,'ui.NewStoreRomUI',_super);
		var __proto__=NewStoreRomUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewStoreRomUI.uiView);

		}

		NewStoreRomUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":14,"x":515,"width":350,"var":"Store_bg","skin":"gameres/png/store_bg.png","sizeGrid":"60,20,20,20","height":426},"child":[{"type":"List","props":{"y":43,"x":15,"width":321,"var":"m_List","vScrollBarSkin":"gameres/ui/vscroll.png","height":357}},{"type":"Button","props":{"y":-10,"x":297,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8}}]}]};
		return NewStoreRomUI;
	})(View);
var NpcShopUI=(function(_super){
		function NpcShopUI(){
			

			NpcShopUI.__super.call(this);
		}

		CLASS$(NpcShopUI,'ui.NpcShopUI',_super);
		var __proto__=NpcShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NpcShopUI.uiView);

		}

		NpcShopUI.uiView={"type":"View","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":10,"x":88,"skin":"gameres/png/shopping_bg1.png","sizeGrid":"60,60,110,60","scaleY":0.83,"scaleX":0.83,"name":"img_bg"}},{"type":"Button","props":{"y":76,"x":108,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select0.png","name":"btn_zhuagnshi","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":76,"x":198,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select1.png","name":"btn_buji","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":76,"x":288,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select2.png","name":"btn_qianghua","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":76,"x":378,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select3.png","name":"btn_haoyou","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":76,"x":468,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select4.png","name":"btn_xianliang","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":425,"x":270,"width":28,"stateNum":3,"skin":"gameres/ui/btn_up.png","name":"btn_last","labelFont":"SimSun","height":28}},{"type":"Button","props":{"y":425,"x":376,"width":28,"stateNum":3,"skin":"gameres/ui/btn_down.png","name":"btn_next","labelFont":"SimSun","height":28}},{"type":"Button","props":{"y":419,"x":436,"width":92,"stateNum":2,"skin":"gameres/ui/btn_select5.png","name":"btn_chongzhi","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","height":43}},{"type":"Button","props":{"y":7,"x":726,"stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit"}},{"type":"Panel","props":{"y":236,"x":261,"width":200,"name":"panel_gift","height":140},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"name":"img_select_img","height":120,"anchorY":0,"anchorX":0}},{"type":"Button","props":{"y":10,"x":160,"name":"btn_return1"}},{"type":"TextInput","props":{"y":63,"x":24,"width":100,"text":"0","name":"input_tar_name","height":25,"color":"#ffffff"}},{"type":"Text","props":{"y":43,"x":21,"text":"请输入对方名字:","fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":63,"x":135,"name":"btn_submit"}}]},{"type":"Image","props":{"y":122,"x":577,"width":56,"skin":"gameres/ui/goods.png","name":"goods_1","height":56}},{"type":"Image","props":{"y":191,"x":576,"width":56,"skin":"gameres/ui/goods.png","name":"goods_2","height":56}},{"type":"Image","props":{"y":261,"x":577,"width":56,"skin":"gameres/ui/goods.png","name":"goods_3","height":56}},{"type":"Image","props":{"y":330,"x":577,"width":56,"skin":"gameres/ui/goods.png","name":"goods_4","height":56}},{"type":"Image","props":{"y":399,"x":577,"width":56,"skin":"gameres/ui/goods.png","name":"goods_5","height":56}},{"type":"Image","props":{"y":116,"x":570,"width":205,"name":"pane_qz_1","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":185,"x":570,"width":205,"name":"pane_qz_2","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":254,"x":570,"width":205,"name":"pane_qz_3","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":323,"x":570,"width":205,"name":"pane_qz_4","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":392,"x":570,"width":205,"name":"pane_qz_5","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":120,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_1","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":120,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_2","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":178,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_3","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":178,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_4","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":236,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_5","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":236,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_6","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":294,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_7","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":294,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_8","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":352,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_9","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":352,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_10","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":185,"x":573,"width":205,"skin":"gameres/png/001.png","name":"bg_fengexian"}},{"type":"Image","props":{"y":254,"x":573,"width":205,"skin":"gameres/png/001.png","name":"bg_fengexian","height":1}},{"type":"Image","props":{"y":323,"x":573,"width":205,"skin":"gameres/png/001.png","name":"bg_fengexian"}},{"type":"Image","props":{"y":392,"x":573,"width":205,"skin":"gameres/png/001.png","name":"bg_fengexian","height":1}},{"type":"Image","props":{"y":514,"x":356,"name":"page_bg"}},{"type":"Text","props":{"y":425,"x":305,"width":66,"valign":"middle","text":"text","strokeColor":"#000000","stroke":2,"name":"lbl_page","height":28,"fontSize":16,"color":"#F6D9A1","align":"center"}}]};
		return NpcShopUI;
	})(View);
var PersonalStoreUI=(function(_super){
		function PersonalStoreUI(){
			
		    this.img_bg=null;
		    this.box_0=null;
		    this.store_num=null;
		    this.input_search=null;
		    this.searchType=null;
		    this.sort=null;
		    this.btn_search=null;
		    this.list_shop=null;
		    this.btn_myshop=null;
		    this.box_1=null;
		    this.item_num=null;
		    this.ItemSearch=null;
		    this.btn_itemsearch=null;
		    this.ItemType=null;
		    this.ItemSort=null;
		    this.price_low=null;
		    this.price_high=null;
		    this.pricetype=null;
		    this.list_item=null;
		    this.btn_allstore=null;
		    this.btn_buyitem=null;
		    this.btn_close=null;
		    this.btn_first=null;
		    this.btn_previous=null;
		    this.btn_next=null;
		    this.btn_last=null;

			PersonalStoreUI.__super.call(this);
		}

		CLASS$(PersonalStoreUI,'ui.PersonalStoreUI',_super);
		var __proto__=PersonalStoreUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PersonalStoreUI.uiView);

		}

		PersonalStoreUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":652,"var":"img_bg","skin":"gameres/png/personalstore_bg.png","name":"img_bg","height":439,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"y":108,"x":29,"width":600,"var":"box_0","name":"0","height":237},"child":[{"type":"Label","props":{"y":1,"x":2,"width":109,"valign":"middle","text":"店铺名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":111,"width":109,"valign":"middle","text":"店主名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":220,"width":139,"valign":"middle","text":"开业时间","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":359,"width":60,"valign":"middle","text":"物品总数","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":419,"width":60,"valign":"middle","text":"销售总数","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":479,"width":60,"valign":"middle","text":"状态","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":539,"width":60,"valign":"middle","text":"关注度","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Text","props":{"y":250,"x":-1,"text":"关键字","color":"#c0c0c0"}},{"type":"Text","props":{"y":276,"x":-1,"text":"搜素类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":300,"x":-1,"text":"排序","color":"#c0c0c0"}},{"type":"Text","props":{"y":-49,"x":451,"text":"所有商铺","color":"#e8a448"}},{"type":"Text","props":{"y":-48,"x":505,"var":"store_num","text":"1/1","name":"store_num","color":"#e8a448"}},{"type":"TextInput","props":{"y":244,"x":57,"width":107,"var":"input_search","promptColor":"#ffffff","name":"input_search","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"ComboBox","props":{"y":270,"x":57,"visibleNum":10,"var":"searchType","skin":"gameres/ui/personalstore_combobox.png","selectedIndex":0,"name":"searchType","labels":"店铺名称,店主名称","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":297,"x":57,"width":128,"visibleNum":10,"var":"sort","skin":"gameres/ui/personalstore_combobox.png","selectedIndex":0,"name":"sort","labels":"物品总数从高到低,物品总数从低到高,销量从高到低,销量从低到高,关注度从高到低,关注度从低到高","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"Button","props":{"y":245,"x":173,"width":40,"var":"btn_search","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_search","labelColors":"#e8d4a8,#e8a448","label":"搜索","height":20}},{"type":"List","props":{"y":38,"x":2,"width":598,"var":"list_shop","name":"list_shop","height":197}},{"type":"Button","props":{"y":256,"x":548,"var":"btn_myshop","skin":"gameres/ui/personalstore_myshop.png","name":"myshop"}}]},{"type":"Box","props":{"y":108,"x":29,"width":600,"var":"box_1","mouseThrough":true,"height":237},"child":[{"type":"Label","props":{"y":-1,"x":2,"width":47,"valign":"middle","height":37,"borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":-1,"x":49,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":158,"width":109,"valign":"middle","text":"销售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":267,"width":109,"valign":"middle","text":"所在店铺","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":376,"width":109,"valign":"middle","text":"店主名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":485,"width":61,"valign":"middle","text":"物品类别","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":546,"width":53,"valign":"middle","text":"购买","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Text","props":{"y":247,"x":0,"text":"关键字","color":"#c0c0c0"}},{"type":"Text","props":{"y":-49,"x":454,"text":"购买物品","color":"#e8a448"}},{"type":"Text","props":{"y":275,"x":0,"text":"搜索类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":273,"x":109,"text":"排序","color":"#c0c0c0"}},{"type":"Text","props":{"y":304,"x":0,"text":"价格范围","color":"#c0c0c0"}},{"type":"Text","props":{"y":304,"x":159,"text":"之间","color":"#c0c0c0"}},{"type":"Text","props":{"y":304,"x":190,"text":"货币类型","color":"#c0c0c0"}},{"type":"Text","props":{"y":-49,"x":507,"var":"item_num","text":"1/2","name":"item_num","color":"#e8a448"}},{"type":"TextInput","props":{"y":244,"x":53,"width":82,"var":"ItemSearch","promptColor":"#ffffff","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"Button","props":{"y":245,"x":140,"width":40,"var":"btn_itemsearch","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_itemsearch","labelColors":"#e8d4a8,#e8a448","label":"搜索","height":20}},{"type":"ComboBox","props":{"y":271,"x":53,"visibleNum":10,"var":"ItemType","skin":"gameres/ui/personalstore_00094.png","selectedIndex":0,"labels":"所有,装饰,补给,强化,好友,限量,奇珍","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":271,"x":140,"width":92,"visibleNum":10,"var":"ItemSort","skin":"gameres/ui/personalstore_combobox.png","selectedIndex":0,"labels":"价格从低到高,价格从高到低","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"TextInput","props":{"y":299,"x":53,"width":47,"var":"price_low","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":299,"x":107,"width":47,"var":"price_high","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"ComboBox","props":{"y":299,"x":242,"width":56,"visibleNum":10,"var":"pricetype","skin":"gameres/ui/personalstore_00094.png","sizeGrid":"-79,23,-68,8","selectedIndex":0,"labels":"不限,元宝,游戏点,金币","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"List","props":{"y":36,"x":2,"width":598,"var":"list_item","name":"list_item","height":197}}]},{"type":"Text","props":{"y":25,"x":282,"text":"个人商店","fontSize":22,"color":"#e8a448"}},{"type":"Button","props":{"y":73,"x":30,"width":90,"var":"btn_allstore","stateNum":2,"skin":"gameres/ui/btn_ok.png","selected":true,"name":"btn_allstore","labelColors":"#e8d4a8,#e8a448","label":"所有商铺","height":34}},{"type":"Button","props":{"y":73,"x":119,"width":90,"var":"btn_buyitem","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"buyitem","labelColors":"#e8d4a8,#e8a448","label":"购买物品","height":34}},{"type":"Button","props":{"y":-4,"x":580,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_close"}},{"type":"Button","props":{"y":364,"x":406,"var":"btn_first","stateNum":3,"skin":"gameres/ui/personalstore_first.png","name":"btn_first"}},{"type":"Button","props":{"y":364,"x":442,"var":"btn_previous","stateNum":3,"skin":"gameres/ui/personalstore_previous.png","name":"btn_previous"}},{"type":"Button","props":{"y":364,"x":492,"var":"btn_next","stateNum":3,"skin":"gameres/ui/personalstore_next.png","name":"btn_next"}},{"type":"Button","props":{"y":364,"x":542,"var":"btn_last","skin":"gameres/ui/personalstore_last.png","name":"btn_last"}}]}]};
		return PersonalStoreUI;
	})(View);
var PerStoreItemUI=(function(_super){
		function PerStoreItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemName=null;
		    this.ItemPrice=null;
		    this.ShopName=null;
		    this.ShopkeeperName=null;
		    this.ItemType=null;
		    this.ItemBy=null;

			PerStoreItemUI.__super.call(this);
		}

		CLASS$(PerStoreItemUI,'ui.PerStoreItemUI',_super);
		var __proto__=PerStoreItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PerStoreItemUI.uiView);

		}

		PerStoreItemUI.uiView={"type":"View","props":{"width":598,"height":37},"child":[{"type":"Image","props":{"y":0,"x":0,"width":598,"var":"img_bg","height":37},"child":[{"type":"Label","props":{"y":0,"x":0,"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"y":0,"x":47,"width":109,"var":"ItemName","valign":"middle","text":"战神手镯","overflow":"hidden","name":"ItemName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":156,"width":109,"var":"ItemPrice","valign":"middle","text":"123元宝","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":265,"width":109,"var":"ShopName","valign":"middle","underline":true,"text":"123456","overflow":"hidden","name":"ShopName","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":374,"width":109,"var":"ShopkeeperName","valign":"middle","text":"是啥","overflow":"hidden","name":"ShopkeeperName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":483,"width":61,"var":"ItemType","valign":"middle","text":"装饰","overflow":"hidden","name":"ItemType","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":544,"width":53,"var":"ItemBy","valign":"middle","underline":true,"text":"购买","overflow":"hidden","name":"ItemBy","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return PerStoreItemUI;
	})(View);
var PerStore_shopUI=(function(_super){
		function PerStore_shopUI(){
			
		    this.img_bg=null;
		    this.lable_shopName=null;
		    this.lable_name=null;
		    this.lable_time=null;
		    this.lable_itemNum=null;
		    this.lable_num=null;
		    this.lable_state=null;
		    this.label_attention=null;

			PerStore_shopUI.__super.call(this);
		}

		CLASS$(PerStore_shopUI,'ui.PerStore_shopUI',_super);
		var __proto__=PerStore_shopUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PerStore_shopUI.uiView);

		}

		PerStore_shopUI.uiView={"type":"View","props":{"width":598,"height":25},"child":[{"type":"Image","props":{"y":0,"x":0,"width":598,"var":"img_bg","height":26},"child":[{"type":"Label","props":{"y":1,"x":0,"width":109,"var":"lable_shopName","valign":"middle","underline":true,"text":"老司机","overflow":"hidden","name":"lable_shopName","height":25,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":109,"width":109,"var":"lable_name","valign":"middle","text":"橡胶路飞","overflow":"hidden","name":"lable_name","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":218,"width":139,"var":"lable_time","valign":"middle","text":"2018-12-14 17:31:04","name":"lable_time","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":357,"width":60,"var":"lable_itemNum","valign":"middle","text":"5","overflow":"hidden","name":"lable_itemNum","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":417,"width":60,"var":"lable_num","valign":"middle","text":"0","overflow":"hidden","name":"lable_num","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":477,"width":60,"var":"lable_state","valign":"middle","text":"在线","overflow":"hidden","name":"lable_state","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":537,"width":60,"var":"label_attention","valign":"middle","text":"139","overflow":"hidden","name":"label_attention","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}}]}]};
		return PerStore_shopUI;
	})(View);
var RealVerificationUI=(function(_super){
		function RealVerificationUI(){
			
		    this.ti_name=null;
		    this.ti_id=null;
		    this.btn_ok=null;

			RealVerificationUI.__super.call(this);
		}

		CLASS$(RealVerificationUI,'ui.RealVerificationUI',_super);
		var __proto__=RealVerificationUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RealVerificationUI.uiView);

		}

		RealVerificationUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"width":491,"skin":"gameres/png/imageLogin.png","name":"imageLogin","height":353,"centerY":-9,"centerX":-3},"child":[{"type":"TextInput","props":{"y":116,"x":199,"width":217,"var":"ti_name","valign":"middle","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","padding":"0,0,0,10","height":33,"fontSize":20,"color":"#ffffff"}},{"type":"TextInput","props":{"y":185,"x":197,"width":217,"var":"ti_id","valign":"middle","type":"text","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","restrict":"0-9a-zA-Z","padding":"0,0,0,10","height":33,"fontSize":20,"color":"#ffffff"}},{"type":"Button","props":{"y":258,"x":171,"width":125,"var":"btn_ok","stateNum":2,"skin":"gameres/ui/chat_btn_select.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffffff","label":"确定","height":51}}]},{"type":"Label","props":{"y":138,"x":161,"text":"姓名：","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":43,"x":259,"text":"实名验证","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":207,"x":141,"text":"身份证：","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ffffff"}}]};
		return RealVerificationUI;
	})(View);
var rechargeUI=(function(_super){
		function rechargeUI(){
			
		    this.img_bg=null;
		    this.text0=null;
		    this.text1=null;
		    this.text2=null;
		    this.text3=null;
		    this.text4=null;
		    this.text5=null;
		    this.text6=null;
		    this.text7=null;
		    this.money0=null;
		    this.money1=null;
		    this.money2=null;
		    this.money3=null;
		    this.money4=null;
		    this.money5=null;
		    this.money6=null;
		    this.money7=null;
		    this.price0=null;
		    this.price1=null;
		    this.price2=null;
		    this.price3=null;
		    this.price4=null;
		    this.price5=null;
		    this.price6=null;
		    this.price7=null;
		    this.btn_close=null;
		    this.pay_Panel=null;
		    this.product_name2=null;
		    this.lb_yuanbao=null;
		    this.product_name=null;
		    this.lb_money=null;
		    this.btn_wx=null;
		    this.btn_zfb=null;
		    this.btn_closePay=null;
		    this.custom=null;
		    this.custom_value=null;
		    this.custom_pay_ok=null;
		    this.custom_pay_cel=null;

			rechargeUI.__super.call(this);
		}

		CLASS$(rechargeUI,'ui.rechargeUI',_super);
		var __proto__=rechargeUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rechargeUI.uiView);

		}

		rechargeUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"width":694,"var":"img_bg","skin":"gameres/png/recharge_bg3.png","name":"img_bg","height":427,"centerY":0,"centerX":0},"child":[{"type":"Text","props":{"y":153,"x":40,"width":120,"var":"text0","valign":"middle","text":"1","strokeColor":"#000000","stroke":2,"name":"text0","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":153,"x":205,"width":120,"var":"text1","valign":"middle","text":"2","strokeColor":"#000000","stroke":2,"name":"text1","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":153,"x":368,"width":120,"var":"text2","valign":"middle","text":"3","strokeColor":"#000000","stroke":2,"name":"text2","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":153,"x":533,"width":120,"var":"text3","valign":"middle","text":"4","strokeColor":"#000000","stroke":2,"name":"text3","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":331,"x":40,"width":120,"var":"text4","valign":"middle","text":"5","strokeColor":"#000000","stroke":2,"name":"text4","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":331,"x":205,"width":120,"var":"text5","valign":"middle","text":"6","strokeColor":"#000000","stroke":2,"name":"text5","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":331,"x":368,"width":120,"var":"text6","valign":"middle","text":"7","strokeColor":"#000000","stroke":2,"name":"text6","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":331,"x":533,"width":120,"var":"text7","valign":"middle","text":"其他","strokeColor":"#000000","stroke":2,"name":"text7","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":194,"x":46,"width":110,"var":"money0","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":194,"x":211,"width":110,"var":"money1","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":194,"x":376,"width":110,"var":"money2","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":194,"x":541,"width":110,"var":"money3","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":372,"x":46,"width":110,"var":"money4","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":372,"x":211,"width":110,"var":"money5","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":372,"x":376,"width":110,"var":"money6","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":372,"x":541,"width":110,"var":"money7","text":"其他","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Button","props":{"y":57,"x":21,"width":155,"var":"price0","stateNum":3,"name":"price0","height":172}},{"type":"Button","props":{"y":57,"x":187,"width":155,"var":"price1","stateNum":3,"name":"price1","height":172}},{"type":"Button","props":{"y":57,"x":353,"width":155,"var":"price2","stateNum":3,"name":"price2","height":172}},{"type":"Button","props":{"y":57,"x":517,"width":155,"var":"price3","stateNum":3,"name":"price3","height":172}},{"type":"Button","props":{"y":235,"x":21,"width":155,"var":"price4","stateNum":3,"name":"price4","height":172}},{"type":"Button","props":{"y":235,"x":187,"width":155,"var":"price5","stateNum":3,"name":"price5","height":172}},{"type":"Button","props":{"y":235,"x":353,"width":155,"var":"price6","stateNum":3,"name":"price6","height":172}},{"type":"Button","props":{"y":236,"x":517,"width":155,"var":"price7","stateNum":3,"name":"price7","labelSize":20,"labelColors":"#f1c055","height":172}},{"type":"Button","props":{"y":-21,"x":634,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_close"}},{"type":"Image","props":{"y":65,"x":34,"visible":false,"skin":"gameres/png/cm.png"}},{"type":"Image","props":{"width":498,"visible":false,"var":"pay_Panel","skin":"gameres/png/pay_bg.png","mouseThrough":true,"height":314,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":90,"x":135,"text":"数量：","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310"}},{"type":"Label","props":{"y":123,"x":135,"text":"金额：","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310"}},{"type":"Label","props":{"y":156,"x":99,"text":"商品名称：","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310"}},{"type":"Label","props":{"y":90,"x":301,"width":81,"var":"product_name2","text":"元宝","strokeColor":"#000000","stroke":3,"height":18,"fontSize":18,"color":"#ff8310","align":"right"}},{"type":"Label","props":{"y":123,"x":364,"text":"元","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310"}},{"type":"Label","props":{"top":29,"text":"确认订单","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310","centerX":0}},{"type":"Label","props":{"y":90,"x":200,"var":"lb_yuanbao","text":"1000","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":156,"x":200,"var":"product_name","text":"元宝","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":123,"x":200,"var":"lb_money","text":"1000","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":214,"x":54,"var":"btn_wx","stateNum":1,"skin":"gameres/ui/pay_wx.png"}},{"type":"Button","props":{"y":214,"x":252,"var":"btn_zfb","stateNum":1,"skin":"gameres/ui/pay_zfb.png"}},{"type":"Button","props":{"y":20,"x":445,"width":30,"var":"btn_closePay","stateNum":2,"skin":"gameres/ui/btn_close.png","height":30}}]},{"type":"Image","props":{"visible":false,"var":"custom","skin":"gameres/png/custom_pay_bg.png","centerY":0,"centerX":0},"child":[{"type":"TextInput","props":{"y":99,"x":42,"width":237,"var":"custom_value","type":"text","text":"1","restrict":"0-9","maxChars":5,"height":39,"fontSize":22,"color":"#ffffff"}},{"type":"Button","props":{"y":164,"x":217,"width":105,"var":"custom_pay_ok","stateNum":1,"skin":"gameres/ui/custom_pay_ok.png","height":42}},{"type":"Button","props":{"y":164,"x":40,"width":105,"var":"custom_pay_cel","stateNum":1,"skin":"gameres/ui/custom_pay_cel.png","height":42}}]}]}]};
		return rechargeUI;
	})(View);
var RedPakUI=(function(_super){
		function RedPakUI(){
			
		    this.RedWindows=null;
		    this.but_openSend=null;
		    this.but_close2=null;
		    this.but_close=null;
		    this.Red_List=null;
		    this.lb_listCount=null;
		    this.combox_index=null;

			RedPakUI.__super.call(this);
		}

		CLASS$(RedPakUI,'ui.RedPakUI',_super);
		var __proto__=RedPakUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RedPakUI.uiView);

		}

		RedPakUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"var":"RedWindows","skin":"gameres/png/redpak_bg.png","centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":365,"x":78,"width":70,"var":"but_openSend","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"发红包","height":25}},{"type":"Button","props":{"y":365,"x":332,"width":70,"var":"but_close2","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"退 出","height":25}},{"type":"Button","props":{"y":-5,"x":445,"var":"but_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"List","props":{"y":96,"x":22,"width":468,"var":"Red_List","vScrollBarSkin":"gameres/ui/vscroll.png","repeatY":6,"repeatX":1,"height":235},"child":[{"type":"Box","props":{"width":452,"renderType":"render","name":"render","height":60}},{"type":"VScrollBar","props":{"y":3,"x":345,"name":"scrollBar"}}]},{"type":"Label","props":{"y":63,"x":54,"text":"收到红包：","fontSize":20,"color":"#e7dfdf"}},{"type":"Label","props":{"y":63,"x":254,"underline":true,"text":"红包范围：","fontSize":20,"color":"#e7dfdf"}},{"type":"Label","props":{"y":63,"x":158,"var":"lb_listCount","text":"0","fontSize":20,"color":"#e7dfdf"}},{"type":"ComboBox","props":{"y":74,"x":348,"width":84,"var":"combox_index","skin":"gameres/ui/redpak_combobox.png","sizeGrid":"4,20,4,4","selectedIndex":3,"pivotY":12,"pivotX":3,"labels":"全部,行会,队伍,国家,全服,好友","labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","itemSize":18,"height":25}},{"type":"Text","props":{"y":25,"x":232,"text":"红包","strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#ddaf52","align":"center"}}]}]};
		return RedPakUI;
	})(View);
var RegSceneUI=(function(_super){
		function RegSceneUI(){
			

			RegSceneUI.__super.call(this);
		}

		CLASS$(RegSceneUI,'ui.RegSceneUI',_super);
		var __proto__=RegSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RegSceneUI.uiView);

		}

		RegSceneUI.uiView={"type":"View","props":{"width":870,"scaleY":0.7,"scaleX":0.7,"name":"regpanel","height":500},"child":[{"type":"Image","props":{"y":124,"width":680,"pivotY":0,"name":"bg","mouseThrough":false,"left":299,"height":508},"child":[{"type":"TextInput","props":{"y":83,"x":173,"width":202,"strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#e2dddd","prompt":"请输入用户名....","name":"username","maxChars":10,"height":48,"fontSize":18,"font":"SimSun","color":"#fbf8f8"}},{"type":"TextInput","props":{"y":212,"x":173,"width":202,"type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#e2dddd","prompt":"请输入密码...","name":"password","maxChars":10,"height":48,"fontSize":18,"font":"SimSun","color":"#fbf8f8"}},{"type":"TextInput","props":{"y":148,"x":173,"width":202,"strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","promptColor":"#e2dddd","prompt":"请输入邮箱...","name":"useremail","maxChars":30,"height":48,"fontSize":18,"font":"SimSun","color":"#fbf8f8"}},{"type":"TextInput","props":{"y":277,"x":173,"width":202,"type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#e2dddd","prompt":"请再次输入密码...","name":"confirmpassword","maxChars":10,"height":48,"fontSize":18,"font":"SimSun","color":"#fbf8f8"}},{"type":"Button","props":{"y":340,"x":30,"width":175,"stateNum":2,"sizeGrid":"4,4,4,4","name":"btn_reg","labelStrokeColor":"#000000","labelStroke":2,"height":65}},{"type":"Button","props":{"y":340,"x":210,"width":175,"stateNum":2,"sizeGrid":"4,4,4,4","name":"btn_reback","labelStrokeColor":"#000000","labelStroke":2,"height":65}},{"type":"TextArea","props":{"y":85,"x":398,"width":214,"type":"text","text":"您的帐号名称可以包括：字符、数字的组合。帐号名称长度必须为4或以上。请仔细输入创建帐号所需的信息。您的帐号可以登录游戏及我们的网站，以取得一些相关信息。建议您的登录帐号不要和游戏中的角色名相同，以确保您的密码不会被暴力破解。","strokeColor":"#000000","stroke":2,"leading":5,"height":316,"fontSize":14,"editable":false,"color":"#ffffff","bgColor":"#090a05"}}]}]};
		return RegSceneUI;
	})(View);
var reLinkUI=(function(_super){
		function reLinkUI(){
			
		    this.relink_bg=null;
		    this.backLogin=null;
		    this.relink_ok=null;

			reLinkUI.__super.call(this);
		}

		CLASS$(reLinkUI,'ui.reLinkUI',_super);
		var __proto__=reLinkUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(reLinkUI.uiView);

		}

		reLinkUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"y":181,"x":373,"width":389,"var":"relink_bg","skin":"gameres/png/fenghao_res.png","name":"relink_bg","height":237},"child":[{"type":"Label","props":{"y":3,"x":139,"width":111,"valign":"middle","text":"断 线 重 连","strokeColor":"#000000","stroke":1,"height":25,"fontSize":22,"color":"#e8a448","bold":true}},{"type":"Label","props":{"y":94,"x":62,"width":265,"text":"当前网络不稳定，请检测网络","height":20,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":183,"x":58,"width":90,"var":"backLogin","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"backLogin","labelSize":14,"labelColors":"#e8d4a8,#e8a448","label":"返回登录","height":30}},{"type":"Button","props":{"y":183,"x":235,"width":90,"var":"relink_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"relink_ok","labelSize":14,"labelColors":"#e8d4a8,#e8a448","label":"断线重连","height":30}}]}]};
		return reLinkUI;
	})(View);
var rockerUI=(function(_super){
		function rockerUI(){
			

			rockerUI.__super.call(this);
		}

		CLASS$(rockerUI,'ui.rockerUI',_super);
		var __proto__=rockerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rockerUI.uiView);

		}

		rockerUI.uiView={"type":"View","props":{}};
		return rockerUI;
	})(View);
var RoleMenuUI=(function(_super){
		function RoleMenuUI(){
			
		    this.menu=null;
		    this.labName=null;
		    this.labSelectInfo=null;
		    this.labchat=null;
		    this.labaddfriend=null;
		    this.labshieldchat=null;
		    this.labteam=null;
		    this.labhanghu=null;

			RoleMenuUI.__super.call(this);
		}

		CLASS$(RoleMenuUI,'ui.RoleMenuUI',_super);
		var __proto__=RoleMenuUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RoleMenuUI.uiView);

		}

		RoleMenuUI.uiView={"type":"View","props":{"y":0,"x":0,"width":800,"top":0,"right":0,"mouseThrough":true,"left":0,"height":600,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":168,"var":"menu","skin":"gameres/png/01000.png","sizeGrid":"29,25,26,26","height":238},"child":[{"type":"Label","props":{"y":19,"var":"labName","text":"名称：砍呀砍","name":"labName","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":49,"var":"labSelectInfo","text":"查看信息","name":"labSelectInfo","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":79,"var":"labchat","text":"进行私聊","name":"labchat","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":110,"var":"labaddfriend","text":"加为好友","name":"labaddfriend","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":140,"var":"labshieldchat","text":"屏蔽发言","name":"labshieldchat","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":170,"var":"labteam","text":"邀请组队","name":"labteam","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":200,"var":"labhanghu","text":"邀请加入行会","name":"labhanghu","fontSize":18,"color":"#f6fbb6","centerX":0}}]}]};
		return RoleMenuUI;
	})(View);
var RoleSceneUI=(function(_super){
		function RoleSceneUI(){
			
		    this.lb_ServerName=null;
		    this.lb_name1=null;
		    this.lb_lvl1=null;
		    this.lb_job1=null;
		    this.lb_job2=null;
		    this.lb_lvl2=null;
		    this.lb_name2=null;
		    this.btn_rr=null;
		    this.btn_dr=null;
		    this.btn_start=null;
		    this.img_start=null;
		    this.btn_cr=null;
		    this.btn_s2=null;
		    this.btn_s1=null;
		    this.box_l=null;
		    this.box_r=null;
		    this.img_create=null;
		    this.Random=null;
		    this.btn_c_zs=null;
		    this.btn_c_sj=null;
		    this.btn_c_fs=null;
		    this.btn_c_ds=null;
		    this.btn_c_nv=null;
		    this.btn_c_nan=null;
		    this.btn_c_ok=null;
		    this.btn_c_qx=null;
		    this.tex_name=null;
		    this.submit_btn=null;
		    this.img_hf=null;
		    this.btn_hf_ok=null;
		    this.btn_hf_qx=null;
		    this.rolelist=null;
		    this.img_del=null;
		    this.btn_del_ok=null;
		    this.btn_del_qx=null;
		    this.lb_del=null;

			RoleSceneUI.__super.call(this);
		}

		CLASS$(RoleSceneUI,'ui.RoleSceneUI',_super);
		var __proto__=RoleSceneUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RoleSceneUI.uiView);

		}

		RoleSceneUI.uiView={"type":"View","props":{"width":1136,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1136,"visible":true,"skin":"gameres/png/rolescene_bg.png","height":600},"child":[{"type":"Label","props":{"y":42,"x":414,"width":300,"var":"lb_ServerName","valign":"middle","text":"传奇战记","strokeColor":"#000000","stroke":2,"name":"lb_ServerName","fontSize":22,"color":"#ddaf52","align":"center"}}]},{"type":"Image","props":{"y":453,"x":222},"child":[{"type":"Label","props":{"y":10,"x":7,"width":0,"var":"lb_name1","strokeColor":"#000000","stroke":2,"height":0,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":537,"x":180},"child":[{"type":"Label","props":{"y":-3,"x":48,"var":"lb_lvl1","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":492,"x":181},"child":[{"type":"Label","props":{"y":6,"x":48,"var":"lb_job1","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":492,"x":747},"child":[{"type":"Label","props":{"y":6,"x":60,"var":"lb_job2","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":537,"x":746},"child":[{"type":"Label","props":{"y":-3,"x":60,"var":"lb_lvl2","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":447,"x":746},"child":[{"type":"Label","props":{"y":16,"x":60,"var":"lb_name2","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Button","props":{"y":541,"x":507,"var":"btn_rr","stateNum":2,"skin":"gameres/ui/00740.png","scaleY":0.8,"scaleX":0.8,"name":"btn_rr"}},{"type":"Button","props":{"y":496,"x":507,"var":"btn_dr","stateNum":2,"skin":"gameres/ui/00747.png","scaleY":0.8,"scaleX":0.8}},{"type":"Button","props":{"y":406,"x":507,"var":"btn_start","stateNum":2,"skin":"gameres/ui/00769.png","scaleY":0.8,"scaleX":0.8},"child":[{"type":"Image","props":{"y":51,"x":151,"width":153,"var":"img_start","skin":"gameres/ui/00768.png","rotation":180,"height":53}}]},{"type":"Button","props":{"y":453,"x":440,"var":"btn_cr","stateNum":2,"skin":"gameres/ui/00736.png","scaleY":0.8,"scaleX":0.8,"name":"btn_cr"}},{"type":"Button","props":{"y":409,"x":860,"width":101,"var":"btn_s2","stateNum":2,"skin":"gameres/ui/00751.png","height":44}},{"type":"Button","props":{"y":409,"x":285,"width":101,"var":"btn_s1","stateNum":2,"skin":"gameres/ui/00751.png","height":44}},{"type":"Box","props":{"y":80,"x":256,"width":240,"var":"box_l","height":270}},{"type":"Box","props":{"y":80,"x":645,"width":240,"var":"box_r","height":270}},{"type":"Image","props":{"y":-17,"x":622,"width":333,"visible":false,"var":"img_create","skin":"gameres/png/00732.png","height":479},"child":[{"type":"Image","props":{"y":98,"x":55,"width":188,"skin":"gameres/png/rolescene_00702.png","height":37}},{"type":"Button","props":{"y":94,"x":241,"width":42,"var":"Random","stateNum":2,"skin":"gameres/ui/randomid.png","name":"Random","height":42}},{"type":"Button","props":{"y":194,"x":42,"width":57,"var":"btn_c_zs","stateNum":2,"skin":"gameres/ui/00705.png","selected":true,"name":"btn_c_zs","height":54},"child":[{"type":"Text","props":{"y":54,"x":14,"text":"战士","fontSize":16,"color":"#ffffff"}}]},{"type":"Button","props":{"y":194,"x":222,"width":57,"var":"btn_c_sj","stateNum":2,"skin":"gameres/ui/00695.png","name":"btn_c_sj","height":54}},{"type":"Button","props":{"y":194,"x":102,"width":57,"var":"btn_c_fs","stateNum":2,"skin":"gameres/ui/00686.png","name":"btn_c_fs","height":54},"child":[{"type":"Text","props":{"y":54,"x":14,"text":"法师","fontSize":16,"color":"#ffffff"}}]},{"type":"Button","props":{"y":194,"x":162,"width":57,"var":"btn_c_ds","stateNum":2,"skin":"gameres/ui/00682.png","name":"btn_c_ds","height":54},"child":[{"type":"Text","props":{"y":54,"x":14,"text":"道士","fontSize":16,"color":"#ffffff"}}]},{"type":"Button","props":{"y":302,"x":172,"width":57,"var":"btn_c_nv","stateNum":2,"skin":"gameres/ui/00692.png","name":"btn_c_nv","height":54}},{"type":"Button","props":{"y":302,"x":89,"width":57,"var":"btn_c_nan","stateNum":2,"skin":"gameres/ui/00689.png","selected":true,"name":"btn_c_nan","height":54}},{"type":"Button","props":{"y":369,"var":"btn_c_ok","stateNum":2,"skin":"gameres/ui/00698.png","name":"btn_c_ok","centerX":0}},{"type":"Button","props":{"y":19,"x":267,"width":46,"var":"btn_c_qx","stateNum":2,"skin":"gameres/ui/but_close.png","name":"btn_c_qx","height":46}},{"type":"TextInput","props":{"y":100,"x":62,"width":168,"var":"tex_name","valign":"middle","type":"text","text":"名字最长七个字","strokeColor":"#000000","stroke":2,"maxChars":7,"height":30,"fontSize":19,"color":"#e7decf"}},{"type":"Label","props":{"y":71,"x":135,"text":"姓名","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#5a8ca5","bold":true}},{"type":"Label","props":{"y":156,"x":135,"text":"职业","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#5a8ca5","bold":true}},{"type":"Label","props":{"y":266,"x":135,"text":"性别","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#5a8ca5","bold":true}},{"type":"Image","props":{"y":25,"x":125,"width":82,"skin":"gameres/ui/newroletitle.png","height":28}},{"type":"Image","props":{"y":312,"x":53,"skin":"gameres/ui/man.png"}},{"type":"Image","props":{"y":312,"x":232,"skin":"gameres/ui/human.png"}}]},{"type":"Button","props":{"y":454,"x":569,"var":"submit_btn","stateNum":2,"skin":"gameres/ui/role_return.png","scaleY":0.8,"scaleX":0.8,"name":"submit_btn"}},{"type":"Image","props":{"y":82,"x":370,"width":333,"visible":false,"var":"img_hf","skin":"gameres/png/00732.png","height":479},"child":[{"type":"Button","props":{"y":394,"width":101,"var":"btn_hf_ok","stateNum":2,"skin":"gameres/ui/00764.png","name":"btn_hf_ok","height":44,"centerX":0}},{"type":"Button","props":{"y":9,"x":265,"width":60,"var":"btn_hf_qx","stateNum":2,"skin":"gameres/ui/but_close.png","name":"btn_hf_qx","height":60}},{"type":"Image","props":{"y":64,"x":23,"width":275,"skin":"gameres/png/hfkuang.png","height":310},"child":[{"type":"List","props":{"y":30,"x":2,"width":270,"var":"rolelist","spaceY":5,"spaceX":1,"repeatY":5,"repeatX":1,"height":278}}]},{"type":"Image","props":{"y":25,"x":112,"width":111,"skin":"gameres/ui/hftitle.png","height":29}}]},{"type":"Image","props":{"width":452,"visible":false,"var":"img_del","skin":"gameres/png/00790.png","height":179,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":126,"x":200,"width":101,"var":"btn_del_ok","stateNum":2,"skin":"gameres/ui/00758.png","height":44}},{"type":"Button","props":{"y":125,"x":320,"width":101,"var":"btn_del_qx","stateNum":2,"skin":"gameres/ui/00755.png","height":44}},{"type":"Label","props":{"y":33,"x":34,"var":"lb_del","strokeColor":"#000000","stroke":2,"fontSize":18,"font":"SimSun","color":"#ffffff"}}]}]};
		return RoleSceneUI;
	})(View);
var ScreenWUI=(function(_super){
		function ScreenWUI(){
			
		    this.Screen_bg=null;
		    this.m_List=null;
		    this.but_Close=null;

			ScreenWUI.__super.call(this);
		}

		CLASS$(ScreenWUI,'ui.ScreenWUI',_super);
		var __proto__=ScreenWUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ScreenWUI.uiView);

		}

		ScreenWUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":1,"x":6,"width":338,"var":"Screen_bg","skin":"gameres/png/00029.png","sizeGrid":"60,20,20,30","height":329},"child":[{"type":"Text","props":{"y":26,"x":148,"text":"筛选","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ddaf52"}},{"type":"List","props":{"y":55,"x":28,"width":285,"var":"m_List","height":256}},{"type":"Button","props":{"y":-7,"x":267,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}}]}]};
		return ScreenWUI;
	})(View);
var SendRedPackUI=(function(_super){
		function SendRedPackUI(){
			
		    this.SendRpakWin=null;
		    this.lb_name=null;
		    this.lb_smsg=null;
		    this.lb_count=null;
		    this.but_send=null;
		    this.send_list=null;
		    this.but_close=null;
		    this.Editinput=null;

			SendRedPackUI.__super.call(this);
		}

		CLASS$(SendRedPackUI,'ui.SendRedPackUI',_super);
		var __proto__=SendRedPackUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SendRedPackUI.uiView);

		}

		SendRedPackUI.uiView={"type":"View","props":{"width":960,"height":640},"child":[{"type":"Image","props":{"y":68,"x":63,"var":"SendRpakWin","skin":"gameres/png/redpak_bg.png"},"child":[{"type":"Label","props":{"y":353,"x":36,"var":"lb_name","text":"哈哈哈的名字","fontSize":16,"color":"#eee7e7"}},{"type":"Label","props":{"y":384,"x":36,"var":"lb_smsg","text":"祝福语","fontSize":16,"color":"#eee7e7"}},{"type":"Label","props":{"y":354,"x":300,"var":"lb_count","text":"20个红包，已分派2个","fontSize":16,"color":"#eee7e7"}},{"type":"Button","props":{"y":57,"x":417,"width":70,"var":"but_send","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelFont":"SimSun","labelColors":"#D7B581,#D7B581","label":"留言","height":25}},{"type":"Label","props":{"y":62,"x":24,"width":80,"text":"留言内容：","height":18,"fontSize":16,"color":"#eee7e7"}},{"type":"List","props":{"y":97,"x":18,"width":478,"var":"send_list","vScrollBarSkin":"gameres/ui/vscroll.png","repeatY":10,"repeatX":1,"height":239},"child":[{"type":"Box","props":{"renderType":"render","name":"render"},"child":[{"type":"Label","props":{"y":10,"x":7,"fontSize":18,"color":"#ffffff"}}]}]},{"type":"Button","props":{"y":-3,"x":446,"var":"but_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"TextInput","props":{"y":58,"x":99,"width":312,"var":"Editinput","type":"text","strokeColor":"#000000","stroke":2,"height":25,"fontSize":18,"color":"#e8dfdf","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"Text","props":{"y":25,"x":232,"text":"红包","strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#ddaf52","align":"center"}}]}]};
		return SendRedPackUI;
	})(View);
var ShoushiUI=(function(_super){
		function ShoushiUI(){
			
		    this.img_bg=null;
		    this.btn_close=null;
		    this.img_box=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_4=null;
		    this.Item_5=null;

			ShoushiUI.__super.call(this);
		}

		CLASS$(ShoushiUI,'ui.ShoushiUI',_super);
		var __proto__=ShoushiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ShoushiUI.uiView);

		}

		ShoushiUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":72,"x":195,"var":"img_bg","skin":"gameres/png/shoushi.png"},"child":[{"type":"Button","props":{"y":-2,"x":110,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":55,"x":17,"width":148,"var":"img_box","height":107},"child":[{"type":"Image","props":{"y":5,"x":4,"width":44,"var":"Item_0","name":"0","height":44}},{"type":"Image","props":{"y":5,"x":51,"width":44,"var":"Item_1","name":"1","height":44}},{"type":"Image","props":{"y":5,"x":98,"width":44,"var":"Item_2","name":"2","height":44}},{"type":"Image","props":{"y":53,"x":4,"width":44,"var":"Item_3","name":"3","height":44}},{"type":"Image","props":{"y":53,"x":51,"width":44,"var":"Item_4","name":"4","height":44}},{"type":"Image","props":{"y":53,"x":98,"width":44,"var":"Item_5","name":"5","height":44}}]}]}]};
		return ShoushiUI;
	})(View);
var ShousWinUI=(function(_super){
		function ShousWinUI(){
			
		    this.Shoushi_bg=null;
		    this.but_Close=null;
		    this.but_Update=null;
		    this.sKuang=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_4=null;
		    this.Item_5=null;
		    this.Item_6=null;
		    this.Item_7=null;
		    this.Item_8=null;
		    this.Item_9=null;
		    this.Item_10=null;
		    this.Item_11=null;

			ShousWinUI.__super.call(this);
		}

		CLASS$(ShousWinUI,'ui.ShousWinUI',_super);
		var __proto__=ShousWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ShousWinUI.uiView);

		}

		ShousWinUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":62,"x":185,"var":"Shoushi_bg","skin":"gameres/png/shengxiao.png"},"child":[{"type":"Button","props":{"y":-3,"x":167,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":220,"x":65,"width":100,"var":"but_Update","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"升级神佑袋","height":29}},{"type":"Image","props":{"y":55,"x":17,"width":206,"var":"sKuang","height":156},"child":[{"type":"Image","props":{"y":6,"x":4,"width":44,"var":"Item_0","name":"0","height":44}},{"type":"Image","props":{"y":6,"x":54,"width":44,"var":"Item_1","name":"1","height":44}},{"type":"Image","props":{"y":6,"x":104,"width":44,"var":"Item_2","name":"2","height":44}},{"type":"Image","props":{"y":6,"x":154,"width":44,"var":"Item_3","name":"3","height":44}},{"type":"Image","props":{"y":54,"x":4,"width":44,"var":"Item_4","name":"4","height":44}},{"type":"Image","props":{"y":54,"x":54,"width":44,"var":"Item_5","name":"5","height":44}},{"type":"Image","props":{"y":54,"x":104,"width":44,"var":"Item_6","name":"6","height":44}},{"type":"Image","props":{"y":54,"x":154,"width":44,"var":"Item_7","name":"7","height":44}},{"type":"Image","props":{"y":104,"x":4,"width":44,"var":"Item_8","name":"8","height":44}},{"type":"Image","props":{"y":104,"x":54,"width":44,"var":"Item_9","name":"9","height":44}},{"type":"Image","props":{"y":104,"x":104,"width":44,"var":"Item_10","name":"10","height":44}},{"type":"Image","props":{"y":104,"x":154,"width":44,"var":"Item_11","name":"11","height":44}}]}]}]};
		return ShousWinUI;
	})(View);
var SimpleScreenUI=(function(_super){
		function SimpleScreenUI(){
			
		    this.bg=null;
		    this.btn_task=null;
		    this.btn_circum=null;
		    this.btn_hide=null;
		    this.img_screen=null;
		    this.img_task=null;
		    this.panel_task=null;
		    this.task_detail=null;
		    this.img_circum=null;
		    this.btn_item=null;
		    this.btn_hum=null;
		    this.box0=null;
		    this.list_hum=null;
		    this.box1=null;
		    this.list_item=null;
		    this.img_chat=null;
		    this.list_chat=null;
		    this.chat_detail=null;

			SimpleScreenUI.__super.call(this);
		}

		CLASS$(SimpleScreenUI,'ui.SimpleScreenUI',_super);
		var __proto__=SimpleScreenUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SimpleScreenUI.uiView);

		}

		SimpleScreenUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":235,"var":"bg","mouseThrough":true,"height":177},"child":[{"type":"Button","props":{"y":1,"x":0,"width":58,"var":"btn_task","stateNum":3,"skin":"gameres/ui/rw_btn.png","scaleY":0.55,"scaleX":0.55,"name":"btn_task","height":159}},{"type":"Button","props":{"y":88,"x":0,"width":58,"var":"btn_circum","stateNum":3,"skin":"gameres/ui/btn_circum.png","scaleY":0.55,"scaleX":0.55,"name":"btn_circum","height":159}},{"type":"Button","props":{"y":177,"x":-1,"width":58,"var":"btn_hide","stateNum":1,"skin":"gameres/ui/img_hide.png","scaleY":0.55,"scaleX":0.55,"name":"btn_hide","height":55}},{"type":"Image","props":{"y":3,"x":32,"width":200,"var":"img_screen","name":"img_screen","height":171},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"var":"img_task","name":"img_task","height":171},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":200,"var":"panel_task","name":"panel_task","height":171}},{"type":"Button","props":{"width":68,"visible":false,"var":"task_detail","top":3,"stateNum":2,"skin":"gameres/ui/btn_detail.png","scaleY":0.6,"scaleX":0.6,"right":2,"name":"task_detail","height":36}}]},{"type":"Image","props":{"y":1,"x":0,"width":200,"var":"img_circum","skin":"gameres/png/humCircum_bg.png","name":"img_circum","height":171},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"skin":"gameres/png/chat_chat.png","height":171,"alpha":0.5}},{"type":"Button","props":{"y":6,"x":115,"width":162,"var":"btn_item","stateNum":2,"skin":"gameres/ui/btn_tab2.png","scaleY":0.4,"scaleX":0.4,"name":"btn_item","labelStroke":2,"labelSize":16,"labelFont":"SimSun","labelColors":"#fbf1b3,#fbf1b3","height":64}},{"type":"Button","props":{"y":6,"x":19,"width":162,"var":"btn_hum","stateNum":2,"skin":"gameres/ui/btn_tab1.png","scaleY":0.4,"scaleX":0.4,"name":"btn_hum","labelStroke":2,"labelSize":16,"labelFont":"SimSun","labelColors":"#fbf1b3,#fbf1b3","height":64}},{"type":"Box","props":{"y":37,"x":4,"width":192,"var":"box0","name":"box0","height":133},"child":[{"type":"List","props":{"y":-1,"x":0,"width":192,"var":"list_hum","name":"list_hum","height":133}}]},{"type":"Box","props":{"y":37,"x":4,"width":192,"var":"box1","name":"box1","height":133},"child":[{"type":"List","props":{"y":0,"x":0,"width":192,"var":"list_item","name":"list_item","height":133}}]}]},{"type":"Image","props":{"y":0,"x":0,"width":200,"visible":false,"var":"img_chat","skin":"gameres/png/rw_bg.png","name":"img_chat","height":171},"child":[{"type":"List","props":{"x":0,"width":200,"var":"list_chat","name":"list_chat","height":171,"centerY":2}},{"type":"Button","props":{"width":68,"visible":false,"var":"chat_detail","top":0,"stateNum":2,"skin":"gameres/ui/btn_detail.png","scaleY":0.6,"scaleX":0.6,"right":0,"name":"chat_detail","height":36}}]}]}]}]};
		return SimpleScreenUI;
	})(View);
var SkillRockUI=(function(_super){
		function SkillRockUI(){
			
		    this.base=null;
		    this.skillBtn_arc=null;

			SkillRockUI.__super.call(this);
		}

		CLASS$(SkillRockUI,'ui.SkillRockUI',_super);
		var __proto__=SkillRockUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SkillRockUI.uiView);

		}

		SkillRockUI.uiView={"type":"View","props":{"y":0,"x":0,"width":360,"mouseThrough":true,"height":360},"child":[{"type":"Box","props":{"y":180,"x":180,"width":360,"var":"base","pivotY":180,"pivotX":180,"name":"base","mouseThrough":true,"height":360},"child":[{"type":"Image","props":{"y":0,"x":0,"width":360,"var":"skillBtn_arc","skin":"gameres/png/skillBtn_arc.png","pivotY":0.5,"pivotX":0.5,"name":"skillBtn_arc","height":360,"alpha":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":360,"renderType":"hit","lineWidth":1,"height":360,"fillColor":"#1eee26"}},{"type":"Circle","props":{"y":180,"x":180,"renderType":"unHit","radius":92,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]};
		return SkillRockUI;
	})(View);
var skillwinUI=(function(_super){
		function skillwinUI(){
			
		    this.skill_gb=null;
		    this.but_Close=null;
		    this.but_rest=null;
		    this.but_bg=null;
		    this.skill_0=null;
		    this.skill_1=null;
		    this.skill_2=null;
		    this.skill_3=null;
		    this.skill_4=null;
		    this.skill_5=null;
		    this.skill_6=null;
		    this.skill_7=null;

			skillwinUI.__super.call(this);
		}

		CLASS$(skillwinUI,'ui.skillwinUI',_super);
		var __proto__=skillwinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(skillwinUI.uiView);

		}

		skillwinUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":63,"x":146,"var":"skill_gb","skin":"gameres/png/skillwin.png"},"child":[{"type":"Button","props":{"y":-3,"x":225,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":193,"x":104,"width":90,"var":"but_rest","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"重置","height":32}},{"type":"Image","props":{"y":55,"x":16,"width":266,"var":"but_bg","height":137},"child":[{"type":"Image","props":{"y":14,"x":11,"width":48,"var":"skill_0","name":"0","height":48}},{"type":"Image","props":{"y":14,"x":78,"width":48,"var":"skill_1","name":"1","height":48}},{"type":"Image","props":{"y":14,"x":144,"width":48,"var":"skill_2","name":"2","height":48}},{"type":"Image","props":{"y":14,"x":210,"width":48,"var":"skill_3","name":"3","height":48}},{"type":"Image","props":{"y":81,"x":11,"width":48,"var":"skill_4","name":"4","height":48}},{"type":"Image","props":{"y":81,"x":78,"width":48,"var":"skill_5","name":"5","height":48}},{"type":"Image","props":{"y":81,"x":144,"width":48,"var":"skill_6","name":"6","height":48}},{"type":"Image","props":{"y":81,"x":210,"width":48,"var":"skill_7","name":"7","height":48}}]}]}]};
		return skillwinUI;
	})(View);
var statebonusUI=(function(_super){
		function statebonusUI(){
			
		    this.statpoint_bg=null;
		    this.statpoint_close=null;
		    this.statpoint_ok=null;
		    this.pointcount=null;
		    this.state_panel=null;
		    this.point1=null;
		    this.statpoint_minus1=null;
		    this.statpoint_plus1=null;
		    this.state1=null;
		    this.statpoint_minus2=null;
		    this.statpoint_plus2=null;
		    this.point2=null;
		    this.state2=null;
		    this.statpoint_minus3=null;
		    this.statpoint_plus3=null;
		    this.point3=null;
		    this.state3=null;
		    this.statpoint_minus4=null;
		    this.statpoint_plus4=null;
		    this.point4=null;
		    this.state4=null;
		    this.statpoint_minus5=null;
		    this.statpoint_plus5=null;
		    this.point5=null;
		    this.state5=null;
		    this.statpoint_minus6=null;
		    this.statpoint_plus6=null;
		    this.point6=null;
		    this.state6=null;
		    this.statpoint_minus7=null;
		    this.statpoint_plus7=null;
		    this.point7=null;
		    this.state7=null;
		    this.statpoint_minus8=null;
		    this.statpoint_plus8=null;
		    this.point8=null;
		    this.state8=null;
		    this.statpoint_minus9=null;
		    this.statpoint_plus9=null;
		    this.point9=null;
		    this.state9=null;

			statebonusUI.__super.call(this);
		}

		CLASS$(statebonusUI,'ui.statebonusUI',_super);
		var __proto__=statebonusUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(statebonusUI.uiView);

		}

		statebonusUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":25,"x":235,"var":"statpoint_bg","skin":"gameres/png/statpoint_bg.png","name":"statpoint_bg"},"child":[{"type":"Button","props":{"y":-22,"x":339,"var":"statpoint_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"statpoint_close"}},{"type":"Button","props":{"y":402,"x":287,"width":70,"var":"statpoint_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"statpoint_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":16,"labelColors":"#fbf1b3,#fbf1b3","label":"同  意","height":25}},{"type":"Label","props":{"y":40,"x":19,"width":263,"text":"您当前还有剩余部分属性点未分配。请根据自己的","height":16,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":58,"x":19,"text":"意向，调整自己的属性值。","fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":406,"x":92,"width":91,"text":"可分配点数：","height":16,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":404,"x":193,"width":63,"var":"pointcount","valign":"middle","text":"9999","name":"pointcount","height":20,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Panel","props":{"y":83,"x":10,"width":381,"var":"state_panel","name":"state_panel","height":313},"child":[{"type":"Image","props":{"y":5,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Text","props":{"y":21,"x":179,"width":60,"var":"point1","valign":"middle","text":"99/99","name":"point1","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":15,"x":271,"var":"statpoint_minus1","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus1","disabled":true}},{"type":"Image","props":{"y":15,"x":328,"var":"statpoint_plus1","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus1"}},{"type":"Text","props":{"y":24,"x":10,"text":"物理攻击","fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":24,"x":83,"width":83,"var":"state1","text":"1000-1000","name":"state1","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":65,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Text","props":{"y":84,"x":10,"text":"魔法攻击","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":75,"x":271,"var":"statpoint_minus2","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus2","disabled":true}},{"type":"Image","props":{"y":75,"x":328,"var":"statpoint_plus2","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus2"}},{"type":"Text","props":{"y":81,"x":179,"width":60,"var":"point2","valign":"middle","text":"99/99","name":"point2","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":84,"x":83,"width":80,"var":"state2","text":"1000-1000","name":"state2","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":125,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":135,"x":271,"var":"statpoint_minus3","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus3","disabled":true}},{"type":"Image","props":{"y":135,"x":328,"var":"statpoint_plus3","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus3"}},{"type":"Text","props":{"y":141,"x":179,"width":60,"var":"point3","valign":"middle","text":"99/99","name":"point3","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":146,"x":83,"width":78,"var":"state3","text":"1000-1000","name":"state3","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":144,"x":10,"text":"道术攻击","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":185,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":195,"x":271,"var":"statpoint_minus4","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus4","disabled":true}},{"type":"Image","props":{"y":195,"x":328,"var":"statpoint_plus4","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus4"}},{"type":"Text","props":{"y":201,"x":179,"width":60,"var":"point4","valign":"middle","text":"99/99","name":"point4","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":204,"x":83,"width":79,"var":"state4","text":"1000-1000","name":"state4","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":204,"x":10,"text":"物理防御","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":245,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":255,"x":271,"var":"statpoint_minus5","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus5","disabled":true}},{"type":"Image","props":{"y":255,"x":328,"var":"statpoint_plus5","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus5"}},{"type":"Text","props":{"y":261,"x":179,"width":60,"var":"point5","valign":"middle","text":"99/99","name":"point5","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":264,"x":83,"width":83,"var":"state5","text":"1000-1000","name":"state5","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":264,"x":10,"text":"魔法防御","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":305,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":315,"x":271,"var":"statpoint_minus6","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus6","disabled":true}},{"type":"Image","props":{"y":315,"x":328,"var":"statpoint_plus6","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus6"}},{"type":"Text","props":{"y":321,"x":179,"width":60,"var":"point6","valign":"middle","text":"99/99","name":"point6","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":324,"x":83,"width":60,"var":"state6","text":"1000","name":"state6","fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":324,"x":10,"text":"生  命  值","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":365,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":375,"x":271,"var":"statpoint_minus7","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus7","disabled":true}},{"type":"Image","props":{"y":375,"x":328,"var":"statpoint_plus7","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus7"}},{"type":"Text","props":{"y":381,"x":179,"width":60,"var":"point7","valign":"middle","text":"99/99","name":"point7","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":384,"x":83,"width":60,"var":"state7","text":"1000","name":"state7","fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":384,"x":10,"text":"魔  法  值","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":425,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":435,"x":271,"var":"statpoint_minus8","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus8","disabled":true}},{"type":"Image","props":{"y":435,"x":328,"var":"statpoint_plus8","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus8"}},{"type":"Text","props":{"y":441,"x":179,"width":60,"var":"point8","valign":"middle","text":"99/99","name":"point8","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":444,"x":83,"width":60,"var":"state8","text":"1000","name":"state8","fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":444,"x":10,"text":"命        中","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":485,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":495,"x":271,"var":"statpoint_minus9","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus9","disabled":true}},{"type":"Image","props":{"y":495,"x":328,"var":"statpoint_plus9","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus9"}},{"type":"Text","props":{"y":501,"x":179,"width":60,"var":"point9","valign":"middle","text":"99/99","name":"point9","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":504,"x":83,"width":60,"var":"state9","text":"1000","name":"state9","fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":504,"x":10,"text":"躲        避","fontSize":16,"color":"#ffffff"}}]}]}]};
		return statebonusUI;
	})(View);
var StoreUI=(function(_super){
		function StoreUI(){
			
		    this.img_bg=null;
		    this.txt_name=null;
		    this.txt_state=null;
		    this.txt_num=null;
		    this.txt_page=null;
		    this.List_store=null;
		    this.ItemSearch=null;
		    this.btn_itemsearch=null;
		    this.ItemType=null;
		    this.ItemSort=null;
		    this.price_low=null;
		    this.price_high=null;
		    this.pricetype=null;
		    this.btn_first=null;
		    this.btn_previous=null;
		    this.btn_next=null;
		    this.btn_last=null;
		    this.btn_close=null;

			StoreUI.__super.call(this);
		}

		CLASS$(StoreUI,'ui.StoreUI',_super);
		var __proto__=StoreUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StoreUI.uiView);

		}

		StoreUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":570,"var":"img_bg","skin":"gameres/png/00091.png","name":"img_bg","height":374,"centerY":0,"centerX":0},"child":[{"type":"Text","props":{"y":29,"x":42,"var":"txt_name","text":"橡胶路飞的店铺","name":"txt_name","fontSize":14,"color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":52,"x":44,"var":"txt_state","text":"当前状态：在线","name":"txt_state","color":"#e8a448"}},{"type":"Text","props":{"y":52,"x":159,"var":"txt_num","text":"店铺物品数：100/100","name":"txt_num","color":"#e8a448"}},{"type":"Text","props":{"y":52,"x":470,"var":"txt_page","text":"页数  1/2","name":"txt_page","color":"#e8a448"}},{"type":"Label","props":{"y":67,"x":26,"width":47,"height":37,"borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":67,"x":73,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":67,"x":182,"width":109,"valign":"middle","text":"出售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":67,"x":291,"width":61,"valign":"middle","text":"物品类别","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":67,"x":352,"width":139,"valign":"middle","text":"添加时间","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":67,"x":491,"width":54,"valign":"middle","text":"购买","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Text","props":{"y":297,"x":28,"text":"关键字","color":"#c0c0c0"}},{"type":"Text","props":{"y":323,"x":28,"text":"搜索类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":321,"x":137,"text":"排序","color":"#c0c0c0"}},{"type":"Text","props":{"y":349,"x":28,"text":"价格范围","color":"#c0c0c0"}},{"type":"Text","props":{"y":349,"x":187,"text":"之间","color":"#c0c0c0"}},{"type":"Text","props":{"y":349,"x":218,"text":"货币类型","color":"#c0c0c0"}},{"type":"List","props":{"y":104,"x":27,"width":519,"var":"List_store","name":"List_store","height":187}},{"type":"TextInput","props":{"y":294,"x":81,"width":82,"var":"ItemSearch","promptColor":"#ffffff","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"Button","props":{"y":295,"x":168,"width":40,"var":"btn_itemsearch","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_itemsearch","labelColors":"#e8d4a8,#e8a448","label":"搜索","height":20}},{"type":"ComboBox","props":{"y":319,"x":81,"visibleNum":10,"var":"ItemType","skin":"gameres/ui/personalstore_00094.png","selectedIndex":0,"labels":"所有,装饰,补给,强化,好友,限量,奇珍","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":319,"x":168,"width":92,"visibleNum":10,"var":"ItemSort","skin":"gameres/ui/personalstore_combobox.png","selectedIndex":0,"labels":"价格从低到高,价格从高到低","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"TextInput","props":{"y":344,"x":81,"width":47,"var":"price_low","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":344,"x":135,"width":47,"var":"price_high","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"ComboBox","props":{"y":344,"x":270,"width":55,"visibleNum":10,"var":"pricetype","skin":"gameres/ui/personalstore_00094.png","sizeGrid":"-79,23,-68,8","selectedIndex":0,"labels":"不限,元宝,游戏点,金币","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"Button","props":{"y":317,"x":356,"var":"btn_first","stateNum":3,"skin":"gameres/ui/personalstore_first.png","name":"btn_first"}},{"type":"Button","props":{"y":317,"x":392,"var":"btn_previous","stateNum":3,"skin":"gameres/ui/personalstore_previous.png","name":"btn_previous"}},{"type":"Button","props":{"y":317,"x":442,"var":"btn_next","stateNum":3,"skin":"gameres/ui/personalstore_next.png","name":"btn_next"}},{"type":"Button","props":{"y":317,"x":492,"var":"btn_last","skin":"gameres/ui/personalstore_last.png","name":"btn_last"}},{"type":"Button","props":{"y":-4,"x":498,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"close"}}]}]};
		return StoreUI;
	})(View);
var StoreItemUI=(function(_super){
		function StoreItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemNmae=null;
		    this.ItemPrice=null;
		    this.ItemType=null;
		    this.ItemTime=null;
		    this.ItemBy=null;

			StoreItemUI.__super.call(this);
		}

		CLASS$(StoreItemUI,'ui.StoreItemUI',_super);
		var __proto__=StoreItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StoreItemUI.uiView);

		}

		StoreItemUI.uiView={"type":"View","props":{"width":518,"height":37},"child":[{"type":"Image","props":{"y":0,"x":0,"width":518,"var":"img_bg","height":37},"child":[{"type":"Label","props":{"y":1,"x":-1,"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"y":1,"x":46,"width":109,"var":"ItemNmae","valign":"middle","text":"战神手镯","overflow":"hidden","name":"ItemNmae","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":155,"width":109,"var":"ItemPrice","valign":"middle","text":"123元宝","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":264,"width":61,"var":"ItemType","valign":"middle","text":"装饰","overflow":"hidden","name":"ItemType","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":325,"width":139,"var":"ItemTime","valign":"middle","text":"2018-12-14 17:31:04","overflow":"hidden","name":"ItemTime","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":464,"width":53,"var":"ItemBy","valign":"middle","underline":true,"text":"购买","overflow":"hidden","name":"ItemBy","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return StoreItemUI;
	})(View);
var StoreSoldItemUI=(function(_super){
		function StoreSoldItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemName=null;
		    this.ItemSoldName=null;
		    this.ItemPrice=null;
		    this.ItemTime=null;
		    this.ItemRemove=null;

			StoreSoldItemUI.__super.call(this);
		}

		CLASS$(StoreSoldItemUI,'ui.StoreSoldItemUI',_super);
		var __proto__=StoreSoldItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StoreSoldItemUI.uiView);

		}

		StoreSoldItemUI.uiView={"type":"View","props":{"width":598,"height":37},"child":[{"type":"Image","props":{"y":0,"x":0,"width":598,"var":"img_bg","name":"img_bg","height":37},"child":[{"type":"Label","props":{"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"x":47,"width":109,"var":"ItemName","valign":"middle","text":"战神手镯","overflow":"hidden","name":"ItemName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":156,"width":109,"var":"ItemSoldName","valign":"middle","underline":true,"text":"狂战士","overflow":"hidden","name":"ItemSoldName","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":265,"width":109,"var":"ItemPrice","valign":"middle","text":"1000元宝","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":374,"width":141,"var":"ItemTime","valign":"middle","text":"2018-12-14 17:31:04","overflow":"hidden","name":"ItemTime","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":515,"width":83,"var":"ItemRemove","valign":"middle","underline":true,"text":"删除","overflow":"hidden","name":"ItemRemove","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return StoreSoldItemUI;
	})(View);
var StoreStorageItemUI=(function(_super){
		function StoreStorageItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemName=null;
		    this.ItemPrice=null;
		    this.ItemType=null;
		    this.ItemTime=null;
		    this.ItemBack=null;
		    this.ItemRetrieve=null;

			StoreStorageItemUI.__super.call(this);
		}

		CLASS$(StoreStorageItemUI,'ui.StoreStorageItemUI',_super);
		var __proto__=StoreStorageItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StoreStorageItemUI.uiView);

		}

		StoreStorageItemUI.uiView={"type":"View","props":{"width":598,"height":37},"child":[{"type":"Image","props":{"width":598,"var":"img_bg","name":"img_bg","height":37},"child":[{"type":"Label","props":{"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"x":47,"width":109,"var":"ItemName","valign":"middle","text":"战神手镯","overflow":"hidden","name":"ItemName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":156,"width":109,"var":"ItemPrice","valign":"middle","text":"123元宝","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":265,"width":61,"var":"ItemType","valign":"middle","text":"装饰","overflow":"hidden","name":"ItemType","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":326,"width":141,"var":"ItemTime","valign":"middle","text":"2018-12-14 17:31:04","overflow":"hidden","name":"ItemTime","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":467,"width":65,"var":"ItemBack","valign":"middle","underline":true,"text":"放入店铺","overflow":"hidden","name":"ItemBack","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":532,"width":65,"var":"ItemRetrieve","valign":"middle","underline":true,"text":"取回","overflow":"hidden","name":"ItemRetrieve","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return StoreStorageItemUI;
	})(View);
var TaskSceneUI=(function(_super){
		function TaskSceneUI(){
			
		    this.task_Win=null;
		    this.btn_close=null;
		    this.list_title_w=null;
		    this.list_title=null;
		    this.img_bj2=null;
		    this.btn_panel=null;

			TaskSceneUI.__super.call(this);
		}

		CLASS$(TaskSceneUI,'ui.TaskSceneUI',_super);
		var __proto__=TaskSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TaskSceneUI.uiView);

		}

		TaskSceneUI.uiView={"type":"View","props":{"width":870,"scaleY":1,"scaleX":1,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":7,"x":64,"width":712,"var":"task_Win","skin":"gameres/png/btn_task_bj.png","sizeGrid":"76,67,37,79","height":465},"child":[{"type":"Button","props":{"y":1,"x":640,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":121,"x":32,"width":149,"var":"list_title_w","height":321},"child":[{"type":"List","props":{"y":0,"x":0,"width":149,"var":"list_title","repeatY":6,"repeatX":1,"height":321}}]},{"type":"Label","props":{"y":316,"x":-192,"text":"任务描述","fontSize":20,"color":"#a24c0d"}},{"type":"Label","props":{"y":26,"x":332,"text":"任务","strokeColor":"#000000","stroke":2,"fontSize":24,"font":"SimHei","color":"#ddaf52"}},{"type":"Panel","props":{"y":120,"x":197,"width":483,"var":"img_bj2","name":"img_bj2","height":325}},{"type":"Panel","props":{"y":68,"x":34,"width":641,"var":"btn_panel","name":"btn_panel","height":49}}]}]};
		return TaskSceneUI;
	})(View);
var TreamGroupUI=(function(_super){
		function TreamGroupUI(){
			
		    this.img_bg=null;
		    this.btn_myteam=null;
		    this.btn_nearby=null;
		    this.btn_exit=null;
		    this.list_team=null;
		    this.btn_new=null;
		    this.btn_add=null;
		    this.btn_del=null;
		    this.che_can_team=null;
		    this.input_node=null;
		    this.btn_ok=null;
		    this.btn_esc=null;
		    this.lbl_desc=null;
		    this.input_str=null;
		    this.btn_copy=null;

			TreamGroupUI.__super.call(this);
		}

		CLASS$(TreamGroupUI,'ui.TreamGroupUI',_super);
		var __proto__=TreamGroupUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TreamGroupUI.uiView);

		}

		TreamGroupUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_bg","skin":"gameres/png/friend_bg.png","height":465,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":63,"x":29,"width":142,"var":"btn_myteam","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"btn_myteam","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"我的队伍","height":49}},{"type":"Button","props":{"y":113,"x":29,"width":142,"var":"btn_nearby","stateNum":2,"skin":"gameres/ui/auxiliary_tab.png","name":"btn_nearby","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","label":"附近玩家","height":49}},{"type":"Image","props":{"y":62,"x":189,"width":495,"skin":"gameres/png/hanghuidi.png","sizeGrid":"26,26,26,20","height":37}},{"type":"Image","props":{"y":21,"x":324,"width":65,"skin":"gameres/ui/team_topic.png","height":28}},{"type":"Button","props":{"y":-4,"x":641,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"List","props":{"y":90,"x":188,"width":498,"var":"list_team","height":310}},{"type":"Button","props":{"y":405,"x":300,"width":100,"var":"btn_new","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelSize":20,"labelPadding":"3","labelFont":"SimHei","labelColors":"#ffe9aa,#ffe9aa","label":"新 建","height":47}},{"type":"Button","props":{"y":405,"x":430,"width":100,"var":"btn_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelSize":20,"labelPadding":"3","labelFont":"SimHei","labelColors":"#ffe9aa,#ffe9aa","label":"添 加","height":47}},{"type":"Button","props":{"y":405,"x":560,"width":100,"var":"btn_del","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelSize":20,"labelPadding":"3","labelFont":"SimHei","labelColors":"#ffe9aa,#ffe9aa","label":"删 除","height":47}},{"type":"CheckBox","props":{"y":412,"x":43,"var":"che_can_team","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","labelStroke":2,"labelSize":20,"labelPadding":"9","labelFont":"SimHei","labelColors":"#e19c34,#e19c34","label":"允许组队"}},{"type":"Image","props":{"y":159,"x":185,"var":"input_node","skin":"gameres/png/hanghui2_img_bg_2.png","sizeGrid":"80,60,60,60"},"child":[{"type":"Button","props":{"y":138,"x":75,"width":70,"var":"btn_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"确 定","height":25}},{"type":"Button","props":{"y":138,"x":212,"width":70,"var":"btn_esc","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"取 消","height":25}},{"type":"Text","props":{"y":27,"x":60,"wordWrap":true,"width":237,"var":"lbl_desc","text":"所属行会","strokeColor":"#000000","stroke":2,"height":25,"fontSize":18,"color":"#ddaf52","bold":true,"align":"center"}},{"type":"TextInput","props":{"y":78,"x":19,"width":312,"var":"input_str","strokeColor":"#000000","stroke":2,"sizeGrid":"40,40,40,40","height":25,"fontSize":18,"color":"#ffffff","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"Text","props":{"y":75,"x":314,"width":36,"visible":false,"var":"btn_copy","valign":"middle","text":"粘贴","name":"btn_copy","height":28,"fontSize":14,"color":"#D7B581","align":"center"}}]},{"type":"Text","props":{"y":68,"x":252,"text":"玩家姓名","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#c69c61","bold":false,"align":"center"}},{"type":"Text","props":{"y":68,"x":486,"width":32.625,"text":"等级","strokeColor":"#000000","stroke":2,"height":16,"fontSize":20,"color":"#c69c61","bold":false,"align":"center"}},{"type":"Text","props":{"y":68,"x":588,"text":"职业","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#c69c61","bold":false,"align":"center"}},{"type":"Text","props":{"y":68,"x":380,"width":32.625,"text":"性别","strokeColor":"#000000","stroke":2,"height":16,"fontSize":20,"color":"#c69c61","bold":false,"align":"center"}}]}]};
		return TreamGroupUI;
	})(View);
var upgradeUI=(function(_super){
		function upgradeUI(){
			
		    this.upgrade_bg=null;
		    this.btn_close=null;
		    this.btn_upgrade=null;
		    this.upgrade_item=null;
		    this.item_txt=null;
		    this.item_img=null;
		    this.upgrade_material2=null;
		    this.material2_txt=null;
		    this.material2_img=null;
		    this.upgrade_material1=null;
		    this.material1_txt=null;
		    this.material1_img=null;

			upgradeUI.__super.call(this);
		}

		CLASS$(upgradeUI,'ui.upgradeUI',_super);
		var __proto__=upgradeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(upgradeUI.uiView);

		}

		upgradeUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"y":135,"x":392,"var":"upgrade_bg","skin":"gameres/png/upgrade_bg.PNG","name":"upgrade_bg"},"child":[{"type":"Button","props":{"y":-22,"x":291,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_close"}},{"type":"Button","props":{"y":282,"x":125,"width":100,"var":"btn_upgrade","stateNum":2,"skin":"gameres/ui/box_btn_ok.png","name":"btn_upgrade","labelColors":"#D7B581,#D7B581","height":29}},{"type":"Image","props":{"y":68,"x":143,"var":"upgrade_item","skin":"gameres/ui/img_bag_bg.png","name":"upgrade_item"},"child":[{"type":"Label","props":{"y":10,"x":10,"wordWrap":true,"width":48,"var":"item_txt","text":"放入装备","name":"item_txt","height":47,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"center"}},{"type":"Image","props":{"visible":false,"var":"item_img","name":"item_img"}}]},{"type":"Image","props":{"y":181,"x":227,"var":"upgrade_material2","skin":"gameres/ui/img_bag_bg.png","name":"upgrade_material2"},"child":[{"type":"Label","props":{"y":10,"x":10,"wordWrap":true,"width":48,"var":"material2_txt","text":"辅助宝石","name":"material2_txt","height":47,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"center"}},{"type":"Image","props":{"visible":false,"var":"material2_img","name":"material2_img"}}]},{"type":"Image","props":{"y":181,"x":60,"var":"upgrade_material1","skin":"gameres/ui/img_bag_bg.png","name":"upgrade_material1"},"child":[{"type":"Label","props":{"y":10,"x":10,"wordWrap":true,"width":48,"var":"material1_txt","text":"升级宝石","name":"material1_txt","height":47,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"center"}},{"type":"Image","props":{"visible":false,"var":"material1_img","name":"material1_img"}}]}]}]};
		return upgradeUI;
	})(View);
var ZhaomuUI=(function(_super){
		function ZhaomuUI(){
			
		    this.ZhaomuWin=null;
		    this.check_dangq=null;
		    this.check_hh=null;
		    this.check_all=null;
		    this.but_zhaomu=null;
		    this.but_fabu=null;
		    this.but_xiougai=null;
		    this.but_quxiao=null;
		    this.btn_close=null;
		    this.txt_lvmin=null;
		    this.txt_lvmax=null;
		    this.txt_zmemo=null;

			ZhaomuUI.__super.call(this);
		}

		CLASS$(ZhaomuUI,'ui.ZhaomuUI',_super);
		var __proto__=ZhaomuUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ZhaomuUI.uiView);

		}

		ZhaomuUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":62,"x":221,"var":"ZhaomuWin","skin":"gameres/png/zhaomuwin.png","name":"ZhaomuWin"},"child":[{"type":"CheckBox","props":{"y":176,"x":53,"width":105,"var":"check_dangq","stateNum":2,"skin":"gameres/ui/check.png","selected":true,"name":"check_dangq","labelStrokeColor":"#f4efef","labelSize":14,"labelColors":"#ffffff","label":"当前地图招募","height":20}},{"type":"CheckBox","props":{"y":176,"x":289,"width":84,"var":"check_hh","stateNum":2,"skin":"gameres/ui/check.png","name":"check_hh","labelStrokeColor":"#f4efef","labelSize":14,"labelColors":"#ffffff","label":"行会招募","height":20}},{"type":"CheckBox","props":{"y":176,"x":182,"width":80,"var":"check_all","stateNum":2,"skin":"gameres/ui/check.png","selected":false,"name":"check_all","labelStrokeColor":"#f4efef","labelSize":14,"labelColors":"#ffffff","label":"全服招募","height":20}},{"type":"Label","props":{"y":216,"x":168,"width":94,"text":"招募活动说明：","height":20,"fontSize":14,"color":"#e7de10"}},{"type":"Button","props":{"y":325,"x":41,"width":70,"var":"but_zhaomu","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"but_zhaomu","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"招募","height":24}},{"type":"Button","props":{"y":325,"x":131,"width":70,"var":"but_fabu","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"but_fabu","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"发布招募","height":24}},{"type":"Button","props":{"y":325,"x":221,"width":70,"var":"but_xiougai","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"but_xiougai","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"修改信息","height":24}},{"type":"Button","props":{"y":325,"x":311,"width":70,"var":"but_quxiao","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"but_quxiao","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"取消招募","height":24}},{"type":"Button","props":{"y":-2,"x":353,"var":"btn_close","text":"招募等级：","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"TextInput","props":{"y":116,"x":115,"width":80,"var":"txt_lvmin","type":"number","text":"0","name":"txt_lvmin","height":24,"fontSize":14,"color":"#f3e9e9","borderColor":"#896B4D","bgColor":"#1E1A16","align":"center"}},{"type":"TextInput","props":{"y":116,"x":221,"width":80,"var":"txt_lvmax","type":"number","text":"55","name":"txt_lvmax","height":24,"fontSize":14,"color":"#f3e9e9","borderColor":"#896B4D","bgColor":"#1E1A16","align":"center"}},{"type":"TextInput","props":{"y":250,"x":85,"width":250,"var":"txt_zmemo","name":"txt_zmemo","height":24,"fontSize":18,"color":"#f3e9e9","borderColor":"#896B4D","bgColor":"#1E1A16"}},{"type":"Label","props":{"y":83,"x":167,"width":91,"text":"招募等级：","height":23,"fontSize":14,"color":"#efe6e6","align":"center"}},{"type":"Label","props":{"y":116,"x":195,"width":26,"text":"-","height":24,"fontSize":20,"color":"#efe6e6","align":"center"}},{"type":"Text","props":{"y":25,"x":189,"text":"招募","strokeColor":"#000000","stroke":2,"fontSize":24,"font":"SimSun","color":"#ddaf52","align":"center"}}]}]};
		return ZhaomuUI;
	})(View);