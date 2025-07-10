goog.provide('demo.core');
goog.scope(function(){
  demo.core.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof demo !== 'undefined') && (typeof demo.core !== 'undefined') && (typeof demo.core.state !== 'undefined')){
} else {
demo.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false,new cljs.core.Keyword(null,"page","page",849072397),(100),new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809),false,new cljs.core.Keyword(null,"animation-running","animation-running",-822053176),false], null));
}
demo.core.time_str = (function demo$core$time_str(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).toISOString());
});
demo.core.moveAudioControls = (function demo$core$moveAudioControls(){
var el_105453 = document.querySelector(".audio-controls-wrapper");
if(cljs.core.truth_(el_105453)){
(el_105453.style.marginTop = "-190px");

(el_105453.style.opacity = "0.40");
} else {
}

var el = document.querySelector(".track-info");
if(cljs.core.truth_(el)){
return (el.style.color = "rgba(255, 255, 255, 0.5)");
} else {
return null;
}
});
demo.core.incrmentStackIndex = (function demo$core$incrmentStackIndex(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stackIndex","stackIndex",753986648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"stackIndex","stackIndex",753986648),cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"stackIndex","stackIndex",753986648),(3000));
}

return demo.core.moveAudioControls();
});
demo.core.generate_json = (function demo$core$generate_json(){
var img_nodes = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll(".flipBookClass"));
var images_list = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,el){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["flipBook",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3000) + i))].join(''),new cljs.core.Keyword(null,"url","url",276297046),el.src], null);
}),img_nodes);
var audio_wrapper = document.querySelector(".audio-controls-wrapper");
var audio_el = (cljs.core.truth_(audio_wrapper)?audio_wrapper.querySelector("audio"):null);
var audio_url = (cljs.core.truth_(audio_el)?audio_el.src:null);
var now_str = ["OwlBuddy-",demo.core.time_str()].join('');
return (new cljs.core.List(null,now_str,(new cljs.core.List(null,JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),now_str,new cljs.core.Keyword(null,"images","images",1757475080),images_list,new cljs.core.Keyword(null,"audio","audio",1819127321),audio_url,new cljs.core.Keyword(null,"trackName","trackName",-683236735),new cljs.core.Keyword(null,"trackName","trackName",-683236735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)),new cljs.core.Keyword(null,"artistName","artistName",270965001),new cljs.core.Keyword(null,"artistName","artistName",270965001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state))], null))),null,(1),null)),(2),null));
});
demo.core.download_json_BANG_ = (function demo$core$download_json_BANG_(filename,json_str){
var blob = (new Blob(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [json_str], null)),({"type": "application/json"})));
var url = URL.createObjectURL(blob);
var a = document.createElement("a");
(a.href = url);

(a.download = filename);

(a.style.display = "none");

document.body.appendChild(a);

a.click();

a.remove();

