// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25928__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25925 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25926 = cljs.core.seq.call(null,vec__25925);
var first__25927 = cljs.core.first.call(null,seq__25926);
var seq__25926__$1 = cljs.core.next.call(null,seq__25926);
var tag = first__25927;
var body = seq__25926__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25929__i = 0, G__25929__a = new Array(arguments.length -  0);
while (G__25929__i < G__25929__a.length) {G__25929__a[G__25929__i] = arguments[G__25929__i + 0]; ++G__25929__i;}
  args = new cljs.core.IndexedSeq(G__25929__a,0);
} 
return G__25928__delegate.call(this,args);};
G__25928.cljs$lang$maxFixedArity = 0;
G__25928.cljs$lang$applyTo = (function (arglist__25930){
var args = cljs.core.seq(arglist__25930);
return G__25928__delegate(args);
});
G__25928.cljs$core$IFn$_invoke$arity$variadic = G__25928__delegate;
return G__25928;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__21012__auto__ = (function sablono$core$update_arglists_$_iter__25935(s__25936){
return (new cljs.core.LazySeq(null,(function (){
var s__25936__$1 = s__25936;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25936__$1);
if(temp__4657__auto__){
var s__25936__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25936__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__25936__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__25938 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__25937 = (0);
while(true){
if((i__25937 < size__21011__auto__)){
var args = cljs.core._nth.call(null,c__21010__auto__,i__25937);
cljs.core.chunk_append.call(null,b__25938,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25939 = (i__25937 + (1));
i__25937 = G__25939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25938),sablono$core$update_arglists_$_iter__25935.call(null,cljs.core.chunk_rest.call(null,s__25936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25938),null);
}
} else {
var args = cljs.core.first.call(null,s__25936__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25935.call(null,cljs.core.rest.call(null,s__25936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21012__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21344__auto__ = [];
var len__21337__auto___25945 = arguments.length;
var i__21338__auto___25946 = (0);
while(true){
if((i__21338__auto___25946 < len__21337__auto___25945)){
args__21344__auto__.push((arguments[i__21338__auto___25946]));

var G__25947 = (i__21338__auto___25946 + (1));
i__21338__auto___25946 = G__25947;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__21012__auto__ = (function sablono$core$iter__25941(s__25942){
return (new cljs.core.LazySeq(null,(function (){
var s__25942__$1 = s__25942;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25942__$1);
if(temp__4657__auto__){
var s__25942__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25942__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__25942__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__25944 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__25943 = (0);
while(true){
if((i__25943 < size__21011__auto__)){
var style = cljs.core._nth.call(null,c__21010__auto__,i__25943);
cljs.core.chunk_append.call(null,b__25944,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25948 = (i__25943 + (1));
i__25943 = G__25948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25944),sablono$core$iter__25941.call(null,cljs.core.chunk_rest.call(null,s__25942__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25944),null);
}
} else {
var style = cljs.core.first.call(null,s__25942__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25941.call(null,cljs.core.rest.call(null,s__25942__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21012__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25940){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25940));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25949 = (function sablono$core$link_to25949(var_args){
var args__21344__auto__ = [];
var len__21337__auto___25952 = arguments.length;
var i__21338__auto___25953 = (0);
while(true){
if((i__21338__auto___25953 < len__21337__auto___25952)){
args__21344__auto__.push((arguments[i__21338__auto___25953]));

var G__25954 = (i__21338__auto___25953 + (1));
i__21338__auto___25953 = G__25954;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((1) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25949.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21345__auto__);
});

sablono.core.link_to25949.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25949.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25949.cljs$lang$applyTo = (function (seq25950){
var G__25951 = cljs.core.first.call(null,seq25950);
var seq25950__$1 = cljs.core.next.call(null,seq25950);
return sablono.core.link_to25949.cljs$core$IFn$_invoke$arity$variadic(G__25951,seq25950__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25949);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25955 = (function sablono$core$mail_to25955(var_args){
var args__21344__auto__ = [];
var len__21337__auto___25962 = arguments.length;
var i__21338__auto___25963 = (0);
while(true){
if((i__21338__auto___25963 < len__21337__auto___25962)){
args__21344__auto__.push((arguments[i__21338__auto___25963]));

var G__25964 = (i__21338__auto___25963 + (1));
i__21338__auto___25963 = G__25964;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((1) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25955.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21345__auto__);
});

sablono.core.mail_to25955.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25958){
var vec__25959 = p__25958;
var content = cljs.core.nth.call(null,vec__25959,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__20229__auto__ = content;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25955.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25955.cljs$lang$applyTo = (function (seq25956){
var G__25957 = cljs.core.first.call(null,seq25956);
var seq25956__$1 = cljs.core.next.call(null,seq25956);
return sablono.core.mail_to25955.cljs$core$IFn$_invoke$arity$variadic(G__25957,seq25956__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25955);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25965 = (function sablono$core$unordered_list25965(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21012__auto__ = (function sablono$core$unordered_list25965_$_iter__25970(s__25971){
return (new cljs.core.LazySeq(null,(function (){
var s__25971__$1 = s__25971;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25971__$1);
if(temp__4657__auto__){
var s__25971__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25971__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__25971__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__25973 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__25972 = (0);
while(true){
if((i__25972 < size__21011__auto__)){
var x = cljs.core._nth.call(null,c__21010__auto__,i__25972);
cljs.core.chunk_append.call(null,b__25973,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25974 = (i__25972 + (1));
i__25972 = G__25974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25973),sablono$core$unordered_list25965_$_iter__25970.call(null,cljs.core.chunk_rest.call(null,s__25971__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25973),null);
}
} else {
var x = cljs.core.first.call(null,s__25971__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25965_$_iter__25970.call(null,cljs.core.rest.call(null,s__25971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21012__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25965);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25975 = (function sablono$core$ordered_list25975(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21012__auto__ = (function sablono$core$ordered_list25975_$_iter__25980(s__25981){
return (new cljs.core.LazySeq(null,(function (){
var s__25981__$1 = s__25981;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25981__$1);
if(temp__4657__auto__){
var s__25981__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25981__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__25981__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__25983 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__25982 = (0);
while(true){
if((i__25982 < size__21011__auto__)){
var x = cljs.core._nth.call(null,c__21010__auto__,i__25982);
cljs.core.chunk_append.call(null,b__25983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25984 = (i__25982 + (1));
i__25982 = G__25984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25983),sablono$core$ordered_list25975_$_iter__25980.call(null,cljs.core.chunk_rest.call(null,s__25981__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25983),null);
}
} else {
var x = cljs.core.first.call(null,s__25981__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25975_$_iter__25980.call(null,cljs.core.rest.call(null,s__25981__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21012__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25975);
/**
 * Create an image element.
 */
sablono.core.image25985 = (function sablono$core$image25985(var_args){
var args25986 = [];
var len__21337__auto___25989 = arguments.length;
var i__21338__auto___25990 = (0);
while(true){
if((i__21338__auto___25990 < len__21337__auto___25989)){
args25986.push((arguments[i__21338__auto___25990]));

var G__25991 = (i__21338__auto___25990 + (1));
i__21338__auto___25990 = G__25991;
continue;
} else {
}
break;
}

var G__25988 = args25986.length;
switch (G__25988) {
case 1:
return sablono.core.image25985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25986.length)].join('')));

}
});

sablono.core.image25985.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25985.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25985.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25985);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25993_SHARP_,p2__25994_SHARP_){
return [cljs.core.str(p1__25993_SHARP_),cljs.core.str("["),cljs.core.str(p2__25994_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25995_SHARP_,p2__25996_SHARP_){
return [cljs.core.str(p1__25995_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25996_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20229__auto__ = value;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25997 = (function sablono$core$color_field25997(var_args){
var args25998 = [];
var len__21337__auto___26065 = arguments.length;
var i__21338__auto___26066 = (0);
while(true){
if((i__21338__auto___26066 < len__21337__auto___26065)){
args25998.push((arguments[i__21338__auto___26066]));

var G__26067 = (i__21338__auto___26066 + (1));
i__21338__auto___26066 = G__26067;
continue;
} else {
}
break;
}

var G__26000 = args25998.length;
switch (G__26000) {
case 1:
return sablono.core.color_field25997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25998.length)].join('')));

}
});

sablono.core.color_field25997.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.color_field25997.call(null,name__25912__auto__,null);
});

sablono.core.color_field25997.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.color_field25997.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25997);

/**
 * Creates a date input field.
 */
sablono.core.date_field26001 = (function sablono$core$date_field26001(var_args){
var args26002 = [];
var len__21337__auto___26069 = arguments.length;
var i__21338__auto___26070 = (0);
while(true){
if((i__21338__auto___26070 < len__21337__auto___26069)){
args26002.push((arguments[i__21338__auto___26070]));

var G__26071 = (i__21338__auto___26070 + (1));
i__21338__auto___26070 = G__26071;
continue;
} else {
}
break;
}

var G__26004 = args26002.length;
switch (G__26004) {
case 1:
return sablono.core.date_field26001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26002.length)].join('')));

}
});

sablono.core.date_field26001.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.date_field26001.call(null,name__25912__auto__,null);
});

sablono.core.date_field26001.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.date_field26001.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26001);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26005 = (function sablono$core$datetime_field26005(var_args){
var args26006 = [];
var len__21337__auto___26073 = arguments.length;
var i__21338__auto___26074 = (0);
while(true){
if((i__21338__auto___26074 < len__21337__auto___26073)){
args26006.push((arguments[i__21338__auto___26074]));

var G__26075 = (i__21338__auto___26074 + (1));
i__21338__auto___26074 = G__26075;
continue;
} else {
}
break;
}

var G__26008 = args26006.length;
switch (G__26008) {
case 1:
return sablono.core.datetime_field26005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26006.length)].join('')));

}
});

sablono.core.datetime_field26005.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.datetime_field26005.call(null,name__25912__auto__,null);
});

sablono.core.datetime_field26005.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.datetime_field26005.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26005);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26009 = (function sablono$core$datetime_local_field26009(var_args){
var args26010 = [];
var len__21337__auto___26077 = arguments.length;
var i__21338__auto___26078 = (0);
while(true){
if((i__21338__auto___26078 < len__21337__auto___26077)){
args26010.push((arguments[i__21338__auto___26078]));

var G__26079 = (i__21338__auto___26078 + (1));
i__21338__auto___26078 = G__26079;
continue;
} else {
}
break;
}

var G__26012 = args26010.length;
switch (G__26012) {
case 1:
return sablono.core.datetime_local_field26009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26010.length)].join('')));

}
});

sablono.core.datetime_local_field26009.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.datetime_local_field26009.call(null,name__25912__auto__,null);
});

sablono.core.datetime_local_field26009.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.datetime_local_field26009.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26009);

/**
 * Creates a email input field.
 */
sablono.core.email_field26013 = (function sablono$core$email_field26013(var_args){
var args26014 = [];
var len__21337__auto___26081 = arguments.length;
var i__21338__auto___26082 = (0);
while(true){
if((i__21338__auto___26082 < len__21337__auto___26081)){
args26014.push((arguments[i__21338__auto___26082]));

var G__26083 = (i__21338__auto___26082 + (1));
i__21338__auto___26082 = G__26083;
continue;
} else {
}
break;
}

var G__26016 = args26014.length;
switch (G__26016) {
case 1:
return sablono.core.email_field26013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26014.length)].join('')));

}
});

sablono.core.email_field26013.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.email_field26013.call(null,name__25912__auto__,null);
});

sablono.core.email_field26013.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.email_field26013.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26013);

/**
 * Creates a file input field.
 */
sablono.core.file_field26017 = (function sablono$core$file_field26017(var_args){
var args26018 = [];
var len__21337__auto___26085 = arguments.length;
var i__21338__auto___26086 = (0);
while(true){
if((i__21338__auto___26086 < len__21337__auto___26085)){
args26018.push((arguments[i__21338__auto___26086]));

var G__26087 = (i__21338__auto___26086 + (1));
i__21338__auto___26086 = G__26087;
continue;
} else {
}
break;
}

var G__26020 = args26018.length;
switch (G__26020) {
case 1:
return sablono.core.file_field26017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26018.length)].join('')));

}
});

sablono.core.file_field26017.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.file_field26017.call(null,name__25912__auto__,null);
});

sablono.core.file_field26017.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.file_field26017.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26017);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26021 = (function sablono$core$hidden_field26021(var_args){
var args26022 = [];
var len__21337__auto___26089 = arguments.length;
var i__21338__auto___26090 = (0);
while(true){
if((i__21338__auto___26090 < len__21337__auto___26089)){
args26022.push((arguments[i__21338__auto___26090]));

var G__26091 = (i__21338__auto___26090 + (1));
i__21338__auto___26090 = G__26091;
continue;
} else {
}
break;
}

var G__26024 = args26022.length;
switch (G__26024) {
case 1:
return sablono.core.hidden_field26021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26022.length)].join('')));

}
});

sablono.core.hidden_field26021.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.hidden_field26021.call(null,name__25912__auto__,null);
});

sablono.core.hidden_field26021.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.hidden_field26021.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26021);

/**
 * Creates a month input field.
 */
sablono.core.month_field26025 = (function sablono$core$month_field26025(var_args){
var args26026 = [];
var len__21337__auto___26093 = arguments.length;
var i__21338__auto___26094 = (0);
while(true){
if((i__21338__auto___26094 < len__21337__auto___26093)){
args26026.push((arguments[i__21338__auto___26094]));

var G__26095 = (i__21338__auto___26094 + (1));
i__21338__auto___26094 = G__26095;
continue;
} else {
}
break;
}

var G__26028 = args26026.length;
switch (G__26028) {
case 1:
return sablono.core.month_field26025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26026.length)].join('')));

}
});

