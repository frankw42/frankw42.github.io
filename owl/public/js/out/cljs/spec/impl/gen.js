// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27494 = arguments.length;
var i__21338__auto___27495 = (0);
while(true){
if((i__21338__auto___27495 < len__21337__auto___27494)){
args__21344__auto__.push((arguments[i__21338__auto___27495]));

var G__27496 = (i__21338__auto___27495 + (1));
i__21338__auto___27495 = G__27496;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq27493){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27493));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27498 = arguments.length;
var i__21338__auto___27499 = (0);
while(true){
if((i__21338__auto___27499 < len__21337__auto___27498)){
args__21344__auto__.push((arguments[i__21338__auto___27499]));

var G__27500 = (i__21338__auto___27499 + (1));
i__21338__auto___27499 = G__27500;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq27497){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27497));
});

var g_QMARK__27501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_27502 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27501){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27501))
,null));
var mkg_27503 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27501,g_27502){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27501,g_27502))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__27501,g_27502,mkg_27503){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__27501).call(null,x);
});})(g_QMARK__27501,g_27502,mkg_27503))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__27501,g_27502,mkg_27503){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_27503).call(null,gfn);
});})(g_QMARK__27501,g_27502,mkg_27503))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__27501,g_27502,mkg_27503){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_27502).call(null,generator);
});})(g_QMARK__27501,g_27502,mkg_27503))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27465__auto___27522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27465__auto___27522){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27523 = arguments.length;
var i__21338__auto___27524 = (0);
while(true){
if((i__21338__auto___27524 < len__21337__auto___27523)){
args__21344__auto__.push((arguments[i__21338__auto___27524]));

var G__27525 = (i__21338__auto___27524 + (1));
i__21338__auto___27524 = G__27525;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27522))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27522),args);
});})(g__27465__auto___27522))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27465__auto___27522){
return (function (seq27504){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27504));
});})(g__27465__auto___27522))
;


var g__27465__auto___27526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27465__auto___27526){
return (function cljs$spec$impl$gen$list(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27527 = arguments.length;
var i__21338__auto___27528 = (0);
while(true){
if((i__21338__auto___27528 < len__21337__auto___27527)){
args__21344__auto__.push((arguments[i__21338__auto___27528]));

var G__27529 = (i__21338__auto___27528 + (1));
i__21338__auto___27528 = G__27529;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27526))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27526),args);
});})(g__27465__auto___27526))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27465__auto___27526){
return (function (seq27505){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27505));
});})(g__27465__auto___27526))
;


var g__27465__auto___27530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27465__auto___27530){
return (function cljs$spec$impl$gen$map(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27531 = arguments.length;
var i__21338__auto___27532 = (0);
while(true){
if((i__21338__auto___27532 < len__21337__auto___27531)){
args__21344__auto__.push((arguments[i__21338__auto___27532]));

var G__27533 = (i__21338__auto___27532 + (1));
i__21338__auto___27532 = G__27533;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27530))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27530),args);
});})(g__27465__auto___27530))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27465__auto___27530){
return (function (seq27506){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27506));
});})(g__27465__auto___27530))
;


var g__27465__auto___27534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27465__auto___27534){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27535 = arguments.length;
var i__21338__auto___27536 = (0);
while(true){
if((i__21338__auto___27536 < len__21337__auto___27535)){
args__21344__auto__.push((arguments[i__21338__auto___27536]));

var G__27537 = (i__21338__auto___27536 + (1));
i__21338__auto___27536 = G__27537;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27534))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27534),args);
});})(g__27465__auto___27534))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27465__auto___27534){
return (function (seq27507){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27507));
});})(g__27465__auto___27534))
;


var g__27465__auto___27538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27465__auto___27538){
return (function cljs$spec$impl$gen$set(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27539 = arguments.length;
var i__21338__auto___27540 = (0);
while(true){
if((i__21338__auto___27540 < len__21337__auto___27539)){
args__21344__auto__.push((arguments[i__21338__auto___27540]));

var G__27541 = (i__21338__auto___27540 + (1));
i__21338__auto___27540 = G__27541;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27538))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27538),args);
});})(g__27465__auto___27538))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27465__auto___27538){
return (function (seq27508){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27508));
});})(g__27465__auto___27538))
;