return URL.revokeObjectURL(url);
});
demo.core.flipBookImages_QMARK_ = (function demo$core$flipBookImages_QMARK_(){
var container = document.getElementById("flipBookStack");
var num_children = container.children.length;
return (num_children > (0));
});
demo.core.flipBookImageCount = (function demo$core$flipBookImageCount(){
var container = document.getElementById("flipBookStack");
var num_children = container.children.length;
return num_children;
});
demo.core.restore_from_json = (function demo$core$restore_from_json(event){
console.log("restore:: ",event);

var file = (event.target.files[(0)]);
if(cljs.core.truth_(file)){
var reader = (new FileReader());
(reader.onload = (function (e){
var json_str = e.target.result;
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var images = new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(data);
var trackName = new cljs.core.Keyword(null,"trackName","trackName",-683236735).cljs$core$IFn$_invoke$arity$1(data);
var artistName = new cljs.core.Keyword(null,"artistName","artistName",270965001).cljs$core$IFn$_invoke$arity$1(data);
var image_stack = document.getElementById("flipBookStack");
var seq__105386_105454 = cljs.core.seq(images);
var chunk__105387_105455 = null;
var count__105388_105456 = (0);
var i__105389_105457 = (0);
while(true){
if((i__105389_105457 < count__105388_105456)){
var map__105392_105458 = chunk__105387_105455.cljs$core$IIndexed$_nth$arity$2(null,i__105389_105457);
var map__105392_105459__$1 = cljs.core.__destructure_map(map__105392_105458);
var id_105460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105392_105459__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url_105461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105392_105459__$1,new cljs.core.Keyword(null,"url","url",276297046));
console.log("restore:: doseq: id: ",id_105460," url: ",url_105461);

if((cljs.core.count(url_105461) > (0))){
var wrapper_div_105462 = document.createElement("div");
var img_el_105463 = document.createElement("img");
(wrapper_div_105462.className = "flipBookContainer");

(wrapper_div_105462.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_105460));

(wrapper_div_105462.style = "width:320px; height:219px; position:absolute; overflow:hidden; display:block; background: rgba(0,0,0,0.55); color: white; margin-top:204px;");

(wrapper_div_105462.style.zIndex = id_105460.substring((8)));

demo.core.incrmentStackIndex();

(img_el_105463.src = url_105461);

(img_el_105463.className = "flipBookClass");

(img_el_105463.style = "max-width:100%; max-height:100%; width:auto; height:auto; display:block; margin:auto; object-fit:contain; pointer-events:none;");

wrapper_div_105462.appendChild(img_el_105463);

image_stack.appendChild(wrapper_div_105462);
} else {
}


var G__105464 = seq__105386_105454;
var G__105465 = chunk__105387_105455;
var G__105466 = count__105388_105456;
var G__105467 = (i__105389_105457 + (1));
seq__105386_105454 = G__105464;
chunk__105387_105455 = G__105465;
count__105388_105456 = G__105466;
i__105389_105457 = G__105467;
continue;
} else {
var temp__5823__auto___105468 = cljs.core.seq(seq__105386_105454);
if(temp__5823__auto___105468){
var seq__105386_105469__$1 = temp__5823__auto___105468;
if(cljs.core.chunked_seq_QMARK_(seq__105386_105469__$1)){
var c__5548__auto___105470 = cljs.core.chunk_first(seq__105386_105469__$1);
var G__105471 = cljs.core.chunk_rest(seq__105386_105469__$1);
var G__105472 = c__5548__auto___105470;
var G__105473 = cljs.core.count(c__5548__auto___105470);
var G__105474 = (0);
seq__105386_105454 = G__105471;
chunk__105387_105455 = G__105472;
count__105388_105456 = G__105473;
i__105389_105457 = G__105474;
continue;
} else {
var map__105393_105475 = cljs.core.first(seq__105386_105469__$1);
var map__105393_105476__$1 = cljs.core.__destructure_map(map__105393_105475);
var id_105477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105393_105476__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url_105478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105393_105476__$1,new cljs.core.Keyword(null,"url","url",276297046));
console.log("restore:: doseq: id: ",id_105477," url: ",url_105478);

if((cljs.core.count(url_105478) > (0))){
var wrapper_div_105479 = document.createElement("div");
var img_el_105480 = document.createElement("img");
(wrapper_div_105479.className = "flipBookContainer");

(wrapper_div_105479.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_105477));

(wrapper_div_105479.style = "width:320px; height:219px; position:absolute; overflow:hidden; display:block; background: rgba(0,0,0,0.55); color: white; margin-top:204px;");

(wrapper_div_105479.style.zIndex = id_105477.substring((8)));

demo.core.incrmentStackIndex();

(img_el_105480.src = url_105478);

(img_el_105480.className = "flipBookClass");

(img_el_105480.style = "max-width:100%; max-height:100%; width:auto; height:auto; display:block; margin:auto; object-fit:contain; pointer-events:none;");

wrapper_div_105479.appendChild(img_el_105480);

image_stack.appendChild(wrapper_div_105479);
} else {
}


var G__105481 = cljs.core.next(seq__105386_105469__$1);
var G__105482 = null;
var G__105483 = (0);
var G__105484 = (0);
seq__105386_105454 = G__105481;
chunk__105387_105455 = G__105482;
count__105388_105456 = G__105483;
i__105389_105457 = G__105484;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(data))){
var G__105394_105485 = new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(data);
var G__105395_105486 = trackName;
var G__105396_105487 = artistName;
(demo.core.play_jamendo_audio.cljs$core$IFn$_invoke$arity$3 ? demo.core.play_jamendo_audio.cljs$core$IFn$_invoke$arity$3(G__105394_105485,G__105395_105486,G__105396_105487) : demo.core.play_jamendo_audio.call(null,G__105394_105485,G__105395_105486,G__105396_105487));

console.log(" images: ",images,"count: ",cljs.core.count(images));

if(demo.core.flipBookImages_QMARK_()){
return demo.core.moveAudioControls();
} else {
return null;
}
} else {
return null;
}
}));

return reader.readAsText(file);
} else {
return null;
}
});
demo.core.$ = jQuery;
demo.core.images = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/owl/blinkClosed.png","images/owl/blinkHalf-c.png","images/owl/blinkFull-c.png","images/owl/blinkHalf-c.png","images/owl/blinkClosed.png","images/owl/blinkHalf-c.png","images/owl/blinkFull-c.png","images/owl/blinkHalf-c.png","images/owl/blinkClosed.png"], null);
demo.core.tiltImages = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/owl/tilt/tilt1788-c.png","images/owl/tilt/tilt1789-c.png","images/owl/tilt/tilt1790-c.png","images/owl/tilt/tilt1791-c.png","images/owl/tilt/tilt1792-c.png","images/owl/tilt/tilt1793-c.png","images/owl/tilt/tilt1792-c.png","images/owl/tilt/tilt1791-c.png","images/owl/tilt/tilt1790-c.png","images/owl/tilt/tilt1789-c.png","images/owl/tilt/tilt1788-c.png"], null);
demo.core.background_image = "images/owl/background.png";
demo.core.show_image = (function demo$core$show_image(image_list,idx){
var container = d3.select("#owl-container");
container.selectAll("img.background").data([demo.core.background_image]).join("img").classed("background",true).attr("src",cljs.core.identity).style("position","absolute").style("top","10%").style("left","0").style("transform","translateY(-50%)").style("width","100%").style("height","auto").style("z-index","0").style("display","block");

return container.selectAll("img.animated").data(cljs.core.clj__GT_js(image_list)).join("img").classed("animated",true).attr("src",cljs.core.identity).style("display",(function (d,i){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,idx)){
return "block";
} else {
return "none";
}
})).style("position","absolute").style("top",(0)).style("left","50%").style("transform","translate(-50%, -100%)").style("width","219px").style("height","auto").style("z-index","1").on("click",null);
});
demo.core.cycle_owl_blink_images = (function demo$core$cycle_owl_blink_images(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"index","index",-1531685915),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true], 0));

var frame_count = cljs.core.count(demo.core.images);
var interval_ms = (190);
var next_frame = (function demo$core$cycle_owl_blink_images_$_next_frame(i){
if((i < frame_count)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"index","index",-1531685915),i);

demo.core.show_image(demo.core.images,i);

setTimeout((function (){
return demo$core$cycle_owl_blink_images_$_next_frame((i + (1)));
}),interval_ms);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(frame_count - (1)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
} else {
return null;
}
});
return next_frame((0));
}
});
demo.core.cycle_owl_tilt_images = (function demo$core$cycle_owl_tilt_images(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"index","index",-1531685915),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true], 0));

