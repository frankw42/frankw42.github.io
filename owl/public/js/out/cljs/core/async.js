// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22552 = [];
var len__21337__auto___22558 = arguments.length;
var i__21338__auto___22559 = (0);
while(true){
if((i__21338__auto___22559 < len__21337__auto___22558)){
args22552.push((arguments[i__21338__auto___22559]));

var G__22560 = (i__21338__auto___22559 + (1));
i__21338__auto___22559 = G__22560;
continue;
} else {
}
break;
}

var G__22554 = args22552.length;
switch (G__22554) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22552.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22555 = (function (f,blockable,meta22556){
this.f = f;
this.blockable = blockable;
this.meta22556 = meta22556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22557,meta22556__$1){
var self__ = this;
var _22557__$1 = this;
return (new cljs.core.async.t_cljs$core$async22555(self__.f,self__.blockable,meta22556__$1));
});

cljs.core.async.t_cljs$core$async22555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22557){
var self__ = this;
var _22557__$1 = this;
return self__.meta22556;
});

cljs.core.async.t_cljs$core$async22555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22556","meta22556",-586750771,null)], null);
});

cljs.core.async.t_cljs$core$async22555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22555";

cljs.core.async.t_cljs$core$async22555.cljs$lang$ctorPrWriter = (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async22555");
});

cljs.core.async.__GT_t_cljs$core$async22555 = (function cljs$core$async$__GT_t_cljs$core$async22555(f__$1,blockable__$1,meta22556){
return (new cljs.core.async.t_cljs$core$async22555(f__$1,blockable__$1,meta22556));
});

}

return (new cljs.core.async.t_cljs$core$async22555(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args22564 = [];
var len__21337__auto___22567 = arguments.length;
var i__21338__auto___22568 = (0);
while(true){
if((i__21338__auto___22568 < len__21337__auto___22567)){
args22564.push((arguments[i__21338__auto___22568]));

var G__22569 = (i__21338__auto___22568 + (1));
i__21338__auto___22568 = G__22569;
continue;
} else {
}
break;
}

var G__22566 = args22564.length;
switch (G__22566) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22564.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22571 = [];
var len__21337__auto___22574 = arguments.length;
var i__21338__auto___22575 = (0);
while(true){
if((i__21338__auto___22575 < len__21337__auto___22574)){
args22571.push((arguments[i__21338__auto___22575]));

var G__22576 = (i__21338__auto___22575 + (1));
i__21338__auto___22575 = G__22576;
continue;
} else {
}
break;
}

var G__22573 = args22571.length;
switch (G__22573) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22571.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args22578 = [];
var len__21337__auto___22581 = arguments.length;
var i__21338__auto___22582 = (0);
while(true){
if((i__21338__auto___22582 < len__21337__auto___22581)){
args22578.push((arguments[i__21338__auto___22582]));

var G__22583 = (i__21338__auto___22582 + (1));
i__21338__auto___22582 = G__22583;
continue;
} else {
}
break;
}

var G__22580 = args22578.length;
switch (G__22580) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22578.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22585 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22585);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22585,ret){
return (function (){
return fn1.call(null,val_22585);
});})(val_22585,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22586 = [];
var len__21337__auto___22589 = arguments.length;
var i__21338__auto___22590 = (0);
while(true){
if((i__21338__auto___22590 < len__21337__auto___22589)){
args22586.push((arguments[i__21338__auto___22590]));

var G__22591 = (i__21338__auto___22590 + (1));
i__21338__auto___22590 = G__22591;
continue;
} else {
}
break;
}

var G__22588 = args22586.length;
switch (G__22588) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22586.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21147__auto___22593 = n;
var x_22594 = (0);
while(true){
if((x_22594 < n__21147__auto___22593)){
(a[x_22594] = (0));

var G__22595 = (x_22594 + (1));
x_22594 = G__22595;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22596 = (i + (1));
i = G__22596;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22600 = (function (flag,meta22601){
this.flag = flag;
this.meta22601 = meta22601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22602,meta22601__$1){
var self__ = this;
var _22602__$1 = this;
return (new cljs.core.async.t_cljs$core$async22600(self__.flag,meta22601__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22602){
var self__ = this;
var _22602__$1 = this;
return self__.meta22601;
});})(flag))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22600.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22601","meta22601",-1484654621,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22600";

cljs.core.async.t_cljs$core$async22600.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async22600");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22600 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22600(flag__$1,meta22601){
return (new cljs.core.async.t_cljs$core$async22600(flag__$1,meta22601));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22600(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22606 = (function (flag,cb,meta22607){
this.flag = flag;
this.cb = cb;
this.meta22607 = meta22607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22608,meta22607__$1){
var self__ = this;
var _22608__$1 = this;
return (new cljs.core.async.t_cljs$core$async22606(self__.flag,self__.cb,meta22607__$1));
});

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22608){
var self__ = this;
var _22608__$1 = this;
return self__.meta22607;
});

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22607","meta22607",-1795274326,null)], null);
});

cljs.core.async.t_cljs$core$async22606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22606";

cljs.core.async.t_cljs$core$async22606.cljs$lang$ctorPrWriter = (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async22606");
});

cljs.core.async.__GT_t_cljs$core$async22606 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22606(flag__$1,cb__$1,meta22607){
return (new cljs.core.async.t_cljs$core$async22606(flag__$1,cb__$1,meta22607));
});

}