var g__27465__auto___27542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27465__auto___27542){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27543 = arguments.length;
var i__21338__auto___27544 = (0);
while(true){
if((i__21338__auto___27544 < len__21337__auto___27543)){
args__21344__auto__.push((arguments[i__21338__auto___27544]));

var G__27545 = (i__21338__auto___27544 + (1));
i__21338__auto___27544 = G__27545;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27542))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27542),args);
});})(g__27465__auto___27542))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27465__auto___27542){
return (function (seq27509){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27509));
});})(g__27465__auto___27542))
;


var g__27465__auto___27546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27465__auto___27546){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27547 = arguments.length;
var i__21338__auto___27548 = (0);
while(true){
if((i__21338__auto___27548 < len__21337__auto___27547)){
args__21344__auto__.push((arguments[i__21338__auto___27548]));

var G__27549 = (i__21338__auto___27548 + (1));
i__21338__auto___27548 = G__27549;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27546))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27546),args);
});})(g__27465__auto___27546))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27465__auto___27546){
return (function (seq27510){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27510));
});})(g__27465__auto___27546))
;


var g__27465__auto___27550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27465__auto___27550){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27551 = arguments.length;
var i__21338__auto___27552 = (0);
while(true){
if((i__21338__auto___27552 < len__21337__auto___27551)){
args__21344__auto__.push((arguments[i__21338__auto___27552]));

var G__27553 = (i__21338__auto___27552 + (1));
i__21338__auto___27552 = G__27553;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27550))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27550),args);
});})(g__27465__auto___27550))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27465__auto___27550){
return (function (seq27511){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27511));
});})(g__27465__auto___27550))
;


var g__27465__auto___27554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27465__auto___27554){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27555 = arguments.length;
var i__21338__auto___27556 = (0);
while(true){
if((i__21338__auto___27556 < len__21337__auto___27555)){
args__21344__auto__.push((arguments[i__21338__auto___27556]));

var G__27557 = (i__21338__auto___27556 + (1));
i__21338__auto___27556 = G__27557;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27554))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27554),args);
});})(g__27465__auto___27554))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27465__auto___27554){
return (function (seq27512){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27512));
});})(g__27465__auto___27554))
;


var g__27465__auto___27558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27465__auto___27558){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27559 = arguments.length;
var i__21338__auto___27560 = (0);
while(true){
if((i__21338__auto___27560 < len__21337__auto___27559)){
args__21344__auto__.push((arguments[i__21338__auto___27560]));

var G__27561 = (i__21338__auto___27560 + (1));
i__21338__auto___27560 = G__27561;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27558))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27558),args);
});})(g__27465__auto___27558))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27465__auto___27558){
return (function (seq27513){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27513));
});})(g__27465__auto___27558))
;


var g__27465__auto___27562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27465__auto___27562){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27563 = arguments.length;
var i__21338__auto___27564 = (0);
while(true){
if((i__21338__auto___27564 < len__21337__auto___27563)){
args__21344__auto__.push((arguments[i__21338__auto___27564]));

var G__27565 = (i__21338__auto___27564 + (1));
i__21338__auto___27564 = G__27565;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27562))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27562),args);
});})(g__27465__auto___27562))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27465__auto___27562){
return (function (seq27514){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27514));
});})(g__27465__auto___27562))
;


var g__27465__auto___27566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27465__auto___27566){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27567 = arguments.length;
var i__21338__auto___27568 = (0);
while(true){
if((i__21338__auto___27568 < len__21337__auto___27567)){
args__21344__auto__.push((arguments[i__21338__auto___27568]));

var G__27569 = (i__21338__auto___27568 + (1));
i__21338__auto___27568 = G__27569;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27566))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27566),args);
});})(g__27465__auto___27566))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27465__auto___27566){
return (function (seq27515){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27515));
});})(g__27465__auto___27566))
;