var frame_count = cljs.core.count(demo.core.tiltImages);
var interval_ms = (190);
var next_frame = (function demo$core$cycle_owl_tilt_images_$_next_frame(i){
if((i < frame_count)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"index","index",-1531685915),i);

demo.core.show_image(demo.core.tiltImages,i);

setTimeout((function (){
return demo$core$cycle_owl_tilt_images_$_next_frame((i + (1)));
}),interval_ms);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(frame_count - (1)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
} else {
return null;
}
});
return next_frame((0));
}
});
demo.core.cached_blink_images = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (filename){
var img = (new Image());
(img.src = filename);

return img;
}),demo.core.images);
demo.core.cached_tilt_images = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (filename){
var img = (new Image());
(img.src = filename);

return img;
}),demo.core.tiltImag,demo.core.es);
if((typeof demo !== 'undefined') && (typeof demo.core !== 'undefined') && (typeof demo.core.background_imageOnce !== 'undefined')){
} else {
demo.core.background_imageOnce = (function (){var img = (new Image());
(img.src = demo.core.background_image);

return img;
})();
}
demo.core.Ashow_image = (function demo$core$Ashow_image(image_list,idx){
console.log("Ashow-image: ",image_list," idx: ",idx);

var container = d3.select("#owl-container");
container.selectAll("img.background").data([demo.core.background_imageOnce]).join("img").classed("background",true).attr("src",(function (){
return demo.core.background_imageOnce.src;
})).style("position","absolute").style("top","10%").style("left","0").style("transform","translateY(-50%)").style("width","100%").style("height","auto").style("z-index","0").style("display","block");

container.selectAll("img.animated").remove();

var img_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(image_list,idx);
console.log("show-image:: img-el ",img_el);

(img_el.className = "animated");

(img_el.style.display = "block");

(img_el.style.position = "absolute");

(img_el.style.top = "0");

(img_el.style.left = "50%");

(img_el.style.transform = "translate(-50%, -100%)");

(img_el.style.width = "219px");

(img_el.style.height = "auto");

(img_el.style.zIndex = "1");

return container.node().appendChild(img_el);
});
demo.core.cycle_owl_images = (function demo$core$cycle_owl_images(cachedImages){
console.log("cycle-owl-images");

var frame_count = cljs.core.count(cachedImages);
var interval_ms = (190);
console.log(["frame count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_count)].join(''));

var step = (function demo$core$cycle_owl_images_$_step(i){
console.log(" i: ",i);

if((i < frame_count)){
demo.core.Ashow_image(cachedImages,i);

return setTimeout((function (){
return demo$core$cycle_owl_images_$_step((i + (1)));
}),interval_ms);
} else {
return null;
}
});
return step((0));
});
demo.core.play_jamendo_audio = (function demo$core$play_jamendo_audio(url,track_name,artist_name){
var container = document.getElementById("owl-container");
var seq__105397_105488 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("audio-controls-wrapper")));
var chunk__105398_105489 = null;
var count__105399_105490 = (0);
var i__105400_105491 = (0);
while(true){
if((i__105400_105491 < count__105399_105490)){
var el_105492 = chunk__105398_105489.cljs$core$IIndexed$_nth$arity$2(null,i__105400_105491);
el_105492.remove();


var G__105493 = seq__105397_105488;
var G__105494 = chunk__105398_105489;
var G__105495 = count__105399_105490;
var G__105496 = (i__105400_105491 + (1));
seq__105397_105488 = G__105493;
chunk__105398_105489 = G__105494;
count__105399_105490 = G__105495;
i__105400_105491 = G__105496;
continue;
} else {
var temp__5823__auto___105497 = cljs.core.seq(seq__105397_105488);
if(temp__5823__auto___105497){
var seq__105397_105498__$1 = temp__5823__auto___105497;
if(cljs.core.chunked_seq_QMARK_(seq__105397_105498__$1)){
var c__5548__auto___105499 = cljs.core.chunk_first(seq__105397_105498__$1);
var G__105500 = cljs.core.chunk_rest(seq__105397_105498__$1);
var G__105501 = c__5548__auto___105499;
var G__105502 = cljs.core.count(c__5548__auto___105499);
var G__105503 = (0);
seq__105397_105488 = G__105500;
chunk__105398_105489 = G__105501;
count__105399_105490 = G__105502;
i__105400_105491 = G__105503;
continue;
} else {
var el_105504 = cljs.core.first(seq__105397_105498__$1);
el_105504.remove();


var G__105505 = cljs.core.next(seq__105397_105498__$1);
var G__105506 = null;
var G__105507 = (0);
var G__105508 = (0);
seq__105397_105488 = G__105505;
chunk__105398_105489 = G__105506;
count__105399_105490 = G__105507;
i__105400_105491 = G__105508;
continue;
}
} else {
}
}
break;
}

var seq__105401_105509 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("track-info")));
var chunk__105402_105510 = null;
var count__105403_105511 = (0);
var i__105404_105512 = (0);
while(true){
if((i__105404_105512 < count__105403_105511)){
var el_105513 = chunk__105402_105510.cljs$core$IIndexed$_nth$arity$2(null,i__105404_105512);
el_105513.remove();


var G__105514 = seq__105401_105509;
var G__105515 = chunk__105402_105510;
var G__105516 = count__105403_105511;
var G__105517 = (i__105404_105512 + (1));
seq__105401_105509 = G__105514;
chunk__105402_105510 = G__105515;
count__105403_105511 = G__105516;
i__105404_105512 = G__105517;
continue;
} else {
var temp__5823__auto___105518 = cljs.core.seq(seq__105401_105509);
if(temp__5823__auto___105518){
var seq__105401_105519__$1 = temp__5823__auto___105518;
if(cljs.core.chunked_seq_QMARK_(seq__105401_105519__$1)){
var c__5548__auto___105520 = cljs.core.chunk_first(seq__105401_105519__$1);
var G__105521 = cljs.core.chunk_rest(seq__105401_105519__$1);
var G__105522 = c__5548__auto___105520;
var G__105523 = cljs.core.count(c__5548__auto___105520);
var G__105524 = (0);
seq__105401_105509 = G__105521;
chunk__105402_105510 = G__105522;
count__105403_105511 = G__105523;
i__105404_105512 = G__105524;
continue;
} else {
var el_105525 = cljs.core.first(seq__105401_105519__$1);
el_105525.remove();


var G__105526 = cljs.core.next(seq__105401_105519__$1);
var G__105527 = null;
var G__105528 = (0);
var G__105529 = (0);
seq__105401_105509 = G__105526;
chunk__105402_105510 = G__105527;
count__105403_105511 = G__105528;
i__105404_105512 = G__105529;
continue;
}
} else {
}
}
break;
}

var audio_wrap = document.createElement("div");
(audio_wrap.className = "audio-controls-wrapper");

