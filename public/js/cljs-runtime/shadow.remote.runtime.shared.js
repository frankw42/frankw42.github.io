goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17983){
var map__17984 = p__17983;
var map__17984__$1 = cljs.core.__destructure_map(map__17984);
var runtime = map__17984__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18070 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18070)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17985 = runtime;
var G__17986 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18070);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17985,G__17986) : shadow.remote.runtime.shared.process.call(null,G__17985,G__17986));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17987,res){
var map__17988 = p__17987;
var map__17988__$1 = cljs.core.__destructure_map(map__17988);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17988__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17988__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17989 = res;
var G__17989__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17989,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17989);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17989__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17989__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17991 = arguments.length;
switch (G__17991) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17992,msg,handlers,timeout_after_ms){
var map__17993 = p__17992;
var map__17993__$1 = cljs.core.__destructure_map(map__17993);
var runtime = map__17993__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___18093 = arguments.length;
var i__5750__auto___18094 = (0);
while(true){
if((i__5750__auto___18094 < len__5749__auto___18093)){
args__5755__auto__.push((arguments[i__5750__auto___18094]));

var G__18095 = (i__5750__auto___18094 + (1));
i__5750__auto___18094 = G__18095;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17997,ev,args){
var map__17998 = p__17997;
var map__17998__$1 = cljs.core.__destructure_map(map__17998);
var runtime = map__17998__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17998__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17999 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18002 = null;
var count__18003 = (0);
var i__18004 = (0);
while(true){
if((i__18004 < count__18003)){
var ext = chunk__18002.cljs$core$IIndexed$_nth$arity$2(null,i__18004);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18096 = seq__17999;
var G__18097 = chunk__18002;
var G__18098 = count__18003;
var G__18099 = (i__18004 + (1));
seq__17999 = G__18096;
chunk__18002 = G__18097;
count__18003 = G__18098;
i__18004 = G__18099;
continue;
} else {
var G__18100 = seq__17999;
var G__18101 = chunk__18002;
var G__18102 = count__18003;
var G__18103 = (i__18004 + (1));
seq__17999 = G__18100;
chunk__18002 = G__18101;
count__18003 = G__18102;
i__18004 = G__18103;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17999);
if(temp__5823__auto__){
var seq__17999__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17999__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__17999__$1);
var G__18104 = cljs.core.chunk_rest(seq__17999__$1);
var G__18105 = c__5548__auto__;
var G__18106 = cljs.core.count(c__5548__auto__);
var G__18107 = (0);
seq__17999 = G__18104;
chunk__18002 = G__18105;
count__18003 = G__18106;
i__18004 = G__18107;
continue;
} else {
var ext = cljs.core.first(seq__17999__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18113 = cljs.core.next(seq__17999__$1);
var G__18114 = null;
var G__18115 = (0);
var G__18116 = (0);
seq__17999 = G__18113;
chunk__18002 = G__18114;
count__18003 = G__18115;
i__18004 = G__18116;
continue;
} else {
var G__18121 = cljs.core.next(seq__17999__$1);
var G__18122 = null;
var G__18123 = (0);
var G__18124 = (0);
seq__17999 = G__18121;
chunk__18002 = G__18122;
count__18003 = G__18123;
i__18004 = G__18124;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17994){
var G__17995 = cljs.core.first(seq17994);
var seq17994__$1 = cljs.core.next(seq17994);
var G__17996 = cljs.core.first(seq17994__$1);
var seq17994__$2 = cljs.core.next(seq17994__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17995,G__17996,seq17994__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18007,p__18008){
var map__18009 = p__18007;
var map__18009__$1 = cljs.core.__destructure_map(map__18009);
var runtime = map__18009__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18009__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18010 = p__18008;
var map__18010__$1 = cljs.core.__destructure_map(map__18010);
var msg = map__18010__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18010__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18011 = cljs.core.deref(state_ref);
var map__18011__$1 = cljs.core.__destructure_map(map__18011);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18011__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18011__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18013,msg){
var map__18014 = p__18013;
var map__18014__$1 = cljs.core.__destructure_map(map__18014);
var runtime = map__18014__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18014__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18015,key,p__18016){
var map__18017 = p__18015;
var map__18017__$1 = cljs.core.__destructure_map(map__18017);
var state = map__18017__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18017__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18018 = p__18016;
var map__18018__$1 = cljs.core.__destructure_map(map__18018);
var spec = map__18018__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18018__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18018__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18019,key,spec){
var map__18020 = p__18019;
var map__18020__$1 = cljs.core.__destructure_map(map__18020);
var runtime = map__18020__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18020__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___18158 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___18158 == null)){
} else {
var on_welcome_18159 = temp__5827__auto___18158;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18159.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18159.cljs$core$IFn$_invoke$arity$0() : on_welcome_18159.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18021_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18021_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18022_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18022_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18023_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18023_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18024_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18024_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18025_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18025_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18026,key){
var map__18027 = p__18026;
var map__18027__$1 = cljs.core.__destructure_map(map__18027);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18027__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18051,msg){
var map__18052 = p__18051;
var map__18052__$1 = cljs.core.__destructure_map(map__18052);
var runtime = map__18052__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18053,p__18054){
var map__18055 = p__18053;
var map__18055__$1 = cljs.core.__destructure_map(map__18055);
var runtime = map__18055__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18055__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18056 = p__18054;
var map__18056__$1 = cljs.core.__destructure_map(map__18056);
var msg = map__18056__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18056__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18056__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18057 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18059 = null;
var count__18060 = (0);
var i__18061 = (0);
while(true){
if((i__18061 < count__18060)){
var map__18065 = chunk__18059.cljs$core$IIndexed$_nth$arity$2(null,i__18061);
var map__18065__$1 = cljs.core.__destructure_map(map__18065);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18065__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18160 = seq__18057;
var G__18161 = chunk__18059;
var G__18162 = count__18060;
var G__18163 = (i__18061 + (1));
seq__18057 = G__18160;
chunk__18059 = G__18161;
count__18060 = G__18162;
i__18061 = G__18163;
continue;
} else {
var G__18164 = seq__18057;
var G__18165 = chunk__18059;
var G__18166 = count__18060;
var G__18167 = (i__18061 + (1));
seq__18057 = G__18164;
chunk__18059 = G__18165;
count__18060 = G__18166;
i__18061 = G__18167;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18057);
if(temp__5823__auto__){
var seq__18057__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18057__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18057__$1);
var G__18168 = cljs.core.chunk_rest(seq__18057__$1);
var G__18169 = c__5548__auto__;
var G__18170 = cljs.core.count(c__5548__auto__);
var G__18171 = (0);
seq__18057 = G__18168;
chunk__18059 = G__18169;
count__18060 = G__18170;
i__18061 = G__18171;
continue;
} else {
var map__18066 = cljs.core.first(seq__18057__$1);
var map__18066__$1 = cljs.core.__destructure_map(map__18066);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18066__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18172 = cljs.core.next(seq__18057__$1);
var G__18173 = null;
var G__18174 = (0);
var G__18175 = (0);
seq__18057 = G__18172;
chunk__18059 = G__18173;
count__18060 = G__18174;
i__18061 = G__18175;
continue;
} else {
var G__18176 = cljs.core.next(seq__18057__$1);
var G__18177 = null;
var G__18178 = (0);
var G__18179 = (0);
seq__18057 = G__18176;
chunk__18059 = G__18177;
count__18060 = G__18178;
i__18061 = G__18179;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
