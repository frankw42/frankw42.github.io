// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20229__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20229__auto__){
return or__20229__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20229__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26392_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26392_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26397 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26398 = null;
var count__26399 = (0);
var i__26400 = (0);
while(true){
if((i__26400 < count__26399)){
var n = cljs.core._nth.call(null,chunk__26398,i__26400);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26401 = seq__26397;
var G__26402 = chunk__26398;
var G__26403 = count__26399;
var G__26404 = (i__26400 + (1));
seq__26397 = G__26401;
chunk__26398 = G__26402;
count__26399 = G__26403;
i__26400 = G__26404;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26397);
if(temp__4657__auto__){
var seq__26397__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26397__$1)){
var c__21043__auto__ = cljs.core.chunk_first.call(null,seq__26397__$1);
var G__26405 = cljs.core.chunk_rest.call(null,seq__26397__$1);
var G__26406 = c__21043__auto__;
var G__26407 = cljs.core.count.call(null,c__21043__auto__);
var G__26408 = (0);
seq__26397 = G__26405;
chunk__26398 = G__26406;
count__26399 = G__26407;
i__26400 = G__26408;
continue;
} else {
var n = cljs.core.first.call(null,seq__26397__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26409 = cljs.core.next.call(null,seq__26397__$1);
var G__26410 = null;
var G__26411 = (0);
var G__26412 = (0);
seq__26397 = G__26409;
chunk__26398 = G__26410;
count__26399 = G__26411;
i__26400 = G__26412;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26463_26474 = cljs.core.seq.call(null,deps);
var chunk__26464_26475 = null;
var count__26465_26476 = (0);
var i__26466_26477 = (0);
while(true){
if((i__26466_26477 < count__26465_26476)){
var dep_26478 = cljs.core._nth.call(null,chunk__26464_26475,i__26466_26477);
topo_sort_helper_STAR_.call(null,dep_26478,(depth + (1)),state);

var G__26479 = seq__26463_26474;
var G__26480 = chunk__26464_26475;
var G__26481 = count__26465_26476;
var G__26482 = (i__26466_26477 + (1));
seq__26463_26474 = G__26479;
chunk__26464_26475 = G__26480;
count__26465_26476 = G__26481;
i__26466_26477 = G__26482;
continue;
} else {
var temp__4657__auto___26483 = cljs.core.seq.call(null,seq__26463_26474);
if(temp__4657__auto___26483){
var seq__26463_26484__$1 = temp__4657__auto___26483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26463_26484__$1)){
var c__21043__auto___26485 = cljs.core.chunk_first.call(null,seq__26463_26484__$1);
var G__26486 = cljs.core.chunk_rest.call(null,seq__26463_26484__$1);
var G__26487 = c__21043__auto___26485;
var G__26488 = cljs.core.count.call(null,c__21043__auto___26485);
var G__26489 = (0);
seq__26463_26474 = G__26486;
chunk__26464_26475 = G__26487;
count__26465_26476 = G__26488;
i__26466_26477 = G__26489;
continue;
} else {
var dep_26490 = cljs.core.first.call(null,seq__26463_26484__$1);
topo_sort_helper_STAR_.call(null,dep_26490,(depth + (1)),state);

var G__26491 = cljs.core.next.call(null,seq__26463_26484__$1);
var G__26492 = null;
var G__26493 = (0);
var G__26494 = (0);
seq__26463_26474 = G__26491;
chunk__26464_26475 = G__26492;
count__26465_26476 = G__26493;
i__26466_26477 = G__26494;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26467){
var vec__26471 = p__26467;
var seq__26472 = cljs.core.seq.call(null,vec__26471);
var first__26473 = cljs.core.first.call(null,seq__26472);
var seq__26472__$1 = cljs.core.next.call(null,seq__26472);
var x = first__26473;
var xs = seq__26472__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26471,seq__26472,first__26473,seq__26472__$1,x,xs,get_deps__$1){
return (function (p1__26413_SHARP_){
return clojure.set.difference.call(null,p1__26413_SHARP_,x);
});})(vec__26471,seq__26472,first__26473,seq__26472__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26507 = cljs.core.seq.call(null,provides);
var chunk__26508 = null;
var count__26509 = (0);
var i__26510 = (0);
while(true){
if((i__26510 < count__26509)){
var prov = cljs.core._nth.call(null,chunk__26508,i__26510);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26511_26519 = cljs.core.seq.call(null,requires);
var chunk__26512_26520 = null;
var count__26513_26521 = (0);
var i__26514_26522 = (0);
while(true){
if((i__26514_26522 < count__26513_26521)){
var req_26523 = cljs.core._nth.call(null,chunk__26512_26520,i__26514_26522);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26523,prov);

var G__26524 = seq__26511_26519;
var G__26525 = chunk__26512_26520;
var G__26526 = count__26513_26521;
var G__26527 = (i__26514_26522 + (1));
seq__26511_26519 = G__26524;
chunk__26512_26520 = G__26525;
count__26513_26521 = G__26526;
i__26514_26522 = G__26527;
continue;
} else {
var temp__4657__auto___26528 = cljs.core.seq.call(null,seq__26511_26519);
if(temp__4657__auto___26528){
var seq__26511_26529__$1 = temp__4657__auto___26528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26511_26529__$1)){
var c__21043__auto___26530 = cljs.core.chunk_first.call(null,seq__26511_26529__$1);
var G__26531 = cljs.core.chunk_rest.call(null,seq__26511_26529__$1);
var G__26532 = c__21043__auto___26530;
var G__26533 = cljs.core.count.call(null,c__21043__auto___26530);
var G__26534 = (0);
seq__26511_26519 = G__26531;
chunk__26512_26520 = G__26532;
count__26513_26521 = G__26533;
i__26514_26522 = G__26534;
continue;
} else {
var req_26535 = cljs.core.first.call(null,seq__26511_26529__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26535,prov);

var G__26536 = cljs.core.next.call(null,seq__26511_26529__$1);
var G__26537 = null;
var G__26538 = (0);
var G__26539 = (0);
seq__26511_26519 = G__26536;
chunk__26512_26520 = G__26537;
count__26513_26521 = G__26538;
i__26514_26522 = G__26539;
continue;
}
} else {
}
}
break;
}

var G__26540 = seq__26507;
var G__26541 = chunk__26508;
var G__26542 = count__26509;
var G__26543 = (i__26510 + (1));
seq__26507 = G__26540;
chunk__26508 = G__26541;
count__26509 = G__26542;
i__26510 = G__26543;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26507);
if(temp__4657__auto__){
var seq__26507__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26507__$1)){
var c__21043__auto__ = cljs.core.chunk_first.call(null,seq__26507__$1);
var G__26544 = cljs.core.chunk_rest.call(null,seq__26507__$1);
var G__26545 = c__21043__auto__;
var G__26546 = cljs.core.count.call(null,c__21043__auto__);
var G__26547 = (0);
seq__26507 = G__26544;
chunk__26508 = G__26545;
count__26509 = G__26546;
i__26510 = G__26547;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26507__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26515_26548 = cljs.core.seq.call(null,requires);
var chunk__26516_26549 = null;
var count__26517_26550 = (0);
var i__26518_26551 = (0);
while(true){
if((i__26518_26551 < count__26517_26550)){
var req_26552 = cljs.core._nth.call(null,chunk__26516_26549,i__26518_26551);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26552,prov);

var G__26553 = seq__26515_26548;
var G__26554 = chunk__26516_26549;
var G__26555 = count__26517_26550;
var G__26556 = (i__26518_26551 + (1));
seq__26515_26548 = G__26553;
chunk__26516_26549 = G__26554;
count__26517_26550 = G__26555;
i__26518_26551 = G__26556;
continue;
} else {
var temp__4657__auto___26557__$1 = cljs.core.seq.call(null,seq__26515_26548);
if(temp__4657__auto___26557__$1){
var seq__26515_26558__$1 = temp__4657__auto___26557__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26515_26558__$1)){
var c__21043__auto___26559 = cljs.core.chunk_first.call(null,seq__26515_26558__$1);
var G__26560 = cljs.core.chunk_rest.call(null,seq__26515_26558__$1);
var G__26561 = c__21043__auto___26559;
var G__26562 = cljs.core.count.call(null,c__21043__auto___26559);
var G__26563 = (0);
seq__26515_26548 = G__26560;
chunk__26516_26549 = G__26561;
count__26517_26550 = G__26562;
i__26518_26551 = G__26563;
continue;
} else {
var req_26564 = cljs.core.first.call(null,seq__26515_26558__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26564,prov);

var G__26565 = cljs.core.next.call(null,seq__26515_26558__$1);
var G__26566 = null;
var G__26567 = (0);
var G__26568 = (0);
seq__26515_26548 = G__26565;
chunk__26516_26549 = G__26566;
count__26517_26550 = G__26567;
i__26518_26551 = G__26568;
continue;
}
} else {
}
}
break;
}

