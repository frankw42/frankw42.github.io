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
var el_17385 = document.querySelector(".audio-controls-wrapper");
if(cljs.core.truth_(el_17385)){
(el_17385.style.marginTop = "-190px");

(el_17385.style.opacity = "0.40");
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
demo.core.not_covered_QMARK_ = (function demo$core$not_covered_QMARK_(el){
var rect = el.getBoundingClientRect();
var x = (rect.left + (rect.width / (2)));
var y = (rect.top + (rect.height / (2)));
return (document.elementFromPoint(x,y) === el);
});
demo.core.addTrashCan = (function demo$core$addTrashCan(wrapper_div){
var trash_img = document.createElement("img");
(trash_img.src = "images/trashCan.png");

(trash_img.style = "position: absolute;\n         left: 0;\n         bottom: 0;\n         max-width: 32px;\n         max-height: 256px;\n         width: auto;\n         height: auto;\n         object-fit: contain;\n         z-index: 100;\n         opacity: 0.5;\n         pointer-events: auto;\n         margin: 0;\n         display: block;");

wrapper_div.appendChild(trash_img);

return trash_img.addEventListener("mousedown",(function (e){
var parent = e.target.parentNode;
var id = parent.id;
var textField = parent.textContent;
console.log("trashCan callback ");

if(cljs.core.truth_(parent)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"stop-to-delete","stop-to-delete",-1777099282),true);

var node_list_17386 = document.querySelectorAll(".flipBookContainer");
var images_17387 = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(node_list_17386));
var n_17388 = cljs.core.count(images_17387);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_17388,(1))){
parent.remove();
} else {
var found_17389 = cljs.core.some((function (p1__17321_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last-top-z","last-top-z",-1635675769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)),p1__17321_SHARP_.style.zIndex)){
return p1__17321_SHARP_;
} else {
return null;
}
}),images_17387);
if(cljs.core.truth_(found_17389)){
var temp__5823__auto___17390 = found_17389.parentNode;
if(cljs.core.truth_(temp__5823__auto___17390)){
var parent_17391__$1 = temp__5823__auto___17390;
parent_17391__$1.removeChild(found_17389);
} else {
}
} else {
}
}
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"stop-to-delete","stop-to-delete",-1777099282),false);
}));
});
demo.core.restore_from_json = (function demo$core$restore_from_json(event){
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
var seq__17322_17392 = cljs.core.seq(images);
var chunk__17323_17393 = null;
var count__17324_17394 = (0);
var i__17325_17395 = (0);
while(true){
if((i__17325_17395 < count__17324_17394)){
var map__17328_17396 = chunk__17323_17393.cljs$core$IIndexed$_nth$arity$2(null,i__17325_17395);
var map__17328_17397__$1 = cljs.core.__destructure_map(map__17328_17396);
var id_17398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17328_17397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url_17399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17328_17397__$1,new cljs.core.Keyword(null,"url","url",276297046));
if((cljs.core.count(url_17399) > (0))){
var wrapper_div_17400 = document.createElement("div");
var img_el_17401 = document.createElement("img");
(wrapper_div_17400.className = "flipBookContainer");

(wrapper_div_17400.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_17398));

(wrapper_div_17400.style = "width:320px; height:219px; position:absolute; overflow:hidden; display:block; background: rgba(0,0,0,0.55); color: white; margin-top:204px;");

(wrapper_div_17400.style.zIndex = id_17398.substring((8)));

demo.core.incrmentStackIndex();

(img_el_17401.src = url_17399);

(img_el_17401.className = "flipBookClass");

(img_el_17401.style = "max-width:100%; max-height:100%; width:auto; height:auto; display:block; margin:auto; object-fit:contain; pointer-events:none;");

wrapper_div_17400.appendChild(img_el_17401);

demo.core.addTrashCan(wrapper_div_17400);

image_stack.appendChild(wrapper_div_17400);
} else {
}


var G__17402 = seq__17322_17392;
var G__17403 = chunk__17323_17393;
var G__17404 = count__17324_17394;
var G__17405 = (i__17325_17395 + (1));
seq__17322_17392 = G__17402;
chunk__17323_17393 = G__17403;
count__17324_17394 = G__17404;
i__17325_17395 = G__17405;
continue;
} else {
var temp__5823__auto___17406 = cljs.core.seq(seq__17322_17392);
if(temp__5823__auto___17406){
var seq__17322_17407__$1 = temp__5823__auto___17406;
if(cljs.core.chunked_seq_QMARK_(seq__17322_17407__$1)){
var c__5548__auto___17408 = cljs.core.chunk_first(seq__17322_17407__$1);
var G__17409 = cljs.core.chunk_rest(seq__17322_17407__$1);
var G__17410 = c__5548__auto___17408;
var G__17411 = cljs.core.count(c__5548__auto___17408);
var G__17412 = (0);
seq__17322_17392 = G__17409;
chunk__17323_17393 = G__17410;
count__17324_17394 = G__17411;
i__17325_17395 = G__17412;
continue;
} else {
var map__17329_17413 = cljs.core.first(seq__17322_17407__$1);
var map__17329_17414__$1 = cljs.core.__destructure_map(map__17329_17413);
var id_17415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17329_17414__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url_17416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17329_17414__$1,new cljs.core.Keyword(null,"url","url",276297046));
if((cljs.core.count(url_17416) > (0))){
var wrapper_div_17417 = document.createElement("div");
var img_el_17418 = document.createElement("img");
(wrapper_div_17417.className = "flipBookContainer");

(wrapper_div_17417.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_17415));

(wrapper_div_17417.style = "width:320px; height:219px; position:absolute; overflow:hidden; display:block; background: rgba(0,0,0,0.55); color: white; margin-top:204px;");

(wrapper_div_17417.style.zIndex = id_17415.substring((8)));

demo.core.incrmentStackIndex();

(img_el_17418.src = url_17416);

(img_el_17418.className = "flipBookClass");

(img_el_17418.style = "max-width:100%; max-height:100%; width:auto; height:auto; display:block; margin:auto; object-fit:contain; pointer-events:none;");

wrapper_div_17417.appendChild(img_el_17418);

demo.core.addTrashCan(wrapper_div_17417);

image_stack.appendChild(wrapper_div_17417);
} else {
}


var G__17419 = cljs.core.next(seq__17322_17407__$1);
var G__17420 = null;
var G__17421 = (0);
var G__17422 = (0);
seq__17322_17392 = G__17419;
chunk__17323_17393 = G__17420;
count__17324_17394 = G__17421;
i__17325_17395 = G__17422;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(data))){
var G__17330_17423 = new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(data);
var G__17331_17424 = trackName;
var G__17332_17425 = artistName;
(demo.core.play_jamendo_audio.cljs$core$IFn$_invoke$arity$3 ? demo.core.play_jamendo_audio.cljs$core$IFn$_invoke$arity$3(G__17330_17423,G__17331_17424,G__17332_17425) : demo.core.play_jamendo_audio.call(null,G__17330_17423,G__17331_17424,G__17332_17425));

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
var container = d3.select("#owl-container");
container.selectAll("img.background").data([demo.core.background_imageOnce]).join("img").classed("background",true).attr("src",(function (){
return demo.core.background_imageOnce.src;
})).style("position","absolute").style("top","10%").style("left","0").style("transform","translateY(-50%)").style("width","100%").style("height","auto").style("z-index","0").style("display","block");

container.selectAll("img.animated").remove();

var img_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(image_list,idx);
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
var frame_count = cljs.core.count(cachedImages);
var interval_ms = (190);
var step = (function demo$core$cycle_owl_images_$_step(i){
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
var seq__17333_17426 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("audio-controls-wrapper")));
var chunk__17334_17427 = null;
var count__17335_17428 = (0);
var i__17336_17429 = (0);
while(true){
if((i__17336_17429 < count__17335_17428)){
var el_17430 = chunk__17334_17427.cljs$core$IIndexed$_nth$arity$2(null,i__17336_17429);
el_17430.remove();


var G__17431 = seq__17333_17426;
var G__17432 = chunk__17334_17427;
var G__17433 = count__17335_17428;
var G__17434 = (i__17336_17429 + (1));
seq__17333_17426 = G__17431;
chunk__17334_17427 = G__17432;
count__17335_17428 = G__17433;
i__17336_17429 = G__17434;
continue;
} else {
var temp__5823__auto___17435 = cljs.core.seq(seq__17333_17426);
if(temp__5823__auto___17435){
var seq__17333_17436__$1 = temp__5823__auto___17435;
if(cljs.core.chunked_seq_QMARK_(seq__17333_17436__$1)){
var c__5548__auto___17437 = cljs.core.chunk_first(seq__17333_17436__$1);
var G__17438 = cljs.core.chunk_rest(seq__17333_17436__$1);
var G__17439 = c__5548__auto___17437;
var G__17440 = cljs.core.count(c__5548__auto___17437);
var G__17441 = (0);
seq__17333_17426 = G__17438;
chunk__17334_17427 = G__17439;
count__17335_17428 = G__17440;
i__17336_17429 = G__17441;
continue;
} else {
var el_17442 = cljs.core.first(seq__17333_17436__$1);
el_17442.remove();


var G__17443 = cljs.core.next(seq__17333_17436__$1);
var G__17444 = null;
var G__17445 = (0);
var G__17446 = (0);
seq__17333_17426 = G__17443;
chunk__17334_17427 = G__17444;
count__17335_17428 = G__17445;
i__17336_17429 = G__17446;
continue;
}
} else {
}
}
break;
}

var seq__17337_17447 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("track-info")));
var chunk__17338_17448 = null;
var count__17339_17449 = (0);
var i__17340_17450 = (0);
while(true){
if((i__17340_17450 < count__17339_17449)){
var el_17451 = chunk__17338_17448.cljs$core$IIndexed$_nth$arity$2(null,i__17340_17450);
el_17451.remove();


var G__17452 = seq__17337_17447;
var G__17453 = chunk__17338_17448;
var G__17454 = count__17339_17449;
var G__17455 = (i__17340_17450 + (1));
seq__17337_17447 = G__17452;
chunk__17338_17448 = G__17453;
count__17339_17449 = G__17454;
i__17340_17450 = G__17455;
continue;
} else {
var temp__5823__auto___17456 = cljs.core.seq(seq__17337_17447);
if(temp__5823__auto___17456){
var seq__17337_17457__$1 = temp__5823__auto___17456;
if(cljs.core.chunked_seq_QMARK_(seq__17337_17457__$1)){
var c__5548__auto___17458 = cljs.core.chunk_first(seq__17337_17457__$1);
var G__17459 = cljs.core.chunk_rest(seq__17337_17457__$1);
var G__17460 = c__5548__auto___17458;
var G__17461 = cljs.core.count(c__5548__auto___17458);
var G__17462 = (0);
seq__17337_17447 = G__17459;
chunk__17338_17448 = G__17460;
count__17339_17449 = G__17461;
i__17340_17450 = G__17462;
continue;
} else {
var el_17463 = cljs.core.first(seq__17337_17457__$1);
el_17463.remove();


var G__17464 = cljs.core.next(seq__17337_17457__$1);
var G__17465 = null;
var G__17466 = (0);
var G__17467 = (0);
seq__17337_17447 = G__17464;
chunk__17338_17448 = G__17465;
count__17339_17449 = G__17466;
i__17340_17450 = G__17467;
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

var play_promise_17468 = audio_el.play();
if(cljs.core.truth_(play_promise_17468)){
play_promise_17468.catch((function (err){
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
var url = ["https://api.jamendo.com/v3.0/tracks/?client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id),"&format=json","&limit=20","&namesearch=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(query)),"&audioformat=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(audioformat)].join('');
return fetch(url).then((function (p1__17341_SHARP_){
return p1__17341_SHARP_.json();
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var tracks = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.seq(tracks)){
var nth_track_17469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tracks,cljs.core.rand_int(cljs.core.count(tracks)));
var audio_url_17470 = new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(nth_track_17469);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"trackName","trackName",-683236735),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nth_track_17469));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"artistName","artistName",270965001),new cljs.core.Keyword(null,"artist_name","artist_name",667458845).cljs$core$IFn$_invoke$arity$1(nth_track_17469));

demo.core.play_jamendo_audio(audio_url_17470,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nth_track_17469),new cljs.core.Keyword(null,"artist_name","artist_name",667458845).cljs$core$IFn$_invoke$arity$1(nth_track_17469));

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

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((demo.core.device_type.cljs$core$IFn$_invoke$arity$0 ? demo.core.device_type.cljs$core$IFn$_invoke$arity$0() : demo.core.device_type.call(null)),new cljs.core.Keyword(null,"desktop","desktop",1494219798))){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close"], 0));
} else {
return null;
}
}));

