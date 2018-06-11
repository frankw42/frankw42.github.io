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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26391_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26391_SHARP_));
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
var seq__26396 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26397 = null;
var count__26398 = (0);
var i__26399 = (0);
while(true){
if((i__26399 < count__26398)){
var n = cljs.core._nth.call(null,chunk__26397,i__26399);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26400 = seq__26396;
var G__26401 = chunk__26397;
var G__26402 = count__26398;
var G__26403 = (i__26399 + (1));
seq__26396 = G__26400;
chunk__26397 = G__26401;
count__26398 = G__26402;
i__26399 = G__26403;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26396);
if(temp__4657__auto__){
var seq__26396__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26396__$1)){
var c__21043__auto__ = cljs.core.chunk_first.call(null,seq__26396__$1);
var G__26404 = cljs.core.chunk_rest.call(null,seq__26396__$1);
var G__26405 = c__21043__auto__;
var G__26406 = cljs.core.count.call(null,c__21043__auto__);
var G__26407 = (0);
seq__26396 = G__26404;
chunk__26397 = G__26405;
count__26398 = G__26406;
i__26399 = G__26407;
continue;
} else {
var n = cljs.core.first.call(null,seq__26396__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26408 = cljs.core.next.call(null,seq__26396__$1);
var G__26409 = null;
var G__26410 = (0);
var G__26411 = (0);
seq__26396 = G__26408;
chunk__26397 = G__26409;
count__26398 = G__26410;
i__26399 = G__26411;
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

var seq__26462_26473 = cljs.core.seq.call(null,deps);
var chunk__26463_26474 = null;
var count__26464_26475 = (0);
var i__26465_26476 = (0);
while(true){
if((i__26465_26476 < count__26464_26475)){
var dep_26477 = cljs.core._nth.call(null,chunk__26463_26474,i__26465_26476);
topo_sort_helper_STAR_.call(null,dep_26477,(depth + (1)),state);

var G__26478 = seq__26462_26473;
var G__26479 = chunk__26463_26474;
var G__26480 = count__26464_26475;
var G__26481 = (i__26465_26476 + (1));
seq__26462_26473 = G__26478;
chunk__26463_26474 = G__26479;
count__26464_26475 = G__26480;
i__26465_26476 = G__26481;
continue;
} else {
var temp__4657__auto___26482 = cljs.core.seq.call(null,seq__26462_26473);
if(temp__4657__auto___26482){
var seq__26462_26483__$1 = temp__4657__auto___26482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26462_26483__$1)){
var c__21043__auto___26484 = cljs.core.chunk_first.call(null,seq__26462_26483__$1);
var G__26485 = cljs.core.chunk_rest.call(null,seq__26462_26483__$1);
var G__26486 = c__21043__auto___26484;
var G__26487 = cljs.core.count.call(null,c__21043__auto___26484);
var G__26488 = (0);
seq__26462_26473 = G__26485;
chunk__26463_26474 = G__26486;
count__26464_26475 = G__26487;
i__26465_26476 = G__26488;
continue;
} else {
var dep_26489 = cljs.core.first.call(null,seq__26462_26483__$1);
topo_sort_helper_STAR_.call(null,dep_26489,(depth + (1)),state);

var G__26490 = cljs.core.next.call(null,seq__26462_26483__$1);
var G__26491 = null;
var G__26492 = (0);
var G__26493 = (0);
seq__26462_26473 = G__26490;
chunk__26463_26474 = G__26491;
count__26464_26475 = G__26492;
i__26465_26476 = G__26493;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26466){
var vec__26470 = p__26466;
var seq__26471 = cljs.core.seq.call(null,vec__26470);
var first__26472 = cljs.core.first.call(null,seq__26471);
var seq__26471__$1 = cljs.core.next.call(null,seq__26471);
var x = first__26472;
var xs = seq__26471__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26470,seq__26471,first__26472,seq__26471__$1,x,xs,get_deps__$1){
return (function (p1__26412_SHARP_){
return clojure.set.difference.call(null,p1__26412_SHARP_,x);
});})(vec__26470,seq__26471,first__26472,seq__26471__$1,x,xs,get_deps__$1))
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
var seq__26506 = cljs.core.seq.call(null,provides);
var chunk__26507 = null;
var count__26508 = (0);
var i__26509 = (0);
while(true){
if((i__26509 < count__26508)){
var prov = cljs.core._nth.call(null,chunk__26507,i__26509);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26510_26518 = cljs.core.seq.call(null,requires);
var chunk__26511_26519 = null;
var count__26512_26520 = (0);
var i__26513_26521 = (0);
while(true){
if((i__26513_26521 < count__26512_26520)){
var req_26522 = cljs.core._nth.call(null,chunk__26511_26519,i__26513_26521);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26522,prov);

var G__26523 = seq__26510_26518;
var G__26524 = chunk__26511_26519;
var G__26525 = count__26512_26520;
var G__26526 = (i__26513_26521 + (1));
seq__26510_26518 = G__26523;
chunk__26511_26519 = G__26524;
count__26512_26520 = G__26525;
i__26513_26521 = G__26526;
continue;
} else {
var temp__4657__auto___26527 = cljs.core.seq.call(null,seq__26510_26518);
if(temp__4657__auto___26527){
var seq__26510_26528__$1 = temp__4657__auto___26527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26510_26528__$1)){
var c__21043__auto___26529 = cljs.core.chunk_first.call(null,seq__26510_26528__$1);
var G__26530 = cljs.core.chunk_rest.call(null,seq__26510_26528__$1);
var G__26531 = c__21043__auto___26529;
var G__26532 = cljs.core.count.call(null,c__21043__auto___26529);
var G__26533 = (0);
seq__26510_26518 = G__26530;
chunk__26511_26519 = G__26531;
count__26512_26520 = G__26532;
i__26513_26521 = G__26533;
continue;
} else {
var req_26534 = cljs.core.first.call(null,seq__26510_26528__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26534,prov);

var G__26535 = cljs.core.next.call(null,seq__26510_26528__$1);
var G__26536 = null;
var G__26537 = (0);
var G__26538 = (0);
seq__26510_26518 = G__26535;
chunk__26511_26519 = G__26536;
count__26512_26520 = G__26537;
i__26513_26521 = G__26538;
continue;
}
} else {
}
}
break;
}