sablono.core.month_field26025.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.month_field26025.call(null,name__25912__auto__,null);
});

sablono.core.month_field26025.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.month_field26025.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26025);

/**
 * Creates a number input field.
 */
sablono.core.number_field26029 = (function sablono$core$number_field26029(var_args){
var args26030 = [];
var len__21337__auto___26097 = arguments.length;
var i__21338__auto___26098 = (0);
while(true){
if((i__21338__auto___26098 < len__21337__auto___26097)){
args26030.push((arguments[i__21338__auto___26098]));

var G__26099 = (i__21338__auto___26098 + (1));
i__21338__auto___26098 = G__26099;
continue;
} else {
}
break;
}

var G__26032 = args26030.length;
switch (G__26032) {
case 1:
return sablono.core.number_field26029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26030.length)].join('')));

}
});

sablono.core.number_field26029.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.number_field26029.call(null,name__25912__auto__,null);
});

sablono.core.number_field26029.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.number_field26029.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26029);

/**
 * Creates a password input field.
 */
sablono.core.password_field26033 = (function sablono$core$password_field26033(var_args){
var args26034 = [];
var len__21337__auto___26101 = arguments.length;
var i__21338__auto___26102 = (0);
while(true){
if((i__21338__auto___26102 < len__21337__auto___26101)){
args26034.push((arguments[i__21338__auto___26102]));

var G__26103 = (i__21338__auto___26102 + (1));
i__21338__auto___26102 = G__26103;
continue;
} else {
}
break;
}

var G__26036 = args26034.length;
switch (G__26036) {
case 1:
return sablono.core.password_field26033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26034.length)].join('')));

}
});