var g__27465__auto___27570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27465__auto___27570){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27571 = arguments.length;
var i__21338__auto___27572 = (0);
while(true){
if((i__21338__auto___27572 < len__21337__auto___27571)){
args__21344__auto__.push((arguments[i__21338__auto___27572]));

var G__27573 = (i__21338__auto___27572 + (1));
i__21338__auto___27572 = G__27573;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27570))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27570),args);
});})(g__27465__auto___27570))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27465__auto___27570){
return (function (seq27516){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27516));
});})(g__27465__auto___27570))
;


var g__27465__auto___27574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27465__auto___27574){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27575 = arguments.length;
var i__21338__auto___27576 = (0);
while(true){
if((i__21338__auto___27576 < len__21337__auto___27575)){
args__21344__auto__.push((arguments[i__21338__auto___27576]));

var G__27577 = (i__21338__auto___27576 + (1));
i__21338__auto___27576 = G__27577;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27574))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27574),args);
});})(g__27465__auto___27574))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27465__auto___27574){
return (function (seq27517){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27517));
});})(g__27465__auto___27574))
;


var g__27465__auto___27578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27465__auto___27578){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27579 = arguments.length;
var i__21338__auto___27580 = (0);
while(true){
if((i__21338__auto___27580 < len__21337__auto___27579)){
args__21344__auto__.push((arguments[i__21338__auto___27580]));

var G__27581 = (i__21338__auto___27580 + (1));
i__21338__auto___27580 = G__27581;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27578))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27578),args);
});})(g__27465__auto___27578))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27465__auto___27578){
return (function (seq27518){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27518));
});})(g__27465__auto___27578))
;


var g__27465__auto___27582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27465__auto___27582){
return (function cljs$spec$impl$gen$return(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27583 = arguments.length;
var i__21338__auto___27584 = (0);
while(true){
if((i__21338__auto___27584 < len__21337__auto___27583)){
args__21344__auto__.push((arguments[i__21338__auto___27584]));

var G__27585 = (i__21338__auto___27584 + (1));
i__21338__auto___27584 = G__27585;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27582))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27582),args);
});})(g__27465__auto___27582))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27465__auto___27582){
return (function (seq27519){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27519));
});})(g__27465__auto___27582))
;


var g__27465__auto___27586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27465__auto___27586){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27587 = arguments.length;
var i__21338__auto___27588 = (0);
while(true){
if((i__21338__auto___27588 < len__21337__auto___27587)){
args__21344__auto__.push((arguments[i__21338__auto___27588]));

var G__27589 = (i__21338__auto___27588 + (1));
i__21338__auto___27588 = G__27589;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27586))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27586){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27586),args);
});})(g__27465__auto___27586))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27465__auto___27586){
return (function (seq27520){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27520));
});})(g__27465__auto___27586))
;


var g__27465__auto___27590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__27465__auto___27590){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27591 = arguments.length;
var i__21338__auto___27592 = (0);
while(true){
if((i__21338__auto___27592 < len__21337__auto___27591)){
args__21344__auto__.push((arguments[i__21338__auto___27592]));

var G__27593 = (i__21338__auto___27592 + (1));
i__21338__auto___27592 = G__27593;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27465__auto___27590))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27465__auto___27590){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27465__auto___27590),args);
});})(g__27465__auto___27590))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__27465__auto___27590){
return (function (seq27521){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27521));
});})(g__27465__auto___27590))
;

var g__27478__auto___27615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27478__auto___27615){
return (function cljs$spec$impl$gen$any(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27616 = arguments.length;
var i__21338__auto___27617 = (0);
while(true){
if((i__21338__auto___27617 < len__21337__auto___27616)){
args__21344__auto__.push((arguments[i__21338__auto___27617]));

var G__27618 = (i__21338__auto___27617 + (1));
i__21338__auto___27617 = G__27618;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27615))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27615){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27615);
});})(g__27478__auto___27615))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27478__auto___27615){
return (function (seq27594){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27594));
});})(g__27478__auto___27615))
;