var G__26539 = seq__26506;
var G__26540 = chunk__26507;
var G__26541 = count__26508;
var G__26542 = (i__26509 + (1));
seq__26506 = G__26539;
chunk__26507 = G__26540;
count__26508 = G__26541;
i__26509 = G__26542;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26506);
if(temp__4657__auto__){
var seq__26506__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26506__$1)){
var c__21043__auto__ = cljs.core.chunk_first.call(null,seq__26506__$1);
var G__26543 = cljs.core.chunk_rest.call(null,seq__26506__$1);
var G__26544 = c__21043__auto__;
var G__26545 = cljs.core.count.call(null,c__21043__auto__);
var G__26546 = (0);
seq__26506 = G__26543;
chunk__26507 = G__26544;
count__26508 = G__26545;
i__26509 = G__26546;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26506__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26514_26547 = cljs.core.seq.call(null,requires);
var chunk__26515_26548 = null;
var count__26516_26549 = (0);
var i__26517_26550 = (0);
while(true){
if((i__26517_26550 < count__26516_26549)){
var req_26551 = cljs.core._nth.call(null,chunk__26515_26548,i__26517_26550);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26551,prov);

var G__26552 = seq__26514_26547;
var G__26553 = chunk__26515_26548;
var G__26554 = count__26516_26549;
var G__26555 = (i__26517_26550 + (1));
seq__26514_26547 = G__26552;
chunk__26515_26548 = G__26553;
count__26516_26549 = G__26554;
i__26517_26550 = G__26555;
continue;
} else {
var temp__4657__auto___26556__$1 = cljs.core.seq.call(null,seq__26514_26547);
if(temp__4657__auto___26556__$1){
var seq__26514_26557__$1 = temp__4657__auto___26556__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26514_26557__$1)){
var c__21043__auto___26558 = cljs.core.chunk_first.call(null,seq__26514_26557__$1);
var G__26559 = cljs.core.chunk_rest.call(null,seq__26514_26557__$1);
var G__26560 = c__21043__auto___26558;
var G__26561 = cljs.core.count.call(null,c__21043__auto___26558);
var G__26562 = (0);
seq__26514_26547 = G__26559;
chunk__26515_26548 = G__26560;
count__26516_26549 = G__26561;
i__26517_26550 = G__26562;
continue;
} else {
var req_26563 = cljs.core.first.call(null,seq__26514_26557__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26563,prov);

var G__26564 = cljs.core.next.call(null,seq__26514_26557__$1);
var G__26565 = null;
var G__26566 = (0);
var G__26567 = (0);
seq__26514_26547 = G__26564;
chunk__26515_26548 = G__26565;
count__26516_26549 = G__26566;
i__26517_26550 = G__26567;
continue;
}
} else {
}
}
break;
}