sablono.core.password_field26033.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.password_field26033.call(null,name__25912__auto__,null);
});

sablono.core.password_field26033.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.password_field26033.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26033);

/**
 * Creates a range input field.
 */
sablono.core.range_field26037 = (function sablono$core$range_field26037(var_args){
var args26038 = [];
var len__21337__auto___26105 = arguments.length;
var i__21338__auto___26106 = (0);
while(true){
if((i__21338__auto___26106 < len__21337__auto___26105)){
args26038.push((arguments[i__21338__auto___26106]));

var G__26107 = (i__21338__auto___26106 + (1));
i__21338__auto___26106 = G__26107;
continue;
} else {
}
break;
}

var G__26040 = args26038.length;
switch (G__26040) {
case 1:
return sablono.core.range_field26037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26038.length)].join('')));

}
});

sablono.core.range_field26037.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.range_field26037.call(null,name__25912__auto__,null);
});

sablono.core.range_field26037.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.range_field26037.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26037);

/**
 * Creates a search input field.
 */
sablono.core.search_field26041 = (function sablono$core$search_field26041(var_args){
var args26042 = [];
var len__21337__auto___26109 = arguments.length;
var i__21338__auto___26110 = (0);
while(true){
if((i__21338__auto___26110 < len__21337__auto___26109)){
args26042.push((arguments[i__21338__auto___26110]));

var G__26111 = (i__21338__auto___26110 + (1));
i__21338__auto___26110 = G__26111;
continue;
} else {
}
break;
}

var G__26044 = args26042.length;
switch (G__26044) {
case 1:
return sablono.core.search_field26041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26042.length)].join('')));

}
});

