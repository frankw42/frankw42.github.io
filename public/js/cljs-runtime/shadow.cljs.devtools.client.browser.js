goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21445 = arguments.length;
var i__5750__auto___21446 = (0);
while(true){
if((i__5750__auto___21446 < len__5749__auto___21445)){
args__5755__auto__.push((arguments[i__5750__auto___21446]));

var G__21447 = (i__5750__auto___21446 + (1));
i__5750__auto___21446 = G__21447;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20992){
var G__20993 = cljs.core.first(seq20992);
var seq20992__$1 = cljs.core.next(seq20992);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20993,seq20992__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20994 = cljs.core.seq(sources);
var chunk__20995 = null;
var count__20996 = (0);
var i__20997 = (0);
while(true){
if((i__20997 < count__20996)){
var map__21010 = chunk__20995.cljs$core$IIndexed$_nth$arity$2(null,i__20997);
var map__21010__$1 = cljs.core.__destructure_map(map__21010);
var src = map__21010__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21011){var e_21448 = e21011;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21448);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21448.message)].join('')));
}

var G__21449 = seq__20994;
var G__21450 = chunk__20995;
var G__21451 = count__20996;
var G__21452 = (i__20997 + (1));
seq__20994 = G__21449;
chunk__20995 = G__21450;
count__20996 = G__21451;
i__20997 = G__21452;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20994);
if(temp__5823__auto__){
var seq__20994__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20994__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20994__$1);
var G__21453 = cljs.core.chunk_rest(seq__20994__$1);
var G__21454 = c__5548__auto__;
var G__21455 = cljs.core.count(c__5548__auto__);
var G__21456 = (0);
seq__20994 = G__21453;
chunk__20995 = G__21454;
count__20996 = G__21455;
i__20997 = G__21456;
continue;
} else {
var map__21012 = cljs.core.first(seq__20994__$1);
var map__21012__$1 = cljs.core.__destructure_map(map__21012);
var src = map__21012__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21013){var e_21457 = e21013;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21457);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21457.message)].join('')));
}

var G__21458 = cljs.core.next(seq__20994__$1);
var G__21459 = null;
var G__21460 = (0);
var G__21461 = (0);
seq__20994 = G__21458;
chunk__20995 = G__21459;
count__20996 = G__21460;
i__20997 = G__21461;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21018 = cljs.core.seq(js_requires);
var chunk__21019 = null;
var count__21020 = (0);
var i__21021 = (0);
while(true){
if((i__21021 < count__21020)){
var js_ns = chunk__21019.cljs$core$IIndexed$_nth$arity$2(null,i__21021);
var require_str_21462 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21462);


var G__21463 = seq__21018;
var G__21464 = chunk__21019;
var G__21465 = count__21020;
var G__21466 = (i__21021 + (1));
seq__21018 = G__21463;
chunk__21019 = G__21464;
count__21020 = G__21465;
i__21021 = G__21466;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21018);
if(temp__5823__auto__){
var seq__21018__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21018__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21018__$1);
var G__21467 = cljs.core.chunk_rest(seq__21018__$1);
var G__21468 = c__5548__auto__;
var G__21469 = cljs.core.count(c__5548__auto__);
var G__21470 = (0);
seq__21018 = G__21467;
chunk__21019 = G__21468;
count__21020 = G__21469;
i__21021 = G__21470;
continue;
} else {
var js_ns = cljs.core.first(seq__21018__$1);
var require_str_21471 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21471);


