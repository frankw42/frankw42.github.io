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
var args30920 = [];
var len__21337__auto___30923 = arguments.length;
var i__21338__auto___30924 = (0);
while(true){
if((i__21338__auto___30924 < len__21337__auto___30923)){
args30920.push((arguments[i__21338__auto___30924]));

var G__30925 = (i__21338__auto___30924 + (1));
i__21338__auto___30924 = G__30925;
continue;
} else {
}
break;
}

var G__30922 = args30920.length;
switch (G__30922) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30920.length)].join('')));

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
var len__21337__auto___30928 = arguments.length;
var i__21338__auto___30929 = (0);
while(true){
if((i__21338__auto___30929 < len__21337__auto___30928)){
args__21344__auto__.push((arguments[i__21338__auto___30929]));

var G__30930 = (i__21338__auto___30929 + (1));
i__21338__auto___30929 = G__30930;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30927){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30927));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21344__auto__ = [];
var len__21337__auto___30932 = arguments.length;
var i__21338__auto___30933 = (0);
while(true){
if((i__21338__auto___30933 < len__21337__auto___30932)){
args__21344__auto__.push((arguments[i__21338__auto___30933]));

var G__30934 = (i__21338__auto___30933 + (1));
i__21338__auto___30933 = G__30934;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30931){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30931));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30935 = cljs.core._EQ_;
var expr__30936 = (function (){var or__20229__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30939){if((e30939 instanceof Error)){
var e = e30939;
return false;
} else {
throw e30939;

}
}})();
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30935.call(null,"true",expr__30936))){
return true;
} else {
if(cljs.core.truth_(pred__30935.call(null,"false",expr__30936))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30936)].join('')));
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
}catch (e30941){if((e30941 instanceof Error)){
var e = e30941;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30941;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30942){
var map__30945 = p__30942;
var map__30945__$1 = ((((!((map__30945 == null)))?((((map__30945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30945):map__30945);
var message = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22507__auto___31107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___31107,ch){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___31107,ch){
return (function (state_31076){
var state_val_31077 = (state_31076[(1)]);
if((state_val_31077 === (7))){
var inst_31072 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31078_31108 = state_31076__$1;
(statearr_31078_31108[(2)] = inst_31072);

(statearr_31078_31108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (1))){
var state_31076__$1 = state_31076;
var statearr_31079_31109 = state_31076__$1;
(statearr_31079_31109[(2)] = null);

(statearr_31079_31109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (4))){
var inst_31029 = (state_31076[(7)]);
var inst_31029__$1 = (state_31076[(2)]);
var state_31076__$1 = (function (){var statearr_31080 = state_31076;
(statearr_31080[(7)] = inst_31029__$1);

return statearr_31080;
})();
if(cljs.core.truth_(inst_31029__$1)){
var statearr_31081_31110 = state_31076__$1;
(statearr_31081_31110[(1)] = (5));

} else {
var statearr_31082_31111 = state_31076__$1;
(statearr_31082_31111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (15))){
var inst_31036 = (state_31076[(8)]);
var inst_31051 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31036);
var inst_31052 = cljs.core.first.call(null,inst_31051);
var inst_31053 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31052);
var inst_31054 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31053)].join('');
var inst_31055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31054);
var state_31076__$1 = state_31076;
var statearr_31083_31112 = state_31076__$1;
(statearr_31083_31112[(2)] = inst_31055);

(statearr_31083_31112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (13))){
var inst_31060 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31084_31113 = state_31076__$1;
(statearr_31084_31113[(2)] = inst_31060);

(statearr_31084_31113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (6))){
var state_31076__$1 = state_31076;
var statearr_31085_31114 = state_31076__$1;
(statearr_31085_31114[(2)] = null);

(statearr_31085_31114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (17))){
var inst_31058 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31086_31115 = state_31076__$1;
(statearr_31086_31115[(2)] = inst_31058);

(statearr_31086_31115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (3))){
var inst_31074 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31076__$1,inst_31074);
} else {
if((state_val_31077 === (12))){
var inst_31035 = (state_31076[(9)]);
var inst_31049 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31035,opts);
var state_31076__$1 = state_31076;
if(cljs.core.truth_(inst_31049)){
var statearr_31087_31116 = state_31076__$1;
(statearr_31087_31116[(1)] = (15));

} else {
var statearr_31088_31117 = state_31076__$1;
(statearr_31088_31117[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (2))){
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31076__$1,(4),ch);
} else {
if((state_val_31077 === (11))){
var inst_31036 = (state_31076[(8)]);
var inst_31041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31042 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31036);
var inst_31043 = cljs.core.async.timeout.call(null,(1000));
var inst_31044 = [inst_31042,inst_31043];
var inst_31045 = (new cljs.core.PersistentVector(null,2,(5),inst_31041,inst_31044,null));
var state_31076__$1 = state_31076;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31076__$1,(14),inst_31045);
} else {
if((state_val_31077 === (9))){
var inst_31036 = (state_31076[(8)]);
var inst_31062 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31063 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31036);
var inst_31064 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31063);
var inst_31065 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31064)].join('');
var inst_31066 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31065);
var state_31076__$1 = (function (){var statearr_31089 = state_31076;
(statearr_31089[(10)] = inst_31062);

return statearr_31089;
})();
var statearr_31090_31118 = state_31076__$1;
(statearr_31090_31118[(2)] = inst_31066);

(statearr_31090_31118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (5))){
var inst_31029 = (state_31076[(7)]);
var inst_31031 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31032 = (new cljs.core.PersistentArrayMap(null,2,inst_31031,null));
var inst_31033 = (new cljs.core.PersistentHashSet(null,inst_31032,null));
var inst_31034 = figwheel.client.focus_msgs.call(null,inst_31033,inst_31029);
var inst_31035 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31034);
var inst_31036 = cljs.core.first.call(null,inst_31034);
var inst_31037 = figwheel.client.autoload_QMARK_.call(null);
var state_31076__$1 = (function (){var statearr_31091 = state_31076;
(statearr_31091[(8)] = inst_31036);

(statearr_31091[(9)] = inst_31035);

return statearr_31091;
})();
if(cljs.core.truth_(inst_31037)){
var statearr_31092_31119 = state_31076__$1;
(statearr_31092_31119[(1)] = (8));

} else {
var statearr_31093_31120 = state_31076__$1;
(statearr_31093_31120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (14))){
var inst_31047 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31094_31121 = state_31076__$1;
(statearr_31094_31121[(2)] = inst_31047);

(statearr_31094_31121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (16))){
var state_31076__$1 = state_31076;
var statearr_31095_31122 = state_31076__$1;
(statearr_31095_31122[(2)] = null);

(statearr_31095_31122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (10))){
var inst_31068 = (state_31076[(2)]);
var state_31076__$1 = (function (){var statearr_31096 = state_31076;
(statearr_31096[(11)] = inst_31068);

return statearr_31096;
})();
var statearr_31097_31123 = state_31076__$1;
(statearr_31097_31123[(2)] = null);

(statearr_31097_31123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (8))){
var inst_31035 = (state_31076[(9)]);
var inst_31039 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31035,opts);
var state_31076__$1 = state_31076;
if(cljs.core.truth_(inst_31039)){
var statearr_31098_31124 = state_31076__$1;
(statearr_31098_31124[(1)] = (11));

} else {
var statearr_31099_31125 = state_31076__$1;
(statearr_31099_31125[(1)] = (12));

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
});})(c__22507__auto___31107,ch))
;
return ((function (switch__22395__auto__,c__22507__auto___31107,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____0 = (function (){
var statearr_31103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31103[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__);

(statearr_31103[(1)] = (1));

return statearr_31103;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____1 = (function (state_31076){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31104){if((e31104 instanceof Object)){
var ex__22399__auto__ = e31104;
var statearr_31105_31126 = state_31076;
(statearr_31105_31126[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31127 = state_31076;
state_31076 = G__31127;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__ = function(state_31076){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____1.call(this,state_31076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22396__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___31107,ch))
})();
var state__22509__auto__ = (function (){var statearr_31106 = f__22508__auto__.call(null);
(statearr_31106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___31107);

return statearr_31106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___31107,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31128_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31128_SHARP_));
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
var base_path_31131 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31131){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31130){if((e31130 instanceof Error)){
var e = e31130;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31131], null));
} else {
var e = e31130;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31131))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31132){
var map__31141 = p__31132;
var map__31141__$1 = ((((!((map__31141 == null)))?((((map__31141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31141):map__31141);
var opts = map__31141__$1;
var build_id = cljs.core.get.call(null,map__31141__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31141,map__31141__$1,opts,build_id){
return (function (p__31143){
var vec__31144 = p__31143;
var seq__31145 = cljs.core.seq.call(null,vec__31144);
var first__31146 = cljs.core.first.call(null,seq__31145);
var seq__31145__$1 = cljs.core.next.call(null,seq__31145);
var map__31147 = first__31146;
var map__31147__$1 = ((((!((map__31147 == null)))?((((map__31147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31147):map__31147);
var msg = map__31147__$1;
var msg_name = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31145__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31144,seq__31145,first__31146,seq__31145__$1,map__31147,map__31147__$1,msg,msg_name,_,map__31141,map__31141__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31144,seq__31145,first__31146,seq__31145__$1,map__31147,map__31147__$1,msg,msg_name,_,map__31141,map__31141__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31141,map__31141__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31155){
var vec__31156 = p__31155;
var seq__31157 = cljs.core.seq.call(null,vec__31156);
var first__31158 = cljs.core.first.call(null,seq__31157);
var seq__31157__$1 = cljs.core.next.call(null,seq__31157);
var map__31159 = first__31158;
var map__31159__$1 = ((((!((map__31159 == null)))?((((map__31159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31159):map__31159);
var msg = map__31159__$1;
var msg_name = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31157__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31161){
var map__31173 = p__31161;
var map__31173__$1 = ((((!((map__31173 == null)))?((((map__31173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31173):map__31173);
var on_compile_warning = cljs.core.get.call(null,map__31173__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31173__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31173,map__31173__$1,on_compile_warning,on_compile_fail){
return (function (p__31175){
var vec__31176 = p__31175;
var seq__31177 = cljs.core.seq.call(null,vec__31176);
var first__31178 = cljs.core.first.call(null,seq__31177);
var seq__31177__$1 = cljs.core.next.call(null,seq__31177);
var map__31179 = first__31178;
var map__31179__$1 = ((((!((map__31179 == null)))?((((map__31179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31179):map__31179);
var msg = map__31179__$1;
var msg_name = cljs.core.get.call(null,map__31179__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31177__$1;
var pred__31181 = cljs.core._EQ_;
var expr__31182 = msg_name;
if(cljs.core.truth_(pred__31181.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31182))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31181.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31182))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31173,map__31173__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__,msg_hist,msg_names,msg){
return (function (state_31390){
var state_val_31391 = (state_31390[(1)]);
if((state_val_31391 === (7))){
var inst_31318 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31318)){
var statearr_31392_31438 = state_31390__$1;
(statearr_31392_31438[(1)] = (8));

} else {
var statearr_31393_31439 = state_31390__$1;
(statearr_31393_31439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (20))){
var inst_31384 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31394_31440 = state_31390__$1;
(statearr_31394_31440[(2)] = inst_31384);

(statearr_31394_31440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (27))){
var inst_31380 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31395_31441 = state_31390__$1;
(statearr_31395_31441[(2)] = inst_31380);

(statearr_31395_31441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (1))){
var inst_31311 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31311)){
var statearr_31396_31442 = state_31390__$1;
(statearr_31396_31442[(1)] = (2));

} else {
var statearr_31397_31443 = state_31390__$1;
(statearr_31397_31443[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (24))){
var inst_31382 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31398_31444 = state_31390__$1;
(statearr_31398_31444[(2)] = inst_31382);

(statearr_31398_31444[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (4))){
var inst_31388 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31390__$1,inst_31388);
} else {
if((state_val_31391 === (15))){
var inst_31386 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31399_31445 = state_31390__$1;
(statearr_31399_31445[(2)] = inst_31386);

(statearr_31399_31445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (21))){
var inst_31345 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31400_31446 = state_31390__$1;
(statearr_31400_31446[(2)] = inst_31345);

(statearr_31400_31446[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (31))){
var inst_31369 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31369)){
var statearr_31401_31447 = state_31390__$1;
(statearr_31401_31447[(1)] = (34));

} else {
var statearr_31402_31448 = state_31390__$1;
(statearr_31402_31448[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (32))){
var inst_31378 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31403_31449 = state_31390__$1;
(statearr_31403_31449[(2)] = inst_31378);

(statearr_31403_31449[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (33))){
var inst_31367 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31404_31450 = state_31390__$1;
(statearr_31404_31450[(2)] = inst_31367);

(statearr_31404_31450[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (13))){
var inst_31332 = figwheel.client.heads_up.clear.call(null);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(16),inst_31332);
} else {
if((state_val_31391 === (22))){
var inst_31349 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31350 = figwheel.client.heads_up.append_warning_message.call(null,inst_31349);
var state_31390__$1 = state_31390;
var statearr_31405_31451 = state_31390__$1;
(statearr_31405_31451[(2)] = inst_31350);

(statearr_31405_31451[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (36))){
var inst_31376 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31406_31452 = state_31390__$1;
(statearr_31406_31452[(2)] = inst_31376);

(statearr_31406_31452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (29))){
var inst_31360 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31407_31453 = state_31390__$1;
(statearr_31407_31453[(2)] = inst_31360);

(statearr_31407_31453[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (6))){
var inst_31313 = (state_31390[(7)]);
var state_31390__$1 = state_31390;
var statearr_31408_31454 = state_31390__$1;
(statearr_31408_31454[(2)] = inst_31313);

(statearr_31408_31454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (28))){
var inst_31356 = (state_31390[(2)]);
var inst_31357 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31358 = figwheel.client.heads_up.display_warning.call(null,inst_31357);
var state_31390__$1 = (function (){var statearr_31409 = state_31390;
(statearr_31409[(8)] = inst_31356);

return statearr_31409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(29),inst_31358);
} else {
if((state_val_31391 === (25))){
var inst_31354 = figwheel.client.heads_up.clear.call(null);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(28),inst_31354);
} else {
if((state_val_31391 === (34))){
var inst_31371 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(37),inst_31371);
} else {
if((state_val_31391 === (17))){
var inst_31338 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31410_31455 = state_31390__$1;
(statearr_31410_31455[(2)] = inst_31338);

(statearr_31410_31455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (3))){
var inst_31330 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31330)){
var statearr_31411_31456 = state_31390__$1;
(statearr_31411_31456[(1)] = (13));

} else {
var statearr_31412_31457 = state_31390__$1;
(statearr_31412_31457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (12))){
var inst_31326 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31413_31458 = state_31390__$1;
(statearr_31413_31458[(2)] = inst_31326);

(statearr_31413_31458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (2))){
var inst_31313 = (state_31390[(7)]);
var inst_31313__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31390__$1 = (function (){var statearr_31414 = state_31390;
(statearr_31414[(7)] = inst_31313__$1);

return statearr_31414;
})();
if(cljs.core.truth_(inst_31313__$1)){
var statearr_31415_31459 = state_31390__$1;
(statearr_31415_31459[(1)] = (5));

} else {
var statearr_31416_31460 = state_31390__$1;
(statearr_31416_31460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (23))){
var inst_31352 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31352)){
var statearr_31417_31461 = state_31390__$1;
(statearr_31417_31461[(1)] = (25));

} else {
var statearr_31418_31462 = state_31390__$1;
(statearr_31418_31462[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (35))){
var state_31390__$1 = state_31390;
var statearr_31419_31463 = state_31390__$1;
(statearr_31419_31463[(2)] = null);

(statearr_31419_31463[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (19))){
var inst_31347 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31347)){
var statearr_31420_31464 = state_31390__$1;
(statearr_31420_31464[(1)] = (22));

} else {
var statearr_31421_31465 = state_31390__$1;
(statearr_31421_31465[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (11))){
var inst_31322 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31422_31466 = state_31390__$1;
(statearr_31422_31466[(2)] = inst_31322);

(statearr_31422_31466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (9))){
var inst_31324 = figwheel.client.heads_up.clear.call(null);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(12),inst_31324);
} else {
if((state_val_31391 === (5))){
var inst_31315 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31390__$1 = state_31390;
var statearr_31423_31467 = state_31390__$1;
(statearr_31423_31467[(2)] = inst_31315);

(statearr_31423_31467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (14))){
var inst_31340 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31340)){
var statearr_31424_31468 = state_31390__$1;
(statearr_31424_31468[(1)] = (18));

} else {
var statearr_31425_31469 = state_31390__$1;
(statearr_31425_31469[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (26))){
var inst_31362 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31362)){
var statearr_31426_31470 = state_31390__$1;
(statearr_31426_31470[(1)] = (30));

} else {
var statearr_31427_31471 = state_31390__$1;
(statearr_31427_31471[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (16))){
var inst_31334 = (state_31390[(2)]);
var inst_31335 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31336 = figwheel.client.heads_up.display_exception.call(null,inst_31335);
var state_31390__$1 = (function (){var statearr_31428 = state_31390;
(statearr_31428[(9)] = inst_31334);

return statearr_31428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(17),inst_31336);
} else {
if((state_val_31391 === (30))){
var inst_31364 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31365 = figwheel.client.heads_up.display_warning.call(null,inst_31364);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(33),inst_31365);
} else {
if((state_val_31391 === (10))){
var inst_31328 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31429_31472 = state_31390__$1;
(statearr_31429_31472[(2)] = inst_31328);

(statearr_31429_31472[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (18))){
var inst_31342 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31343 = figwheel.client.heads_up.display_exception.call(null,inst_31342);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(21),inst_31343);
} else {
if((state_val_31391 === (37))){
var inst_31373 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31430_31473 = state_31390__$1;
(statearr_31430_31473[(2)] = inst_31373);

(statearr_31430_31473[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (8))){
var inst_31320 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(11),inst_31320);
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
var statearr_31434 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31434[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__);

(statearr_31434[(1)] = (1));

return statearr_31434;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____1 = (function (state_31390){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31435){if((e31435 instanceof Object)){
var ex__22399__auto__ = e31435;
var statearr_31436_31474 = state_31390;
(statearr_31436_31474[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31475 = state_31390;
state_31390 = G__31475;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__ = function(state_31390){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____1.call(this,state_31390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__,msg_hist,msg_names,msg))
})();
var state__22509__auto__ = (function (){var statearr_31437 = f__22508__auto__.call(null);
(statearr_31437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_31437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__,msg_hist,msg_names,msg))
);

return c__22507__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22507__auto___31538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___31538,ch){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___31538,ch){
return (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (1))){
var state_31521__$1 = state_31521;
var statearr_31523_31539 = state_31521__$1;
(statearr_31523_31539[(2)] = null);

(statearr_31523_31539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (2))){
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31521__$1,(4),ch);
} else {
if((state_val_31522 === (3))){
var inst_31519 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31521__$1,inst_31519);
} else {
if((state_val_31522 === (4))){
var inst_31509 = (state_31521[(7)]);
var inst_31509__$1 = (state_31521[(2)]);
var state_31521__$1 = (function (){var statearr_31524 = state_31521;
(statearr_31524[(7)] = inst_31509__$1);

return statearr_31524;
})();
if(cljs.core.truth_(inst_31509__$1)){
var statearr_31525_31540 = state_31521__$1;
(statearr_31525_31540[(1)] = (5));

} else {
var statearr_31526_31541 = state_31521__$1;
(statearr_31526_31541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (5))){
var inst_31509 = (state_31521[(7)]);
var inst_31511 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31509);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31521__$1,(8),inst_31511);
} else {
if((state_val_31522 === (6))){
var state_31521__$1 = state_31521;
var statearr_31527_31542 = state_31521__$1;
(statearr_31527_31542[(2)] = null);

(statearr_31527_31542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (7))){
var inst_31517 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31528_31543 = state_31521__$1;
(statearr_31528_31543[(2)] = inst_31517);

(statearr_31528_31543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (8))){
var inst_31513 = (state_31521[(2)]);
var state_31521__$1 = (function (){var statearr_31529 = state_31521;
(statearr_31529[(8)] = inst_31513);

return statearr_31529;
})();
var statearr_31530_31544 = state_31521__$1;
(statearr_31530_31544[(2)] = null);

(statearr_31530_31544[(1)] = (2));


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
});})(c__22507__auto___31538,ch))
;
return ((function (switch__22395__auto__,c__22507__auto___31538,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22396__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22396__auto____0 = (function (){
var statearr_31534 = [null,null,null,null,null,null,null,null,null];
(statearr_31534[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22396__auto__);

(statearr_31534[(1)] = (1));

return statearr_31534;
});
var figwheel$client$heads_up_plugin_$_state_machine__22396__auto____1 = (function (state_31521){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31535){if((e31535 instanceof Object)){
var ex__22399__auto__ = e31535;
var statearr_31536_31545 = state_31521;
(statearr_31536_31545[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31546 = state_31521;
state_31521 = G__31546;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22396__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22396__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22396__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22396__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___31538,ch))
})();
var state__22509__auto__ = (function (){var statearr_31537 = f__22508__auto__.call(null);
(statearr_31537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___31538);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___31538,ch))
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
return (function (state_31567){
var state_val_31568 = (state_31567[(1)]);
if((state_val_31568 === (1))){
var inst_31562 = cljs.core.async.timeout.call(null,(3000));
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31567__$1,(2),inst_31562);
} else {
if((state_val_31568 === (2))){
var inst_31564 = (state_31567[(2)]);
var inst_31565 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31567__$1 = (function (){var statearr_31569 = state_31567;
(statearr_31569[(7)] = inst_31564);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31567__$1,inst_31565);
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
var statearr_31573 = [null,null,null,null,null,null,null,null];
(statearr_31573[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__);

(statearr_31573[(1)] = (1));

return statearr_31573;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____1 = (function (state_31567){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31574){if((e31574 instanceof Object)){
var ex__22399__auto__ = e31574;
var statearr_31575_31577 = state_31567;
(statearr_31575_31577[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31578 = state_31567;
state_31567 = G__31578;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__ = function(state_31567){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____1.call(this,state_31567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22396__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__))
})();
var state__22509__auto__ = (function (){var statearr_31576 = f__22508__auto__.call(null);
(statearr_31576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_31576;
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
return (function (state_31601){
var state_val_31602 = (state_31601[(1)]);
if((state_val_31602 === (1))){
var inst_31595 = cljs.core.async.timeout.call(null,(2000));
var state_31601__$1 = state_31601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31601__$1,(2),inst_31595);
} else {
if((state_val_31602 === (2))){
var inst_31597 = (state_31601[(2)]);
var inst_31598 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31599 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31598);
var state_31601__$1 = (function (){var statearr_31603 = state_31601;
(statearr_31603[(7)] = inst_31597);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31601__$1,inst_31599);
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
var statearr_31607 = [null,null,null,null,null,null,null,null];
(statearr_31607[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__);

(statearr_31607[(1)] = (1));

return statearr_31607;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____1 = (function (state_31601){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_31601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e31608){if((e31608 instanceof Object)){
var ex__22399__auto__ = e31608;
var statearr_31609_31611 = state_31601;
(statearr_31609_31611[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31612 = state_31601;
state_31601 = G__31612;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__ = function(state_31601){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____1.call(this,state_31601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22509__auto__ = (function (){var statearr_31610 = f__22508__auto__.call(null);
(statearr_31610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_31610;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31613){
var map__31617 = p__31613;
var map__31617__$1 = ((((!((map__31617 == null)))?((((map__31617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31617):map__31617);
var file = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31619 = "";
var G__31619__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31619),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31619);
var G__31619__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31619__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31619__$1);
if(cljs.core.truth_((function (){var and__20217__auto__ = line;
if(cljs.core.truth_(and__20217__auto__)){
return column;
} else {
return and__20217__auto__;
}
})())){
return [cljs.core.str(G__31619__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31619__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31620){
var map__31627 = p__31620;
var map__31627__$1 = ((((!((map__31627 == null)))?((((map__31627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);
var ed = map__31627__$1;
var formatted_exception = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31629_31633 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31630_31634 = null;
var count__31631_31635 = (0);
var i__31632_31636 = (0);
while(true){
if((i__31632_31636 < count__31631_31635)){
var msg_31637 = cljs.core._nth.call(null,chunk__31630_31634,i__31632_31636);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31637);

var G__31638 = seq__31629_31633;
var G__31639 = chunk__31630_31634;
var G__31640 = count__31631_31635;
var G__31641 = (i__31632_31636 + (1));
seq__31629_31633 = G__31638;
chunk__31630_31634 = G__31639;
count__31631_31635 = G__31640;
i__31632_31636 = G__31641;
continue;
} else {
var temp__4657__auto___31642 = cljs.core.seq.call(null,seq__31629_31633);
if(temp__4657__auto___31642){
var seq__31629_31643__$1 = temp__4657__auto___31642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31629_31643__$1)){
var c__21043__auto___31644 = cljs.core.chunk_first.call(null,seq__31629_31643__$1);
var G__31645 = cljs.core.chunk_rest.call(null,seq__31629_31643__$1);
var G__31646 = c__21043__auto___31644;
var G__31647 = cljs.core.count.call(null,c__21043__auto___31644);
var G__31648 = (0);
seq__31629_31633 = G__31645;
chunk__31630_31634 = G__31646;
count__31631_31635 = G__31647;
i__31632_31636 = G__31648;
continue;
} else {
var msg_31649 = cljs.core.first.call(null,seq__31629_31643__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31649);

var G__31650 = cljs.core.next.call(null,seq__31629_31643__$1);
var G__31651 = null;
var G__31652 = (0);
var G__31653 = (0);
seq__31629_31633 = G__31650;
chunk__31630_31634 = G__31651;
count__31631_31635 = G__31652;
i__31632_31636 = G__31653;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31654){
var map__31657 = p__31654;
var map__31657__$1 = ((((!((map__31657 == null)))?((((map__31657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31657):map__31657);
var w = map__31657__$1;
var message = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31669 = cljs.core.seq.call(null,plugins);
var chunk__31670 = null;
var count__31671 = (0);
var i__31672 = (0);
while(true){
if((i__31672 < count__31671)){
var vec__31673 = cljs.core._nth.call(null,chunk__31670,i__31672);
var k = cljs.core.nth.call(null,vec__31673,(0),null);
var plugin = cljs.core.nth.call(null,vec__31673,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31679 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31669,chunk__31670,count__31671,i__31672,pl_31679,vec__31673,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31679.call(null,msg_hist);
});})(seq__31669,chunk__31670,count__31671,i__31672,pl_31679,vec__31673,k,plugin))
);
} else {
}

var G__31680 = seq__31669;
var G__31681 = chunk__31670;
var G__31682 = count__31671;
var G__31683 = (i__31672 + (1));
seq__31669 = G__31680;
chunk__31670 = G__31681;
count__31671 = G__31682;
i__31672 = G__31683;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31669);
if(temp__4657__auto__){
var seq__31669__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31669__$1)){
var c__21043__auto__ = cljs.core.chunk_first.call(null,seq__31669__$1);
var G__31684 = cljs.core.chunk_rest.call(null,seq__31669__$1);
var G__31685 = c__21043__auto__;
var G__31686 = cljs.core.count.call(null,c__21043__auto__);
var G__31687 = (0);
seq__31669 = G__31684;
chunk__31670 = G__31685;
count__31671 = G__31686;
i__31672 = G__31687;
continue;
} else {
var vec__31676 = cljs.core.first.call(null,seq__31669__$1);
var k = cljs.core.nth.call(null,vec__31676,(0),null);
var plugin = cljs.core.nth.call(null,vec__31676,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31688 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31669,chunk__31670,count__31671,i__31672,pl_31688,vec__31676,k,plugin,seq__31669__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31688.call(null,msg_hist);
});})(seq__31669,chunk__31670,count__31671,i__31672,pl_31688,vec__31676,k,plugin,seq__31669__$1,temp__4657__auto__))
);
} else {
}

var G__31689 = cljs.core.next.call(null,seq__31669__$1);
var G__31690 = null;
var G__31691 = (0);
var G__31692 = (0);
seq__31669 = G__31689;
chunk__31670 = G__31690;
count__31671 = G__31691;
i__31672 = G__31692;
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
var args31693 = [];
var len__21337__auto___31700 = arguments.length;
var i__21338__auto___31701 = (0);
while(true){
if((i__21338__auto___31701 < len__21337__auto___31700)){
args31693.push((arguments[i__21338__auto___31701]));

var G__31702 = (i__21338__auto___31701 + (1));
i__21338__auto___31701 = G__31702;
continue;
} else {
}
break;
}

var G__31695 = args31693.length;
switch (G__31695) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31693.length)].join('')));

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

var seq__31696_31704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31697_31705 = null;
var count__31698_31706 = (0);
var i__31699_31707 = (0);
while(true){
if((i__31699_31707 < count__31698_31706)){
var msg_31708 = cljs.core._nth.call(null,chunk__31697_31705,i__31699_31707);
figwheel.client.socket.handle_incoming_message.call(null,msg_31708);

var G__31709 = seq__31696_31704;
var G__31710 = chunk__31697_31705;
var G__31711 = count__31698_31706;
var G__31712 = (i__31699_31707 + (1));
seq__31696_31704 = G__31709;
chunk__31697_31705 = G__31710;
count__31698_31706 = G__31711;
i__31699_31707 = G__31712;
continue;
} else {
var temp__4657__auto___31713 = cljs.core.seq.call(null,seq__31696_31704);
if(temp__4657__auto___31713){
var seq__31696_31714__$1 = temp__4657__auto___31713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31696_31714__$1)){
var c__21043__auto___31715 = cljs.core.chunk_first.call(null,seq__31696_31714__$1);
var G__31716 = cljs.core.chunk_rest.call(null,seq__31696_31714__$1);
var G__31717 = c__21043__auto___31715;
var G__31718 = cljs.core.count.call(null,c__21043__auto___31715);
var G__31719 = (0);
seq__31696_31704 = G__31716;
chunk__31697_31705 = G__31717;
count__31698_31706 = G__31718;
i__31699_31707 = G__31719;
continue;
} else {
var msg_31720 = cljs.core.first.call(null,seq__31696_31714__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31720);

var G__31721 = cljs.core.next.call(null,seq__31696_31714__$1);
var G__31722 = null;
var G__31723 = (0);
var G__31724 = (0);
seq__31696_31704 = G__31721;
chunk__31697_31705 = G__31722;
count__31698_31706 = G__31723;
i__31699_31707 = G__31724;
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
var len__21337__auto___31729 = arguments.length;
var i__21338__auto___31730 = (0);
while(true){
if((i__21338__auto___31730 < len__21337__auto___31729)){
args__21344__auto__.push((arguments[i__21338__auto___31730]));

var G__31731 = (i__21338__auto___31730 + (1));
i__21338__auto___31730 = G__31731;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31726){
var map__31727 = p__31726;
var map__31727__$1 = ((((!((map__31727 == null)))?((((map__31727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31727):map__31727);
var opts = map__31727__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31725){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31725));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31733){if((e31733 instanceof Error)){
var e = e31733;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31733;

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
return (function (p__31737){
var map__31738 = p__31737;
var map__31738__$1 = ((((!((map__31738 == null)))?((((map__31738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31738):map__31738);
var msg_name = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1528678748268