jq.on("close",(function (e){
var item = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getSelectedItem"], 0));
var val = item.value;
if(cljs.core.truth_(val)){
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

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((demo.core.device_type.cljs$core$IFn$_invoke$arity$0 ? demo.core.device_type.cljs$core$IFn$_invoke$arity$0() : demo.core.device_type.call(null)),new cljs.core.Keyword(null,"desktop","desktop",1494219798))){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close"], 0));
} else {
return null;
}
}));

jq.on("close",(function (e){
var item = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(jq,"jqxDropDownList",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getSelectedItem"], 0));
var val = (cljs.core.truth_(item)?item.value:null);
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

var G__17343_17471 = button.style;
(G__17343_17471.opacity = "0.7");

(G__17343_17471.position = "absolute");

(G__17343_17471.bottom = "0px");

(G__17343_17471.left = "10px");

(G__17343_17471.zIndex = "4020");

(G__17343_17471.backgroundColor = "orange");

(G__17343_17471.borderRadius = "12px");


container.appendChild(button);

$("#blink-button").jqxButton(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"62px",new cljs.core.Keyword(null,"height","height",1025178622),"28px",new cljs.core.Keyword(null,"theme","theme",-1247880880),"material"], null))).css("border-width","0");

return $("#blink-button").on("click",(function (_){
demo.core.cycle_owl_blink_images();

if((demo.core.flipBookImageCount() > (1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809),cljs.core.not);

if(cljs.core.truth_(new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
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
return audio_element.play().catch((function (p1__17342_SHARP_){
return alert(["\u274C Audio play failed:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17342_SHARP_)].join(''));
}));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(demo.core.flipBookImageCount(),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809),cljs.core.not);

if(cljs.core.truth_(new cljs.core.Keyword(null,"blinkStart","blinkStart",-1525785809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-running","animation-running",-822053176),true);

var node_list = document.querySelectorAll(".flipBookContainer");
var images = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(node_list));
var n = cljs.core.count(images);
return (cljs.core.first(images).style.opacity = "1");
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-running","animation-running",-822053176),false);

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

var G__17344_17472 = button.style;
(G__17344_17472.opacity = "0.7");

(G__17344_17472.position = "absolute");

(G__17344_17472.bottom = "0px");

(G__17344_17472.right = "10px");

(G__17344_17472.zIndex = "4020");

(G__17344_17472.backgroundColor = "orange");

(G__17344_17472.borderRadius = "12px");


container.appendChild(button);

$("#tilt-button").jqxButton(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"62px",new cljs.core.Keyword(null,"height","height",1025178622),"28px",new cljs.core.Keyword(null,"theme","theme",-1247880880),"material"], null))).css("border-width","0");

return $("#tilt-button").on("click",(function (_){
demo.core.cycle_owl_tilt_images();

if(cljs.core.truth_(new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lastSavedImageUrl","lastSavedImageUrl",-152145445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)),new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"lastSavedImageUrl","lastSavedImageUrl",-152145445),new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)));

demo.core.incrmentStackIndex();

var image_stack_17473 = document.getElementById("flipBookStack");
var wrapper_div_17474 = document.createElement("div");
var img_el_17475 = document.createElement("img");
(wrapper_div_17474.className = "flipBookContainer");

(wrapper_div_17474.style = "width:320px; height:219px; position:absolute; pointer-events: none; overflow:hidden; display:block; background: rgba(0,0,0,0.55); color: white; ");

(wrapper_div_17474.id = ["flipBookContainer",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stackIndex","stackIndex",753986648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))].join(''));

(wrapper_div_17474.style.zIndex = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stackIndex","stackIndex",753986648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state))));

(wrapper_div_17474.style.marginTop = "204px");

(img_el_17475.src = new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)));

(img_el_17475.className = "flipBookClass");

(img_el_17475.style = "max-width:100%; max-height:100%; width:auto; height:auto; display:block; margin:auto; object-fit:contain; pointer-events:none;");

wrapper_div_17474.appendChild(img_el_17475);

demo.core.addTrashCan(wrapper_div_17474);

image_stack_17473.appendChild(wrapper_div_17474);

var el_17476 = document.querySelector(".audio-controls-wrapper");
if(cljs.core.truth_(el_17476)){
(el_17476.style.marginTop = "-190px");

(el_17476.style.opacity = "0.40");
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
var pageRand = Math.floor((Math.random() * (120)));
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
var seq__17345 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,wrapper_vec));
var chunk__17346 = null;
var count__17347 = (0);
var i__17348 = (0);
while(true){
if((i__17348 < count__17347)){
var vec__17355 = chunk__17346.cljs$core$IIndexed$_nth$arity$2(null,i__17348);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17355,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17355,(1),null);
(el.style.opacity = "0");

(el.style.pointerEvents = "none");


var G__17477 = seq__17345;
var G__17478 = chunk__17346;
var G__17479 = count__17347;
var G__17480 = (i__17348 + (1));
seq__17345 = G__17477;
chunk__17346 = G__17478;
count__17347 = G__17479;
i__17348 = G__17480;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17345);
if(temp__5823__auto__){
var seq__17345__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17345__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__17345__$1);
var G__17481 = cljs.core.chunk_rest(seq__17345__$1);
var G__17482 = c__5548__auto__;
var G__17483 = cljs.core.count(c__5548__auto__);
var G__17484 = (0);
seq__17345 = G__17481;
chunk__17346 = G__17482;
count__17347 = G__17483;
i__17348 = G__17484;
continue;
} else {
var vec__17358 = cljs.core.first(seq__17345__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(1),null);
(el.style.opacity = "0");

(el.style.pointerEvents = "none");


var G__17485 = cljs.core.next(seq__17345__$1);
var G__17486 = null;
var G__17487 = (0);
var G__17488 = (0);
seq__17345 = G__17485;
chunk__17346 = G__17486;
count__17347 = G__17487;
i__17348 = G__17488;
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
var node_list = document.querySelectorAll(".flipBookContainer");
var images = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(node_list));
var n = cljs.core.count(images);
if((n > (0))){
var ordered = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__17361_SHARP_){
return parseInt(p1__17361_SHARP_.style.zIndex);
}),cljs.core._GT_,images);
var vec__17362 = ordered;
var seq__17363 = cljs.core.seq(vec__17362);
var first__17364 = cljs.core.first(seq__17363);
var seq__17363__$1 = cljs.core.next(seq__17363);
var top_img_wrapper = first__17364;
var _ = seq__17363__$1;
var flipBookEl_17489 = document.querySelector("#flipBookStack");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"last-top-z","last-top-z",-1635675769),cljs.core.str.cljs$core$IFn$_invoke$arity$1((parseInt(top_img_wrapper.style.zIndex) - (1))));

(top_img_wrapper.style.transition = "opacity 3000ms");

(top_img_wrapper.style.opacity = "0");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"flipTimer","flipTimer",-591865381),setTimeout((function (){
var cycled = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(ordered),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(ordered)], null));
var cnt = cljs.core.count(cycled);
var seq__17365_17490 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cycled));
var chunk__17366_17491 = null;
var count__17367_17492 = (0);
var i__17368_17493 = (0);
while(true){
if((i__17368_17493 < count__17367_17492)){
var vec__17375_17494 = chunk__17366_17491.cljs$core$IIndexed$_nth$arity$2(null,i__17368_17493);
var i_17495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17375_17494,(0),null);
var el_17496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17375_17494,(1),null);
(el_17496.style.zIndex = cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3000) + ((cnt - i_17495) - (1)))));

(el_17496.style.opacity = "1");


var G__17497 = seq__17365_17490;
var G__17498 = chunk__17366_17491;
var G__17499 = count__17367_17492;
var G__17500 = (i__17368_17493 + (1));
seq__17365_17490 = G__17497;
chunk__17366_17491 = G__17498;
count__17367_17492 = G__17499;
i__17368_17493 = G__17500;
continue;
} else {
var temp__5823__auto___17501 = cljs.core.seq(seq__17365_17490);
if(temp__5823__auto___17501){
var seq__17365_17502__$1 = temp__5823__auto___17501;
if(cljs.core.chunked_seq_QMARK_(seq__17365_17502__$1)){
var c__5548__auto___17503 = cljs.core.chunk_first(seq__17365_17502__$1);
var G__17504 = cljs.core.chunk_rest(seq__17365_17502__$1);
var G__17505 = c__5548__auto___17503;
var G__17506 = cljs.core.count(c__5548__auto___17503);
var G__17507 = (0);
seq__17365_17490 = G__17504;
chunk__17366_17491 = G__17505;
count__17367_17492 = G__17506;
i__17368_17493 = G__17507;
continue;
} else {
var vec__17378_17508 = cljs.core.first(seq__17365_17502__$1);
var i_17509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17378_17508,(0),null);
var el_17510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17378_17508,(1),null);
(el_17510.style.zIndex = cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3000) + ((cnt - i_17509) - (1)))));