var G__21472 = cljs.core.next(seq__21018__$1);
var G__21473 = null;
var G__21474 = (0);
var G__21475 = (0);
seq__21018 = G__21472;
chunk__21019 = G__21473;
count__21020 = G__21474;
i__21021 = G__21475;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21024){
var map__21025 = p__21024;
var map__21025__$1 = cljs.core.__destructure_map(map__21025);
var msg = map__21025__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21026(s__21027){
return (new cljs.core.LazySeq(null,(function (){
var s__21027__$1 = s__21027;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21027__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21032 = cljs.core.first(xs__6383__auto__);
var map__21032__$1 = cljs.core.__destructure_map(map__21032);
var src = map__21032__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21032__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21032__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__21027__$1,map__21032,map__21032__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21025,map__21025__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21026_$_iter__21028(s__21029){
return (new cljs.core.LazySeq(null,((function (s__21027__$1,map__21032,map__21032__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21025,map__21025__$1,msg,info,reload_info){
return (function (){
var s__21029__$1 = s__21029;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21029__$1);
if(temp__5823__auto____$1){
var s__21029__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21029__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__21029__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__21031 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__21030 = (0);
while(true){
if((i__21030 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__21030);
cljs.core.chunk_append(b__21031,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21476 = (i__21030 + (1));
i__21030 = G__21476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21031),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21026_$_iter__21028(cljs.core.chunk_rest(s__21029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21031),null);
}
} else {
var warning = cljs.core.first(s__21029__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21026_$_iter__21028(cljs.core.rest(s__21029__$2)));
}
} else {
return null;
}
break;
}
});})(s__21027__$1,map__21032,map__21032__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21025,map__21025__$1,msg,info,reload_info))
,null,null));
});})(s__21027__$1,map__21032,map__21032__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21025,map__21025__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21026(cljs.core.rest(s__21027__$1)));
} else {
var G__21477 = cljs.core.rest(s__21027__$1);
s__21027__$1 = G__21477;
continue;
}
} else {
var G__21478 = cljs.core.rest(s__21027__$1);
s__21027__$1 = G__21478;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21033_21479 = cljs.core.seq(warnings);
var chunk__21034_21480 = null;
var count__21035_21481 = (0);
var i__21036_21482 = (0);
while(true){
if((i__21036_21482 < count__21035_21481)){
var map__21039_21483 = chunk__21034_21480.cljs$core$IIndexed$_nth$arity$2(null,i__21036_21482);
var map__21039_21484__$1 = cljs.core.__destructure_map(map__21039_21483);
var w_21485 = map__21039_21484__$1;
var msg_21486__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21039_21484__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21039_21484__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21039_21484__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21039_21484__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21489)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21487),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21488),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21486__$1)].join(''));


var G__21490 = seq__21033_21479;
var G__21491 = chunk__21034_21480;
var G__21492 = count__21035_21481;
var G__21493 = (i__21036_21482 + (1));
seq__21033_21479 = G__21490;
chunk__21034_21480 = G__21491;
count__21035_21481 = G__21492;
i__21036_21482 = G__21493;
continue;
} else {
var temp__5823__auto___21494 = cljs.core.seq(seq__21033_21479);
if(temp__5823__auto___21494){
var seq__21033_21495__$1 = temp__5823__auto___21494;
if(cljs.core.chunked_seq_QMARK_(seq__21033_21495__$1)){
var c__5548__auto___21496 = cljs.core.chunk_first(seq__21033_21495__$1);
var G__21497 = cljs.core.chunk_rest(seq__21033_21495__$1);
var G__21498 = c__5548__auto___21496;
var G__21499 = cljs.core.count(c__5548__auto___21496);
var G__21500 = (0);
seq__21033_21479 = G__21497;
chunk__21034_21480 = G__21498;
count__21035_21481 = G__21499;
i__21036_21482 = G__21500;
continue;
} else {
var map__21040_21501 = cljs.core.first(seq__21033_21495__$1);
var map__21040_21502__$1 = cljs.core.__destructure_map(map__21040_21501);
var w_21503 = map__21040_21502__$1;
var msg_21504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21040_21502__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21040_21502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21040_21502__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21040_21502__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21507)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21505),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21506),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21504__$1)].join(''));


var G__21508 = cljs.core.next(seq__21033_21495__$1);
var G__21509 = null;
var G__21510 = (0);
var G__21511 = (0);
seq__21033_21479 = G__21508;
chunk__21034_21480 = G__21509;
count__21035_21481 = G__21510;
i__21036_21482 = G__21511;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21023_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21023_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21042 = node_uri;
G__21042.setQuery(null);

G__21042.setPath(new$);