sablono.core.search_field26041.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.search_field26041.call(null,name__25912__auto__,null);
});

sablono.core.search_field26041.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.search_field26041.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26041);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26045 = (function sablono$core$tel_field26045(var_args){
var args26046 = [];
var len__21337__auto___26113 = arguments.length;
var i__21338__auto___26114 = (0);
while(true){
if((i__21338__auto___26114 < len__21337__auto___26113)){
args26046.push((arguments[i__21338__auto___26114]));

var G__26115 = (i__21338__auto___26114 + (1));
i__21338__auto___26114 = G__26115;
continue;
} else {
}
break;
}

var G__26048 = args26046.length;
switch (G__26048) {
case 1:
return sablono.core.tel_field26045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26046.length)].join('')));

}
});

sablono.core.tel_field26045.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.tel_field26045.call(null,name__25912__auto__,null);
});

sablono.core.tel_field26045.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.tel_field26045.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26045);

/**
 * Creates a text input field.
 */
sablono.core.text_field26049 = (function sablono$core$text_field26049(var_args){
var args26050 = [];
var len__21337__auto___26117 = arguments.length;
var i__21338__auto___26118 = (0);
while(true){
if((i__21338__auto___26118 < len__21337__auto___26117)){
args26050.push((arguments[i__21338__auto___26118]));

var G__26119 = (i__21338__auto___26118 + (1));
i__21338__auto___26118 = G__26119;
continue;
} else {
}
break;
}

var G__26052 = args26050.length;
switch (G__26052) {
case 1:
return sablono.core.text_field26049.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26049.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26050.length)].join('')));

}
});

