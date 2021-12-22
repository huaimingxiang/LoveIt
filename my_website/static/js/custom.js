/* 返回随机颜色 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 鼠标点击文字特效 */
var a_idx = 0;
var a_click = 1;
var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善",
			"老哥稳", "带我飞", "厉害了word哥", "扎心了老铁", "蓝瘦香菇", "还有这种操作?", "就是有这种操作",
			"皮皮虾我们走", "笑到猪叫", "石乐志", "不存在的", "黑车!", "我要下车!", "他还只是个孩子", "请不要放过他",
			"惊不惊喜?", "意不意外?", "我有一个大胆的想法", "你的良心不会痛吗", "你心里就没点b数吗", "没有,我很膨胀",
			"秀", "天秀", "陈独秀", "蒂花之秀", "造化钟神秀", "我去买几个橘子", "你就站在此地", "不要走动",
			"我可能读了假书", "贫穷限制了我的想象力", "打call", "当然是选择原谅她啊", "你有freestyle吗",
			"北大还行撒贝宁", "不知妻美刘强东", "悔创阿里杰克马", "一无所有王健林", "普通家庭马化腾",
			"别点了", "求求你别点了", "你还点", "你再点!", "有本事继续点!", "你厉害", "我投翔",
			"w(·Д·)w", "(#`O′)", "（/TДT)/", "┭┮﹏┭┮", "_(:3」∠)_");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
		/* 点击频率，点击几次就换文字 */
		var frequency = 2;
		if (a_click % frequency === 0) {
			
			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
			y = e.pageY;
			$i.css({
				"z-index": 9999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": randomColor(),
				"-webkit-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});
			
		}
	a_click ++;
		
    });
});