return G__21042;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21043){
var map__21044 = p__21043;
var map__21044__$1 = cljs.core.__destructure_map(map__21044);
var msg = map__21044__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21044__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21044__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21046 = cljs.core.seq(updates);
var chunk__21048 = null;
var count__21049 = (0);
var i__21050 = (0);
while(true){
if((i__21050 < count__21049)){
var path = chunk__21048.cljs$core$IIndexed$_nth$arity$2(null,i__21050);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21268_21512 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21272_21513 = null;
var count__21273_21514 = (0);
var i__21274_21515 = (0);
while(true){
if((i__21274_21515 < count__21273_21514)){
var node_21516 = chunk__21272_21513.cljs$core$IIndexed$_nth$arity$2(null,i__21274_21515);
if(cljs.core.not(node_21516.shadow$old)){
var path_match_21517 = shadow.cljs.devtools.client.browser.match_paths(node_21516.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21517)){
var new_link_21518 = (function (){var G__21320 = node_21516.cloneNode(true);
G__21320.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21517),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21320;
})();
(node_21516.shadow$old = true);

(new_link_21518.onload = ((function (seq__21268_21512,chunk__21272_21513,count__21273_21514,i__21274_21515,seq__21046,chunk__21048,count__21049,i__21050,new_link_21518,path_match_21517,node_21516,path,map__21044,map__21044__$1,msg,updates,reload_info){
return (function (e){
var seq__21328_21519 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21330_21520 = null;
var count__21331_21521 = (0);
var i__21332_21522 = (0);
while(true){
if((i__21332_21522 < count__21331_21521)){
var map__21354_21523 = chunk__21330_21520.cljs$core$IIndexed$_nth$arity$2(null,i__21332_21522);
var map__21354_21524__$1 = cljs.core.__destructure_map(map__21354_21523);
var task_21525 = map__21354_21524__$1;
var fn_str_21526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354_21524__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354_21524__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21528 = goog.getObjectByName(fn_str_21526,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21527)].join(''));

(fn_obj_21528.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21528.cljs$core$IFn$_invoke$arity$2(path,new_link_21518) : fn_obj_21528.call(null,path,new_link_21518));


var G__21529 = seq__21328_21519;
var G__21530 = chunk__21330_21520;
var G__21531 = count__21331_21521;
var G__21532 = (i__21332_21522 + (1));
seq__21328_21519 = G__21529;
chunk__21330_21520 = G__21530;
count__21331_21521 = G__21531;
i__21332_21522 = G__21532;
continue;
} else {
var temp__5823__auto___21533 = cljs.core.seq(seq__21328_21519);
if(temp__5823__auto___21533){
var seq__21328_21534__$1 = temp__5823__auto___21533;
if(cljs.core.chunked_seq_QMARK_(seq__21328_21534__$1)){
var c__5548__auto___21535 = cljs.core.chunk_first(seq__21328_21534__$1);
var G__21536 = cljs.core.chunk_rest(seq__21328_21534__$1);
var G__21537 = c__5548__auto___21535;
var G__21538 = cljs.core.count(c__5548__auto___21535);
var G__21539 = (0);
seq__21328_21519 = G__21536;
chunk__21330_21520 = G__21537;
count__21331_21521 = G__21538;
i__21332_21522 = G__21539;
continue;
} else {
var map__21357_21540 = cljs.core.first(seq__21328_21534__$1);
var map__21357_21541__$1 = cljs.core.__destructure_map(map__21357_21540);
var task_21542 = map__21357_21541__$1;
var fn_str_21543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357_21541__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357_21541__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21545 = goog.getObjectByName(fn_str_21543,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21544)].join(''));

(fn_obj_21545.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21545.cljs$core$IFn$_invoke$arity$2(path,new_link_21518) : fn_obj_21545.call(null,path,new_link_21518));


var G__21546 = cljs.core.next(seq__21328_21534__$1);
var G__21547 = null;
var G__21548 = (0);
var G__21549 = (0);
seq__21328_21519 = G__21546;
chunk__21330_21520 = G__21547;
count__21331_21521 = G__21548;
i__21332_21522 = G__21549;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21516);
});})(seq__21268_21512,chunk__21272_21513,count__21273_21514,i__21274_21515,seq__21046,chunk__21048,count__21049,i__21050,new_link_21518,path_match_21517,node_21516,path,map__21044,map__21044__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21517], 0));

goog.dom.insertSiblingAfter(new_link_21518,node_21516);


var G__21550 = seq__21268_21512;
var G__21551 = chunk__21272_21513;
var G__21552 = count__21273_21514;
var G__21553 = (i__21274_21515 + (1));
seq__21268_21512 = G__21550;
chunk__21272_21513 = G__21551;
count__21273_21514 = G__21552;
i__21274_21515 = G__21553;
continue;
} else {
var G__21554 = seq__21268_21512;
var G__21555 = chunk__21272_21513;
var G__21556 = count__21273_21514;
var G__21557 = (i__21274_21515 + (1));
seq__21268_21512 = G__21554;
chunk__21272_21513 = G__21555;
count__21273_21514 = G__21556;
i__21274_21515 = G__21557;
continue;
}
} else {
var G__21558 = seq__21268_21512;
var G__21559 = chunk__21272_21513;
var G__21560 = count__21273_21514;
var G__21561 = (i__21274_21515 + (1));
seq__21268_21512 = G__21558;
chunk__21272_21513 = G__21559;
count__21273_21514 = G__21560;
i__21274_21515 = G__21561;
continue;
}
} else {
var temp__5823__auto___21562 = cljs.core.seq(seq__21268_21512);
if(temp__5823__auto___21562){
var seq__21268_21563__$1 = temp__5823__auto___21562;
if(cljs.core.chunked_seq_QMARK_(seq__21268_21563__$1)){
var c__5548__auto___21564 = cljs.core.chunk_first(seq__21268_21563__$1);
var G__21565 = cljs.core.chunk_rest(seq__21268_21563__$1);
var G__21566 = c__5548__auto___21564;
var G__21567 = cljs.core.count(c__5548__auto___21564);
var G__21568 = (0);
seq__21268_21512 = G__21565;
chunk__21272_21513 = G__21566;
count__21273_21514 = G__21567;
i__21274_21515 = G__21568;
continue;
} else {
var node_21569 = cljs.core.first(seq__21268_21563__$1);
if(cljs.core.not(node_21569.shadow$old)){
var path_match_21570 = shadow.cljs.devtools.client.browser.match_paths(node_21569.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21570)){
var new_link_21571 = (function (){var G__21358 = node_21569.cloneNode(true);
G__21358.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21570),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21358;
})();
(node_21569.shadow$old = true);

(new_link_21571.onload = ((function (seq__21268_21512,chunk__21272_21513,count__21273_21514,i__21274_21515,seq__21046,chunk__21048,count__21049,i__21050,new_link_21571,path_match_21570,node_21569,seq__21268_21563__$1,temp__5823__auto___21562,path,map__21044,map__21044__$1,msg,updates,reload_info){
return (function (e){
var seq__21359_21572 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21361_21573 = null;
var count__21362_21574 = (0);
var i__21363_21575 = (0);
while(true){
if((i__21363_21575 < count__21362_21574)){
var map__21367_21576 = chunk__21361_21573.cljs$core$IIndexed$_nth$arity$2(null,i__21363_21575);
var map__21367_21577__$1 = cljs.core.__destructure_map(map__21367_21576);
var task_21578 = map__21367_21577__$1;
var fn_str_21579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367_21577__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367_21577__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21581 = goog.getObjectByName(fn_str_21579,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21580)].join(''));

(fn_obj_21581.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21581.cljs$core$IFn$_invoke$arity$2(path,new_link_21571) : fn_obj_21581.call(null,path,new_link_21571));


var G__21582 = seq__21359_21572;
var G__21583 = chunk__21361_21573;
var G__21584 = count__21362_21574;
var G__21585 = (i__21363_21575 + (1));
seq__21359_21572 = G__21582;
chunk__21361_21573 = G__21583;
count__21362_21574 = G__21584;
i__21363_21575 = G__21585;
continue;
} else {
var temp__5823__auto___21586__$1 = cljs.core.seq(seq__21359_21572);
if(temp__5823__auto___21586__$1){
var seq__21359_21587__$1 = temp__5823__auto___21586__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21359_21587__$1)){
var c__5548__auto___21588 = cljs.core.chunk_first(seq__21359_21587__$1);
var G__21589 = cljs.core.chunk_rest(seq__21359_21587__$1);
var G__21590 = c__5548__auto___21588;
var G__21591 = cljs.core.count(c__5548__auto___21588);
var G__21592 = (0);
seq__21359_21572 = G__21589;
chunk__21361_21573 = G__21590;
count__21362_21574 = G__21591;
i__21363_21575 = G__21592;
continue;
} else {
var map__21368_21593 = cljs.core.first(seq__21359_21587__$1);
var map__21368_21594__$1 = cljs.core.__destructure_map(map__21368_21593);
var task_21595 = map__21368_21594__$1;
var fn_str_21596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21368_21594__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21368_21594__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21598 = goog.getObjectByName(fn_str_21596,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21597)].join(''));

(fn_obj_21598.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21598.cljs$core$IFn$_invoke$arity$2(path,new_link_21571) : fn_obj_21598.call(null,path,new_link_21571));


var G__21599 = cljs.core.next(seq__21359_21587__$1);
var G__21600 = null;
var G__21601 = (0);
var G__21602 = (0);
seq__21359_21572 = G__21599;
chunk__21361_21573 = G__21600;
count__21362_21574 = G__21601;
i__21363_21575 = G__21602;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21569);
});})(seq__21268_21512,chunk__21272_21513,count__21273_21514,i__21274_21515,seq__21046,chunk__21048,count__21049,i__21050,new_link_21571,path_match_21570,node_21569,seq__21268_21563__$1,temp__5823__auto___21562,path,map__21044,map__21044__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21570], 0));

goog.dom.insertSiblingAfter(new_link_21571,node_21569);


var G__21603 = cljs.core.next(seq__21268_21563__$1);
var G__21604 = null;
var G__21605 = (0);
var G__21606 = (0);
seq__21268_21512 = G__21603;
chunk__21272_21513 = G__21604;
count__21273_21514 = G__21605;
i__21274_21515 = G__21606;
continue;
} else {
var G__21607 = cljs.core.next(seq__21268_21563__$1);
var G__21608 = null;
var G__21609 = (0);
var G__21610 = (0);
seq__21268_21512 = G__21607;
chunk__21272_21513 = G__21608;
count__21273_21514 = G__21609;
i__21274_21515 = G__21610;
continue;
}
} else {
var G__21611 = cljs.core.next(seq__21268_21563__$1);
var G__21612 = null;
var G__21613 = (0);
var G__21614 = (0);
seq__21268_21512 = G__21611;
chunk__21272_21513 = G__21612;
count__21273_21514 = G__21613;
i__21274_21515 = G__21614;
continue;
}
}
} else {
}
}
break;
}