(el_17510.style.opacity = "1");


var G__17511 = cljs.core.next(seq__17365_17502__$1);
var G__17512 = null;
var G__17513 = (0);
var G__17514 = (0);
seq__17365_17490 = G__17511;
chunk__17366_17491 = G__17512;
count__17367_17492 = G__17513;
i__17368_17493 = G__17514;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"stop-to-delete","stop-to-delete",-1777099282).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
return console.log("stop");
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"animation-running","animation-running",-822053176).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.core.state)))){
return console.log("not stopped to delete , running ",(demo.core.cycle_flip_book.cljs$core$IFn$_invoke$arity$0 ? demo.core.cycle_flip_book.cljs$core$IFn$_invoke$arity$0() : demo.core.cycle_flip_book.call(null)));
} else {
console.log("not stopped to delete, not running, hideAllImages ");

return demo.core.hideAllImages();

}
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
return d3.select(container).append("button").attr("id","info-button").style("position","absolute").style("right","6px").style("bottom","76px").style("width","20px").style("height","20px").style("padding","0").style("border","none").style("background","none").style("cursor","pointer").style("opacity","0.7").style("z-index","4013").style("pointer-events","auto").html("<img src='images/info_orange_border.png' style='width:100%;height:100%;display:block;'/>").on("click",(function (_){
return demo.core.toggle_info_content_BANG_();
}));
});
demo.core.download_flipbook = (function demo$core$download_flipbook(){
var vec__17381 = demo.core.generate_json();
var fileName = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17381,(0),null);
var owls_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17381,(1),null);
return demo.core.download_json_BANG_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fileName),".json"].join(''),owls_list);
});
demo.core.upload_flipbook = (function demo$core$upload_flipbook(){
var input = document.getElementById("json-upload");
return input.click();
});
demo.core.add_upload_button = (function demo$core$add_upload_button(){
var container = document.getElementById("info-button-container");
return d3.select(container).append("button").attr("id","upload-button").style("position","absolute").style("right","6px").style("bottom","140px").style("width","20px").style("height","20px").style("padding","0").style("border","none").style("background","none").style("cursor","pointer").style("opacity","0.7").style("z-index","4014").style("pointer-events","auto").html("<img src='images/upload.png' style='width:100%;height:100%;display:block;'/>").on("click",(function (_){
return demo.core.upload_flipbook();
}));
});
demo.core.add_download_button = (function demo$core$add_download_button(){
var container = document.getElementById("info-button-container");
return d3.select(container).append("button").attr("id","download-button").style("position","absolute").style("right","6px").style("bottom","107px").style("width","20px").style("height","20px").style("padding","0").style("border","none").style("background","none").style("cursor","pointer").style("opacity","0.7").style("z-index","4014").style("pointer-events","auto").html("<img src='images/download.png' style='width:100%;height:100%;display:block;'/>").on("click",(function (_){
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
var temp__5823__auto___17515 = document.getElementById("json-upload");
if(cljs.core.truth_(temp__5823__auto___17515)){
var file_input_17516 = temp__5823__auto___17515;
file_input_17516.addEventListener("change",demo.core.restore_from_json);
} else {
}

demo.core.add_info_button();

demo.core.add_upload_button();

demo.core.add_download_button();

demo.core.show_image(demo.core.images,(0));

var container_17517 = d3.select(".layer-container");
var button_17518 = container_17517.append("button");
button_17518.attr("id","audioTrigger").style("position","absolute").style("top","42%").style("left","50%").style("transform","translate(-50%, -50%)").style("width","40px").style("height","49px").style("z-index","4016").style("background","rgba(255,165,0,0.00)").style("border","none").style("cursor","pointer").style("padding","0").style("padding-top","2").style("font-size","20px").text("");

button_17518.on("click",(function (_){
demo.core.show_image(demo.core.images,(2));

demo.core.speak_BANG_("Hay who touched my nosey! Is that Stella or Brandon?");

setTimeout((function (){
return demo.core.show_image(demo.core.images,(0));
}),(5000));

var temp__5823__auto__ = document.getElementById("blink-sound");
if(cljs.core.truth_(temp__5823__auto__)){
var audio = temp__5823__auto__;
return audio.play().catch((function (p1__17384_SHARP_){
return alert(["\u274C Audio play failed:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17384_SHARP_)].join(''));
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

return setTimeout((function (){
return demo.core.cycle_owl_images(demo.core.cached_tilt_images);
}),(5000));
});
goog.exportSymbol('demo.core.init', demo.core.init);

//# sourceMappingURL=demo.core.js.map