(audio_wrap.style = "width:256px; margin:12px auto 0 auto; display:block; position:relative; z-index:4016;");

var audio_el = document.createElement("audio");
(audio_el.src = url);

(audio_el.controls = true);

(audio_el.loop = true);

(audio_el.style = "width:100%; display:block; z-index:4016;");

audio_wrap.appendChild(audio_el);

container.appendChild(audio_wrap);

var play_promise_105530 = audio_el.play();
if(cljs.core.truth_(play_promise_105530)){
play_promise_105530.catch((function (err){
return console.warn("Autoplay blocked; user must click play.");
}));
} else {
}

var info_el = document.createElement("div");
(info_el.className = "track-info");

(info_el.style = "margin:7px 0 0 0; width:100%; color:#fff; font-size:13px; background:rgba(0,0,0,0.2); word-break:break-word; text-align:left; padding:3px 8px; border-radius:5px; box-sizing:border-box; position:relative; z-index:4012;");

(info_el.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(track_name)," \u2014 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(artist_name)].join(''));

return container.appendChild(info_el);
});
demo.core.play_random_jamendo_track = (function demo$core$play_random_jamendo_track(query,client_id,audioformat){
var url = ["https://api.jamendo.com/v3.0/tracks/?client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id),"&format=json","&limit=10","&namesearch=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(query)),"&audioformat=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(audioformat)].join('');
return fetch(url).then((function (p1__105405_SHARP_){
return p1__105405_SHARP_.json();
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var tracks = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.seq(tracks)){
var nth_track_105531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tracks,cljs.core.rand_int(cljs.core.count(tracks)));
var audio_url_105532 = new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(nth_track_105531);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"trackName","trackName",-683236735),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nth_track_105531));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"artistName","artistName",270965001),new cljs.core.Keyword(null,"artist_name","artist_name",667458845).cljs$core$IFn$_invoke$arity$1(nth_track_105531));

console.log("Playing:",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nth_track_105531),"by",new cljs.core.Keyword(null,"artist_name","artist_name",667458845).cljs$core$IFn$_invoke$arity$1(nth_track_105531));

demo.core.play_jamendo_audio(audio_url_105532,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nth_track_105531),new cljs.core.Keyword(null,"artist_name","artist_name",667458845).cljs$core$IFn$_invoke$arity$1(nth_track_105531));

if(cljs.core.truth_(new cljs.core.Keyword(null,"stackIndex","stackIndex",753986648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
return demo.core.moveAudioControls();
} else {
return null;
}
} else {
return alert("No tracks found!");
}
})).catch((function (err){
return console.error("Jamendo API error:",err);
}));
});
demo.core.image_choices = ["Fairies","Toys","Puppy","Ghost","Apophen"];
demo.core.music_choices = ["blues","rock","jazz","raggae","Apophen"];
demo.core.init_jqxImageQuery = (function demo$core$init_jqxImageQuery(){
var jq = (demo.core.$.cljs$core$IFn$_invoke$arity$1 ? demo.core.$.cljs$core$IFn$_invoke$arity$1("#jqxImageQuery") : demo.core.$.call(null,"#jqxImageQuery"));
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"source","source",-433931539),demo.core.image_choices,new cljs.core.Keyword(null,"selectedIndex","selectedIndex",-311342452),(0),new cljs.core.Keyword(null,"width","width",-384071477),"70px",new cljs.core.Keyword(null,"height","height",1025178622),"24px",new cljs.core.Keyword(null,"dropDownHeight","dropDownHeight",1612293462),"150px",new cljs.core.Keyword(null,"theme","theme",-1247880880),"orange"], null))], 0));

jq.on("select",(function (e){
var args = e.args;
var idx = args.index;
var val = (demo.core.image_choices[idx]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"query","query",-1288509510),val);

console.log("device type: ",(demo.core.device_type.cljs$core$IFn$_invoke$arity$0 ? demo.core.device_type.cljs$core$IFn$_invoke$arity$0() : demo.core.device_type.call(null)));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((demo.core.device_type.cljs$core$IFn$_invoke$arity$0 ? demo.core.device_type.cljs$core$IFn$_invoke$arity$0() : demo.core.device_type.call(null)),new cljs.core.Keyword(null,"desktop","desktop",1494219798))){
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close"], 0));
} else {
}

return console.log("Image query changed:",val);
}));

jq.on("close",(function (e){
var item = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getSelectedItem"], 0));
var val = item.value;
if(cljs.core.truth_(val)){
console.log("Selected image value via getSelectedItem:",val);

return (demo.core.search_unsplash.cljs$core$IFn$_invoke$arity$1 ? demo.core.search_unsplash.cljs$core$IFn$_invoke$arity$1(val) : demo.core.search_unsplash.call(null,val));
} else {
return null;
}
}));

jq.on("open",(function (_){
return ((jq[(0)]).style.backgroundImage = "url('butConcave8.png')");
}));

return jq.on("close",(function (_){
return ((jq[(0)]).style.backgroundImage = "url('butConvex8.png')");
}));
});
demo.core.api_key = "50911119-a113db7cf4ad0920388f14481";
demo.core.init_jqxMusicQuery = (function demo$core$init_jqxMusicQuery(){
var jq = (demo.core.$.cljs$core$IFn$_invoke$arity$1 ? demo.core.$.cljs$core$IFn$_invoke$arity$1("#jqxMusicQuery") : demo.core.$.call(null,"#jqxMusicQuery"));
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"source","source",-433931539),demo.core.music_choices,new cljs.core.Keyword(null,"selectedIndex","selectedIndex",-311342452),(0),new cljs.core.Keyword(null,"width","width",-384071477),"70px",new cljs.core.Keyword(null,"height","height",1025178622),"24px",new cljs.core.Keyword(null,"dropDownHeight","dropDownHeight",1612293462),"150px",new cljs.core.Keyword(null,"theme","theme",-1247880880),"orange"], null))], 0));