var G__26568 = cljs.core.next.call(null,seq__26506__$1);
var G__26569 = null;
var G__26570 = (0);
var G__26571 = (0);
seq__26506 = G__26568;
chunk__26507 = G__26569;
count__26508 = G__26570;
i__26509 = G__26571;
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
var seq__26576_26580 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26577_26581 = null;
var count__26578_26582 = (0);
var i__26579_26583 = (0);
while(true){
if((i__26579_26583 < count__26578_26582)){
var ns_26584 = cljs.core._nth.call(null,chunk__26577_26581,i__26579_26583);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26584);

var G__26585 = seq__26576_26580;
var G__26586 = chunk__26577_26581;
var G__26587 = count__26578_26582;
var G__26588 = (i__26579_26583 + (1));
seq__26576_26580 = G__26585;
chunk__26577_26581 = G__26586;
count__26578_26582 = G__26587;
i__26579_26583 = G__26588;
continue;
} else {
var temp__4657__auto___26589 = cljs.core.seq.call(null,seq__26576_26580);
if(temp__4657__auto___26589){
var seq__26576_26590__$1 = temp__4657__auto___26589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26576_26590__$1)){
var c__21043__auto___26591 = cljs.core.chunk_first.call(null,seq__26576_26590__$1);
var G__26592 = cljs.core.chunk_rest.call(null,seq__26576_26590__$1);
var G__26593 = c__21043__auto___26591;
var G__26594 = cljs.core.count.call(null,c__21043__auto___26591);
var G__26595 = (0);
seq__26576_26580 = G__26592;
chunk__26577_26581 = G__26593;
count__26578_26582 = G__26594;
i__26579_26583 = G__26595;
continue;
} else {
var ns_26596 = cljs.core.first.call(null,seq__26576_26590__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26596);

var G__26597 = cljs.core.next.call(null,seq__26576_26590__$1);
var G__26598 = null;
var G__26599 = (0);
var G__26600 = (0);
seq__26576_26580 = G__26597;
chunk__26577_26581 = G__26598;
count__26578_26582 = G__26599;
i__26579_26583 = G__26600;
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
var G__26601__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26602__i = 0, G__26602__a = new Array(arguments.length -  0);
while (G__26602__i < G__26602__a.length) {G__26602__a[G__26602__i] = arguments[G__26602__i + 0]; ++G__26602__i;}
  args = new cljs.core.IndexedSeq(G__26602__a,0);
} 
return G__26601__delegate.call(this,args);};
G__26601.cljs$lang$maxFixedArity = 0;
G__26601.cljs$lang$applyTo = (function (arglist__26603){
var args = cljs.core.seq(arglist__26603);
return G__26601__delegate(args);
});
G__26601.cljs$core$IFn$_invoke$arity$variadic = G__26601__delegate;
return G__26601;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26605 = cljs.core._EQ_;
var expr__26606 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26605.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26606))){
var path_parts = ((function (pred__26605,expr__26606){
return (function (p1__26604_SHARP_){
return clojure.string.split.call(null,p1__26604_SHARP_,/[\/\\]/);
});})(pred__26605,expr__26606))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26605,expr__26606){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26608){if((e26608 instanceof Error)){
var e = e26608;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26608;

}
}})());
});
;})(path_parts,sep,root,pred__26605,expr__26606))
} else {
if(cljs.core.truth_(pred__26605.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26606))){
return ((function (pred__26605,expr__26606){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26605,expr__26606){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26605,expr__26606))
);

return deferred.addErrback(((function (deferred,pred__26605,expr__26606){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26605,expr__26606))
);
});
;})(pred__26605,expr__26606))
} else {
return ((function (pred__26605,expr__26606){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26605,expr__26606))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26609,callback){
var map__26612 = p__26609;
var map__26612__$1 = ((((!((map__26612 == null)))?((((map__26612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26612):map__26612);
var file_msg = map__26612__$1;
var request_url = cljs.core.get.call(null,map__26612__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26612,map__26612__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26612,map__26612__$1,file_msg,request_url))
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
return (function (state_26636){
var state_val_26637 = (state_26636[(1)]);
if((state_val_26637 === (7))){
var inst_26632 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26638_26658 = state_26636__$1;
(statearr_26638_26658[(2)] = inst_26632);

(statearr_26638_26658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (1))){
var state_26636__$1 = state_26636;
var statearr_26639_26659 = state_26636__$1;
(statearr_26639_26659[(2)] = null);

(statearr_26639_26659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (4))){
var inst_26616 = (state_26636[(7)]);
var inst_26616__$1 = (state_26636[(2)]);
var state_26636__$1 = (function (){var statearr_26640 = state_26636;
(statearr_26640[(7)] = inst_26616__$1);

return statearr_26640;
})();
if(cljs.core.truth_(inst_26616__$1)){
var statearr_26641_26660 = state_26636__$1;
(statearr_26641_26660[(1)] = (5));

} else {
var statearr_26642_26661 = state_26636__$1;
(statearr_26642_26661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (6))){
var state_26636__$1 = state_26636;
var statearr_26643_26662 = state_26636__$1;
(statearr_26643_26662[(2)] = null);

(statearr_26643_26662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (3))){
var inst_26634 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26636__$1,inst_26634);
} else {
if((state_val_26637 === (2))){
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26636__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26637 === (11))){
var inst_26628 = (state_26636[(2)]);
var state_26636__$1 = (function (){var statearr_26644 = state_26636;
(statearr_26644[(8)] = inst_26628);

return statearr_26644;
})();
var statearr_26645_26663 = state_26636__$1;
(statearr_26645_26663[(2)] = null);

(statearr_26645_26663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (9))){
var inst_26620 = (state_26636[(9)]);
var inst_26622 = (state_26636[(10)]);
var inst_26624 = inst_26622.call(null,inst_26620);
var state_26636__$1 = state_26636;
var statearr_26646_26664 = state_26636__$1;
(statearr_26646_26664[(2)] = inst_26624);

(statearr_26646_26664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (5))){
var inst_26616 = (state_26636[(7)]);
var inst_26618 = figwheel.client.file_reloading.blocking_load.call(null,inst_26616);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26636__$1,(8),inst_26618);
} else {
if((state_val_26637 === (10))){
var inst_26620 = (state_26636[(9)]);
var inst_26626 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26620);
var state_26636__$1 = state_26636;
var statearr_26647_26665 = state_26636__$1;
(statearr_26647_26665[(2)] = inst_26626);

(statearr_26647_26665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (8))){
var inst_26616 = (state_26636[(7)]);
var inst_26622 = (state_26636[(10)]);
var inst_26620 = (state_26636[(2)]);
var inst_26621 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26622__$1 = cljs.core.get.call(null,inst_26621,inst_26616);
var state_26636__$1 = (function (){var statearr_26648 = state_26636;
(statearr_26648[(9)] = inst_26620);

(statearr_26648[(10)] = inst_26622__$1);

return statearr_26648;
})();
if(cljs.core.truth_(inst_26622__$1)){
var statearr_26649_26666 = state_26636__$1;
(statearr_26649_26666[(1)] = (9));

} else {
var statearr_26650_26667 = state_26636__$1;
(statearr_26650_26667[(1)] = (10));

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
var statearr_26654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26654[(0)] = figwheel$client$file_reloading$state_machine__22396__auto__);

(statearr_26654[(1)] = (1));

return statearr_26654;
});
var figwheel$client$file_reloading$state_machine__22396__auto____1 = (function (state_26636){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_26636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e26655){if((e26655 instanceof Object)){
var ex__22399__auto__ = e26655;
var statearr_26656_26668 = state_26636;
(statearr_26656_26668[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26669 = state_26636;
state_26636 = G__26669;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22396__auto__ = function(state_26636){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22396__auto____1.call(this,state_26636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22396__auto____0;
figwheel$client$file_reloading$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22396__auto____1;
return figwheel$client$file_reloading$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__))
})();
var state__22509__auto__ = (function (){var statearr_26657 = f__22508__auto__.call(null);
(statearr_26657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_26657;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26670,callback){
var map__26673 = p__26670;
var map__26673__$1 = ((((!((map__26673 == null)))?((((map__26673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26673):map__26673);
var file_msg = map__26673__$1;
var namespace = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26673,map__26673__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26673,map__26673__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26675){
var map__26678 = p__26675;
var map__26678__$1 = ((((!((map__26678 == null)))?((((map__26678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26678):map__26678);
var file_msg = map__26678__$1;
var namespace = cljs.core.get.call(null,map__26678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26680,callback){
var map__26683 = p__26680;
var map__26683__$1 = ((((!((map__26683 == null)))?((((map__26683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26683):map__26683);
var file_msg = map__26683__$1;
var request_url = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22507__auto___26787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___26787,out){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___26787,out){
return (function (state_26769){
var state_val_26770 = (state_26769[(1)]);
if((state_val_26770 === (1))){
var inst_26743 = cljs.core.seq.call(null,files);
var inst_26744 = cljs.core.first.call(null,inst_26743);
var inst_26745 = cljs.core.next.call(null,inst_26743);
var inst_26746 = files;
var state_26769__$1 = (function (){var statearr_26771 = state_26769;
(statearr_26771[(7)] = inst_26745);

(statearr_26771[(8)] = inst_26744);

(statearr_26771[(9)] = inst_26746);

return statearr_26771;
})();
var statearr_26772_26788 = state_26769__$1;
(statearr_26772_26788[(2)] = null);

(statearr_26772_26788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (2))){
var inst_26752 = (state_26769[(10)]);
var inst_26746 = (state_26769[(9)]);
var inst_26751 = cljs.core.seq.call(null,inst_26746);
var inst_26752__$1 = cljs.core.first.call(null,inst_26751);
var inst_26753 = cljs.core.next.call(null,inst_26751);
var inst_26754 = (inst_26752__$1 == null);
var inst_26755 = cljs.core.not.call(null,inst_26754);
var state_26769__$1 = (function (){var statearr_26773 = state_26769;
(statearr_26773[(10)] = inst_26752__$1);

(statearr_26773[(11)] = inst_26753);

return statearr_26773;
})();
if(inst_26755){
var statearr_26774_26789 = state_26769__$1;
(statearr_26774_26789[(1)] = (4));

} else {
var statearr_26775_26790 = state_26769__$1;
(statearr_26775_26790[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (3))){
var inst_26767 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26769__$1,inst_26767);
} else {
if((state_val_26770 === (4))){
var inst_26752 = (state_26769[(10)]);
var inst_26757 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26752);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26769__$1,(7),inst_26757);
} else {
if((state_val_26770 === (5))){
var inst_26763 = cljs.core.async.close_BANG_.call(null,out);
var state_26769__$1 = state_26769;
var statearr_26776_26791 = state_26769__$1;
(statearr_26776_26791[(2)] = inst_26763);

(statearr_26776_26791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (6))){
var inst_26765 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26777_26792 = state_26769__$1;
(statearr_26777_26792[(2)] = inst_26765);

(statearr_26777_26792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (7))){
var inst_26753 = (state_26769[(11)]);
var inst_26759 = (state_26769[(2)]);
var inst_26760 = cljs.core.async.put_BANG_.call(null,out,inst_26759);
var inst_26746 = inst_26753;
var state_26769__$1 = (function (){var statearr_26778 = state_26769;
(statearr_26778[(12)] = inst_26760);

(statearr_26778[(9)] = inst_26746);

return statearr_26778;
})();
var statearr_26779_26793 = state_26769__$1;
(statearr_26779_26793[(2)] = null);

(statearr_26779_26793[(1)] = (2));


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
});})(c__22507__auto___26787,out))
;
return ((function (switch__22395__auto__,c__22507__auto___26787,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____0 = (function (){
var statearr_26783 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26783[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__);

(statearr_26783[(1)] = (1));

return statearr_26783;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____1 = (function (state_26769){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_26769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e26784){if((e26784 instanceof Object)){
var ex__22399__auto__ = e26784;
var statearr_26785_26794 = state_26769;
(statearr_26785_26794[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26795 = state_26769;
state_26769 = G__26795;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__ = function(state_26769){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____1.call(this,state_26769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___26787,out))
})();
var state__22509__auto__ = (function (){var statearr_26786 = f__22508__auto__.call(null);
(statearr_26786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___26787);

return statearr_26786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___26787,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26796,opts){
var map__26800 = p__26796;
var map__26800__$1 = ((((!((map__26800 == null)))?((((map__26800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26800):map__26800);
var eval_body = cljs.core.get.call(null,map__26800__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26800__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e26802){var e = e26802;
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
return (function (p1__26803_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26803_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__26812){
var vec__26813 = p__26812;
var k = cljs.core.nth.call(null,vec__26813,(0),null);
var v = cljs.core.nth.call(null,vec__26813,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26816){
var vec__26817 = p__26816;
var k = cljs.core.nth.call(null,vec__26817,(0),null);
var v = cljs.core.nth.call(null,vec__26817,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26823,p__26824){
var map__27072 = p__26823;
var map__27072__$1 = ((((!((map__27072 == null)))?((((map__27072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27072):map__27072);
var opts = map__27072__$1;
var before_jsload = cljs.core.get.call(null,map__27072__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27072__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27072__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27073 = p__26824;
var map__27073__$1 = ((((!((map__27073 == null)))?((((map__27073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27073):map__27073);
var msg = map__27073__$1;
var files = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27227){
var state_val_27228 = (state_27227[(1)]);
if((state_val_27228 === (7))){
var inst_27087 = (state_27227[(7)]);
var inst_27088 = (state_27227[(8)]);
var inst_27090 = (state_27227[(9)]);
var inst_27089 = (state_27227[(10)]);
var inst_27095 = cljs.core._nth.call(null,inst_27088,inst_27090);
var inst_27096 = figwheel.client.file_reloading.eval_body.call(null,inst_27095,opts);
var inst_27097 = (inst_27090 + (1));
var tmp27229 = inst_27087;
var tmp27230 = inst_27088;
var tmp27231 = inst_27089;
var inst_27087__$1 = tmp27229;
var inst_27088__$1 = tmp27230;
var inst_27089__$1 = tmp27231;
var inst_27090__$1 = inst_27097;
var state_27227__$1 = (function (){var statearr_27232 = state_27227;
(statearr_27232[(7)] = inst_27087__$1);

(statearr_27232[(8)] = inst_27088__$1);

(statearr_27232[(11)] = inst_27096);

(statearr_27232[(9)] = inst_27090__$1);

(statearr_27232[(10)] = inst_27089__$1);

return statearr_27232;
})();
var statearr_27233_27319 = state_27227__$1;
(statearr_27233_27319[(2)] = null);

(statearr_27233_27319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (20))){
var inst_27130 = (state_27227[(12)]);
var inst_27138 = figwheel.client.file_reloading.sort_files.call(null,inst_27130);
var state_27227__$1 = state_27227;
var statearr_27234_27320 = state_27227__$1;
(statearr_27234_27320[(2)] = inst_27138);

(statearr_27234_27320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (27))){
var state_27227__$1 = state_27227;
var statearr_27235_27321 = state_27227__$1;
(statearr_27235_27321[(2)] = null);

(statearr_27235_27321[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (1))){
var inst_27079 = (state_27227[(13)]);
var inst_27076 = before_jsload.call(null,files);
var inst_27077 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27078 = (function (){return ((function (inst_27079,inst_27076,inst_27077,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26820_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26820_SHARP_);
});
;})(inst_27079,inst_27076,inst_27077,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27079__$1 = cljs.core.filter.call(null,inst_27078,files);
var inst_27080 = cljs.core.not_empty.call(null,inst_27079__$1);
var state_27227__$1 = (function (){var statearr_27236 = state_27227;
(statearr_27236[(14)] = inst_27076);

(statearr_27236[(13)] = inst_27079__$1);

(statearr_27236[(15)] = inst_27077);

return statearr_27236;
})();
if(cljs.core.truth_(inst_27080)){
var statearr_27237_27322 = state_27227__$1;
(statearr_27237_27322[(1)] = (2));

} else {
var statearr_27238_27323 = state_27227__$1;
(statearr_27238_27323[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (24))){
var state_27227__$1 = state_27227;
var statearr_27239_27324 = state_27227__$1;
(statearr_27239_27324[(2)] = null);

(statearr_27239_27324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (39))){
var inst_27180 = (state_27227[(16)]);
var state_27227__$1 = state_27227;
var statearr_27240_27325 = state_27227__$1;
(statearr_27240_27325[(2)] = inst_27180);

(statearr_27240_27325[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (46))){
var inst_27222 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
var statearr_27241_27326 = state_27227__$1;
(statearr_27241_27326[(2)] = inst_27222);

(statearr_27241_27326[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (4))){
var inst_27124 = (state_27227[(2)]);
var inst_27125 = cljs.core.List.EMPTY;
var inst_27126 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27125);
var inst_27127 = (function (){return ((function (inst_27124,inst_27125,inst_27126,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26821_SHARP_){
var and__20217__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26821_SHARP_);
if(cljs.core.truth_(and__20217__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26821_SHARP_));
} else {
return and__20217__auto__;
}
});
;})(inst_27124,inst_27125,inst_27126,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27128 = cljs.core.filter.call(null,inst_27127,files);
var inst_27129 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27130 = cljs.core.concat.call(null,inst_27128,inst_27129);
var state_27227__$1 = (function (){var statearr_27242 = state_27227;
(statearr_27242[(17)] = inst_27124);

(statearr_27242[(12)] = inst_27130);

(statearr_27242[(18)] = inst_27126);

return statearr_27242;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27243_27327 = state_27227__$1;
(statearr_27243_27327[(1)] = (16));

} else {
var statearr_27244_27328 = state_27227__$1;
(statearr_27244_27328[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (15))){
var inst_27114 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
var statearr_27245_27329 = state_27227__$1;
(statearr_27245_27329[(2)] = inst_27114);

(statearr_27245_27329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (21))){
var inst_27140 = (state_27227[(19)]);
var inst_27140__$1 = (state_27227[(2)]);
var inst_27141 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27140__$1);
var state_27227__$1 = (function (){var statearr_27246 = state_27227;
(statearr_27246[(19)] = inst_27140__$1);

return statearr_27246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27227__$1,(22),inst_27141);
} else {
if((state_val_27228 === (31))){
var inst_27225 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27227__$1,inst_27225);
} else {
if((state_val_27228 === (32))){
var inst_27180 = (state_27227[(16)]);
var inst_27185 = inst_27180.cljs$lang$protocol_mask$partition0$;
var inst_27186 = (inst_27185 & (64));
var inst_27187 = inst_27180.cljs$core$ISeq$;
var inst_27188 = (cljs.core.PROTOCOL_SENTINEL === inst_27187);
var inst_27189 = (inst_27186) || (inst_27188);
var state_27227__$1 = state_27227;
if(cljs.core.truth_(inst_27189)){
var statearr_27247_27330 = state_27227__$1;
(statearr_27247_27330[(1)] = (35));

} else {
var statearr_27248_27331 = state_27227__$1;
(statearr_27248_27331[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (40))){
var inst_27202 = (state_27227[(20)]);
var inst_27201 = (state_27227[(2)]);
var inst_27202__$1 = cljs.core.get.call(null,inst_27201,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27203 = cljs.core.get.call(null,inst_27201,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27204 = cljs.core.not_empty.call(null,inst_27202__$1);
var state_27227__$1 = (function (){var statearr_27249 = state_27227;
(statearr_27249[(20)] = inst_27202__$1);

(statearr_27249[(21)] = inst_27203);

return statearr_27249;
})();
if(cljs.core.truth_(inst_27204)){
var statearr_27250_27332 = state_27227__$1;
(statearr_27250_27332[(1)] = (41));

} else {
var statearr_27251_27333 = state_27227__$1;
(statearr_27251_27333[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (33))){
var state_27227__$1 = state_27227;
var statearr_27252_27334 = state_27227__$1;
(statearr_27252_27334[(2)] = false);

(statearr_27252_27334[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (13))){
var inst_27100 = (state_27227[(22)]);
var inst_27104 = cljs.core.chunk_first.call(null,inst_27100);
var inst_27105 = cljs.core.chunk_rest.call(null,inst_27100);
var inst_27106 = cljs.core.count.call(null,inst_27104);
var inst_27087 = inst_27105;
var inst_27088 = inst_27104;
var inst_27089 = inst_27106;
var inst_27090 = (0);
var state_27227__$1 = (function (){var statearr_27253 = state_27227;
(statearr_27253[(7)] = inst_27087);

(statearr_27253[(8)] = inst_27088);

(statearr_27253[(9)] = inst_27090);

(statearr_27253[(10)] = inst_27089);

return statearr_27253;
})();
var statearr_27254_27335 = state_27227__$1;
(statearr_27254_27335[(2)] = null);

(statearr_27254_27335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (22))){
var inst_27148 = (state_27227[(23)]);
var inst_27144 = (state_27227[(24)]);
var inst_27140 = (state_27227[(19)]);
var inst_27143 = (state_27227[(25)]);
var inst_27143__$1 = (state_27227[(2)]);
var inst_27144__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27143__$1);
var inst_27145 = (function (){var all_files = inst_27140;
var res_SINGLEQUOTE_ = inst_27143__$1;
var res = inst_27144__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27148,inst_27144,inst_27140,inst_27143,inst_27143__$1,inst_27144__$1,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26822_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26822_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27148,inst_27144,inst_27140,inst_27143,inst_27143__$1,inst_27144__$1,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27146 = cljs.core.filter.call(null,inst_27145,inst_27143__$1);
var inst_27147 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27148__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27147);
var inst_27149 = cljs.core.not_empty.call(null,inst_27148__$1);
var state_27227__$1 = (function (){var statearr_27255 = state_27227;
(statearr_27255[(23)] = inst_27148__$1);

(statearr_27255[(24)] = inst_27144__$1);

(statearr_27255[(26)] = inst_27146);

(statearr_27255[(25)] = inst_27143__$1);

return statearr_27255;
})();
if(cljs.core.truth_(inst_27149)){
var statearr_27256_27336 = state_27227__$1;
(statearr_27256_27336[(1)] = (23));

} else {
var statearr_27257_27337 = state_27227__$1;
(statearr_27257_27337[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (36))){
var state_27227__$1 = state_27227;
var statearr_27258_27338 = state_27227__$1;
(statearr_27258_27338[(2)] = false);

(statearr_27258_27338[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (41))){
var inst_27202 = (state_27227[(20)]);
var inst_27206 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27207 = cljs.core.map.call(null,inst_27206,inst_27202);
var inst_27208 = cljs.core.pr_str.call(null,inst_27207);
var inst_27209 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27208)].join('');
var inst_27210 = figwheel.client.utils.log.call(null,inst_27209);
var state_27227__$1 = state_27227;
var statearr_27259_27339 = state_27227__$1;
(statearr_27259_27339[(2)] = inst_27210);

(statearr_27259_27339[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (43))){
var inst_27203 = (state_27227[(21)]);
var inst_27213 = (state_27227[(2)]);
var inst_27214 = cljs.core.not_empty.call(null,inst_27203);
var state_27227__$1 = (function (){var statearr_27260 = state_27227;
(statearr_27260[(27)] = inst_27213);

return statearr_27260;
})();
if(cljs.core.truth_(inst_27214)){
var statearr_27261_27340 = state_27227__$1;
(statearr_27261_27340[(1)] = (44));

} else {
var statearr_27262_27341 = state_27227__$1;
(statearr_27262_27341[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (29))){
var inst_27148 = (state_27227[(23)]);
var inst_27144 = (state_27227[(24)]);
var inst_27146 = (state_27227[(26)]);
var inst_27140 = (state_27227[(19)]);
var inst_27143 = (state_27227[(25)]);
var inst_27180 = (state_27227[(16)]);
var inst_27176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27179 = (function (){var all_files = inst_27140;
var res_SINGLEQUOTE_ = inst_27143;
var res = inst_27144;
var files_not_loaded = inst_27146;
var dependencies_that_loaded = inst_27148;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27144,inst_27146,inst_27140,inst_27143,inst_27180,inst_27176,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27178){
var map__27263 = p__27178;
var map__27263__$1 = ((((!((map__27263 == null)))?((((map__27263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27263):map__27263);
var namespace = cljs.core.get.call(null,map__27263__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27144,inst_27146,inst_27140,inst_27143,inst_27180,inst_27176,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27180__$1 = cljs.core.group_by.call(null,inst_27179,inst_27146);
var inst_27182 = (inst_27180__$1 == null);
var inst_27183 = cljs.core.not.call(null,inst_27182);
var state_27227__$1 = (function (){var statearr_27265 = state_27227;
(statearr_27265[(16)] = inst_27180__$1);

(statearr_27265[(28)] = inst_27176);

return statearr_27265;
})();
if(inst_27183){
var statearr_27266_27342 = state_27227__$1;
(statearr_27266_27342[(1)] = (32));

} else {
var statearr_27267_27343 = state_27227__$1;
(statearr_27267_27343[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (44))){
var inst_27203 = (state_27227[(21)]);
var inst_27216 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27203);
var inst_27217 = cljs.core.pr_str.call(null,inst_27216);
var inst_27218 = [cljs.core.str("not required: "),cljs.core.str(inst_27217)].join('');
var inst_27219 = figwheel.client.utils.log.call(null,inst_27218);
var state_27227__$1 = state_27227;
var statearr_27268_27344 = state_27227__$1;
(statearr_27268_27344[(2)] = inst_27219);

(statearr_27268_27344[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (6))){
var inst_27121 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
var statearr_27269_27345 = state_27227__$1;
(statearr_27269_27345[(2)] = inst_27121);

(statearr_27269_27345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (28))){
var inst_27146 = (state_27227[(26)]);
var inst_27173 = (state_27227[(2)]);
var inst_27174 = cljs.core.not_empty.call(null,inst_27146);
var state_27227__$1 = (function (){var statearr_27270 = state_27227;
(statearr_27270[(29)] = inst_27173);

return statearr_27270;
})();
if(cljs.core.truth_(inst_27174)){
var statearr_27271_27346 = state_27227__$1;
(statearr_27271_27346[(1)] = (29));

} else {
var statearr_27272_27347 = state_27227__$1;
(statearr_27272_27347[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (25))){
var inst_27144 = (state_27227[(24)]);
var inst_27160 = (state_27227[(2)]);
var inst_27161 = cljs.core.not_empty.call(null,inst_27144);
var state_27227__$1 = (function (){var statearr_27273 = state_27227;
(statearr_27273[(30)] = inst_27160);

return statearr_27273;
})();
if(cljs.core.truth_(inst_27161)){
var statearr_27274_27348 = state_27227__$1;
(statearr_27274_27348[(1)] = (26));

} else {
var statearr_27275_27349 = state_27227__$1;
(statearr_27275_27349[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (34))){
var inst_27196 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
if(cljs.core.truth_(inst_27196)){
var statearr_27276_27350 = state_27227__$1;
(statearr_27276_27350[(1)] = (38));

} else {
var statearr_27277_27351 = state_27227__$1;
(statearr_27277_27351[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (17))){
var state_27227__$1 = state_27227;
var statearr_27278_27352 = state_27227__$1;
(statearr_27278_27352[(2)] = recompile_dependents);

(statearr_27278_27352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (3))){
var state_27227__$1 = state_27227;
var statearr_27279_27353 = state_27227__$1;
(statearr_27279_27353[(2)] = null);

(statearr_27279_27353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (12))){
var inst_27117 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
var statearr_27280_27354 = state_27227__$1;
(statearr_27280_27354[(2)] = inst_27117);

(statearr_27280_27354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (2))){
var inst_27079 = (state_27227[(13)]);
var inst_27086 = cljs.core.seq.call(null,inst_27079);
var inst_27087 = inst_27086;
var inst_27088 = null;
var inst_27089 = (0);
var inst_27090 = (0);
var state_27227__$1 = (function (){var statearr_27281 = state_27227;
(statearr_27281[(7)] = inst_27087);

(statearr_27281[(8)] = inst_27088);

(statearr_27281[(9)] = inst_27090);

(statearr_27281[(10)] = inst_27089);

return statearr_27281;
})();
var statearr_27282_27355 = state_27227__$1;
(statearr_27282_27355[(2)] = null);

(statearr_27282_27355[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (23))){
var inst_27148 = (state_27227[(23)]);
var inst_27144 = (state_27227[(24)]);
var inst_27146 = (state_27227[(26)]);
var inst_27140 = (state_27227[(19)]);
var inst_27143 = (state_27227[(25)]);
var inst_27151 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27153 = (function (){var all_files = inst_27140;
var res_SINGLEQUOTE_ = inst_27143;
var res = inst_27144;
var files_not_loaded = inst_27146;
var dependencies_that_loaded = inst_27148;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27144,inst_27146,inst_27140,inst_27143,inst_27151,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27152){
var map__27283 = p__27152;
var map__27283__$1 = ((((!((map__27283 == null)))?((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27283):map__27283);
var request_url = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27144,inst_27146,inst_27140,inst_27143,inst_27151,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27154 = cljs.core.reverse.call(null,inst_27148);
var inst_27155 = cljs.core.map.call(null,inst_27153,inst_27154);
var inst_27156 = cljs.core.pr_str.call(null,inst_27155);
var inst_27157 = figwheel.client.utils.log.call(null,inst_27156);
var state_27227__$1 = (function (){var statearr_27285 = state_27227;
(statearr_27285[(31)] = inst_27151);

return statearr_27285;
})();
var statearr_27286_27356 = state_27227__$1;
(statearr_27286_27356[(2)] = inst_27157);

(statearr_27286_27356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (35))){
var state_27227__$1 = state_27227;
var statearr_27287_27357 = state_27227__$1;
(statearr_27287_27357[(2)] = true);

(statearr_27287_27357[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (19))){
var inst_27130 = (state_27227[(12)]);
var inst_27136 = figwheel.client.file_reloading.expand_files.call(null,inst_27130);
var state_27227__$1 = state_27227;
var statearr_27288_27358 = state_27227__$1;
(statearr_27288_27358[(2)] = inst_27136);

(statearr_27288_27358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (11))){
var state_27227__$1 = state_27227;
var statearr_27289_27359 = state_27227__$1;
(statearr_27289_27359[(2)] = null);

(statearr_27289_27359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (9))){
var inst_27119 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
var statearr_27290_27360 = state_27227__$1;
(statearr_27290_27360[(2)] = inst_27119);

(statearr_27290_27360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (5))){
var inst_27090 = (state_27227[(9)]);
var inst_27089 = (state_27227[(10)]);
var inst_27092 = (inst_27090 < inst_27089);
var inst_27093 = inst_27092;
var state_27227__$1 = state_27227;
if(cljs.core.truth_(inst_27093)){
var statearr_27291_27361 = state_27227__$1;
(statearr_27291_27361[(1)] = (7));

} else {
var statearr_27292_27362 = state_27227__$1;
(statearr_27292_27362[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (14))){
var inst_27100 = (state_27227[(22)]);
var inst_27109 = cljs.core.first.call(null,inst_27100);
var inst_27110 = figwheel.client.file_reloading.eval_body.call(null,inst_27109,opts);
var inst_27111 = cljs.core.next.call(null,inst_27100);
var inst_27087 = inst_27111;
var inst_27088 = null;
var inst_27089 = (0);
var inst_27090 = (0);
var state_27227__$1 = (function (){var statearr_27293 = state_27227;
(statearr_27293[(7)] = inst_27087);

(statearr_27293[(8)] = inst_27088);

(statearr_27293[(9)] = inst_27090);

(statearr_27293[(10)] = inst_27089);

(statearr_27293[(32)] = inst_27110);

return statearr_27293;
})();
var statearr_27294_27363 = state_27227__$1;
(statearr_27294_27363[(2)] = null);

(statearr_27294_27363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (45))){
var state_27227__$1 = state_27227;
var statearr_27295_27364 = state_27227__$1;
(statearr_27295_27364[(2)] = null);

(statearr_27295_27364[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (26))){
var inst_27148 = (state_27227[(23)]);
var inst_27144 = (state_27227[(24)]);
var inst_27146 = (state_27227[(26)]);
var inst_27140 = (state_27227[(19)]);
var inst_27143 = (state_27227[(25)]);
var inst_27163 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27165 = (function (){var all_files = inst_27140;
var res_SINGLEQUOTE_ = inst_27143;
var res = inst_27144;
var files_not_loaded = inst_27146;
var dependencies_that_loaded = inst_27148;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27144,inst_27146,inst_27140,inst_27143,inst_27163,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27164){
var map__27296 = p__27164;
var map__27296__$1 = ((((!((map__27296 == null)))?((((map__27296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27296):map__27296);
var namespace = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27144,inst_27146,inst_27140,inst_27143,inst_27163,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27166 = cljs.core.map.call(null,inst_27165,inst_27144);
var inst_27167 = cljs.core.pr_str.call(null,inst_27166);
var inst_27168 = figwheel.client.utils.log.call(null,inst_27167);
var inst_27169 = (function (){var all_files = inst_27140;
var res_SINGLEQUOTE_ = inst_27143;
var res = inst_27144;
var files_not_loaded = inst_27146;
var dependencies_that_loaded = inst_27148;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27144,inst_27146,inst_27140,inst_27143,inst_27163,inst_27165,inst_27166,inst_27167,inst_27168,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27144,inst_27146,inst_27140,inst_27143,inst_27163,inst_27165,inst_27166,inst_27167,inst_27168,state_val_27228,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27170 = setTimeout(inst_27169,(10));
var state_27227__$1 = (function (){var statearr_27298 = state_27227;
(statearr_27298[(33)] = inst_27163);

(statearr_27298[(34)] = inst_27168);

return statearr_27298;
})();
var statearr_27299_27365 = state_27227__$1;
(statearr_27299_27365[(2)] = inst_27170);

(statearr_27299_27365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (16))){
var state_27227__$1 = state_27227;
var statearr_27300_27366 = state_27227__$1;
(statearr_27300_27366[(2)] = reload_dependents);

(statearr_27300_27366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (38))){
var inst_27180 = (state_27227[(16)]);
var inst_27198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27180);
var state_27227__$1 = state_27227;
var statearr_27301_27367 = state_27227__$1;
(statearr_27301_27367[(2)] = inst_27198);

(statearr_27301_27367[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (30))){
var state_27227__$1 = state_27227;
var statearr_27302_27368 = state_27227__$1;
(statearr_27302_27368[(2)] = null);

(statearr_27302_27368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (10))){
var inst_27100 = (state_27227[(22)]);
var inst_27102 = cljs.core.chunked_seq_QMARK_.call(null,inst_27100);
var state_27227__$1 = state_27227;
if(inst_27102){
var statearr_27303_27369 = state_27227__$1;
(statearr_27303_27369[(1)] = (13));

} else {
var statearr_27304_27370 = state_27227__$1;
(statearr_27304_27370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (18))){
var inst_27134 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
if(cljs.core.truth_(inst_27134)){
var statearr_27305_27371 = state_27227__$1;
(statearr_27305_27371[(1)] = (19));

} else {
var statearr_27306_27372 = state_27227__$1;
(statearr_27306_27372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (42))){
var state_27227__$1 = state_27227;
var statearr_27307_27373 = state_27227__$1;
(statearr_27307_27373[(2)] = null);

(statearr_27307_27373[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (37))){
var inst_27193 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
var statearr_27308_27374 = state_27227__$1;
(statearr_27308_27374[(2)] = inst_27193);

(statearr_27308_27374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (8))){
var inst_27087 = (state_27227[(7)]);
var inst_27100 = (state_27227[(22)]);
var inst_27100__$1 = cljs.core.seq.call(null,inst_27087);
var state_27227__$1 = (function (){var statearr_27309 = state_27227;
(statearr_27309[(22)] = inst_27100__$1);

return statearr_27309;
})();
if(inst_27100__$1){
var statearr_27310_27375 = state_27227__$1;
(statearr_27310_27375[(1)] = (10));

} else {
var statearr_27311_27376 = state_27227__$1;
(statearr_27311_27376[(1)] = (11));

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
});})(c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22395__auto__,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____0 = (function (){
var statearr_27315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27315[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__);

(statearr_27315[(1)] = (1));

return statearr_27315;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____1 = (function (state_27227){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_27227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e27316){if((e27316 instanceof Object)){
var ex__22399__auto__ = e27316;
var statearr_27317_27377 = state_27227;
(statearr_27317_27377[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27378 = state_27227;
state_27227 = G__27378;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__ = function(state_27227){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____1.call(this,state_27227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22509__auto__ = (function (){var statearr_27318 = f__22508__auto__.call(null);
(statearr_27318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_27318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__,map__27072,map__27072__$1,opts,before_jsload,on_jsload,reload_dependents,map__27073,map__27073__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22507__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27381,link){
var map__27384 = p__27381;
var map__27384__$1 = ((((!((map__27384 == null)))?((((map__27384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27384):map__27384);
var file = cljs.core.get.call(null,map__27384__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27384,map__27384__$1,file){
return (function (p1__27379_SHARP_,p2__27380_SHARP_){
if(cljs.core._EQ_.call(null,p1__27379_SHARP_,p2__27380_SHARP_)){
return p1__27379_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27384,map__27384__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27390){
var map__27391 = p__27390;
var map__27391__$1 = ((((!((map__27391 == null)))?((((map__27391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27391):map__27391);
var match_length = cljs.core.get.call(null,map__27391__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27391__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27386_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27386_SHARP_);
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
var args27393 = [];
var len__21337__auto___27396 = arguments.length;
var i__21338__auto___27397 = (0);
while(true){
if((i__21338__auto___27397 < len__21337__auto___27396)){
args27393.push((arguments[i__21338__auto___27397]));

var G__27398 = (i__21338__auto___27397 + (1));
i__21338__auto___27397 = G__27398;
continue;
} else {
}
break;
}

var G__27395 = args27393.length;
switch (G__27395) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27393.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27400_SHARP_,p2__27401_SHARP_){
return cljs.core.assoc.call(null,p1__27400_SHARP_,cljs.core.get.call(null,p2__27401_SHARP_,key),p2__27401_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27402){
var map__27405 = p__27402;
var map__27405__$1 = ((((!((map__27405 == null)))?((((map__27405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);
var f_data = map__27405__$1;
var file = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27407,files_msg){
var map__27414 = p__27407;
var map__27414__$1 = ((((!((map__27414 == null)))?((((map__27414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27414):map__27414);
var opts = map__27414__$1;
var on_cssload = cljs.core.get.call(null,map__27414__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27416_27420 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27417_27421 = null;
var count__27418_27422 = (0);
var i__27419_27423 = (0);
while(true){
if((i__27419_27423 < count__27418_27422)){
var f_27424 = cljs.core._nth.call(null,chunk__27417_27421,i__27419_27423);
figwheel.client.file_reloading.reload_css_file.call(null,f_27424);

var G__27425 = seq__27416_27420;
var G__27426 = chunk__27417_27421;
var G__27427 = count__27418_27422;
var G__27428 = (i__27419_27423 + (1));
seq__27416_27420 = G__27425;
chunk__27417_27421 = G__27426;
count__27418_27422 = G__27427;
i__27419_27423 = G__27428;
continue;
} else {
var temp__4657__auto___27429 = cljs.core.seq.call(null,seq__27416_27420);
if(temp__4657__auto___27429){
var seq__27416_27430__$1 = temp__4657__auto___27429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27416_27430__$1)){
var c__21043__auto___27431 = cljs.core.chunk_first.call(null,seq__27416_27430__$1);
var G__27432 = cljs.core.chunk_rest.call(null,seq__27416_27430__$1);
var G__27433 = c__21043__auto___27431;
var G__27434 = cljs.core.count.call(null,c__21043__auto___27431);
var G__27435 = (0);
seq__27416_27420 = G__27432;
chunk__27417_27421 = G__27433;
count__27418_27422 = G__27434;
i__27419_27423 = G__27435;
continue;
} else {
var f_27436 = cljs.core.first.call(null,seq__27416_27430__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27436);

var G__27437 = cljs.core.next.call(null,seq__27416_27430__$1);
var G__27438 = null;
var G__27439 = (0);
var G__27440 = (0);
seq__27416_27420 = G__27437;
chunk__27417_27421 = G__27438;
count__27418_27422 = G__27439;
i__27419_27423 = G__27440;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27414,map__27414__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27414,map__27414__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1528667385108