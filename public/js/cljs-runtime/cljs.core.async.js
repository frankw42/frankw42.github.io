goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14954 = (function (f,blockable,meta14955){
this.f = f;
this.blockable = blockable;
this.meta14955 = meta14955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14956,meta14955__$1){
var self__ = this;
var _14956__$1 = this;
return (new cljs.core.async.t_cljs$core$async14954(self__.f,self__.blockable,meta14955__$1));
}));

(cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14956){
var self__ = this;
var _14956__$1 = this;
return self__.meta14955;
}));

(cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14955","meta14955",-907983719,null)], null);
}));

(cljs.core.async.t_cljs$core$async14954.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14954");

(cljs.core.async.t_cljs$core$async14954.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14954");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14954.
 */
cljs.core.async.__GT_t_cljs$core$async14954 = (function cljs$core$async$__GT_t_cljs$core$async14954(f,blockable,meta14955){
return (new cljs.core.async.t_cljs$core$async14954(f,blockable,meta14955));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14953 = arguments.length;
switch (G__14953) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14954(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14979 = arguments.length;
switch (G__14979) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14992 = arguments.length;
switch (G__14992) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14994 = arguments.length;
switch (G__14994) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16890 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16890) : fn1.call(null,val_16890));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16890) : fn1.call(null,val_16890));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15024 = arguments.length;
switch (G__15024) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___16892 = n;
var x_16893 = (0);
while(true){
if((x_16893 < n__5616__auto___16892)){
(a[x_16893] = x_16893);

var G__16894 = (x_16893 + (1));
x_16893 = G__16894;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15025 = (function (flag,meta15026){
this.flag = flag;
this.meta15026 = meta15026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15027,meta15026__$1){
var self__ = this;
var _15027__$1 = this;
return (new cljs.core.async.t_cljs$core$async15025(self__.flag,meta15026__$1));
}));

(cljs.core.async.t_cljs$core$async15025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15027){
var self__ = this;
var _15027__$1 = this;
return self__.meta15026;
}));

(cljs.core.async.t_cljs$core$async15025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15026","meta15026",-1247626666,null)], null);
}));

