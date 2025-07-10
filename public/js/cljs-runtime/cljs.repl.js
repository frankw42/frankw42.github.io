goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19694){
var map__19695 = p__19694;
var map__19695__$1 = cljs.core.__destructure_map(map__19695);
var m = map__19695__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19695__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19713_19964 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19714_19965 = null;
var count__19715_19966 = (0);
var i__19716_19967 = (0);
while(true){
if((i__19716_19967 < count__19715_19966)){
var f_19968 = chunk__19714_19965.cljs$core$IIndexed$_nth$arity$2(null,i__19716_19967);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19968], 0));


var G__19969 = seq__19713_19964;
var G__19970 = chunk__19714_19965;
var G__19971 = count__19715_19966;
var G__19972 = (i__19716_19967 + (1));
seq__19713_19964 = G__19969;
chunk__19714_19965 = G__19970;
count__19715_19966 = G__19971;
i__19716_19967 = G__19972;
continue;
} else {
var temp__5823__auto___19973 = cljs.core.seq(seq__19713_19964);
if(temp__5823__auto___19973){
var seq__19713_19974__$1 = temp__5823__auto___19973;
if(cljs.core.chunked_seq_QMARK_(seq__19713_19974__$1)){
var c__5548__auto___19975 = cljs.core.chunk_first(seq__19713_19974__$1);
var G__19976 = cljs.core.chunk_rest(seq__19713_19974__$1);
var G__19977 = c__5548__auto___19975;
var G__19978 = cljs.core.count(c__5548__auto___19975);
var G__19979 = (0);
seq__19713_19964 = G__19976;
chunk__19714_19965 = G__19977;
count__19715_19966 = G__19978;
i__19716_19967 = G__19979;
continue;
} else {
var f_19980 = cljs.core.first(seq__19713_19974__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19980], 0));


var G__19981 = cljs.core.next(seq__19713_19974__$1);
var G__19982 = null;
var G__19983 = (0);
var G__19984 = (0);
seq__19713_19964 = G__19981;
chunk__19714_19965 = G__19982;
count__19715_19966 = G__19983;
i__19716_19967 = G__19984;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19985 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19985], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19985)))?cljs.core.second(arglists_19985):arglists_19985)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19769_19986 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19770_19987 = null;
var count__19771_19988 = (0);
var i__19772_19989 = (0);
while(true){
if((i__19772_19989 < count__19771_19988)){
var vec__19785_19990 = chunk__19770_19987.cljs$core$IIndexed$_nth$arity$2(null,i__19772_19989);
var name_19991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19785_19990,(0),null);
var map__19788_19992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19785_19990,(1),null);
var map__19788_19993__$1 = cljs.core.__destructure_map(map__19788_19992);
var doc_19994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19788_19993__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19788_19993__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19991], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19995], 0));

if(cljs.core.truth_(doc_19994)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19994], 0));
} else {
}


var G__19997 = seq__19769_19986;
var G__19998 = chunk__19770_19987;
var G__19999 = count__19771_19988;
var G__20000 = (i__19772_19989 + (1));
seq__19769_19986 = G__19997;
chunk__19770_19987 = G__19998;
count__19771_19988 = G__19999;
i__19772_19989 = G__20000;
continue;
} else {
var temp__5823__auto___20001 = cljs.core.seq(seq__19769_19986);
if(temp__5823__auto___20001){
var seq__19769_20002__$1 = temp__5823__auto___20001;
if(cljs.core.chunked_seq_QMARK_(seq__19769_20002__$1)){
var c__5548__auto___20003 = cljs.core.chunk_first(seq__19769_20002__$1);
var G__20004 = cljs.core.chunk_rest(seq__19769_20002__$1);
var G__20005 = c__5548__auto___20003;
var G__20006 = cljs.core.count(c__5548__auto___20003);
var G__20007 = (0);
seq__19769_19986 = G__20004;
chunk__19770_19987 = G__20005;
count__19771_19988 = G__20006;
i__19772_19989 = G__20007;
continue;
} else {
var vec__19790_20008 = cljs.core.first(seq__19769_20002__$1);
var name_20009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19790_20008,(0),null);
var map__19793_20010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19790_20008,(1),null);
var map__19793_20011__$1 = cljs.core.__destructure_map(map__19793_20010);
var doc_20012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19793_20011__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19793_20011__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20009], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20013], 0));

if(cljs.core.truth_(doc_20012)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20012], 0));
} else {
}


var G__20014 = cljs.core.next(seq__19769_20002__$1);
var G__20015 = null;
var G__20016 = (0);
var G__20017 = (0);
seq__19769_19986 = G__20014;
chunk__19770_19987 = G__20015;
count__19771_19988 = G__20016;
i__19772_19989 = G__20017;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19794 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19795 = null;
var count__19796 = (0);
var i__19797 = (0);
while(true){
if((i__19797 < count__19796)){
var role = chunk__19795.cljs$core$IIndexed$_nth$arity$2(null,i__19797);
var temp__5823__auto___20018__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___20018__$1)){
var spec_20019 = temp__5823__auto___20018__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20019)], 0));
} else {
}


