goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12606 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12606(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12618 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12618(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11858 = coll;
var G__11859 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11858,G__11859) : shadow.dom.lazy_native_coll_seq.call(null,G__11858,G__11859));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11883 = arguments.length;
switch (G__11883) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11887 = arguments.length;
switch (G__11887) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11891 = arguments.length;
switch (G__11891) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11911 = arguments.length;
switch (G__11911) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11918 = arguments.length;
switch (G__11918) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11920 = arguments.length;
switch (G__11920) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11930){if((e11930 instanceof Object)){
var e = e11930;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11930;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11931 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11932 = null;
var count__11933 = (0);
var i__11934 = (0);
while(true){
if((i__11934 < count__11933)){
var el = chunk__11932.cljs$core$IIndexed$_nth$arity$2(null,i__11934);
var handler_12662__$1 = ((function (seq__11931,chunk__11932,count__11933,i__11934,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11931,chunk__11932,count__11933,i__11934,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12662__$1);


var G__12663 = seq__11931;
var G__12664 = chunk__11932;
var G__12665 = count__11933;
var G__12666 = (i__11934 + (1));
seq__11931 = G__12663;
chunk__11932 = G__12664;
count__11933 = G__12665;
i__11934 = G__12666;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11931);
if(temp__5823__auto__){
var seq__11931__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11931__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11931__$1);
var G__12667 = cljs.core.chunk_rest(seq__11931__$1);
var G__12668 = c__5548__auto__;
var G__12669 = cljs.core.count(c__5548__auto__);
var G__12670 = (0);
seq__11931 = G__12667;
chunk__11932 = G__12668;
count__11933 = G__12669;
i__11934 = G__12670;
continue;
} else {
var el = cljs.core.first(seq__11931__$1);
var handler_12671__$1 = ((function (seq__11931,chunk__11932,count__11933,i__11934,el,seq__11931__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11931,chunk__11932,count__11933,i__11934,el,seq__11931__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12671__$1);


var G__12675 = cljs.core.next(seq__11931__$1);
var G__12676 = null;
var G__12677 = (0);
var G__12678 = (0);
seq__11931 = G__12675;
chunk__11932 = G__12676;
count__11933 = G__12677;
i__11934 = G__12678;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11956 = arguments.length;
switch (G__11956) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11967 = cljs.core.seq(events);
var chunk__11968 = null;
var count__11969 = (0);
var i__11970 = (0);
while(true){
if((i__11970 < count__11969)){
var vec__11981 = chunk__11968.cljs$core$IIndexed$_nth$arity$2(null,i__11970);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11981,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12686 = seq__11967;
var G__12687 = chunk__11968;
var G__12688 = count__11969;
var G__12689 = (i__11970 + (1));
seq__11967 = G__12686;
chunk__11968 = G__12687;
count__11969 = G__12688;
i__11970 = G__12689;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11967);
if(temp__5823__auto__){
var seq__11967__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11967__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11967__$1);
var G__12691 = cljs.core.chunk_rest(seq__11967__$1);
var G__12692 = c__5548__auto__;
var G__12693 = cljs.core.count(c__5548__auto__);
var G__12694 = (0);
seq__11967 = G__12691;
chunk__11968 = G__12692;
count__11969 = G__12693;
i__11970 = G__12694;
continue;
} else {
var vec__11984 = cljs.core.first(seq__11967__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12696 = cljs.core.next(seq__11967__$1);
var G__12697 = null;
var G__12698 = (0);
var G__12699 = (0);
seq__11967 = G__12696;
chunk__11968 = G__12697;
count__11969 = G__12698;
i__11970 = G__12699;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11988 = cljs.core.seq(styles);
var chunk__11990 = null;
var count__11991 = (0);
var i__11992 = (0);
while(true){
if((i__11992 < count__11991)){
var vec__12019 = chunk__11990.cljs$core$IIndexed$_nth$arity$2(null,i__11992);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12019,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12702 = seq__11988;
var G__12703 = chunk__11990;
var G__12704 = count__11991;
var G__12705 = (i__11992 + (1));
seq__11988 = G__12702;
chunk__11990 = G__12703;
count__11991 = G__12704;
i__11992 = G__12705;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11988);
if(temp__5823__auto__){
var seq__11988__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11988__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11988__$1);
var G__12706 = cljs.core.chunk_rest(seq__11988__$1);
var G__12707 = c__5548__auto__;
var G__12708 = cljs.core.count(c__5548__auto__);
var G__12709 = (0);
seq__11988 = G__12706;
chunk__11990 = G__12707;
count__11991 = G__12708;
i__11992 = G__12709;
continue;
} else {
var vec__12022 = cljs.core.first(seq__11988__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12022,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12711 = cljs.core.next(seq__11988__$1);
var G__12712 = null;
var G__12713 = (0);
var G__12714 = (0);
seq__11988 = G__12711;
chunk__11990 = G__12712;
count__11991 = G__12713;
i__11992 = G__12714;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12026_12715 = key;
var G__12026_12716__$1 = (((G__12026_12715 instanceof cljs.core.Keyword))?G__12026_12715.fqn:null);
switch (G__12026_12716__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12762 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_12762,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_12762,"aria-");
}
})())){
el.setAttribute(ks_12762,value);
} else {
(el[ks_12762] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12031){
var map__12032 = p__12031;
var map__12032__$1 = cljs.core.__destructure_map(map__12032);
var props = map__12032__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12032__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12033 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12033,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12033,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12033,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12036 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12036,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12036;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12038 = arguments.length;
switch (G__12038) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12041){
var vec__12042 = p__12041;
var seq__12043 = cljs.core.seq(vec__12042);
var first__12044 = cljs.core.first(seq__12043);
var seq__12043__$1 = cljs.core.next(seq__12043);
var nn = first__12044;
var first__12044__$1 = cljs.core.first(seq__12043__$1);
var seq__12043__$2 = cljs.core.next(seq__12043__$1);
var np = first__12044__$1;
var nc = seq__12043__$2;
var node = vec__12042;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12048 = nn;
var G__12049 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12048,G__12049) : create_fn.call(null,G__12048,G__12049));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12050 = nn;
var G__12051 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12050,G__12051) : create_fn.call(null,G__12050,G__12051));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12052 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12052,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12052,(1),null);
var seq__12055_12831 = cljs.core.seq(node_children);
var chunk__12056_12832 = null;
var count__12057_12834 = (0);
var i__12058_12835 = (0);
while(true){
if((i__12058_12835 < count__12057_12834)){
var child_struct_12836 = chunk__12056_12832.cljs$core$IIndexed$_nth$arity$2(null,i__12058_12835);
var children_12839 = shadow.dom.dom_node(child_struct_12836);
if(cljs.core.seq_QMARK_(children_12839)){
var seq__12071_12841 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12839));
var chunk__12073_12842 = null;
var count__12074_12843 = (0);
var i__12075_12844 = (0);
while(true){
if((i__12075_12844 < count__12074_12843)){
var child_12845 = chunk__12073_12842.cljs$core$IIndexed$_nth$arity$2(null,i__12075_12844);
if(cljs.core.truth_(child_12845)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12845);


var G__12846 = seq__12071_12841;
var G__12847 = chunk__12073_12842;
var G__12848 = count__12074_12843;
var G__12849 = (i__12075_12844 + (1));
seq__12071_12841 = G__12846;
chunk__12073_12842 = G__12847;
count__12074_12843 = G__12848;
i__12075_12844 = G__12849;
continue;
} else {
var G__12850 = seq__12071_12841;
var G__12851 = chunk__12073_12842;
var G__12852 = count__12074_12843;
var G__12853 = (i__12075_12844 + (1));
seq__12071_12841 = G__12850;
chunk__12073_12842 = G__12851;
count__12074_12843 = G__12852;
i__12075_12844 = G__12853;
continue;
}
} else {
var temp__5823__auto___12854 = cljs.core.seq(seq__12071_12841);
if(temp__5823__auto___12854){
var seq__12071_12855__$1 = temp__5823__auto___12854;
if(cljs.core.chunked_seq_QMARK_(seq__12071_12855__$1)){
var c__5548__auto___12856 = cljs.core.chunk_first(seq__12071_12855__$1);
var G__12857 = cljs.core.chunk_rest(seq__12071_12855__$1);
var G__12858 = c__5548__auto___12856;
var G__12859 = cljs.core.count(c__5548__auto___12856);
var G__12860 = (0);
seq__12071_12841 = G__12857;
chunk__12073_12842 = G__12858;
count__12074_12843 = G__12859;
i__12075_12844 = G__12860;
continue;
} else {
var child_12861 = cljs.core.first(seq__12071_12855__$1);
if(cljs.core.truth_(child_12861)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12861);


var G__12862 = cljs.core.next(seq__12071_12855__$1);
var G__12863 = null;
var G__12864 = (0);
var G__12865 = (0);
seq__12071_12841 = G__12862;
chunk__12073_12842 = G__12863;
count__12074_12843 = G__12864;
i__12075_12844 = G__12865;
continue;
} else {
var G__12870 = cljs.core.next(seq__12071_12855__$1);
var G__12871 = null;
var G__12872 = (0);
var G__12873 = (0);
seq__12071_12841 = G__12870;
chunk__12073_12842 = G__12871;
count__12074_12843 = G__12872;
i__12075_12844 = G__12873;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12839);
}


var G__12874 = seq__12055_12831;
var G__12875 = chunk__12056_12832;
var G__12876 = count__12057_12834;
var G__12877 = (i__12058_12835 + (1));
seq__12055_12831 = G__12874;
chunk__12056_12832 = G__12875;
count__12057_12834 = G__12876;
i__12058_12835 = G__12877;
continue;
} else {
var temp__5823__auto___12878 = cljs.core.seq(seq__12055_12831);
if(temp__5823__auto___12878){
var seq__12055_12879__$1 = temp__5823__auto___12878;
if(cljs.core.chunked_seq_QMARK_(seq__12055_12879__$1)){
var c__5548__auto___12882 = cljs.core.chunk_first(seq__12055_12879__$1);
var G__12883 = cljs.core.chunk_rest(seq__12055_12879__$1);
var G__12884 = c__5548__auto___12882;
var G__12885 = cljs.core.count(c__5548__auto___12882);
var G__12886 = (0);
seq__12055_12831 = G__12883;
chunk__12056_12832 = G__12884;
count__12057_12834 = G__12885;
i__12058_12835 = G__12886;
continue;
} else {
var child_struct_12889 = cljs.core.first(seq__12055_12879__$1);
var children_12890 = shadow.dom.dom_node(child_struct_12889);
if(cljs.core.seq_QMARK_(children_12890)){
var seq__12077_12892 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12890));
var chunk__12079_12893 = null;
var count__12080_12894 = (0);
var i__12081_12895 = (0);
while(true){
if((i__12081_12895 < count__12080_12894)){
var child_12896 = chunk__12079_12893.cljs$core$IIndexed$_nth$arity$2(null,i__12081_12895);
if(cljs.core.truth_(child_12896)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12896);


var G__12897 = seq__12077_12892;
var G__12898 = chunk__12079_12893;
var G__12899 = count__12080_12894;
var G__12900 = (i__12081_12895 + (1));
seq__12077_12892 = G__12897;
chunk__12079_12893 = G__12898;
count__12080_12894 = G__12899;
i__12081_12895 = G__12900;
continue;
} else {
var G__12901 = seq__12077_12892;
var G__12902 = chunk__12079_12893;
var G__12903 = count__12080_12894;
var G__12904 = (i__12081_12895 + (1));
seq__12077_12892 = G__12901;
chunk__12079_12893 = G__12902;
count__12080_12894 = G__12903;
i__12081_12895 = G__12904;
continue;
}
} else {
var temp__5823__auto___12905__$1 = cljs.core.seq(seq__12077_12892);
if(temp__5823__auto___12905__$1){
var seq__12077_12906__$1 = temp__5823__auto___12905__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12077_12906__$1)){
var c__5548__auto___12911 = cljs.core.chunk_first(seq__12077_12906__$1);
var G__12914 = cljs.core.chunk_rest(seq__12077_12906__$1);
var G__12915 = c__5548__auto___12911;
var G__12916 = cljs.core.count(c__5548__auto___12911);
var G__12917 = (0);
seq__12077_12892 = G__12914;
chunk__12079_12893 = G__12915;
count__12080_12894 = G__12916;
i__12081_12895 = G__12917;
continue;
} else {
var child_12918 = cljs.core.first(seq__12077_12906__$1);
if(cljs.core.truth_(child_12918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12918);


var G__12920 = cljs.core.next(seq__12077_12906__$1);
var G__12921 = null;
var G__12922 = (0);
var G__12923 = (0);
seq__12077_12892 = G__12920;
chunk__12079_12893 = G__12921;
count__12080_12894 = G__12922;
i__12081_12895 = G__12923;
continue;
} else {
var G__12925 = cljs.core.next(seq__12077_12906__$1);
var G__12926 = null;
var G__12927 = (0);
var G__12928 = (0);
seq__12077_12892 = G__12925;
chunk__12079_12893 = G__12926;
count__12080_12894 = G__12927;
i__12081_12895 = G__12928;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12890);
}


var G__12930 = cljs.core.next(seq__12055_12879__$1);
var G__12931 = null;
var G__12932 = (0);
var G__12933 = (0);
seq__12055_12831 = G__12930;
chunk__12056_12832 = G__12931;
count__12057_12834 = G__12932;
i__12058_12835 = G__12933;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12094 = cljs.core.seq(node);
var chunk__12095 = null;
var count__12096 = (0);
var i__12097 = (0);
while(true){
if((i__12097 < count__12096)){
var n = chunk__12095.cljs$core$IIndexed$_nth$arity$2(null,i__12097);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12938 = seq__12094;
var G__12939 = chunk__12095;
var G__12940 = count__12096;
var G__12941 = (i__12097 + (1));
seq__12094 = G__12938;
chunk__12095 = G__12939;
count__12096 = G__12940;
i__12097 = G__12941;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12094);
if(temp__5823__auto__){
var seq__12094__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12094__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12094__$1);
var G__12945 = cljs.core.chunk_rest(seq__12094__$1);
var G__12946 = c__5548__auto__;
var G__12947 = cljs.core.count(c__5548__auto__);
var G__12948 = (0);
seq__12094 = G__12945;
chunk__12095 = G__12946;
count__12096 = G__12947;
i__12097 = G__12948;
continue;
} else {
var n = cljs.core.first(seq__12094__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12951 = cljs.core.next(seq__12094__$1);
var G__12952 = null;
var G__12953 = (0);
var G__12954 = (0);
seq__12094 = G__12951;
chunk__12095 = G__12952;
count__12096 = G__12953;
i__12097 = G__12954;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12105 = arguments.length;
switch (G__12105) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12108 = arguments.length;
switch (G__12108) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12127 = arguments.length;
switch (G__12127) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13026 = arguments.length;
var i__5750__auto___13027 = (0);
while(true){
if((i__5750__auto___13027 < len__5749__auto___13026)){
args__5755__auto__.push((arguments[i__5750__auto___13027]));

var G__13028 = (i__5750__auto___13027 + (1));
i__5750__auto___13027 = G__13028;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12130_13029 = cljs.core.seq(nodes);
var chunk__12131_13030 = null;
var count__12132_13031 = (0);
var i__12133_13032 = (0);
while(true){
if((i__12133_13032 < count__12132_13031)){
var node_13033 = chunk__12131_13030.cljs$core$IIndexed$_nth$arity$2(null,i__12133_13032);
fragment.appendChild(shadow.dom._to_dom(node_13033));


var G__13035 = seq__12130_13029;
var G__13036 = chunk__12131_13030;
var G__13037 = count__12132_13031;
var G__13038 = (i__12133_13032 + (1));
seq__12130_13029 = G__13035;
chunk__12131_13030 = G__13036;
count__12132_13031 = G__13037;
i__12133_13032 = G__13038;
continue;
} else {
var temp__5823__auto___13039 = cljs.core.seq(seq__12130_13029);
if(temp__5823__auto___13039){
var seq__12130_13040__$1 = temp__5823__auto___13039;
if(cljs.core.chunked_seq_QMARK_(seq__12130_13040__$1)){
var c__5548__auto___13041 = cljs.core.chunk_first(seq__12130_13040__$1);
var G__13042 = cljs.core.chunk_rest(seq__12130_13040__$1);
var G__13043 = c__5548__auto___13041;
var G__13044 = cljs.core.count(c__5548__auto___13041);
var G__13045 = (0);
seq__12130_13029 = G__13042;
chunk__12131_13030 = G__13043;
count__12132_13031 = G__13044;
i__12133_13032 = G__13045;
continue;
} else {
var node_13046 = cljs.core.first(seq__12130_13040__$1);
fragment.appendChild(shadow.dom._to_dom(node_13046));


var G__13047 = cljs.core.next(seq__12130_13040__$1);
var G__13048 = null;
var G__13049 = (0);
var G__13050 = (0);
seq__12130_13029 = G__13047;
chunk__12131_13030 = G__13048;
count__12132_13031 = G__13049;
i__12133_13032 = G__13050;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12129){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12129));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12136_13051 = cljs.core.seq(scripts);
var chunk__12137_13052 = null;
var count__12138_13053 = (0);
var i__12139_13054 = (0);
while(true){
if((i__12139_13054 < count__12138_13053)){
var vec__12146_13055 = chunk__12137_13052.cljs$core$IIndexed$_nth$arity$2(null,i__12139_13054);
var script_tag_13056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146_13055,(0),null);
var script_body_13057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146_13055,(1),null);
eval(script_body_13057);


var G__13058 = seq__12136_13051;
var G__13059 = chunk__12137_13052;
var G__13060 = count__12138_13053;
var G__13061 = (i__12139_13054 + (1));
seq__12136_13051 = G__13058;
chunk__12137_13052 = G__13059;
count__12138_13053 = G__13060;
i__12139_13054 = G__13061;
continue;
} else {
var temp__5823__auto___13062 = cljs.core.seq(seq__12136_13051);
if(temp__5823__auto___13062){
var seq__12136_13063__$1 = temp__5823__auto___13062;
if(cljs.core.chunked_seq_QMARK_(seq__12136_13063__$1)){
var c__5548__auto___13064 = cljs.core.chunk_first(seq__12136_13063__$1);
var G__13065 = cljs.core.chunk_rest(seq__12136_13063__$1);
var G__13066 = c__5548__auto___13064;
var G__13067 = cljs.core.count(c__5548__auto___13064);
var G__13068 = (0);
seq__12136_13051 = G__13065;
chunk__12137_13052 = G__13066;
count__12138_13053 = G__13067;
i__12139_13054 = G__13068;
continue;
} else {
var vec__12149_13069 = cljs.core.first(seq__12136_13063__$1);
var script_tag_13070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149_13069,(0),null);
var script_body_13071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149_13069,(1),null);
eval(script_body_13071);


var G__13072 = cljs.core.next(seq__12136_13063__$1);
var G__13073 = null;
var G__13074 = (0);
var G__13075 = (0);
seq__12136_13051 = G__13072;
chunk__12137_13052 = G__13073;
count__12138_13053 = G__13074;
i__12139_13054 = G__13075;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12152){
var vec__12154 = p__12152;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12154,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12154,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12159 = arguments.length;
switch (G__12159) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12173 = cljs.core.seq(style_keys);
var chunk__12174 = null;
var count__12175 = (0);
var i__12176 = (0);
while(true){
if((i__12176 < count__12175)){
var it = chunk__12174.cljs$core$IIndexed$_nth$arity$2(null,i__12176);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13126 = seq__12173;
var G__13127 = chunk__12174;
var G__13128 = count__12175;
var G__13129 = (i__12176 + (1));
seq__12173 = G__13126;
chunk__12174 = G__13127;
count__12175 = G__13128;
i__12176 = G__13129;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12173);
if(temp__5823__auto__){
var seq__12173__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12173__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12173__$1);
var G__13130 = cljs.core.chunk_rest(seq__12173__$1);
var G__13131 = c__5548__auto__;
var G__13132 = cljs.core.count(c__5548__auto__);
var G__13133 = (0);
seq__12173 = G__13130;
chunk__12174 = G__13131;
count__12175 = G__13132;
i__12176 = G__13133;
continue;
} else {
var it = cljs.core.first(seq__12173__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13134 = cljs.core.next(seq__12173__$1);
var G__13135 = null;
var G__13136 = (0);
var G__13137 = (0);
seq__12173 = G__13134;
chunk__12174 = G__13135;
count__12175 = G__13136;
i__12176 = G__13137;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k12185,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__12211 = k12185;
var G__12211__$1 = (((G__12211 instanceof cljs.core.Keyword))?G__12211.fqn:null);
switch (G__12211__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12185,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__12212){
var vec__12213 = p__12212;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12184){
var self__ = this;
var G__12184__$1 = this;
return (new cljs.core.RecordIter((0),G__12184__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12186,other12187){
var self__ = this;
var this12186__$1 = this;
return (((!((other12187 == null)))) && ((((this12186__$1.constructor === other12187.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12186__$1.x,other12187.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12186__$1.y,other12187.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12186__$1.__extmap,other12187.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k12185){
var self__ = this;
var this__5330__auto____$1 = this;
var G__12216 = k12185;
var G__12216__$1 = (((G__12216 instanceof cljs.core.Keyword))?G__12216.fqn:null);
switch (G__12216__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12185);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__12184){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__12217 = cljs.core.keyword_identical_QMARK_;
var expr__12218 = k__5332__auto__;
if(cljs.core.truth_((pred__12217.cljs$core$IFn$_invoke$arity$2 ? pred__12217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12218) : pred__12217.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12218)))){
return (new shadow.dom.Coordinate(G__12184,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12217.cljs$core$IFn$_invoke$arity$2 ? pred__12217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12218) : pred__12217.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12218)))){
return (new shadow.dom.Coordinate(self__.x,G__12184,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__12184),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__12184){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12184,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12207){
var extmap__5365__auto__ = (function (){var G__12224 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12207,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12207)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12224);
} else {
return G__12224;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12207),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12207),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k12226,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__12230 = k12226;
var G__12230__$1 = (((G__12230 instanceof cljs.core.Keyword))?G__12230.fqn:null);
switch (G__12230__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12226,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__12231){
var vec__12232 = p__12231;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12232,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12232,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12225){
var self__ = this;
var G__12225__$1 = this;
return (new cljs.core.RecordIter((0),G__12225__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12227,other12228){
var self__ = this;
var this12227__$1 = this;
return (((!((other12228 == null)))) && ((((this12227__$1.constructor === other12228.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12227__$1.w,other12228.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12227__$1.h,other12228.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12227__$1.__extmap,other12228.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k12226){
var self__ = this;
var this__5330__auto____$1 = this;
var G__12259 = k12226;
var G__12259__$1 = (((G__12259 instanceof cljs.core.Keyword))?G__12259.fqn:null);
switch (G__12259__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12226);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__12225){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__12260 = cljs.core.keyword_identical_QMARK_;
var expr__12261 = k__5332__auto__;
if(cljs.core.truth_((pred__12260.cljs$core$IFn$_invoke$arity$2 ? pred__12260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12261) : pred__12260.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12261)))){
return (new shadow.dom.Size(G__12225,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12260.cljs$core$IFn$_invoke$arity$2 ? pred__12260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12261) : pred__12260.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12261)))){
return (new shadow.dom.Size(self__.w,G__12225,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__12225),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__12225){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12225,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12229){
var extmap__5365__auto__ = (function (){var G__12263 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12229,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12229)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12263);
} else {
return G__12263;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12229),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12229),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__13173 = (i + (1));
var G__13174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13173;
ret = G__13174;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12282){
var vec__12283 = p__12282;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12283,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12288 = arguments.length;
switch (G__12288) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13182 = ps;
var G__13183 = (i + (1));
el__$1 = G__13182;
i = G__13183;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12369 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12369,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12369,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12369,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12375_13199 = cljs.core.seq(props);
var chunk__12376_13200 = null;
var count__12377_13201 = (0);
var i__12378_13202 = (0);
while(true){
if((i__12378_13202 < count__12377_13201)){
var vec__12411_13204 = chunk__12376_13200.cljs$core$IIndexed$_nth$arity$2(null,i__12378_13202);
var k_13205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411_13204,(0),null);
var v_13206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411_13204,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_13205);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13205),v_13206);


var G__13207 = seq__12375_13199;
var G__13208 = chunk__12376_13200;
var G__13209 = count__12377_13201;
var G__13210 = (i__12378_13202 + (1));
seq__12375_13199 = G__13207;
chunk__12376_13200 = G__13208;
count__12377_13201 = G__13209;
i__12378_13202 = G__13210;
continue;
} else {
var temp__5823__auto___13211 = cljs.core.seq(seq__12375_13199);
if(temp__5823__auto___13211){
var seq__12375_13212__$1 = temp__5823__auto___13211;
if(cljs.core.chunked_seq_QMARK_(seq__12375_13212__$1)){
var c__5548__auto___13213 = cljs.core.chunk_first(seq__12375_13212__$1);
var G__13214 = cljs.core.chunk_rest(seq__12375_13212__$1);
var G__13215 = c__5548__auto___13213;
var G__13216 = cljs.core.count(c__5548__auto___13213);
var G__13217 = (0);
seq__12375_13199 = G__13214;
chunk__12376_13200 = G__13215;
count__12377_13201 = G__13216;
i__12378_13202 = G__13217;
continue;
} else {
var vec__12435_13218 = cljs.core.first(seq__12375_13212__$1);
var k_13219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435_13218,(0),null);
var v_13220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435_13218,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_13219);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13219),v_13220);


var G__13221 = cljs.core.next(seq__12375_13212__$1);
var G__13222 = null;
var G__13223 = (0);
var G__13224 = (0);
seq__12375_13199 = G__13221;
chunk__12376_13200 = G__13222;
count__12377_13201 = G__13223;
i__12378_13202 = G__13224;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12447 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12447,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12447,(1),null);
var seq__12450_13225 = cljs.core.seq(node_children);
var chunk__12452_13226 = null;
var count__12453_13227 = (0);
var i__12454_13228 = (0);
while(true){
if((i__12454_13228 < count__12453_13227)){
var child_struct_13229 = chunk__12452_13226.cljs$core$IIndexed$_nth$arity$2(null,i__12454_13228);
if((!((child_struct_13229 == null)))){
if(typeof child_struct_13229 === 'string'){
var text_13230 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13230),child_struct_13229].join(''));
} else {
var children_13231 = shadow.dom.svg_node(child_struct_13229);
if(cljs.core.seq_QMARK_(children_13231)){
var seq__12488_13232 = cljs.core.seq(children_13231);
var chunk__12490_13233 = null;
var count__12491_13234 = (0);
var i__12492_13235 = (0);
while(true){
if((i__12492_13235 < count__12491_13234)){
var child_13236 = chunk__12490_13233.cljs$core$IIndexed$_nth$arity$2(null,i__12492_13235);
if(cljs.core.truth_(child_13236)){
node.appendChild(child_13236);


var G__13237 = seq__12488_13232;
var G__13238 = chunk__12490_13233;
var G__13239 = count__12491_13234;
var G__13240 = (i__12492_13235 + (1));
seq__12488_13232 = G__13237;
chunk__12490_13233 = G__13238;
count__12491_13234 = G__13239;
i__12492_13235 = G__13240;
continue;
} else {
var G__13241 = seq__12488_13232;
var G__13242 = chunk__12490_13233;
var G__13243 = count__12491_13234;
var G__13244 = (i__12492_13235 + (1));
seq__12488_13232 = G__13241;
chunk__12490_13233 = G__13242;
count__12491_13234 = G__13243;
i__12492_13235 = G__13244;
continue;
}
} else {
var temp__5823__auto___13245 = cljs.core.seq(seq__12488_13232);
if(temp__5823__auto___13245){
var seq__12488_13246__$1 = temp__5823__auto___13245;
if(cljs.core.chunked_seq_QMARK_(seq__12488_13246__$1)){
var c__5548__auto___13247 = cljs.core.chunk_first(seq__12488_13246__$1);
var G__13248 = cljs.core.chunk_rest(seq__12488_13246__$1);
var G__13249 = c__5548__auto___13247;
var G__13250 = cljs.core.count(c__5548__auto___13247);
var G__13251 = (0);
seq__12488_13232 = G__13248;
chunk__12490_13233 = G__13249;
count__12491_13234 = G__13250;
i__12492_13235 = G__13251;
continue;
} else {
var child_13252 = cljs.core.first(seq__12488_13246__$1);
if(cljs.core.truth_(child_13252)){
node.appendChild(child_13252);


var G__13253 = cljs.core.next(seq__12488_13246__$1);
var G__13254 = null;
var G__13255 = (0);
var G__13256 = (0);
seq__12488_13232 = G__13253;
chunk__12490_13233 = G__13254;
count__12491_13234 = G__13255;
i__12492_13235 = G__13256;
continue;
} else {
var G__13257 = cljs.core.next(seq__12488_13246__$1);
var G__13258 = null;
var G__13259 = (0);
var G__13260 = (0);
seq__12488_13232 = G__13257;
chunk__12490_13233 = G__13258;
count__12491_13234 = G__13259;
i__12492_13235 = G__13260;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13231);
}
}


var G__13261 = seq__12450_13225;
var G__13262 = chunk__12452_13226;
var G__13263 = count__12453_13227;
var G__13264 = (i__12454_13228 + (1));
seq__12450_13225 = G__13261;
chunk__12452_13226 = G__13262;
count__12453_13227 = G__13263;
i__12454_13228 = G__13264;
continue;
} else {
var G__13265 = seq__12450_13225;
var G__13266 = chunk__12452_13226;
var G__13267 = count__12453_13227;
var G__13268 = (i__12454_13228 + (1));
seq__12450_13225 = G__13265;
chunk__12452_13226 = G__13266;
count__12453_13227 = G__13267;
i__12454_13228 = G__13268;
continue;
}
} else {
var temp__5823__auto___13269 = cljs.core.seq(seq__12450_13225);
if(temp__5823__auto___13269){
var seq__12450_13270__$1 = temp__5823__auto___13269;
if(cljs.core.chunked_seq_QMARK_(seq__12450_13270__$1)){
var c__5548__auto___13272 = cljs.core.chunk_first(seq__12450_13270__$1);
var G__13273 = cljs.core.chunk_rest(seq__12450_13270__$1);
var G__13274 = c__5548__auto___13272;
var G__13275 = cljs.core.count(c__5548__auto___13272);
var G__13276 = (0);
seq__12450_13225 = G__13273;
chunk__12452_13226 = G__13274;
count__12453_13227 = G__13275;
i__12454_13228 = G__13276;
continue;
} else {
var child_struct_13278 = cljs.core.first(seq__12450_13270__$1);
if((!((child_struct_13278 == null)))){
if(typeof child_struct_13278 === 'string'){
var text_13280 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13280),child_struct_13278].join(''));
} else {
var children_13282 = shadow.dom.svg_node(child_struct_13278);
if(cljs.core.seq_QMARK_(children_13282)){
var seq__12494_13283 = cljs.core.seq(children_13282);
var chunk__12496_13284 = null;
var count__12497_13285 = (0);
var i__12498_13286 = (0);
while(true){
if((i__12498_13286 < count__12497_13285)){
var child_13287 = chunk__12496_13284.cljs$core$IIndexed$_nth$arity$2(null,i__12498_13286);
if(cljs.core.truth_(child_13287)){
node.appendChild(child_13287);


var G__13288 = seq__12494_13283;
var G__13289 = chunk__12496_13284;
var G__13290 = count__12497_13285;
var G__13291 = (i__12498_13286 + (1));
seq__12494_13283 = G__13288;
chunk__12496_13284 = G__13289;
count__12497_13285 = G__13290;
i__12498_13286 = G__13291;
continue;
} else {
var G__13292 = seq__12494_13283;
var G__13293 = chunk__12496_13284;
var G__13294 = count__12497_13285;
var G__13295 = (i__12498_13286 + (1));
seq__12494_13283 = G__13292;
chunk__12496_13284 = G__13293;
count__12497_13285 = G__13294;
i__12498_13286 = G__13295;
continue;
}
} else {
var temp__5823__auto___13296__$1 = cljs.core.seq(seq__12494_13283);
if(temp__5823__auto___13296__$1){
var seq__12494_13297__$1 = temp__5823__auto___13296__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12494_13297__$1)){
var c__5548__auto___13298 = cljs.core.chunk_first(seq__12494_13297__$1);
var G__13299 = cljs.core.chunk_rest(seq__12494_13297__$1);
var G__13300 = c__5548__auto___13298;
var G__13301 = cljs.core.count(c__5548__auto___13298);
var G__13302 = (0);
seq__12494_13283 = G__13299;
chunk__12496_13284 = G__13300;
count__12497_13285 = G__13301;
i__12498_13286 = G__13302;
continue;
} else {
var child_13303 = cljs.core.first(seq__12494_13297__$1);
if(cljs.core.truth_(child_13303)){
node.appendChild(child_13303);


var G__13304 = cljs.core.next(seq__12494_13297__$1);
var G__13305 = null;
var G__13306 = (0);
var G__13307 = (0);
seq__12494_13283 = G__13304;
chunk__12496_13284 = G__13305;
count__12497_13285 = G__13306;
i__12498_13286 = G__13307;
continue;
} else {
var G__13308 = cljs.core.next(seq__12494_13297__$1);
var G__13309 = null;
var G__13310 = (0);
var G__13311 = (0);
seq__12494_13283 = G__13308;
chunk__12496_13284 = G__13309;
count__12497_13285 = G__13310;
i__12498_13286 = G__13311;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13282);
}
}


var G__13312 = cljs.core.next(seq__12450_13270__$1);
var G__13313 = null;
var G__13314 = (0);
var G__13315 = (0);
seq__12450_13225 = G__13312;
chunk__12452_13226 = G__13313;
count__12453_13227 = G__13314;
i__12454_13228 = G__13315;
continue;
} else {
var G__13319 = cljs.core.next(seq__12450_13270__$1);
var G__13320 = null;
var G__13321 = (0);
var G__13322 = (0);
seq__12450_13225 = G__13319;
chunk__12452_13226 = G__13320;
count__12453_13227 = G__13321;
i__12454_13228 = G__13322;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13341 = arguments.length;
var i__5750__auto___13342 = (0);
while(true){
if((i__5750__auto___13342 < len__5749__auto___13341)){
args__5755__auto__.push((arguments[i__5750__auto___13342]));

var G__13344 = (i__5750__auto___13342 + (1));
i__5750__auto___13342 = G__13344;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12528){
var G__12529 = cljs.core.first(seq12528);
var seq12528__$1 = cljs.core.next(seq12528);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12529,seq12528__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