(cljs.core.async.t_cljs$core$async15025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15025");

(cljs.core.async.t_cljs$core$async15025.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15025.
 */
cljs.core.async.__GT_t_cljs$core$async15025 = (function cljs$core$async$__GT_t_cljs$core$async15025(flag,meta15026){
return (new cljs.core.async.t_cljs$core$async15025(flag,meta15026));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15025(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15047 = (function (flag,cb,meta15048){
this.flag = flag;
this.cb = cb;
this.meta15048 = meta15048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15049,meta15048__$1){
var self__ = this;
var _15049__$1 = this;
return (new cljs.core.async.t_cljs$core$async15047(self__.flag,self__.cb,meta15048__$1));
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15049){
var self__ = this;
var _15049__$1 = this;
return self__.meta15048;
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15048","meta15048",-609530354,null)], null);
}));

(cljs.core.async.t_cljs$core$async15047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15047");

(cljs.core.async.t_cljs$core$async15047.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15047.
 */
cljs.core.async.__GT_t_cljs$core$async15047 = (function cljs$core$async$__GT_t_cljs$core$async15047(flag,cb,meta15048){
return (new cljs.core.async.t_cljs$core$async15047(flag,cb,meta15048));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15047(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_16895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_16895)){
if((!(((port_16895.cljs$core$IFn$_invoke$arity$1 ? port_16895.cljs$core$IFn$_invoke$arity$1((1)) : port_16895.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__16896 = (i + (1));
i = G__16896;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15072_SHARP_){
var G__15074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15072_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15074) : fret.call(null,G__15074));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15073_SHARP_){
var G__15076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15073_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15076) : fret.call(null,G__15076));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16897 = (i + (1));
i = G__16897;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___16898 = arguments.length;
var i__5750__auto___16899 = (0);
while(true){
if((i__5750__auto___16899 < len__5749__auto___16898)){
args__5755__auto__.push((arguments[i__5750__auto___16899]));

var G__16900 = (i__5750__auto___16899 + (1));
i__5750__auto___16899 = G__16900;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15104){
var map__15105 = p__15104;
var map__15105__$1 = cljs.core.__destructure_map(map__15105);
var opts = map__15105__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15082){
var G__15083 = cljs.core.first(seq15082);
var seq15082__$1 = cljs.core.next(seq15082);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15083,seq15082__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15107 = arguments.length;
switch (G__15107) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14888__auto___16902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15150){
var state_val_15151 = (state_15150[(1)]);
if((state_val_15151 === (7))){
var inst_15145 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
var statearr_15159_16903 = state_15150__$1;
(statearr_15159_16903[(2)] = inst_15145);

(statearr_15159_16903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (1))){
var state_15150__$1 = state_15150;
var statearr_15162_16904 = state_15150__$1;
(statearr_15162_16904[(2)] = null);

(statearr_15162_16904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (4))){
var inst_15121 = (state_15150[(7)]);
var inst_15121__$1 = (state_15150[(2)]);
var inst_15122 = (inst_15121__$1 == null);
var state_15150__$1 = (function (){var statearr_15166 = state_15150;
(statearr_15166[(7)] = inst_15121__$1);

return statearr_15166;
})();
if(cljs.core.truth_(inst_15122)){
var statearr_15169_16905 = state_15150__$1;
(statearr_15169_16905[(1)] = (5));

} else {
var statearr_15170_16906 = state_15150__$1;
(statearr_15170_16906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (13))){
var state_15150__$1 = state_15150;
var statearr_15172_16907 = state_15150__$1;
(statearr_15172_16907[(2)] = null);

(statearr_15172_16907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (6))){
var inst_15121 = (state_15150[(7)]);
var state_15150__$1 = state_15150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15150__$1,(11),to,inst_15121);
} else {
if((state_val_15151 === (3))){
var inst_15148 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15150__$1,inst_15148);
} else {
if((state_val_15151 === (12))){
var state_15150__$1 = state_15150;
var statearr_15174_16908 = state_15150__$1;
(statearr_15174_16908[(2)] = null);

(statearr_15174_16908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (2))){
var state_15150__$1 = state_15150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15150__$1,(4),from);
} else {
if((state_val_15151 === (11))){
var inst_15131 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
if(cljs.core.truth_(inst_15131)){
var statearr_15175_16909 = state_15150__$1;
(statearr_15175_16909[(1)] = (12));

} else {
var statearr_15176_16910 = state_15150__$1;
(statearr_15176_16910[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (9))){
var state_15150__$1 = state_15150;
var statearr_15177_16911 = state_15150__$1;
(statearr_15177_16911[(2)] = null);

(statearr_15177_16911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (5))){
var state_15150__$1 = state_15150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15178_16912 = state_15150__$1;
(statearr_15178_16912[(1)] = (8));

} else {
var statearr_15179_16913 = state_15150__$1;
(statearr_15179_16913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (14))){
var inst_15143 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
var statearr_15180_16914 = state_15150__$1;
(statearr_15180_16914[(2)] = inst_15143);

(statearr_15180_16914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (10))){
var inst_15128 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
var statearr_15181_16915 = state_15150__$1;
(statearr_15181_16915[(2)] = inst_15128);

(statearr_15181_16915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (8))){
var inst_15125 = cljs.core.async.close_BANG_(to);
var state_15150__$1 = state_15150;
var statearr_15183_16916 = state_15150__$1;
(statearr_15183_16916[(2)] = inst_15125);

(statearr_15183_16916[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_15185 = [null,null,null,null,null,null,null,null];
(statearr_15185[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_15185[(1)] = (1));

return statearr_15185;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_15150){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15150);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15186){var ex__14780__auto__ = e15186;
var statearr_15187_16917 = state_15150;
(statearr_15187_16917[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15150[(4)]))){
var statearr_15188_16918 = state_15150;
(statearr_15188_16918[(1)] = cljs.core.first((state_15150[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16919 = state_15150;
state_15150 = G__16919;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_15150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_15150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15189 = f__14889__auto__();
(statearr_15189[(6)] = c__14888__auto___16902);

return statearr_15189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15193){
var vec__15194 = p__15193;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15194,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15194,(1),null);
var job = vec__15194;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14888__auto___16920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15201){
var state_val_15202 = (state_15201[(1)]);
if((state_val_15202 === (1))){
var state_15201__$1 = state_15201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15201__$1,(2),res,v);
} else {
if((state_val_15202 === (2))){
var inst_15198 = (state_15201[(2)]);
var inst_15199 = cljs.core.async.close_BANG_(res);
var state_15201__$1 = (function (){var statearr_15203 = state_15201;
(statearr_15203[(7)] = inst_15198);

return statearr_15203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15201__$1,inst_15199);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0 = (function (){
var statearr_15204 = [null,null,null,null,null,null,null,null];
(statearr_15204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__);

(statearr_15204[(1)] = (1));

return statearr_15204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1 = (function (state_15201){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15201);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15205){var ex__14780__auto__ = e15205;
var statearr_15206_16921 = state_15201;
(statearr_15206_16921[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15201[(4)]))){
var statearr_15207_16922 = state_15201;
(statearr_15207_16922[(1)] = cljs.core.first((state_15201[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16923 = state_15201;
state_15201 = G__16923;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = function(state_15201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1.call(this,state_15201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15213 = f__14889__auto__();
(statearr_15213[(6)] = c__14888__auto___16920);

return statearr_15213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15218){
var vec__15223 = p__15218;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223,(1),null);
var job = vec__15223;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___16924 = n;
var __16925 = (0);
while(true){
if((__16925 < n__5616__auto___16924)){
var G__15230_16926 = type;
var G__15230_16927__$1 = (((G__15230_16926 instanceof cljs.core.Keyword))?G__15230_16926.fqn:null);
switch (G__15230_16927__$1) {
case "compute":
var c__14888__auto___16929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16925,c__14888__auto___16929,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async){
return (function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = ((function (__16925,c__14888__auto___16929,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async){
return (function (state_15243){
var state_val_15244 = (state_15243[(1)]);
if((state_val_15244 === (1))){
var state_15243__$1 = state_15243;
var statearr_15245_16930 = state_15243__$1;
(statearr_15245_16930[(2)] = null);

(statearr_15245_16930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15244 === (2))){
var state_15243__$1 = state_15243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15243__$1,(4),jobs);
} else {
if((state_val_15244 === (3))){
var inst_15241 = (state_15243[(2)]);
var state_15243__$1 = state_15243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15243__$1,inst_15241);
} else {
if((state_val_15244 === (4))){
var inst_15233 = (state_15243[(2)]);
var inst_15234 = process__$1(inst_15233);
var state_15243__$1 = state_15243;
if(cljs.core.truth_(inst_15234)){
var statearr_15247_16931 = state_15243__$1;
(statearr_15247_16931[(1)] = (5));

} else {
var statearr_15248_16932 = state_15243__$1;
(statearr_15248_16932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15244 === (5))){
var state_15243__$1 = state_15243;
var statearr_15249_16933 = state_15243__$1;
(statearr_15249_16933[(2)] = null);

(statearr_15249_16933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15244 === (6))){
var state_15243__$1 = state_15243;
var statearr_15252_16934 = state_15243__$1;
(statearr_15252_16934[(2)] = null);

(statearr_15252_16934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15244 === (7))){
var inst_15239 = (state_15243[(2)]);
var state_15243__$1 = state_15243;
var statearr_15255_16935 = state_15243__$1;
(statearr_15255_16935[(2)] = inst_15239);

(statearr_15255_16935[(1)] = (3));


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
});})(__16925,c__14888__auto___16929,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async))
;
return ((function (__16925,switch__14776__auto__,c__14888__auto___16929,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0 = (function (){
var statearr_15258 = [null,null,null,null,null,null,null];
(statearr_15258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__);

(statearr_15258[(1)] = (1));

return statearr_15258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1 = (function (state_15243){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15243);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15261){var ex__14780__auto__ = e15261;
var statearr_15263_16936 = state_15243;
(statearr_15263_16936[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15243[(4)]))){
var statearr_15265_16937 = state_15243;
(statearr_15265_16937[(1)] = cljs.core.first((state_15243[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16938 = state_15243;
state_15243 = G__16938;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = function(state_15243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1.call(this,state_15243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__;
})()
;})(__16925,switch__14776__auto__,c__14888__auto___16929,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async))
})();
var state__14890__auto__ = (function (){var statearr_15266 = f__14889__auto__();
(statearr_15266[(6)] = c__14888__auto___16929);

return statearr_15266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
});})(__16925,c__14888__auto___16929,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async))
);


break;
case "async":
var c__14888__auto___16939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16925,c__14888__auto___16939,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async){
return (function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = ((function (__16925,c__14888__auto___16939,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async){
return (function (state_15279){
var state_val_15280 = (state_15279[(1)]);
if((state_val_15280 === (1))){
var state_15279__$1 = state_15279;
var statearr_15282_16940 = state_15279__$1;
(statearr_15282_16940[(2)] = null);

(statearr_15282_16940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15280 === (2))){
var state_15279__$1 = state_15279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15279__$1,(4),jobs);
} else {
if((state_val_15280 === (3))){
var inst_15277 = (state_15279[(2)]);
var state_15279__$1 = state_15279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15279__$1,inst_15277);
} else {
if((state_val_15280 === (4))){
var inst_15269 = (state_15279[(2)]);
var inst_15270 = async(inst_15269);
var state_15279__$1 = state_15279;
if(cljs.core.truth_(inst_15270)){
var statearr_15283_16941 = state_15279__$1;
(statearr_15283_16941[(1)] = (5));

} else {
var statearr_15284_16942 = state_15279__$1;
(statearr_15284_16942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15280 === (5))){
var state_15279__$1 = state_15279;
var statearr_15285_16943 = state_15279__$1;
(statearr_15285_16943[(2)] = null);

(statearr_15285_16943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15280 === (6))){
var state_15279__$1 = state_15279;
var statearr_15286_16944 = state_15279__$1;
(statearr_15286_16944[(2)] = null);

(statearr_15286_16944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15280 === (7))){
var inst_15275 = (state_15279[(2)]);
var state_15279__$1 = state_15279;
var statearr_15291_16945 = state_15279__$1;
(statearr_15291_16945[(2)] = inst_15275);

(statearr_15291_16945[(1)] = (3));


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
});})(__16925,c__14888__auto___16939,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async))
;
return ((function (__16925,switch__14776__auto__,c__14888__auto___16939,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0 = (function (){
var statearr_15300 = [null,null,null,null,null,null,null];
(statearr_15300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__);

(statearr_15300[(1)] = (1));

return statearr_15300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1 = (function (state_15279){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15279);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15301){var ex__14780__auto__ = e15301;
var statearr_15302_16946 = state_15279;
(statearr_15302_16946[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15279[(4)]))){
var statearr_15303_16947 = state_15279;
(statearr_15303_16947[(1)] = cljs.core.first((state_15279[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16948 = state_15279;
state_15279 = G__16948;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = function(state_15279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1.call(this,state_15279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__;
})()
;})(__16925,switch__14776__auto__,c__14888__auto___16939,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async))
})();
var state__14890__auto__ = (function (){var statearr_15304 = f__14889__auto__();
(statearr_15304[(6)] = c__14888__auto___16939);

return statearr_15304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
});})(__16925,c__14888__auto___16939,G__15230_16926,G__15230_16927__$1,n__5616__auto___16924,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15230_16927__$1)].join('')));

}

var G__16949 = (__16925 + (1));
__16925 = G__16949;
continue;
} else {
}
break;
}

var c__14888__auto___16950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15327){
var state_val_15328 = (state_15327[(1)]);
if((state_val_15328 === (7))){
var inst_15323 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15329_16951 = state_15327__$1;
(statearr_15329_16951[(2)] = inst_15323);

(statearr_15329_16951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (1))){
var state_15327__$1 = state_15327;
var statearr_15330_16952 = state_15327__$1;
(statearr_15330_16952[(2)] = null);

(statearr_15330_16952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (4))){
var inst_15307 = (state_15327[(7)]);
var inst_15307__$1 = (state_15327[(2)]);
var inst_15308 = (inst_15307__$1 == null);
var state_15327__$1 = (function (){var statearr_15333 = state_15327;
(statearr_15333[(7)] = inst_15307__$1);

return statearr_15333;
})();
if(cljs.core.truth_(inst_15308)){
var statearr_15334_16954 = state_15327__$1;
(statearr_15334_16954[(1)] = (5));

} else {
var statearr_15335_16955 = state_15327__$1;
(statearr_15335_16955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (6))){
var inst_15307 = (state_15327[(7)]);
var inst_15312 = (state_15327[(8)]);
var inst_15312__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15313 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15314 = [inst_15307,inst_15312__$1];
var inst_15315 = (new cljs.core.PersistentVector(null,2,(5),inst_15313,inst_15314,null));
var state_15327__$1 = (function (){var statearr_15339 = state_15327;
(statearr_15339[(8)] = inst_15312__$1);

return statearr_15339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15327__$1,(8),jobs,inst_15315);
} else {
if((state_val_15328 === (3))){
var inst_15325 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15327__$1,inst_15325);
} else {
if((state_val_15328 === (2))){
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15327__$1,(4),from);
} else {
if((state_val_15328 === (9))){
var inst_15320 = (state_15327[(2)]);
var state_15327__$1 = (function (){var statearr_15343 = state_15327;
(statearr_15343[(9)] = inst_15320);

return statearr_15343;
})();
var statearr_15344_16957 = state_15327__$1;
(statearr_15344_16957[(2)] = null);

(statearr_15344_16957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (5))){
var inst_15310 = cljs.core.async.close_BANG_(jobs);
var state_15327__$1 = state_15327;
var statearr_15345_16958 = state_15327__$1;
(statearr_15345_16958[(2)] = inst_15310);

(statearr_15345_16958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (8))){
var inst_15312 = (state_15327[(8)]);
var inst_15318 = (state_15327[(2)]);
var state_15327__$1 = (function (){var statearr_15349 = state_15327;
(statearr_15349[(10)] = inst_15318);

return statearr_15349;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15327__$1,(9),results,inst_15312);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0 = (function (){
var statearr_15352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__);

(statearr_15352[(1)] = (1));

return statearr_15352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1 = (function (state_15327){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15327);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15354){var ex__14780__auto__ = e15354;
var statearr_15355_16959 = state_15327;
(statearr_15355_16959[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15327[(4)]))){
var statearr_15356_16960 = state_15327;
(statearr_15356_16960[(1)] = cljs.core.first((state_15327[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16961 = state_15327;
state_15327 = G__16961;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = function(state_15327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1.call(this,state_15327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15358 = f__14889__auto__();
(statearr_15358[(6)] = c__14888__auto___16950);

return statearr_15358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15398){
var state_val_15399 = (state_15398[(1)]);
if((state_val_15399 === (7))){
var inst_15394 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
var statearr_15404_16962 = state_15398__$1;
(statearr_15404_16962[(2)] = inst_15394);

(statearr_15404_16962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (20))){
var state_15398__$1 = state_15398;
var statearr_15408_16964 = state_15398__$1;
(statearr_15408_16964[(2)] = null);

(statearr_15408_16964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (1))){
var state_15398__$1 = state_15398;
var statearr_15410_16965 = state_15398__$1;
(statearr_15410_16965[(2)] = null);

(statearr_15410_16965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (4))){
var inst_15361 = (state_15398[(7)]);
var inst_15361__$1 = (state_15398[(2)]);
var inst_15363 = (inst_15361__$1 == null);
var state_15398__$1 = (function (){var statearr_15414 = state_15398;
(statearr_15414[(7)] = inst_15361__$1);

return statearr_15414;
})();
if(cljs.core.truth_(inst_15363)){
var statearr_15415_16967 = state_15398__$1;
(statearr_15415_16967[(1)] = (5));

} else {
var statearr_15416_16968 = state_15398__$1;
(statearr_15416_16968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (15))){
var inst_15376 = (state_15398[(8)]);
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15398__$1,(18),to,inst_15376);
} else {
if((state_val_15399 === (21))){
var inst_15389 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
var statearr_15417_16969 = state_15398__$1;
(statearr_15417_16969[(2)] = inst_15389);

(statearr_15417_16969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (13))){
var inst_15391 = (state_15398[(2)]);
var state_15398__$1 = (function (){var statearr_15419 = state_15398;
(statearr_15419[(9)] = inst_15391);

return statearr_15419;
})();
var statearr_15422_16971 = state_15398__$1;
(statearr_15422_16971[(2)] = null);

(statearr_15422_16971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (6))){
var inst_15361 = (state_15398[(7)]);
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15398__$1,(11),inst_15361);
} else {
if((state_val_15399 === (17))){
var inst_15384 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
if(cljs.core.truth_(inst_15384)){
var statearr_15424_16972 = state_15398__$1;
(statearr_15424_16972[(1)] = (19));

} else {
var statearr_15425_16973 = state_15398__$1;
(statearr_15425_16973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (3))){
var inst_15396 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15398__$1,inst_15396);
} else {
if((state_val_15399 === (12))){
var inst_15372 = (state_15398[(10)]);
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15398__$1,(14),inst_15372);
} else {
if((state_val_15399 === (2))){
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15398__$1,(4),results);
} else {
if((state_val_15399 === (19))){
var state_15398__$1 = state_15398;
var statearr_15426_16974 = state_15398__$1;
(statearr_15426_16974[(2)] = null);

(statearr_15426_16974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (11))){
var inst_15372 = (state_15398[(2)]);
var state_15398__$1 = (function (){var statearr_15427 = state_15398;
(statearr_15427[(10)] = inst_15372);

return statearr_15427;
})();
var statearr_15428_16975 = state_15398__$1;
(statearr_15428_16975[(2)] = null);

(statearr_15428_16975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (9))){
var state_15398__$1 = state_15398;
var statearr_15430_16976 = state_15398__$1;
(statearr_15430_16976[(2)] = null);

(statearr_15430_16976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (5))){
var state_15398__$1 = state_15398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15432_16977 = state_15398__$1;
(statearr_15432_16977[(1)] = (8));

} else {
var statearr_15433_16978 = state_15398__$1;
(statearr_15433_16978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (14))){
var inst_15376 = (state_15398[(8)]);
var inst_15378 = (state_15398[(11)]);
var inst_15376__$1 = (state_15398[(2)]);
var inst_15377 = (inst_15376__$1 == null);
var inst_15378__$1 = cljs.core.not(inst_15377);
var state_15398__$1 = (function (){var statearr_15434 = state_15398;
(statearr_15434[(8)] = inst_15376__$1);

(statearr_15434[(11)] = inst_15378__$1);

return statearr_15434;
})();
if(inst_15378__$1){
var statearr_15435_16979 = state_15398__$1;
(statearr_15435_16979[(1)] = (15));

} else {
var statearr_15436_16980 = state_15398__$1;
(statearr_15436_16980[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (16))){
var inst_15378 = (state_15398[(11)]);
var state_15398__$1 = state_15398;
var statearr_15438_16981 = state_15398__$1;
(statearr_15438_16981[(2)] = inst_15378);

(statearr_15438_16981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (10))){
var inst_15369 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
var statearr_15439_16982 = state_15398__$1;
(statearr_15439_16982[(2)] = inst_15369);

(statearr_15439_16982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (18))){
var inst_15381 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
var statearr_15440_16983 = state_15398__$1;
(statearr_15440_16983[(2)] = inst_15381);

(statearr_15440_16983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (8))){
var inst_15366 = cljs.core.async.close_BANG_(to);
var state_15398__$1 = state_15398;
var statearr_15441_16984 = state_15398__$1;
(statearr_15441_16984[(2)] = inst_15366);

(statearr_15441_16984[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0 = (function (){
var statearr_15443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__);

(statearr_15443[(1)] = (1));

return statearr_15443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1 = (function (state_15398){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15398);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15444){var ex__14780__auto__ = e15444;
var statearr_15445_16986 = state_15398;
(statearr_15445_16986[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15398[(4)]))){
var statearr_15447_16987 = state_15398;
(statearr_15447_16987[(1)] = cljs.core.first((state_15398[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16988 = state_15398;
state_15398 = G__16988;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__ = function(state_15398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1.call(this,state_15398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15449 = f__14889__auto__();
(statearr_15449[(6)] = c__14888__auto__);

return statearr_15449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15452 = arguments.length;
switch (G__15452) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15455 = arguments.length;
switch (G__15455) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15459 = arguments.length;
switch (G__15459) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14888__auto___17000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15485){
var state_val_15486 = (state_15485[(1)]);
if((state_val_15486 === (7))){
var inst_15481 = (state_15485[(2)]);
var state_15485__$1 = state_15485;
var statearr_15489_17001 = state_15485__$1;
(statearr_15489_17001[(2)] = inst_15481);

(statearr_15489_17001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (1))){
var state_15485__$1 = state_15485;
var statearr_15490_17002 = state_15485__$1;
(statearr_15490_17002[(2)] = null);

(statearr_15490_17002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (4))){
var inst_15462 = (state_15485[(7)]);
var inst_15462__$1 = (state_15485[(2)]);
var inst_15463 = (inst_15462__$1 == null);
var state_15485__$1 = (function (){var statearr_15491 = state_15485;
(statearr_15491[(7)] = inst_15462__$1);

return statearr_15491;
})();
if(cljs.core.truth_(inst_15463)){
var statearr_15492_17003 = state_15485__$1;
(statearr_15492_17003[(1)] = (5));

} else {
var statearr_15493_17004 = state_15485__$1;
(statearr_15493_17004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (13))){
var state_15485__$1 = state_15485;
var statearr_15494_17005 = state_15485__$1;
(statearr_15494_17005[(2)] = null);

(statearr_15494_17005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (6))){
var inst_15462 = (state_15485[(7)]);
var inst_15468 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15462) : p.call(null,inst_15462));
var state_15485__$1 = state_15485;
if(cljs.core.truth_(inst_15468)){
var statearr_15496_17006 = state_15485__$1;
(statearr_15496_17006[(1)] = (9));

} else {
var statearr_15497_17007 = state_15485__$1;
(statearr_15497_17007[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (3))){
var inst_15483 = (state_15485[(2)]);
var state_15485__$1 = state_15485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15485__$1,inst_15483);
} else {
if((state_val_15486 === (12))){
var state_15485__$1 = state_15485;
var statearr_15499_17008 = state_15485__$1;
(statearr_15499_17008[(2)] = null);

(statearr_15499_17008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (2))){
var state_15485__$1 = state_15485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15485__$1,(4),ch);
} else {
if((state_val_15486 === (11))){
var inst_15462 = (state_15485[(7)]);
var inst_15472 = (state_15485[(2)]);
var state_15485__$1 = state_15485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15485__$1,(8),inst_15472,inst_15462);
} else {
if((state_val_15486 === (9))){
var state_15485__$1 = state_15485;
var statearr_15502_17009 = state_15485__$1;
(statearr_15502_17009[(2)] = tc);

(statearr_15502_17009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (5))){
var inst_15465 = cljs.core.async.close_BANG_(tc);
var inst_15466 = cljs.core.async.close_BANG_(fc);
var state_15485__$1 = (function (){var statearr_15503 = state_15485;
(statearr_15503[(8)] = inst_15465);

return statearr_15503;
})();
var statearr_15504_17010 = state_15485__$1;
(statearr_15504_17010[(2)] = inst_15466);

(statearr_15504_17010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (14))){
var inst_15479 = (state_15485[(2)]);
var state_15485__$1 = state_15485;
var statearr_15505_17011 = state_15485__$1;
(statearr_15505_17011[(2)] = inst_15479);

(statearr_15505_17011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (10))){
var state_15485__$1 = state_15485;
var statearr_15506_17012 = state_15485__$1;
(statearr_15506_17012[(2)] = fc);

(statearr_15506_17012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (8))){
var inst_15474 = (state_15485[(2)]);
var state_15485__$1 = state_15485;
if(cljs.core.truth_(inst_15474)){
var statearr_15507_17013 = state_15485__$1;
(statearr_15507_17013[(1)] = (12));

} else {
var statearr_15508_17014 = state_15485__$1;
(statearr_15508_17014[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_15509 = [null,null,null,null,null,null,null,null,null];
(statearr_15509[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_15509[(1)] = (1));

return statearr_15509;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_15485){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15485);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15512){var ex__14780__auto__ = e15512;
var statearr_15513_17015 = state_15485;
(statearr_15513_17015[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15485[(4)]))){
var statearr_15514_17016 = state_15485;
(statearr_15514_17016[(1)] = cljs.core.first((state_15485[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17017 = state_15485;
state_15485 = G__17017;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_15485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_15485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15515 = f__14889__auto__();
(statearr_15515[(6)] = c__14888__auto___17000);

return statearr_15515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15539){
var state_val_15540 = (state_15539[(1)]);
if((state_val_15540 === (7))){
var inst_15534 = (state_15539[(2)]);
var state_15539__$1 = state_15539;
var statearr_15542_17018 = state_15539__$1;
(statearr_15542_17018[(2)] = inst_15534);

(statearr_15542_17018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (1))){
var inst_15517 = init;
var inst_15518 = inst_15517;
var state_15539__$1 = (function (){var statearr_15544 = state_15539;
(statearr_15544[(7)] = inst_15518);

return statearr_15544;
})();
var statearr_15546_17019 = state_15539__$1;
(statearr_15546_17019[(2)] = null);

(statearr_15546_17019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (4))){
var inst_15521 = (state_15539[(8)]);
var inst_15521__$1 = (state_15539[(2)]);
var inst_15522 = (inst_15521__$1 == null);
var state_15539__$1 = (function (){var statearr_15547 = state_15539;
(statearr_15547[(8)] = inst_15521__$1);

return statearr_15547;
})();
if(cljs.core.truth_(inst_15522)){
var statearr_15548_17020 = state_15539__$1;
(statearr_15548_17020[(1)] = (5));

} else {
var statearr_15549_17021 = state_15539__$1;
(statearr_15549_17021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (6))){
var inst_15518 = (state_15539[(7)]);
var inst_15521 = (state_15539[(8)]);
var inst_15525 = (state_15539[(9)]);
var inst_15525__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15518,inst_15521) : f.call(null,inst_15518,inst_15521));
var inst_15526 = cljs.core.reduced_QMARK_(inst_15525__$1);
var state_15539__$1 = (function (){var statearr_15550 = state_15539;
(statearr_15550[(9)] = inst_15525__$1);

return statearr_15550;
})();
if(inst_15526){
var statearr_15551_17022 = state_15539__$1;
(statearr_15551_17022[(1)] = (8));

} else {
var statearr_15552_17023 = state_15539__$1;
(statearr_15552_17023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (3))){
var inst_15536 = (state_15539[(2)]);
var state_15539__$1 = state_15539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15539__$1,inst_15536);
} else {
if((state_val_15540 === (2))){
var state_15539__$1 = state_15539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15539__$1,(4),ch);
} else {
if((state_val_15540 === (9))){
var inst_15525 = (state_15539[(9)]);
var inst_15518 = inst_15525;
var state_15539__$1 = (function (){var statearr_15554 = state_15539;
(statearr_15554[(7)] = inst_15518);

return statearr_15554;
})();
var statearr_15555_17024 = state_15539__$1;
(statearr_15555_17024[(2)] = null);

(statearr_15555_17024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (5))){
var inst_15518 = (state_15539[(7)]);
var state_15539__$1 = state_15539;
var statearr_15557_17025 = state_15539__$1;
(statearr_15557_17025[(2)] = inst_15518);

(statearr_15557_17025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (10))){
var inst_15532 = (state_15539[(2)]);
var state_15539__$1 = state_15539;
var statearr_15561_17026 = state_15539__$1;
(statearr_15561_17026[(2)] = inst_15532);

(statearr_15561_17026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (8))){
var inst_15525 = (state_15539[(9)]);
var inst_15528 = cljs.core.deref(inst_15525);
var state_15539__$1 = state_15539;
var statearr_15563_17027 = state_15539__$1;
(statearr_15563_17027[(2)] = inst_15528);

(statearr_15563_17027[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14777__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14777__auto____0 = (function (){
var statearr_15565 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15565[(0)] = cljs$core$async$reduce_$_state_machine__14777__auto__);

(statearr_15565[(1)] = (1));

return statearr_15565;
});
var cljs$core$async$reduce_$_state_machine__14777__auto____1 = (function (state_15539){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15539);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15568){var ex__14780__auto__ = e15568;
var statearr_15569_17031 = state_15539;
(statearr_15569_17031[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15539[(4)]))){
var statearr_15572_17032 = state_15539;
(statearr_15572_17032[(1)] = cljs.core.first((state_15539[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17033 = state_15539;
state_15539 = G__17033;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14777__auto__ = function(state_15539){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14777__auto____1.call(this,state_15539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14777__auto____0;
cljs$core$async$reduce_$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14777__auto____1;
return cljs$core$async$reduce_$_state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15574 = f__14889__auto__();
(statearr_15574[(6)] = c__14888__auto__);

return statearr_15574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15586){
var state_val_15587 = (state_15586[(1)]);
if((state_val_15587 === (1))){
var inst_15581 = cljs.core.async.reduce(f__$1,init,ch);
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15586__$1,(2),inst_15581);
} else {
if((state_val_15587 === (2))){
var inst_15583 = (state_15586[(2)]);
var inst_15584 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15583) : f__$1.call(null,inst_15583));
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15586__$1,inst_15584);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14777__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14777__auto____0 = (function (){
var statearr_15595 = [null,null,null,null,null,null,null];
(statearr_15595[(0)] = cljs$core$async$transduce_$_state_machine__14777__auto__);

(statearr_15595[(1)] = (1));

return statearr_15595;
});
var cljs$core$async$transduce_$_state_machine__14777__auto____1 = (function (state_15586){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15586);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15597){var ex__14780__auto__ = e15597;
var statearr_15601_17038 = state_15586;
(statearr_15601_17038[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15586[(4)]))){
var statearr_15602_17039 = state_15586;
(statearr_15602_17039[(1)] = cljs.core.first((state_15586[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17040 = state_15586;
state_15586 = G__17040;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14777__auto__ = function(state_15586){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14777__auto____1.call(this,state_15586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14777__auto____0;
cljs$core$async$transduce_$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14777__auto____1;
return cljs$core$async$transduce_$_state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15604 = f__14889__auto__();
(statearr_15604[(6)] = c__14888__auto__);

return statearr_15604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15610 = arguments.length;
switch (G__15610) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15640){
var state_val_15641 = (state_15640[(1)]);
if((state_val_15641 === (7))){
var inst_15620 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15650_17042 = state_15640__$1;
(statearr_15650_17042[(2)] = inst_15620);

(statearr_15650_17042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (1))){
var inst_15611 = cljs.core.seq(coll);
var inst_15612 = inst_15611;
var state_15640__$1 = (function (){var statearr_15651 = state_15640;
(statearr_15651[(7)] = inst_15612);

return statearr_15651;
})();
var statearr_15656_17043 = state_15640__$1;
(statearr_15656_17043[(2)] = null);

(statearr_15656_17043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (4))){
var inst_15612 = (state_15640[(7)]);
var inst_15618 = cljs.core.first(inst_15612);
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15640__$1,(7),ch,inst_15618);
} else {
if((state_val_15641 === (13))){
var inst_15632 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15665_17044 = state_15640__$1;
(statearr_15665_17044[(2)] = inst_15632);

(statearr_15665_17044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (6))){
var inst_15623 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
if(cljs.core.truth_(inst_15623)){
var statearr_15666_17045 = state_15640__$1;
(statearr_15666_17045[(1)] = (8));

} else {
var statearr_15667_17046 = state_15640__$1;
(statearr_15667_17046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (3))){
var inst_15636 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15640__$1,inst_15636);
} else {
if((state_val_15641 === (12))){
var state_15640__$1 = state_15640;
var statearr_15671_17047 = state_15640__$1;
(statearr_15671_17047[(2)] = null);

(statearr_15671_17047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (2))){
var inst_15612 = (state_15640[(7)]);
var state_15640__$1 = state_15640;
if(cljs.core.truth_(inst_15612)){
var statearr_15672_17048 = state_15640__$1;
(statearr_15672_17048[(1)] = (4));

} else {
var statearr_15673_17049 = state_15640__$1;
(statearr_15673_17049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (11))){
var inst_15629 = cljs.core.async.close_BANG_(ch);
var state_15640__$1 = state_15640;
var statearr_15674_17050 = state_15640__$1;
(statearr_15674_17050[(2)] = inst_15629);

(statearr_15674_17050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (9))){
var state_15640__$1 = state_15640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15675_17051 = state_15640__$1;
(statearr_15675_17051[(1)] = (11));

} else {
var statearr_15677_17052 = state_15640__$1;
(statearr_15677_17052[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (5))){
var inst_15612 = (state_15640[(7)]);
var state_15640__$1 = state_15640;
var statearr_15678_17053 = state_15640__$1;
(statearr_15678_17053[(2)] = inst_15612);

(statearr_15678_17053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (10))){
var inst_15634 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15679_17054 = state_15640__$1;
(statearr_15679_17054[(2)] = inst_15634);

(statearr_15679_17054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (8))){
var inst_15612 = (state_15640[(7)]);
var inst_15625 = cljs.core.next(inst_15612);
var inst_15612__$1 = inst_15625;
var state_15640__$1 = (function (){var statearr_15680 = state_15640;
(statearr_15680[(7)] = inst_15612__$1);

return statearr_15680;
})();
var statearr_15681_17055 = state_15640__$1;
(statearr_15681_17055[(2)] = null);

(statearr_15681_17055[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_15682 = [null,null,null,null,null,null,null,null];
(statearr_15682[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_15682[(1)] = (1));

return statearr_15682;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_15640){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15640);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e15691){var ex__14780__auto__ = e15691;
var statearr_15692_17056 = state_15640;
(statearr_15692_17056[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15640[(4)]))){
var statearr_15697_17057 = state_15640;
(statearr_15697_17057[(1)] = cljs.core.first((state_15640[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17058 = state_15640;
state_15640 = G__17058;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_15640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_15640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15698 = f__14889__auto__();
(statearr_15698[(6)] = c__14888__auto__);

return statearr_15698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15704 = arguments.length;
switch (G__15704) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17060 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17060(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17061 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17061(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17062 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17062(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17063 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17063(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15734 = (function (ch,cs,meta15735){
this.ch = ch;
this.cs = cs;
this.meta15735 = meta15735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15736,meta15735__$1){
var self__ = this;
var _15736__$1 = this;
return (new cljs.core.async.t_cljs$core$async15734(self__.ch,self__.cs,meta15735__$1));
}));

(cljs.core.async.t_cljs$core$async15734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15736){
var self__ = this;
var _15736__$1 = this;
return self__.meta15735;
}));

(cljs.core.async.t_cljs$core$async15734.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15734.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15734.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15734.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15734.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15735","meta15735",-1647147163,null)], null);
}));

(cljs.core.async.t_cljs$core$async15734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15734");

(cljs.core.async.t_cljs$core$async15734.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15734.
 */
cljs.core.async.__GT_t_cljs$core$async15734 = (function cljs$core$async$__GT_t_cljs$core$async15734(ch,cs,meta15735){
return (new cljs.core.async.t_cljs$core$async15734(ch,cs,meta15735));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15734(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14888__auto___17064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_15869){
var state_val_15870 = (state_15869[(1)]);
if((state_val_15870 === (7))){
var inst_15865 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15871_17069 = state_15869__$1;
(statearr_15871_17069[(2)] = inst_15865);

(statearr_15871_17069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (20))){
var inst_15770 = (state_15869[(7)]);
var inst_15782 = cljs.core.first(inst_15770);
var inst_15783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15782,(0),null);
var inst_15784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15782,(1),null);
var state_15869__$1 = (function (){var statearr_15873 = state_15869;
(statearr_15873[(8)] = inst_15783);

return statearr_15873;
})();
if(cljs.core.truth_(inst_15784)){
var statearr_15876_17070 = state_15869__$1;
(statearr_15876_17070[(1)] = (22));

} else {
var statearr_15877_17071 = state_15869__$1;
(statearr_15877_17071[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (27))){
var inst_15812 = (state_15869[(9)]);
var inst_15814 = (state_15869[(10)]);
var inst_15819 = (state_15869[(11)]);
var inst_15739 = (state_15869[(12)]);
var inst_15819__$1 = cljs.core._nth(inst_15812,inst_15814);
var inst_15820 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15819__$1,inst_15739,done);
var state_15869__$1 = (function (){var statearr_15878 = state_15869;
(statearr_15878[(11)] = inst_15819__$1);

return statearr_15878;
})();
if(cljs.core.truth_(inst_15820)){
var statearr_15879_17072 = state_15869__$1;
(statearr_15879_17072[(1)] = (30));

} else {
var statearr_15880_17073 = state_15869__$1;
(statearr_15880_17073[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (1))){
var state_15869__$1 = state_15869;
var statearr_15882_17074 = state_15869__$1;
(statearr_15882_17074[(2)] = null);

(statearr_15882_17074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (24))){
var inst_15770 = (state_15869[(7)]);
var inst_15789 = (state_15869[(2)]);
var inst_15790 = cljs.core.next(inst_15770);
var inst_15748 = inst_15790;
var inst_15749 = null;
var inst_15750 = (0);
var inst_15751 = (0);
var state_15869__$1 = (function (){var statearr_15883 = state_15869;
(statearr_15883[(13)] = inst_15789);

(statearr_15883[(14)] = inst_15748);

(statearr_15883[(15)] = inst_15749);

(statearr_15883[(16)] = inst_15750);

(statearr_15883[(17)] = inst_15751);

return statearr_15883;
})();
var statearr_15884_17075 = state_15869__$1;
(statearr_15884_17075[(2)] = null);

(statearr_15884_17075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (39))){
var state_15869__$1 = state_15869;
var statearr_15888_17076 = state_15869__$1;
(statearr_15888_17076[(2)] = null);

(statearr_15888_17076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (4))){
var inst_15739 = (state_15869[(12)]);
var inst_15739__$1 = (state_15869[(2)]);
var inst_15740 = (inst_15739__$1 == null);
var state_15869__$1 = (function (){var statearr_15889 = state_15869;
(statearr_15889[(12)] = inst_15739__$1);

return statearr_15889;
})();
if(cljs.core.truth_(inst_15740)){
var statearr_15890_17077 = state_15869__$1;
(statearr_15890_17077[(1)] = (5));

} else {
var statearr_15891_17078 = state_15869__$1;
(statearr_15891_17078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (15))){
var inst_15751 = (state_15869[(17)]);
var inst_15748 = (state_15869[(14)]);
var inst_15749 = (state_15869[(15)]);
var inst_15750 = (state_15869[(16)]);
var inst_15766 = (state_15869[(2)]);
var inst_15767 = (inst_15751 + (1));
var tmp15885 = inst_15748;
var tmp15886 = inst_15750;
var tmp15887 = inst_15749;
var inst_15748__$1 = tmp15885;
var inst_15749__$1 = tmp15887;
var inst_15750__$1 = tmp15886;
var inst_15751__$1 = inst_15767;
var state_15869__$1 = (function (){var statearr_15894 = state_15869;
(statearr_15894[(18)] = inst_15766);

(statearr_15894[(14)] = inst_15748__$1);

(statearr_15894[(15)] = inst_15749__$1);

(statearr_15894[(16)] = inst_15750__$1);

(statearr_15894[(17)] = inst_15751__$1);

return statearr_15894;
})();
var statearr_15895_17079 = state_15869__$1;
(statearr_15895_17079[(2)] = null);

(statearr_15895_17079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (21))){
var inst_15793 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15900_17080 = state_15869__$1;
(statearr_15900_17080[(2)] = inst_15793);

(statearr_15900_17080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (31))){
var inst_15819 = (state_15869[(11)]);
var inst_15823 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15819);
var state_15869__$1 = state_15869;
var statearr_15901_17081 = state_15869__$1;
(statearr_15901_17081[(2)] = inst_15823);

(statearr_15901_17081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (32))){
var inst_15814 = (state_15869[(10)]);
var inst_15811 = (state_15869[(19)]);
var inst_15812 = (state_15869[(9)]);
var inst_15813 = (state_15869[(20)]);
var inst_15825 = (state_15869[(2)]);
var inst_15826 = (inst_15814 + (1));
var tmp15897 = inst_15813;
var tmp15898 = inst_15811;
var tmp15899 = inst_15812;
var inst_15811__$1 = tmp15898;
var inst_15812__$1 = tmp15899;
var inst_15813__$1 = tmp15897;
var inst_15814__$1 = inst_15826;
var state_15869__$1 = (function (){var statearr_15904 = state_15869;
(statearr_15904[(21)] = inst_15825);

(statearr_15904[(19)] = inst_15811__$1);

(statearr_15904[(9)] = inst_15812__$1);

(statearr_15904[(20)] = inst_15813__$1);

(statearr_15904[(10)] = inst_15814__$1);

return statearr_15904;
})();
var statearr_15905_17085 = state_15869__$1;
(statearr_15905_17085[(2)] = null);

(statearr_15905_17085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (40))){
var inst_15838 = (state_15869[(22)]);
var inst_15842 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15838);
var state_15869__$1 = state_15869;
var statearr_15906_17086 = state_15869__$1;
(statearr_15906_17086[(2)] = inst_15842);

(statearr_15906_17086[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (33))){
var inst_15829 = (state_15869[(23)]);
var inst_15831 = cljs.core.chunked_seq_QMARK_(inst_15829);
var state_15869__$1 = state_15869;
if(inst_15831){
var statearr_15907_17087 = state_15869__$1;
(statearr_15907_17087[(1)] = (36));

} else {
var statearr_15909_17088 = state_15869__$1;
(statearr_15909_17088[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (13))){
var inst_15760 = (state_15869[(24)]);
var inst_15763 = cljs.core.async.close_BANG_(inst_15760);
var state_15869__$1 = state_15869;
var statearr_15910_17089 = state_15869__$1;
(statearr_15910_17089[(2)] = inst_15763);

(statearr_15910_17089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (22))){
var inst_15783 = (state_15869[(8)]);
var inst_15786 = cljs.core.async.close_BANG_(inst_15783);
var state_15869__$1 = state_15869;
var statearr_15913_17090 = state_15869__$1;
(statearr_15913_17090[(2)] = inst_15786);

(statearr_15913_17090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (36))){
var inst_15829 = (state_15869[(23)]);
var inst_15833 = cljs.core.chunk_first(inst_15829);
var inst_15834 = cljs.core.chunk_rest(inst_15829);
var inst_15835 = cljs.core.count(inst_15833);
var inst_15811 = inst_15834;
var inst_15812 = inst_15833;
var inst_15813 = inst_15835;
var inst_15814 = (0);
var state_15869__$1 = (function (){var statearr_15914 = state_15869;
(statearr_15914[(19)] = inst_15811);

(statearr_15914[(9)] = inst_15812);

(statearr_15914[(20)] = inst_15813);

(statearr_15914[(10)] = inst_15814);

return statearr_15914;
})();
var statearr_15915_17091 = state_15869__$1;
(statearr_15915_17091[(2)] = null);

(statearr_15915_17091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (41))){
var inst_15829 = (state_15869[(23)]);
var inst_15844 = (state_15869[(2)]);
var inst_15845 = cljs.core.next(inst_15829);
var inst_15811 = inst_15845;
var inst_15812 = null;
var inst_15813 = (0);
var inst_15814 = (0);
var state_15869__$1 = (function (){var statearr_15919 = state_15869;
(statearr_15919[(25)] = inst_15844);

(statearr_15919[(19)] = inst_15811);

(statearr_15919[(9)] = inst_15812);

(statearr_15919[(20)] = inst_15813);

(statearr_15919[(10)] = inst_15814);

return statearr_15919;
})();
var statearr_15920_17092 = state_15869__$1;
(statearr_15920_17092[(2)] = null);

(statearr_15920_17092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (43))){
var state_15869__$1 = state_15869;
var statearr_15921_17093 = state_15869__$1;
(statearr_15921_17093[(2)] = null);

(statearr_15921_17093[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (29))){
var inst_15853 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15922_17094 = state_15869__$1;
(statearr_15922_17094[(2)] = inst_15853);

(statearr_15922_17094[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (44))){
var inst_15862 = (state_15869[(2)]);
var state_15869__$1 = (function (){var statearr_15923 = state_15869;
(statearr_15923[(26)] = inst_15862);

return statearr_15923;
})();
var statearr_15924_17095 = state_15869__$1;
(statearr_15924_17095[(2)] = null);

(statearr_15924_17095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (6))){
var inst_15803 = (state_15869[(27)]);
var inst_15802 = cljs.core.deref(cs);
var inst_15803__$1 = cljs.core.keys(inst_15802);
var inst_15804 = cljs.core.count(inst_15803__$1);
var inst_15805 = cljs.core.reset_BANG_(dctr,inst_15804);
var inst_15810 = cljs.core.seq(inst_15803__$1);
var inst_15811 = inst_15810;
var inst_15812 = null;
var inst_15813 = (0);
var inst_15814 = (0);
var state_15869__$1 = (function (){var statearr_15927 = state_15869;
(statearr_15927[(27)] = inst_15803__$1);

(statearr_15927[(28)] = inst_15805);

(statearr_15927[(19)] = inst_15811);

(statearr_15927[(9)] = inst_15812);

(statearr_15927[(20)] = inst_15813);

(statearr_15927[(10)] = inst_15814);

return statearr_15927;
})();
var statearr_15931_17096 = state_15869__$1;
(statearr_15931_17096[(2)] = null);

(statearr_15931_17096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (28))){
var inst_15811 = (state_15869[(19)]);
var inst_15829 = (state_15869[(23)]);
var inst_15829__$1 = cljs.core.seq(inst_15811);
var state_15869__$1 = (function (){var statearr_15932 = state_15869;
(statearr_15932[(23)] = inst_15829__$1);

return statearr_15932;
})();
if(inst_15829__$1){
var statearr_15933_17097 = state_15869__$1;
(statearr_15933_17097[(1)] = (33));

} else {
var statearr_15934_17098 = state_15869__$1;
(statearr_15934_17098[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (25))){
var inst_15814 = (state_15869[(10)]);
var inst_15813 = (state_15869[(20)]);
var inst_15816 = (inst_15814 < inst_15813);
var inst_15817 = inst_15816;
var state_15869__$1 = state_15869;
if(cljs.core.truth_(inst_15817)){
var statearr_15936_17099 = state_15869__$1;
(statearr_15936_17099[(1)] = (27));

} else {
var statearr_15937_17100 = state_15869__$1;
(statearr_15937_17100[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (34))){
var state_15869__$1 = state_15869;
var statearr_15939_17101 = state_15869__$1;
(statearr_15939_17101[(2)] = null);

(statearr_15939_17101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (17))){
var state_15869__$1 = state_15869;
var statearr_15940_17102 = state_15869__$1;
(statearr_15940_17102[(2)] = null);

(statearr_15940_17102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (3))){
var inst_15867 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15869__$1,inst_15867);
} else {
if((state_val_15870 === (12))){
var inst_15798 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15941_17103 = state_15869__$1;
(statearr_15941_17103[(2)] = inst_15798);

(statearr_15941_17103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (2))){
var state_15869__$1 = state_15869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15869__$1,(4),ch);
} else {
if((state_val_15870 === (23))){
var state_15869__$1 = state_15869;
var statearr_15943_17104 = state_15869__$1;
(statearr_15943_17104[(2)] = null);

(statearr_15943_17104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (35))){
var inst_15851 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15944_17105 = state_15869__$1;
(statearr_15944_17105[(2)] = inst_15851);

(statearr_15944_17105[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (19))){
var inst_15770 = (state_15869[(7)]);
var inst_15774 = cljs.core.chunk_first(inst_15770);
var inst_15775 = cljs.core.chunk_rest(inst_15770);
var inst_15776 = cljs.core.count(inst_15774);
var inst_15748 = inst_15775;
var inst_15749 = inst_15774;
var inst_15750 = inst_15776;
var inst_15751 = (0);
var state_15869__$1 = (function (){var statearr_15948 = state_15869;
(statearr_15948[(14)] = inst_15748);

(statearr_15948[(15)] = inst_15749);

(statearr_15948[(16)] = inst_15750);

(statearr_15948[(17)] = inst_15751);

return statearr_15948;
})();
var statearr_15949_17106 = state_15869__$1;
(statearr_15949_17106[(2)] = null);

(statearr_15949_17106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (11))){
var inst_15748 = (state_15869[(14)]);
var inst_15770 = (state_15869[(7)]);
var inst_15770__$1 = cljs.core.seq(inst_15748);
var state_15869__$1 = (function (){var statearr_15950 = state_15869;
(statearr_15950[(7)] = inst_15770__$1);

return statearr_15950;
})();
if(inst_15770__$1){
var statearr_15951_17110 = state_15869__$1;
(statearr_15951_17110[(1)] = (16));

} else {
var statearr_15952_17111 = state_15869__$1;
(statearr_15952_17111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (9))){
var inst_15800 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15953_17112 = state_15869__$1;
(statearr_15953_17112[(2)] = inst_15800);

(statearr_15953_17112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (5))){
var inst_15746 = cljs.core.deref(cs);
var inst_15747 = cljs.core.seq(inst_15746);
var inst_15748 = inst_15747;
var inst_15749 = null;
var inst_15750 = (0);
var inst_15751 = (0);
var state_15869__$1 = (function (){var statearr_15954 = state_15869;
(statearr_15954[(14)] = inst_15748);

(statearr_15954[(15)] = inst_15749);

(statearr_15954[(16)] = inst_15750);

(statearr_15954[(17)] = inst_15751);

return statearr_15954;
})();
var statearr_15955_17113 = state_15869__$1;
(statearr_15955_17113[(2)] = null);

(statearr_15955_17113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (14))){
var state_15869__$1 = state_15869;
var statearr_15963_17114 = state_15869__$1;
(statearr_15963_17114[(2)] = null);

(statearr_15963_17114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (45))){
var inst_15859 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15970_17115 = state_15869__$1;
(statearr_15970_17115[(2)] = inst_15859);

(statearr_15970_17115[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (26))){
var inst_15803 = (state_15869[(27)]);
var inst_15855 = (state_15869[(2)]);
var inst_15856 = cljs.core.seq(inst_15803);
var state_15869__$1 = (function (){var statearr_15979 = state_15869;
(statearr_15979[(29)] = inst_15855);

return statearr_15979;
})();
if(inst_15856){
var statearr_15989_17116 = state_15869__$1;
(statearr_15989_17116[(1)] = (42));

} else {
var statearr_15996_17117 = state_15869__$1;
(statearr_15996_17117[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (16))){
var inst_15770 = (state_15869[(7)]);
var inst_15772 = cljs.core.chunked_seq_QMARK_(inst_15770);
var state_15869__$1 = state_15869;
if(inst_15772){
var statearr_16007_17118 = state_15869__$1;
(statearr_16007_17118[(1)] = (19));

} else {
var statearr_16008_17119 = state_15869__$1;
(statearr_16008_17119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (38))){
var inst_15848 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_16010_17120 = state_15869__$1;
(statearr_16010_17120[(2)] = inst_15848);

(statearr_16010_17120[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (30))){
var state_15869__$1 = state_15869;
var statearr_16011_17121 = state_15869__$1;
(statearr_16011_17121[(2)] = null);

(statearr_16011_17121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (10))){
var inst_15749 = (state_15869[(15)]);
var inst_15751 = (state_15869[(17)]);
var inst_15759 = cljs.core._nth(inst_15749,inst_15751);
var inst_15760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15759,(0),null);
var inst_15761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15759,(1),null);
var state_15869__$1 = (function (){var statearr_16016 = state_15869;
(statearr_16016[(24)] = inst_15760);

return statearr_16016;
})();
if(cljs.core.truth_(inst_15761)){
var statearr_16017_17122 = state_15869__$1;
(statearr_16017_17122[(1)] = (13));

} else {
var statearr_16018_17123 = state_15869__$1;
(statearr_16018_17123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (18))){
var inst_15796 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_16019_17124 = state_15869__$1;
(statearr_16019_17124[(2)] = inst_15796);

(statearr_16019_17124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (42))){
var state_15869__$1 = state_15869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15869__$1,(45),dchan);
} else {
if((state_val_15870 === (37))){
var inst_15829 = (state_15869[(23)]);
var inst_15838 = (state_15869[(22)]);
var inst_15739 = (state_15869[(12)]);
var inst_15838__$1 = cljs.core.first(inst_15829);
var inst_15839 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15838__$1,inst_15739,done);
var state_15869__$1 = (function (){var statearr_16020 = state_15869;
(statearr_16020[(22)] = inst_15838__$1);

return statearr_16020;
})();
if(cljs.core.truth_(inst_15839)){
var statearr_16021_17125 = state_15869__$1;
(statearr_16021_17125[(1)] = (39));

} else {
var statearr_16022_17126 = state_15869__$1;
(statearr_16022_17126[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (8))){
var inst_15751 = (state_15869[(17)]);
var inst_15750 = (state_15869[(16)]);
var inst_15753 = (inst_15751 < inst_15750);
var inst_15754 = inst_15753;
var state_15869__$1 = state_15869;
if(cljs.core.truth_(inst_15754)){
var statearr_16024_17127 = state_15869__$1;
(statearr_16024_17127[(1)] = (10));

} else {
var statearr_16027_17128 = state_15869__$1;
(statearr_16027_17128[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__14777__auto__ = null;
var cljs$core$async$mult_$_state_machine__14777__auto____0 = (function (){
var statearr_16033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16033[(0)] = cljs$core$async$mult_$_state_machine__14777__auto__);

(statearr_16033[(1)] = (1));

return statearr_16033;
});
var cljs$core$async$mult_$_state_machine__14777__auto____1 = (function (state_15869){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_15869);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16034){var ex__14780__auto__ = e16034;
var statearr_16036_17129 = state_15869;
(statearr_16036_17129[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_15869[(4)]))){
var statearr_16037_17130 = state_15869;
(statearr_16037_17130[(1)] = cljs.core.first((state_15869[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17131 = state_15869;
state_15869 = G__17131;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14777__auto__ = function(state_15869){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14777__auto____1.call(this,state_15869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14777__auto____0;
cljs$core$async$mult_$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14777__auto____1;
return cljs$core$async$mult_$_state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16038 = f__14889__auto__();
(statearr_16038[(6)] = c__14888__auto___17064);

return statearr_16038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16040 = arguments.length;
switch (G__16040) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17133 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17133(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17134 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17134(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17135 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17135(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17136 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17136(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17140 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17140(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___17141 = arguments.length;
var i__5750__auto___17142 = (0);
while(true){
if((i__5750__auto___17142 < len__5749__auto___17141)){
args__5755__auto__.push((arguments[i__5750__auto___17142]));

var G__17143 = (i__5750__auto___17142 + (1));
i__5750__auto___17142 = G__17143;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16062){
var map__16063 = p__16062;
var map__16063__$1 = cljs.core.__destructure_map(map__16063);
var opts = map__16063__$1;
var statearr_16065_17144 = state;
(statearr_16065_17144[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16066_17145 = state;
(statearr_16066_17145[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16071_17146 = state;
(statearr_16071_17146[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16056){
var G__16057 = cljs.core.first(seq16056);
var seq16056__$1 = cljs.core.next(seq16056);
var G__16058 = cljs.core.first(seq16056__$1);
var seq16056__$2 = cljs.core.next(seq16056__$1);
var G__16059 = cljs.core.first(seq16056__$2);
var seq16056__$3 = cljs.core.next(seq16056__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16057,G__16058,G__16059,seq16056__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16073 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16074){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16074 = meta16074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16075,meta16074__$1){
var self__ = this;
var _16075__$1 = this;
return (new cljs.core.async.t_cljs$core$async16073(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16074__$1));
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16075){
var self__ = this;
var _16075__$1 = this;
return self__.meta16074;
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16074","meta16074",177213749,null)], null);
}));

(cljs.core.async.t_cljs$core$async16073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16073");

(cljs.core.async.t_cljs$core$async16073.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16073.
 */
cljs.core.async.__GT_t_cljs$core$async16073 = (function cljs$core$async$__GT_t_cljs$core$async16073(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16074){
return (new cljs.core.async.t_cljs$core$async16073(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16074));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16073(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14888__auto___17147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16143){
var state_val_16144 = (state_16143[(1)]);
if((state_val_16144 === (7))){
var inst_16103 = (state_16143[(2)]);
var state_16143__$1 = state_16143;
if(cljs.core.truth_(inst_16103)){
var statearr_16145_17148 = state_16143__$1;
(statearr_16145_17148[(1)] = (8));

} else {
var statearr_16146_17149 = state_16143__$1;
(statearr_16146_17149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (20))){
var inst_16096 = (state_16143[(7)]);
var state_16143__$1 = state_16143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16143__$1,(23),out,inst_16096);
} else {
if((state_val_16144 === (1))){
var inst_16079 = calc_state();
var inst_16080 = cljs.core.__destructure_map(inst_16079);
var inst_16081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16080,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16080,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16080,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16084 = inst_16079;
var state_16143__$1 = (function (){var statearr_16147 = state_16143;
(statearr_16147[(8)] = inst_16081);

(statearr_16147[(9)] = inst_16082);

(statearr_16147[(10)] = inst_16083);

(statearr_16147[(11)] = inst_16084);

return statearr_16147;
})();
var statearr_16148_17150 = state_16143__$1;
(statearr_16148_17150[(2)] = null);

(statearr_16148_17150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (24))){
var inst_16087 = (state_16143[(12)]);
var inst_16084 = inst_16087;
var state_16143__$1 = (function (){var statearr_16149 = state_16143;
(statearr_16149[(11)] = inst_16084);

return statearr_16149;
})();
var statearr_16150_17151 = state_16143__$1;
(statearr_16150_17151[(2)] = null);

(statearr_16150_17151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (4))){
var inst_16096 = (state_16143[(7)]);
var inst_16098 = (state_16143[(13)]);
var inst_16095 = (state_16143[(2)]);
var inst_16096__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16095,(0),null);
var inst_16097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16095,(1),null);
var inst_16098__$1 = (inst_16096__$1 == null);
var state_16143__$1 = (function (){var statearr_16151 = state_16143;
(statearr_16151[(7)] = inst_16096__$1);

(statearr_16151[(14)] = inst_16097);

(statearr_16151[(13)] = inst_16098__$1);

return statearr_16151;
})();
if(cljs.core.truth_(inst_16098__$1)){
var statearr_16152_17152 = state_16143__$1;
(statearr_16152_17152[(1)] = (5));

} else {
var statearr_16153_17153 = state_16143__$1;
(statearr_16153_17153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (15))){
var inst_16088 = (state_16143[(15)]);
var inst_16117 = (state_16143[(16)]);
var inst_16117__$1 = cljs.core.empty_QMARK_(inst_16088);
var state_16143__$1 = (function (){var statearr_16154 = state_16143;
(statearr_16154[(16)] = inst_16117__$1);

return statearr_16154;
})();
if(inst_16117__$1){
var statearr_16155_17156 = state_16143__$1;
(statearr_16155_17156[(1)] = (17));

} else {
var statearr_16156_17157 = state_16143__$1;
(statearr_16156_17157[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (21))){
var inst_16087 = (state_16143[(12)]);
var inst_16084 = inst_16087;
var state_16143__$1 = (function (){var statearr_16157 = state_16143;
(statearr_16157[(11)] = inst_16084);

return statearr_16157;
})();
var statearr_16158_17158 = state_16143__$1;
(statearr_16158_17158[(2)] = null);

(statearr_16158_17158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (13))){
var inst_16110 = (state_16143[(2)]);
var inst_16111 = calc_state();
var inst_16084 = inst_16111;
var state_16143__$1 = (function (){var statearr_16159 = state_16143;
(statearr_16159[(17)] = inst_16110);

(statearr_16159[(11)] = inst_16084);

return statearr_16159;
})();
var statearr_16160_17159 = state_16143__$1;
(statearr_16160_17159[(2)] = null);

(statearr_16160_17159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (22))){
var inst_16137 = (state_16143[(2)]);
var state_16143__$1 = state_16143;
var statearr_16161_17161 = state_16143__$1;
(statearr_16161_17161[(2)] = inst_16137);

(statearr_16161_17161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (6))){
var inst_16097 = (state_16143[(14)]);
var inst_16101 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16097,change);
var state_16143__$1 = state_16143;
var statearr_16162_17163 = state_16143__$1;
(statearr_16162_17163[(2)] = inst_16101);

(statearr_16162_17163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (25))){
var state_16143__$1 = state_16143;
var statearr_16163_17164 = state_16143__$1;
(statearr_16163_17164[(2)] = null);

(statearr_16163_17164[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (17))){
var inst_16089 = (state_16143[(18)]);
var inst_16097 = (state_16143[(14)]);
var inst_16119 = (inst_16089.cljs$core$IFn$_invoke$arity$1 ? inst_16089.cljs$core$IFn$_invoke$arity$1(inst_16097) : inst_16089.call(null,inst_16097));
var inst_16120 = cljs.core.not(inst_16119);
var state_16143__$1 = state_16143;
var statearr_16164_17165 = state_16143__$1;
(statearr_16164_17165[(2)] = inst_16120);

(statearr_16164_17165[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (3))){
var inst_16141 = (state_16143[(2)]);
var state_16143__$1 = state_16143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16143__$1,inst_16141);
} else {
if((state_val_16144 === (12))){
var state_16143__$1 = state_16143;
var statearr_16165_17166 = state_16143__$1;
(statearr_16165_17166[(2)] = null);

(statearr_16165_17166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (2))){
var inst_16084 = (state_16143[(11)]);
var inst_16087 = (state_16143[(12)]);
var inst_16087__$1 = cljs.core.__destructure_map(inst_16084);
var inst_16088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16087__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16087__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16087__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16143__$1 = (function (){var statearr_16166 = state_16143;
(statearr_16166[(12)] = inst_16087__$1);

(statearr_16166[(15)] = inst_16088);

(statearr_16166[(18)] = inst_16089);

return statearr_16166;
})();
return cljs.core.async.ioc_alts_BANG_(state_16143__$1,(4),inst_16090);
} else {
if((state_val_16144 === (23))){
var inst_16128 = (state_16143[(2)]);
var state_16143__$1 = state_16143;
if(cljs.core.truth_(inst_16128)){
var statearr_16167_17167 = state_16143__$1;
(statearr_16167_17167[(1)] = (24));

} else {
var statearr_16168_17168 = state_16143__$1;
(statearr_16168_17168[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (19))){
var inst_16123 = (state_16143[(2)]);
var state_16143__$1 = state_16143;
var statearr_16169_17169 = state_16143__$1;
(statearr_16169_17169[(2)] = inst_16123);

(statearr_16169_17169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (11))){
var inst_16097 = (state_16143[(14)]);
var inst_16107 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16097);
var state_16143__$1 = state_16143;
var statearr_16170_17170 = state_16143__$1;
(statearr_16170_17170[(2)] = inst_16107);

(statearr_16170_17170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (9))){
var inst_16088 = (state_16143[(15)]);
var inst_16097 = (state_16143[(14)]);
var inst_16114 = (state_16143[(19)]);
var inst_16114__$1 = (inst_16088.cljs$core$IFn$_invoke$arity$1 ? inst_16088.cljs$core$IFn$_invoke$arity$1(inst_16097) : inst_16088.call(null,inst_16097));
var state_16143__$1 = (function (){var statearr_16171 = state_16143;
(statearr_16171[(19)] = inst_16114__$1);

return statearr_16171;
})();
if(cljs.core.truth_(inst_16114__$1)){
var statearr_16172_17171 = state_16143__$1;
(statearr_16172_17171[(1)] = (14));

} else {
var statearr_16173_17172 = state_16143__$1;
(statearr_16173_17172[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (5))){
var inst_16098 = (state_16143[(13)]);
var state_16143__$1 = state_16143;
var statearr_16174_17173 = state_16143__$1;
(statearr_16174_17173[(2)] = inst_16098);

(statearr_16174_17173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (14))){
var inst_16114 = (state_16143[(19)]);
var state_16143__$1 = state_16143;
var statearr_16175_17174 = state_16143__$1;
(statearr_16175_17174[(2)] = inst_16114);

(statearr_16175_17174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (26))){
var inst_16133 = (state_16143[(2)]);
var state_16143__$1 = state_16143;
var statearr_16176_17179 = state_16143__$1;
(statearr_16176_17179[(2)] = inst_16133);

(statearr_16176_17179[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (16))){
var inst_16125 = (state_16143[(2)]);
var state_16143__$1 = state_16143;
if(cljs.core.truth_(inst_16125)){
var statearr_16177_17180 = state_16143__$1;
(statearr_16177_17180[(1)] = (20));

} else {
var statearr_16179_17181 = state_16143__$1;
(statearr_16179_17181[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (10))){
var inst_16139 = (state_16143[(2)]);
var state_16143__$1 = state_16143;
var statearr_16180_17185 = state_16143__$1;
(statearr_16180_17185[(2)] = inst_16139);

(statearr_16180_17185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (18))){
var inst_16117 = (state_16143[(16)]);
var state_16143__$1 = state_16143;
var statearr_16181_17186 = state_16143__$1;
(statearr_16181_17186[(2)] = inst_16117);

(statearr_16181_17186[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16144 === (8))){
var inst_16096 = (state_16143[(7)]);
var inst_16105 = (inst_16096 == null);
var state_16143__$1 = state_16143;
if(cljs.core.truth_(inst_16105)){
var statearr_16182_17187 = state_16143__$1;
(statearr_16182_17187[(1)] = (11));

} else {
var statearr_16183_17188 = state_16143__$1;
(statearr_16183_17188[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14777__auto__ = null;
var cljs$core$async$mix_$_state_machine__14777__auto____0 = (function (){
var statearr_16184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16184[(0)] = cljs$core$async$mix_$_state_machine__14777__auto__);

(statearr_16184[(1)] = (1));

return statearr_16184;
});
var cljs$core$async$mix_$_state_machine__14777__auto____1 = (function (state_16143){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16143);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16186){var ex__14780__auto__ = e16186;
var statearr_16187_17189 = state_16143;
(statearr_16187_17189[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16143[(4)]))){
var statearr_16188_17190 = state_16143;
(statearr_16188_17190[(1)] = cljs.core.first((state_16143[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17191 = state_16143;
state_16143 = G__17191;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14777__auto__ = function(state_16143){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14777__auto____1.call(this,state_16143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14777__auto____0;
cljs$core$async$mix_$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14777__auto____1;
return cljs$core$async$mix_$_state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16189 = f__14889__auto__();
(statearr_16189[(6)] = c__14888__auto___17147);

return statearr_16189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17192 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17192(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17196 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17196(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17197 = (function() {
var G__17198 = null;
var G__17198__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17198__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17198 = function(p,v){
switch(arguments.length){
case 1:
return G__17198__1.call(this,p);
case 2:
return G__17198__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17198.cljs$core$IFn$_invoke$arity$1 = G__17198__1;
G__17198.cljs$core$IFn$_invoke$arity$2 = G__17198__2;
return G__17198;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16216 = arguments.length;
switch (G__16216) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17197(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17197(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16224 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16225){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16225 = meta16225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16226,meta16225__$1){
var self__ = this;
var _16226__$1 = this;
return (new cljs.core.async.t_cljs$core$async16224(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16225__$1));
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16226){
var self__ = this;
var _16226__$1 = this;
return self__.meta16225;
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16225","meta16225",-1509747925,null)], null);
}));

(cljs.core.async.t_cljs$core$async16224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16224");

(cljs.core.async.t_cljs$core$async16224.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16224.
 */
cljs.core.async.__GT_t_cljs$core$async16224 = (function cljs$core$async$__GT_t_cljs$core$async16224(ch,topic_fn,buf_fn,mults,ensure_mult,meta16225){
return (new cljs.core.async.t_cljs$core$async16224(ch,topic_fn,buf_fn,mults,ensure_mult,meta16225));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16223 = arguments.length;
switch (G__16223) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16220_SHARP_){
if(cljs.core.truth_((p1__16220_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16220_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16220_SHARP_.call(null,topic)))){
return p1__16220_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16220_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16224(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14888__auto___17207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16299){
var state_val_16300 = (state_16299[(1)]);
if((state_val_16300 === (7))){
var inst_16295 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16301_17208 = state_16299__$1;
(statearr_16301_17208[(2)] = inst_16295);

(statearr_16301_17208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (20))){
var state_16299__$1 = state_16299;
var statearr_16302_17209 = state_16299__$1;
(statearr_16302_17209[(2)] = null);

(statearr_16302_17209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (1))){
var state_16299__$1 = state_16299;
var statearr_16303_17210 = state_16299__$1;
(statearr_16303_17210[(2)] = null);

(statearr_16303_17210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (24))){
var inst_16278 = (state_16299[(7)]);
var inst_16287 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16278);
var state_16299__$1 = state_16299;
var statearr_16304_17211 = state_16299__$1;
(statearr_16304_17211[(2)] = inst_16287);

(statearr_16304_17211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (4))){
var inst_16230 = (state_16299[(8)]);
var inst_16230__$1 = (state_16299[(2)]);
var inst_16231 = (inst_16230__$1 == null);
var state_16299__$1 = (function (){var statearr_16305 = state_16299;
(statearr_16305[(8)] = inst_16230__$1);

return statearr_16305;
})();
if(cljs.core.truth_(inst_16231)){
var statearr_16306_17212 = state_16299__$1;
(statearr_16306_17212[(1)] = (5));

} else {
var statearr_16307_17213 = state_16299__$1;
(statearr_16307_17213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (15))){
var inst_16272 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16308_17215 = state_16299__$1;
(statearr_16308_17215[(2)] = inst_16272);

(statearr_16308_17215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (21))){
var inst_16292 = (state_16299[(2)]);
var state_16299__$1 = (function (){var statearr_16309 = state_16299;
(statearr_16309[(9)] = inst_16292);

return statearr_16309;
})();
var statearr_16310_17219 = state_16299__$1;
(statearr_16310_17219[(2)] = null);

(statearr_16310_17219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (13))){
var inst_16254 = (state_16299[(10)]);
var inst_16256 = cljs.core.chunked_seq_QMARK_(inst_16254);
var state_16299__$1 = state_16299;
if(inst_16256){
var statearr_16311_17220 = state_16299__$1;
(statearr_16311_17220[(1)] = (16));

} else {
var statearr_16312_17221 = state_16299__$1;
(statearr_16312_17221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (22))){
var inst_16284 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
if(cljs.core.truth_(inst_16284)){
var statearr_16313_17222 = state_16299__$1;
(statearr_16313_17222[(1)] = (23));

} else {
var statearr_16314_17223 = state_16299__$1;
(statearr_16314_17223[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (6))){
var inst_16230 = (state_16299[(8)]);
var inst_16278 = (state_16299[(7)]);
var inst_16280 = (state_16299[(11)]);
var inst_16278__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16230) : topic_fn.call(null,inst_16230));
var inst_16279 = cljs.core.deref(mults);
var inst_16280__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16279,inst_16278__$1);
var state_16299__$1 = (function (){var statearr_16315 = state_16299;
(statearr_16315[(7)] = inst_16278__$1);

(statearr_16315[(11)] = inst_16280__$1);

return statearr_16315;
})();
if(cljs.core.truth_(inst_16280__$1)){
var statearr_16316_17224 = state_16299__$1;
(statearr_16316_17224[(1)] = (19));

} else {
var statearr_16317_17225 = state_16299__$1;
(statearr_16317_17225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (25))){
var inst_16289 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16318_17226 = state_16299__$1;
(statearr_16318_17226[(2)] = inst_16289);

(statearr_16318_17226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (17))){
var inst_16254 = (state_16299[(10)]);
var inst_16263 = cljs.core.first(inst_16254);
var inst_16264 = cljs.core.async.muxch_STAR_(inst_16263);
var inst_16265 = cljs.core.async.close_BANG_(inst_16264);
var inst_16266 = cljs.core.next(inst_16254);
var inst_16240 = inst_16266;
var inst_16241 = null;
var inst_16242 = (0);
var inst_16243 = (0);
var state_16299__$1 = (function (){var statearr_16319 = state_16299;
(statearr_16319[(12)] = inst_16265);

(statearr_16319[(13)] = inst_16240);

(statearr_16319[(14)] = inst_16241);

(statearr_16319[(15)] = inst_16242);

(statearr_16319[(16)] = inst_16243);

return statearr_16319;
})();
var statearr_16320_17227 = state_16299__$1;
(statearr_16320_17227[(2)] = null);

(statearr_16320_17227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (3))){
var inst_16297 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16299__$1,inst_16297);
} else {
if((state_val_16300 === (12))){
var inst_16274 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16321_17228 = state_16299__$1;
(statearr_16321_17228[(2)] = inst_16274);

(statearr_16321_17228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (2))){
var state_16299__$1 = state_16299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16299__$1,(4),ch);
} else {
if((state_val_16300 === (23))){
var state_16299__$1 = state_16299;
var statearr_16322_17229 = state_16299__$1;
(statearr_16322_17229[(2)] = null);

(statearr_16322_17229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (19))){
var inst_16280 = (state_16299[(11)]);
var inst_16230 = (state_16299[(8)]);
var inst_16282 = cljs.core.async.muxch_STAR_(inst_16280);
var state_16299__$1 = state_16299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16299__$1,(22),inst_16282,inst_16230);
} else {
if((state_val_16300 === (11))){
var inst_16240 = (state_16299[(13)]);
var inst_16254 = (state_16299[(10)]);
var inst_16254__$1 = cljs.core.seq(inst_16240);
var state_16299__$1 = (function (){var statearr_16323 = state_16299;
(statearr_16323[(10)] = inst_16254__$1);

return statearr_16323;
})();
if(inst_16254__$1){
var statearr_16324_17230 = state_16299__$1;
(statearr_16324_17230[(1)] = (13));

} else {
var statearr_16325_17231 = state_16299__$1;
(statearr_16325_17231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (9))){
var inst_16276 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16326_17232 = state_16299__$1;
(statearr_16326_17232[(2)] = inst_16276);

(statearr_16326_17232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (5))){
var inst_16237 = cljs.core.deref(mults);
var inst_16238 = cljs.core.vals(inst_16237);
var inst_16239 = cljs.core.seq(inst_16238);
var inst_16240 = inst_16239;
var inst_16241 = null;
var inst_16242 = (0);
var inst_16243 = (0);
var state_16299__$1 = (function (){var statearr_16327 = state_16299;
(statearr_16327[(13)] = inst_16240);

(statearr_16327[(14)] = inst_16241);

(statearr_16327[(15)] = inst_16242);

(statearr_16327[(16)] = inst_16243);

return statearr_16327;
})();
var statearr_16328_17233 = state_16299__$1;
(statearr_16328_17233[(2)] = null);

(statearr_16328_17233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (14))){
var state_16299__$1 = state_16299;
var statearr_16332_17234 = state_16299__$1;
(statearr_16332_17234[(2)] = null);

(statearr_16332_17234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (16))){
var inst_16254 = (state_16299[(10)]);
var inst_16258 = cljs.core.chunk_first(inst_16254);
var inst_16259 = cljs.core.chunk_rest(inst_16254);
var inst_16260 = cljs.core.count(inst_16258);
var inst_16240 = inst_16259;
var inst_16241 = inst_16258;
var inst_16242 = inst_16260;
var inst_16243 = (0);
var state_16299__$1 = (function (){var statearr_16333 = state_16299;
(statearr_16333[(13)] = inst_16240);

(statearr_16333[(14)] = inst_16241);

(statearr_16333[(15)] = inst_16242);

(statearr_16333[(16)] = inst_16243);

return statearr_16333;
})();
var statearr_16334_17235 = state_16299__$1;
(statearr_16334_17235[(2)] = null);

(statearr_16334_17235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (10))){
var inst_16241 = (state_16299[(14)]);
var inst_16243 = (state_16299[(16)]);
var inst_16240 = (state_16299[(13)]);
var inst_16242 = (state_16299[(15)]);
var inst_16248 = cljs.core._nth(inst_16241,inst_16243);
var inst_16249 = cljs.core.async.muxch_STAR_(inst_16248);
var inst_16250 = cljs.core.async.close_BANG_(inst_16249);
var inst_16251 = (inst_16243 + (1));
var tmp16329 = inst_16240;
var tmp16330 = inst_16242;
var tmp16331 = inst_16241;
var inst_16240__$1 = tmp16329;
var inst_16241__$1 = tmp16331;
var inst_16242__$1 = tmp16330;
var inst_16243__$1 = inst_16251;
var state_16299__$1 = (function (){var statearr_16335 = state_16299;
(statearr_16335[(17)] = inst_16250);

(statearr_16335[(13)] = inst_16240__$1);

(statearr_16335[(14)] = inst_16241__$1);

(statearr_16335[(15)] = inst_16242__$1);

(statearr_16335[(16)] = inst_16243__$1);

return statearr_16335;
})();
var statearr_16336_17236 = state_16299__$1;
(statearr_16336_17236[(2)] = null);

(statearr_16336_17236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (18))){
var inst_16269 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16337_17239 = state_16299__$1;
(statearr_16337_17239[(2)] = inst_16269);

(statearr_16337_17239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (8))){
var inst_16243 = (state_16299[(16)]);
var inst_16242 = (state_16299[(15)]);
var inst_16245 = (inst_16243 < inst_16242);
var inst_16246 = inst_16245;
var state_16299__$1 = state_16299;
if(cljs.core.truth_(inst_16246)){
var statearr_16338_17240 = state_16299__$1;
(statearr_16338_17240[(1)] = (10));

} else {
var statearr_16339_17241 = state_16299__$1;
(statearr_16339_17241[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_16340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16340[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_16340[(1)] = (1));

return statearr_16340;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_16299){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16299);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16341){var ex__14780__auto__ = e16341;
var statearr_16342_17242 = state_16299;
(statearr_16342_17242[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16299[(4)]))){
var statearr_16343_17243 = state_16299;
(statearr_16343_17243[(1)] = cljs.core.first((state_16299[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17244 = state_16299;
state_16299 = G__17244;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_16299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_16299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16344 = f__14889__auto__();
(statearr_16344[(6)] = c__14888__auto___17207);

return statearr_16344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16346 = arguments.length;
switch (G__16346) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16348 = arguments.length;
switch (G__16348) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16350 = arguments.length;
switch (G__16350) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14888__auto___17248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16393){
var state_val_16394 = (state_16393[(1)]);
if((state_val_16394 === (7))){
var state_16393__$1 = state_16393;
var statearr_16395_17249 = state_16393__$1;
(statearr_16395_17249[(2)] = null);

(statearr_16395_17249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (1))){
var state_16393__$1 = state_16393;
var statearr_16396_17250 = state_16393__$1;
(statearr_16396_17250[(2)] = null);

(statearr_16396_17250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (4))){
var inst_16354 = (state_16393[(7)]);
var inst_16353 = (state_16393[(8)]);
var inst_16356 = (inst_16354 < inst_16353);
var state_16393__$1 = state_16393;
if(cljs.core.truth_(inst_16356)){
var statearr_16397_17251 = state_16393__$1;
(statearr_16397_17251[(1)] = (6));

} else {
var statearr_16398_17252 = state_16393__$1;
(statearr_16398_17252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (15))){
var inst_16379 = (state_16393[(9)]);
var inst_16384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16379);
var state_16393__$1 = state_16393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16393__$1,(17),out,inst_16384);
} else {
if((state_val_16394 === (13))){
var inst_16379 = (state_16393[(9)]);
var inst_16379__$1 = (state_16393[(2)]);
var inst_16380 = cljs.core.some(cljs.core.nil_QMARK_,inst_16379__$1);
var state_16393__$1 = (function (){var statearr_16399 = state_16393;
(statearr_16399[(9)] = inst_16379__$1);

return statearr_16399;
})();
if(cljs.core.truth_(inst_16380)){
var statearr_16400_17253 = state_16393__$1;
(statearr_16400_17253[(1)] = (14));

} else {
var statearr_16401_17254 = state_16393__$1;
(statearr_16401_17254[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (6))){
var state_16393__$1 = state_16393;
var statearr_16402_17255 = state_16393__$1;
(statearr_16402_17255[(2)] = null);

(statearr_16402_17255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (17))){
var inst_16386 = (state_16393[(2)]);
var state_16393__$1 = (function (){var statearr_16404 = state_16393;
(statearr_16404[(10)] = inst_16386);

return statearr_16404;
})();
var statearr_16405_17256 = state_16393__$1;
(statearr_16405_17256[(2)] = null);

(statearr_16405_17256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (3))){
var inst_16391 = (state_16393[(2)]);
var state_16393__$1 = state_16393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16393__$1,inst_16391);
} else {
if((state_val_16394 === (12))){
var _ = (function (){var statearr_16406 = state_16393;
(statearr_16406[(4)] = cljs.core.rest((state_16393[(4)])));

return statearr_16406;
})();
var state_16393__$1 = state_16393;
var ex16403 = (state_16393__$1[(2)]);
var statearr_16407_17257 = state_16393__$1;
(statearr_16407_17257[(5)] = ex16403);


if((ex16403 instanceof Object)){
var statearr_16408_17259 = state_16393__$1;
(statearr_16408_17259[(1)] = (11));

(statearr_16408_17259[(5)] = null);

} else {
throw ex16403;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (2))){
var inst_16352 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16353 = cnt;
var inst_16354 = (0);
var state_16393__$1 = (function (){var statearr_16409 = state_16393;
(statearr_16409[(11)] = inst_16352);

(statearr_16409[(8)] = inst_16353);

(statearr_16409[(7)] = inst_16354);

return statearr_16409;
})();
var statearr_16410_17260 = state_16393__$1;
(statearr_16410_17260[(2)] = null);

(statearr_16410_17260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (11))){
var inst_16358 = (state_16393[(2)]);
var inst_16359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16393__$1 = (function (){var statearr_16411 = state_16393;
(statearr_16411[(12)] = inst_16358);

return statearr_16411;
})();
var statearr_16412_17261 = state_16393__$1;
(statearr_16412_17261[(2)] = inst_16359);

(statearr_16412_17261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (9))){
var inst_16354 = (state_16393[(7)]);
var _ = (function (){var statearr_16413 = state_16393;
(statearr_16413[(4)] = cljs.core.cons((12),(state_16393[(4)])));

return statearr_16413;
})();
var inst_16365 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16354) : chs__$1.call(null,inst_16354));
var inst_16366 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16354) : done.call(null,inst_16354));
var inst_16367 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16365,inst_16366);
var ___$1 = (function (){var statearr_16414 = state_16393;
(statearr_16414[(4)] = cljs.core.rest((state_16393[(4)])));

return statearr_16414;
})();
var state_16393__$1 = state_16393;
var statearr_16415_17262 = state_16393__$1;
(statearr_16415_17262[(2)] = inst_16367);

(statearr_16415_17262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (5))){
var inst_16377 = (state_16393[(2)]);
var state_16393__$1 = (function (){var statearr_16416 = state_16393;
(statearr_16416[(13)] = inst_16377);

return statearr_16416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16393__$1,(13),dchan);
} else {
if((state_val_16394 === (14))){
var inst_16382 = cljs.core.async.close_BANG_(out);
var state_16393__$1 = state_16393;
var statearr_16417_17263 = state_16393__$1;
(statearr_16417_17263[(2)] = inst_16382);

(statearr_16417_17263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (16))){
var inst_16389 = (state_16393[(2)]);
var state_16393__$1 = state_16393;
var statearr_16418_17264 = state_16393__$1;
(statearr_16418_17264[(2)] = inst_16389);

(statearr_16418_17264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (10))){
var inst_16354 = (state_16393[(7)]);
var inst_16370 = (state_16393[(2)]);
var inst_16371 = (inst_16354 + (1));
var inst_16354__$1 = inst_16371;
var state_16393__$1 = (function (){var statearr_16419 = state_16393;
(statearr_16419[(14)] = inst_16370);

(statearr_16419[(7)] = inst_16354__$1);

return statearr_16419;
})();
var statearr_16420_17265 = state_16393__$1;
(statearr_16420_17265[(2)] = null);

(statearr_16420_17265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (8))){
var inst_16375 = (state_16393[(2)]);
var state_16393__$1 = state_16393;
var statearr_16421_17266 = state_16393__$1;
(statearr_16421_17266[(2)] = inst_16375);

(statearr_16421_17266[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_16422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16422[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_16422[(1)] = (1));

return statearr_16422;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_16393){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16393);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16423){var ex__14780__auto__ = e16423;
var statearr_16424_17267 = state_16393;
(statearr_16424_17267[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16393[(4)]))){
var statearr_16425_17268 = state_16393;
(statearr_16425_17268[(1)] = cljs.core.first((state_16393[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17269 = state_16393;
state_16393 = G__17269;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_16393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_16393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16426 = f__14889__auto__();
(statearr_16426[(6)] = c__14888__auto___17248);

return statearr_16426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16429 = arguments.length;
switch (G__16429) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16461){
var state_val_16462 = (state_16461[(1)]);
if((state_val_16462 === (7))){
var inst_16440 = (state_16461[(7)]);
var inst_16441 = (state_16461[(8)]);
var inst_16440__$1 = (state_16461[(2)]);
var inst_16441__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16440__$1,(0),null);
var inst_16442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16440__$1,(1),null);
var inst_16443 = (inst_16441__$1 == null);
var state_16461__$1 = (function (){var statearr_16463 = state_16461;
(statearr_16463[(7)] = inst_16440__$1);

(statearr_16463[(8)] = inst_16441__$1);

(statearr_16463[(9)] = inst_16442);

return statearr_16463;
})();
if(cljs.core.truth_(inst_16443)){
var statearr_16464_17274 = state_16461__$1;
(statearr_16464_17274[(1)] = (8));

} else {
var statearr_16465_17275 = state_16461__$1;
(statearr_16465_17275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (1))){
var inst_16430 = cljs.core.vec(chs);
var inst_16431 = inst_16430;
var state_16461__$1 = (function (){var statearr_16466 = state_16461;
(statearr_16466[(10)] = inst_16431);

return statearr_16466;
})();
var statearr_16467_17276 = state_16461__$1;
(statearr_16467_17276[(2)] = null);

(statearr_16467_17276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (4))){
var inst_16431 = (state_16461[(10)]);
var state_16461__$1 = state_16461;
return cljs.core.async.ioc_alts_BANG_(state_16461__$1,(7),inst_16431);
} else {
if((state_val_16462 === (6))){
var inst_16457 = (state_16461[(2)]);
var state_16461__$1 = state_16461;
var statearr_16468_17277 = state_16461__$1;
(statearr_16468_17277[(2)] = inst_16457);

(statearr_16468_17277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (3))){
var inst_16459 = (state_16461[(2)]);
var state_16461__$1 = state_16461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16461__$1,inst_16459);
} else {
if((state_val_16462 === (2))){
var inst_16431 = (state_16461[(10)]);
var inst_16433 = cljs.core.count(inst_16431);
var inst_16434 = (inst_16433 > (0));
var state_16461__$1 = state_16461;
if(cljs.core.truth_(inst_16434)){
var statearr_16470_17278 = state_16461__$1;
(statearr_16470_17278[(1)] = (4));

} else {
var statearr_16471_17279 = state_16461__$1;
(statearr_16471_17279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (11))){
var inst_16431 = (state_16461[(10)]);
var inst_16450 = (state_16461[(2)]);
var tmp16469 = inst_16431;
var inst_16431__$1 = tmp16469;
var state_16461__$1 = (function (){var statearr_16472 = state_16461;
(statearr_16472[(11)] = inst_16450);

(statearr_16472[(10)] = inst_16431__$1);

return statearr_16472;
})();
var statearr_16473_17280 = state_16461__$1;
(statearr_16473_17280[(2)] = null);

(statearr_16473_17280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (9))){
var inst_16441 = (state_16461[(8)]);
var state_16461__$1 = state_16461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16461__$1,(11),out,inst_16441);
} else {
if((state_val_16462 === (5))){
var inst_16455 = cljs.core.async.close_BANG_(out);
var state_16461__$1 = state_16461;
var statearr_16474_17281 = state_16461__$1;
(statearr_16474_17281[(2)] = inst_16455);

(statearr_16474_17281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (10))){
var inst_16453 = (state_16461[(2)]);
var state_16461__$1 = state_16461;
var statearr_16475_17283 = state_16461__$1;
(statearr_16475_17283[(2)] = inst_16453);

(statearr_16475_17283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (8))){
var inst_16431 = (state_16461[(10)]);
var inst_16440 = (state_16461[(7)]);
var inst_16441 = (state_16461[(8)]);
var inst_16442 = (state_16461[(9)]);
var inst_16445 = (function (){var cs = inst_16431;
var vec__16436 = inst_16440;
var v = inst_16441;
var c = inst_16442;
return (function (p1__16427_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16427_SHARP_);
});
})();
var inst_16446 = cljs.core.filterv(inst_16445,inst_16431);
var inst_16431__$1 = inst_16446;
var state_16461__$1 = (function (){var statearr_16476 = state_16461;
(statearr_16476[(10)] = inst_16431__$1);

return statearr_16476;
})();
var statearr_16477_17284 = state_16461__$1;
(statearr_16477_17284[(2)] = null);

(statearr_16477_17284[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_16478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16478[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_16478[(1)] = (1));

return statearr_16478;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_16461){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16461);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16479){var ex__14780__auto__ = e16479;
var statearr_16480_17285 = state_16461;
(statearr_16480_17285[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16461[(4)]))){
var statearr_16481_17290 = state_16461;
(statearr_16481_17290[(1)] = cljs.core.first((state_16461[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17291 = state_16461;
state_16461 = G__17291;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_16461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_16461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16482 = f__14889__auto__();
(statearr_16482[(6)] = c__14888__auto___17271);

return statearr_16482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16484 = arguments.length;
switch (G__16484) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16508){
var state_val_16509 = (state_16508[(1)]);
if((state_val_16509 === (7))){
var inst_16490 = (state_16508[(7)]);
var inst_16490__$1 = (state_16508[(2)]);
var inst_16491 = (inst_16490__$1 == null);
var inst_16492 = cljs.core.not(inst_16491);
var state_16508__$1 = (function (){var statearr_16510 = state_16508;
(statearr_16510[(7)] = inst_16490__$1);

return statearr_16510;
})();
if(inst_16492){
var statearr_16511_17295 = state_16508__$1;
(statearr_16511_17295[(1)] = (8));

} else {
var statearr_16512_17296 = state_16508__$1;
(statearr_16512_17296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (1))){
var inst_16485 = (0);
var state_16508__$1 = (function (){var statearr_16513 = state_16508;
(statearr_16513[(8)] = inst_16485);

return statearr_16513;
})();
var statearr_16514_17297 = state_16508__$1;
(statearr_16514_17297[(2)] = null);

(statearr_16514_17297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (4))){
var state_16508__$1 = state_16508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16508__$1,(7),ch);
} else {
if((state_val_16509 === (6))){
var inst_16503 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16515_17299 = state_16508__$1;
(statearr_16515_17299[(2)] = inst_16503);

(statearr_16515_17299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (3))){
var inst_16505 = (state_16508[(2)]);
var inst_16506 = cljs.core.async.close_BANG_(out);
var state_16508__$1 = (function (){var statearr_16516 = state_16508;
(statearr_16516[(9)] = inst_16505);

return statearr_16516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16508__$1,inst_16506);
} else {
if((state_val_16509 === (2))){
var inst_16485 = (state_16508[(8)]);
var inst_16487 = (inst_16485 < n);
var state_16508__$1 = state_16508;
if(cljs.core.truth_(inst_16487)){
var statearr_16517_17300 = state_16508__$1;
(statearr_16517_17300[(1)] = (4));

} else {
var statearr_16518_17301 = state_16508__$1;
(statearr_16518_17301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (11))){
var inst_16485 = (state_16508[(8)]);
var inst_16495 = (state_16508[(2)]);
var inst_16496 = (inst_16485 + (1));
var inst_16485__$1 = inst_16496;
var state_16508__$1 = (function (){var statearr_16519 = state_16508;
(statearr_16519[(10)] = inst_16495);

(statearr_16519[(8)] = inst_16485__$1);

return statearr_16519;
})();
var statearr_16520_17302 = state_16508__$1;
(statearr_16520_17302[(2)] = null);

(statearr_16520_17302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (9))){
var state_16508__$1 = state_16508;
var statearr_16521_17303 = state_16508__$1;
(statearr_16521_17303[(2)] = null);

(statearr_16521_17303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (5))){
var state_16508__$1 = state_16508;
var statearr_16522_17305 = state_16508__$1;
(statearr_16522_17305[(2)] = null);

(statearr_16522_17305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (10))){
var inst_16500 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16523_17309 = state_16508__$1;
(statearr_16523_17309[(2)] = inst_16500);

(statearr_16523_17309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (8))){
var inst_16490 = (state_16508[(7)]);
var state_16508__$1 = state_16508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16508__$1,(11),out,inst_16490);
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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_16524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16524[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_16524[(1)] = (1));

return statearr_16524;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_16508){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16508);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16525){var ex__14780__auto__ = e16525;
var statearr_16526_17310 = state_16508;
(statearr_16526_17310[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16508[(4)]))){
var statearr_16527_17311 = state_16508;
(statearr_16527_17311[(1)] = cljs.core.first((state_16508[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17312 = state_16508;
state_16508 = G__17312;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_16508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_16508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16528 = f__14889__auto__();
(statearr_16528[(6)] = c__14888__auto___17294);

return statearr_16528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16533 = (function (f,ch,meta16531,_,fn1,meta16534){
this.f = f;
this.ch = ch;
this.meta16531 = meta16531;
this._ = _;
this.fn1 = fn1;
this.meta16534 = meta16534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16535,meta16534__$1){
var self__ = this;
var _16535__$1 = this;
return (new cljs.core.async.t_cljs$core$async16533(self__.f,self__.ch,self__.meta16531,self__._,self__.fn1,meta16534__$1));
}));

(cljs.core.async.t_cljs$core$async16533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16535){
var self__ = this;
var _16535__$1 = this;
return self__.meta16534;
}));

(cljs.core.async.t_cljs$core$async16533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16529_SHARP_){
var G__16536 = (((p1__16529_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16529_SHARP_) : self__.f.call(null,p1__16529_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16536) : f1.call(null,G__16536));
});
}));

(cljs.core.async.t_cljs$core$async16533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16531","meta16531",447447271,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16530","cljs.core.async/t_cljs$core$async16530",-573791372,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16534","meta16534",458213474,null)], null);
}));

(cljs.core.async.t_cljs$core$async16533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16533");

(cljs.core.async.t_cljs$core$async16533.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16533.
 */
cljs.core.async.__GT_t_cljs$core$async16533 = (function cljs$core$async$__GT_t_cljs$core$async16533(f,ch,meta16531,_,fn1,meta16534){
return (new cljs.core.async.t_cljs$core$async16533(f,ch,meta16531,_,fn1,meta16534));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16530 = (function (f,ch,meta16531){
this.f = f;
this.ch = ch;
this.meta16531 = meta16531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16532,meta16531__$1){
var self__ = this;
var _16532__$1 = this;
return (new cljs.core.async.t_cljs$core$async16530(self__.f,self__.ch,meta16531__$1));
}));

(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16532){
var self__ = this;
var _16532__$1 = this;
return self__.meta16531;
}));

(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16533(self__.f,self__.ch,self__.meta16531,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16537 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16537) : self__.f.call(null,G__16537));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16531","meta16531",447447271,null)], null);
}));

(cljs.core.async.t_cljs$core$async16530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16530");

(cljs.core.async.t_cljs$core$async16530.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16530.
 */
cljs.core.async.__GT_t_cljs$core$async16530 = (function cljs$core$async$__GT_t_cljs$core$async16530(f,ch,meta16531){
return (new cljs.core.async.t_cljs$core$async16530(f,ch,meta16531));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16530(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16538 = (function (f,ch,meta16539){
this.f = f;
this.ch = ch;
this.meta16539 = meta16539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16540,meta16539__$1){
var self__ = this;
var _16540__$1 = this;
return (new cljs.core.async.t_cljs$core$async16538(self__.f,self__.ch,meta16539__$1));
}));

(cljs.core.async.t_cljs$core$async16538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16540){
var self__ = this;
var _16540__$1 = this;
return self__.meta16539;
}));

(cljs.core.async.t_cljs$core$async16538.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16538.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16538.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16539","meta16539",2032012643,null)], null);
}));

(cljs.core.async.t_cljs$core$async16538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16538");

(cljs.core.async.t_cljs$core$async16538.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16538.
 */
cljs.core.async.__GT_t_cljs$core$async16538 = (function cljs$core$async$__GT_t_cljs$core$async16538(f,ch,meta16539){
return (new cljs.core.async.t_cljs$core$async16538(f,ch,meta16539));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16538(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16541 = (function (p,ch,meta16542){
this.p = p;
this.ch = ch;
this.meta16542 = meta16542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16543,meta16542__$1){
var self__ = this;
var _16543__$1 = this;
return (new cljs.core.async.t_cljs$core$async16541(self__.p,self__.ch,meta16542__$1));
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16543){
var self__ = this;
var _16543__$1 = this;
return self__.meta16542;
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16542","meta16542",227112830,null)], null);
}));

(cljs.core.async.t_cljs$core$async16541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16541");

(cljs.core.async.t_cljs$core$async16541.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16541.
 */
cljs.core.async.__GT_t_cljs$core$async16541 = (function cljs$core$async$__GT_t_cljs$core$async16541(p,ch,meta16542){
return (new cljs.core.async.t_cljs$core$async16541(p,ch,meta16542));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16541(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16545 = arguments.length;
switch (G__16545) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16566){
var state_val_16567 = (state_16566[(1)]);
if((state_val_16567 === (7))){
var inst_16562 = (state_16566[(2)]);
var state_16566__$1 = state_16566;
var statearr_16568_17316 = state_16566__$1;
(statearr_16568_17316[(2)] = inst_16562);

(statearr_16568_17316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (1))){
var state_16566__$1 = state_16566;
var statearr_16569_17320 = state_16566__$1;
(statearr_16569_17320[(2)] = null);

(statearr_16569_17320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (4))){
var inst_16548 = (state_16566[(7)]);
var inst_16548__$1 = (state_16566[(2)]);
var inst_16549 = (inst_16548__$1 == null);
var state_16566__$1 = (function (){var statearr_16570 = state_16566;
(statearr_16570[(7)] = inst_16548__$1);

return statearr_16570;
})();
if(cljs.core.truth_(inst_16549)){
var statearr_16571_17321 = state_16566__$1;
(statearr_16571_17321[(1)] = (5));

} else {
var statearr_16572_17322 = state_16566__$1;
(statearr_16572_17322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (6))){
var inst_16548 = (state_16566[(7)]);
var inst_16553 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16548) : p.call(null,inst_16548));
var state_16566__$1 = state_16566;
if(cljs.core.truth_(inst_16553)){
var statearr_16573_17323 = state_16566__$1;
(statearr_16573_17323[(1)] = (8));

} else {
var statearr_16574_17324 = state_16566__$1;
(statearr_16574_17324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (3))){
var inst_16564 = (state_16566[(2)]);
var state_16566__$1 = state_16566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16566__$1,inst_16564);
} else {
if((state_val_16567 === (2))){
var state_16566__$1 = state_16566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16566__$1,(4),ch);
} else {
if((state_val_16567 === (11))){
var inst_16556 = (state_16566[(2)]);
var state_16566__$1 = state_16566;
var statearr_16575_17325 = state_16566__$1;
(statearr_16575_17325[(2)] = inst_16556);

(statearr_16575_17325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (9))){
var state_16566__$1 = state_16566;
var statearr_16576_17326 = state_16566__$1;
(statearr_16576_17326[(2)] = null);

(statearr_16576_17326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (5))){
var inst_16551 = cljs.core.async.close_BANG_(out);
var state_16566__$1 = state_16566;
var statearr_16577_17327 = state_16566__$1;
(statearr_16577_17327[(2)] = inst_16551);

(statearr_16577_17327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (10))){
var inst_16559 = (state_16566[(2)]);
var state_16566__$1 = (function (){var statearr_16578 = state_16566;
(statearr_16578[(8)] = inst_16559);

return statearr_16578;
})();
var statearr_16579_17328 = state_16566__$1;
(statearr_16579_17328[(2)] = null);

(statearr_16579_17328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (8))){
var inst_16548 = (state_16566[(7)]);
var state_16566__$1 = state_16566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16566__$1,(11),out,inst_16548);
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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_16580 = [null,null,null,null,null,null,null,null,null];
(statearr_16580[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_16580[(1)] = (1));

return statearr_16580;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_16566){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16566);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16581){var ex__14780__auto__ = e16581;
var statearr_16582_17329 = state_16566;
(statearr_16582_17329[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16566[(4)]))){
var statearr_16583_17330 = state_16566;
(statearr_16583_17330[(1)] = cljs.core.first((state_16566[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17331 = state_16566;
state_16566 = G__17331;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_16566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_16566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16584 = f__14889__auto__();
(statearr_16584[(6)] = c__14888__auto___17315);

return statearr_16584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16586 = arguments.length;
switch (G__16586) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16648){
var state_val_16649 = (state_16648[(1)]);
if((state_val_16649 === (7))){
var inst_16644 = (state_16648[(2)]);
var state_16648__$1 = state_16648;
var statearr_16650_17334 = state_16648__$1;
(statearr_16650_17334[(2)] = inst_16644);

(statearr_16650_17334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (20))){
var inst_16614 = (state_16648[(7)]);
var inst_16625 = (state_16648[(2)]);
var inst_16626 = cljs.core.next(inst_16614);
var inst_16600 = inst_16626;
var inst_16601 = null;
var inst_16602 = (0);
var inst_16603 = (0);
var state_16648__$1 = (function (){var statearr_16651 = state_16648;
(statearr_16651[(8)] = inst_16625);

(statearr_16651[(9)] = inst_16600);

(statearr_16651[(10)] = inst_16601);

(statearr_16651[(11)] = inst_16602);

(statearr_16651[(12)] = inst_16603);

return statearr_16651;
})();
var statearr_16652_17335 = state_16648__$1;
(statearr_16652_17335[(2)] = null);

(statearr_16652_17335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (1))){
var state_16648__$1 = state_16648;
var statearr_16653_17336 = state_16648__$1;
(statearr_16653_17336[(2)] = null);

(statearr_16653_17336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (4))){
var inst_16589 = (state_16648[(13)]);
var inst_16589__$1 = (state_16648[(2)]);
var inst_16590 = (inst_16589__$1 == null);
var state_16648__$1 = (function (){var statearr_16654 = state_16648;
(statearr_16654[(13)] = inst_16589__$1);

return statearr_16654;
})();
if(cljs.core.truth_(inst_16590)){
var statearr_16655_17337 = state_16648__$1;
(statearr_16655_17337[(1)] = (5));

} else {
var statearr_16656_17338 = state_16648__$1;
(statearr_16656_17338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (15))){
var state_16648__$1 = state_16648;
var statearr_16660_17339 = state_16648__$1;
(statearr_16660_17339[(2)] = null);

(statearr_16660_17339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (21))){
var state_16648__$1 = state_16648;
var statearr_16661_17341 = state_16648__$1;
(statearr_16661_17341[(2)] = null);

(statearr_16661_17341[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (13))){
var inst_16603 = (state_16648[(12)]);
var inst_16600 = (state_16648[(9)]);
var inst_16601 = (state_16648[(10)]);
var inst_16602 = (state_16648[(11)]);
var inst_16610 = (state_16648[(2)]);
var inst_16611 = (inst_16603 + (1));
var tmp16657 = inst_16600;
var tmp16658 = inst_16601;
var tmp16659 = inst_16602;
var inst_16600__$1 = tmp16657;
var inst_16601__$1 = tmp16658;
var inst_16602__$1 = tmp16659;
var inst_16603__$1 = inst_16611;
var state_16648__$1 = (function (){var statearr_16662 = state_16648;
(statearr_16662[(14)] = inst_16610);

(statearr_16662[(9)] = inst_16600__$1);

(statearr_16662[(10)] = inst_16601__$1);

(statearr_16662[(11)] = inst_16602__$1);

(statearr_16662[(12)] = inst_16603__$1);

return statearr_16662;
})();
var statearr_16663_17342 = state_16648__$1;
(statearr_16663_17342[(2)] = null);

(statearr_16663_17342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (22))){
var state_16648__$1 = state_16648;
var statearr_16664_17343 = state_16648__$1;
(statearr_16664_17343[(2)] = null);

(statearr_16664_17343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (6))){
var inst_16589 = (state_16648[(13)]);
var inst_16598 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16589) : f.call(null,inst_16589));
var inst_16599 = cljs.core.seq(inst_16598);
var inst_16600 = inst_16599;
var inst_16601 = null;
var inst_16602 = (0);
var inst_16603 = (0);
var state_16648__$1 = (function (){var statearr_16665 = state_16648;
(statearr_16665[(9)] = inst_16600);

(statearr_16665[(10)] = inst_16601);

(statearr_16665[(11)] = inst_16602);

(statearr_16665[(12)] = inst_16603);

return statearr_16665;
})();
var statearr_16666_17344 = state_16648__$1;
(statearr_16666_17344[(2)] = null);

(statearr_16666_17344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (17))){
var inst_16614 = (state_16648[(7)]);
var inst_16618 = cljs.core.chunk_first(inst_16614);
var inst_16619 = cljs.core.chunk_rest(inst_16614);
var inst_16620 = cljs.core.count(inst_16618);
var inst_16600 = inst_16619;
var inst_16601 = inst_16618;
var inst_16602 = inst_16620;
var inst_16603 = (0);
var state_16648__$1 = (function (){var statearr_16667 = state_16648;
(statearr_16667[(9)] = inst_16600);

(statearr_16667[(10)] = inst_16601);

(statearr_16667[(11)] = inst_16602);

(statearr_16667[(12)] = inst_16603);

return statearr_16667;
})();
var statearr_16668_17345 = state_16648__$1;
(statearr_16668_17345[(2)] = null);

(statearr_16668_17345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (3))){
var inst_16646 = (state_16648[(2)]);
var state_16648__$1 = state_16648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16648__$1,inst_16646);
} else {
if((state_val_16649 === (12))){
var inst_16634 = (state_16648[(2)]);
var state_16648__$1 = state_16648;
var statearr_16669_17346 = state_16648__$1;
(statearr_16669_17346[(2)] = inst_16634);

(statearr_16669_17346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (2))){
var state_16648__$1 = state_16648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16648__$1,(4),in$);
} else {
if((state_val_16649 === (23))){
var inst_16642 = (state_16648[(2)]);
var state_16648__$1 = state_16648;
var statearr_16670_17347 = state_16648__$1;
(statearr_16670_17347[(2)] = inst_16642);

(statearr_16670_17347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (19))){
var inst_16629 = (state_16648[(2)]);
var state_16648__$1 = state_16648;
var statearr_16671_17348 = state_16648__$1;
(statearr_16671_17348[(2)] = inst_16629);

(statearr_16671_17348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (11))){
var inst_16600 = (state_16648[(9)]);
var inst_16614 = (state_16648[(7)]);
var inst_16614__$1 = cljs.core.seq(inst_16600);
var state_16648__$1 = (function (){var statearr_16672 = state_16648;
(statearr_16672[(7)] = inst_16614__$1);

return statearr_16672;
})();
if(inst_16614__$1){
var statearr_16673_17349 = state_16648__$1;
(statearr_16673_17349[(1)] = (14));

} else {
var statearr_16674_17350 = state_16648__$1;
(statearr_16674_17350[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (9))){
var inst_16636 = (state_16648[(2)]);
var inst_16637 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16648__$1 = (function (){var statearr_16675 = state_16648;
(statearr_16675[(15)] = inst_16636);

return statearr_16675;
})();
if(cljs.core.truth_(inst_16637)){
var statearr_16676_17351 = state_16648__$1;
(statearr_16676_17351[(1)] = (21));

} else {
var statearr_16677_17352 = state_16648__$1;
(statearr_16677_17352[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (5))){
var inst_16592 = cljs.core.async.close_BANG_(out);
var state_16648__$1 = state_16648;
var statearr_16678_17353 = state_16648__$1;
(statearr_16678_17353[(2)] = inst_16592);

(statearr_16678_17353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (14))){
var inst_16614 = (state_16648[(7)]);
var inst_16616 = cljs.core.chunked_seq_QMARK_(inst_16614);
var state_16648__$1 = state_16648;
if(inst_16616){
var statearr_16679_17354 = state_16648__$1;
(statearr_16679_17354[(1)] = (17));

} else {
var statearr_16680_17355 = state_16648__$1;
(statearr_16680_17355[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (16))){
var inst_16632 = (state_16648[(2)]);
var state_16648__$1 = state_16648;
var statearr_16681_17356 = state_16648__$1;
(statearr_16681_17356[(2)] = inst_16632);

(statearr_16681_17356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16649 === (10))){
var inst_16601 = (state_16648[(10)]);
var inst_16603 = (state_16648[(12)]);
var inst_16608 = cljs.core._nth(inst_16601,inst_16603);
var state_16648__$1 = state_16648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16648__$1,(13),out,inst_16608);
} else {
if((state_val_16649 === (18))){
var inst_16614 = (state_16648[(7)]);
var inst_16623 = cljs.core.first(inst_16614);
var state_16648__$1 = state_16648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16648__$1,(20),out,inst_16623);
} else {
if((state_val_16649 === (8))){
var inst_16603 = (state_16648[(12)]);
var inst_16602 = (state_16648[(11)]);
var inst_16605 = (inst_16603 < inst_16602);
var inst_16606 = inst_16605;
var state_16648__$1 = state_16648;
if(cljs.core.truth_(inst_16606)){
var statearr_16682_17357 = state_16648__$1;
(statearr_16682_17357[(1)] = (10));

} else {
var statearr_16683_17358 = state_16648__$1;
(statearr_16683_17358[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14777__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14777__auto____0 = (function (){
var statearr_16684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16684[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14777__auto__);

(statearr_16684[(1)] = (1));

return statearr_16684;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14777__auto____1 = (function (state_16648){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16648);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16685){var ex__14780__auto__ = e16685;
var statearr_16686_17359 = state_16648;
(statearr_16686_17359[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16648[(4)]))){
var statearr_16687_17360 = state_16648;
(statearr_16687_17360[(1)] = cljs.core.first((state_16648[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17361 = state_16648;
state_16648 = G__17361;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14777__auto__ = function(state_16648){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14777__auto____1.call(this,state_16648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14777__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14777__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16688 = f__14889__auto__();
(statearr_16688[(6)] = c__14888__auto__);

return statearr_16688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16690 = arguments.length;
switch (G__16690) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16692 = arguments.length;
switch (G__16692) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16694 = arguments.length;
switch (G__16694) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16718){
var state_val_16719 = (state_16718[(1)]);
if((state_val_16719 === (7))){
var inst_16713 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
var statearr_16720_17366 = state_16718__$1;
(statearr_16720_17366[(2)] = inst_16713);

(statearr_16720_17366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (1))){
var inst_16695 = null;
var state_16718__$1 = (function (){var statearr_16721 = state_16718;
(statearr_16721[(7)] = inst_16695);

return statearr_16721;
})();
var statearr_16722_17367 = state_16718__$1;
(statearr_16722_17367[(2)] = null);

(statearr_16722_17367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (4))){
var inst_16698 = (state_16718[(8)]);
var inst_16698__$1 = (state_16718[(2)]);
var inst_16699 = (inst_16698__$1 == null);
var inst_16700 = cljs.core.not(inst_16699);
var state_16718__$1 = (function (){var statearr_16723 = state_16718;
(statearr_16723[(8)] = inst_16698__$1);

return statearr_16723;
})();
if(inst_16700){
var statearr_16724_17368 = state_16718__$1;
(statearr_16724_17368[(1)] = (5));

} else {
var statearr_16725_17369 = state_16718__$1;
(statearr_16725_17369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (6))){
var state_16718__$1 = state_16718;
var statearr_16726_17370 = state_16718__$1;
(statearr_16726_17370[(2)] = null);

(statearr_16726_17370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (3))){
var inst_16715 = (state_16718[(2)]);
var inst_16716 = cljs.core.async.close_BANG_(out);
var state_16718__$1 = (function (){var statearr_16727 = state_16718;
(statearr_16727[(9)] = inst_16715);

return statearr_16727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16718__$1,inst_16716);
} else {
if((state_val_16719 === (2))){
var state_16718__$1 = state_16718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16718__$1,(4),ch);
} else {
if((state_val_16719 === (11))){
var inst_16698 = (state_16718[(8)]);
var inst_16707 = (state_16718[(2)]);
var inst_16695 = inst_16698;
var state_16718__$1 = (function (){var statearr_16728 = state_16718;
(statearr_16728[(10)] = inst_16707);

(statearr_16728[(7)] = inst_16695);

return statearr_16728;
})();
var statearr_16729_17371 = state_16718__$1;
(statearr_16729_17371[(2)] = null);

(statearr_16729_17371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (9))){
var inst_16698 = (state_16718[(8)]);
var state_16718__$1 = state_16718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16718__$1,(11),out,inst_16698);
} else {
if((state_val_16719 === (5))){
var inst_16698 = (state_16718[(8)]);
var inst_16695 = (state_16718[(7)]);
var inst_16702 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16698,inst_16695);
var state_16718__$1 = state_16718;
if(inst_16702){
var statearr_16731_17377 = state_16718__$1;
(statearr_16731_17377[(1)] = (8));

} else {
var statearr_16732_17378 = state_16718__$1;
(statearr_16732_17378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (10))){
var inst_16710 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
var statearr_16733_17379 = state_16718__$1;
(statearr_16733_17379[(2)] = inst_16710);

(statearr_16733_17379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (8))){
var inst_16695 = (state_16718[(7)]);
var tmp16730 = inst_16695;
var inst_16695__$1 = tmp16730;
var state_16718__$1 = (function (){var statearr_16734 = state_16718;
(statearr_16734[(7)] = inst_16695__$1);

return statearr_16734;
})();
var statearr_16735_17380 = state_16718__$1;
(statearr_16735_17380[(2)] = null);

(statearr_16735_17380[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_16736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16736[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_16736[(1)] = (1));

return statearr_16736;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_16718){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16718);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16737){var ex__14780__auto__ = e16737;
var statearr_16738_17381 = state_16718;
(statearr_16738_17381[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16718[(4)]))){
var statearr_16739_17382 = state_16718;
(statearr_16739_17382[(1)] = cljs.core.first((state_16718[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17383 = state_16718;
state_16718 = G__17383;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_16718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_16718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16740 = f__14889__auto__();
(statearr_16740[(6)] = c__14888__auto___17365);

return statearr_16740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16742 = arguments.length;
switch (G__16742) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16780){
var state_val_16781 = (state_16780[(1)]);
if((state_val_16781 === (7))){
var inst_16776 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
var statearr_16782_17386 = state_16780__$1;
(statearr_16782_17386[(2)] = inst_16776);

(statearr_16782_17386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (1))){
var inst_16743 = (new Array(n));
var inst_16744 = inst_16743;
var inst_16745 = (0);
var state_16780__$1 = (function (){var statearr_16783 = state_16780;
(statearr_16783[(7)] = inst_16744);

(statearr_16783[(8)] = inst_16745);

return statearr_16783;
})();
var statearr_16784_17387 = state_16780__$1;
(statearr_16784_17387[(2)] = null);

(statearr_16784_17387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (4))){
var inst_16748 = (state_16780[(9)]);
var inst_16748__$1 = (state_16780[(2)]);
var inst_16749 = (inst_16748__$1 == null);
var inst_16750 = cljs.core.not(inst_16749);
var state_16780__$1 = (function (){var statearr_16785 = state_16780;
(statearr_16785[(9)] = inst_16748__$1);

return statearr_16785;
})();
if(inst_16750){
var statearr_16786_17389 = state_16780__$1;
(statearr_16786_17389[(1)] = (5));

} else {
var statearr_16787_17390 = state_16780__$1;
(statearr_16787_17390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (15))){
var inst_16770 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
var statearr_16788_17397 = state_16780__$1;
(statearr_16788_17397[(2)] = inst_16770);

(statearr_16788_17397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (13))){
var state_16780__$1 = state_16780;
var statearr_16789_17398 = state_16780__$1;
(statearr_16789_17398[(2)] = null);

(statearr_16789_17398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (6))){
var inst_16745 = (state_16780[(8)]);
var inst_16766 = (inst_16745 > (0));
var state_16780__$1 = state_16780;
if(cljs.core.truth_(inst_16766)){
var statearr_16790_17399 = state_16780__$1;
(statearr_16790_17399[(1)] = (12));

} else {
var statearr_16791_17400 = state_16780__$1;
(statearr_16791_17400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (3))){
var inst_16778 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16780__$1,inst_16778);
} else {
if((state_val_16781 === (12))){
var inst_16744 = (state_16780[(7)]);
var inst_16768 = cljs.core.vec(inst_16744);
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16780__$1,(15),out,inst_16768);
} else {
if((state_val_16781 === (2))){
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16780__$1,(4),ch);
} else {
if((state_val_16781 === (11))){
var inst_16760 = (state_16780[(2)]);
var inst_16761 = (new Array(n));
var inst_16744 = inst_16761;
var inst_16745 = (0);
var state_16780__$1 = (function (){var statearr_16792 = state_16780;
(statearr_16792[(10)] = inst_16760);

(statearr_16792[(7)] = inst_16744);

(statearr_16792[(8)] = inst_16745);

return statearr_16792;
})();
var statearr_16793_17401 = state_16780__$1;
(statearr_16793_17401[(2)] = null);

(statearr_16793_17401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (9))){
var inst_16744 = (state_16780[(7)]);
var inst_16758 = cljs.core.vec(inst_16744);
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16780__$1,(11),out,inst_16758);
} else {
if((state_val_16781 === (5))){
var inst_16744 = (state_16780[(7)]);
var inst_16745 = (state_16780[(8)]);
var inst_16748 = (state_16780[(9)]);
var inst_16753 = (state_16780[(11)]);
var inst_16752 = (inst_16744[inst_16745] = inst_16748);
var inst_16753__$1 = (inst_16745 + (1));
var inst_16754 = (inst_16753__$1 < n);
var state_16780__$1 = (function (){var statearr_16794 = state_16780;
(statearr_16794[(12)] = inst_16752);

(statearr_16794[(11)] = inst_16753__$1);

return statearr_16794;
})();
if(cljs.core.truth_(inst_16754)){
var statearr_16795_17402 = state_16780__$1;
(statearr_16795_17402[(1)] = (8));

} else {
var statearr_16796_17403 = state_16780__$1;
(statearr_16796_17403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (14))){
var inst_16773 = (state_16780[(2)]);
var inst_16774 = cljs.core.async.close_BANG_(out);
var state_16780__$1 = (function (){var statearr_16798 = state_16780;
(statearr_16798[(13)] = inst_16773);

return statearr_16798;
})();
var statearr_16799_17404 = state_16780__$1;
(statearr_16799_17404[(2)] = inst_16774);

(statearr_16799_17404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (10))){
var inst_16764 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
var statearr_16800_17405 = state_16780__$1;
(statearr_16800_17405[(2)] = inst_16764);

(statearr_16800_17405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (8))){
var inst_16744 = (state_16780[(7)]);
var inst_16753 = (state_16780[(11)]);
var tmp16797 = inst_16744;
var inst_16744__$1 = tmp16797;
var inst_16745 = inst_16753;
var state_16780__$1 = (function (){var statearr_16801 = state_16780;
(statearr_16801[(7)] = inst_16744__$1);

(statearr_16801[(8)] = inst_16745);

return statearr_16801;
})();
var statearr_16802_17406 = state_16780__$1;
(statearr_16802_17406[(2)] = null);

(statearr_16802_17406[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_16803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16803[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_16803[(1)] = (1));

return statearr_16803;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_16780){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16780);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16804){var ex__14780__auto__ = e16804;
var statearr_16805_17407 = state_16780;
(statearr_16805_17407[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16780[(4)]))){
var statearr_16806_17408 = state_16780;
(statearr_16806_17408[(1)] = cljs.core.first((state_16780[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17409 = state_16780;
state_16780 = G__17409;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_16780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_16780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16807 = f__14889__auto__();
(statearr_16807[(6)] = c__14888__auto___17385);

return statearr_16807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16809 = arguments.length;
switch (G__16809) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14776__auto__ = (function (state_16854){
var state_val_16855 = (state_16854[(1)]);
if((state_val_16855 === (7))){
var inst_16850 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
var statearr_16856_17412 = state_16854__$1;
(statearr_16856_17412[(2)] = inst_16850);

(statearr_16856_17412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (1))){
var inst_16810 = [];
var inst_16811 = inst_16810;
var inst_16812 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16854__$1 = (function (){var statearr_16857 = state_16854;
(statearr_16857[(7)] = inst_16811);

(statearr_16857[(8)] = inst_16812);

return statearr_16857;
})();
var statearr_16858_17413 = state_16854__$1;
(statearr_16858_17413[(2)] = null);

(statearr_16858_17413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (4))){
var inst_16815 = (state_16854[(9)]);
var inst_16815__$1 = (state_16854[(2)]);
var inst_16816 = (inst_16815__$1 == null);
var inst_16817 = cljs.core.not(inst_16816);
var state_16854__$1 = (function (){var statearr_16859 = state_16854;
(statearr_16859[(9)] = inst_16815__$1);

return statearr_16859;
})();
if(inst_16817){
var statearr_16860_17414 = state_16854__$1;
(statearr_16860_17414[(1)] = (5));

} else {
var statearr_16861_17415 = state_16854__$1;
(statearr_16861_17415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (15))){
var inst_16811 = (state_16854[(7)]);
var inst_16842 = cljs.core.vec(inst_16811);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16854__$1,(18),out,inst_16842);
} else {
if((state_val_16855 === (13))){
var inst_16837 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
var statearr_16862_17416 = state_16854__$1;
(statearr_16862_17416[(2)] = inst_16837);

(statearr_16862_17416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (6))){
var inst_16811 = (state_16854[(7)]);
var inst_16839 = inst_16811.length;
var inst_16840 = (inst_16839 > (0));
var state_16854__$1 = state_16854;
if(cljs.core.truth_(inst_16840)){
var statearr_16863_17417 = state_16854__$1;
(statearr_16863_17417[(1)] = (15));

} else {
var statearr_16864_17418 = state_16854__$1;
(statearr_16864_17418[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (17))){
var inst_16847 = (state_16854[(2)]);
var inst_16848 = cljs.core.async.close_BANG_(out);
var state_16854__$1 = (function (){var statearr_16865 = state_16854;
(statearr_16865[(10)] = inst_16847);

return statearr_16865;
})();
var statearr_16866_17419 = state_16854__$1;
(statearr_16866_17419[(2)] = inst_16848);

(statearr_16866_17419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (3))){
var inst_16852 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16854__$1,inst_16852);
} else {
if((state_val_16855 === (12))){
var inst_16811 = (state_16854[(7)]);
var inst_16830 = cljs.core.vec(inst_16811);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16854__$1,(14),out,inst_16830);
} else {
if((state_val_16855 === (2))){
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16854__$1,(4),ch);
} else {
if((state_val_16855 === (11))){
var inst_16811 = (state_16854[(7)]);
var inst_16815 = (state_16854[(9)]);
var inst_16819 = (state_16854[(11)]);
var inst_16827 = inst_16811.push(inst_16815);
var tmp16867 = inst_16811;
var inst_16811__$1 = tmp16867;
var inst_16812 = inst_16819;
var state_16854__$1 = (function (){var statearr_16868 = state_16854;
(statearr_16868[(12)] = inst_16827);

(statearr_16868[(7)] = inst_16811__$1);

(statearr_16868[(8)] = inst_16812);

return statearr_16868;
})();
var statearr_16869_17420 = state_16854__$1;
(statearr_16869_17420[(2)] = null);

(statearr_16869_17420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (9))){
var inst_16812 = (state_16854[(8)]);
var inst_16823 = cljs.core.keyword_identical_QMARK_(inst_16812,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16854__$1 = state_16854;
var statearr_16870_17421 = state_16854__$1;
(statearr_16870_17421[(2)] = inst_16823);

(statearr_16870_17421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (5))){
var inst_16815 = (state_16854[(9)]);
var inst_16819 = (state_16854[(11)]);
var inst_16812 = (state_16854[(8)]);
var inst_16820 = (state_16854[(13)]);
var inst_16819__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16815) : f.call(null,inst_16815));
var inst_16820__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16819__$1,inst_16812);
var state_16854__$1 = (function (){var statearr_16871 = state_16854;
(statearr_16871[(11)] = inst_16819__$1);

(statearr_16871[(13)] = inst_16820__$1);

return statearr_16871;
})();
if(inst_16820__$1){
var statearr_16872_17424 = state_16854__$1;
(statearr_16872_17424[(1)] = (8));

} else {
var statearr_16873_17425 = state_16854__$1;
(statearr_16873_17425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (14))){
var inst_16815 = (state_16854[(9)]);
var inst_16819 = (state_16854[(11)]);
var inst_16832 = (state_16854[(2)]);
var inst_16833 = [];
var inst_16834 = inst_16833.push(inst_16815);
var inst_16811 = inst_16833;
var inst_16812 = inst_16819;
var state_16854__$1 = (function (){var statearr_16874 = state_16854;
(statearr_16874[(14)] = inst_16832);

(statearr_16874[(15)] = inst_16834);

(statearr_16874[(7)] = inst_16811);

(statearr_16874[(8)] = inst_16812);

return statearr_16874;
})();
var statearr_16875_17426 = state_16854__$1;
(statearr_16875_17426[(2)] = null);

(statearr_16875_17426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (16))){
var state_16854__$1 = state_16854;
var statearr_16876_17427 = state_16854__$1;
(statearr_16876_17427[(2)] = null);

(statearr_16876_17427[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (10))){
var inst_16825 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
if(cljs.core.truth_(inst_16825)){
var statearr_16877_17428 = state_16854__$1;
(statearr_16877_17428[(1)] = (11));

} else {
var statearr_16878_17429 = state_16854__$1;
(statearr_16878_17429[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (18))){
var inst_16844 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
var statearr_16879_17430 = state_16854__$1;
(statearr_16879_17430[(2)] = inst_16844);

(statearr_16879_17430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (8))){
var inst_16820 = (state_16854[(13)]);
var state_16854__$1 = state_16854;
var statearr_16880_17431 = state_16854__$1;
(statearr_16880_17431[(2)] = inst_16820);

(statearr_16880_17431[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14777__auto__ = null;
var cljs$core$async$state_machine__14777__auto____0 = (function (){
var statearr_16881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16881[(0)] = cljs$core$async$state_machine__14777__auto__);

(statearr_16881[(1)] = (1));

return statearr_16881;
});
var cljs$core$async$state_machine__14777__auto____1 = (function (state_16854){
while(true){
var ret_value__14778__auto__ = (function (){try{while(true){
var result__14779__auto__ = switch__14776__auto__(state_16854);
if(cljs.core.keyword_identical_QMARK_(result__14779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14779__auto__;
}
break;
}
}catch (e16882){var ex__14780__auto__ = e16882;
var statearr_16883_17432 = state_16854;
(statearr_16883_17432[(2)] = ex__14780__auto__);


if(cljs.core.seq((state_16854[(4)]))){
var statearr_16884_17434 = state_16854;
(statearr_16884_17434[(1)] = cljs.core.first((state_16854[(4)])));

} else {
throw ex__14780__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17435 = state_16854;
state_16854 = G__17435;
continue;
} else {
return ret_value__14778__auto__;
}
break;
}
});
cljs$core$async$state_machine__14777__auto__ = function(state_16854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14777__auto____1.call(this,state_16854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14777__auto____0;
cljs$core$async$state_machine__14777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14777__auto____1;
return cljs$core$async$state_machine__14777__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16885 = f__14889__auto__();
(statearr_16885[(6)] = c__14888__auto___17411);

return statearr_16885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