var G__20020 = seq__19794;
var G__20021 = chunk__19795;
var G__20022 = count__19796;
var G__20023 = (i__19797 + (1));
seq__19794 = G__20020;
chunk__19795 = G__20021;
count__19796 = G__20022;
i__19797 = G__20023;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__19794);
if(temp__5823__auto____$1){
var seq__19794__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19794__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__19794__$1);
var G__20024 = cljs.core.chunk_rest(seq__19794__$1);
var G__20025 = c__5548__auto__;
var G__20026 = cljs.core.count(c__5548__auto__);
var G__20027 = (0);
seq__19794 = G__20024;
chunk__19795 = G__20025;
count__19796 = G__20026;
i__19797 = G__20027;
continue;
} else {
var role = cljs.core.first(seq__19794__$1);
var temp__5823__auto___20028__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___20028__$2)){
var spec_20029 = temp__5823__auto___20028__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20029)], 0));
} else {
}


var G__20031 = cljs.core.next(seq__19794__$1);
var G__20032 = null;
var G__20033 = (0);
var G__20034 = (0);
seq__19794 = G__20031;
chunk__19795 = G__20032;
count__19796 = G__20033;
i__19797 = G__20034;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19863 = datafied_throwable;
var map__19863__$1 = cljs.core.__destructure_map(map__19863);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19863__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19863__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19863__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19864 = cljs.core.last(via);
var map__19864__$1 = cljs.core.__destructure_map(map__19864);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19865 = data;
var map__19865__$1 = cljs.core.__destructure_map(map__19865);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19865__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19865__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19865__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19866 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19866__$1 = cljs.core.__destructure_map(map__19866);
var top_data = map__19866__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19867 = phase;
var G__19867__$1 = (((G__19867 instanceof cljs.core.Keyword))?G__19867.fqn:null);
switch (G__19867__$1) {
case "read-source":
var map__19868 = data;
var map__19868__$1 = cljs.core.__destructure_map(map__19868);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19869 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19869__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19869,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19869);
var G__19869__$2 = (cljs.core.truth_((function (){var fexpr__19870 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19870.cljs$core$IFn$_invoke$arity$1 ? fexpr__19870.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19870.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19869__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19869__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19869__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19869__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19872 = top_data;
var G__19872__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19872);
var G__19872__$2 = (cljs.core.truth_((function (){var fexpr__19873 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19873.cljs$core$IFn$_invoke$arity$1 ? fexpr__19873.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19873.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19872__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19872__$1);
var G__19872__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19872__$2);
var G__19872__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19872__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19872__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19874 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19874,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19874,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19874,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19874,(3),null);
var G__19877 = top_data;
var G__19877__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19877,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19877);
var G__19877__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19877__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19877__$1);
var G__19877__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19877__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19877__$2);
var G__19877__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19877__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19877__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19877__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19877__$4;
}

break;
case "execution":
var vec__19879 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19879,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19879,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19879,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19879,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19862_SHARP_){
var or__5025__auto__ = (p1__19862_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__19882 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19882.cljs$core$IFn$_invoke$arity$1 ? fexpr__19882.cljs$core$IFn$_invoke$arity$1(p1__19862_SHARP_) : fexpr__19882.call(null,p1__19862_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__19883 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19883__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19883,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19883);
var G__19883__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19883__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19883__$1);
var G__19883__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19883__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19883__$2);
var G__19883__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19883__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19883__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19883__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19883__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19867__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19896){
var map__19897 = p__19896;
var map__19897__$1 = cljs.core.__destructure_map(map__19897);
var triage_data = map__19897__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19901 = phase;
var G__19901__$1 = (((G__19901 instanceof cljs.core.Keyword))?G__19901.fqn:null);
switch (G__19901__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19906 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19907 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19908 = loc;
var G__19909 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19910_20044 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19911_20045 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19912_20046 = true;
var _STAR_print_fn_STAR__temp_val__19913_20047 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19912_20046);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19913_20047);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19890_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19890_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19911_20045);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19910_20044);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19906,G__19907,G__19908,G__19909) : format.call(null,G__19906,G__19907,G__19908,G__19909));

break;
case "macroexpansion":
var G__19917 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19918 = cause_type;
var G__19919 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19920 = loc;
var G__19921 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19917,G__19918,G__19919,G__19920,G__19921) : format.call(null,G__19917,G__19918,G__19919,G__19920,G__19921));

break;
case "compile-syntax-check":
var G__19922 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19923 = cause_type;
var G__19924 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19925 = loc;
var G__19926 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19922,G__19923,G__19924,G__19925,G__19926) : format.call(null,G__19922,G__19923,G__19924,G__19925,G__19926));

break;
case "compilation":
var G__19927 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19928 = cause_type;
var G__19929 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19930 = loc;
var G__19931 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19927,G__19928,G__19929,G__19930,G__19931) : format.call(null,G__19927,G__19928,G__19929,G__19930,G__19931));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19932 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19933 = symbol;
var G__19934 = loc;
var G__19935 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19936_20048 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19937_20049 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19938_20050 = true;
var _STAR_print_fn_STAR__temp_val__19939_20051 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19938_20050);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19939_20051);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19895_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19895_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19937_20049);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19936_20048);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19932,G__19933,G__19934,G__19935) : format.call(null,G__19932,G__19933,G__19934,G__19935));
} else {
var G__19940 = "Execution error%s at %s(%s).\n%s\n";
var G__19941 = cause_type;
var G__19942 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19943 = loc;
var G__19944 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19940,G__19941,G__19942,G__19943,G__19944) : format.call(null,G__19940,G__19941,G__19942,G__19943,G__19944));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19901__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