var G__21615 = seq__21046;
var G__21616 = chunk__21048;
var G__21617 = count__21049;
var G__21618 = (i__21050 + (1));
seq__21046 = G__21615;
chunk__21048 = G__21616;
count__21049 = G__21617;
i__21050 = G__21618;
continue;
} else {
var G__21619 = seq__21046;
var G__21620 = chunk__21048;
var G__21621 = count__21049;
var G__21622 = (i__21050 + (1));
seq__21046 = G__21619;
chunk__21048 = G__21620;
count__21049 = G__21621;
i__21050 = G__21622;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21046);
if(temp__5823__auto__){
var seq__21046__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21046__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21046__$1);
var G__21623 = cljs.core.chunk_rest(seq__21046__$1);
var G__21624 = c__5548__auto__;
var G__21625 = cljs.core.count(c__5548__auto__);
var G__21626 = (0);
seq__21046 = G__21623;
chunk__21048 = G__21624;
count__21049 = G__21625;
i__21050 = G__21626;
continue;
} else {
var path = cljs.core.first(seq__21046__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21369_21627 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21373_21628 = null;
var count__21374_21629 = (0);
var i__21375_21630 = (0);
while(true){
if((i__21375_21630 < count__21374_21629)){
var node_21631 = chunk__21373_21628.cljs$core$IIndexed$_nth$arity$2(null,i__21375_21630);
if(cljs.core.not(node_21631.shadow$old)){
var path_match_21632 = shadow.cljs.devtools.client.browser.match_paths(node_21631.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21632)){
var new_link_21633 = (function (){var G__21401 = node_21631.cloneNode(true);
G__21401.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21632),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21401;
})();
(node_21631.shadow$old = true);

(new_link_21633.onload = ((function (seq__21369_21627,chunk__21373_21628,count__21374_21629,i__21375_21630,seq__21046,chunk__21048,count__21049,i__21050,new_link_21633,path_match_21632,node_21631,path,seq__21046__$1,temp__5823__auto__,map__21044,map__21044__$1,msg,updates,reload_info){
return (function (e){
var seq__21402_21634 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21404_21635 = null;
var count__21405_21636 = (0);
var i__21406_21637 = (0);
while(true){
if((i__21406_21637 < count__21405_21636)){
var map__21410_21638 = chunk__21404_21635.cljs$core$IIndexed$_nth$arity$2(null,i__21406_21637);
var map__21410_21639__$1 = cljs.core.__destructure_map(map__21410_21638);
var task_21640 = map__21410_21639__$1;
var fn_str_21641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21410_21639__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21410_21639__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21643 = goog.getObjectByName(fn_str_21641,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21642)].join(''));

(fn_obj_21643.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21643.cljs$core$IFn$_invoke$arity$2(path,new_link_21633) : fn_obj_21643.call(null,path,new_link_21633));


var G__21644 = seq__21402_21634;
var G__21645 = chunk__21404_21635;
var G__21646 = count__21405_21636;
var G__21647 = (i__21406_21637 + (1));
seq__21402_21634 = G__21644;
chunk__21404_21635 = G__21645;
count__21405_21636 = G__21646;
i__21406_21637 = G__21647;
continue;
} else {
var temp__5823__auto___21648__$1 = cljs.core.seq(seq__21402_21634);
if(temp__5823__auto___21648__$1){
var seq__21402_21649__$1 = temp__5823__auto___21648__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21402_21649__$1)){
var c__5548__auto___21650 = cljs.core.chunk_first(seq__21402_21649__$1);
var G__21651 = cljs.core.chunk_rest(seq__21402_21649__$1);
var G__21652 = c__5548__auto___21650;
var G__21653 = cljs.core.count(c__5548__auto___21650);
var G__21654 = (0);
seq__21402_21634 = G__21651;
chunk__21404_21635 = G__21652;
count__21405_21636 = G__21653;
i__21406_21637 = G__21654;
continue;
} else {
var map__21411_21655 = cljs.core.first(seq__21402_21649__$1);
var map__21411_21656__$1 = cljs.core.__destructure_map(map__21411_21655);
var task_21657 = map__21411_21656__$1;
var fn_str_21658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411_21656__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411_21656__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21660 = goog.getObjectByName(fn_str_21658,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21659)].join(''));

(fn_obj_21660.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21660.cljs$core$IFn$_invoke$arity$2(path,new_link_21633) : fn_obj_21660.call(null,path,new_link_21633));


var G__21661 = cljs.core.next(seq__21402_21649__$1);
var G__21662 = null;
var G__21663 = (0);
var G__21664 = (0);
seq__21402_21634 = G__21661;
chunk__21404_21635 = G__21662;
count__21405_21636 = G__21663;
i__21406_21637 = G__21664;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21631);
});})(seq__21369_21627,chunk__21373_21628,count__21374_21629,i__21375_21630,seq__21046,chunk__21048,count__21049,i__21050,new_link_21633,path_match_21632,node_21631,path,seq__21046__$1,temp__5823__auto__,map__21044,map__21044__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21632], 0));

goog.dom.insertSiblingAfter(new_link_21633,node_21631);


var G__21665 = seq__21369_21627;
var G__21666 = chunk__21373_21628;
var G__21667 = count__21374_21629;
var G__21668 = (i__21375_21630 + (1));
seq__21369_21627 = G__21665;
chunk__21373_21628 = G__21666;
count__21374_21629 = G__21667;
i__21375_21630 = G__21668;
continue;
} else {
var G__21669 = seq__21369_21627;
var G__21670 = chunk__21373_21628;
var G__21671 = count__21374_21629;
var G__21672 = (i__21375_21630 + (1));
seq__21369_21627 = G__21669;
chunk__21373_21628 = G__21670;
count__21374_21629 = G__21671;
i__21375_21630 = G__21672;
continue;
}
} else {
var G__21673 = seq__21369_21627;
var G__21674 = chunk__21373_21628;
var G__21675 = count__21374_21629;
var G__21676 = (i__21375_21630 + (1));
seq__21369_21627 = G__21673;
chunk__21373_21628 = G__21674;
count__21374_21629 = G__21675;
i__21375_21630 = G__21676;
continue;
}
} else {
var temp__5823__auto___21677__$1 = cljs.core.seq(seq__21369_21627);
if(temp__5823__auto___21677__$1){
var seq__21369_21678__$1 = temp__5823__auto___21677__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21369_21678__$1)){
var c__5548__auto___21679 = cljs.core.chunk_first(seq__21369_21678__$1);
var G__21680 = cljs.core.chunk_rest(seq__21369_21678__$1);
var G__21681 = c__5548__auto___21679;
var G__21682 = cljs.core.count(c__5548__auto___21679);
var G__21683 = (0);
seq__21369_21627 = G__21680;
chunk__21373_21628 = G__21681;
count__21374_21629 = G__21682;
i__21375_21630 = G__21683;
continue;
} else {
var node_21684 = cljs.core.first(seq__21369_21678__$1);
if(cljs.core.not(node_21684.shadow$old)){
var path_match_21685 = shadow.cljs.devtools.client.browser.match_paths(node_21684.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21685)){
var new_link_21686 = (function (){var G__21412 = node_21684.cloneNode(true);
G__21412.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21685),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21412;
})();
(node_21684.shadow$old = true);

(new_link_21686.onload = ((function (seq__21369_21627,chunk__21373_21628,count__21374_21629,i__21375_21630,seq__21046,chunk__21048,count__21049,i__21050,new_link_21686,path_match_21685,node_21684,seq__21369_21678__$1,temp__5823__auto___21677__$1,path,seq__21046__$1,temp__5823__auto__,map__21044,map__21044__$1,msg,updates,reload_info){
return (function (e){
var seq__21413_21687 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21415_21688 = null;
var count__21416_21689 = (0);
var i__21417_21690 = (0);
while(true){
if((i__21417_21690 < count__21416_21689)){
var map__21421_21691 = chunk__21415_21688.cljs$core$IIndexed$_nth$arity$2(null,i__21417_21690);
var map__21421_21692__$1 = cljs.core.__destructure_map(map__21421_21691);
var task_21693 = map__21421_21692__$1;
var fn_str_21694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21421_21692__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21421_21692__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21696 = goog.getObjectByName(fn_str_21694,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21695)].join(''));

(fn_obj_21696.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21696.cljs$core$IFn$_invoke$arity$2(path,new_link_21686) : fn_obj_21696.call(null,path,new_link_21686));


var G__21697 = seq__21413_21687;
var G__21698 = chunk__21415_21688;
var G__21699 = count__21416_21689;
var G__21700 = (i__21417_21690 + (1));
seq__21413_21687 = G__21697;
chunk__21415_21688 = G__21698;
count__21416_21689 = G__21699;
i__21417_21690 = G__21700;
continue;
} else {
var temp__5823__auto___21701__$2 = cljs.core.seq(seq__21413_21687);
if(temp__5823__auto___21701__$2){
var seq__21413_21702__$1 = temp__5823__auto___21701__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21413_21702__$1)){
var c__5548__auto___21703 = cljs.core.chunk_first(seq__21413_21702__$1);
var G__21704 = cljs.core.chunk_rest(seq__21413_21702__$1);
var G__21705 = c__5548__auto___21703;
var G__21706 = cljs.core.count(c__5548__auto___21703);
var G__21707 = (0);
seq__21413_21687 = G__21704;
chunk__21415_21688 = G__21705;
count__21416_21689 = G__21706;
i__21417_21690 = G__21707;
continue;
} else {
var map__21422_21708 = cljs.core.first(seq__21413_21702__$1);
var map__21422_21709__$1 = cljs.core.__destructure_map(map__21422_21708);
var task_21710 = map__21422_21709__$1;
var fn_str_21711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21422_21709__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21422_21709__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21713 = goog.getObjectByName(fn_str_21711,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21712)].join(''));

(fn_obj_21713.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21713.cljs$core$IFn$_invoke$arity$2(path,new_link_21686) : fn_obj_21713.call(null,path,new_link_21686));


var G__21714 = cljs.core.next(seq__21413_21702__$1);
var G__21715 = null;
var G__21716 = (0);
var G__21717 = (0);
seq__21413_21687 = G__21714;
chunk__21415_21688 = G__21715;
count__21416_21689 = G__21716;
i__21417_21690 = G__21717;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21684);
});})(seq__21369_21627,chunk__21373_21628,count__21374_21629,i__21375_21630,seq__21046,chunk__21048,count__21049,i__21050,new_link_21686,path_match_21685,node_21684,seq__21369_21678__$1,temp__5823__auto___21677__$1,path,seq__21046__$1,temp__5823__auto__,map__21044,map__21044__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21685], 0));