var g__27478__auto___27619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27478__auto___27619){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27620 = arguments.length;
var i__21338__auto___27621 = (0);
while(true){
if((i__21338__auto___27621 < len__21337__auto___27620)){
args__21344__auto__.push((arguments[i__21338__auto___27621]));

var G__27622 = (i__21338__auto___27621 + (1));
i__21338__auto___27621 = G__27622;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27619))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27619){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27619);
});})(g__27478__auto___27619))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27478__auto___27619){
return (function (seq27595){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27595));
});})(g__27478__auto___27619))
;


var g__27478__auto___27623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27478__auto___27623){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27624 = arguments.length;
var i__21338__auto___27625 = (0);
while(true){
if((i__21338__auto___27625 < len__21337__auto___27624)){
args__21344__auto__.push((arguments[i__21338__auto___27625]));

var G__27626 = (i__21338__auto___27625 + (1));
i__21338__auto___27625 = G__27626;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27623))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27623){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27623);
});})(g__27478__auto___27623))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27478__auto___27623){
return (function (seq27596){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27596));
});})(g__27478__auto___27623))
;


var g__27478__auto___27627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27478__auto___27627){
return (function cljs$spec$impl$gen$char(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27628 = arguments.length;
var i__21338__auto___27629 = (0);
while(true){
if((i__21338__auto___27629 < len__21337__auto___27628)){
args__21344__auto__.push((arguments[i__21338__auto___27629]));

var G__27630 = (i__21338__auto___27629 + (1));
i__21338__auto___27629 = G__27630;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27627))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27627){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27627);
});})(g__27478__auto___27627))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27478__auto___27627){
return (function (seq27597){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27597));
});})(g__27478__auto___27627))
;


var g__27478__auto___27631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27478__auto___27631){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27632 = arguments.length;
var i__21338__auto___27633 = (0);
while(true){
if((i__21338__auto___27633 < len__21337__auto___27632)){
args__21344__auto__.push((arguments[i__21338__auto___27633]));

var G__27634 = (i__21338__auto___27633 + (1));
i__21338__auto___27633 = G__27634;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27631))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27631){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27631);
});})(g__27478__auto___27631))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27478__auto___27631){
return (function (seq27598){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27598));
});})(g__27478__auto___27631))
;


var g__27478__auto___27635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27478__auto___27635){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27636 = arguments.length;
var i__21338__auto___27637 = (0);
while(true){
if((i__21338__auto___27637 < len__21337__auto___27636)){
args__21344__auto__.push((arguments[i__21338__auto___27637]));

var G__27638 = (i__21338__auto___27637 + (1));
i__21338__auto___27637 = G__27638;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27635))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27635){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27635);
});})(g__27478__auto___27635))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27478__auto___27635){
return (function (seq27599){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27599));
});})(g__27478__auto___27635))
;


var g__27478__auto___27639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27478__auto___27639){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27640 = arguments.length;
var i__21338__auto___27641 = (0);
while(true){
if((i__21338__auto___27641 < len__21337__auto___27640)){
args__21344__auto__.push((arguments[i__21338__auto___27641]));

var G__27642 = (i__21338__auto___27641 + (1));
i__21338__auto___27641 = G__27642;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27639))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27639){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27639);
});})(g__27478__auto___27639))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27478__auto___27639){
return (function (seq27600){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27600));
});})(g__27478__auto___27639))
;


var g__27478__auto___27643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27478__auto___27643){
return (function cljs$spec$impl$gen$double(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27644 = arguments.length;
var i__21338__auto___27645 = (0);
while(true){
if((i__21338__auto___27645 < len__21337__auto___27644)){
args__21344__auto__.push((arguments[i__21338__auto___27645]));

var G__27646 = (i__21338__auto___27645 + (1));
i__21338__auto___27645 = G__27646;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27643))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27643){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27643);
});})(g__27478__auto___27643))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27478__auto___27643){
return (function (seq27601){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27601));
});})(g__27478__auto___27643))
;