sablono.core.text_field26049.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.text_field26049.call(null,name__25912__auto__,null);
});

sablono.core.text_field26049.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.text_field26049.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26049);

/**
 * Creates a time input field.
 */
sablono.core.time_field26053 = (function sablono$core$time_field26053(var_args){
var args26054 = [];
var len__21337__auto___26121 = arguments.length;
var i__21338__auto___26122 = (0);
while(true){
if((i__21338__auto___26122 < len__21337__auto___26121)){
args26054.push((arguments[i__21338__auto___26122]));

var G__26123 = (i__21338__auto___26122 + (1));
i__21338__auto___26122 = G__26123;
continue;
} else {
}
break;
}

var G__26056 = args26054.length;
switch (G__26056) {
case 1:
return sablono.core.time_field26053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26054.length)].join('')));

}
});

sablono.core.time_field26053.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.time_field26053.call(null,name__25912__auto__,null);
});

sablono.core.time_field26053.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.time_field26053.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26053);

/**
 * Creates a url input field.
 */
sablono.core.url_field26057 = (function sablono$core$url_field26057(var_args){
var args26058 = [];
var len__21337__auto___26125 = arguments.length;
var i__21338__auto___26126 = (0);
while(true){
if((i__21338__auto___26126 < len__21337__auto___26125)){
args26058.push((arguments[i__21338__auto___26126]));

var G__26127 = (i__21338__auto___26126 + (1));
i__21338__auto___26126 = G__26127;
continue;
} else {
}
break;
}

var G__26060 = args26058.length;
switch (G__26060) {
case 1:
return sablono.core.url_field26057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26058.length)].join('')));

}
});