return (new cljs.core.async.t_cljs$core$async22606(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22609_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22609_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22610_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22610_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20229__auto__ = wport;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22611 = (i + (1));
i = G__22611;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20229__auto__ = ret;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20217__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20217__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20217__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__21344__auto__ = [];
var len__21337__auto___22617 = arguments.length;
var i__21338__auto___22618 = (0);
while(true){
if((i__21338__auto___22618 < len__21337__auto___22617)){
args__21344__auto__.push((arguments[i__21338__auto___22618]));

var G__22619 = (i__21338__auto___22618 + (1));
i__21338__auto___22618 = G__22619;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((1) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21345__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22614){
var map__22615 = p__22614;
var map__22615__$1 = ((((!((map__22615 == null)))?((((map__22615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22615):map__22615);
var opts = map__22615__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22612){
var G__22613 = cljs.core.first.call(null,seq22612);
var seq22612__$1 = cljs.core.next.call(null,seq22612);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22613,seq22612__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args22620 = [];
var len__21337__auto___22670 = arguments.length;
var i__21338__auto___22671 = (0);
while(true){
if((i__21338__auto___22671 < len__21337__auto___22670)){
args22620.push((arguments[i__21338__auto___22671]));

var G__22672 = (i__21338__auto___22671 + (1));
i__21338__auto___22671 = G__22672;
continue;
} else {
}
break;
}

var G__22622 = args22620.length;
switch (G__22622) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22620.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22507__auto___22674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___22674){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___22674){
return (function (state_22646){
var state_val_22647 = (state_22646[(1)]);
if((state_val_22647 === (7))){
var inst_22642 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22648_22675 = state_22646__$1;
(statearr_22648_22675[(2)] = inst_22642);

(statearr_22648_22675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (1))){
var state_22646__$1 = state_22646;
var statearr_22649_22676 = state_22646__$1;
(statearr_22649_22676[(2)] = null);

(statearr_22649_22676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (4))){
var inst_22625 = (state_22646[(7)]);
var inst_22625__$1 = (state_22646[(2)]);
var inst_22626 = (inst_22625__$1 == null);
var state_22646__$1 = (function (){var statearr_22650 = state_22646;
(statearr_22650[(7)] = inst_22625__$1);

return statearr_22650;
})();
if(cljs.core.truth_(inst_22626)){
var statearr_22651_22677 = state_22646__$1;
(statearr_22651_22677[(1)] = (5));

} else {
var statearr_22652_22678 = state_22646__$1;
(statearr_22652_22678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (13))){
var state_22646__$1 = state_22646;
var statearr_22653_22679 = state_22646__$1;
(statearr_22653_22679[(2)] = null);

(statearr_22653_22679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (6))){
var inst_22625 = (state_22646[(7)]);
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22646__$1,(11),to,inst_22625);
} else {
if((state_val_22647 === (3))){
var inst_22644 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22646__$1,inst_22644);
} else {
if((state_val_22647 === (12))){
var state_22646__$1 = state_22646;
var statearr_22654_22680 = state_22646__$1;
(statearr_22654_22680[(2)] = null);

(statearr_22654_22680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (2))){
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22646__$1,(4),from);
} else {
if((state_val_22647 === (11))){
var inst_22635 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
if(cljs.core.truth_(inst_22635)){
var statearr_22655_22681 = state_22646__$1;
(statearr_22655_22681[(1)] = (12));

} else {
var statearr_22656_22682 = state_22646__$1;
(statearr_22656_22682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (9))){
var state_22646__$1 = state_22646;
var statearr_22657_22683 = state_22646__$1;
(statearr_22657_22683[(2)] = null);

(statearr_22657_22683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (5))){
var state_22646__$1 = state_22646;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22658_22684 = state_22646__$1;
(statearr_22658_22684[(1)] = (8));

} else {
var statearr_22659_22685 = state_22646__$1;
(statearr_22659_22685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (14))){
var inst_22640 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22660_22686 = state_22646__$1;
(statearr_22660_22686[(2)] = inst_22640);

(statearr_22660_22686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (10))){
var inst_22632 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22661_22687 = state_22646__$1;
(statearr_22661_22687[(2)] = inst_22632);

(statearr_22661_22687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (8))){
var inst_22629 = cljs.core.async.close_BANG_.call(null,to);
var state_22646__$1 = state_22646;
var statearr_22662_22688 = state_22646__$1;
(statearr_22662_22688[(2)] = inst_22629);

(statearr_22662_22688[(1)] = (10));


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
});})(c__22507__auto___22674))
;
return ((function (switch__22395__auto__,c__22507__auto___22674){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_22666 = [null,null,null,null,null,null,null,null];
(statearr_22666[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_22666[(1)] = (1));

return statearr_22666;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_22646){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_22646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e22667){if((e22667 instanceof Object)){
var ex__22399__auto__ = e22667;
var statearr_22668_22689 = state_22646;
(statearr_22668_22689[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22690 = state_22646;
state_22646 = G__22690;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_22646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_22646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___22674))
})();
var state__22509__auto__ = (function (){var statearr_22669 = f__22508__auto__.call(null);
(statearr_22669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___22674);

return statearr_22669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___22674))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22878){
var vec__22879 = p__22878;
var v = cljs.core.nth.call(null,vec__22879,(0),null);
var p = cljs.core.nth.call(null,vec__22879,(1),null);
var job = vec__22879;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22507__auto___23065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___23065,res,vec__22879,v,p,job,jobs,results){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___23065,res,vec__22879,v,p,job,jobs,results){
return (function (state_22886){
var state_val_22887 = (state_22886[(1)]);
if((state_val_22887 === (1))){
var state_22886__$1 = state_22886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22886__$1,(2),res,v);
} else {
if((state_val_22887 === (2))){
var inst_22883 = (state_22886[(2)]);
var inst_22884 = cljs.core.async.close_BANG_.call(null,res);
var state_22886__$1 = (function (){var statearr_22888 = state_22886;
(statearr_22888[(7)] = inst_22883);

return statearr_22888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22886__$1,inst_22884);
} else {
return null;
}
}
});})(c__22507__auto___23065,res,vec__22879,v,p,job,jobs,results))
;
return ((function (switch__22395__auto__,c__22507__auto___23065,res,vec__22879,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0 = (function (){
var statearr_22892 = [null,null,null,null,null,null,null,null];
(statearr_22892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__);

(statearr_22892[(1)] = (1));

return statearr_22892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1 = (function (state_22886){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_22886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e22893){if((e22893 instanceof Object)){
var ex__22399__auto__ = e22893;
var statearr_22894_23066 = state_22886;
(statearr_22894_23066[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23067 = state_22886;
state_22886 = G__23067;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = function(state_22886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1.call(this,state_22886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___23065,res,vec__22879,v,p,job,jobs,results))
})();
var state__22509__auto__ = (function (){var statearr_22895 = f__22508__auto__.call(null);
(statearr_22895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___23065);

return statearr_22895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___23065,res,vec__22879,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22896){
var vec__22897 = p__22896;
var v = cljs.core.nth.call(null,vec__22897,(0),null);
var p = cljs.core.nth.call(null,vec__22897,(1),null);
var job = vec__22897;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21147__auto___23068 = n;
var __23069 = (0);
while(true){
if((__23069 < n__21147__auto___23068)){
var G__22900_23070 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22900_23070) {
case "compute":
var c__22507__auto___23072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23069,c__22507__auto___23072,G__22900_23070,n__21147__auto___23068,jobs,results,process,async){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (__23069,c__22507__auto___23072,G__22900_23070,n__21147__auto___23068,jobs,results,process,async){
return (function (state_22913){
var state_val_22914 = (state_22913[(1)]);
if((state_val_22914 === (1))){
var state_22913__$1 = state_22913;
var statearr_22915_23073 = state_22913__$1;
(statearr_22915_23073[(2)] = null);

(statearr_22915_23073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (2))){
var state_22913__$1 = state_22913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22913__$1,(4),jobs);
} else {
if((state_val_22914 === (3))){
var inst_22911 = (state_22913[(2)]);
var state_22913__$1 = state_22913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22913__$1,inst_22911);
} else {
if((state_val_22914 === (4))){
var inst_22903 = (state_22913[(2)]);
var inst_22904 = process.call(null,inst_22903);
var state_22913__$1 = state_22913;
if(cljs.core.truth_(inst_22904)){
var statearr_22916_23074 = state_22913__$1;
(statearr_22916_23074[(1)] = (5));

} else {
var statearr_22917_23075 = state_22913__$1;
(statearr_22917_23075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (5))){
var state_22913__$1 = state_22913;
var statearr_22918_23076 = state_22913__$1;
(statearr_22918_23076[(2)] = null);

(statearr_22918_23076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (6))){
var state_22913__$1 = state_22913;
var statearr_22919_23077 = state_22913__$1;
(statearr_22919_23077[(2)] = null);

(statearr_22919_23077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (7))){
var inst_22909 = (state_22913[(2)]);
var state_22913__$1 = state_22913;
var statearr_22920_23078 = state_22913__$1;
(statearr_22920_23078[(2)] = inst_22909);

(statearr_22920_23078[(1)] = (3));


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
});})(__23069,c__22507__auto___23072,G__22900_23070,n__21147__auto___23068,jobs,results,process,async))
;
return ((function (__23069,switch__22395__auto__,c__22507__auto___23072,G__22900_23070,n__21147__auto___23068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0 = (function (){
var statearr_22924 = [null,null,null,null,null,null,null];
(statearr_22924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__);

(statearr_22924[(1)] = (1));

return statearr_22924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1 = (function (state_22913){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_22913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e22925){if((e22925 instanceof Object)){
var ex__22399__auto__ = e22925;
var statearr_22926_23079 = state_22913;
(statearr_22926_23079[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23080 = state_22913;
state_22913 = G__23080;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = function(state_22913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1.call(this,state_22913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__;
})()
;})(__23069,switch__22395__auto__,c__22507__auto___23072,G__22900_23070,n__21147__auto___23068,jobs,results,process,async))
})();
var state__22509__auto__ = (function (){var statearr_22927 = f__22508__auto__.call(null);
(statearr_22927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___23072);

return statearr_22927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(__23069,c__22507__auto___23072,G__22900_23070,n__21147__auto___23068,jobs,results,process,async))
);


break;
case "async":
var c__22507__auto___23081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23069,c__22507__auto___23081,G__22900_23070,n__21147__auto___23068,jobs,results,process,async){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (__23069,c__22507__auto___23081,G__22900_23070,n__21147__auto___23068,jobs,results,process,async){
return (function (state_22940){
var state_val_22941 = (state_22940[(1)]);
if((state_val_22941 === (1))){
var state_22940__$1 = state_22940;
var statearr_22942_23082 = state_22940__$1;
(statearr_22942_23082[(2)] = null);

(statearr_22942_23082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22941 === (2))){
var state_22940__$1 = state_22940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22940__$1,(4),jobs);
} else {
if((state_val_22941 === (3))){
var inst_22938 = (state_22940[(2)]);
var state_22940__$1 = state_22940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22940__$1,inst_22938);
} else {
if((state_val_22941 === (4))){
var inst_22930 = (state_22940[(2)]);
var inst_22931 = async.call(null,inst_22930);
var state_22940__$1 = state_22940;
if(cljs.core.truth_(inst_22931)){
var statearr_22943_23083 = state_22940__$1;
(statearr_22943_23083[(1)] = (5));

} else {
var statearr_22944_23084 = state_22940__$1;
(statearr_22944_23084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22941 === (5))){
var state_22940__$1 = state_22940;
var statearr_22945_23085 = state_22940__$1;
(statearr_22945_23085[(2)] = null);

(statearr_22945_23085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22941 === (6))){
var state_22940__$1 = state_22940;
var statearr_22946_23086 = state_22940__$1;
(statearr_22946_23086[(2)] = null);

(statearr_22946_23086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22941 === (7))){
var inst_22936 = (state_22940[(2)]);
var state_22940__$1 = state_22940;
var statearr_22947_23087 = state_22940__$1;
(statearr_22947_23087[(2)] = inst_22936);

(statearr_22947_23087[(1)] = (3));


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
});})(__23069,c__22507__auto___23081,G__22900_23070,n__21147__auto___23068,jobs,results,process,async))
;
return ((function (__23069,switch__22395__auto__,c__22507__auto___23081,G__22900_23070,n__21147__auto___23068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0 = (function (){
var statearr_22951 = [null,null,null,null,null,null,null];
(statearr_22951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__);

(statearr_22951[(1)] = (1));

return statearr_22951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1 = (function (state_22940){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_22940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e22952){if((e22952 instanceof Object)){
var ex__22399__auto__ = e22952;
var statearr_22953_23088 = state_22940;
(statearr_22953_23088[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23089 = state_22940;
state_22940 = G__23089;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = function(state_22940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1.call(this,state_22940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__;
})()
;})(__23069,switch__22395__auto__,c__22507__auto___23081,G__22900_23070,n__21147__auto___23068,jobs,results,process,async))
})();
var state__22509__auto__ = (function (){var statearr_22954 = f__22508__auto__.call(null);
(statearr_22954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___23081);

return statearr_22954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(__23069,c__22507__auto___23081,G__22900_23070,n__21147__auto___23068,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23090 = (__23069 + (1));
__23069 = G__23090;
continue;
} else {
}
break;
}

var c__22507__auto___23091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___23091,jobs,results,process,async){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___23091,jobs,results,process,async){
return (function (state_22976){
var state_val_22977 = (state_22976[(1)]);
if((state_val_22977 === (1))){
var state_22976__$1 = state_22976;
var statearr_22978_23092 = state_22976__$1;
(statearr_22978_23092[(2)] = null);

(statearr_22978_23092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (2))){
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22976__$1,(4),from);
} else {
if((state_val_22977 === (3))){
var inst_22974 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22976__$1,inst_22974);
} else {
if((state_val_22977 === (4))){
var inst_22957 = (state_22976[(7)]);
var inst_22957__$1 = (state_22976[(2)]);
var inst_22958 = (inst_22957__$1 == null);
var state_22976__$1 = (function (){var statearr_22979 = state_22976;
(statearr_22979[(7)] = inst_22957__$1);

return statearr_22979;
})();
if(cljs.core.truth_(inst_22958)){
var statearr_22980_23093 = state_22976__$1;
(statearr_22980_23093[(1)] = (5));

} else {
var statearr_22981_23094 = state_22976__$1;
(statearr_22981_23094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (5))){
var inst_22960 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22976__$1 = state_22976;
var statearr_22982_23095 = state_22976__$1;
(statearr_22982_23095[(2)] = inst_22960);

(statearr_22982_23095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (6))){
var inst_22957 = (state_22976[(7)]);
var inst_22962 = (state_22976[(8)]);
var inst_22962__$1 = cljs.core.async.chan.call(null,(1));
var inst_22963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22964 = [inst_22957,inst_22962__$1];
var inst_22965 = (new cljs.core.PersistentVector(null,2,(5),inst_22963,inst_22964,null));
var state_22976__$1 = (function (){var statearr_22983 = state_22976;
(statearr_22983[(8)] = inst_22962__$1);

return statearr_22983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22976__$1,(8),jobs,inst_22965);
} else {
if((state_val_22977 === (7))){
var inst_22972 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
var statearr_22984_23096 = state_22976__$1;
(statearr_22984_23096[(2)] = inst_22972);

(statearr_22984_23096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (8))){
var inst_22962 = (state_22976[(8)]);
var inst_22967 = (state_22976[(2)]);
var state_22976__$1 = (function (){var statearr_22985 = state_22976;
(statearr_22985[(9)] = inst_22967);

return statearr_22985;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22976__$1,(9),results,inst_22962);
} else {
if((state_val_22977 === (9))){
var inst_22969 = (state_22976[(2)]);
var state_22976__$1 = (function (){var statearr_22986 = state_22976;
(statearr_22986[(10)] = inst_22969);

return statearr_22986;
})();
var statearr_22987_23097 = state_22976__$1;
(statearr_22987_23097[(2)] = null);

(statearr_22987_23097[(1)] = (2));


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
});})(c__22507__auto___23091,jobs,results,process,async))
;
return ((function (switch__22395__auto__,c__22507__auto___23091,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0 = (function (){
var statearr_22991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__);

(statearr_22991[(1)] = (1));

return statearr_22991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1 = (function (state_22976){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_22976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e22992){if((e22992 instanceof Object)){
var ex__22399__auto__ = e22992;
var statearr_22993_23098 = state_22976;
(statearr_22993_23098[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23099 = state_22976;
state_22976 = G__23099;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = function(state_22976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1.call(this,state_22976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___23091,jobs,results,process,async))
})();
var state__22509__auto__ = (function (){var statearr_22994 = f__22508__auto__.call(null);
(statearr_22994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___23091);

return statearr_22994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___23091,jobs,results,process,async))
);


var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__,jobs,results,process,async){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__,jobs,results,process,async){
return (function (state_23032){
var state_val_23033 = (state_23032[(1)]);
if((state_val_23033 === (7))){
var inst_23028 = (state_23032[(2)]);
var state_23032__$1 = state_23032;
var statearr_23034_23100 = state_23032__$1;
(statearr_23034_23100[(2)] = inst_23028);

(statearr_23034_23100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (20))){
var state_23032__$1 = state_23032;
var statearr_23035_23101 = state_23032__$1;
(statearr_23035_23101[(2)] = null);

(statearr_23035_23101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (1))){
var state_23032__$1 = state_23032;
var statearr_23036_23102 = state_23032__$1;
(statearr_23036_23102[(2)] = null);

(statearr_23036_23102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (4))){
var inst_22997 = (state_23032[(7)]);
var inst_22997__$1 = (state_23032[(2)]);
var inst_22998 = (inst_22997__$1 == null);
var state_23032__$1 = (function (){var statearr_23037 = state_23032;
(statearr_23037[(7)] = inst_22997__$1);

return statearr_23037;
})();
if(cljs.core.truth_(inst_22998)){
var statearr_23038_23103 = state_23032__$1;
(statearr_23038_23103[(1)] = (5));

} else {
var statearr_23039_23104 = state_23032__$1;
(statearr_23039_23104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (15))){
var inst_23010 = (state_23032[(8)]);
var state_23032__$1 = state_23032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23032__$1,(18),to,inst_23010);
} else {
if((state_val_23033 === (21))){
var inst_23023 = (state_23032[(2)]);
var state_23032__$1 = state_23032;
var statearr_23040_23105 = state_23032__$1;
(statearr_23040_23105[(2)] = inst_23023);

(statearr_23040_23105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (13))){
var inst_23025 = (state_23032[(2)]);
var state_23032__$1 = (function (){var statearr_23041 = state_23032;
(statearr_23041[(9)] = inst_23025);

return statearr_23041;
})();
var statearr_23042_23106 = state_23032__$1;
(statearr_23042_23106[(2)] = null);

(statearr_23042_23106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (6))){
var inst_22997 = (state_23032[(7)]);
var state_23032__$1 = state_23032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23032__$1,(11),inst_22997);
} else {
if((state_val_23033 === (17))){
var inst_23018 = (state_23032[(2)]);
var state_23032__$1 = state_23032;
if(cljs.core.truth_(inst_23018)){
var statearr_23043_23107 = state_23032__$1;
(statearr_23043_23107[(1)] = (19));

} else {
var statearr_23044_23108 = state_23032__$1;
(statearr_23044_23108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (3))){
var inst_23030 = (state_23032[(2)]);
var state_23032__$1 = state_23032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23032__$1,inst_23030);
} else {
if((state_val_23033 === (12))){
var inst_23007 = (state_23032[(10)]);
var state_23032__$1 = state_23032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23032__$1,(14),inst_23007);
} else {
if((state_val_23033 === (2))){
var state_23032__$1 = state_23032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23032__$1,(4),results);
} else {
if((state_val_23033 === (19))){
var state_23032__$1 = state_23032;
var statearr_23045_23109 = state_23032__$1;
(statearr_23045_23109[(2)] = null);

(statearr_23045_23109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (11))){
var inst_23007 = (state_23032[(2)]);
var state_23032__$1 = (function (){var statearr_23046 = state_23032;
(statearr_23046[(10)] = inst_23007);

return statearr_23046;
})();
var statearr_23047_23110 = state_23032__$1;
(statearr_23047_23110[(2)] = null);

(statearr_23047_23110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (9))){
var state_23032__$1 = state_23032;
var statearr_23048_23111 = state_23032__$1;
(statearr_23048_23111[(2)] = null);

(statearr_23048_23111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (5))){
var state_23032__$1 = state_23032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23049_23112 = state_23032__$1;
(statearr_23049_23112[(1)] = (8));

} else {
var statearr_23050_23113 = state_23032__$1;
(statearr_23050_23113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (14))){
var inst_23012 = (state_23032[(11)]);
var inst_23010 = (state_23032[(8)]);
var inst_23010__$1 = (state_23032[(2)]);
var inst_23011 = (inst_23010__$1 == null);
var inst_23012__$1 = cljs.core.not.call(null,inst_23011);
var state_23032__$1 = (function (){var statearr_23051 = state_23032;
(statearr_23051[(11)] = inst_23012__$1);

(statearr_23051[(8)] = inst_23010__$1);

return statearr_23051;
})();
if(inst_23012__$1){
var statearr_23052_23114 = state_23032__$1;
(statearr_23052_23114[(1)] = (15));

} else {
var statearr_23053_23115 = state_23032__$1;
(statearr_23053_23115[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (16))){
var inst_23012 = (state_23032[(11)]);
var state_23032__$1 = state_23032;
var statearr_23054_23116 = state_23032__$1;
(statearr_23054_23116[(2)] = inst_23012);

(statearr_23054_23116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (10))){
var inst_23004 = (state_23032[(2)]);
var state_23032__$1 = state_23032;
var statearr_23055_23117 = state_23032__$1;
(statearr_23055_23117[(2)] = inst_23004);

(statearr_23055_23117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (18))){
var inst_23015 = (state_23032[(2)]);
var state_23032__$1 = state_23032;
var statearr_23056_23118 = state_23032__$1;
(statearr_23056_23118[(2)] = inst_23015);

(statearr_23056_23118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23033 === (8))){
var inst_23001 = cljs.core.async.close_BANG_.call(null,to);
var state_23032__$1 = state_23032;
var statearr_23057_23119 = state_23032__$1;
(statearr_23057_23119[(2)] = inst_23001);

(statearr_23057_23119[(1)] = (10));


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
});})(c__22507__auto__,jobs,results,process,async))
;
return ((function (switch__22395__auto__,c__22507__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0 = (function (){
var statearr_23061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__);

(statearr_23061[(1)] = (1));

return statearr_23061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1 = (function (state_23032){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_23032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e23062){if((e23062 instanceof Object)){
var ex__22399__auto__ = e23062;
var statearr_23063_23120 = state_23032;
(statearr_23063_23120[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23121 = state_23032;
state_23032 = G__23121;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__ = function(state_23032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1.call(this,state_23032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__,jobs,results,process,async))
})();
var state__22509__auto__ = (function (){var statearr_23064 = f__22508__auto__.call(null);
(statearr_23064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_23064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__,jobs,results,process,async))
);

return c__22507__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23122 = [];
var len__21337__auto___23125 = arguments.length;
var i__21338__auto___23126 = (0);
while(true){
if((i__21338__auto___23126 < len__21337__auto___23125)){
args23122.push((arguments[i__21338__auto___23126]));

var G__23127 = (i__21338__auto___23126 + (1));
i__21338__auto___23126 = G__23127;
continue;
} else {
}
break;
}

var G__23124 = args23122.length;
switch (G__23124) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23122.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args23129 = [];
var len__21337__auto___23132 = arguments.length;
var i__21338__auto___23133 = (0);
while(true){
if((i__21338__auto___23133 < len__21337__auto___23132)){
args23129.push((arguments[i__21338__auto___23133]));

var G__23134 = (i__21338__auto___23133 + (1));
i__21338__auto___23133 = G__23134;
continue;
} else {
}
break;
}

var G__23131 = args23129.length;
switch (G__23131) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23129.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args23136 = [];
var len__21337__auto___23189 = arguments.length;
var i__21338__auto___23190 = (0);
while(true){
if((i__21338__auto___23190 < len__21337__auto___23189)){
args23136.push((arguments[i__21338__auto___23190]));

var G__23191 = (i__21338__auto___23190 + (1));
i__21338__auto___23190 = G__23191;
continue;
} else {
}
break;
}

var G__23138 = args23136.length;
switch (G__23138) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23136.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22507__auto___23193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___23193,tc,fc){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___23193,tc,fc){
return (function (state_23164){
var state_val_23165 = (state_23164[(1)]);
if((state_val_23165 === (7))){
var inst_23160 = (state_23164[(2)]);
var state_23164__$1 = state_23164;
var statearr_23166_23194 = state_23164__$1;
(statearr_23166_23194[(2)] = inst_23160);

(statearr_23166_23194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (1))){
var state_23164__$1 = state_23164;
var statearr_23167_23195 = state_23164__$1;
(statearr_23167_23195[(2)] = null);

(statearr_23167_23195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (4))){
var inst_23141 = (state_23164[(7)]);
var inst_23141__$1 = (state_23164[(2)]);
var inst_23142 = (inst_23141__$1 == null);
var state_23164__$1 = (function (){var statearr_23168 = state_23164;
(statearr_23168[(7)] = inst_23141__$1);

return statearr_23168;
})();
if(cljs.core.truth_(inst_23142)){
var statearr_23169_23196 = state_23164__$1;
(statearr_23169_23196[(1)] = (5));

} else {
var statearr_23170_23197 = state_23164__$1;
(statearr_23170_23197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (13))){
var state_23164__$1 = state_23164;
var statearr_23171_23198 = state_23164__$1;
(statearr_23171_23198[(2)] = null);

(statearr_23171_23198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (6))){
var inst_23141 = (state_23164[(7)]);
var inst_23147 = p.call(null,inst_23141);
var state_23164__$1 = state_23164;
if(cljs.core.truth_(inst_23147)){
var statearr_23172_23199 = state_23164__$1;
(statearr_23172_23199[(1)] = (9));

} else {
var statearr_23173_23200 = state_23164__$1;
(statearr_23173_23200[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (3))){
var inst_23162 = (state_23164[(2)]);
var state_23164__$1 = state_23164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23164__$1,inst_23162);
} else {
if((state_val_23165 === (12))){
var state_23164__$1 = state_23164;
var statearr_23174_23201 = state_23164__$1;
(statearr_23174_23201[(2)] = null);

(statearr_23174_23201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (2))){
var state_23164__$1 = state_23164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23164__$1,(4),ch);
} else {
if((state_val_23165 === (11))){
var inst_23141 = (state_23164[(7)]);
var inst_23151 = (state_23164[(2)]);
var state_23164__$1 = state_23164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23164__$1,(8),inst_23151,inst_23141);
} else {
if((state_val_23165 === (9))){
var state_23164__$1 = state_23164;
var statearr_23175_23202 = state_23164__$1;
(statearr_23175_23202[(2)] = tc);

(statearr_23175_23202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (5))){
var inst_23144 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23145 = cljs.core.async.close_BANG_.call(null,fc);
var state_23164__$1 = (function (){var statearr_23176 = state_23164;
(statearr_23176[(8)] = inst_23144);

return statearr_23176;
})();
var statearr_23177_23203 = state_23164__$1;
(statearr_23177_23203[(2)] = inst_23145);

(statearr_23177_23203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (14))){
var inst_23158 = (state_23164[(2)]);
var state_23164__$1 = state_23164;
var statearr_23178_23204 = state_23164__$1;
(statearr_23178_23204[(2)] = inst_23158);

(statearr_23178_23204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (10))){
var state_23164__$1 = state_23164;
var statearr_23179_23205 = state_23164__$1;
(statearr_23179_23205[(2)] = fc);

(statearr_23179_23205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23165 === (8))){
var inst_23153 = (state_23164[(2)]);
var state_23164__$1 = state_23164;
if(cljs.core.truth_(inst_23153)){
var statearr_23180_23206 = state_23164__$1;
(statearr_23180_23206[(1)] = (12));

} else {
var statearr_23181_23207 = state_23164__$1;
(statearr_23181_23207[(1)] = (13));

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
});})(c__22507__auto___23193,tc,fc))
;
return ((function (switch__22395__auto__,c__22507__auto___23193,tc,fc){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_23185 = [null,null,null,null,null,null,null,null,null];
(statearr_23185[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_23185[(1)] = (1));

return statearr_23185;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_23164){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_23164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e23186){if((e23186 instanceof Object)){
var ex__22399__auto__ = e23186;
var statearr_23187_23208 = state_23164;
(statearr_23187_23208[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23209 = state_23164;
state_23164 = G__23209;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_23164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_23164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___23193,tc,fc))
})();
var state__22509__auto__ = (function (){var statearr_23188 = f__22508__auto__.call(null);
(statearr_23188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___23193);

return statearr_23188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___23193,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__){
return (function (state_23273){
var state_val_23274 = (state_23273[(1)]);
if((state_val_23274 === (7))){
var inst_23269 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23275_23296 = state_23273__$1;
(statearr_23275_23296[(2)] = inst_23269);

(statearr_23275_23296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (1))){
var inst_23253 = init;
var state_23273__$1 = (function (){var statearr_23276 = state_23273;
(statearr_23276[(7)] = inst_23253);

return statearr_23276;
})();
var statearr_23277_23297 = state_23273__$1;
(statearr_23277_23297[(2)] = null);

(statearr_23277_23297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (4))){
var inst_23256 = (state_23273[(8)]);
var inst_23256__$1 = (state_23273[(2)]);
var inst_23257 = (inst_23256__$1 == null);
var state_23273__$1 = (function (){var statearr_23278 = state_23273;
(statearr_23278[(8)] = inst_23256__$1);

return statearr_23278;
})();
if(cljs.core.truth_(inst_23257)){
var statearr_23279_23298 = state_23273__$1;
(statearr_23279_23298[(1)] = (5));

} else {
var statearr_23280_23299 = state_23273__$1;
(statearr_23280_23299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (6))){
var inst_23260 = (state_23273[(9)]);
var inst_23256 = (state_23273[(8)]);
var inst_23253 = (state_23273[(7)]);
var inst_23260__$1 = f.call(null,inst_23253,inst_23256);
var inst_23261 = cljs.core.reduced_QMARK_.call(null,inst_23260__$1);
var state_23273__$1 = (function (){var statearr_23281 = state_23273;
(statearr_23281[(9)] = inst_23260__$1);

return statearr_23281;
})();
if(inst_23261){
var statearr_23282_23300 = state_23273__$1;
(statearr_23282_23300[(1)] = (8));

} else {
var statearr_23283_23301 = state_23273__$1;
(statearr_23283_23301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (3))){
var inst_23271 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23273__$1,inst_23271);
} else {
if((state_val_23274 === (2))){
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23273__$1,(4),ch);
} else {
if((state_val_23274 === (9))){
var inst_23260 = (state_23273[(9)]);
var inst_23253 = inst_23260;
var state_23273__$1 = (function (){var statearr_23284 = state_23273;
(statearr_23284[(7)] = inst_23253);

return statearr_23284;
})();
var statearr_23285_23302 = state_23273__$1;
(statearr_23285_23302[(2)] = null);

(statearr_23285_23302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (5))){
var inst_23253 = (state_23273[(7)]);
var state_23273__$1 = state_23273;
var statearr_23286_23303 = state_23273__$1;
(statearr_23286_23303[(2)] = inst_23253);

(statearr_23286_23303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (10))){
var inst_23267 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23287_23304 = state_23273__$1;
(statearr_23287_23304[(2)] = inst_23267);

(statearr_23287_23304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (8))){
var inst_23260 = (state_23273[(9)]);
var inst_23263 = cljs.core.deref.call(null,inst_23260);
var state_23273__$1 = state_23273;
var statearr_23288_23305 = state_23273__$1;
(statearr_23288_23305[(2)] = inst_23263);

(statearr_23288_23305[(1)] = (10));


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
});})(c__22507__auto__))
;
return ((function (switch__22395__auto__,c__22507__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22396__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22396__auto____0 = (function (){
var statearr_23292 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23292[(0)] = cljs$core$async$reduce_$_state_machine__22396__auto__);

(statearr_23292[(1)] = (1));

return statearr_23292;
});
var cljs$core$async$reduce_$_state_machine__22396__auto____1 = (function (state_23273){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_23273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e23293){if((e23293 instanceof Object)){
var ex__22399__auto__ = e23293;
var statearr_23294_23306 = state_23273;
(statearr_23294_23306[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23307 = state_23273;
state_23273 = G__23307;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22396__auto__ = function(state_23273){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22396__auto____1.call(this,state_23273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22396__auto____0;
cljs$core$async$reduce_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22396__auto____1;
return cljs$core$async$reduce_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__))
})();
var state__22509__auto__ = (function (){var statearr_23295 = f__22508__auto__.call(null);
(statearr_23295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_23295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__))
);

return c__22507__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__,f__$1){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__,f__$1){
return (function (state_23327){
var state_val_23328 = (state_23327[(1)]);
if((state_val_23328 === (1))){
var inst_23322 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23327__$1 = state_23327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23327__$1,(2),inst_23322);
} else {
if((state_val_23328 === (2))){
var inst_23324 = (state_23327[(2)]);
var inst_23325 = f__$1.call(null,inst_23324);
var state_23327__$1 = state_23327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23327__$1,inst_23325);
} else {
return null;
}
}
});})(c__22507__auto__,f__$1))
;
return ((function (switch__22395__auto__,c__22507__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22396__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22396__auto____0 = (function (){
var statearr_23332 = [null,null,null,null,null,null,null];
(statearr_23332[(0)] = cljs$core$async$transduce_$_state_machine__22396__auto__);

(statearr_23332[(1)] = (1));

return statearr_23332;
});
var cljs$core$async$transduce_$_state_machine__22396__auto____1 = (function (state_23327){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_23327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e23333){if((e23333 instanceof Object)){
var ex__22399__auto__ = e23333;
var statearr_23334_23336 = state_23327;
(statearr_23334_23336[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23337 = state_23327;
state_23327 = G__23337;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22396__auto__ = function(state_23327){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22396__auto____1.call(this,state_23327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22396__auto____0;
cljs$core$async$transduce_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22396__auto____1;
return cljs$core$async$transduce_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__,f__$1))
})();
var state__22509__auto__ = (function (){var statearr_23335 = f__22508__auto__.call(null);
(statearr_23335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_23335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__,f__$1))
);

return c__22507__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23338 = [];
var len__21337__auto___23390 = arguments.length;
var i__21338__auto___23391 = (0);
while(true){
if((i__21338__auto___23391 < len__21337__auto___23390)){
args23338.push((arguments[i__21338__auto___23391]));

var G__23392 = (i__21338__auto___23391 + (1));
i__21338__auto___23391 = G__23392;
continue;
} else {
}
break;
}

var G__23340 = args23338.length;
switch (G__23340) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23338.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__){
return (function (state_23365){
var state_val_23366 = (state_23365[(1)]);
if((state_val_23366 === (7))){
var inst_23347 = (state_23365[(2)]);
var state_23365__$1 = state_23365;
var statearr_23367_23394 = state_23365__$1;
(statearr_23367_23394[(2)] = inst_23347);

(statearr_23367_23394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (1))){
var inst_23341 = cljs.core.seq.call(null,coll);
var inst_23342 = inst_23341;
var state_23365__$1 = (function (){var statearr_23368 = state_23365;
(statearr_23368[(7)] = inst_23342);

return statearr_23368;
})();
var statearr_23369_23395 = state_23365__$1;
(statearr_23369_23395[(2)] = null);

(statearr_23369_23395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (4))){
var inst_23342 = (state_23365[(7)]);
var inst_23345 = cljs.core.first.call(null,inst_23342);
var state_23365__$1 = state_23365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23365__$1,(7),ch,inst_23345);
} else {
if((state_val_23366 === (13))){
var inst_23359 = (state_23365[(2)]);
var state_23365__$1 = state_23365;
var statearr_23370_23396 = state_23365__$1;
(statearr_23370_23396[(2)] = inst_23359);

(statearr_23370_23396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (6))){
var inst_23350 = (state_23365[(2)]);
var state_23365__$1 = state_23365;
if(cljs.core.truth_(inst_23350)){
var statearr_23371_23397 = state_23365__$1;
(statearr_23371_23397[(1)] = (8));

} else {
var statearr_23372_23398 = state_23365__$1;
(statearr_23372_23398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (3))){
var inst_23363 = (state_23365[(2)]);
var state_23365__$1 = state_23365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23365__$1,inst_23363);
} else {
if((state_val_23366 === (12))){
var state_23365__$1 = state_23365;
var statearr_23373_23399 = state_23365__$1;
(statearr_23373_23399[(2)] = null);

(statearr_23373_23399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (2))){
var inst_23342 = (state_23365[(7)]);
var state_23365__$1 = state_23365;
if(cljs.core.truth_(inst_23342)){
var statearr_23374_23400 = state_23365__$1;
(statearr_23374_23400[(1)] = (4));

} else {
var statearr_23375_23401 = state_23365__$1;
(statearr_23375_23401[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (11))){
var inst_23356 = cljs.core.async.close_BANG_.call(null,ch);
var state_23365__$1 = state_23365;
var statearr_23376_23402 = state_23365__$1;
(statearr_23376_23402[(2)] = inst_23356);

(statearr_23376_23402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (9))){
var state_23365__$1 = state_23365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23377_23403 = state_23365__$1;
(statearr_23377_23403[(1)] = (11));

} else {
var statearr_23378_23404 = state_23365__$1;
(statearr_23378_23404[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (5))){
var inst_23342 = (state_23365[(7)]);
var state_23365__$1 = state_23365;
var statearr_23379_23405 = state_23365__$1;
(statearr_23379_23405[(2)] = inst_23342);

(statearr_23379_23405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (10))){
var inst_23361 = (state_23365[(2)]);
var state_23365__$1 = state_23365;
var statearr_23380_23406 = state_23365__$1;
(statearr_23380_23406[(2)] = inst_23361);

(statearr_23380_23406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (8))){
var inst_23342 = (state_23365[(7)]);
var inst_23352 = cljs.core.next.call(null,inst_23342);
var inst_23342__$1 = inst_23352;
var state_23365__$1 = (function (){var statearr_23381 = state_23365;
(statearr_23381[(7)] = inst_23342__$1);

return statearr_23381;
})();
var statearr_23382_23407 = state_23365__$1;
(statearr_23382_23407[(2)] = null);

(statearr_23382_23407[(1)] = (2));


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
});})(c__22507__auto__))
;
return ((function (switch__22395__auto__,c__22507__auto__){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_23386 = [null,null,null,null,null,null,null,null];
(statearr_23386[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_23386[(1)] = (1));

return statearr_23386;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_23365){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_23365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e23387){if((e23387 instanceof Object)){
var ex__22399__auto__ = e23387;
var statearr_23388_23408 = state_23365;
(statearr_23388_23408[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23409 = state_23365;
state_23365 = G__23409;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_23365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_23365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__))
})();
var state__22509__auto__ = (function (){var statearr_23389 = f__22508__auto__.call(null);
(statearr_23389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_23389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__))
);

return c__22507__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20892__auto__ = (((_ == null))?null:_);
var m__20893__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,_);
} else {
var m__20893__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20892__auto__ = (((m == null))?null:m);
var m__20893__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20893__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20892__auto__ = (((m == null))?null:m);
var m__20893__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,m,ch);
} else {
var m__20893__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20892__auto__ = (((m == null))?null:m);
var m__20893__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,m);
} else {
var m__20893__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23635 = (function (ch,cs,meta23636){
this.ch = ch;
this.cs = cs;
this.meta23636 = meta23636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23637,meta23636__$1){
var self__ = this;
var _23637__$1 = this;
return (new cljs.core.async.t_cljs$core$async23635(self__.ch,self__.cs,meta23636__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23637){
var self__ = this;
var _23637__$1 = this;
return self__.meta23636;
});})(cs))
;

cljs.core.async.t_cljs$core$async23635.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23635.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23635.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23635.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23635.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23635.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23636","meta23636",2122328870,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23635";

cljs.core.async.t_cljs$core$async23635.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async23635");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23635 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23635(ch__$1,cs__$1,meta23636){
return (new cljs.core.async.t_cljs$core$async23635(ch__$1,cs__$1,meta23636));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23635(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22507__auto___23860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___23860,cs,m,dchan,dctr,done){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___23860,cs,m,dchan,dctr,done){
return (function (state_23772){
var state_val_23773 = (state_23772[(1)]);
if((state_val_23773 === (7))){
var inst_23768 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23774_23861 = state_23772__$1;
(statearr_23774_23861[(2)] = inst_23768);

(statearr_23774_23861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (20))){
var inst_23671 = (state_23772[(7)]);
var inst_23683 = cljs.core.first.call(null,inst_23671);
var inst_23684 = cljs.core.nth.call(null,inst_23683,(0),null);
var inst_23685 = cljs.core.nth.call(null,inst_23683,(1),null);
var state_23772__$1 = (function (){var statearr_23775 = state_23772;
(statearr_23775[(8)] = inst_23684);

return statearr_23775;
})();
if(cljs.core.truth_(inst_23685)){
var statearr_23776_23862 = state_23772__$1;
(statearr_23776_23862[(1)] = (22));

} else {
var statearr_23777_23863 = state_23772__$1;
(statearr_23777_23863[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (27))){
var inst_23715 = (state_23772[(9)]);
var inst_23720 = (state_23772[(10)]);
var inst_23640 = (state_23772[(11)]);
var inst_23713 = (state_23772[(12)]);
var inst_23720__$1 = cljs.core._nth.call(null,inst_23713,inst_23715);
var inst_23721 = cljs.core.async.put_BANG_.call(null,inst_23720__$1,inst_23640,done);
var state_23772__$1 = (function (){var statearr_23778 = state_23772;
(statearr_23778[(10)] = inst_23720__$1);

return statearr_23778;
})();
if(cljs.core.truth_(inst_23721)){
var statearr_23779_23864 = state_23772__$1;
(statearr_23779_23864[(1)] = (30));

} else {
var statearr_23780_23865 = state_23772__$1;
(statearr_23780_23865[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (1))){
var state_23772__$1 = state_23772;
var statearr_23781_23866 = state_23772__$1;
(statearr_23781_23866[(2)] = null);

(statearr_23781_23866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (24))){
var inst_23671 = (state_23772[(7)]);
var inst_23690 = (state_23772[(2)]);
var inst_23691 = cljs.core.next.call(null,inst_23671);
var inst_23649 = inst_23691;
var inst_23650 = null;
var inst_23651 = (0);
var inst_23652 = (0);
var state_23772__$1 = (function (){var statearr_23782 = state_23772;
(statearr_23782[(13)] = inst_23652);

(statearr_23782[(14)] = inst_23651);

(statearr_23782[(15)] = inst_23690);

(statearr_23782[(16)] = inst_23649);

(statearr_23782[(17)] = inst_23650);

return statearr_23782;
})();
var statearr_23783_23867 = state_23772__$1;
(statearr_23783_23867[(2)] = null);

(statearr_23783_23867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (39))){
var state_23772__$1 = state_23772;
var statearr_23787_23868 = state_23772__$1;
(statearr_23787_23868[(2)] = null);

(statearr_23787_23868[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (4))){
var inst_23640 = (state_23772[(11)]);
var inst_23640__$1 = (state_23772[(2)]);
var inst_23641 = (inst_23640__$1 == null);
var state_23772__$1 = (function (){var statearr_23788 = state_23772;
(statearr_23788[(11)] = inst_23640__$1);

return statearr_23788;
})();
if(cljs.core.truth_(inst_23641)){
var statearr_23789_23869 = state_23772__$1;
(statearr_23789_23869[(1)] = (5));

} else {
var statearr_23790_23870 = state_23772__$1;
(statearr_23790_23870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (15))){
var inst_23652 = (state_23772[(13)]);
var inst_23651 = (state_23772[(14)]);
var inst_23649 = (state_23772[(16)]);
var inst_23650 = (state_23772[(17)]);
var inst_23667 = (state_23772[(2)]);
var inst_23668 = (inst_23652 + (1));
var tmp23784 = inst_23651;
var tmp23785 = inst_23649;
var tmp23786 = inst_23650;
var inst_23649__$1 = tmp23785;
var inst_23650__$1 = tmp23786;
var inst_23651__$1 = tmp23784;
var inst_23652__$1 = inst_23668;
var state_23772__$1 = (function (){var statearr_23791 = state_23772;
(statearr_23791[(13)] = inst_23652__$1);

(statearr_23791[(14)] = inst_23651__$1);

(statearr_23791[(16)] = inst_23649__$1);

(statearr_23791[(17)] = inst_23650__$1);

(statearr_23791[(18)] = inst_23667);

return statearr_23791;
})();
var statearr_23792_23871 = state_23772__$1;
(statearr_23792_23871[(2)] = null);

(statearr_23792_23871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (21))){
var inst_23694 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23796_23872 = state_23772__$1;
(statearr_23796_23872[(2)] = inst_23694);

(statearr_23796_23872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (31))){
var inst_23720 = (state_23772[(10)]);
var inst_23724 = done.call(null,null);
var inst_23725 = cljs.core.async.untap_STAR_.call(null,m,inst_23720);
var state_23772__$1 = (function (){var statearr_23797 = state_23772;
(statearr_23797[(19)] = inst_23724);

return statearr_23797;
})();
var statearr_23798_23873 = state_23772__$1;
(statearr_23798_23873[(2)] = inst_23725);

(statearr_23798_23873[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (32))){
var inst_23715 = (state_23772[(9)]);
var inst_23714 = (state_23772[(20)]);
var inst_23712 = (state_23772[(21)]);
var inst_23713 = (state_23772[(12)]);
var inst_23727 = (state_23772[(2)]);
var inst_23728 = (inst_23715 + (1));
var tmp23793 = inst_23714;
var tmp23794 = inst_23712;
var tmp23795 = inst_23713;
var inst_23712__$1 = tmp23794;
var inst_23713__$1 = tmp23795;
var inst_23714__$1 = tmp23793;
var inst_23715__$1 = inst_23728;
var state_23772__$1 = (function (){var statearr_23799 = state_23772;
(statearr_23799[(9)] = inst_23715__$1);

(statearr_23799[(20)] = inst_23714__$1);

(statearr_23799[(21)] = inst_23712__$1);

(statearr_23799[(22)] = inst_23727);

(statearr_23799[(12)] = inst_23713__$1);

return statearr_23799;
})();
var statearr_23800_23874 = state_23772__$1;
(statearr_23800_23874[(2)] = null);

(statearr_23800_23874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (40))){
var inst_23740 = (state_23772[(23)]);
var inst_23744 = done.call(null,null);
var inst_23745 = cljs.core.async.untap_STAR_.call(null,m,inst_23740);
var state_23772__$1 = (function (){var statearr_23801 = state_23772;
(statearr_23801[(24)] = inst_23744);

return statearr_23801;
})();
var statearr_23802_23875 = state_23772__$1;
(statearr_23802_23875[(2)] = inst_23745);

(statearr_23802_23875[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (33))){
var inst_23731 = (state_23772[(25)]);
var inst_23733 = cljs.core.chunked_seq_QMARK_.call(null,inst_23731);
var state_23772__$1 = state_23772;
if(inst_23733){
var statearr_23803_23876 = state_23772__$1;
(statearr_23803_23876[(1)] = (36));

} else {
var statearr_23804_23877 = state_23772__$1;
(statearr_23804_23877[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (13))){
var inst_23661 = (state_23772[(26)]);
var inst_23664 = cljs.core.async.close_BANG_.call(null,inst_23661);
var state_23772__$1 = state_23772;
var statearr_23805_23878 = state_23772__$1;
(statearr_23805_23878[(2)] = inst_23664);

(statearr_23805_23878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (22))){
var inst_23684 = (state_23772[(8)]);
var inst_23687 = cljs.core.async.close_BANG_.call(null,inst_23684);
var state_23772__$1 = state_23772;
var statearr_23806_23879 = state_23772__$1;
(statearr_23806_23879[(2)] = inst_23687);

(statearr_23806_23879[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (36))){
var inst_23731 = (state_23772[(25)]);
var inst_23735 = cljs.core.chunk_first.call(null,inst_23731);
var inst_23736 = cljs.core.chunk_rest.call(null,inst_23731);
var inst_23737 = cljs.core.count.call(null,inst_23735);
var inst_23712 = inst_23736;
var inst_23713 = inst_23735;
var inst_23714 = inst_23737;
var inst_23715 = (0);
var state_23772__$1 = (function (){var statearr_23807 = state_23772;
(statearr_23807[(9)] = inst_23715);

(statearr_23807[(20)] = inst_23714);

(statearr_23807[(21)] = inst_23712);

(statearr_23807[(12)] = inst_23713);

return statearr_23807;
})();
var statearr_23808_23880 = state_23772__$1;
(statearr_23808_23880[(2)] = null);

(statearr_23808_23880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (41))){
var inst_23731 = (state_23772[(25)]);
var inst_23747 = (state_23772[(2)]);
var inst_23748 = cljs.core.next.call(null,inst_23731);
var inst_23712 = inst_23748;
var inst_23713 = null;
var inst_23714 = (0);
var inst_23715 = (0);
var state_23772__$1 = (function (){var statearr_23809 = state_23772;
(statearr_23809[(27)] = inst_23747);

(statearr_23809[(9)] = inst_23715);

(statearr_23809[(20)] = inst_23714);

(statearr_23809[(21)] = inst_23712);

(statearr_23809[(12)] = inst_23713);

return statearr_23809;
})();
var statearr_23810_23881 = state_23772__$1;
(statearr_23810_23881[(2)] = null);

(statearr_23810_23881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (43))){
var state_23772__$1 = state_23772;
var statearr_23811_23882 = state_23772__$1;
(statearr_23811_23882[(2)] = null);

(statearr_23811_23882[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (29))){
var inst_23756 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23812_23883 = state_23772__$1;
(statearr_23812_23883[(2)] = inst_23756);

(statearr_23812_23883[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (44))){
var inst_23765 = (state_23772[(2)]);
var state_23772__$1 = (function (){var statearr_23813 = state_23772;
(statearr_23813[(28)] = inst_23765);

return statearr_23813;
})();
var statearr_23814_23884 = state_23772__$1;
(statearr_23814_23884[(2)] = null);

(statearr_23814_23884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (6))){
var inst_23704 = (state_23772[(29)]);
var inst_23703 = cljs.core.deref.call(null,cs);
var inst_23704__$1 = cljs.core.keys.call(null,inst_23703);
var inst_23705 = cljs.core.count.call(null,inst_23704__$1);
var inst_23706 = cljs.core.reset_BANG_.call(null,dctr,inst_23705);
var inst_23711 = cljs.core.seq.call(null,inst_23704__$1);
var inst_23712 = inst_23711;
var inst_23713 = null;
var inst_23714 = (0);
var inst_23715 = (0);
var state_23772__$1 = (function (){var statearr_23815 = state_23772;
(statearr_23815[(29)] = inst_23704__$1);

(statearr_23815[(30)] = inst_23706);

(statearr_23815[(9)] = inst_23715);

(statearr_23815[(20)] = inst_23714);

(statearr_23815[(21)] = inst_23712);

(statearr_23815[(12)] = inst_23713);

return statearr_23815;
})();
var statearr_23816_23885 = state_23772__$1;
(statearr_23816_23885[(2)] = null);

(statearr_23816_23885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (28))){
var inst_23712 = (state_23772[(21)]);
var inst_23731 = (state_23772[(25)]);
var inst_23731__$1 = cljs.core.seq.call(null,inst_23712);
var state_23772__$1 = (function (){var statearr_23817 = state_23772;
(statearr_23817[(25)] = inst_23731__$1);

return statearr_23817;
})();
if(inst_23731__$1){
var statearr_23818_23886 = state_23772__$1;
(statearr_23818_23886[(1)] = (33));

} else {
var statearr_23819_23887 = state_23772__$1;
(statearr_23819_23887[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (25))){
var inst_23715 = (state_23772[(9)]);
var inst_23714 = (state_23772[(20)]);
var inst_23717 = (inst_23715 < inst_23714);
var inst_23718 = inst_23717;
var state_23772__$1 = state_23772;
if(cljs.core.truth_(inst_23718)){
var statearr_23820_23888 = state_23772__$1;
(statearr_23820_23888[(1)] = (27));

} else {
var statearr_23821_23889 = state_23772__$1;
(statearr_23821_23889[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (34))){
var state_23772__$1 = state_23772;
var statearr_23822_23890 = state_23772__$1;
(statearr_23822_23890[(2)] = null);

(statearr_23822_23890[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (17))){
var state_23772__$1 = state_23772;
var statearr_23823_23891 = state_23772__$1;
(statearr_23823_23891[(2)] = null);

(statearr_23823_23891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (3))){
var inst_23770 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23772__$1,inst_23770);
} else {
if((state_val_23773 === (12))){
var inst_23699 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23824_23892 = state_23772__$1;
(statearr_23824_23892[(2)] = inst_23699);

(statearr_23824_23892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (2))){
var state_23772__$1 = state_23772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23772__$1,(4),ch);
} else {
if((state_val_23773 === (23))){
var state_23772__$1 = state_23772;
var statearr_23825_23893 = state_23772__$1;
(statearr_23825_23893[(2)] = null);

(statearr_23825_23893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (35))){
var inst_23754 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23826_23894 = state_23772__$1;
(statearr_23826_23894[(2)] = inst_23754);

(statearr_23826_23894[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (19))){
var inst_23671 = (state_23772[(7)]);
var inst_23675 = cljs.core.chunk_first.call(null,inst_23671);
var inst_23676 = cljs.core.chunk_rest.call(null,inst_23671);
var inst_23677 = cljs.core.count.call(null,inst_23675);
var inst_23649 = inst_23676;
var inst_23650 = inst_23675;
var inst_23651 = inst_23677;
var inst_23652 = (0);
var state_23772__$1 = (function (){var statearr_23827 = state_23772;
(statearr_23827[(13)] = inst_23652);

(statearr_23827[(14)] = inst_23651);

(statearr_23827[(16)] = inst_23649);

(statearr_23827[(17)] = inst_23650);

return statearr_23827;
})();
var statearr_23828_23895 = state_23772__$1;
(statearr_23828_23895[(2)] = null);

(statearr_23828_23895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (11))){
var inst_23649 = (state_23772[(16)]);
var inst_23671 = (state_23772[(7)]);
var inst_23671__$1 = cljs.core.seq.call(null,inst_23649);
var state_23772__$1 = (function (){var statearr_23829 = state_23772;
(statearr_23829[(7)] = inst_23671__$1);

return statearr_23829;
})();
if(inst_23671__$1){
var statearr_23830_23896 = state_23772__$1;
(statearr_23830_23896[(1)] = (16));

} else {
var statearr_23831_23897 = state_23772__$1;
(statearr_23831_23897[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (9))){
var inst_23701 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23832_23898 = state_23772__$1;
(statearr_23832_23898[(2)] = inst_23701);

(statearr_23832_23898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (5))){
var inst_23647 = cljs.core.deref.call(null,cs);
var inst_23648 = cljs.core.seq.call(null,inst_23647);
var inst_23649 = inst_23648;
var inst_23650 = null;
var inst_23651 = (0);
var inst_23652 = (0);
var state_23772__$1 = (function (){var statearr_23833 = state_23772;
(statearr_23833[(13)] = inst_23652);

(statearr_23833[(14)] = inst_23651);

(statearr_23833[(16)] = inst_23649);

(statearr_23833[(17)] = inst_23650);

return statearr_23833;
})();
var statearr_23834_23899 = state_23772__$1;
(statearr_23834_23899[(2)] = null);

(statearr_23834_23899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (14))){
var state_23772__$1 = state_23772;
var statearr_23835_23900 = state_23772__$1;
(statearr_23835_23900[(2)] = null);

(statearr_23835_23900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (45))){
var inst_23762 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23836_23901 = state_23772__$1;
(statearr_23836_23901[(2)] = inst_23762);

(statearr_23836_23901[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (26))){
var inst_23704 = (state_23772[(29)]);
var inst_23758 = (state_23772[(2)]);
var inst_23759 = cljs.core.seq.call(null,inst_23704);
var state_23772__$1 = (function (){var statearr_23837 = state_23772;
(statearr_23837[(31)] = inst_23758);

return statearr_23837;
})();
if(inst_23759){
var statearr_23838_23902 = state_23772__$1;
(statearr_23838_23902[(1)] = (42));

} else {
var statearr_23839_23903 = state_23772__$1;
(statearr_23839_23903[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (16))){
var inst_23671 = (state_23772[(7)]);
var inst_23673 = cljs.core.chunked_seq_QMARK_.call(null,inst_23671);
var state_23772__$1 = state_23772;
if(inst_23673){
var statearr_23840_23904 = state_23772__$1;
(statearr_23840_23904[(1)] = (19));

} else {
var statearr_23841_23905 = state_23772__$1;
(statearr_23841_23905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (38))){
var inst_23751 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23842_23906 = state_23772__$1;
(statearr_23842_23906[(2)] = inst_23751);

(statearr_23842_23906[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (30))){
var state_23772__$1 = state_23772;
var statearr_23843_23907 = state_23772__$1;
(statearr_23843_23907[(2)] = null);

(statearr_23843_23907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (10))){
var inst_23652 = (state_23772[(13)]);
var inst_23650 = (state_23772[(17)]);
var inst_23660 = cljs.core._nth.call(null,inst_23650,inst_23652);
var inst_23661 = cljs.core.nth.call(null,inst_23660,(0),null);
var inst_23662 = cljs.core.nth.call(null,inst_23660,(1),null);
var state_23772__$1 = (function (){var statearr_23844 = state_23772;
(statearr_23844[(26)] = inst_23661);

return statearr_23844;
})();
if(cljs.core.truth_(inst_23662)){
var statearr_23845_23908 = state_23772__$1;
(statearr_23845_23908[(1)] = (13));

} else {
var statearr_23846_23909 = state_23772__$1;
(statearr_23846_23909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (18))){
var inst_23697 = (state_23772[(2)]);
var state_23772__$1 = state_23772;
var statearr_23847_23910 = state_23772__$1;
(statearr_23847_23910[(2)] = inst_23697);

(statearr_23847_23910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (42))){
var state_23772__$1 = state_23772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23772__$1,(45),dchan);
} else {
if((state_val_23773 === (37))){
var inst_23740 = (state_23772[(23)]);
var inst_23640 = (state_23772[(11)]);
var inst_23731 = (state_23772[(25)]);
var inst_23740__$1 = cljs.core.first.call(null,inst_23731);
var inst_23741 = cljs.core.async.put_BANG_.call(null,inst_23740__$1,inst_23640,done);
var state_23772__$1 = (function (){var statearr_23848 = state_23772;
(statearr_23848[(23)] = inst_23740__$1);

return statearr_23848;
})();
if(cljs.core.truth_(inst_23741)){
var statearr_23849_23911 = state_23772__$1;
(statearr_23849_23911[(1)] = (39));

} else {
var statearr_23850_23912 = state_23772__$1;
(statearr_23850_23912[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23773 === (8))){
var inst_23652 = (state_23772[(13)]);
var inst_23651 = (state_23772[(14)]);
var inst_23654 = (inst_23652 < inst_23651);
var inst_23655 = inst_23654;
var state_23772__$1 = state_23772;
if(cljs.core.truth_(inst_23655)){
var statearr_23851_23913 = state_23772__$1;
(statearr_23851_23913[(1)] = (10));

} else {
var statearr_23852_23914 = state_23772__$1;
(statearr_23852_23914[(1)] = (11));

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
});})(c__22507__auto___23860,cs,m,dchan,dctr,done))
;
return ((function (switch__22395__auto__,c__22507__auto___23860,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22396__auto__ = null;
var cljs$core$async$mult_$_state_machine__22396__auto____0 = (function (){
var statearr_23856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23856[(0)] = cljs$core$async$mult_$_state_machine__22396__auto__);

(statearr_23856[(1)] = (1));

return statearr_23856;
});
var cljs$core$async$mult_$_state_machine__22396__auto____1 = (function (state_23772){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_23772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e23857){if((e23857 instanceof Object)){
var ex__22399__auto__ = e23857;
var statearr_23858_23915 = state_23772;
(statearr_23858_23915[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23916 = state_23772;
state_23772 = G__23916;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22396__auto__ = function(state_23772){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22396__auto____1.call(this,state_23772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22396__auto____0;
cljs$core$async$mult_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22396__auto____1;
return cljs$core$async$mult_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___23860,cs,m,dchan,dctr,done))
})();
var state__22509__auto__ = (function (){var statearr_23859 = f__22508__auto__.call(null);
(statearr_23859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___23860);

return statearr_23859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___23860,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23917 = [];
var len__21337__auto___23920 = arguments.length;
var i__21338__auto___23921 = (0);
while(true){
if((i__21338__auto___23921 < len__21337__auto___23920)){
args23917.push((arguments[i__21338__auto___23921]));

var G__23922 = (i__21338__auto___23921 + (1));
i__21338__auto___23921 = G__23922;
continue;
} else {
}
break;
}

var G__23919 = args23917.length;
switch (G__23919) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23917.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20892__auto__ = (((m == null))?null:m);
var m__20893__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,m,ch);
} else {
var m__20893__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20892__auto__ = (((m == null))?null:m);
var m__20893__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,m,ch);
} else {
var m__20893__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20892__auto__ = (((m == null))?null:m);
var m__20893__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,m);
} else {
var m__20893__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20892__auto__ = (((m == null))?null:m);
var m__20893__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,m,state_map);
} else {
var m__20893__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20892__auto__ = (((m == null))?null:m);
var m__20893__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,m,mode);
} else {
var m__20893__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21344__auto__ = [];
var len__21337__auto___23934 = arguments.length;
var i__21338__auto___23935 = (0);
while(true){
if((i__21338__auto___23935 < len__21337__auto___23934)){
args__21344__auto__.push((arguments[i__21338__auto___23935]));

var G__23936 = (i__21338__auto___23935 + (1));
i__21338__auto___23935 = G__23936;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((3) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21345__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23928){
var map__23929 = p__23928;
var map__23929__$1 = ((((!((map__23929 == null)))?((((map__23929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23929):map__23929);
var opts = map__23929__$1;
var statearr_23931_23937 = state;
(statearr_23931_23937[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23929,map__23929__$1,opts){
return (function (val){
var statearr_23932_23938 = state;
(statearr_23932_23938[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23929,map__23929__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23933_23939 = state;
(statearr_23933_23939[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23924){
var G__23925 = cljs.core.first.call(null,seq23924);
var seq23924__$1 = cljs.core.next.call(null,seq23924);
var G__23926 = cljs.core.first.call(null,seq23924__$1);
var seq23924__$2 = cljs.core.next.call(null,seq23924__$1);
var G__23927 = cljs.core.first.call(null,seq23924__$2);
var seq23924__$3 = cljs.core.next.call(null,seq23924__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23925,G__23926,G__23927,seq23924__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24107 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24108){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24108 = meta24108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24109,meta24108__$1){
var self__ = this;
var _24109__$1 = this;
return (new cljs.core.async.t_cljs$core$async24107(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24108__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24109){
var self__ = this;
var _24109__$1 = this;
return self__.meta24108;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24108","meta24108",-23284321,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24107";

cljs.core.async.t_cljs$core$async24107.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async24107");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24107 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24107(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24108){
return (new cljs.core.async.t_cljs$core$async24107(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24108));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24107(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22507__auto___24274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___24274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___24274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24211){
var state_val_24212 = (state_24211[(1)]);
if((state_val_24212 === (7))){
var inst_24126 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24213_24275 = state_24211__$1;
(statearr_24213_24275[(2)] = inst_24126);

(statearr_24213_24275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (20))){
var inst_24138 = (state_24211[(7)]);
var state_24211__$1 = state_24211;
var statearr_24214_24276 = state_24211__$1;
(statearr_24214_24276[(2)] = inst_24138);

(statearr_24214_24276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (27))){
var state_24211__$1 = state_24211;
var statearr_24215_24277 = state_24211__$1;
(statearr_24215_24277[(2)] = null);

(statearr_24215_24277[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (1))){
var inst_24113 = (state_24211[(8)]);
var inst_24113__$1 = calc_state.call(null);
var inst_24115 = (inst_24113__$1 == null);
var inst_24116 = cljs.core.not.call(null,inst_24115);
var state_24211__$1 = (function (){var statearr_24216 = state_24211;
(statearr_24216[(8)] = inst_24113__$1);

return statearr_24216;
})();
if(inst_24116){
var statearr_24217_24278 = state_24211__$1;
(statearr_24217_24278[(1)] = (2));

} else {
var statearr_24218_24279 = state_24211__$1;
(statearr_24218_24279[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (24))){
var inst_24171 = (state_24211[(9)]);
var inst_24185 = (state_24211[(10)]);
var inst_24162 = (state_24211[(11)]);
var inst_24185__$1 = inst_24162.call(null,inst_24171);
var state_24211__$1 = (function (){var statearr_24219 = state_24211;
(statearr_24219[(10)] = inst_24185__$1);

return statearr_24219;
})();
if(cljs.core.truth_(inst_24185__$1)){
var statearr_24220_24280 = state_24211__$1;
(statearr_24220_24280[(1)] = (29));

} else {
var statearr_24221_24281 = state_24211__$1;
(statearr_24221_24281[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (4))){
var inst_24129 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24129)){
var statearr_24222_24282 = state_24211__$1;
(statearr_24222_24282[(1)] = (8));

} else {
var statearr_24223_24283 = state_24211__$1;
(statearr_24223_24283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (15))){
var inst_24156 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24156)){
var statearr_24224_24284 = state_24211__$1;
(statearr_24224_24284[(1)] = (19));

} else {
var statearr_24225_24285 = state_24211__$1;
(statearr_24225_24285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (21))){
var inst_24161 = (state_24211[(12)]);
var inst_24161__$1 = (state_24211[(2)]);
var inst_24162 = cljs.core.get.call(null,inst_24161__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24163 = cljs.core.get.call(null,inst_24161__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24164 = cljs.core.get.call(null,inst_24161__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24211__$1 = (function (){var statearr_24226 = state_24211;
(statearr_24226[(13)] = inst_24163);

(statearr_24226[(11)] = inst_24162);

(statearr_24226[(12)] = inst_24161__$1);

return statearr_24226;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24211__$1,(22),inst_24164);
} else {
if((state_val_24212 === (31))){
var inst_24193 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24193)){
var statearr_24227_24286 = state_24211__$1;
(statearr_24227_24286[(1)] = (32));

} else {
var statearr_24228_24287 = state_24211__$1;
(statearr_24228_24287[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (32))){
var inst_24170 = (state_24211[(14)]);
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24211__$1,(35),out,inst_24170);
} else {
if((state_val_24212 === (33))){
var inst_24161 = (state_24211[(12)]);
var inst_24138 = inst_24161;
var state_24211__$1 = (function (){var statearr_24229 = state_24211;
(statearr_24229[(7)] = inst_24138);

return statearr_24229;
})();
var statearr_24230_24288 = state_24211__$1;
(statearr_24230_24288[(2)] = null);

(statearr_24230_24288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (13))){
var inst_24138 = (state_24211[(7)]);
var inst_24145 = inst_24138.cljs$lang$protocol_mask$partition0$;
var inst_24146 = (inst_24145 & (64));
var inst_24147 = inst_24138.cljs$core$ISeq$;
var inst_24148 = (cljs.core.PROTOCOL_SENTINEL === inst_24147);
var inst_24149 = (inst_24146) || (inst_24148);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24149)){
var statearr_24231_24289 = state_24211__$1;
(statearr_24231_24289[(1)] = (16));

} else {
var statearr_24232_24290 = state_24211__$1;
(statearr_24232_24290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (22))){
var inst_24171 = (state_24211[(9)]);
var inst_24170 = (state_24211[(14)]);
var inst_24169 = (state_24211[(2)]);
var inst_24170__$1 = cljs.core.nth.call(null,inst_24169,(0),null);
var inst_24171__$1 = cljs.core.nth.call(null,inst_24169,(1),null);
var inst_24172 = (inst_24170__$1 == null);
var inst_24173 = cljs.core._EQ_.call(null,inst_24171__$1,change);
var inst_24174 = (inst_24172) || (inst_24173);
var state_24211__$1 = (function (){var statearr_24233 = state_24211;
(statearr_24233[(9)] = inst_24171__$1);

(statearr_24233[(14)] = inst_24170__$1);

return statearr_24233;
})();
if(cljs.core.truth_(inst_24174)){
var statearr_24234_24291 = state_24211__$1;
(statearr_24234_24291[(1)] = (23));

} else {
var statearr_24235_24292 = state_24211__$1;
(statearr_24235_24292[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (36))){
var inst_24161 = (state_24211[(12)]);
var inst_24138 = inst_24161;
var state_24211__$1 = (function (){var statearr_24236 = state_24211;
(statearr_24236[(7)] = inst_24138);

return statearr_24236;
})();
var statearr_24237_24293 = state_24211__$1;
(statearr_24237_24293[(2)] = null);

(statearr_24237_24293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (29))){
var inst_24185 = (state_24211[(10)]);
var state_24211__$1 = state_24211;
var statearr_24238_24294 = state_24211__$1;
(statearr_24238_24294[(2)] = inst_24185);

(statearr_24238_24294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (6))){
var state_24211__$1 = state_24211;
var statearr_24239_24295 = state_24211__$1;
(statearr_24239_24295[(2)] = false);

(statearr_24239_24295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (28))){
var inst_24181 = (state_24211[(2)]);
var inst_24182 = calc_state.call(null);
var inst_24138 = inst_24182;
var state_24211__$1 = (function (){var statearr_24240 = state_24211;
(statearr_24240[(7)] = inst_24138);

(statearr_24240[(15)] = inst_24181);

return statearr_24240;
})();
var statearr_24241_24296 = state_24211__$1;
(statearr_24241_24296[(2)] = null);

(statearr_24241_24296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (25))){
var inst_24207 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24242_24297 = state_24211__$1;
(statearr_24242_24297[(2)] = inst_24207);

(statearr_24242_24297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (34))){
var inst_24205 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24243_24298 = state_24211__$1;
(statearr_24243_24298[(2)] = inst_24205);

(statearr_24243_24298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (17))){
var state_24211__$1 = state_24211;
var statearr_24244_24299 = state_24211__$1;
(statearr_24244_24299[(2)] = false);

(statearr_24244_24299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (3))){
var state_24211__$1 = state_24211;
var statearr_24245_24300 = state_24211__$1;
(statearr_24245_24300[(2)] = false);

(statearr_24245_24300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (12))){
var inst_24209 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24211__$1,inst_24209);
} else {
if((state_val_24212 === (2))){
var inst_24113 = (state_24211[(8)]);
var inst_24118 = inst_24113.cljs$lang$protocol_mask$partition0$;
var inst_24119 = (inst_24118 & (64));
var inst_24120 = inst_24113.cljs$core$ISeq$;
var inst_24121 = (cljs.core.PROTOCOL_SENTINEL === inst_24120);
var inst_24122 = (inst_24119) || (inst_24121);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24122)){
var statearr_24246_24301 = state_24211__$1;
(statearr_24246_24301[(1)] = (5));

} else {
var statearr_24247_24302 = state_24211__$1;
(statearr_24247_24302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (23))){
var inst_24170 = (state_24211[(14)]);
var inst_24176 = (inst_24170 == null);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24176)){
var statearr_24248_24303 = state_24211__$1;
(statearr_24248_24303[(1)] = (26));

} else {
var statearr_24249_24304 = state_24211__$1;
(statearr_24249_24304[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (35))){
var inst_24196 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24196)){
var statearr_24250_24305 = state_24211__$1;
(statearr_24250_24305[(1)] = (36));

} else {
var statearr_24251_24306 = state_24211__$1;
(statearr_24251_24306[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (19))){
var inst_24138 = (state_24211[(7)]);
var inst_24158 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24138);
var state_24211__$1 = state_24211;
var statearr_24252_24307 = state_24211__$1;
(statearr_24252_24307[(2)] = inst_24158);

(statearr_24252_24307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (11))){
var inst_24138 = (state_24211[(7)]);
var inst_24142 = (inst_24138 == null);
var inst_24143 = cljs.core.not.call(null,inst_24142);
var state_24211__$1 = state_24211;
if(inst_24143){
var statearr_24253_24308 = state_24211__$1;
(statearr_24253_24308[(1)] = (13));

} else {
var statearr_24254_24309 = state_24211__$1;
(statearr_24254_24309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (9))){
var inst_24113 = (state_24211[(8)]);
var state_24211__$1 = state_24211;
var statearr_24255_24310 = state_24211__$1;
(statearr_24255_24310[(2)] = inst_24113);

(statearr_24255_24310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (5))){
var state_24211__$1 = state_24211;
var statearr_24256_24311 = state_24211__$1;
(statearr_24256_24311[(2)] = true);

(statearr_24256_24311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (14))){
var state_24211__$1 = state_24211;
var statearr_24257_24312 = state_24211__$1;
(statearr_24257_24312[(2)] = false);

(statearr_24257_24312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (26))){
var inst_24171 = (state_24211[(9)]);
var inst_24178 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24171);
var state_24211__$1 = state_24211;
var statearr_24258_24313 = state_24211__$1;
(statearr_24258_24313[(2)] = inst_24178);

(statearr_24258_24313[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (16))){
var state_24211__$1 = state_24211;
var statearr_24259_24314 = state_24211__$1;
(statearr_24259_24314[(2)] = true);

(statearr_24259_24314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (38))){
var inst_24201 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24260_24315 = state_24211__$1;
(statearr_24260_24315[(2)] = inst_24201);

(statearr_24260_24315[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (30))){
var inst_24171 = (state_24211[(9)]);
var inst_24163 = (state_24211[(13)]);
var inst_24162 = (state_24211[(11)]);
var inst_24188 = cljs.core.empty_QMARK_.call(null,inst_24162);
var inst_24189 = inst_24163.call(null,inst_24171);
var inst_24190 = cljs.core.not.call(null,inst_24189);
var inst_24191 = (inst_24188) && (inst_24190);
var state_24211__$1 = state_24211;
var statearr_24261_24316 = state_24211__$1;
(statearr_24261_24316[(2)] = inst_24191);

(statearr_24261_24316[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (10))){
var inst_24113 = (state_24211[(8)]);
var inst_24134 = (state_24211[(2)]);
var inst_24135 = cljs.core.get.call(null,inst_24134,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24136 = cljs.core.get.call(null,inst_24134,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24137 = cljs.core.get.call(null,inst_24134,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24138 = inst_24113;
var state_24211__$1 = (function (){var statearr_24262 = state_24211;
(statearr_24262[(7)] = inst_24138);

(statearr_24262[(16)] = inst_24137);

(statearr_24262[(17)] = inst_24135);

(statearr_24262[(18)] = inst_24136);

return statearr_24262;
})();
var statearr_24263_24317 = state_24211__$1;
(statearr_24263_24317[(2)] = null);

(statearr_24263_24317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (18))){
var inst_24153 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24264_24318 = state_24211__$1;
(statearr_24264_24318[(2)] = inst_24153);

(statearr_24264_24318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (37))){
var state_24211__$1 = state_24211;
var statearr_24265_24319 = state_24211__$1;
(statearr_24265_24319[(2)] = null);

(statearr_24265_24319[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (8))){
var inst_24113 = (state_24211[(8)]);
var inst_24131 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24113);
var state_24211__$1 = state_24211;
var statearr_24266_24320 = state_24211__$1;
(statearr_24266_24320[(2)] = inst_24131);

(statearr_24266_24320[(1)] = (10));


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
});})(c__22507__auto___24274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22395__auto__,c__22507__auto___24274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22396__auto__ = null;
var cljs$core$async$mix_$_state_machine__22396__auto____0 = (function (){
var statearr_24270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24270[(0)] = cljs$core$async$mix_$_state_machine__22396__auto__);

(statearr_24270[(1)] = (1));

return statearr_24270;
});
var cljs$core$async$mix_$_state_machine__22396__auto____1 = (function (state_24211){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_24211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e24271){if((e24271 instanceof Object)){
var ex__22399__auto__ = e24271;
var statearr_24272_24321 = state_24211;
(statearr_24272_24321[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24322 = state_24211;
state_24211 = G__24322;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22396__auto__ = function(state_24211){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22396__auto____1.call(this,state_24211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22396__auto____0;
cljs$core$async$mix_$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22396__auto____1;
return cljs$core$async$mix_$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___24274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22509__auto__ = (function (){var statearr_24273 = f__22508__auto__.call(null);
(statearr_24273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___24274);

return statearr_24273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___24274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20892__auto__ = (((p == null))?null:p);
var m__20893__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20893__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20892__auto__ = (((p == null))?null:p);
var m__20893__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,p,v,ch);
} else {
var m__20893__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24323 = [];
var len__21337__auto___24326 = arguments.length;
var i__21338__auto___24327 = (0);
while(true){
if((i__21338__auto___24327 < len__21337__auto___24326)){
args24323.push((arguments[i__21338__auto___24327]));

var G__24328 = (i__21338__auto___24327 + (1));
i__21338__auto___24327 = G__24328;
continue;
} else {
}
break;
}

var G__24325 = args24323.length;
switch (G__24325) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24323.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20892__auto__ = (((p == null))?null:p);
var m__20893__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,p);
} else {
var m__20893__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20892__auto__ = (((p == null))?null:p);
var m__20893__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20892__auto__)]);
if(!((m__20893__auto__ == null))){
return m__20893__auto__.call(null,p,v);
} else {
var m__20893__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20893__auto____$1 == null))){
return m__20893__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args24331 = [];
var len__21337__auto___24456 = arguments.length;
var i__21338__auto___24457 = (0);
while(true){
if((i__21338__auto___24457 < len__21337__auto___24456)){
args24331.push((arguments[i__21338__auto___24457]));

var G__24458 = (i__21338__auto___24457 + (1));
i__21338__auto___24457 = G__24458;
continue;
} else {
}
break;
}

var G__24333 = args24331.length;
switch (G__24333) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24331.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20229__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20229__auto__,mults){
return (function (p1__24330_SHARP_){
if(cljs.core.truth_(p1__24330_SHARP_.call(null,topic))){
return p1__24330_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24330_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20229__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24334 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24335){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24335 = meta24335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24336,meta24335__$1){
var self__ = this;
var _24336__$1 = this;
return (new cljs.core.async.t_cljs$core$async24334(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24335__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24336){
var self__ = this;
var _24336__$1 = this;
return self__.meta24335;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24334.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24335","meta24335",1864049612,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24334";

cljs.core.async.t_cljs$core$async24334.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async24334");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24334 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24335){
return (new cljs.core.async.t_cljs$core$async24334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24335));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24334(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22507__auto___24460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___24460,mults,ensure_mult,p){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___24460,mults,ensure_mult,p){
return (function (state_24408){
var state_val_24409 = (state_24408[(1)]);
if((state_val_24409 === (7))){
var inst_24404 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24410_24461 = state_24408__$1;
(statearr_24410_24461[(2)] = inst_24404);

(statearr_24410_24461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (20))){
var state_24408__$1 = state_24408;
var statearr_24411_24462 = state_24408__$1;
(statearr_24411_24462[(2)] = null);

(statearr_24411_24462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (1))){
var state_24408__$1 = state_24408;
var statearr_24412_24463 = state_24408__$1;
(statearr_24412_24463[(2)] = null);

(statearr_24412_24463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (24))){
var inst_24387 = (state_24408[(7)]);
var inst_24396 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24387);
var state_24408__$1 = state_24408;
var statearr_24413_24464 = state_24408__$1;
(statearr_24413_24464[(2)] = inst_24396);

(statearr_24413_24464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (4))){
var inst_24339 = (state_24408[(8)]);
var inst_24339__$1 = (state_24408[(2)]);
var inst_24340 = (inst_24339__$1 == null);
var state_24408__$1 = (function (){var statearr_24414 = state_24408;
(statearr_24414[(8)] = inst_24339__$1);

return statearr_24414;
})();
if(cljs.core.truth_(inst_24340)){
var statearr_24415_24465 = state_24408__$1;
(statearr_24415_24465[(1)] = (5));

} else {
var statearr_24416_24466 = state_24408__$1;
(statearr_24416_24466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (15))){
var inst_24381 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24417_24467 = state_24408__$1;
(statearr_24417_24467[(2)] = inst_24381);

(statearr_24417_24467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (21))){
var inst_24401 = (state_24408[(2)]);
var state_24408__$1 = (function (){var statearr_24418 = state_24408;
(statearr_24418[(9)] = inst_24401);

return statearr_24418;
})();
var statearr_24419_24468 = state_24408__$1;
(statearr_24419_24468[(2)] = null);

(statearr_24419_24468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (13))){
var inst_24363 = (state_24408[(10)]);
var inst_24365 = cljs.core.chunked_seq_QMARK_.call(null,inst_24363);
var state_24408__$1 = state_24408;
if(inst_24365){
var statearr_24420_24469 = state_24408__$1;
(statearr_24420_24469[(1)] = (16));

} else {
var statearr_24421_24470 = state_24408__$1;
(statearr_24421_24470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (22))){
var inst_24393 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
if(cljs.core.truth_(inst_24393)){
var statearr_24422_24471 = state_24408__$1;
(statearr_24422_24471[(1)] = (23));

} else {
var statearr_24423_24472 = state_24408__$1;
(statearr_24423_24472[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (6))){
var inst_24339 = (state_24408[(8)]);
var inst_24389 = (state_24408[(11)]);
var inst_24387 = (state_24408[(7)]);
var inst_24387__$1 = topic_fn.call(null,inst_24339);
var inst_24388 = cljs.core.deref.call(null,mults);
var inst_24389__$1 = cljs.core.get.call(null,inst_24388,inst_24387__$1);
var state_24408__$1 = (function (){var statearr_24424 = state_24408;
(statearr_24424[(11)] = inst_24389__$1);

(statearr_24424[(7)] = inst_24387__$1);

return statearr_24424;
})();
if(cljs.core.truth_(inst_24389__$1)){
var statearr_24425_24473 = state_24408__$1;
(statearr_24425_24473[(1)] = (19));

} else {
var statearr_24426_24474 = state_24408__$1;
(statearr_24426_24474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (25))){
var inst_24398 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24427_24475 = state_24408__$1;
(statearr_24427_24475[(2)] = inst_24398);

(statearr_24427_24475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (17))){
var inst_24363 = (state_24408[(10)]);
var inst_24372 = cljs.core.first.call(null,inst_24363);
var inst_24373 = cljs.core.async.muxch_STAR_.call(null,inst_24372);
var inst_24374 = cljs.core.async.close_BANG_.call(null,inst_24373);
var inst_24375 = cljs.core.next.call(null,inst_24363);
var inst_24349 = inst_24375;
var inst_24350 = null;
var inst_24351 = (0);
var inst_24352 = (0);
var state_24408__$1 = (function (){var statearr_24428 = state_24408;
(statearr_24428[(12)] = inst_24349);

(statearr_24428[(13)] = inst_24374);

(statearr_24428[(14)] = inst_24352);

(statearr_24428[(15)] = inst_24351);

(statearr_24428[(16)] = inst_24350);

return statearr_24428;
})();
var statearr_24429_24476 = state_24408__$1;
(statearr_24429_24476[(2)] = null);

(statearr_24429_24476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (3))){
var inst_24406 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24408__$1,inst_24406);
} else {
if((state_val_24409 === (12))){
var inst_24383 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24430_24477 = state_24408__$1;
(statearr_24430_24477[(2)] = inst_24383);

(statearr_24430_24477[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (2))){
var state_24408__$1 = state_24408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24408__$1,(4),ch);
} else {
if((state_val_24409 === (23))){
var state_24408__$1 = state_24408;
var statearr_24431_24478 = state_24408__$1;
(statearr_24431_24478[(2)] = null);

(statearr_24431_24478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (19))){
var inst_24339 = (state_24408[(8)]);
var inst_24389 = (state_24408[(11)]);
var inst_24391 = cljs.core.async.muxch_STAR_.call(null,inst_24389);
var state_24408__$1 = state_24408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24408__$1,(22),inst_24391,inst_24339);
} else {
if((state_val_24409 === (11))){
var inst_24363 = (state_24408[(10)]);
var inst_24349 = (state_24408[(12)]);
var inst_24363__$1 = cljs.core.seq.call(null,inst_24349);
var state_24408__$1 = (function (){var statearr_24432 = state_24408;
(statearr_24432[(10)] = inst_24363__$1);

return statearr_24432;
})();
if(inst_24363__$1){
var statearr_24433_24479 = state_24408__$1;
(statearr_24433_24479[(1)] = (13));

} else {
var statearr_24434_24480 = state_24408__$1;
(statearr_24434_24480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (9))){
var inst_24385 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24435_24481 = state_24408__$1;
(statearr_24435_24481[(2)] = inst_24385);

(statearr_24435_24481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (5))){
var inst_24346 = cljs.core.deref.call(null,mults);
var inst_24347 = cljs.core.vals.call(null,inst_24346);
var inst_24348 = cljs.core.seq.call(null,inst_24347);
var inst_24349 = inst_24348;
var inst_24350 = null;
var inst_24351 = (0);
var inst_24352 = (0);
var state_24408__$1 = (function (){var statearr_24436 = state_24408;
(statearr_24436[(12)] = inst_24349);

(statearr_24436[(14)] = inst_24352);

(statearr_24436[(15)] = inst_24351);

(statearr_24436[(16)] = inst_24350);

return statearr_24436;
})();
var statearr_24437_24482 = state_24408__$1;
(statearr_24437_24482[(2)] = null);

(statearr_24437_24482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (14))){
var state_24408__$1 = state_24408;
var statearr_24441_24483 = state_24408__$1;
(statearr_24441_24483[(2)] = null);

(statearr_24441_24483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (16))){
var inst_24363 = (state_24408[(10)]);
var inst_24367 = cljs.core.chunk_first.call(null,inst_24363);
var inst_24368 = cljs.core.chunk_rest.call(null,inst_24363);
var inst_24369 = cljs.core.count.call(null,inst_24367);
var inst_24349 = inst_24368;
var inst_24350 = inst_24367;
var inst_24351 = inst_24369;
var inst_24352 = (0);
var state_24408__$1 = (function (){var statearr_24442 = state_24408;
(statearr_24442[(12)] = inst_24349);

(statearr_24442[(14)] = inst_24352);

(statearr_24442[(15)] = inst_24351);

(statearr_24442[(16)] = inst_24350);

return statearr_24442;
})();
var statearr_24443_24484 = state_24408__$1;
(statearr_24443_24484[(2)] = null);

(statearr_24443_24484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (10))){
var inst_24349 = (state_24408[(12)]);
var inst_24352 = (state_24408[(14)]);
var inst_24351 = (state_24408[(15)]);
var inst_24350 = (state_24408[(16)]);
var inst_24357 = cljs.core._nth.call(null,inst_24350,inst_24352);
var inst_24358 = cljs.core.async.muxch_STAR_.call(null,inst_24357);
var inst_24359 = cljs.core.async.close_BANG_.call(null,inst_24358);
var inst_24360 = (inst_24352 + (1));
var tmp24438 = inst_24349;
var tmp24439 = inst_24351;
var tmp24440 = inst_24350;
var inst_24349__$1 = tmp24438;
var inst_24350__$1 = tmp24440;
var inst_24351__$1 = tmp24439;
var inst_24352__$1 = inst_24360;
var state_24408__$1 = (function (){var statearr_24444 = state_24408;
(statearr_24444[(12)] = inst_24349__$1);

(statearr_24444[(14)] = inst_24352__$1);

(statearr_24444[(15)] = inst_24351__$1);

(statearr_24444[(16)] = inst_24350__$1);

(statearr_24444[(17)] = inst_24359);

return statearr_24444;
})();
var statearr_24445_24485 = state_24408__$1;
(statearr_24445_24485[(2)] = null);

(statearr_24445_24485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (18))){
var inst_24378 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24446_24486 = state_24408__$1;
(statearr_24446_24486[(2)] = inst_24378);

(statearr_24446_24486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (8))){
var inst_24352 = (state_24408[(14)]);
var inst_24351 = (state_24408[(15)]);
var inst_24354 = (inst_24352 < inst_24351);
var inst_24355 = inst_24354;
var state_24408__$1 = state_24408;
if(cljs.core.truth_(inst_24355)){
var statearr_24447_24487 = state_24408__$1;
(statearr_24447_24487[(1)] = (10));

} else {
var statearr_24448_24488 = state_24408__$1;
(statearr_24448_24488[(1)] = (11));

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
});})(c__22507__auto___24460,mults,ensure_mult,p))
;
return ((function (switch__22395__auto__,c__22507__auto___24460,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_24452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24452[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_24452[(1)] = (1));

return statearr_24452;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_24408){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_24408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e24453){if((e24453 instanceof Object)){
var ex__22399__auto__ = e24453;
var statearr_24454_24489 = state_24408;
(statearr_24454_24489[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24490 = state_24408;
state_24408 = G__24490;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_24408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_24408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___24460,mults,ensure_mult,p))
})();
var state__22509__auto__ = (function (){var statearr_24455 = f__22508__auto__.call(null);
(statearr_24455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___24460);

return statearr_24455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___24460,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24491 = [];
var len__21337__auto___24494 = arguments.length;
var i__21338__auto___24495 = (0);
while(true){
if((i__21338__auto___24495 < len__21337__auto___24494)){
args24491.push((arguments[i__21338__auto___24495]));

var G__24496 = (i__21338__auto___24495 + (1));
i__21338__auto___24495 = G__24496;
continue;
} else {
}
break;
}

var G__24493 = args24491.length;
switch (G__24493) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24491.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24498 = [];
var len__21337__auto___24501 = arguments.length;
var i__21338__auto___24502 = (0);
while(true){
if((i__21338__auto___24502 < len__21337__auto___24501)){
args24498.push((arguments[i__21338__auto___24502]));

var G__24503 = (i__21338__auto___24502 + (1));
i__21338__auto___24502 = G__24503;
continue;
} else {
}
break;
}

var G__24500 = args24498.length;
switch (G__24500) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24498.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args24505 = [];
var len__21337__auto___24576 = arguments.length;
var i__21338__auto___24577 = (0);
while(true){
if((i__21338__auto___24577 < len__21337__auto___24576)){
args24505.push((arguments[i__21338__auto___24577]));

var G__24578 = (i__21338__auto___24577 + (1));
i__21338__auto___24577 = G__24578;
continue;
} else {
}
break;
}

var G__24507 = args24505.length;
switch (G__24507) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24505.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22507__auto___24580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___24580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___24580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24546){
var state_val_24547 = (state_24546[(1)]);
if((state_val_24547 === (7))){
var state_24546__$1 = state_24546;
var statearr_24548_24581 = state_24546__$1;
(statearr_24548_24581[(2)] = null);

(statearr_24548_24581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (1))){
var state_24546__$1 = state_24546;
var statearr_24549_24582 = state_24546__$1;
(statearr_24549_24582[(2)] = null);

(statearr_24549_24582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (4))){
var inst_24510 = (state_24546[(7)]);
var inst_24512 = (inst_24510 < cnt);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24512)){
var statearr_24550_24583 = state_24546__$1;
(statearr_24550_24583[(1)] = (6));

} else {
var statearr_24551_24584 = state_24546__$1;
(statearr_24551_24584[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (15))){
var inst_24542 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24552_24585 = state_24546__$1;
(statearr_24552_24585[(2)] = inst_24542);

(statearr_24552_24585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (13))){
var inst_24535 = cljs.core.async.close_BANG_.call(null,out);
var state_24546__$1 = state_24546;
var statearr_24553_24586 = state_24546__$1;
(statearr_24553_24586[(2)] = inst_24535);

(statearr_24553_24586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (6))){
var state_24546__$1 = state_24546;
var statearr_24554_24587 = state_24546__$1;
(statearr_24554_24587[(2)] = null);

(statearr_24554_24587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (3))){
var inst_24544 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24546__$1,inst_24544);
} else {
if((state_val_24547 === (12))){
var inst_24532 = (state_24546[(8)]);
var inst_24532__$1 = (state_24546[(2)]);
var inst_24533 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24532__$1);
var state_24546__$1 = (function (){var statearr_24555 = state_24546;
(statearr_24555[(8)] = inst_24532__$1);

return statearr_24555;
})();
if(cljs.core.truth_(inst_24533)){
var statearr_24556_24588 = state_24546__$1;
(statearr_24556_24588[(1)] = (13));

} else {
var statearr_24557_24589 = state_24546__$1;
(statearr_24557_24589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (2))){
var inst_24509 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24510 = (0);
var state_24546__$1 = (function (){var statearr_24558 = state_24546;
(statearr_24558[(9)] = inst_24509);

(statearr_24558[(7)] = inst_24510);

return statearr_24558;
})();
var statearr_24559_24590 = state_24546__$1;
(statearr_24559_24590[(2)] = null);

(statearr_24559_24590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (11))){
var inst_24510 = (state_24546[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24546,(10),Object,null,(9));
var inst_24519 = chs__$1.call(null,inst_24510);
var inst_24520 = done.call(null,inst_24510);
var inst_24521 = cljs.core.async.take_BANG_.call(null,inst_24519,inst_24520);
var state_24546__$1 = state_24546;
var statearr_24560_24591 = state_24546__$1;
(statearr_24560_24591[(2)] = inst_24521);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (9))){
var inst_24510 = (state_24546[(7)]);
var inst_24523 = (state_24546[(2)]);
var inst_24524 = (inst_24510 + (1));
var inst_24510__$1 = inst_24524;
var state_24546__$1 = (function (){var statearr_24561 = state_24546;
(statearr_24561[(10)] = inst_24523);

(statearr_24561[(7)] = inst_24510__$1);

return statearr_24561;
})();
var statearr_24562_24592 = state_24546__$1;
(statearr_24562_24592[(2)] = null);

(statearr_24562_24592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (5))){
var inst_24530 = (state_24546[(2)]);
var state_24546__$1 = (function (){var statearr_24563 = state_24546;
(statearr_24563[(11)] = inst_24530);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(12),dchan);
} else {
if((state_val_24547 === (14))){
var inst_24532 = (state_24546[(8)]);
var inst_24537 = cljs.core.apply.call(null,f,inst_24532);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24546__$1,(16),out,inst_24537);
} else {
if((state_val_24547 === (16))){
var inst_24539 = (state_24546[(2)]);
var state_24546__$1 = (function (){var statearr_24564 = state_24546;
(statearr_24564[(12)] = inst_24539);

return statearr_24564;
})();
var statearr_24565_24593 = state_24546__$1;
(statearr_24565_24593[(2)] = null);

(statearr_24565_24593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (10))){
var inst_24514 = (state_24546[(2)]);
var inst_24515 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24546__$1 = (function (){var statearr_24566 = state_24546;
(statearr_24566[(13)] = inst_24514);

return statearr_24566;
})();
var statearr_24567_24594 = state_24546__$1;
(statearr_24567_24594[(2)] = inst_24515);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (8))){
var inst_24528 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24568_24595 = state_24546__$1;
(statearr_24568_24595[(2)] = inst_24528);

(statearr_24568_24595[(1)] = (5));


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
});})(c__22507__auto___24580,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22395__auto__,c__22507__auto___24580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_24572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24572[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_24572[(1)] = (1));

return statearr_24572;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_24546){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_24546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e24573){if((e24573 instanceof Object)){
var ex__22399__auto__ = e24573;
var statearr_24574_24596 = state_24546;
(statearr_24574_24596[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24597 = state_24546;
state_24546 = G__24597;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_24546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_24546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___24580,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22509__auto__ = (function (){var statearr_24575 = f__22508__auto__.call(null);
(statearr_24575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___24580);

return statearr_24575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___24580,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24599 = [];
var len__21337__auto___24657 = arguments.length;
var i__21338__auto___24658 = (0);
while(true){
if((i__21338__auto___24658 < len__21337__auto___24657)){
args24599.push((arguments[i__21338__auto___24658]));

var G__24659 = (i__21338__auto___24658 + (1));
i__21338__auto___24658 = G__24659;
continue;
} else {
}
break;
}

var G__24601 = args24599.length;
switch (G__24601) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24599.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22507__auto___24661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___24661,out){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___24661,out){
return (function (state_24633){
var state_val_24634 = (state_24633[(1)]);
if((state_val_24634 === (7))){
var inst_24613 = (state_24633[(7)]);
var inst_24612 = (state_24633[(8)]);
var inst_24612__$1 = (state_24633[(2)]);
var inst_24613__$1 = cljs.core.nth.call(null,inst_24612__$1,(0),null);
var inst_24614 = cljs.core.nth.call(null,inst_24612__$1,(1),null);
var inst_24615 = (inst_24613__$1 == null);
var state_24633__$1 = (function (){var statearr_24635 = state_24633;
(statearr_24635[(7)] = inst_24613__$1);

(statearr_24635[(8)] = inst_24612__$1);

(statearr_24635[(9)] = inst_24614);

return statearr_24635;
})();
if(cljs.core.truth_(inst_24615)){
var statearr_24636_24662 = state_24633__$1;
(statearr_24636_24662[(1)] = (8));

} else {
var statearr_24637_24663 = state_24633__$1;
(statearr_24637_24663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (1))){
var inst_24602 = cljs.core.vec.call(null,chs);
var inst_24603 = inst_24602;
var state_24633__$1 = (function (){var statearr_24638 = state_24633;
(statearr_24638[(10)] = inst_24603);

return statearr_24638;
})();
var statearr_24639_24664 = state_24633__$1;
(statearr_24639_24664[(2)] = null);

(statearr_24639_24664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (4))){
var inst_24603 = (state_24633[(10)]);
var state_24633__$1 = state_24633;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24633__$1,(7),inst_24603);
} else {
if((state_val_24634 === (6))){
var inst_24629 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
var statearr_24640_24665 = state_24633__$1;
(statearr_24640_24665[(2)] = inst_24629);

(statearr_24640_24665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (3))){
var inst_24631 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24633__$1,inst_24631);
} else {
if((state_val_24634 === (2))){
var inst_24603 = (state_24633[(10)]);
var inst_24605 = cljs.core.count.call(null,inst_24603);
var inst_24606 = (inst_24605 > (0));
var state_24633__$1 = state_24633;
if(cljs.core.truth_(inst_24606)){
var statearr_24642_24666 = state_24633__$1;
(statearr_24642_24666[(1)] = (4));

} else {
var statearr_24643_24667 = state_24633__$1;
(statearr_24643_24667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (11))){
var inst_24603 = (state_24633[(10)]);
var inst_24622 = (state_24633[(2)]);
var tmp24641 = inst_24603;
var inst_24603__$1 = tmp24641;
var state_24633__$1 = (function (){var statearr_24644 = state_24633;
(statearr_24644[(11)] = inst_24622);

(statearr_24644[(10)] = inst_24603__$1);

return statearr_24644;
})();
var statearr_24645_24668 = state_24633__$1;
(statearr_24645_24668[(2)] = null);

(statearr_24645_24668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (9))){
var inst_24613 = (state_24633[(7)]);
var state_24633__$1 = state_24633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24633__$1,(11),out,inst_24613);
} else {
if((state_val_24634 === (5))){
var inst_24627 = cljs.core.async.close_BANG_.call(null,out);
var state_24633__$1 = state_24633;
var statearr_24646_24669 = state_24633__$1;
(statearr_24646_24669[(2)] = inst_24627);

(statearr_24646_24669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (10))){
var inst_24625 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
var statearr_24647_24670 = state_24633__$1;
(statearr_24647_24670[(2)] = inst_24625);

(statearr_24647_24670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (8))){
var inst_24613 = (state_24633[(7)]);
var inst_24612 = (state_24633[(8)]);
var inst_24614 = (state_24633[(9)]);
var inst_24603 = (state_24633[(10)]);
var inst_24617 = (function (){var cs = inst_24603;
var vec__24608 = inst_24612;
var v = inst_24613;
var c = inst_24614;
return ((function (cs,vec__24608,v,c,inst_24613,inst_24612,inst_24614,inst_24603,state_val_24634,c__22507__auto___24661,out){
return (function (p1__24598_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24598_SHARP_);
});
;})(cs,vec__24608,v,c,inst_24613,inst_24612,inst_24614,inst_24603,state_val_24634,c__22507__auto___24661,out))
})();
var inst_24618 = cljs.core.filterv.call(null,inst_24617,inst_24603);
var inst_24603__$1 = inst_24618;
var state_24633__$1 = (function (){var statearr_24648 = state_24633;
(statearr_24648[(10)] = inst_24603__$1);

return statearr_24648;
})();
var statearr_24649_24671 = state_24633__$1;
(statearr_24649_24671[(2)] = null);

(statearr_24649_24671[(1)] = (2));


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
});})(c__22507__auto___24661,out))
;
return ((function (switch__22395__auto__,c__22507__auto___24661,out){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_24653 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24653[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_24653[(1)] = (1));

return statearr_24653;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_24633){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_24633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e24654){if((e24654 instanceof Object)){
var ex__22399__auto__ = e24654;
var statearr_24655_24672 = state_24633;
(statearr_24655_24672[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24673 = state_24633;
state_24633 = G__24673;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_24633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_24633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___24661,out))
})();
var state__22509__auto__ = (function (){var statearr_24656 = f__22508__auto__.call(null);
(statearr_24656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___24661);

return statearr_24656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___24661,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24674 = [];
var len__21337__auto___24723 = arguments.length;
var i__21338__auto___24724 = (0);
while(true){
if((i__21338__auto___24724 < len__21337__auto___24723)){
args24674.push((arguments[i__21338__auto___24724]));

var G__24725 = (i__21338__auto___24724 + (1));
i__21338__auto___24724 = G__24725;
continue;
} else {
}
break;
}

var G__24676 = args24674.length;
switch (G__24676) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24674.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22507__auto___24727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___24727,out){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___24727,out){
return (function (state_24700){
var state_val_24701 = (state_24700[(1)]);
if((state_val_24701 === (7))){
var inst_24682 = (state_24700[(7)]);
var inst_24682__$1 = (state_24700[(2)]);
var inst_24683 = (inst_24682__$1 == null);
var inst_24684 = cljs.core.not.call(null,inst_24683);
var state_24700__$1 = (function (){var statearr_24702 = state_24700;
(statearr_24702[(7)] = inst_24682__$1);

return statearr_24702;
})();
if(inst_24684){
var statearr_24703_24728 = state_24700__$1;
(statearr_24703_24728[(1)] = (8));

} else {
var statearr_24704_24729 = state_24700__$1;
(statearr_24704_24729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (1))){
var inst_24677 = (0);
var state_24700__$1 = (function (){var statearr_24705 = state_24700;
(statearr_24705[(8)] = inst_24677);

return statearr_24705;
})();
var statearr_24706_24730 = state_24700__$1;
(statearr_24706_24730[(2)] = null);

(statearr_24706_24730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (4))){
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24700__$1,(7),ch);
} else {
if((state_val_24701 === (6))){
var inst_24695 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24707_24731 = state_24700__$1;
(statearr_24707_24731[(2)] = inst_24695);

(statearr_24707_24731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (3))){
var inst_24697 = (state_24700[(2)]);
var inst_24698 = cljs.core.async.close_BANG_.call(null,out);
var state_24700__$1 = (function (){var statearr_24708 = state_24700;
(statearr_24708[(9)] = inst_24697);

return statearr_24708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24700__$1,inst_24698);
} else {
if((state_val_24701 === (2))){
var inst_24677 = (state_24700[(8)]);
var inst_24679 = (inst_24677 < n);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24679)){
var statearr_24709_24732 = state_24700__$1;
(statearr_24709_24732[(1)] = (4));

} else {
var statearr_24710_24733 = state_24700__$1;
(statearr_24710_24733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (11))){
var inst_24677 = (state_24700[(8)]);
var inst_24687 = (state_24700[(2)]);
var inst_24688 = (inst_24677 + (1));
var inst_24677__$1 = inst_24688;
var state_24700__$1 = (function (){var statearr_24711 = state_24700;
(statearr_24711[(10)] = inst_24687);

(statearr_24711[(8)] = inst_24677__$1);

return statearr_24711;
})();
var statearr_24712_24734 = state_24700__$1;
(statearr_24712_24734[(2)] = null);

(statearr_24712_24734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (9))){
var state_24700__$1 = state_24700;
var statearr_24713_24735 = state_24700__$1;
(statearr_24713_24735[(2)] = null);

(statearr_24713_24735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (5))){
var state_24700__$1 = state_24700;
var statearr_24714_24736 = state_24700__$1;
(statearr_24714_24736[(2)] = null);

(statearr_24714_24736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (10))){
var inst_24692 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24715_24737 = state_24700__$1;
(statearr_24715_24737[(2)] = inst_24692);

(statearr_24715_24737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (8))){
var inst_24682 = (state_24700[(7)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24700__$1,(11),out,inst_24682);
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
});})(c__22507__auto___24727,out))
;
return ((function (switch__22395__auto__,c__22507__auto___24727,out){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_24719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24719[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_24719[(1)] = (1));

return statearr_24719;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_24700){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_24700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e24720){if((e24720 instanceof Object)){
var ex__22399__auto__ = e24720;
var statearr_24721_24738 = state_24700;
(statearr_24721_24738[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24739 = state_24700;
state_24700 = G__24739;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_24700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_24700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___24727,out))
})();
var state__22509__auto__ = (function (){var statearr_24722 = f__22508__auto__.call(null);
(statearr_24722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___24727);

return statearr_24722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___24727,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24747 = (function (f,ch,meta24748){
this.f = f;
this.ch = ch;
this.meta24748 = meta24748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24749,meta24748__$1){
var self__ = this;
var _24749__$1 = this;
return (new cljs.core.async.t_cljs$core$async24747(self__.f,self__.ch,meta24748__$1));
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24749){
var self__ = this;
var _24749__$1 = this;
return self__.meta24748;
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24750 = (function (f,ch,meta24748,_,fn1,meta24751){
this.f = f;
this.ch = ch;
this.meta24748 = meta24748;
this._ = _;
this.fn1 = fn1;
this.meta24751 = meta24751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24752,meta24751__$1){
var self__ = this;
var _24752__$1 = this;
return (new cljs.core.async.t_cljs$core$async24750(self__.f,self__.ch,self__.meta24748,self__._,self__.fn1,meta24751__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24752){
var self__ = this;
var _24752__$1 = this;
return self__.meta24751;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24740_SHARP_){
return f1.call(null,(((p1__24740_SHARP_ == null))?null:self__.f.call(null,p1__24740_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24750.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24748","meta24748",1983021707,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24747","cljs.core.async/t_cljs$core$async24747",1949855758,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24751","meta24751",-1925553548,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24750";

cljs.core.async.t_cljs$core$async24750.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async24750");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24750 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24750(f__$1,ch__$1,meta24748__$1,___$2,fn1__$1,meta24751){
return (new cljs.core.async.t_cljs$core$async24750(f__$1,ch__$1,meta24748__$1,___$2,fn1__$1,meta24751));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24750(self__.f,self__.ch,self__.meta24748,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20217__auto__ = ret;
if(cljs.core.truth_(and__20217__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20217__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24748","meta24748",1983021707,null)], null);
});

cljs.core.async.t_cljs$core$async24747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24747";

cljs.core.async.t_cljs$core$async24747.cljs$lang$ctorPrWriter = (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async24747");
});

cljs.core.async.__GT_t_cljs$core$async24747 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24747(f__$1,ch__$1,meta24748){
return (new cljs.core.async.t_cljs$core$async24747(f__$1,ch__$1,meta24748));
});

}

return (new cljs.core.async.t_cljs$core$async24747(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24756 = (function (f,ch,meta24757){
this.f = f;
this.ch = ch;
this.meta24757 = meta24757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24758,meta24757__$1){
var self__ = this;
var _24758__$1 = this;
return (new cljs.core.async.t_cljs$core$async24756(self__.f,self__.ch,meta24757__$1));
});

cljs.core.async.t_cljs$core$async24756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24758){
var self__ = this;
var _24758__$1 = this;
return self__.meta24757;
});

cljs.core.async.t_cljs$core$async24756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24757","meta24757",176877364,null)], null);
});

cljs.core.async.t_cljs$core$async24756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24756";

cljs.core.async.t_cljs$core$async24756.cljs$lang$ctorPrWriter = (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async24756");
});

cljs.core.async.__GT_t_cljs$core$async24756 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24756(f__$1,ch__$1,meta24757){
return (new cljs.core.async.t_cljs$core$async24756(f__$1,ch__$1,meta24757));
});

}

return (new cljs.core.async.t_cljs$core$async24756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24762 = (function (p,ch,meta24763){
this.p = p;
this.ch = ch;
this.meta24763 = meta24763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24764,meta24763__$1){
var self__ = this;
var _24764__$1 = this;
return (new cljs.core.async.t_cljs$core$async24762(self__.p,self__.ch,meta24763__$1));
});

cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24764){
var self__ = this;
var _24764__$1 = this;
return self__.meta24763;
});

cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24763","meta24763",-1640608076,null)], null);
});

cljs.core.async.t_cljs$core$async24762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24762";

cljs.core.async.t_cljs$core$async24762.cljs$lang$ctorPrWriter = (function (this__20835__auto__,writer__20836__auto__,opt__20837__auto__){
return cljs.core._write.call(null,writer__20836__auto__,"cljs.core.async/t_cljs$core$async24762");
});

cljs.core.async.__GT_t_cljs$core$async24762 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24762(p__$1,ch__$1,meta24763){
return (new cljs.core.async.t_cljs$core$async24762(p__$1,ch__$1,meta24763));
});

}

return (new cljs.core.async.t_cljs$core$async24762(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24765 = [];
var len__21337__auto___24809 = arguments.length;
var i__21338__auto___24810 = (0);
while(true){
if((i__21338__auto___24810 < len__21337__auto___24809)){
args24765.push((arguments[i__21338__auto___24810]));

var G__24811 = (i__21338__auto___24810 + (1));
i__21338__auto___24810 = G__24811;
continue;
} else {
}
break;
}

var G__24767 = args24765.length;
switch (G__24767) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24765.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22507__auto___24813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___24813,out){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___24813,out){
return (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (7))){
var inst_24784 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24790_24814 = state_24788__$1;
(statearr_24790_24814[(2)] = inst_24784);

(statearr_24790_24814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (1))){
var state_24788__$1 = state_24788;
var statearr_24791_24815 = state_24788__$1;
(statearr_24791_24815[(2)] = null);

(statearr_24791_24815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (4))){
var inst_24770 = (state_24788[(7)]);
var inst_24770__$1 = (state_24788[(2)]);
var inst_24771 = (inst_24770__$1 == null);
var state_24788__$1 = (function (){var statearr_24792 = state_24788;
(statearr_24792[(7)] = inst_24770__$1);

return statearr_24792;
})();
if(cljs.core.truth_(inst_24771)){
var statearr_24793_24816 = state_24788__$1;
(statearr_24793_24816[(1)] = (5));

} else {
var statearr_24794_24817 = state_24788__$1;
(statearr_24794_24817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (6))){
var inst_24770 = (state_24788[(7)]);
var inst_24775 = p.call(null,inst_24770);
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24775)){
var statearr_24795_24818 = state_24788__$1;
(statearr_24795_24818[(1)] = (8));

} else {
var statearr_24796_24819 = state_24788__$1;
(statearr_24796_24819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (3))){
var inst_24786 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (2))){
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24788__$1,(4),ch);
} else {
if((state_val_24789 === (11))){
var inst_24778 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24797_24820 = state_24788__$1;
(statearr_24797_24820[(2)] = inst_24778);

(statearr_24797_24820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (9))){
var state_24788__$1 = state_24788;
var statearr_24798_24821 = state_24788__$1;
(statearr_24798_24821[(2)] = null);

(statearr_24798_24821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (5))){
var inst_24773 = cljs.core.async.close_BANG_.call(null,out);
var state_24788__$1 = state_24788;
var statearr_24799_24822 = state_24788__$1;
(statearr_24799_24822[(2)] = inst_24773);

(statearr_24799_24822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (10))){
var inst_24781 = (state_24788[(2)]);
var state_24788__$1 = (function (){var statearr_24800 = state_24788;
(statearr_24800[(8)] = inst_24781);

return statearr_24800;
})();
var statearr_24801_24823 = state_24788__$1;
(statearr_24801_24823[(2)] = null);

(statearr_24801_24823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (8))){
var inst_24770 = (state_24788[(7)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24788__$1,(11),out,inst_24770);
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
});})(c__22507__auto___24813,out))
;
return ((function (switch__22395__auto__,c__22507__auto___24813,out){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_24805 = [null,null,null,null,null,null,null,null,null];
(statearr_24805[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_24805[(1)] = (1));

return statearr_24805;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_24788){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_24788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e24806){if((e24806 instanceof Object)){
var ex__22399__auto__ = e24806;
var statearr_24807_24824 = state_24788;
(statearr_24807_24824[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24825 = state_24788;
state_24788 = G__24825;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___24813,out))
})();
var state__22509__auto__ = (function (){var statearr_24808 = f__22508__auto__.call(null);
(statearr_24808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___24813);

return statearr_24808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___24813,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24826 = [];
var len__21337__auto___24829 = arguments.length;
var i__21338__auto___24830 = (0);
while(true){
if((i__21338__auto___24830 < len__21337__auto___24829)){
args24826.push((arguments[i__21338__auto___24830]));

var G__24831 = (i__21338__auto___24830 + (1));
i__21338__auto___24830 = G__24831;
continue;
} else {
}
break;
}

var G__24828 = args24826.length;
switch (G__24828) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24826.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto__){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto__){
return (function (state_24998){
var state_val_24999 = (state_24998[(1)]);
if((state_val_24999 === (7))){
var inst_24994 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
var statearr_25000_25041 = state_24998__$1;
(statearr_25000_25041[(2)] = inst_24994);

(statearr_25000_25041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (20))){
var inst_24964 = (state_24998[(7)]);
var inst_24975 = (state_24998[(2)]);
var inst_24976 = cljs.core.next.call(null,inst_24964);
var inst_24950 = inst_24976;
var inst_24951 = null;
var inst_24952 = (0);
var inst_24953 = (0);
var state_24998__$1 = (function (){var statearr_25001 = state_24998;
(statearr_25001[(8)] = inst_24951);

(statearr_25001[(9)] = inst_24975);

(statearr_25001[(10)] = inst_24952);

(statearr_25001[(11)] = inst_24953);

(statearr_25001[(12)] = inst_24950);

return statearr_25001;
})();
var statearr_25002_25042 = state_24998__$1;
(statearr_25002_25042[(2)] = null);

(statearr_25002_25042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (1))){
var state_24998__$1 = state_24998;
var statearr_25003_25043 = state_24998__$1;
(statearr_25003_25043[(2)] = null);

(statearr_25003_25043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (4))){
var inst_24939 = (state_24998[(13)]);
var inst_24939__$1 = (state_24998[(2)]);
var inst_24940 = (inst_24939__$1 == null);
var state_24998__$1 = (function (){var statearr_25004 = state_24998;
(statearr_25004[(13)] = inst_24939__$1);

return statearr_25004;
})();
if(cljs.core.truth_(inst_24940)){
var statearr_25005_25044 = state_24998__$1;
(statearr_25005_25044[(1)] = (5));

} else {
var statearr_25006_25045 = state_24998__$1;
(statearr_25006_25045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (15))){
var state_24998__$1 = state_24998;
var statearr_25010_25046 = state_24998__$1;
(statearr_25010_25046[(2)] = null);

(statearr_25010_25046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (21))){
var state_24998__$1 = state_24998;
var statearr_25011_25047 = state_24998__$1;
(statearr_25011_25047[(2)] = null);

(statearr_25011_25047[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (13))){
var inst_24951 = (state_24998[(8)]);
var inst_24952 = (state_24998[(10)]);
var inst_24953 = (state_24998[(11)]);
var inst_24950 = (state_24998[(12)]);
var inst_24960 = (state_24998[(2)]);
var inst_24961 = (inst_24953 + (1));
var tmp25007 = inst_24951;
var tmp25008 = inst_24952;
var tmp25009 = inst_24950;
var inst_24950__$1 = tmp25009;
var inst_24951__$1 = tmp25007;
var inst_24952__$1 = tmp25008;
var inst_24953__$1 = inst_24961;
var state_24998__$1 = (function (){var statearr_25012 = state_24998;
(statearr_25012[(8)] = inst_24951__$1);

(statearr_25012[(14)] = inst_24960);

(statearr_25012[(10)] = inst_24952__$1);

(statearr_25012[(11)] = inst_24953__$1);

(statearr_25012[(12)] = inst_24950__$1);

return statearr_25012;
})();
var statearr_25013_25048 = state_24998__$1;
(statearr_25013_25048[(2)] = null);

(statearr_25013_25048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (22))){
var state_24998__$1 = state_24998;
var statearr_25014_25049 = state_24998__$1;
(statearr_25014_25049[(2)] = null);

(statearr_25014_25049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (6))){
var inst_24939 = (state_24998[(13)]);
var inst_24948 = f.call(null,inst_24939);
var inst_24949 = cljs.core.seq.call(null,inst_24948);
var inst_24950 = inst_24949;
var inst_24951 = null;
var inst_24952 = (0);
var inst_24953 = (0);
var state_24998__$1 = (function (){var statearr_25015 = state_24998;
(statearr_25015[(8)] = inst_24951);

(statearr_25015[(10)] = inst_24952);

(statearr_25015[(11)] = inst_24953);

(statearr_25015[(12)] = inst_24950);

return statearr_25015;
})();
var statearr_25016_25050 = state_24998__$1;
(statearr_25016_25050[(2)] = null);

(statearr_25016_25050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (17))){
var inst_24964 = (state_24998[(7)]);
var inst_24968 = cljs.core.chunk_first.call(null,inst_24964);
var inst_24969 = cljs.core.chunk_rest.call(null,inst_24964);
var inst_24970 = cljs.core.count.call(null,inst_24968);
var inst_24950 = inst_24969;
var inst_24951 = inst_24968;
var inst_24952 = inst_24970;
var inst_24953 = (0);
var state_24998__$1 = (function (){var statearr_25017 = state_24998;
(statearr_25017[(8)] = inst_24951);

(statearr_25017[(10)] = inst_24952);

(statearr_25017[(11)] = inst_24953);

(statearr_25017[(12)] = inst_24950);

return statearr_25017;
})();
var statearr_25018_25051 = state_24998__$1;
(statearr_25018_25051[(2)] = null);

(statearr_25018_25051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (3))){
var inst_24996 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24998__$1,inst_24996);
} else {
if((state_val_24999 === (12))){
var inst_24984 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
var statearr_25019_25052 = state_24998__$1;
(statearr_25019_25052[(2)] = inst_24984);

(statearr_25019_25052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (2))){
var state_24998__$1 = state_24998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24998__$1,(4),in$);
} else {
if((state_val_24999 === (23))){
var inst_24992 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
var statearr_25020_25053 = state_24998__$1;
(statearr_25020_25053[(2)] = inst_24992);

(statearr_25020_25053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (19))){
var inst_24979 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
var statearr_25021_25054 = state_24998__$1;
(statearr_25021_25054[(2)] = inst_24979);

(statearr_25021_25054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (11))){
var inst_24964 = (state_24998[(7)]);
var inst_24950 = (state_24998[(12)]);
var inst_24964__$1 = cljs.core.seq.call(null,inst_24950);
var state_24998__$1 = (function (){var statearr_25022 = state_24998;
(statearr_25022[(7)] = inst_24964__$1);

return statearr_25022;
})();
if(inst_24964__$1){
var statearr_25023_25055 = state_24998__$1;
(statearr_25023_25055[(1)] = (14));

} else {
var statearr_25024_25056 = state_24998__$1;
(statearr_25024_25056[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (9))){
var inst_24986 = (state_24998[(2)]);
var inst_24987 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24998__$1 = (function (){var statearr_25025 = state_24998;
(statearr_25025[(15)] = inst_24986);

return statearr_25025;
})();
if(cljs.core.truth_(inst_24987)){
var statearr_25026_25057 = state_24998__$1;
(statearr_25026_25057[(1)] = (21));

} else {
var statearr_25027_25058 = state_24998__$1;
(statearr_25027_25058[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (5))){
var inst_24942 = cljs.core.async.close_BANG_.call(null,out);
var state_24998__$1 = state_24998;
var statearr_25028_25059 = state_24998__$1;
(statearr_25028_25059[(2)] = inst_24942);

(statearr_25028_25059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (14))){
var inst_24964 = (state_24998[(7)]);
var inst_24966 = cljs.core.chunked_seq_QMARK_.call(null,inst_24964);
var state_24998__$1 = state_24998;
if(inst_24966){
var statearr_25029_25060 = state_24998__$1;
(statearr_25029_25060[(1)] = (17));

} else {
var statearr_25030_25061 = state_24998__$1;
(statearr_25030_25061[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (16))){
var inst_24982 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
var statearr_25031_25062 = state_24998__$1;
(statearr_25031_25062[(2)] = inst_24982);

(statearr_25031_25062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (10))){
var inst_24951 = (state_24998[(8)]);
var inst_24953 = (state_24998[(11)]);
var inst_24958 = cljs.core._nth.call(null,inst_24951,inst_24953);
var state_24998__$1 = state_24998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24998__$1,(13),out,inst_24958);
} else {
if((state_val_24999 === (18))){
var inst_24964 = (state_24998[(7)]);
var inst_24973 = cljs.core.first.call(null,inst_24964);
var state_24998__$1 = state_24998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24998__$1,(20),out,inst_24973);
} else {
if((state_val_24999 === (8))){
var inst_24952 = (state_24998[(10)]);
var inst_24953 = (state_24998[(11)]);
var inst_24955 = (inst_24953 < inst_24952);
var inst_24956 = inst_24955;
var state_24998__$1 = state_24998;
if(cljs.core.truth_(inst_24956)){
var statearr_25032_25063 = state_24998__$1;
(statearr_25032_25063[(1)] = (10));

} else {
var statearr_25033_25064 = state_24998__$1;
(statearr_25033_25064[(1)] = (11));

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
});})(c__22507__auto__))
;
return ((function (switch__22395__auto__,c__22507__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22396__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22396__auto____0 = (function (){
var statearr_25037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25037[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22396__auto__);

(statearr_25037[(1)] = (1));

return statearr_25037;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22396__auto____1 = (function (state_24998){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_24998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e25038){if((e25038 instanceof Object)){
var ex__22399__auto__ = e25038;
var statearr_25039_25065 = state_24998;
(statearr_25039_25065[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25066 = state_24998;
state_24998 = G__25066;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22396__auto__ = function(state_24998){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22396__auto____1.call(this,state_24998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22396__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22396__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto__))
})();
var state__22509__auto__ = (function (){var statearr_25040 = f__22508__auto__.call(null);
(statearr_25040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto__);

return statearr_25040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto__))
);

return c__22507__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25067 = [];
var len__21337__auto___25070 = arguments.length;
var i__21338__auto___25071 = (0);
while(true){
if((i__21338__auto___25071 < len__21337__auto___25070)){
args25067.push((arguments[i__21338__auto___25071]));

var G__25072 = (i__21338__auto___25071 + (1));
i__21338__auto___25071 = G__25072;
continue;
} else {
}
break;
}

var G__25069 = args25067.length;
switch (G__25069) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25067.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25074 = [];
var len__21337__auto___25077 = arguments.length;
var i__21338__auto___25078 = (0);
while(true){
if((i__21338__auto___25078 < len__21337__auto___25077)){
args25074.push((arguments[i__21338__auto___25078]));

var G__25079 = (i__21338__auto___25078 + (1));
i__21338__auto___25078 = G__25079;
continue;
} else {
}
break;
}

var G__25076 = args25074.length;
switch (G__25076) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25074.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25081 = [];
var len__21337__auto___25132 = arguments.length;
var i__21338__auto___25133 = (0);
while(true){
if((i__21338__auto___25133 < len__21337__auto___25132)){
args25081.push((arguments[i__21338__auto___25133]));

var G__25134 = (i__21338__auto___25133 + (1));
i__21338__auto___25133 = G__25134;
continue;
} else {
}
break;
}

var G__25083 = args25081.length;
switch (G__25083) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25081.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22507__auto___25136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___25136,out){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___25136,out){
return (function (state_25107){
var state_val_25108 = (state_25107[(1)]);
if((state_val_25108 === (7))){
var inst_25102 = (state_25107[(2)]);
var state_25107__$1 = state_25107;
var statearr_25109_25137 = state_25107__$1;
(statearr_25109_25137[(2)] = inst_25102);

(statearr_25109_25137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (1))){
var inst_25084 = null;
var state_25107__$1 = (function (){var statearr_25110 = state_25107;
(statearr_25110[(7)] = inst_25084);

return statearr_25110;
})();
var statearr_25111_25138 = state_25107__$1;
(statearr_25111_25138[(2)] = null);

(statearr_25111_25138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (4))){
var inst_25087 = (state_25107[(8)]);
var inst_25087__$1 = (state_25107[(2)]);
var inst_25088 = (inst_25087__$1 == null);
var inst_25089 = cljs.core.not.call(null,inst_25088);
var state_25107__$1 = (function (){var statearr_25112 = state_25107;
(statearr_25112[(8)] = inst_25087__$1);

return statearr_25112;
})();
if(inst_25089){
var statearr_25113_25139 = state_25107__$1;
(statearr_25113_25139[(1)] = (5));

} else {
var statearr_25114_25140 = state_25107__$1;
(statearr_25114_25140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (6))){
var state_25107__$1 = state_25107;
var statearr_25115_25141 = state_25107__$1;
(statearr_25115_25141[(2)] = null);

(statearr_25115_25141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (3))){
var inst_25104 = (state_25107[(2)]);
var inst_25105 = cljs.core.async.close_BANG_.call(null,out);
var state_25107__$1 = (function (){var statearr_25116 = state_25107;
(statearr_25116[(9)] = inst_25104);

return statearr_25116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25107__$1,inst_25105);
} else {
if((state_val_25108 === (2))){
var state_25107__$1 = state_25107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25107__$1,(4),ch);
} else {
if((state_val_25108 === (11))){
var inst_25087 = (state_25107[(8)]);
var inst_25096 = (state_25107[(2)]);
var inst_25084 = inst_25087;
var state_25107__$1 = (function (){var statearr_25117 = state_25107;
(statearr_25117[(7)] = inst_25084);

(statearr_25117[(10)] = inst_25096);

return statearr_25117;
})();
var statearr_25118_25142 = state_25107__$1;
(statearr_25118_25142[(2)] = null);

(statearr_25118_25142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (9))){
var inst_25087 = (state_25107[(8)]);
var state_25107__$1 = state_25107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25107__$1,(11),out,inst_25087);
} else {
if((state_val_25108 === (5))){
var inst_25087 = (state_25107[(8)]);
var inst_25084 = (state_25107[(7)]);
var inst_25091 = cljs.core._EQ_.call(null,inst_25087,inst_25084);
var state_25107__$1 = state_25107;
if(inst_25091){
var statearr_25120_25143 = state_25107__$1;
(statearr_25120_25143[(1)] = (8));

} else {
var statearr_25121_25144 = state_25107__$1;
(statearr_25121_25144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (10))){
var inst_25099 = (state_25107[(2)]);
var state_25107__$1 = state_25107;
var statearr_25122_25145 = state_25107__$1;
(statearr_25122_25145[(2)] = inst_25099);

(statearr_25122_25145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25108 === (8))){
var inst_25084 = (state_25107[(7)]);
var tmp25119 = inst_25084;
var inst_25084__$1 = tmp25119;
var state_25107__$1 = (function (){var statearr_25123 = state_25107;
(statearr_25123[(7)] = inst_25084__$1);

return statearr_25123;
})();
var statearr_25124_25146 = state_25107__$1;
(statearr_25124_25146[(2)] = null);

(statearr_25124_25146[(1)] = (2));


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
});})(c__22507__auto___25136,out))
;
return ((function (switch__22395__auto__,c__22507__auto___25136,out){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_25128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25128[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_25128[(1)] = (1));

return statearr_25128;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_25107){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_25107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e25129){if((e25129 instanceof Object)){
var ex__22399__auto__ = e25129;
var statearr_25130_25147 = state_25107;
(statearr_25130_25147[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25148 = state_25107;
state_25107 = G__25148;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_25107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_25107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___25136,out))
})();
var state__22509__auto__ = (function (){var statearr_25131 = f__22508__auto__.call(null);
(statearr_25131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___25136);

return statearr_25131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___25136,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25149 = [];
var len__21337__auto___25219 = arguments.length;
var i__21338__auto___25220 = (0);
while(true){
if((i__21338__auto___25220 < len__21337__auto___25219)){
args25149.push((arguments[i__21338__auto___25220]));

var G__25221 = (i__21338__auto___25220 + (1));
i__21338__auto___25220 = G__25221;
continue;
} else {
}
break;
}

var G__25151 = args25149.length;
switch (G__25151) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25149.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22507__auto___25223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___25223,out){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___25223,out){
return (function (state_25189){
var state_val_25190 = (state_25189[(1)]);
if((state_val_25190 === (7))){
var inst_25185 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25191_25224 = state_25189__$1;
(statearr_25191_25224[(2)] = inst_25185);

(statearr_25191_25224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (1))){
var inst_25152 = (new Array(n));
var inst_25153 = inst_25152;
var inst_25154 = (0);
var state_25189__$1 = (function (){var statearr_25192 = state_25189;
(statearr_25192[(7)] = inst_25153);

(statearr_25192[(8)] = inst_25154);

return statearr_25192;
})();
var statearr_25193_25225 = state_25189__$1;
(statearr_25193_25225[(2)] = null);

(statearr_25193_25225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (4))){
var inst_25157 = (state_25189[(9)]);
var inst_25157__$1 = (state_25189[(2)]);
var inst_25158 = (inst_25157__$1 == null);
var inst_25159 = cljs.core.not.call(null,inst_25158);
var state_25189__$1 = (function (){var statearr_25194 = state_25189;
(statearr_25194[(9)] = inst_25157__$1);

return statearr_25194;
})();
if(inst_25159){
var statearr_25195_25226 = state_25189__$1;
(statearr_25195_25226[(1)] = (5));

} else {
var statearr_25196_25227 = state_25189__$1;
(statearr_25196_25227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (15))){
var inst_25179 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25197_25228 = state_25189__$1;
(statearr_25197_25228[(2)] = inst_25179);

(statearr_25197_25228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (13))){
var state_25189__$1 = state_25189;
var statearr_25198_25229 = state_25189__$1;
(statearr_25198_25229[(2)] = null);

(statearr_25198_25229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (6))){
var inst_25154 = (state_25189[(8)]);
var inst_25175 = (inst_25154 > (0));
var state_25189__$1 = state_25189;
if(cljs.core.truth_(inst_25175)){
var statearr_25199_25230 = state_25189__$1;
(statearr_25199_25230[(1)] = (12));

} else {
var statearr_25200_25231 = state_25189__$1;
(statearr_25200_25231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (3))){
var inst_25187 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25189__$1,inst_25187);
} else {
if((state_val_25190 === (12))){
var inst_25153 = (state_25189[(7)]);
var inst_25177 = cljs.core.vec.call(null,inst_25153);
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25189__$1,(15),out,inst_25177);
} else {
if((state_val_25190 === (2))){
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25189__$1,(4),ch);
} else {
if((state_val_25190 === (11))){
var inst_25169 = (state_25189[(2)]);
var inst_25170 = (new Array(n));
var inst_25153 = inst_25170;
var inst_25154 = (0);
var state_25189__$1 = (function (){var statearr_25201 = state_25189;
(statearr_25201[(7)] = inst_25153);

(statearr_25201[(8)] = inst_25154);

(statearr_25201[(10)] = inst_25169);

return statearr_25201;
})();
var statearr_25202_25232 = state_25189__$1;
(statearr_25202_25232[(2)] = null);

(statearr_25202_25232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (9))){
var inst_25153 = (state_25189[(7)]);
var inst_25167 = cljs.core.vec.call(null,inst_25153);
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25189__$1,(11),out,inst_25167);
} else {
if((state_val_25190 === (5))){
var inst_25162 = (state_25189[(11)]);
var inst_25153 = (state_25189[(7)]);
var inst_25157 = (state_25189[(9)]);
var inst_25154 = (state_25189[(8)]);
var inst_25161 = (inst_25153[inst_25154] = inst_25157);
var inst_25162__$1 = (inst_25154 + (1));
var inst_25163 = (inst_25162__$1 < n);
var state_25189__$1 = (function (){var statearr_25203 = state_25189;
(statearr_25203[(11)] = inst_25162__$1);

(statearr_25203[(12)] = inst_25161);

return statearr_25203;
})();
if(cljs.core.truth_(inst_25163)){
var statearr_25204_25233 = state_25189__$1;
(statearr_25204_25233[(1)] = (8));

} else {
var statearr_25205_25234 = state_25189__$1;
(statearr_25205_25234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (14))){
var inst_25182 = (state_25189[(2)]);
var inst_25183 = cljs.core.async.close_BANG_.call(null,out);
var state_25189__$1 = (function (){var statearr_25207 = state_25189;
(statearr_25207[(13)] = inst_25182);

return statearr_25207;
})();
var statearr_25208_25235 = state_25189__$1;
(statearr_25208_25235[(2)] = inst_25183);

(statearr_25208_25235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (10))){
var inst_25173 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25209_25236 = state_25189__$1;
(statearr_25209_25236[(2)] = inst_25173);

(statearr_25209_25236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (8))){
var inst_25162 = (state_25189[(11)]);
var inst_25153 = (state_25189[(7)]);
var tmp25206 = inst_25153;
var inst_25153__$1 = tmp25206;
var inst_25154 = inst_25162;
var state_25189__$1 = (function (){var statearr_25210 = state_25189;
(statearr_25210[(7)] = inst_25153__$1);

(statearr_25210[(8)] = inst_25154);

return statearr_25210;
})();
var statearr_25211_25237 = state_25189__$1;
(statearr_25211_25237[(2)] = null);

(statearr_25211_25237[(1)] = (2));


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
});})(c__22507__auto___25223,out))
;
return ((function (switch__22395__auto__,c__22507__auto___25223,out){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_25215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25215[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_25215[(1)] = (1));

return statearr_25215;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_25189){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_25189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e25216){if((e25216 instanceof Object)){
var ex__22399__auto__ = e25216;
var statearr_25217_25238 = state_25189;
(statearr_25217_25238[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25239 = state_25189;
state_25189 = G__25239;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_25189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_25189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___25223,out))
})();
var state__22509__auto__ = (function (){var statearr_25218 = f__22508__auto__.call(null);
(statearr_25218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___25223);

return statearr_25218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___25223,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25240 = [];
var len__21337__auto___25314 = arguments.length;
var i__21338__auto___25315 = (0);
while(true){
if((i__21338__auto___25315 < len__21337__auto___25314)){
args25240.push((arguments[i__21338__auto___25315]));

var G__25316 = (i__21338__auto___25315 + (1));
i__21338__auto___25315 = G__25316;
continue;
} else {
}
break;
}

var G__25242 = args25240.length;
switch (G__25242) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25240.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22507__auto___25318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22507__auto___25318,out){
return (function (){
var f__22508__auto__ = (function (){var switch__22395__auto__ = ((function (c__22507__auto___25318,out){
return (function (state_25284){
var state_val_25285 = (state_25284[(1)]);
if((state_val_25285 === (7))){
var inst_25280 = (state_25284[(2)]);
var state_25284__$1 = state_25284;
var statearr_25286_25319 = state_25284__$1;
(statearr_25286_25319[(2)] = inst_25280);

(statearr_25286_25319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (1))){
var inst_25243 = [];
var inst_25244 = inst_25243;
var inst_25245 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25284__$1 = (function (){var statearr_25287 = state_25284;
(statearr_25287[(7)] = inst_25244);

(statearr_25287[(8)] = inst_25245);

return statearr_25287;
})();
var statearr_25288_25320 = state_25284__$1;
(statearr_25288_25320[(2)] = null);

(statearr_25288_25320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (4))){
var inst_25248 = (state_25284[(9)]);
var inst_25248__$1 = (state_25284[(2)]);
var inst_25249 = (inst_25248__$1 == null);
var inst_25250 = cljs.core.not.call(null,inst_25249);
var state_25284__$1 = (function (){var statearr_25289 = state_25284;
(statearr_25289[(9)] = inst_25248__$1);

return statearr_25289;
})();
if(inst_25250){
var statearr_25290_25321 = state_25284__$1;
(statearr_25290_25321[(1)] = (5));

} else {
var statearr_25291_25322 = state_25284__$1;
(statearr_25291_25322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (15))){
var inst_25274 = (state_25284[(2)]);
var state_25284__$1 = state_25284;
var statearr_25292_25323 = state_25284__$1;
(statearr_25292_25323[(2)] = inst_25274);

(statearr_25292_25323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (13))){
var state_25284__$1 = state_25284;
var statearr_25293_25324 = state_25284__$1;
(statearr_25293_25324[(2)] = null);

(statearr_25293_25324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (6))){
var inst_25244 = (state_25284[(7)]);
var inst_25269 = inst_25244.length;
var inst_25270 = (inst_25269 > (0));
var state_25284__$1 = state_25284;
if(cljs.core.truth_(inst_25270)){
var statearr_25294_25325 = state_25284__$1;
(statearr_25294_25325[(1)] = (12));

} else {
var statearr_25295_25326 = state_25284__$1;
(statearr_25295_25326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (3))){
var inst_25282 = (state_25284[(2)]);
var state_25284__$1 = state_25284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25284__$1,inst_25282);
} else {
if((state_val_25285 === (12))){
var inst_25244 = (state_25284[(7)]);
var inst_25272 = cljs.core.vec.call(null,inst_25244);
var state_25284__$1 = state_25284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25284__$1,(15),out,inst_25272);
} else {
if((state_val_25285 === (2))){
var state_25284__$1 = state_25284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25284__$1,(4),ch);
} else {
if((state_val_25285 === (11))){
var inst_25248 = (state_25284[(9)]);
var inst_25252 = (state_25284[(10)]);
var inst_25262 = (state_25284[(2)]);
var inst_25263 = [];
var inst_25264 = inst_25263.push(inst_25248);
var inst_25244 = inst_25263;
var inst_25245 = inst_25252;
var state_25284__$1 = (function (){var statearr_25296 = state_25284;
(statearr_25296[(7)] = inst_25244);

(statearr_25296[(11)] = inst_25264);

(statearr_25296[(8)] = inst_25245);

(statearr_25296[(12)] = inst_25262);

return statearr_25296;
})();
var statearr_25297_25327 = state_25284__$1;
(statearr_25297_25327[(2)] = null);

(statearr_25297_25327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (9))){
var inst_25244 = (state_25284[(7)]);
var inst_25260 = cljs.core.vec.call(null,inst_25244);
var state_25284__$1 = state_25284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25284__$1,(11),out,inst_25260);
} else {
if((state_val_25285 === (5))){
var inst_25245 = (state_25284[(8)]);
var inst_25248 = (state_25284[(9)]);
var inst_25252 = (state_25284[(10)]);
var inst_25252__$1 = f.call(null,inst_25248);
var inst_25253 = cljs.core._EQ_.call(null,inst_25252__$1,inst_25245);
var inst_25254 = cljs.core.keyword_identical_QMARK_.call(null,inst_25245,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25255 = (inst_25253) || (inst_25254);
var state_25284__$1 = (function (){var statearr_25298 = state_25284;
(statearr_25298[(10)] = inst_25252__$1);

return statearr_25298;
})();
if(cljs.core.truth_(inst_25255)){
var statearr_25299_25328 = state_25284__$1;
(statearr_25299_25328[(1)] = (8));

} else {
var statearr_25300_25329 = state_25284__$1;
(statearr_25300_25329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (14))){
var inst_25277 = (state_25284[(2)]);
var inst_25278 = cljs.core.async.close_BANG_.call(null,out);
var state_25284__$1 = (function (){var statearr_25302 = state_25284;
(statearr_25302[(13)] = inst_25277);

return statearr_25302;
})();
var statearr_25303_25330 = state_25284__$1;
(statearr_25303_25330[(2)] = inst_25278);

(statearr_25303_25330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (10))){
var inst_25267 = (state_25284[(2)]);
var state_25284__$1 = state_25284;
var statearr_25304_25331 = state_25284__$1;
(statearr_25304_25331[(2)] = inst_25267);

(statearr_25304_25331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25285 === (8))){
var inst_25244 = (state_25284[(7)]);
var inst_25248 = (state_25284[(9)]);
var inst_25252 = (state_25284[(10)]);
var inst_25257 = inst_25244.push(inst_25248);
var tmp25301 = inst_25244;
var inst_25244__$1 = tmp25301;
var inst_25245 = inst_25252;
var state_25284__$1 = (function (){var statearr_25305 = state_25284;
(statearr_25305[(14)] = inst_25257);

(statearr_25305[(7)] = inst_25244__$1);

(statearr_25305[(8)] = inst_25245);

return statearr_25305;
})();
var statearr_25306_25332 = state_25284__$1;
(statearr_25306_25332[(2)] = null);

(statearr_25306_25332[(1)] = (2));


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
});})(c__22507__auto___25318,out))
;
return ((function (switch__22395__auto__,c__22507__auto___25318,out){
return (function() {
var cljs$core$async$state_machine__22396__auto__ = null;
var cljs$core$async$state_machine__22396__auto____0 = (function (){
var statearr_25310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25310[(0)] = cljs$core$async$state_machine__22396__auto__);

(statearr_25310[(1)] = (1));

return statearr_25310;
});
var cljs$core$async$state_machine__22396__auto____1 = (function (state_25284){
while(true){
var ret_value__22397__auto__ = (function (){try{while(true){
var result__22398__auto__ = switch__22395__auto__.call(null,state_25284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22398__auto__;
}
break;
}
}catch (e25311){if((e25311 instanceof Object)){
var ex__22399__auto__ = e25311;
var statearr_25312_25333 = state_25284;
(statearr_25312_25333[(5)] = ex__22399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25334 = state_25284;
state_25284 = G__25334;
continue;
} else {
return ret_value__22397__auto__;
}
break;
}
});
cljs$core$async$state_machine__22396__auto__ = function(state_25284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22396__auto____1.call(this,state_25284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22396__auto____0;
cljs$core$async$state_machine__22396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22396__auto____1;
return cljs$core$async$state_machine__22396__auto__;
})()
;})(switch__22395__auto__,c__22507__auto___25318,out))
})();
var state__22509__auto__ = (function (){var statearr_25313 = f__22508__auto__.call(null);
(statearr_25313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22507__auto___25318);

return statearr_25313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22509__auto__);
});})(c__22507__auto___25318,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1528667379736