jq.on("select",(function (e){
var args = e.args;
var idx = args.index;
var val = (demo.core.music_choices[idx]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"voice","voice",185716428),val);

console.log("device type: ",(demo.core.device_type.cljs$core$IFn$_invoke$arity$0 ? demo.core.device_type.cljs$core$IFn$_invoke$arity$0() : demo.core.device_type.call(null)));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((demo.core.device_type.cljs$core$IFn$_invoke$arity$0 ? demo.core.device_type.cljs$core$IFn$_invoke$arity$0() : demo.core.device_type.call(null)),new cljs.core.Keyword(null,"desktop","desktop",1494219798))){
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close"], 0));
} else {
}

return console.log("Music option selected:",val);
}));

jq.on("close",(function (e){
var item = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getSelectedItem"], 0));
var val = (cljs.core.truth_(item)?item.value:null);
console.log("Selected value via getSelectedItem:",val);

demo.core.cycle_owl_images(demo.core.cached_tilt_images);

return demo.core.play_random_jamendo_track(val,"0d8016e0","mp32");
}));

jq.on("open",(function (_){
return ((jq[(0)]).style.backgroundImage = "url('butConcave8.png')");
}));

return jq.on("close",(function (_){
return ((jq[(0)]).style.backgroundImage = "url('butConvex8.png')");
}));
});
demo.core.start_flipbook_animation = (function demo$core$start_flipbook_animation(){
return (demo.core.cycle_flip_book.cljs$core$IFn$_invoke$arity$0 ? demo.core.cycle_flip_book.cljs$core$IFn$_invoke$arity$0() : demo.core.cycle_flip_book.call(null));
});
demo.core.init_jqBlinkButton = (function demo$core$init_jqBlinkButton(){
var container = document.getElementById("blink-button-container");
var button = document.createElement("button");
(button.id = "blink-button");

(button.innerText = "Blink");

var G__105407_105533 = button.style;
(G__105407_105533.opacity = "0.7");

(G__105407_105533.position = "absolute");

(G__105407_105533.bottom = "0px");

(G__105407_105533.left = "10px");

(G__105407_105533.zIndex = "4020");

(G__105407_105533.backgroundColor = "orange");

(G__105407_105533.borderRadius = "12px");


container.appendChild(button);

$("#blink-button").jqxButton(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"62px",new cljs.core.Keyword(null,"height","height",1025178622),"28px",new cljs.core.Keyword(null,"theme","theme",-1247880880),"material"], null))).css("border-width","0");

return $("#blink-button").on("click",(function (_){
demo.core.cycle_owl_blink_images();

if((demo.core.flipBookImageCount() > (1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809),cljs.core.not);

if(cljs.core.truth_(new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
console.log(" Blink:: animation starting ");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-running","animation-running",-822053176),true);

demo.core.start_flipbook_animation();
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-running","animation-running",-822053176),false);

if(cljs.core.truth_(new cljs.core.Keyword(null,"flipTimer","flipTimer",-591865381).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
clearTimeout(new cljs.core.Keyword(null,"flipTimer","flipTimer",-591865381).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)));
} else {
}
}

var temp__5823__auto__ = document.getElementById("blink-sound");
if(cljs.core.truth_(temp__5823__auto__)){
var audio_element = temp__5823__auto__;
return audio_element.play().catch((function (p1__105406_SHARP_){
return alert(["\u274C Audio play failed:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__105406_SHARP_)].join(''));
}));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(demo.core.flipBookImageCount(),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809),cljs.core.not);

if(cljs.core.truth_(new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
console.log(" Blink:: show 1 image ");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-running","animation-running",-822053176),true);

(demo.core.enableEventsAllImages.cljs$core$IFn$_invoke$arity$0 ? demo.core.enableEventsAllImages.cljs$core$IFn$_invoke$arity$0() : demo.core.enableEventsAllImages.call(null));

var node_list = document.querySelectorAll(".flipBookContainer");
var images = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(node_list));
var n = cljs.core.count(images);
return (cljs.core.first(images).style.opacity = "1");
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-running","animation-running",-822053176),false);

console.log(" Blink:: hide one image");

if(cljs.core.truth_(new cljs.core.Keyword(null,"flipTimer","flipTimer",-591865381).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
clearTimeout(new cljs.core.Keyword(null,"flipTimer","flipTimer",-591865381).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)));
} else {
}

return (demo.core.hideAllImages.cljs$core$IFn$_invoke$arity$0 ? demo.core.hideAllImages.cljs$core$IFn$_invoke$arity$0() : demo.core.hideAllImages.call(null));
}
} else {
return null;
}
}
}));
});
demo.core.init_jqTiltButton = (function demo$core$init_jqTiltButton(){
var container = document.getElementById("tilt-button-container");
var button = document.createElement("button");
(button.id = "tilt-button");

(button.innerText = "- Tilt -");

var G__105408_105534 = button.style;
(G__105408_105534.opacity = "0.7");

(G__105408_105534.position = "absolute");

(G__105408_105534.bottom = "0px");

(G__105408_105534.right = "10px");

(G__105408_105534.zIndex = "4020");

(G__105408_105534.backgroundColor = "orange");

(G__105408_105534.borderRadius = "12px");


container.appendChild(button);

$("#tilt-button").jqxButton(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"62px",new cljs.core.Keyword(null,"height","height",1025178622),"28px",new cljs.core.Keyword(null,"theme","theme",-1247880880),"material"], null))).css("border-width","0");