sablono.core.url_field26057.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.url_field26057.call(null,name__25912__auto__,null);
});

sablono.core.url_field26057.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.url_field26057.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26057);

/**
 * Creates a week input field.
 */
sablono.core.week_field26061 = (function sablono$core$week_field26061(var_args){
var args26062 = [];
var len__21337__auto___26129 = arguments.length;
var i__21338__auto___26130 = (0);
while(true){
if((i__21338__auto___26130 < len__21337__auto___26129)){
args26062.push((arguments[i__21338__auto___26130]));

var G__26131 = (i__21338__auto___26130 + (1));
i__21338__auto___26130 = G__26131;
continue;
} else {
}
break;
}

var G__26064 = args26062.length;
switch (G__26064) {
case 1:
return sablono.core.week_field26061.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26061.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26062.length)].join('')));

}
});

sablono.core.week_field26061.cljs$core$IFn$_invoke$arity$1 = (function (name__25912__auto__){
return sablono.core.week_field26061.call(null,name__25912__auto__,null);
});

sablono.core.week_field26061.cljs$core$IFn$_invoke$arity$2 = (function (name__25912__auto__,value__25913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25912__auto__,value__25913__auto__);
});

sablono.core.week_field26061.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26061);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26133 = (function sablono$core$check_box26133(var_args){
var args26134 = [];
var len__21337__auto___26137 = arguments.length;
var i__21338__auto___26138 = (0);
while(true){
if((i__21338__auto___26138 < len__21337__auto___26137)){
args26134.push((arguments[i__21338__auto___26138]));

var G__26139 = (i__21338__auto___26138 + (1));
i__21338__auto___26138 = G__26139;
continue;
} else {
}
break;
}

var G__26136 = args26134.length;
switch (G__26136) {
case 1:
return sablono.core.check_box26133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26133.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26134.length)].join('')));

}
});

sablono.core.check_box26133.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26133.call(null,name,null);
});

sablono.core.check_box26133.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26133.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26133.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20229__auto__ = value;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26133.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26133);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26141 = (function sablono$core$radio_button26141(var_args){
var args26142 = [];
var len__21337__auto___26145 = arguments.length;
var i__21338__auto___26146 = (0);
while(true){
if((i__21338__auto___26146 < len__21337__auto___26145)){
args26142.push((arguments[i__21338__auto___26146]));

var G__26147 = (i__21338__auto___26146 + (1));
i__21338__auto___26146 = G__26147;
continue;
} else {
}
break;
}

var G__26144 = args26142.length;
switch (G__26144) {
case 1:
return sablono.core.radio_button26141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26141.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26142.length)].join('')));

}
});

sablono.core.radio_button26141.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26141.call(null,group,null);
});