var g__27478__auto___27647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27478__auto___27647){
return (function cljs$spec$impl$gen$int(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27648 = arguments.length;
var i__21338__auto___27649 = (0);
while(true){
if((i__21338__auto___27649 < len__21337__auto___27648)){
args__21344__auto__.push((arguments[i__21338__auto___27649]));

var G__27650 = (i__21338__auto___27649 + (1));
i__21338__auto___27649 = G__27650;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27647))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27647){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27647);
});})(g__27478__auto___27647))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27478__auto___27647){
return (function (seq27602){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27602));
});})(g__27478__auto___27647))
;


var g__27478__auto___27651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27478__auto___27651){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27652 = arguments.length;
var i__21338__auto___27653 = (0);
while(true){
if((i__21338__auto___27653 < len__21337__auto___27652)){
args__21344__auto__.push((arguments[i__21338__auto___27653]));

var G__27654 = (i__21338__auto___27653 + (1));
i__21338__auto___27653 = G__27654;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27651))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27651){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27651);
});})(g__27478__auto___27651))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27478__auto___27651){
return (function (seq27603){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27603));
});})(g__27478__auto___27651))
;


var g__27478__auto___27655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27478__auto___27655){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27656 = arguments.length;
var i__21338__auto___27657 = (0);
while(true){
if((i__21338__auto___27657 < len__21337__auto___27656)){
args__21344__auto__.push((arguments[i__21338__auto___27657]));

var G__27658 = (i__21338__auto___27657 + (1));
i__21338__auto___27657 = G__27658;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27655))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27655){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27655);
});})(g__27478__auto___27655))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27478__auto___27655){
return (function (seq27604){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27604));
});})(g__27478__auto___27655))
;


var g__27478__auto___27659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27478__auto___27659){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27660 = arguments.length;
var i__21338__auto___27661 = (0);
while(true){
if((i__21338__auto___27661 < len__21337__auto___27660)){
args__21344__auto__.push((arguments[i__21338__auto___27661]));

var G__27662 = (i__21338__auto___27661 + (1));
i__21338__auto___27661 = G__27662;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27659))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27659){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27659);
});})(g__27478__auto___27659))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27478__auto___27659){
return (function (seq27605){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27605));
});})(g__27478__auto___27659))
;


var g__27478__auto___27663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27478__auto___27663){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27664 = arguments.length;
var i__21338__auto___27665 = (0);
while(true){
if((i__21338__auto___27665 < len__21337__auto___27664)){
args__21344__auto__.push((arguments[i__21338__auto___27665]));

var G__27666 = (i__21338__auto___27665 + (1));
i__21338__auto___27665 = G__27666;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27663))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27663){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27663);
});})(g__27478__auto___27663))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27478__auto___27663){
return (function (seq27606){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27606));
});})(g__27478__auto___27663))
;


var g__27478__auto___27667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27478__auto___27667){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27668 = arguments.length;
var i__21338__auto___27669 = (0);
while(true){
if((i__21338__auto___27669 < len__21337__auto___27668)){
args__21344__auto__.push((arguments[i__21338__auto___27669]));

var G__27670 = (i__21338__auto___27669 + (1));
i__21338__auto___27669 = G__27670;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27667))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27667){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27667);
});})(g__27478__auto___27667))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27478__auto___27667){
return (function (seq27607){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27607));
});})(g__27478__auto___27667))
;


var g__27478__auto___27671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27478__auto___27671){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27672 = arguments.length;
var i__21338__auto___27673 = (0);
while(true){
if((i__21338__auto___27673 < len__21337__auto___27672)){
args__21344__auto__.push((arguments[i__21338__auto___27673]));

var G__27674 = (i__21338__auto___27673 + (1));
i__21338__auto___27673 = G__27674;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27671))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27671){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27671);
});})(g__27478__auto___27671))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27478__auto___27671){
return (function (seq27608){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27608));
});})(g__27478__auto___27671))
;