goog.dom.insertSiblingAfter(new_link_21686,node_21684);


var G__21718 = cljs.core.next(seq__21369_21678__$1);
var G__21719 = null;
var G__21720 = (0);
var G__21721 = (0);
seq__21369_21627 = G__21718;
chunk__21373_21628 = G__21719;
count__21374_21629 = G__21720;
i__21375_21630 = G__21721;
continue;
} else {
var G__21722 = cljs.core.next(seq__21369_21678__$1);
var G__21723 = null;
var G__21724 = (0);
var G__21725 = (0);
seq__21369_21627 = G__21722;
chunk__21373_21628 = G__21723;
count__21374_21629 = G__21724;
i__21375_21630 = G__21725;
continue;
}
} else {
var G__21726 = cljs.core.next(seq__21369_21678__$1);
var G__21727 = null;
var G__21728 = (0);
var G__21729 = (0);
seq__21369_21627 = G__21726;
chunk__21373_21628 = G__21727;
count__21374_21629 = G__21728;
i__21375_21630 = G__21729;
continue;
}
}
} else {
}
}
break;
}


var G__21730 = cljs.core.next(seq__21046__$1);
var G__21731 = null;
var G__21732 = (0);
var G__21733 = (0);
seq__21046 = G__21730;
chunk__21048 = G__21731;
count__21049 = G__21732;
i__21050 = G__21733;
continue;
} else {
var G__21734 = cljs.core.next(seq__21046__$1);
var G__21735 = null;
var G__21736 = (0);
var G__21737 = (0);
seq__21046 = G__21734;
chunk__21048 = G__21735;
count__21049 = G__21736;
i__21050 = G__21737;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21424 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21424) : success.call(null,G__21424));
}catch (e21423){var e = e21423;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21425,success,fail){
var map__21426 = p__21425;
var map__21426__$1 = cljs.core.__destructure_map(map__21426);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21428 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21428) : success.call(null,G__21428));
}catch (e21427){var e = e21427;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21429,done,error){
var map__21430 = p__21429;
var map__21430__$1 = cljs.core.__destructure_map(map__21430);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21430__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21431,done,error){
var map__21432 = p__21431;
var map__21432__$1 = cljs.core.__destructure_map(map__21432);
var msg = map__21432__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21432__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21432__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21432__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21433){
var map__21434 = p__21433;
var map__21434__$1 = cljs.core.__destructure_map(map__21434);
var src = map__21434__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21435 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21435) : done.call(null,G__21435));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21436){
var map__21437 = p__21436;
var map__21437__$1 = cljs.core.__destructure_map(map__21437);
var msg__$1 = map__21437__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21438){var ex = e21438;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21439){
var map__21440 = p__21439;
var map__21440__$1 = cljs.core.__destructure_map(map__21440);
var env = map__21440__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21441){
var map__21442 = p__21441;
var map__21442__$1 = cljs.core.__destructure_map(map__21442);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21443){
var map__21444 = p__21443;
var map__21444__$1 = cljs.core.__destructure_map(map__21444);
var svc = map__21444__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