return $("#tilt-button").on("click",(function (_){
demo.core.cycle_owl_tilt_images();

if(cljs.core.truth_(new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lastSavedImageUrl","lastSavedImageUrl",-152145445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)),new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"lastSavedImageUrl","lastSavedImageUrl",-152145445),new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)));

demo.core.incrmentStackIndex();

var image_stack_105535 = document.getElementById("flipBookStack");
var wrapper_div_105536 = document.createElement("div");
var img_el_105537 = document.createElement("img");
(wrapper_div_105536.className = "flipBookContainer");

(wrapper_div_105536.style = "width:320px; height:219px; position:absolute; overflow:hidden; display:block; background: rgba(0,0,0,0.55); color: white; ");

(wrapper_div_105536.id = ["flipBookContainer",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stackIndex","stackIndex",753986648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))].join(''));

(wrapper_div_105536.style.zIndex = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stackIndex","stackIndex",753986648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state))));

(wrapper_div_105536.style.marginTop = "204px");

(img_el_105537.src = new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)));

(img_el_105537.className = "flipBookClass");

(img_el_105537.style = "max-width:100%; max-height:100%; width:auto; height:auto; display:block; margin:auto; object-fit:contain; pointer-events:none;");

img_el_105537.addEventListener("mousedown",(function (e){
var parent = e.target.parentNode;
if(cljs.core.truth_(parent)){
return parent.remove();
} else {
return null;
}
}));

wrapper_div_105536.appendChild(img_el_105537);

image_stack_105535.appendChild(wrapper_div_105536);

var el_105538 = document.querySelector(".audio-controls-wrapper");
if(cljs.core.truth_(el_105538)){
(el_105538.style.marginTop = "-190px");

(el_105538.style.opacity = "0.40");
} else {
}

var el = document.querySelector(".track-info");
if(cljs.core.truth_(el)){
return (el.style.color = "rgba(255, 255, 255, 0.5)");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
});
demo.core.play_video_BANG_ = (function demo$core$play_video_BANG_(video_url){
var video_el = document.createElement("video");
(video_el.src = video_url);

(video_el.controls = true);

(video_el.width = (480));

document.body.appendChild(video_el);

return video_el.play();
});
demo.core.speak_BANG_ = (function demo$core$speak_BANG_(text){
var utterance = (new SpeechSynthesisUtterance(text));
(utterance.lang = "en-US");

(utterance.pitch = (1));

(utterance.rate = 0.5);

(utterance.volume = 0.8);

return speechSynthesis.speak(utterance);
});
demo.core.access_key = "QRpZSqy6ot29xCjy6uaNmW_0MhNSFfWal8oN3ivFwHM";
demo.core.query = "fairies";
demo.core.handle_voice_change = (function demo$core$handle_voice_change(e){
var selected_voice = e.target.value;
alert(["Voice option selected:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_voice)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"voice","voice",185716428),selected_voice);
});
demo.core.rand_int_n = (function demo$core$rand_int_n(n){
return Math.floor((Math.random() * n));
});
demo.core.search_unsplash = (function demo$core$search_unsplash(query){
var w = window.open("","_blank","width=900,height=700,resizable,scrollbars");
var pageRand = Math.floor((Math.random() * (100)));
var url = ["https://api.unsplash.com/search/photos","?query=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(query)),"&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pageRand),"&client_id=",demo.core.access_key].join('');
if((w == null)){
return alert("Popup blocked! Please allow popups for this site.");
} else {
return fetch(url).then((function (res){
return res.json();
})).then((function (data){
var results = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data.results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var first_image = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,cljs.core.rand_int(cljs.core.count(results)));
var image_url = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(first_image,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.Keyword(null,"regular","regular",-1153375582)], null));
var author_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(first_image,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var author_link = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(first_image,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.Keyword(null,"html","html",-998796897)], null));
var html_content = ["<html><head><title>Unsplash Image</title>","<style>\n                                body { margin:0; background:#222; }\n                                .container { position:relative; width:100vw; height:100vh; display:flex; justify-content:center; align-items:center;}\n                                img { max-width:90vw; max-height:80vh; display:block; border-radius:14px; box-shadow:0 2px 18px #000a; }\n                                .overlay {\n                                  position:absolute;\n                                  left:24px; bottom:24px;\n                                  background:rgba(0,0,0,0.65);\n                                  color:white; font-size:22px;\n                                  border-radius:8px;\n                                  padding:10px 20px;\n                                  font-family:sans-serif;\n                                  text-shadow: 0 2px 6px #000a;\n                                }\n                                .overlay a { color:#aad; text-decoration:none;}\n                                .overlay a:hover { text-decoration:underline;}\n                              </style></head><body>","<div class='container'>","<img src='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_url),"' />","<div class='overlay'>Photo by <a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(author_link),"' target='_blank'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(author_name),"</a> on Unsplash</div>","</div></body></html>"].join('');
w.document.write(html_content);

return w.document.close(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151),image_url));
})).catch((function (err){
return console.error("Error fetching from Unsplash:",err);
}));
}
});
demo.core.hideAllImages = (function demo$core$hideAllImages(){
var wrapper_node_list = document.querySelectorAll(".flipBookContainer");
var wrapper_vec = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(wrapper_node_list));
var seq__105409 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,wrapper_vec));
var chunk__105410 = null;
var count__105411 = (0);
var i__105412 = (0);
while(true){
if((i__105412 < count__105411)){
var vec__105419 = chunk__105410.cljs$core$IIndexed$_nth$arity$2(null,i__105412);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105419,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105419,(1),null);
(el.style.opacity = "0");

(el.style.pointerEvents = "none");

var temp__5823__auto___105539 = el.firstElementChild;
if(cljs.core.truth_(temp__5823__auto___105539)){
var child_105540 = temp__5823__auto___105539;
(child_105540.style.pointerEvents = "none");
} else {
}


var G__105541 = seq__105409;
var G__105542 = chunk__105410;
var G__105543 = count__105411;
var G__105544 = (i__105412 + (1));
seq__105409 = G__105541;
chunk__105410 = G__105542;
count__105411 = G__105543;
i__105412 = G__105544;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__105409);
if(temp__5823__auto__){
var seq__105409__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__105409__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__105409__$1);
var G__105545 = cljs.core.chunk_rest(seq__105409__$1);
var G__105546 = c__5548__auto__;
var G__105547 = cljs.core.count(c__5548__auto__);
var G__105548 = (0);
seq__105409 = G__105545;
chunk__105410 = G__105546;
count__105411 = G__105547;
i__105412 = G__105548;
continue;
} else {
var vec__105422 = cljs.core.first(seq__105409__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105422,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105422,(1),null);
(el.style.opacity = "0");

(el.style.pointerEvents = "none");

var temp__5823__auto___105549__$1 = el.firstElementChild;
if(cljs.core.truth_(temp__5823__auto___105549__$1)){
var child_105550 = temp__5823__auto___105549__$1;
(child_105550.style.pointerEvents = "none");
} else {
}


var G__105551 = cljs.core.next(seq__105409__$1);
var G__105552 = null;
var G__105553 = (0);
var G__105554 = (0);
seq__105409 = G__105551;
chunk__105410 = G__105552;
count__105411 = G__105553;
i__105412 = G__105554;
continue;
}
} else {
return null;
}
}
break;
}
});
demo.core.enableEventsAllImages = (function demo$core$enableEventsAllImages(){
var wrapper_node_list = document.querySelectorAll(".flipBookContainer");
var wrapper_vec = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(wrapper_node_list));
var seq__105425 = cljs.core.seq(wrapper_vec);
var chunk__105426 = null;
var count__105427 = (0);
var i__105428 = (0);
while(true){
if((i__105428 < count__105427)){
var el = chunk__105426.cljs$core$IIndexed$_nth$arity$2(null,i__105428);
(el.style.pointerEvents = "auto");

var img_105555 = el.firstElementChild;
if(cljs.core.truth_(img_105555)){
(img_105555.style.pointerEvents = "auto");
} else {
}


var G__105556 = seq__105425;
var G__105557 = chunk__105426;
var G__105558 = count__105427;
var G__105559 = (i__105428 + (1));
seq__105425 = G__105556;
chunk__105426 = G__105557;
count__105427 = G__105558;
i__105428 = G__105559;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__105425);
if(temp__5823__auto__){
var seq__105425__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__105425__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__105425__$1);
var G__105560 = cljs.core.chunk_rest(seq__105425__$1);
var G__105561 = c__5548__auto__;
var G__105562 = cljs.core.count(c__5548__auto__);
var G__105563 = (0);
seq__105425 = G__105560;
chunk__105426 = G__105561;
count__105427 = G__105562;
i__105428 = G__105563;
continue;
} else {
var el = cljs.core.first(seq__105425__$1);
(el.style.pointerEvents = "auto");

var img_105564 = el.firstElementChild;
if(cljs.core.truth_(img_105564)){
(img_105564.style.pointerEvents = "auto");
} else {
}


var G__105565 = cljs.core.next(seq__105425__$1);
var G__105566 = null;
var G__105567 = (0);
var G__105568 = (0);
seq__105425 = G__105565;
chunk__105426 = G__105566;
count__105427 = G__105567;
i__105428 = G__105568;
continue;
}
} else {
return null;
}
}
break;
}
});
demo.core.cycle_flip_book = (function demo$core$cycle_flip_book(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"animation-running","animation-running",-822053176).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
demo.core.enableEventsAllImages();

var node_list = document.querySelectorAll(".flipBookContainer");
var images = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(node_list));
var n = cljs.core.count(images);
if((n > (0))){
var ordered = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__105429_SHARP_){
return parseInt(p1__105429_SHARP_.style.zIndex);
}),cljs.core._GT_,images);
var vec__105430 = ordered;
var seq__105431 = cljs.core.seq(vec__105430);
var first__105432 = cljs.core.first(seq__105431);
var seq__105431__$1 = cljs.core.next(seq__105431);
var top_img = first__105432;
var _ = seq__105431__$1;
(top_img.style.transition = "opacity 3s");