var g__27478__auto___27675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27478__auto___27675){
return (function cljs$spec$impl$gen$string(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27676 = arguments.length;
var i__21338__auto___27677 = (0);
while(true){
if((i__21338__auto___27677 < len__21337__auto___27676)){
args__21344__auto__.push((arguments[i__21338__auto___27677]));

var G__27678 = (i__21338__auto___27677 + (1));
i__21338__auto___27677 = G__27678;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27675))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27675){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27675);
});})(g__27478__auto___27675))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27478__auto___27675){
return (function (seq27609){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27609));
});})(g__27478__auto___27675))
;


var g__27478__auto___27679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27478__auto___27679){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27680 = arguments.length;
var i__21338__auto___27681 = (0);
while(true){
if((i__21338__auto___27681 < len__21337__auto___27680)){
args__21344__auto__.push((arguments[i__21338__auto___27681]));

var G__27682 = (i__21338__auto___27681 + (1));
i__21338__auto___27681 = G__27682;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27679))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27679){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27679);
});})(g__27478__auto___27679))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27478__auto___27679){
return (function (seq27610){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27610));
});})(g__27478__auto___27679))
;


var g__27478__auto___27683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27478__auto___27683){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27684 = arguments.length;
var i__21338__auto___27685 = (0);
while(true){
if((i__21338__auto___27685 < len__21337__auto___27684)){
args__21344__auto__.push((arguments[i__21338__auto___27685]));

var G__27686 = (i__21338__auto___27685 + (1));
i__21338__auto___27685 = G__27686;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27683))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27683){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27683);
});})(g__27478__auto___27683))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27478__auto___27683){
return (function (seq27611){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27611));
});})(g__27478__auto___27683))
;


var g__27478__auto___27687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27478__auto___27687){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27688 = arguments.length;
var i__21338__auto___27689 = (0);
while(true){
if((i__21338__auto___27689 < len__21337__auto___27688)){
args__21344__auto__.push((arguments[i__21338__auto___27689]));

var G__27690 = (i__21338__auto___27689 + (1));
i__21338__auto___27689 = G__27690;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27687))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27687){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27687);
});})(g__27478__auto___27687))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27478__auto___27687){
return (function (seq27612){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27612));
});})(g__27478__auto___27687))
;


var g__27478__auto___27691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27478__auto___27691){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27692 = arguments.length;
var i__21338__auto___27693 = (0);
while(true){
if((i__21338__auto___27693 < len__21337__auto___27692)){
args__21344__auto__.push((arguments[i__21338__auto___27693]));

var G__27694 = (i__21338__auto___27693 + (1));
i__21338__auto___27693 = G__27694;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27691))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27691){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27691);
});})(g__27478__auto___27691))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27478__auto___27691){
return (function (seq27613){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27613));
});})(g__27478__auto___27691))
;


var g__27478__auto___27695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27478__auto___27695){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27696 = arguments.length;
var i__21338__auto___27697 = (0);
while(true){
if((i__21338__auto___27697 < len__21337__auto___27696)){
args__21344__auto__.push((arguments[i__21338__auto___27697]));

var G__27698 = (i__21338__auto___27697 + (1));
i__21338__auto___27697 = G__27698;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});})(g__27478__auto___27695))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27478__auto___27695){
return (function (args){
return cljs.core.deref.call(null,g__27478__auto___27695);
});})(g__27478__auto___27695))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27478__auto___27695){
return (function (seq27614){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27614));
});})(g__27478__auto___27695))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21344__auto__ = [];
var len__21337__auto___27701 = arguments.length;
var i__21338__auto___27702 = (0);
while(true){
if((i__21338__auto___27702 < len__21337__auto___27701)){
args__21344__auto__.push((arguments[i__21338__auto___27702]));

var G__27703 = (i__21338__auto___27702 + (1));
i__21338__auto___27702 = G__27703;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__27699_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27699_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq27700){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27700));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__27704_SHARP_){
return (new Date(p1__27704_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1528667386146