var G__26569 = cljs.core.next.call(null,seq__26507__$1);
var G__26570 = null;
var G__26571 = (0);
var G__26572 = (0);
seq__26507 = G__26569;
chunk__26508 = G__26570;
count__26509 = G__26571;
i__26510 = G__26572;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26577_26581 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26578_26582 = null;
var count__26579_26583 = (0);
var i__26580_26584 = (0);
while(true){
if((i__26580_26584 < count__26579_26583)){
var ns_26585 = cljs.core._nth.call(null,chunk__26578_26582,i__26580_26584);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26585);

var G__26586 = seq__26577_26581;
var G__26587 = chunk__26578_26582;
var G__26588 = count__26579_26583;
var G__26589 = (i__26580_26584 + (1));
seq__26577_26581 = G__26586;
chunk__26578_26582 = G__26587;
count__26579_26583 = G__26588;
i__26580_26584 = G__26589;
continue;
} else {
var temp__4657__auto___26590 = cljs.core.seq.call(null,seq__26577_26581);
if(temp__4657__auto___26590){
var seq__26577_26591__$1 = temp__4657__auto___26590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26577_26591__$1)){
var c__21043__auto___26592 = cljs.core.chunk_first.call(null,seq__26577_26591__$1);
var G__26593 = cljs.core.chunk_rest.call(null,seq__26577_26591__$1);
var G__26594 = c__21043__auto___26592;
var G__26595 = cljs.core.count.call(null,c__21043__auto___26592);
var G__26596 = (0);
seq__26577_26581 = G__26593;
chunk__26578_26582 = G__26594;
count__26579_26583 = G__26595;
i__26580_26584 = G__26596;
continue;
} else {
var ns_26597 = cljs.core.first.call(null,seq__26577_26591__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26597);

var G__26598 = cljs.core.next.call(null,seq__26577_26591__$1);
var G__26599 = null;
var G__26600 = (0);
var G__26601 = (0);
seq__26577_26581 = G__26598;
chunk__26578_26582 = G__26599;
count__26579_26583 = G__26600;
i__26580_26584 = G__26601;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20229__auto__ = goog.require__;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26602__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26603__i = 0, G__26603__a = new Array(arguments.length -  0);
while (G__26603__i < G__26603__a.length) {G__26603__a[G__26603__i] = arguments[G__26603__i + 0]; ++G__26603__i;}
  args = new cljs.core.IndexedSeq(G__26603__a,0);
} 
return G__26602__delegate.call(this,args);};
G__26602.cljs$lang$maxFixedArity = 0;
G__26602.cljs$lang$applyTo = (function (arglist__26604){
var args = cljs.core.seq(arglist__26604);
return G__26602__delegate(args);
});
G__26602.cljs$core$IFn$_invoke$arity$variadic = G__26602__delegate;
return G__26602;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26606 = cljs.core._EQ_;
var expr__26607 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26606.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26607))){
var path_parts = ((function (pred__26606,expr__26607){
return (function (p1__26605_SHARP_){
return clojure.string.split.call(null,p1__26605_SHARP_,/[\/\\]/);
});})(pred__26606,expr__26607))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26606,expr__26607){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26609){if((e26609 instanceof Error)){
var e = e26609;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26609;

}
}})());
});
;})(path_parts,sep,root,pred__26606,expr__26607))
} else {
if(cljs.core.truth_(pred__26606.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26607))){
return ((function (pred__26606,expr__26607){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26606,expr__26607){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26606,expr__26607))
);

return deferred.addErrback(((function (deferred,pred__26606,expr__26607){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26606,expr__26607))
);
});
;})(pred__26606,expr__26607))
} else {
return ((function (pred__26606,expr__26607){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26606,expr__26607))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26610,callback){
var map__26613 = p__26610;
var map__26613__$1 = ((((!((map__26613 == null)))?((((map__26613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26613):map__26613);
var file_msg = map__26613__$1;
var request_url = cljs.core.get.call(null,map__26613__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26613,map__26613__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26613,map__26613__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__){
return (function (state_26637){
var state_val_26638 = (state_26637[(1)]);
if((state_val_26638 === (7))){
var inst_26633 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
var statearr_26639_26659 = state_26637__$1;
(statearr_26639_26659[(2)] = inst_26633);

(statearr_26639_26659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (1))){
var state_26637__$1 = state_26637;
var statearr_26640_26660 = state_26637__$1;
(statearr_26640_26660[(2)] = null);

(statearr_26640_26660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (4))){
var inst_26617 = (state_26637[(7)]);
var inst_26617__$1 = (state_26637[(2)]);
var state_26637__$1 = (function (){var statearr_26641 = state_26637;
(statearr_26641[(7)] = inst_26617__$1);

return statearr_26641;
})();
if(cljs.core.truth_(inst_26617__$1)){
var statearr_26642_26661 = state_26637__$1;
(statearr_26642_26661[(1)] = (5));

} else {
var statearr_26643_26662 = state_26637__$1;
(statearr_26643_26662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (6))){
var state_26637__$1 = state_26637;
var statearr_26644_26663 = state_26637__$1;
(statearr_26644_26663[(2)] = null);

(statearr_26644_26663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (3))){
var inst_26635 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26637__$1,inst_26635);
} else {
if((state_val_26638 === (2))){
var state_26637__$1 = state_26637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26637__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26638 === (11))){
var inst_26629 = (state_26637[(2)]);
var state_26637__$1 = (function (){var statearr_26645 = state_26637;
(statearr_26645[(8)] = inst_26629);

return statearr_26645;
})();
var statearr_26646_26664 = state_26637__$1;
(statearr_26646_26664[(2)] = null);

(statearr_26646_26664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (9))){
var inst_26623 = (state_26637[(9)]);
var inst_26621 = (state_26637[(10)]);
var inst_26625 = inst_26623.call(null,inst_26621);
var state_26637__$1 = state_26637;
var statearr_26647_26665 = state_26637__$1;
(statearr_26647_26665[(2)] = inst_26625);

(statearr_26647_26665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (5))){
var inst_26617 = (state_26637[(7)]);
var inst_26619 = figwheel.client.file_reloading.blocking_load.call(null,inst_26617);
var state_26637__$1 = state_26637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26637__$1,(8),inst_26619);
} else {
if((state_val_26638 === (10))){
var inst_26621 = (state_26637[(10)]);
var inst_26627 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26621);
var state_26637__$1 = state_26637;
var statearr_26648_26666 = state_26637__$1;
(statearr_26648_26666[(2)] = inst_26627);

(statearr_26648_26666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (8))){
var inst_26623 = (state_26637[(9)]);
var inst_26617 = (state_26637[(7)]);
var inst_26621 = (state_26637[(2)]);
var inst_26622 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26623__$1 = cljs.core.get.call(null,inst_26622,inst_26617);
var state_26637__$1 = (function (){var statearr_26649 = state_26637;
(statearr_26649[(9)] = inst_26623__$1);

(statearr_26649[(10)] = inst_26621);

return statearr_26649;
})();
if(cljs.core.truth_(inst_26623__$1)){
var statearr_26650_26667 = state_26637__$1;
(statearr_26650_26667[(1)] = (9));

} else {
var statearr_26651_26668 = state_26637__$1;
(statearr_26651_26668[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22507__auto__))
;
return ((function (switch__22395__auto__,c__22507__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22396__auto__ = null;
var figwheel$client$file_reloading$state_machine__22396__auto____0 = (function (){
var statearr_26655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26655[(0)] = figwheel$client$file_reloading$state_machine__22396__auto__);

(statearr_26655[(1)] = (1));

return statearr_26655;
});
var figwheel$client$file_reloading$state_machine__22396__auto____1 = (function (state_26637){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_26637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e26656){if((e26656 instanceof Object)){
var ex__22399__auto__ = e26656;
var statearr_26657_26669 = state_26637;
(statearr_26657_26669[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26670 = state_26637;
state_26637 = G__26670;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22396__auto__ = function(state_26637){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22396__auto____1.call(this,state_26637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22396__auto____0;
figwheel$client$file_reloading$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22396__auto____1;
return figwheel$client$file_reloading$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__))
})();
var state__22509__auto__ = (function (){var statearr_26658 = f__22508__auto__.call(null);
(statearr_26658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_26658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__))
);

return c__22507__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26671,callback){
var map__26674 = p__26671;
var map__26674__$1 = ((((!((map__26674 == null)))?((((map__26674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26674):map__26674);
var file_msg = map__26674__$1;
var namespace = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26674,map__26674__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26674,map__26674__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26676){
var map__26679 = p__26676;
var map__26679__$1 = ((((!((map__26679 == null)))?((((map__26679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26679):map__26679);
var file_msg = map__26679__$1;
var namespace = cljs.core.get.call(null,map__26679__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20217__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20217__auto__){
var or__20229__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
var or__20229__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20229__auto____$1)){
return or__20229__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20217__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26681,callback){
var map__26684 = p__26681;
var map__26684__$1 = ((((!((map__26684 == null)))?((((map__26684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26684):map__26684);
var file_msg = map__26684__$1;
var request_url = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22507__auto___26788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___26788,out){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___26788,out){
return (function (state_26770){
var state_val_26771 = (state_26770[(1)]);
if((state_val_26771 === (1))){
var inst_26744 = cljs.core.seq.call(null,files);
var inst_26745 = cljs.core.first.call(null,inst_26744);
var inst_26746 = cljs.core.next.call(null,inst_26744);
var inst_26747 = files;
var state_26770__$1 = (function (){var statearr_26772 = state_26770;
(statearr_26772[(7)] = inst_26745);

(statearr_26772[(8)] = inst_26747);

(statearr_26772[(9)] = inst_26746);

return statearr_26772;
})();
var statearr_26773_26789 = state_26770__$1;
(statearr_26773_26789[(2)] = null);

(statearr_26773_26789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (2))){
var inst_26747 = (state_26770[(8)]);
var inst_26753 = (state_26770[(10)]);
var inst_26752 = cljs.core.seq.call(null,inst_26747);
var inst_26753__$1 = cljs.core.first.call(null,inst_26752);
var inst_26754 = cljs.core.next.call(null,inst_26752);
var inst_26755 = (inst_26753__$1 == null);
var inst_26756 = cljs.core.not.call(null,inst_26755);
var state_26770__$1 = (function (){var statearr_26774 = state_26770;
(statearr_26774[(11)] = inst_26754);

(statearr_26774[(10)] = inst_26753__$1);

return statearr_26774;
})();
if(inst_26756){
var statearr_26775_26790 = state_26770__$1;
(statearr_26775_26790[(1)] = (4));

} else {
var statearr_26776_26791 = state_26770__$1;
(statearr_26776_26791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (3))){
var inst_26768 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26770__$1,inst_26768);
} else {
if((state_val_26771 === (4))){
var inst_26753 = (state_26770[(10)]);
var inst_26758 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26753);
var state_26770__$1 = state_26770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26770__$1,(7),inst_26758);
} else {
if((state_val_26771 === (5))){
var inst_26764 = cljs.core.async.close_BANG_.call(null,out);
var state_26770__$1 = state_26770;
var statearr_26777_26792 = state_26770__$1;
(statearr_26777_26792[(2)] = inst_26764);

(statearr_26777_26792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (6))){
var inst_26766 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
var statearr_26778_26793 = state_26770__$1;
(statearr_26778_26793[(2)] = inst_26766);

(statearr_26778_26793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (7))){
var inst_26754 = (state_26770[(11)]);
var inst_26760 = (state_26770[(2)]);
var inst_26761 = cljs.core.async.put_BANG_.call(null,out,inst_26760);
var inst_26747 = inst_26754;
var state_26770__$1 = (function (){var statearr_26779 = state_26770;
(statearr_26779[(12)] = inst_26761);

(statearr_26779[(8)] = inst_26747);

return statearr_26779;
})();
var statearr_26780_26794 = state_26770__$1;
(statearr_26780_26794[(2)] = null);

(statearr_26780_26794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22507__auto___26788,out))
;
return ((function (switch__22395__auto__,c__22507__auto___26788,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____0 = (function (){
var statearr_26784 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26784[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__);

(statearr_26784[(1)] = (1));

return statearr_26784;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____1 = (function (state_26770){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_26770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e26785){if((e26785 instanceof Object)){
var ex__22399__auto__ = e26785;
var statearr_26786_26795 = state_26770;
(statearr_26786_26795[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26796 = state_26770;
state_26770 = G__26796;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__ = function(state_26770){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____1.call(this,state_26770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___26788,out))
})();
var state__22509__auto__ = (function (){var statearr_26787 = f__22508__auto__.call(null);
(statearr_26787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___26788);

return statearr_26787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___26788,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26797,opts){
var map__26801 = p__26797;
var map__26801__$1 = ((((!((map__26801 == null)))?((((map__26801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26801):map__26801);
var eval_body = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20217__auto__ = eval_body;
if(cljs.core.truth_(and__20217__auto__)){
return typeof eval_body === 'string';
} else {
return and__20217__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26803){var e = e26803;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26804_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26804_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26813){
var vec__26814 = p__26813;
var k = cljs.core.nth.call(null,vec__26814,(0),null);
var v = cljs.core.nth.call(null,vec__26814,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26817){
var vec__26818 = p__26817;
var k = cljs.core.nth.call(null,vec__26818,(0),null);
var v = cljs.core.nth.call(null,vec__26818,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26824,p__26825){
var map__27073 = p__26824;
var map__27073__$1 = ((((!((map__27073 == null)))?((((map__27073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27073):map__27073);
var opts = map__27073__$1;
var before_jsload = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27074 = p__26825;
var map__27074__$1 = ((((!((map__27074 == null)))?((((map__27074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27074):map__27074);
var msg = map__27074__$1;
var files = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27228){
var state_val_27229 = (state_27228[(1)]);
if((state_val_27229 === (7))){
var inst_27088 = (state_27228[(7)]);
var inst_27090 = (state_27228[(8)]);
var inst_27089 = (state_27228[(9)]);
var inst_27091 = (state_27228[(10)]);
var inst_27096 = cljs.core._nth.call(null,inst_27089,inst_27091);
var inst_27097 = figwheel.client.file_reloading.eval_body.call(null,inst_27096,opts);
var inst_27098 = (inst_27091 + (1));
var tmp27230 = inst_27088;
var tmp27231 = inst_27090;
var tmp27232 = inst_27089;
var inst_27088__$1 = tmp27230;
var inst_27089__$1 = tmp27232;
var inst_27090__$1 = tmp27231;
var inst_27091__$1 = inst_27098;
var state_27228__$1 = (function (){var statearr_27233 = state_27228;
(statearr_27233[(7)] = inst_27088__$1);

(statearr_27233[(11)] = inst_27097);

(statearr_27233[(8)] = inst_27090__$1);

(statearr_27233[(9)] = inst_27089__$1);

(statearr_27233[(10)] = inst_27091__$1);

return statearr_27233;
})();
var statearr_27234_27320 = state_27228__$1;
(statearr_27234_27320[(2)] = null);

(statearr_27234_27320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (20))){
var inst_27131 = (state_27228[(12)]);
var inst_27139 = figwheel.client.file_reloading.sort_files.call(null,inst_27131);
var state_27228__$1 = state_27228;
var statearr_27235_27321 = state_27228__$1;
(statearr_27235_27321[(2)] = inst_27139);

(statearr_27235_27321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (27))){
var state_27228__$1 = state_27228;
var statearr_27236_27322 = state_27228__$1;
(statearr_27236_27322[(2)] = null);

(statearr_27236_27322[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (1))){
var inst_27080 = (state_27228[(13)]);
var inst_27077 = before_jsload.call(null,files);
var inst_27078 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27079 = (function (){return ((function (inst_27080,inst_27077,inst_27078,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26821_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26821_SHARP_);
});
;})(inst_27080,inst_27077,inst_27078,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27080__$1 = cljs.core.filter.call(null,inst_27079,files);
var inst_27081 = cljs.core.not_empty.call(null,inst_27080__$1);
var state_27228__$1 = (function (){var statearr_27237 = state_27228;
(statearr_27237[(13)] = inst_27080__$1);

(statearr_27237[(14)] = inst_27078);

(statearr_27237[(15)] = inst_27077);

return statearr_27237;
})();
if(cljs.core.truth_(inst_27081)){
var statearr_27238_27323 = state_27228__$1;
(statearr_27238_27323[(1)] = (2));

} else {
var statearr_27239_27324 = state_27228__$1;
(statearr_27239_27324[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (24))){
var state_27228__$1 = state_27228;
var statearr_27240_27325 = state_27228__$1;
(statearr_27240_27325[(2)] = null);

(statearr_27240_27325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (39))){
var inst_27181 = (state_27228[(16)]);
var state_27228__$1 = state_27228;
var statearr_27241_27326 = state_27228__$1;
(statearr_27241_27326[(2)] = inst_27181);

(statearr_27241_27326[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (46))){
var inst_27223 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27242_27327 = state_27228__$1;
(statearr_27242_27327[(2)] = inst_27223);

(statearr_27242_27327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (4))){
var inst_27125 = (state_27228[(2)]);
var inst_27126 = cljs.core.List.EMPTY;
var inst_27127 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27126);
var inst_27128 = (function (){return ((function (inst_27125,inst_27126,inst_27127,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26822_SHARP_){
var and__20217__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26822_SHARP_);
if(cljs.core.truth_(and__20217__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26822_SHARP_));
} else {
return and__20217__auto__;
}
});
;})(inst_27125,inst_27126,inst_27127,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27129 = cljs.core.filter.call(null,inst_27128,files);
var inst_27130 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27131 = cljs.core.concat.call(null,inst_27129,inst_27130);
var state_27228__$1 = (function (){var statearr_27243 = state_27228;
(statearr_27243[(17)] = inst_27127);

(statearr_27243[(18)] = inst_27125);

(statearr_27243[(12)] = inst_27131);

return statearr_27243;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27244_27328 = state_27228__$1;
(statearr_27244_27328[(1)] = (16));

} else {
var statearr_27245_27329 = state_27228__$1;
(statearr_27245_27329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (15))){
var inst_27115 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27246_27330 = state_27228__$1;
(statearr_27246_27330[(2)] = inst_27115);

(statearr_27246_27330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (21))){
var inst_27141 = (state_27228[(19)]);
var inst_27141__$1 = (state_27228[(2)]);
var inst_27142 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27141__$1);
var state_27228__$1 = (function (){var statearr_27247 = state_27228;
(statearr_27247[(19)] = inst_27141__$1);

return statearr_27247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27228__$1,(22),inst_27142);
} else {
if((state_val_27229 === (31))){
var inst_27226 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27228__$1,inst_27226);
} else {
if((state_val_27229 === (32))){
var inst_27181 = (state_27228[(16)]);
var inst_27186 = inst_27181.cljs$lang$protocol_mask$partition0$;
var inst_27187 = (inst_27186 & (64));
var inst_27188 = inst_27181.cljs$core$ISeq$;
var inst_27189 = (cljs.core.PROTOCOL_SENTINEL === inst_27188);
var inst_27190 = (inst_27187) || (inst_27189);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27190)){
var statearr_27248_27331 = state_27228__$1;
(statearr_27248_27331[(1)] = (35));

} else {
var statearr_27249_27332 = state_27228__$1;
(statearr_27249_27332[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (40))){
var inst_27203 = (state_27228[(20)]);
var inst_27202 = (state_27228[(2)]);
var inst_27203__$1 = cljs.core.get.call(null,inst_27202,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27204 = cljs.core.get.call(null,inst_27202,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27205 = cljs.core.not_empty.call(null,inst_27203__$1);
var state_27228__$1 = (function (){var statearr_27250 = state_27228;
(statearr_27250[(20)] = inst_27203__$1);

(statearr_27250[(21)] = inst_27204);

return statearr_27250;
})();
if(cljs.core.truth_(inst_27205)){
var statearr_27251_27333 = state_27228__$1;
(statearr_27251_27333[(1)] = (41));

} else {
var statearr_27252_27334 = state_27228__$1;
(statearr_27252_27334[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (33))){
var state_27228__$1 = state_27228;
var statearr_27253_27335 = state_27228__$1;
(statearr_27253_27335[(2)] = false);

(statearr_27253_27335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (13))){
var inst_27101 = (state_27228[(22)]);
var inst_27105 = cljs.core.chunk_first.call(null,inst_27101);
var inst_27106 = cljs.core.chunk_rest.call(null,inst_27101);
var inst_27107 = cljs.core.count.call(null,inst_27105);
var inst_27088 = inst_27106;
var inst_27089 = inst_27105;
var inst_27090 = inst_27107;
var inst_27091 = (0);
var state_27228__$1 = (function (){var statearr_27254 = state_27228;
(statearr_27254[(7)] = inst_27088);

(statearr_27254[(8)] = inst_27090);

(statearr_27254[(9)] = inst_27089);

(statearr_27254[(10)] = inst_27091);

return statearr_27254;
})();
var statearr_27255_27336 = state_27228__$1;
(statearr_27255_27336[(2)] = null);

(statearr_27255_27336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (22))){
var inst_27144 = (state_27228[(23)]);
var inst_27149 = (state_27228[(24)]);
var inst_27145 = (state_27228[(25)]);
var inst_27141 = (state_27228[(19)]);
var inst_27144__$1 = (state_27228[(2)]);
var inst_27145__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27144__$1);
var inst_27146 = (function (){var all_files = inst_27141;
var res_SINGLEQUOTE_ = inst_27144__$1;
var res = inst_27145__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27144,inst_27149,inst_27145,inst_27141,inst_27144__$1,inst_27145__$1,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26823_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26823_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27144,inst_27149,inst_27145,inst_27141,inst_27144__$1,inst_27145__$1,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27147 = cljs.core.filter.call(null,inst_27146,inst_27144__$1);
var inst_27148 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27149__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27148);
var inst_27150 = cljs.core.not_empty.call(null,inst_27149__$1);
var state_27228__$1 = (function (){var statearr_27256 = state_27228;
(statearr_27256[(23)] = inst_27144__$1);

(statearr_27256[(24)] = inst_27149__$1);

(statearr_27256[(25)] = inst_27145__$1);

(statearr_27256[(26)] = inst_27147);

return statearr_27256;
})();
if(cljs.core.truth_(inst_27150)){
var statearr_27257_27337 = state_27228__$1;
(statearr_27257_27337[(1)] = (23));

} else {
var statearr_27258_27338 = state_27228__$1;
(statearr_27258_27338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (36))){
var state_27228__$1 = state_27228;
var statearr_27259_27339 = state_27228__$1;
(statearr_27259_27339[(2)] = false);

(statearr_27259_27339[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (41))){
var inst_27203 = (state_27228[(20)]);
var inst_27207 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27208 = cljs.core.map.call(null,inst_27207,inst_27203);
var inst_27209 = cljs.core.pr_str.call(null,inst_27208);
var inst_27210 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27209)].join('');
var inst_27211 = figwheel.client.utils.log.call(null,inst_27210);
var state_27228__$1 = state_27228;
var statearr_27260_27340 = state_27228__$1;
(statearr_27260_27340[(2)] = inst_27211);

(statearr_27260_27340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (43))){
var inst_27204 = (state_27228[(21)]);
var inst_27214 = (state_27228[(2)]);
var inst_27215 = cljs.core.not_empty.call(null,inst_27204);
var state_27228__$1 = (function (){var statearr_27261 = state_27228;
(statearr_27261[(27)] = inst_27214);

return statearr_27261;
})();
if(cljs.core.truth_(inst_27215)){
var statearr_27262_27341 = state_27228__$1;
(statearr_27262_27341[(1)] = (44));

} else {
var statearr_27263_27342 = state_27228__$1;
(statearr_27263_27342[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (29))){
var inst_27144 = (state_27228[(23)]);
var inst_27149 = (state_27228[(24)]);
var inst_27145 = (state_27228[(25)]);
var inst_27147 = (state_27228[(26)]);
var inst_27141 = (state_27228[(19)]);
var inst_27181 = (state_27228[(16)]);
var inst_27177 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27180 = (function (){var all_files = inst_27141;
var res_SINGLEQUOTE_ = inst_27144;
var res = inst_27145;
var files_not_loaded = inst_27147;
var dependencies_that_loaded = inst_27149;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27144,inst_27149,inst_27145,inst_27147,inst_27141,inst_27181,inst_27177,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27179){
var map__27264 = p__27179;
var map__27264__$1 = ((((!((map__27264 == null)))?((((map__27264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27264):map__27264);
var namespace = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27144,inst_27149,inst_27145,inst_27147,inst_27141,inst_27181,inst_27177,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27181__$1 = cljs.core.group_by.call(null,inst_27180,inst_27147);
var inst_27183 = (inst_27181__$1 == null);
var inst_27184 = cljs.core.not.call(null,inst_27183);
var state_27228__$1 = (function (){var statearr_27266 = state_27228;
(statearr_27266[(28)] = inst_27177);

(statearr_27266[(16)] = inst_27181__$1);

return statearr_27266;
})();
if(inst_27184){
var statearr_27267_27343 = state_27228__$1;
(statearr_27267_27343[(1)] = (32));

} else {
var statearr_27268_27344 = state_27228__$1;
(statearr_27268_27344[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (44))){
var inst_27204 = (state_27228[(21)]);
var inst_27217 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27204);
var inst_27218 = cljs.core.pr_str.call(null,inst_27217);
var inst_27219 = [cljs.core.str("not required: "),cljs.core.str(inst_27218)].join('');
var inst_27220 = figwheel.client.utils.log.call(null,inst_27219);
var state_27228__$1 = state_27228;
var statearr_27269_27345 = state_27228__$1;
(statearr_27269_27345[(2)] = inst_27220);

(statearr_27269_27345[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (6))){
var inst_27122 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27270_27346 = state_27228__$1;
(statearr_27270_27346[(2)] = inst_27122);

(statearr_27270_27346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (28))){
var inst_27147 = (state_27228[(26)]);
var inst_27174 = (state_27228[(2)]);
var inst_27175 = cljs.core.not_empty.call(null,inst_27147);
var state_27228__$1 = (function (){var statearr_27271 = state_27228;
(statearr_27271[(29)] = inst_27174);

return statearr_27271;
})();
if(cljs.core.truth_(inst_27175)){
var statearr_27272_27347 = state_27228__$1;
(statearr_27272_27347[(1)] = (29));

} else {
var statearr_27273_27348 = state_27228__$1;
(statearr_27273_27348[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (25))){
var inst_27145 = (state_27228[(25)]);
var inst_27161 = (state_27228[(2)]);
var inst_27162 = cljs.core.not_empty.call(null,inst_27145);
var state_27228__$1 = (function (){var statearr_27274 = state_27228;
(statearr_27274[(30)] = inst_27161);

return statearr_27274;
})();
if(cljs.core.truth_(inst_27162)){
var statearr_27275_27349 = state_27228__$1;
(statearr_27275_27349[(1)] = (26));

} else {
var statearr_27276_27350 = state_27228__$1;
(statearr_27276_27350[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (34))){
var inst_27197 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27197)){
var statearr_27277_27351 = state_27228__$1;
(statearr_27277_27351[(1)] = (38));

} else {
var statearr_27278_27352 = state_27228__$1;
(statearr_27278_27352[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (17))){
var state_27228__$1 = state_27228;
var statearr_27279_27353 = state_27228__$1;
(statearr_27279_27353[(2)] = recompile_dependents);

(statearr_27279_27353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (3))){
var state_27228__$1 = state_27228;
var statearr_27280_27354 = state_27228__$1;
(statearr_27280_27354[(2)] = null);

(statearr_27280_27354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (12))){
var inst_27118 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27281_27355 = state_27228__$1;
(statearr_27281_27355[(2)] = inst_27118);

(statearr_27281_27355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (2))){
var inst_27080 = (state_27228[(13)]);
var inst_27087 = cljs.core.seq.call(null,inst_27080);
var inst_27088 = inst_27087;
var inst_27089 = null;
var inst_27090 = (0);
var inst_27091 = (0);
var state_27228__$1 = (function (){var statearr_27282 = state_27228;
(statearr_27282[(7)] = inst_27088);

(statearr_27282[(8)] = inst_27090);

(statearr_27282[(9)] = inst_27089);

(statearr_27282[(10)] = inst_27091);

return statearr_27282;
})();
var statearr_27283_27356 = state_27228__$1;
(statearr_27283_27356[(2)] = null);

(statearr_27283_27356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (23))){
var inst_27144 = (state_27228[(23)]);
var inst_27149 = (state_27228[(24)]);
var inst_27145 = (state_27228[(25)]);
var inst_27147 = (state_27228[(26)]);
var inst_27141 = (state_27228[(19)]);
var inst_27152 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27154 = (function (){var all_files = inst_27141;
var res_SINGLEQUOTE_ = inst_27144;
var res = inst_27145;
var files_not_loaded = inst_27147;
var dependencies_that_loaded = inst_27149;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27144,inst_27149,inst_27145,inst_27147,inst_27141,inst_27152,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27153){
var map__27284 = p__27153;
var map__27284__$1 = ((((!((map__27284 == null)))?((((map__27284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27284):map__27284);
var request_url = cljs.core.get.call(null,map__27284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27144,inst_27149,inst_27145,inst_27147,inst_27141,inst_27152,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27155 = cljs.core.reverse.call(null,inst_27149);
var inst_27156 = cljs.core.map.call(null,inst_27154,inst_27155);
var inst_27157 = cljs.core.pr_str.call(null,inst_27156);
var inst_27158 = figwheel.client.utils.log.call(null,inst_27157);
var state_27228__$1 = (function (){var statearr_27286 = state_27228;
(statearr_27286[(31)] = inst_27152);

return statearr_27286;
})();
var statearr_27287_27357 = state_27228__$1;
(statearr_27287_27357[(2)] = inst_27158);

(statearr_27287_27357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (35))){
var state_27228__$1 = state_27228;
var statearr_27288_27358 = state_27228__$1;
(statearr_27288_27358[(2)] = true);

(statearr_27288_27358[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (19))){
var inst_27131 = (state_27228[(12)]);
var inst_27137 = figwheel.client.file_reloading.expand_files.call(null,inst_27131);
var state_27228__$1 = state_27228;
var statearr_27289_27359 = state_27228__$1;
(statearr_27289_27359[(2)] = inst_27137);

(statearr_27289_27359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (11))){
var state_27228__$1 = state_27228;
var statearr_27290_27360 = state_27228__$1;
(statearr_27290_27360[(2)] = null);

(statearr_27290_27360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (9))){
var inst_27120 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27291_27361 = state_27228__$1;
(statearr_27291_27361[(2)] = inst_27120);

(statearr_27291_27361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (5))){
var inst_27090 = (state_27228[(8)]);
var inst_27091 = (state_27228[(10)]);
var inst_27093 = (inst_27091 < inst_27090);
var inst_27094 = inst_27093;
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27094)){
var statearr_27292_27362 = state_27228__$1;
(statearr_27292_27362[(1)] = (7));

} else {
var statearr_27293_27363 = state_27228__$1;
(statearr_27293_27363[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (14))){
var inst_27101 = (state_27228[(22)]);
var inst_27110 = cljs.core.first.call(null,inst_27101);
var inst_27111 = figwheel.client.file_reloading.eval_body.call(null,inst_27110,opts);
var inst_27112 = cljs.core.next.call(null,inst_27101);
var inst_27088 = inst_27112;
var inst_27089 = null;
var inst_27090 = (0);
var inst_27091 = (0);
var state_27228__$1 = (function (){var statearr_27294 = state_27228;
(statearr_27294[(7)] = inst_27088);

(statearr_27294[(8)] = inst_27090);

(statearr_27294[(32)] = inst_27111);

(statearr_27294[(9)] = inst_27089);

(statearr_27294[(10)] = inst_27091);

return statearr_27294;
})();
var statearr_27295_27364 = state_27228__$1;
(statearr_27295_27364[(2)] = null);

(statearr_27295_27364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (45))){
var state_27228__$1 = state_27228;
var statearr_27296_27365 = state_27228__$1;
(statearr_27296_27365[(2)] = null);

(statearr_27296_27365[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (26))){
var inst_27144 = (state_27228[(23)]);
var inst_27149 = (state_27228[(24)]);
var inst_27145 = (state_27228[(25)]);
var inst_27147 = (state_27228[(26)]);
var inst_27141 = (state_27228[(19)]);
var inst_27164 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27166 = (function (){var all_files = inst_27141;
var res_SINGLEQUOTE_ = inst_27144;
var res = inst_27145;
var files_not_loaded = inst_27147;
var dependencies_that_loaded = inst_27149;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27144,inst_27149,inst_27145,inst_27147,inst_27141,inst_27164,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27165){
var map__27297 = p__27165;
var map__27297__$1 = ((((!((map__27297 == null)))?((((map__27297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27297):map__27297);
var namespace = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27144,inst_27149,inst_27145,inst_27147,inst_27141,inst_27164,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27167 = cljs.core.map.call(null,inst_27166,inst_27145);
var inst_27168 = cljs.core.pr_str.call(null,inst_27167);
var inst_27169 = figwheel.client.utils.log.call(null,inst_27168);
var inst_27170 = (function (){var all_files = inst_27141;
var res_SINGLEQUOTE_ = inst_27144;
var res = inst_27145;
var files_not_loaded = inst_27147;
var dependencies_that_loaded = inst_27149;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27144,inst_27149,inst_27145,inst_27147,inst_27141,inst_27164,inst_27166,inst_27167,inst_27168,inst_27169,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27144,inst_27149,inst_27145,inst_27147,inst_27141,inst_27164,inst_27166,inst_27167,inst_27168,inst_27169,state_val_27229,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27171 = setTimeout(inst_27170,(10));
var state_27228__$1 = (function (){var statearr_27299 = state_27228;
(statearr_27299[(33)] = inst_27164);

(statearr_27299[(34)] = inst_27169);

return statearr_27299;
})();
var statearr_27300_27366 = state_27228__$1;
(statearr_27300_27366[(2)] = inst_27171);

(statearr_27300_27366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (16))){
var state_27228__$1 = state_27228;
var statearr_27301_27367 = state_27228__$1;
(statearr_27301_27367[(2)] = reload_dependents);

(statearr_27301_27367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (38))){
var inst_27181 = (state_27228[(16)]);
var inst_27199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27181);
var state_27228__$1 = state_27228;
var statearr_27302_27368 = state_27228__$1;
(statearr_27302_27368[(2)] = inst_27199);

(statearr_27302_27368[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (30))){
var state_27228__$1 = state_27228;
var statearr_27303_27369 = state_27228__$1;
(statearr_27303_27369[(2)] = null);

(statearr_27303_27369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (10))){
var inst_27101 = (state_27228[(22)]);
var inst_27103 = cljs.core.chunked_seq_QMARK_.call(null,inst_27101);
var state_27228__$1 = state_27228;
if(inst_27103){
var statearr_27304_27370 = state_27228__$1;
(statearr_27304_27370[(1)] = (13));

} else {
var statearr_27305_27371 = state_27228__$1;
(statearr_27305_27371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (18))){
var inst_27135 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27135)){
var statearr_27306_27372 = state_27228__$1;
(statearr_27306_27372[(1)] = (19));

} else {
var statearr_27307_27373 = state_27228__$1;
(statearr_27307_27373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (42))){
var state_27228__$1 = state_27228;
var statearr_27308_27374 = state_27228__$1;
(statearr_27308_27374[(2)] = null);

(statearr_27308_27374[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (37))){
var inst_27194 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27309_27375 = state_27228__$1;
(statearr_27309_27375[(2)] = inst_27194);

(statearr_27309_27375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (8))){
var inst_27088 = (state_27228[(7)]);
var inst_27101 = (state_27228[(22)]);
var inst_27101__$1 = cljs.core.seq.call(null,inst_27088);
var state_27228__$1 = (function (){var statearr_27310 = state_27228;
(statearr_27310[(22)] = inst_27101__$1);

return statearr_27310;
})();
if(inst_27101__$1){
var statearr_27311_27376 = state_27228__$1;
(statearr_27311_27376[(1)] = (10));

} else {
var statearr_27312_27377 = state_27228__$1;
(statearr_27312_27377[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22395__auto__,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____0 = (function (){
var statearr_27316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27316[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__);

(statearr_27316[(1)] = (1));

return statearr_27316;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____1 = (function (state_27228){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_27228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e27317){if((e27317 instanceof Object)){
var ex__22399__auto__ = e27317;
var statearr_27318_27378 = state_27228;
(statearr_27318_27378[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27379 = state_27228;
state_27228 = G__27379;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__ = function(state_27228){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____1.call(this,state_27228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22509__auto__ = (function (){var statearr_27319 = f__22508__auto__.call(null);
(statearr_27319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__,map__27073,map__27073__$1,opts,before_jsload,on_jsload,reload_dependents,map__27074,map__27074__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22507__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27382,link){
var map__27385 = p__27382;
var map__27385__$1 = ((((!((map__27385 == null)))?((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var file = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27385,map__27385__$1,file){
return (function (p1__27380_SHARP_,p2__27381_SHARP_){
if(cljs.core._EQ_.call(null,p1__27380_SHARP_,p2__27381_SHARP_)){
return p1__27380_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27385,map__27385__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27391){
var map__27392 = p__27391;
var map__27392__$1 = ((((!((map__27392 == null)))?((((map__27392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27392):map__27392);
var match_length = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27387_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27387_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27394 = [];
var len__21337__auto___27397 = arguments.length;
var i__21338__auto___27398 = (0);
while(true){
if((i__21338__auto___27398 < len__21337__auto___27397)){
args27394.push((arguments[i__21338__auto___27398]));

var G__27399 = (i__21338__auto___27398 + (1));
i__21338__auto___27398 = G__27399;
continue;
} else {
}
break;
}

var G__27396 = args27394.length;
switch (G__27396) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27394.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27401_SHARP_,p2__27402_SHARP_){
return cljs.core.assoc.call(null,p1__27401_SHARP_,cljs.core.get.call(null,p2__27402_SHARP_,key),p2__27402_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27403){
var map__27406 = p__27403;
var map__27406__$1 = ((((!((map__27406 == null)))?((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var f_data = map__27406__$1;
var file = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27408,files_msg){
var map__27415 = p__27408;
var map__27415__$1 = ((((!((map__27415 == null)))?((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var opts = map__27415__$1;
var on_cssload = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27417_27421 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27418_27422 = null;
var count__27419_27423 = (0);
var i__27420_27424 = (0);
while(true){
if((i__27420_27424 < count__27419_27423)){
var f_27425 = cljs.core._nth.call(null,chunk__27418_27422,i__27420_27424);
figwheel.client.file_reloading.reload_css_file.call(null,f_27425);

var G__27426 = seq__27417_27421;
var G__27427 = chunk__27418_27422;
var G__27428 = count__27419_27423;
var G__27429 = (i__27420_27424 + (1));
seq__27417_27421 = G__27426;
chunk__27418_27422 = G__27427;
count__27419_27423 = G__27428;
i__27420_27424 = G__27429;
continue;
} else {
var temp__4657__auto___27430 = cljs.core.seq.call(null,seq__27417_27421);
if(temp__4657__auto___27430){
var seq__27417_27431__$1 = temp__4657__auto___27430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27417_27431__$1)){
var c__21043__auto___27432 = cljs.core.chunk_first.call(null,seq__27417_27431__$1);
var G__27433 = cljs.core.chunk_rest.call(null,seq__27417_27431__$1);
var G__27434 = c__21043__auto___27432;
var G__27435 = cljs.core.count.call(null,c__21043__auto___27432);
var G__27436 = (0);
seq__27417_27421 = G__27433;
chunk__27418_27422 = G__27434;
count__27419_27423 = G__27435;
i__27420_27424 = G__27436;
continue;
} else {
var f_27437 = cljs.core.first.call(null,seq__27417_27431__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27437);

var G__27438 = cljs.core.next.call(null,seq__27417_27431__$1);
var G__27439 = null;
var G__27440 = (0);
var G__27441 = (0);
seq__27417_27421 = G__27438;
chunk__27418_27422 = G__27439;
count__27419_27423 = G__27440;
i__27420_27424 = G__27441;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27415,map__27415__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27415,map__27415__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1528678735601