(top_img.style.opacity = "0");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"flipTimer","flipTimer",-591865381),setTimeout((function (){
var cycled = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(ordered),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(ordered)], null));
var cnt = cljs.core.count(cycled);
var seq__105433_105569 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cycled));
var chunk__105434_105570 = null;
var count__105435_105571 = (0);
var i__105436_105572 = (0);
while(true){
if((i__105436_105572 < count__105435_105571)){
var vec__105443_105573 = chunk__105434_105570.cljs$core$IIndexed$_nth$arity$2(null,i__105436_105572);
var i_105574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105443_105573,(0),null);
var el_105575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105443_105573,(1),null);
(el_105575.style.zIndex = cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3000) + ((cnt - i_105574) - (1)))));

(el_105575.style.opacity = "1");


var G__105576 = seq__105433_105569;
var G__105577 = chunk__105434_105570;
var G__105578 = count__105435_105571;
var G__105579 = (i__105436_105572 + (1));
seq__105433_105569 = G__105576;
chunk__105434_105570 = G__105577;
count__105435_105571 = G__105578;
i__105436_105572 = G__105579;
continue;
} else {
var temp__5823__auto___105580 = cljs.core.seq(seq__105433_105569);
if(temp__5823__auto___105580){
var seq__105433_105581__$1 = temp__5823__auto___105580;
if(cljs.core.chunked_seq_QMARK_(seq__105433_105581__$1)){
var c__5548__auto___105582 = cljs.core.chunk_first(seq__105433_105581__$1);
var G__105583 = cljs.core.chunk_rest(seq__105433_105581__$1);
var G__105584 = c__5548__auto___105582;
var G__105585 = cljs.core.count(c__5548__auto___105582);
var G__105586 = (0);
seq__105433_105569 = G__105583;
chunk__105434_105570 = G__105584;
count__105435_105571 = G__105585;
i__105436_105572 = G__105586;
continue;
} else {
var vec__105446_105587 = cljs.core.first(seq__105433_105581__$1);
var i_105588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105446_105587,(0),null);
var el_105589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105446_105587,(1),null);
(el_105589.style.zIndex = cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3000) + ((cnt - i_105588) - (1)))));

(el_105589.style.opacity = "1");