sablono.core.radio_button26141.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26141.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26141.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20229__auto__ = value;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26141.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26141);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26149 = (function sablono$core$select_options26149(coll){
var iter__21012__auto__ = (function sablono$core$select_options26149_$_iter__26166(s__26167){
return (new cljs.core.LazySeq(null,(function (){
var s__26167__$1 = s__26167;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26167__$1);
if(temp__4657__auto__){
var s__26167__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26167__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__26167__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__26169 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__26168 = (0);
while(true){
if((i__26168 < size__21011__auto__)){
var x = cljs.core._nth.call(null,c__21010__auto__,i__26168);
cljs.core.chunk_append.call(null,b__26169,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26176 = x;
var text = cljs.core.nth.call(null,vec__26176,(0),null);
var val = cljs.core.nth.call(null,vec__26176,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26176,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26149.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26182 = (i__26168 + (1));
i__26168 = G__26182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26169),sablono$core$select_options26149_$_iter__26166.call(null,cljs.core.chunk_rest.call(null,s__26167__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26169),null);
}
} else {
var x = cljs.core.first.call(null,s__26167__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26179 = x;
var text = cljs.core.nth.call(null,vec__26179,(0),null);
var val = cljs.core.nth.call(null,vec__26179,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26179,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26149.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26149_$_iter__26166.call(null,cljs.core.rest.call(null,s__26167__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21012__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26149);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26183 = (function sablono$core$drop_down26183(var_args){
var args26184 = [];
var len__21337__auto___26187 = arguments.length;
var i__21338__auto___26188 = (0);
while(true){
if((i__21338__auto___26188 < len__21337__auto___26187)){
args26184.push((arguments[i__21338__auto___26188]));

var G__26189 = (i__21338__auto___26188 + (1));
i__21338__auto___26188 = G__26189;
continue;
} else {
}
break;
}

var G__26186 = args26184.length;
switch (G__26186) {
case 2:
return sablono.core.drop_down26183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26183.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26184.length)].join('')));

}
});

sablono.core.drop_down26183.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26183.call(null,name,options,null);
});

sablono.core.drop_down26183.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26183.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26183);
/**
 * Creates a text area element.
 */
sablono.core.text_area26191 = (function sablono$core$text_area26191(var_args){
var args26192 = [];
var len__21337__auto___26195 = arguments.length;
var i__21338__auto___26196 = (0);
while(true){
if((i__21338__auto___26196 < len__21337__auto___26195)){
args26192.push((arguments[i__21338__auto___26196]));

var G__26197 = (i__21338__auto___26196 + (1));
i__21338__auto___26196 = G__26197;
continue;
} else {
}
break;
}

var G__26194 = args26192.length;
switch (G__26194) {
case 1:
return sablono.core.text_area26191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26192.length)].join('')));

}
});

sablono.core.text_area26191.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26191.call(null,name,null);
});

sablono.core.text_area26191.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20229__auto__ = value;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26191.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26191);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26199 = (function sablono$core$label26199(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26199);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26200 = (function sablono$core$submit_button26200(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26200);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26201 = (function sablono$core$reset_button26201(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26201);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26202 = (function sablono$core$form_to26202(var_args){
var args__21344__auto__ = [];
var len__21337__auto___26209 = arguments.length;
var i__21338__auto___26210 = (0);
while(true){
if((i__21338__auto___26210 < len__21337__auto___26209)){
args__21344__auto__.push((arguments[i__21338__auto___26210]));

var G__26211 = (i__21338__auto___26210 + (1));
i__21338__auto___26210 = G__26211;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((1) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26202.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21345__auto__);
});

sablono.core.form_to26202.cljs$core$IFn$_invoke$arity$variadic = (function (p__26205,body){
var vec__26206 = p__26205;
var method = cljs.core.nth.call(null,vec__26206,(0),null);
var action = cljs.core.nth.call(null,vec__26206,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26202.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26202.cljs$lang$applyTo = (function (seq26203){
var G__26204 = cljs.core.first.call(null,seq26203);
var seq26203__$1 = cljs.core.next.call(null,seq26203);
return sablono.core.form_to26202.cljs$core$IFn$_invoke$arity$variadic(G__26204,seq26203__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26202);

//# sourceMappingURL=core.js.map?rel=1528678733059