/* 轮播背景图片 */
$(function () {
	$.backstretch([
		$cdnPrefix + "/images/2021/12/04/FrostLeaves_ZH-CN6851974281_1920x1080.jpg",
		$cdnPrefix + "/images/2021/12/04/CuvervilleIsland_ZH-CN9814166047_1920x1080.jpg",
		$cdnPrefix + "/images/2021/12/04/DenaliDall_ZH-CN9952652691_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/30/ElephantGiving_ZH-CN9743352473_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/ElanValley_ZH-CN9533069637_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/BeechTrees_ZH-CN9605292244_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/AmmoniteShell_ZH-CN9232274077_1920x1080-1.jpg",
		$cdnPrefix + "/images/2021/11/28/WoodBison_ZH-CN0663388789_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/YorkMinster_ZH-CN3129176050_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Whakarewarewa_ZH-CN4957778498_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/WalhallaOverlook_ZH-CN1059655401_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/WANumbat_ZH-CN0953446849_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/VeniceBeach_ZH-CN9971532384_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/UpperCathedral_ZH-CN4349673438_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/UnkindnessRavens_ZH-CN2840574948_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/UbehebeCrater_ZH-CN0157876978_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/TheNationaDay_ZH-CN5381900085_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/TheBroads_ZH-CN0485661191_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/TanzaniaBeeEater_ZH-CN3246625733_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SWColorado_ZH-CN2381176407_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/StrandbadTiefenbrunnen_ZH-CN0240023450_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/StMalo_ZH-CN3452597997_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Southpaw_ZH-CN0080320297_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SmileySloth_ZH-CN5943980097_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SeaSwallow_ZH-CN1134903878_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SeaGoldie_ZH-CN3208818667_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/ScopsOwl_ZH-CN1547209464_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SanJuanIslands_ZH-CN3763036819_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SandhillApache_ZH-CN3021579142_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SaltCones_ZH-CN4825397608_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SalisburyCrags_ZH-CN4712204475_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/SaguaroFamily_ZH-CN3845395676_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Ruskeala_ZH-CN0059931600_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Riou_ZH-CN1401049576_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/RedRoofTile_ZH-CN0528575898_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/RedFoxBlackForest_ZH-CN2253259942_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/QuayBridge_ZH-CN4900551209_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/ProseccoHills_ZH-CN3931715664_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/PortoFlavia_ZH-CN0573894597_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/PorkiesTrail_ZH-CN0014697428_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/PortAventura_ZH-CN0298709661_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Porcini_ZH-CN0462290460_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/PontRouge_ZH-CN0788212424_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/PochuckValley_ZH-CN0432836291_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/PicoThorn_ZH-CN0359446116_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/PetitMinou_ZH-CN0758401900_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/PantheraTigris_ZH-CN3331361509_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/OtterCliff_ZH-CN3062794263_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/OlympicCoast_ZH-CN0827844876_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/OkavangoHerd_ZH-CN1931628892_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/NohsngithiangFalls_ZH-CN1819466830_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/NewtonPumpkins_ZH-CN2560195971_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Neowise_ZH-CN1308687945_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Neofelis_ZH-CN4637223865_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/NahanniNP_ZH-CN2848117800_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/NahanniNP_ZH-CN2848117800_1920x1080-1.jpg",
		$cdnPrefix + "/images/2021/11/28/Mpumalanga_ZH-CN9666962271_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MoonJellyDay_ZH-CN4121466496_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MistyForest_ZH-CN3024731044_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MineBay_ZH-CN4962056960_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MidAutumnFestival2021_ZH-CN7657484762_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MayonVolcano_ZH-CN0183039911_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MauricieAutumn_ZH-CN3300167870_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MassachusettsHumpbacks_ZH-CN1239514789_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MackenzieRiver_ZH-CN0214805768_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/MackArch_ZH-CN1068755647_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/LittleBlueHeron_ZH-CN0892428603_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/LittleBirds_ZH-CN3637653515_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/LeftForkNorth_ZH-CN8798894034_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/LandsEndSunset_ZH-CN0737794484_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/LammasDay_ZH-CN4229387191_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/JaneAusten_ZH-CN2508681308_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Italica_ZH-CN1692906751_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/IvishakRiver_ZH-CN1464216156_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/IrohazakaRoad_ZH-CN9151363864_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/Invergarry_ZH-CN9013535988_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/IchthyosaurFossil_ZH-CN3662909435_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/HyacinthMacaws_ZH-CN1191345036_1920x1080-1.jpg",
		$cdnPrefix + "/images/2021/11/28/HuayMaeKhamin_ZH-CN2718383027_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/HowgillFells_ZH-CN1134328886_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/HouseboatKerala_ZH-CN0318796630_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/HogwartsExpress_ZH-CN2774508923_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/HippieTown_ZH-CN0980866245_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Hatshepsut_ZH-CN4516192627_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/HainichBaumwipfelpfad_ZH-CN2635981561_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/GiantManta_ZH-CN0594951444_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/GCVenice_ZH-CN0993336331_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/FriendlyOctopus_ZH-CN2519447724_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/FoleysBridge_ZH-CN4338959688_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/FloridaManatee_ZH-CN2405291075_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/FlintstoneHouse_ZH-CN0784178650_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/FirstCliff_ZH-CN2308482395_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/Firefox_ZH-CN0575885603_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/FanalMadeira_ZH-CN5337723033_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/FallPEI_ZH-CN2044233645_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/FallAssiniboine_ZH-CN8878734090_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/EmptyQuarter_ZH-CN0670918289_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/ElTajo_ZH-CN2134749418_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/DorsetPinnacles_ZH-CN2764578102_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/DjurdjevicaBridge_ZH-CN0284105882_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/DinoShower_ZH-CN1791773864_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Dargavs_ZH-CN2721319869_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/DalyanTombs_ZH-CN1519154607_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/CuscoCathedral_ZH-CN9834821723_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/CumberlandSeashore_ZH-CN1662936356_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/CorkscrewSwamp_ZH-CN2637396790_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/ContainerShip_ZH-CN0850122021_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/CinnamonFernNS_ZH-CN3822051382_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/ChurchillBears_ZH-CN1430090934_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/CasteldelMonte_ZH-CN4436589634_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/CapelCurig_ZH-CN5115677414_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/BulgariaDevilBridge_ZH-CN1894068778_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/BrilliantBlue_ZH-CN1727875801_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/BlackSun_ZH-CN0889682619_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/BirnbeckPier_ZH-CN0177628993_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/BenagilCave_ZH-CN0480408879_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/BeaversBend_ZH-CN1916035610_1920x1080-11.15.04.jpg",
		$cdnPrefix + "/images/2021/11/28/Bavljenac_ZH-CN1739905750_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/BabyRhino_ZH-CN1456333192_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/AtchafalayaMoss_ZH-CN6079994094_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/AsianElephants_ZH-CN2736490825_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Andromeda_ZH-CN1967953496_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/AnnasHummingbird_ZH-CN0832228710_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/AlienEggs_ZH-CN0732640719_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/AbaloneShell_ZH-CN3205304974_1920x1080.jpg",
		$cdnPrefix + "/images/2021/11/28/Aldeyjarfoss_ZH-CN0106567013_1920x1080.jpg"
	], { duration: 60000, fade: 1500 });
});
/* 拉姆蕾姆回到顶部或底部按钮 */
$(function() {
	$("#lamu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:$(document).height()},800);
		return false;
	});
	$("#leimu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
});

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.png");
      document.title = '喔唷，崩溃啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.png");
      document.title = '咦，页面又好了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}