var G__105590 = cljs.core.next(seq__105433_105581__$1);
var G__105591 = null;
var G__105592 = (0);
var G__105593 = (0);
seq__105433_105569 = G__105590;
chunk__105434_105570 = G__105591;
count__105435_105571 = G__105592;
i__105436_105572 = G__105593;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"animation-running","animation-running",-822053176).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
return (demo.core.cycle_flip_book.cljs$core$IFn$_invoke$arity$0 ? demo.core.cycle_flip_book.cljs$core$IFn$_invoke$arity$0() : demo.core.cycle_flip_book.call(null));
} else {
return demo.core.hideAllImages();
}
}),(3000)));
} else {
return null;
}
} else {
return null;
}
});
demo.core.toggle_info_content_BANG_ = (function demo$core$toggle_info_content_BANG_(){
var el = document.getElementById("info-text");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.style.opacity,"1")){
(el.style.opacity = "0.0");

(el.style.backgroundColor = "transparent");

(el.style.pointerEvents = "none");

(document.getElementById("upload-button").style.display = "");

return (document.getElementById("download-button").style.display = "");
} else {
(document.getElementById("upload-button").style.display = "none");

(document.getElementById("download-button").style.display = "none");

(el.style.opacity = "1");

return (el.style.backgroundColor = "rgba(0,0,0,0.5)");
}
});
demo.core.add_info_button = (function demo$core$add_info_button(){
var container = document.getElementById("info-button-container");
return d3.select(container).append("button").attr("id","info-button").style("position","absolute").style("right","6px").style("bottom","76px").style("width","20px").style("height","20px").style("padding","0").style("border","none").style("background","none").style("cursor","pointer").style("opacity","0.7").style("z-index","4013").style("pointer-events","auto").html("<img src='/images/info_orange_border.png' style='width:100%;height:100%;display:block;'/>").on("click",(function (_){
return demo.core.toggle_info_content_BANG_();
}));
});
demo.core.download_flipbook = (function demo$core$download_flipbook(){
console.log("****   download-flipbook ");

var vec__105449 = demo.core.generate_json();
var fileName = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105449,(0),null);
var owls_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105449,(1),null);
console.log([" JSON: name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fileName)," owls-list: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(owls_list)].join(''));

return demo.core.download_json_BANG_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fileName),".json"].join(''),owls_list);
});
demo.core.upload_flipbook = (function demo$core$upload_flipbook(){
console.log("****  upload-flipbook ");

var input = document.getElementById("json-upload");
return input.click();
});
demo.core.add_upload_button = (function demo$core$add_upload_button(){
var container = document.getElementById("info-button-container");
return d3.select(container).append("button").attr("id","upload-button").style("position","absolute").style("right","6px").style("bottom","140px").style("width","20px").style("height","20px").style("padding","0").style("border","none").style("background","none").style("cursor","pointer").style("opacity","0.7").style("z-index","4014").style("pointer-events","auto").html("<img src='/images/upload.png' style='width:100%;height:100%;display:block;'/>").on("click",(function (_){
return demo.core.upload_flipbook();
}));
});
demo.core.add_download_button = (function demo$core$add_download_button(){
var container = document.getElementById("info-button-container");
return d3.select(container).append("button").attr("id","download-button").style("position","absolute").style("right","6px").style("bottom","107px").style("width","20px").style("height","20px").style("padding","0").style("border","none").style("background","none").style("cursor","pointer").style("opacity","0.7").style("z-index","4014").style("pointer-events","auto").html("<img src='/images/download.png' style='width:100%;height:100%;display:block;'/>").on("click",(function (_){
return demo.core.download_flipbook();
}));
});
demo.core.mobile_device_QMARK_ = (function demo$core$mobile_device_QMARK_(){
var ua = navigator.userAgent;
return cljs.core.boolean$(cljs.core.re_find(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,ua));
});
demo.core.tablet_device_QMARK_ = (function demo$core$tablet_device_QMARK_(){
var width = window.innerWidth;
var height = window.innerHeight;
var diagonal = Math.sqrt(((width * width) + (height * height)));
return ((demo.core.mobile_device_QMARK_()) && ((diagonal > (1000))));
});
demo.core.touch_device_QMARK_ = (function demo$core$touch_device_QMARK_(){
var or__5025__auto__ = window.ontouchstart;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (navigator.maxTouchPoints > (0));
}
});
demo.core.device_type = (function demo$core$device_type(){
if(demo.core.tablet_device_QMARK_()){
return new cljs.core.Keyword(null,"tablet","tablet",-318585919);
} else {
if(demo.core.mobile_device_QMARK_()){
return new cljs.core.Keyword(null,"mobile","mobile",1403078170);
} else {
return new cljs.core.Keyword(null,"desktop","desktop",1494219798);

}
}
});
demo.core.device_size = (function demo$core$device_size(){
var width = window.innerWidth;
var height = window.innerHeight;
return (new cljs.core.List(null,width,(new cljs.core.List(null,height,null,(1),null)),(2),null));
});
demo.core.init = (function demo$core$init(){
var temp__5823__auto___105594 = document.getElementById("json-upload");
if(cljs.core.truth_(temp__5823__auto___105594)){
var file_input_105595 = temp__5823__auto___105594;
file_input_105595.addEventListener("change",demo.core.restore_from_json);
} else {
}

demo.core.add_info_button();

demo.core.add_upload_button();

demo.core.add_download_button();

demo.core.show_image(demo.core.images,(0));

var container_105596 = d3.select(".layer-container");
var button_105597 = container_105596.append("button");
button_105597.attr("id","audioTrigger").style("position","absolute").style("top","42%").style("left","50%").style("transform","translate(-50%, -50%)").style("width","40px").style("height","49px").style("z-index","4016").style("background","rgba(255,165,0,0.00)").style("border","none").style("cursor","pointer").style("padding","0").style("padding-top","2").style("font-size","20px").text("");

button_105597.on("click",(function (_){
console.log("hidden button click");

var temp__5823__auto__ = document.getElementById("blink-sound");
if(cljs.core.truth_(temp__5823__auto__)){
var audio = temp__5823__auto__;
return audio.play().catch((function (p1__105452_SHARP_){
return alert(["\u274C Audio play failed:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__105452_SHARP_)].join(''));
}));
} else {
return null;
}
}));

demo.core.init_jqBlinkButton();

demo.core.init_jqTiltButton();

demo.core.init_jqxImageQuery();

demo.core.init_jqxMusicQuery();

demo.core.cycle_owl_images(demo.core.cached_blink_images);

setTimeout((function (){
return demo.core.cycle_owl_images(demo.core.cached_tilt_images);
}),(2000));

return null;
});
goog.exportSymbol('demo.core.init', demo.core.init);

//# sourceMappingURL=demo.core.js.map
