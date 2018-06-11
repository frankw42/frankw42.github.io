// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30919 = [];
var len__21337__auto___30922 = arguments.length;
var i__21338__auto___30923 = (0);
while(true){
if((i__21338__auto___30923 < len__21337__auto___30922)){
args30919.push((arguments[i__21338__auto___30923]));

var G__30924 = (i__21338__auto___30923 + (1));
i__21338__auto___30923 = G__30924;
continue;
} else {
}
break;
}

var G__30921 = args30919.length;
switch (G__30921) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30919.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21344__auto__ = [];
var len__21337__auto___30927 = arguments.length;
var i__21338__auto___30928 = (0);
while(true){
if((i__21338__auto___30928 < len__21337__auto___30927)){
args__21344__auto__.push((arguments[i__21338__auto___30928]));

var G__30929 = (i__21338__auto___30928 + (1));
i__21338__auto___30928 = G__30929;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30926){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30926));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21344__auto__ = [];
var len__21337__auto___30931 = arguments.length;
var i__21338__auto___30932 = (0);
while(true){
if((i__21338__auto___30932 < len__21337__auto___30931)){
args__21344__auto__.push((arguments[i__21338__auto___30932]));

var G__30933 = (i__21338__auto___30932 + (1));
i__21338__auto___30932 = G__30933;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30930){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30930));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30934 = cljs.core._EQ_;
var expr__30935 = (function (){var or__20229__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30938){if((e30938 instanceof Error)){
var e = e30938;
return false;
} else {
throw e30938;

}
}})();
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30934.call(null,"true",expr__30935))){
return true;
} else {
if(cljs.core.truth_(pred__30934.call(null,"false",expr__30935))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30935)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30940){if((e30940 instanceof Error)){
var e = e30940;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30940;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30941){
var map__30944 = p__30941;
var map__30944__$1 = ((((!((map__30944 == null)))?((((map__30944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30944):map__30944);
var message = cljs.core.get.call(null,map__30944__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30944__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20229__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20217__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20217__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20217__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22507__auto___31106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___31106,ch){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___31106,ch){
return (function (state_31075){
var state_val_31076 = (state_31075[(1)]);
if((state_val_31076 === (7))){
var inst_31071 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31077_31107 = state_31075__$1;
(statearr_31077_31107[(2)] = inst_31071);

(statearr_31077_31107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (1))){
var state_31075__$1 = state_31075;
var statearr_31078_31108 = state_31075__$1;
(statearr_31078_31108[(2)] = null);

(statearr_31078_31108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (4))){
var inst_31028 = (state_31075[(7)]);
var inst_31028__$1 = (state_31075[(2)]);
var state_31075__$1 = (function (){var statearr_31079 = state_31075;
(statearr_31079[(7)] = inst_31028__$1);

return statearr_31079;
})();
if(cljs.core.truth_(inst_31028__$1)){
var statearr_31080_31109 = state_31075__$1;
(statearr_31080_31109[(1)] = (5));

} else {
var statearr_31081_31110 = state_31075__$1;
(statearr_31081_31110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (15))){
var inst_31035 = (state_31075[(8)]);
var inst_31050 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31035);
var inst_31051 = cljs.core.first.call(null,inst_31050);
var inst_31052 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31051);
var inst_31053 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31052)].join('');
var inst_31054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31053);
var state_31075__$1 = state_31075;
var statearr_31082_31111 = state_31075__$1;
(statearr_31082_31111[(2)] = inst_31054);

(statearr_31082_31111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (13))){
var inst_31059 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31083_31112 = state_31075__$1;
(statearr_31083_31112[(2)] = inst_31059);

(statearr_31083_31112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (6))){
var state_31075__$1 = state_31075;
var statearr_31084_31113 = state_31075__$1;
(statearr_31084_31113[(2)] = null);

(statearr_31084_31113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (17))){
var inst_31057 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31085_31114 = state_31075__$1;
(statearr_31085_31114[(2)] = inst_31057);

(statearr_31085_31114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (3))){
var inst_31073 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31075__$1,inst_31073);
} else {
if((state_val_31076 === (12))){
var inst_31034 = (state_31075[(9)]);
var inst_31048 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31034,opts);
var state_31075__$1 = state_31075;
if(cljs.core.truth_(inst_31048)){
var statearr_31086_31115 = state_31075__$1;
(statearr_31086_31115[(1)] = (15));

} else {
var statearr_31087_31116 = state_31075__$1;
(statearr_31087_31116[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (2))){
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31075__$1,(4),ch);
} else {
if((state_val_31076 === (11))){
var inst_31035 = (state_31075[(8)]);
var inst_31040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31041 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31035);
var inst_31042 = cljs.core.async.timeout.call(null,(1000));
var inst_31043 = [inst_31041,inst_31042];
var inst_31044 = (new cljs.core.PersistentVector(null,2,(5),inst_31040,inst_31043,null));
var state_31075__$1 = state_31075;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31075__$1,(14),inst_31044);
} else {
if((state_val_31076 === (9))){
var inst_31035 = (state_31075[(8)]);
var inst_31061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31062 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31035);
var inst_31063 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31062);
var inst_31064 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31063)].join('');
var inst_31065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31064);
var state_31075__$1 = (function (){var statearr_31088 = state_31075;
(statearr_31088[(10)] = inst_31061);

return statearr_31088;
})();
var statearr_31089_31117 = state_31075__$1;
(statearr_31089_31117[(2)] = inst_31065);

(statearr_31089_31117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (5))){
var inst_31028 = (state_31075[(7)]);
var inst_31030 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31031 = (new cljs.core.PersistentArrayMap(null,2,inst_31030,null));
var inst_31032 = (new cljs.core.PersistentHashSet(null,inst_31031,null));
var inst_31033 = figwheel.client.focus_msgs.call(null,inst_31032,inst_31028);
var inst_31034 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31033);
var inst_31035 = cljs.core.first.call(null,inst_31033);
var inst_31036 = figwheel.client.autoload_QMARK_.call(null);
var state_31075__$1 = (function (){var statearr_31090 = state_31075;
(statearr_31090[(9)] = inst_31034);

(statearr_31090[(8)] = inst_31035);

return statearr_31090;
})();
if(cljs.core.truth_(inst_31036)){
var statearr_31091_31118 = state_31075__$1;
(statearr_31091_31118[(1)] = (8));

} else {
var statearr_31092_31119 = state_31075__$1;
(statearr_31092_31119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (14))){
var inst_31046 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31093_31120 = state_31075__$1;
(statearr_31093_31120[(2)] = inst_31046);

(statearr_31093_31120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (16))){
var state_31075__$1 = state_31075;
var statearr_31094_31121 = state_31075__$1;
(statearr_31094_31121[(2)] = null);

(statearr_31094_31121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (10))){
var inst_31067 = (state_31075[(2)]);
var state_31075__$1 = (function (){var statearr_31095 = state_31075;
(statearr_31095[(11)] = inst_31067);

return statearr_31095;
})();
var statearr_31096_31122 = state_31075__$1;
(statearr_31096_31122[(2)] = null);

(statearr_31096_31122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (8))){
var inst_31034 = (state_31075[(9)]);
var inst_31038 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31034,opts);
var state_31075__$1 = state_31075;
if(cljs.core.truth_(inst_31038)){
var statearr_31097_31123 = state_31075__$1;
(statearr_31097_31123[(1)] = (11));

} else {
var statearr_31098_31124 = state_31075__$1;
(statearr_31098_31124[(1)] = (12));

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
});})(c__22507__auto___31106,ch))
;
return ((function (switch__22395__auto__,c__22507__auto___31106,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____0 = (function (){
var statearr_31102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31102[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__);

(statearr_31102[(1)] = (1));

return statearr_31102;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____1 = (function (state_31075){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31103){if((e31103 instanceof Object)){
var ex__22399__auto__ = e31103;
var statearr_31104_31125 = state_31075;
(statearr_31104_31125[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31126 = state_31075;
state_31075 = G__31126;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__ = function(state_31075){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____1.call(this,state_31075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___31106,ch))
})();
var state__22509__auto__ = (function (){var statearr_31105 = f__22508__auto__.call(null);
(statearr_31105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___31106);

return statearr_31105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___31106,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31127_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31127_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31130 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31130){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31129){if((e31129 instanceof Error)){
var e = e31129;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31130], null));
} else {
var e = e31129;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31130))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31131){
var map__31140 = p__31131;
var map__31140__$1 = ((((!((map__31140 == null)))?((((map__31140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31140):map__31140);
var opts = map__31140__$1;
var build_id = cljs.core.get.call(null,map__31140__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31140,map__31140__$1,opts,build_id){
return (function (p__31142){
var vec__31143 = p__31142;
var seq__31144 = cljs.core.seq.call(null,vec__31143);
var first__31145 = cljs.core.first.call(null,seq__31144);
var seq__31144__$1 = cljs.core.next.call(null,seq__31144);
var map__31146 = first__31145;
var map__31146__$1 = ((((!((map__31146 == null)))?((((map__31146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31146):map__31146);
var msg = map__31146__$1;
var msg_name = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31144__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31143,seq__31144,first__31145,seq__31144__$1,map__31146,map__31146__$1,msg,msg_name,_,map__31140,map__31140__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31143,seq__31144,first__31145,seq__31144__$1,map__31146,map__31146__$1,msg,msg_name,_,map__31140,map__31140__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31140,map__31140__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31154){
var vec__31155 = p__31154;
var seq__31156 = cljs.core.seq.call(null,vec__31155);
var first__31157 = cljs.core.first.call(null,seq__31156);
var seq__31156__$1 = cljs.core.next.call(null,seq__31156);
var map__31158 = first__31157;
var map__31158__$1 = ((((!((map__31158 == null)))?((((map__31158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31158):map__31158);
var msg = map__31158__$1;
var msg_name = cljs.core.get.call(null,map__31158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31156__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31160){
var map__31172 = p__31160;
var map__31172__$1 = ((((!((map__31172 == null)))?((((map__31172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31172):map__31172);
var on_compile_warning = cljs.core.get.call(null,map__31172__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31172__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31172,map__31172__$1,on_compile_warning,on_compile_fail){
return (function (p__31174){
var vec__31175 = p__31174;
var seq__31176 = cljs.core.seq.call(null,vec__31175);
var first__31177 = cljs.core.first.call(null,seq__31176);
var seq__31176__$1 = cljs.core.next.call(null,seq__31176);
var map__31178 = first__31177;
var map__31178__$1 = ((((!((map__31178 == null)))?((((map__31178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31178):map__31178);
var msg = map__31178__$1;
var msg_name = cljs.core.get.call(null,map__31178__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31176__$1;
var pred__31180 = cljs.core._EQ_;
var expr__31181 = msg_name;
if(cljs.core.truth_(pred__31180.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31181))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31180.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31181))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31172,map__31172__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__,msg_hist,msg_names,msg){
return (function (state_31389){
var state_val_31390 = (state_31389[(1)]);
if((state_val_31390 === (7))){
var inst_31317 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31317)){
var statearr_31391_31437 = state_31389__$1;
(statearr_31391_31437[(1)] = (8));

} else {
var statearr_31392_31438 = state_31389__$1;
(statearr_31392_31438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (20))){
var inst_31383 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31393_31439 = state_31389__$1;
(statearr_31393_31439[(2)] = inst_31383);

(statearr_31393_31439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (27))){
var inst_31379 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31394_31440 = state_31389__$1;
(statearr_31394_31440[(2)] = inst_31379);

(statearr_31394_31440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (1))){
var inst_31310 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31310)){
var statearr_31395_31441 = state_31389__$1;
(statearr_31395_31441[(1)] = (2));

} else {
var statearr_31396_31442 = state_31389__$1;
(statearr_31396_31442[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (24))){
var inst_31381 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31397_31443 = state_31389__$1;
(statearr_31397_31443[(2)] = inst_31381);

(statearr_31397_31443[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (4))){
var inst_31387 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31389__$1,inst_31387);
} else {
if((state_val_31390 === (15))){
var inst_31385 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31398_31444 = state_31389__$1;
(statearr_31398_31444[(2)] = inst_31385);

(statearr_31398_31444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (21))){
var inst_31344 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31399_31445 = state_31389__$1;
(statearr_31399_31445[(2)] = inst_31344);

(statearr_31399_31445[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (31))){
var inst_31368 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31368)){
var statearr_31400_31446 = state_31389__$1;
(statearr_31400_31446[(1)] = (34));

} else {
var statearr_31401_31447 = state_31389__$1;
(statearr_31401_31447[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (32))){
var inst_31377 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31402_31448 = state_31389__$1;
(statearr_31402_31448[(2)] = inst_31377);

(statearr_31402_31448[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (33))){
var inst_31366 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31403_31449 = state_31389__$1;
(statearr_31403_31449[(2)] = inst_31366);

(statearr_31403_31449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (13))){
var inst_31331 = figwheel.client.heads_up.clear.call(null);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(16),inst_31331);
} else {
if((state_val_31390 === (22))){
var inst_31348 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31349 = figwheel.client.heads_up.append_warning_message.call(null,inst_31348);
var state_31389__$1 = state_31389;
var statearr_31404_31450 = state_31389__$1;
(statearr_31404_31450[(2)] = inst_31349);

(statearr_31404_31450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (36))){
var inst_31375 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31405_31451 = state_31389__$1;
(statearr_31405_31451[(2)] = inst_31375);

(statearr_31405_31451[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (29))){
var inst_31359 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31406_31452 = state_31389__$1;
(statearr_31406_31452[(2)] = inst_31359);

(statearr_31406_31452[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (6))){
var inst_31312 = (state_31389[(7)]);
var state_31389__$1 = state_31389;
var statearr_31407_31453 = state_31389__$1;
(statearr_31407_31453[(2)] = inst_31312);

(statearr_31407_31453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (28))){
var inst_31355 = (state_31389[(2)]);
var inst_31356 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31357 = figwheel.client.heads_up.display_warning.call(null,inst_31356);
var state_31389__$1 = (function (){var statearr_31408 = state_31389;
(statearr_31408[(8)] = inst_31355);

return statearr_31408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(29),inst_31357);
} else {
if((state_val_31390 === (25))){
var inst_31353 = figwheel.client.heads_up.clear.call(null);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(28),inst_31353);
} else {
if((state_val_31390 === (34))){
var inst_31370 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(37),inst_31370);
} else {
if((state_val_31390 === (17))){
var inst_31337 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31409_31454 = state_31389__$1;
(statearr_31409_31454[(2)] = inst_31337);

(statearr_31409_31454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (3))){
var inst_31329 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31329)){
var statearr_31410_31455 = state_31389__$1;
(statearr_31410_31455[(1)] = (13));

} else {
var statearr_31411_31456 = state_31389__$1;
(statearr_31411_31456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (12))){
var inst_31325 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31412_31457 = state_31389__$1;
(statearr_31412_31457[(2)] = inst_31325);

(statearr_31412_31457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (2))){
var inst_31312 = (state_31389[(7)]);
var inst_31312__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31389__$1 = (function (){var statearr_31413 = state_31389;
(statearr_31413[(7)] = inst_31312__$1);

return statearr_31413;
})();
if(cljs.core.truth_(inst_31312__$1)){
var statearr_31414_31458 = state_31389__$1;
(statearr_31414_31458[(1)] = (5));

} else {
var statearr_31415_31459 = state_31389__$1;
(statearr_31415_31459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (23))){
var inst_31351 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31351)){
var statearr_31416_31460 = state_31389__$1;
(statearr_31416_31460[(1)] = (25));

} else {
var statearr_31417_31461 = state_31389__$1;
(statearr_31417_31461[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (35))){
var state_31389__$1 = state_31389;
var statearr_31418_31462 = state_31389__$1;
(statearr_31418_31462[(2)] = null);

(statearr_31418_31462[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (19))){
var inst_31346 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31346)){
var statearr_31419_31463 = state_31389__$1;
(statearr_31419_31463[(1)] = (22));

} else {
var statearr_31420_31464 = state_31389__$1;
(statearr_31420_31464[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (11))){
var inst_31321 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31421_31465 = state_31389__$1;
(statearr_31421_31465[(2)] = inst_31321);

(statearr_31421_31465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (9))){
var inst_31323 = figwheel.client.heads_up.clear.call(null);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(12),inst_31323);
} else {
if((state_val_31390 === (5))){
var inst_31314 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31389__$1 = state_31389;
var statearr_31422_31466 = state_31389__$1;
(statearr_31422_31466[(2)] = inst_31314);

(statearr_31422_31466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (14))){
var inst_31339 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31339)){
var statearr_31423_31467 = state_31389__$1;
(statearr_31423_31467[(1)] = (18));

} else {
var statearr_31424_31468 = state_31389__$1;
(statearr_31424_31468[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (26))){
var inst_31361 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31361)){
var statearr_31425_31469 = state_31389__$1;
(statearr_31425_31469[(1)] = (30));

} else {
var statearr_31426_31470 = state_31389__$1;
(statearr_31426_31470[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (16))){
var inst_31333 = (state_31389[(2)]);
var inst_31334 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31335 = figwheel.client.heads_up.display_exception.call(null,inst_31334);
var state_31389__$1 = (function (){var statearr_31427 = state_31389;
(statearr_31427[(9)] = inst_31333);

return statearr_31427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(17),inst_31335);
} else {
if((state_val_31390 === (30))){
var inst_31363 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31364 = figwheel.client.heads_up.display_warning.call(null,inst_31363);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(33),inst_31364);
} else {
if((state_val_31390 === (10))){
var inst_31327 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31428_31471 = state_31389__$1;
(statearr_31428_31471[(2)] = inst_31327);

(statearr_31428_31471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (18))){
var inst_31341 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31342 = figwheel.client.heads_up.display_exception.call(null,inst_31341);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(21),inst_31342);
} else {
if((state_val_31390 === (37))){
var inst_31372 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31429_31472 = state_31389__$1;
(statearr_31429_31472[(2)] = inst_31372);

(statearr_31429_31472[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (8))){
var inst_31319 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(11),inst_31319);
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
});})(c__22507__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22395__auto__,c__22507__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____0 = (function (){
var statearr_31433 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31433[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__);

(statearr_31433[(1)] = (1));

return statearr_31433;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____1 = (function (state_31389){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31434){if((e31434 instanceof Object)){
var ex__22399__auto__ = e31434;
var statearr_31435_31473 = state_31389;
(statearr_31435_31473[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31474 = state_31389;
state_31389 = G__31474;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__ = function(state_31389){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____1.call(this,state_31389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__,msg_hist,msg_names,msg))
})();
var state__22509__auto__ = (function (){var statearr_31436 = f__22508__auto__.call(null);
(statearr_31436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__,msg_hist,msg_names,msg))
);

return c__22507__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22507__auto___31537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___31537,ch){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___31537,ch){
return (function (state_31520){
var state_val_31521 = (state_31520[(1)]);
if((state_val_31521 === (1))){
var state_31520__$1 = state_31520;
var statearr_31522_31538 = state_31520__$1;
(statearr_31522_31538[(2)] = null);

(statearr_31522_31538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (2))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31520__$1,(4),ch);
} else {
if((state_val_31521 === (3))){
var inst_31518 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31520__$1,inst_31518);
} else {
if((state_val_31521 === (4))){
var inst_31508 = (state_31520[(7)]);
var inst_31508__$1 = (state_31520[(2)]);
var state_31520__$1 = (function (){var statearr_31523 = state_31520;
(statearr_31523[(7)] = inst_31508__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31508__$1)){
var statearr_31524_31539 = state_31520__$1;
(statearr_31524_31539[(1)] = (5));

} else {
var statearr_31525_31540 = state_31520__$1;
(statearr_31525_31540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (5))){
var inst_31508 = (state_31520[(7)]);
var inst_31510 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31508);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31520__$1,(8),inst_31510);
} else {
if((state_val_31521 === (6))){
var state_31520__$1 = state_31520;
var statearr_31526_31541 = state_31520__$1;
(statearr_31526_31541[(2)] = null);

(statearr_31526_31541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (7))){
var inst_31516 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31527_31542 = state_31520__$1;
(statearr_31527_31542[(2)] = inst_31516);

(statearr_31527_31542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (8))){
var inst_31512 = (state_31520[(2)]);
var state_31520__$1 = (function (){var statearr_31528 = state_31520;
(statearr_31528[(8)] = inst_31512);

return statearr_31528;
})();
var statearr_31529_31543 = state_31520__$1;
(statearr_31529_31543[(2)] = null);

(statearr_31529_31543[(1)] = (2));


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
});})(c__22507__auto___31537,ch))
;
return ((function (switch__22395__auto__,c__22507__auto___31537,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22396__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22396__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22396__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var figwheel$client$heads_up_plugin_$_state_machine__22396__auto____1 = (function (state_31520){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31534){if((e31534 instanceof Object)){
var ex__22399__auto__ = e31534;
var statearr_31535_31544 = state_31520;
(statearr_31535_31544[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31545 = state_31520;
state_31520 = G__31545;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22396__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22396__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22396__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22396__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___31537,ch))
})();
var state__22509__auto__ = (function (){var statearr_31536 = f__22508__auto__.call(null);
(statearr_31536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___31537);

return statearr_31536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___31537,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__){
return (function (state_31566){
var state_val_31567 = (state_31566[(1)]);
if((state_val_31567 === (1))){
var inst_31561 = cljs.core.async.timeout.call(null,(3000));
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31566__$1,(2),inst_31561);
} else {
if((state_val_31567 === (2))){
var inst_31563 = (state_31566[(2)]);
var inst_31564 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31566__$1 = (function (){var statearr_31568 = state_31566;
(statearr_31568[(7)] = inst_31563);

return statearr_31568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31566__$1,inst_31564);
} else {
return null;
}
}
});})(c__22507__auto__))
;
return ((function (switch__22395__auto__,c__22507__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____0 = (function (){
var statearr_31572 = [null,null,null,null,null,null,null,null];
(statearr_31572[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__);

(statearr_31572[(1)] = (1));

return statearr_31572;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____1 = (function (state_31566){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31573){if((e31573 instanceof Object)){
var ex__22399__auto__ = e31573;
var statearr_31574_31576 = state_31566;
(statearr_31574_31576[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31577 = state_31566;
state_31566 = G__31577;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__ = function(state_31566){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____1.call(this,state_31566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__))
})();
var state__22509__auto__ = (function (){var statearr_31575 = f__22508__auto__.call(null);
(statearr_31575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_31575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__))
);

return c__22507__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31600){
var state_val_31601 = (state_31600[(1)]);
if((state_val_31601 === (1))){
var inst_31594 = cljs.core.async.timeout.call(null,(2000));
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,(2),inst_31594);
} else {
if((state_val_31601 === (2))){
var inst_31596 = (state_31600[(2)]);
var inst_31597 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31598 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31597);
var state_31600__$1 = (function (){var statearr_31602 = state_31600;
(statearr_31602[(7)] = inst_31596);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31600__$1,inst_31598);
} else {
return null;
}
}
});})(c__22507__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22395__auto__,c__22507__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____0 = (function (){
var statearr_31606 = [null,null,null,null,null,null,null,null];
(statearr_31606[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__);

(statearr_31606[(1)] = (1));

return statearr_31606;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____1 = (function (state_31600){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31607){if((e31607 instanceof Object)){
var ex__22399__auto__ = e31607;
var statearr_31608_31610 = state_31600;
(statearr_31608_31610[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31611 = state_31600;
state_31600 = G__31611;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__ = function(state_31600){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____1.call(this,state_31600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22509__auto__ = (function (){var statearr_31609 = f__22508__auto__.call(null);
(statearr_31609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_31609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__,figwheel_version,temp__4657__auto__))
);

return c__22507__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31612){
var map__31616 = p__31612;
var map__31616__$1 = ((((!((map__31616 == null)))?((((map__31616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31616):map__31616);
var file = cljs.core.get.call(null,map__31616__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31616__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31616__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31618 = "";
var G__31618__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31618),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31618);
var G__31618__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31618__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31618__$1);
if(cljs.core.truth_((function (){var and__20217__auto__ = line;
if(cljs.core.truth_(and__20217__auto__)){
return column;
} else {
return and__20217__auto__;
}
})())){
return [cljs.core.str(G__31618__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31618__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31619){
var map__31626 = p__31619;
var map__31626__$1 = ((((!((map__31626 == null)))?((((map__31626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);
var ed = map__31626__$1;
var formatted_exception = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31628_31632 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31629_31633 = null;
var count__31630_31634 = (0);
var i__31631_31635 = (0);
while(true){
if((i__31631_31635 < count__31630_31634)){
var msg_31636 = cljs.core._nth.call(null,chunk__31629_31633,i__31631_31635);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31636);

var G__31637 = seq__31628_31632;
var G__31638 = chunk__31629_31633;
var G__31639 = count__31630_31634;
var G__31640 = (i__31631_31635 + (1));
seq__31628_31632 = G__31637;
chunk__31629_31633 = G__31638;
count__31630_31634 = G__31639;
i__31631_31635 = G__31640;
continue;
} else {
var temp__4657__auto___31641 = cljs.core.seq.call(null,seq__31628_31632);
if(temp__4657__auto___31641){
var seq__31628_31642__$1 = temp__4657__auto___31641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31628_31642__$1)){
var c__21043__auto___31643 = cljs.core.chunk_first.call(null,seq__31628_31642__$1);
var G__31644 = cljs.core.chunk_rest.call(null,seq__31628_31642__$1);
var G__31645 = c__21043__auto___31643;
var G__31646 = cljs.core.count.call(null,c__21043__auto___31643);
var G__31647 = (0);
seq__31628_31632 = G__31644;
chunk__31629_31633 = G__31645;
count__31630_31634 = G__31646;
i__31631_31635 = G__31647;
continue;
} else {
var msg_31648 = cljs.core.first.call(null,seq__31628_31642__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31648);

var G__31649 = cljs.core.next.call(null,seq__31628_31642__$1);
var G__31650 = null;
var G__31651 = (0);
var G__31652 = (0);
seq__31628_31632 = G__31649;
chunk__31629_31633 = G__31650;
count__31630_31634 = G__31651;
i__31631_31635 = G__31652;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31653){
var map__31656 = p__31653;
var map__31656__$1 = ((((!((map__31656 == null)))?((((map__31656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31656):map__31656);
var w = map__31656__$1;
var message = cljs.core.get.call(null,map__31656__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20217__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20217__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20217__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31668 = cljs.core.seq.call(null,plugins);
var chunk__31669 = null;
var count__31670 = (0);
var i__31671 = (0);
while(true){
if((i__31671 < count__31670)){
var vec__31672 = cljs.core._nth.call(null,chunk__31669,i__31671);
var k = cljs.core.nth.call(null,vec__31672,(0),null);
var plugin = cljs.core.nth.call(null,vec__31672,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31678 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31668,chunk__31669,count__31670,i__31671,pl_31678,vec__31672,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31678.call(null,msg_hist);
});})(seq__31668,chunk__31669,count__31670,i__31671,pl_31678,vec__31672,k,plugin))
);
} else {
}

var G__31679 = seq__31668;
var G__31680 = chunk__31669;
var G__31681 = count__31670;
var G__31682 = (i__31671 + (1));
seq__31668 = G__31679;
chunk__31669 = G__31680;
count__31670 = G__31681;
i__31671 = G__31682;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31668);
if(temp__4657__auto__){
var seq__31668__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31668__$1)){
var c__21043__auto__ = cljs.core.chunk_first.call(null,seq__31668__$1);
var G__31683 = cljs.core.chunk_rest.call(null,seq__31668__$1);
var G__31684 = c__21043__auto__;
var G__31685 = cljs.core.count.call(null,c__21043__auto__);
var G__31686 = (0);
seq__31668 = G__31683;
chunk__31669 = G__31684;
count__31670 = G__31685;
i__31671 = G__31686;
continue;
} else {
var vec__31675 = cljs.core.first.call(null,seq__31668__$1);
var k = cljs.core.nth.call(null,vec__31675,(0),null);
var plugin = cljs.core.nth.call(null,vec__31675,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31687 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31668,chunk__31669,count__31670,i__31671,pl_31687,vec__31675,k,plugin,seq__31668__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31687.call(null,msg_hist);
});})(seq__31668,chunk__31669,count__31670,i__31671,pl_31687,vec__31675,k,plugin,seq__31668__$1,temp__4657__auto__))
);
} else {
}

var G__31688 = cljs.core.next.call(null,seq__31668__$1);
var G__31689 = null;
var G__31690 = (0);
var G__31691 = (0);
seq__31668 = G__31688;
chunk__31669 = G__31689;
count__31670 = G__31690;
i__31671 = G__31691;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31692 = [];
var len__21337__auto___31699 = arguments.length;
var i__21338__auto___31700 = (0);
while(true){
if((i__21338__auto___31700 < len__21337__auto___31699)){
args31692.push((arguments[i__21338__auto___31700]));

var G__31701 = (i__21338__auto___31700 + (1));
i__21338__auto___31700 = G__31701;
continue;
} else {
}
break;
}

var G__31694 = args31692.length;
switch (G__31694) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31692.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31695_31703 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31696_31704 = null;
var count__31697_31705 = (0);
var i__31698_31706 = (0);
while(true){
if((i__31698_31706 < count__31697_31705)){
var msg_31707 = cljs.core._nth.call(null,chunk__31696_31704,i__31698_31706);
figwheel.client.socket.handle_incoming_message.call(null,msg_31707);

var G__31708 = seq__31695_31703;
var G__31709 = chunk__31696_31704;
var G__31710 = count__31697_31705;
var G__31711 = (i__31698_31706 + (1));
seq__31695_31703 = G__31708;
chunk__31696_31704 = G__31709;
count__31697_31705 = G__31710;
i__31698_31706 = G__31711;
continue;
} else {
var temp__4657__auto___31712 = cljs.core.seq.call(null,seq__31695_31703);
if(temp__4657__auto___31712){
var seq__31695_31713__$1 = temp__4657__auto___31712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31695_31713__$1)){
var c__21043__auto___31714 = cljs.core.chunk_first.call(null,seq__31695_31713__$1);
var G__31715 = cljs.core.chunk_rest.call(null,seq__31695_31713__$1);
var G__31716 = c__21043__auto___31714;
var G__31717 = cljs.core.count.call(null,c__21043__auto___31714);
var G__31718 = (0);
seq__31695_31703 = G__31715;
chunk__31696_31704 = G__31716;
count__31697_31705 = G__31717;
i__31698_31706 = G__31718;
continue;
} else {
var msg_31719 = cljs.core.first.call(null,seq__31695_31713__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31719);

var G__31720 = cljs.core.next.call(null,seq__31695_31713__$1);
var G__31721 = null;
var G__31722 = (0);
var G__31723 = (0);
seq__31695_31703 = G__31720;
chunk__31696_31704 = G__31721;
count__31697_31705 = G__31722;
i__31698_31706 = G__31723;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21344__auto__ = [];
var len__21337__auto___31728 = arguments.length;
var i__21338__auto___31729 = (0);
while(true){
if((i__21338__auto___31729 < len__21337__auto___31728)){
args__21344__auto__.push((arguments[i__21338__auto___31729]));

var G__31730 = (i__21338__auto___31729 + (1));
i__21338__auto___31729 = G__31730;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31725){
var map__31726 = p__31725;
var map__31726__$1 = ((((!((map__31726 == null)))?((((map__31726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31726):map__31726);
var opts = map__31726__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31724){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31724));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31732){if((e31732 instanceof Error)){
var e = e31732;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31732;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31736){
var map__31737 = p__31736;
var map__31737__$1 = ((((!((map__31737 == null)))?((((map__31737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31737):map__31737);
var msg_name = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1528667399394