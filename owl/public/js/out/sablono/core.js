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
var G__25927__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25924 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25925 = cljs.core.seq.call(null,vec__25924);
var first__25926 = cljs.core.first.call(null,seq__25925);
var seq__25925__$1 = cljs.core.next.call(null,seq__25925);
var tag = first__25926;
var body = seq__25925__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25928__i = 0, G__25928__a = new Array(arguments.length -  0);
while (G__25928__i < G__25928__a.length) {G__25928__a[G__25928__i] = arguments[G__25928__i + 0]; ++G__25928__i;}
  args = new cljs.core.IndexedSeq(G__25928__a,0);
} 
return G__25927__delegate.call(this,args);};
G__25927.cljs$lang$maxFixedArity = 0;
G__25927.cljs$lang$applyTo = (function (arglist__25929){
var args = cljs.core.seq(arglist__25929);
return G__25927__delegate(args);
});
G__25927.cljs$core$IFn$_invoke$arity$variadic = G__25927__delegate;
return G__25927;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__21012__auto__ = (function sablono$core$update_arglists_$_iter__25934(s__25935){
return (new cljs.core.LazySeq(null,(function (){
var s__25935__$1 = s__25935;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25935__$1);
if(temp__4657__auto__){
var s__25935__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25935__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__25935__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__25937 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__25936 = (0);
while(true){
if((i__25936 < size__21011__auto__)){
var args = cljs.core._nth.call(null,c__21010__auto__,i__25936);
cljs.core.chunk_append.call(null,b__25937,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25938 = (i__25936 + (1));
i__25936 = G__25938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25937),sablono$core$update_arglists_$_iter__25934.call(null,cljs.core.chunk_rest.call(null,s__25935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25937),null);
}
} else {
var args = cljs.core.first.call(null,s__25935__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25934.call(null,cljs.core.rest.call(null,s__25935__$2)));
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
var len__21337__auto___25944 = arguments.length;
var i__21338__auto___25945 = (0);
while(true){
if((i__21338__auto___25945 < len__21337__auto___25944)){
args__21344__auto__.push((arguments[i__21338__auto___25945]));

var G__25946 = (i__21338__auto___25945 + (1));
i__21338__auto___25945 = G__25946;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((0) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21345__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__21012__auto__ = (function sablono$core$iter__25940(s__25941){
return (new cljs.core.LazySeq(null,(function (){
var s__25941__$1 = s__25941;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25941__$1);
if(temp__4657__auto__){
var s__25941__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25941__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__25941__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__25943 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__25942 = (0);
while(true){
if((i__25942 < size__21011__auto__)){
var style = cljs.core._nth.call(null,c__21010__auto__,i__25942);
cljs.core.chunk_append.call(null,b__25943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25947 = (i__25942 + (1));
i__25942 = G__25947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25943),sablono$core$iter__25940.call(null,cljs.core.chunk_rest.call(null,s__25941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25943),null);
}
} else {
var style = cljs.core.first.call(null,s__25941__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25940.call(null,cljs.core.rest.call(null,s__25941__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq25939){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25939));
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
sablono.core.link_to25948 = (function sablono$core$link_to25948(var_args){
var args__21344__auto__ = [];
var len__21337__auto___25951 = arguments.length;
var i__21338__auto___25952 = (0);
while(true){
if((i__21338__auto___25952 < len__21337__auto___25951)){
args__21344__auto__.push((arguments[i__21338__auto___25952]));

var G__25953 = (i__21338__auto___25952 + (1));
i__21338__auto___25952 = G__25953;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((1) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25948.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21345__auto__);
});

sablono.core.link_to25948.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25948.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25948.cljs$lang$applyTo = (function (seq25949){
var G__25950 = cljs.core.first.call(null,seq25949);
var seq25949__$1 = cljs.core.next.call(null,seq25949);
return sablono.core.link_to25948.cljs$core$IFn$_invoke$arity$variadic(G__25950,seq25949__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25948);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25954 = (function sablono$core$mail_to25954(var_args){
var args__21344__auto__ = [];
var len__21337__auto___25961 = arguments.length;
var i__21338__auto___25962 = (0);
while(true){
if((i__21338__auto___25962 < len__21337__auto___25961)){
args__21344__auto__.push((arguments[i__21338__auto___25962]));

var G__25963 = (i__21338__auto___25962 + (1));
i__21338__auto___25962 = G__25963;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((1) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25954.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21345__auto__);
});

sablono.core.mail_to25954.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25957){
var vec__25958 = p__25957;
var content = cljs.core.nth.call(null,vec__25958,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__20229__auto__ = content;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25954.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25954.cljs$lang$applyTo = (function (seq25955){
var G__25956 = cljs.core.first.call(null,seq25955);
var seq25955__$1 = cljs.core.next.call(null,seq25955);
return sablono.core.mail_to25954.cljs$core$IFn$_invoke$arity$variadic(G__25956,seq25955__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25954);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25964 = (function sablono$core$unordered_list25964(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21012__auto__ = (function sablono$core$unordered_list25964_$_iter__25969(s__25970){
return (new cljs.core.LazySeq(null,(function (){
var s__25970__$1 = s__25970;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25970__$1);
if(temp__4657__auto__){
var s__25970__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25970__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__25970__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__25972 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__25971 = (0);
while(true){
if((i__25971 < size__21011__auto__)){
var x = cljs.core._nth.call(null,c__21010__auto__,i__25971);
cljs.core.chunk_append.call(null,b__25972,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25973 = (i__25971 + (1));
i__25971 = G__25973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25972),sablono$core$unordered_list25964_$_iter__25969.call(null,cljs.core.chunk_rest.call(null,s__25970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25972),null);
}
} else {
var x = cljs.core.first.call(null,s__25970__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25964_$_iter__25969.call(null,cljs.core.rest.call(null,s__25970__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25964);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25974 = (function sablono$core$ordered_list25974(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21012__auto__ = (function sablono$core$ordered_list25974_$_iter__25979(s__25980){
return (new cljs.core.LazySeq(null,(function (){
var s__25980__$1 = s__25980;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25980__$1);
if(temp__4657__auto__){
var s__25980__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25980__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__25980__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__25982 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__25981 = (0);
while(true){
if((i__25981 < size__21011__auto__)){
var x = cljs.core._nth.call(null,c__21010__auto__,i__25981);
cljs.core.chunk_append.call(null,b__25982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25983 = (i__25981 + (1));
i__25981 = G__25983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25982),sablono$core$ordered_list25974_$_iter__25979.call(null,cljs.core.chunk_rest.call(null,s__25980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25982),null);
}
} else {
var x = cljs.core.first.call(null,s__25980__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25974_$_iter__25979.call(null,cljs.core.rest.call(null,s__25980__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25974);
/**
 * Create an image element.
 */
sablono.core.image25984 = (function sablono$core$image25984(var_args){
var args25985 = [];
var len__21337__auto___25988 = arguments.length;
var i__21338__auto___25989 = (0);
while(true){
if((i__21338__auto___25989 < len__21337__auto___25988)){
args25985.push((arguments[i__21338__auto___25989]));

var G__25990 = (i__21338__auto___25989 + (1));
i__21338__auto___25989 = G__25990;
continue;
} else {
}
break;
}

var G__25987 = args25985.length;
switch (G__25987) {
case 1:
return sablono.core.image25984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25985.length)].join('')));

}
});

sablono.core.image25984.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25984.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25984.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25984);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25992_SHARP_,p2__25993_SHARP_){
return [cljs.core.str(p1__25992_SHARP_),cljs.core.str("["),cljs.core.str(p2__25993_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25994_SHARP_,p2__25995_SHARP_){
return [cljs.core.str(p1__25994_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25995_SHARP_)].join('');
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
sablono.core.color_field25996 = (function sablono$core$color_field25996(var_args){
var args25997 = [];
var len__21337__auto___26064 = arguments.length;
var i__21338__auto___26065 = (0);
while(true){
if((i__21338__auto___26065 < len__21337__auto___26064)){
args25997.push((arguments[i__21338__auto___26065]));

var G__26066 = (i__21338__auto___26065 + (1));
i__21338__auto___26065 = G__26066;
continue;
} else {
}
break;
}

var G__25999 = args25997.length;
switch (G__25999) {
case 1:
return sablono.core.color_field25996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25997.length)].join('')));

}
});

sablono.core.color_field25996.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.color_field25996.call(null,name__25911__auto__,null);
});

sablono.core.color_field25996.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.color_field25996.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25996);

/**
 * Creates a date input field.
 */
sablono.core.date_field26000 = (function sablono$core$date_field26000(var_args){
var args26001 = [];
var len__21337__auto___26068 = arguments.length;
var i__21338__auto___26069 = (0);
while(true){
if((i__21338__auto___26069 < len__21337__auto___26068)){
args26001.push((arguments[i__21338__auto___26069]));

var G__26070 = (i__21338__auto___26069 + (1));
i__21338__auto___26069 = G__26070;
continue;
} else {
}
break;
}

var G__26003 = args26001.length;
switch (G__26003) {
case 1:
return sablono.core.date_field26000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26001.length)].join('')));

}
});

sablono.core.date_field26000.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.date_field26000.call(null,name__25911__auto__,null);
});

sablono.core.date_field26000.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.date_field26000.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26000);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26004 = (function sablono$core$datetime_field26004(var_args){
var args26005 = [];
var len__21337__auto___26072 = arguments.length;
var i__21338__auto___26073 = (0);
while(true){
if((i__21338__auto___26073 < len__21337__auto___26072)){
args26005.push((arguments[i__21338__auto___26073]));

var G__26074 = (i__21338__auto___26073 + (1));
i__21338__auto___26073 = G__26074;
continue;
} else {
}
break;
}

var G__26007 = args26005.length;
switch (G__26007) {
case 1:
return sablono.core.datetime_field26004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26005.length)].join('')));

}
});

sablono.core.datetime_field26004.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.datetime_field26004.call(null,name__25911__auto__,null);
});

sablono.core.datetime_field26004.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.datetime_field26004.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26004);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26008 = (function sablono$core$datetime_local_field26008(var_args){
var args26009 = [];
var len__21337__auto___26076 = arguments.length;
var i__21338__auto___26077 = (0);
while(true){
if((i__21338__auto___26077 < len__21337__auto___26076)){
args26009.push((arguments[i__21338__auto___26077]));

var G__26078 = (i__21338__auto___26077 + (1));
i__21338__auto___26077 = G__26078;
continue;
} else {
}
break;
}

var G__26011 = args26009.length;
switch (G__26011) {
case 1:
return sablono.core.datetime_local_field26008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26009.length)].join('')));

}
});

sablono.core.datetime_local_field26008.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.datetime_local_field26008.call(null,name__25911__auto__,null);
});

sablono.core.datetime_local_field26008.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.datetime_local_field26008.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26008);

/**
 * Creates a email input field.
 */
sablono.core.email_field26012 = (function sablono$core$email_field26012(var_args){
var args26013 = [];
var len__21337__auto___26080 = arguments.length;
var i__21338__auto___26081 = (0);
while(true){
if((i__21338__auto___26081 < len__21337__auto___26080)){
args26013.push((arguments[i__21338__auto___26081]));

var G__26082 = (i__21338__auto___26081 + (1));
i__21338__auto___26081 = G__26082;
continue;
} else {
}
break;
}

var G__26015 = args26013.length;
switch (G__26015) {
case 1:
return sablono.core.email_field26012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26013.length)].join('')));

}
});

sablono.core.email_field26012.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.email_field26012.call(null,name__25911__auto__,null);
});

sablono.core.email_field26012.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.email_field26012.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26012);

/**
 * Creates a file input field.
 */
sablono.core.file_field26016 = (function sablono$core$file_field26016(var_args){
var args26017 = [];
var len__21337__auto___26084 = arguments.length;
var i__21338__auto___26085 = (0);
while(true){
if((i__21338__auto___26085 < len__21337__auto___26084)){
args26017.push((arguments[i__21338__auto___26085]));

var G__26086 = (i__21338__auto___26085 + (1));
i__21338__auto___26085 = G__26086;
continue;
} else {
}
break;
}

var G__26019 = args26017.length;
switch (G__26019) {
case 1:
return sablono.core.file_field26016.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26016.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26017.length)].join('')));

}
});

sablono.core.file_field26016.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.file_field26016.call(null,name__25911__auto__,null);
});

sablono.core.file_field26016.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.file_field26016.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26016);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26020 = (function sablono$core$hidden_field26020(var_args){
var args26021 = [];
var len__21337__auto___26088 = arguments.length;
var i__21338__auto___26089 = (0);
while(true){
if((i__21338__auto___26089 < len__21337__auto___26088)){
args26021.push((arguments[i__21338__auto___26089]));

var G__26090 = (i__21338__auto___26089 + (1));
i__21338__auto___26089 = G__26090;
continue;
} else {
}
break;
}

var G__26023 = args26021.length;
switch (G__26023) {
case 1:
return sablono.core.hidden_field26020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26021.length)].join('')));

}
});

sablono.core.hidden_field26020.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.hidden_field26020.call(null,name__25911__auto__,null);
});

sablono.core.hidden_field26020.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.hidden_field26020.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26020);

/**
 * Creates a month input field.
 */
sablono.core.month_field26024 = (function sablono$core$month_field26024(var_args){
var args26025 = [];
var len__21337__auto___26092 = arguments.length;
var i__21338__auto___26093 = (0);
while(true){
if((i__21338__auto___26093 < len__21337__auto___26092)){
args26025.push((arguments[i__21338__auto___26093]));

var G__26094 = (i__21338__auto___26093 + (1));
i__21338__auto___26093 = G__26094;
continue;
} else {
}
break;
}

var G__26027 = args26025.length;
switch (G__26027) {
case 1:
return sablono.core.month_field26024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26025.length)].join('')));

}
});

sablono.core.month_field26024.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.month_field26024.call(null,name__25911__auto__,null);
});

sablono.core.month_field26024.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.month_field26024.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26024);

/**
 * Creates a number input field.
 */
sablono.core.number_field26028 = (function sablono$core$number_field26028(var_args){
var args26029 = [];
var len__21337__auto___26096 = arguments.length;
var i__21338__auto___26097 = (0);
while(true){
if((i__21338__auto___26097 < len__21337__auto___26096)){
args26029.push((arguments[i__21338__auto___26097]));

var G__26098 = (i__21338__auto___26097 + (1));
i__21338__auto___26097 = G__26098;
continue;
} else {
}
break;
}

var G__26031 = args26029.length;
switch (G__26031) {
case 1:
return sablono.core.number_field26028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26029.length)].join('')));

}
});

sablono.core.number_field26028.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.number_field26028.call(null,name__25911__auto__,null);
});

sablono.core.number_field26028.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.number_field26028.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26028);

/**
 * Creates a password input field.
 */
sablono.core.password_field26032 = (function sablono$core$password_field26032(var_args){
var args26033 = [];
var len__21337__auto___26100 = arguments.length;
var i__21338__auto___26101 = (0);
while(true){
if((i__21338__auto___26101 < len__21337__auto___26100)){
args26033.push((arguments[i__21338__auto___26101]));

var G__26102 = (i__21338__auto___26101 + (1));
i__21338__auto___26101 = G__26102;
continue;
} else {
}
break;
}

var G__26035 = args26033.length;
switch (G__26035) {
case 1:
return sablono.core.password_field26032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26033.length)].join('')));

}
});

sablono.core.password_field26032.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.password_field26032.call(null,name__25911__auto__,null);
});

sablono.core.password_field26032.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.password_field26032.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26032);

/**
 * Creates a range input field.
 */
sablono.core.range_field26036 = (function sablono$core$range_field26036(var_args){
var args26037 = [];
var len__21337__auto___26104 = arguments.length;
var i__21338__auto___26105 = (0);
while(true){
if((i__21338__auto___26105 < len__21337__auto___26104)){
args26037.push((arguments[i__21338__auto___26105]));

var G__26106 = (i__21338__auto___26105 + (1));
i__21338__auto___26105 = G__26106;
continue;
} else {
}
break;
}

var G__26039 = args26037.length;
switch (G__26039) {
case 1:
return sablono.core.range_field26036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26037.length)].join('')));

}
});

sablono.core.range_field26036.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.range_field26036.call(null,name__25911__auto__,null);
});

sablono.core.range_field26036.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.range_field26036.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26036);

/**
 * Creates a search input field.
 */
sablono.core.search_field26040 = (function sablono$core$search_field26040(var_args){
var args26041 = [];
var len__21337__auto___26108 = arguments.length;
var i__21338__auto___26109 = (0);
while(true){
if((i__21338__auto___26109 < len__21337__auto___26108)){
args26041.push((arguments[i__21338__auto___26109]));

var G__26110 = (i__21338__auto___26109 + (1));
i__21338__auto___26109 = G__26110;
continue;
} else {
}
break;
}

var G__26043 = args26041.length;
switch (G__26043) {
case 1:
return sablono.core.search_field26040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26041.length)].join('')));

}
});

sablono.core.search_field26040.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.search_field26040.call(null,name__25911__auto__,null);
});

sablono.core.search_field26040.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.search_field26040.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26040);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26044 = (function sablono$core$tel_field26044(var_args){
var args26045 = [];
var len__21337__auto___26112 = arguments.length;
var i__21338__auto___26113 = (0);
while(true){
if((i__21338__auto___26113 < len__21337__auto___26112)){
args26045.push((arguments[i__21338__auto___26113]));

var G__26114 = (i__21338__auto___26113 + (1));
i__21338__auto___26113 = G__26114;
continue;
} else {
}
break;
}

var G__26047 = args26045.length;
switch (G__26047) {
case 1:
return sablono.core.tel_field26044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26045.length)].join('')));

}
});

sablono.core.tel_field26044.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.tel_field26044.call(null,name__25911__auto__,null);
});

sablono.core.tel_field26044.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.tel_field26044.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26044);

/**
 * Creates a text input field.
 */
sablono.core.text_field26048 = (function sablono$core$text_field26048(var_args){
var args26049 = [];
var len__21337__auto___26116 = arguments.length;
var i__21338__auto___26117 = (0);
while(true){
if((i__21338__auto___26117 < len__21337__auto___26116)){
args26049.push((arguments[i__21338__auto___26117]));

var G__26118 = (i__21338__auto___26117 + (1));
i__21338__auto___26117 = G__26118;
continue;
} else {
}
break;
}

var G__26051 = args26049.length;
switch (G__26051) {
case 1:
return sablono.core.text_field26048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26049.length)].join('')));

}
});

sablono.core.text_field26048.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.text_field26048.call(null,name__25911__auto__,null);
});

sablono.core.text_field26048.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.text_field26048.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26048);

/**
 * Creates a time input field.
 */
sablono.core.time_field26052 = (function sablono$core$time_field26052(var_args){
var args26053 = [];
var len__21337__auto___26120 = arguments.length;
var i__21338__auto___26121 = (0);
while(true){
if((i__21338__auto___26121 < len__21337__auto___26120)){
args26053.push((arguments[i__21338__auto___26121]));

var G__26122 = (i__21338__auto___26121 + (1));
i__21338__auto___26121 = G__26122;
continue;
} else {
}
break;
}

var G__26055 = args26053.length;
switch (G__26055) {
case 1:
return sablono.core.time_field26052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26053.length)].join('')));

}
});

sablono.core.time_field26052.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.time_field26052.call(null,name__25911__auto__,null);
});

sablono.core.time_field26052.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.time_field26052.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26052);

/**
 * Creates a url input field.
 */
sablono.core.url_field26056 = (function sablono$core$url_field26056(var_args){
var args26057 = [];
var len__21337__auto___26124 = arguments.length;
var i__21338__auto___26125 = (0);
while(true){
if((i__21338__auto___26125 < len__21337__auto___26124)){
args26057.push((arguments[i__21338__auto___26125]));

var G__26126 = (i__21338__auto___26125 + (1));
i__21338__auto___26125 = G__26126;
continue;
} else {
}
break;
}

var G__26059 = args26057.length;
switch (G__26059) {
case 1:
return sablono.core.url_field26056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26057.length)].join('')));

}
});

sablono.core.url_field26056.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.url_field26056.call(null,name__25911__auto__,null);
});

sablono.core.url_field26056.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.url_field26056.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26056);

/**
 * Creates a week input field.
 */
sablono.core.week_field26060 = (function sablono$core$week_field26060(var_args){
var args26061 = [];
var len__21337__auto___26128 = arguments.length;
var i__21338__auto___26129 = (0);
while(true){
if((i__21338__auto___26129 < len__21337__auto___26128)){
args26061.push((arguments[i__21338__auto___26129]));

var G__26130 = (i__21338__auto___26129 + (1));
i__21338__auto___26129 = G__26130;
continue;
} else {
}
break;
}

var G__26063 = args26061.length;
switch (G__26063) {
case 1:
return sablono.core.week_field26060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26061.length)].join('')));

}
});

sablono.core.week_field26060.cljs$core$IFn$_invoke$arity$1 = (function (name__25911__auto__){
return sablono.core.week_field26060.call(null,name__25911__auto__,null);
});

sablono.core.week_field26060.cljs$core$IFn$_invoke$arity$2 = (function (name__25911__auto__,value__25912__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25911__auto__,value__25912__auto__);
});

sablono.core.week_field26060.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26060);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26132 = (function sablono$core$check_box26132(var_args){
var args26133 = [];
var len__21337__auto___26136 = arguments.length;
var i__21338__auto___26137 = (0);
while(true){
if((i__21338__auto___26137 < len__21337__auto___26136)){
args26133.push((arguments[i__21338__auto___26137]));

var G__26138 = (i__21338__auto___26137 + (1));
i__21338__auto___26137 = G__26138;
continue;
} else {
}
break;
}

var G__26135 = args26133.length;
switch (G__26135) {
case 1:
return sablono.core.check_box26132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26132.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26133.length)].join('')));

}
});

sablono.core.check_box26132.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26132.call(null,name,null);
});

sablono.core.check_box26132.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26132.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26132.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20229__auto__ = value;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26132.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26132);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26140 = (function sablono$core$radio_button26140(var_args){
var args26141 = [];
var len__21337__auto___26144 = arguments.length;
var i__21338__auto___26145 = (0);
while(true){
if((i__21338__auto___26145 < len__21337__auto___26144)){
args26141.push((arguments[i__21338__auto___26145]));

var G__26146 = (i__21338__auto___26145 + (1));
i__21338__auto___26145 = G__26146;
continue;
} else {
}
break;
}

var G__26143 = args26141.length;
switch (G__26143) {
case 1:
return sablono.core.radio_button26140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26140.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26141.length)].join('')));

}
});

sablono.core.radio_button26140.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26140.call(null,group,null);
});

sablono.core.radio_button26140.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26140.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26140.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20229__auto__ = value;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26140.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26140);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26148 = (function sablono$core$select_options26148(coll){
var iter__21012__auto__ = (function sablono$core$select_options26148_$_iter__26165(s__26166){
return (new cljs.core.LazySeq(null,(function (){
var s__26166__$1 = s__26166;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26166__$1);
if(temp__4657__auto__){
var s__26166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26166__$2)){
var c__21010__auto__ = cljs.core.chunk_first.call(null,s__26166__$2);
var size__21011__auto__ = cljs.core.count.call(null,c__21010__auto__);
var b__26168 = cljs.core.chunk_buffer.call(null,size__21011__auto__);
if((function (){var i__26167 = (0);
while(true){
if((i__26167 < size__21011__auto__)){
var x = cljs.core._nth.call(null,c__21010__auto__,i__26167);
cljs.core.chunk_append.call(null,b__26168,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26175 = x;
var text = cljs.core.nth.call(null,vec__26175,(0),null);
var val = cljs.core.nth.call(null,vec__26175,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26175,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26148.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26181 = (i__26167 + (1));
i__26167 = G__26181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26168),sablono$core$select_options26148_$_iter__26165.call(null,cljs.core.chunk_rest.call(null,s__26166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26168),null);
}
} else {
var x = cljs.core.first.call(null,s__26166__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26178 = x;
var text = cljs.core.nth.call(null,vec__26178,(0),null);
var val = cljs.core.nth.call(null,vec__26178,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26178,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26148.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26148_$_iter__26165.call(null,cljs.core.rest.call(null,s__26166__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26148);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26182 = (function sablono$core$drop_down26182(var_args){
var args26183 = [];
var len__21337__auto___26186 = arguments.length;
var i__21338__auto___26187 = (0);
while(true){
if((i__21338__auto___26187 < len__21337__auto___26186)){
args26183.push((arguments[i__21338__auto___26187]));

var G__26188 = (i__21338__auto___26187 + (1));
i__21338__auto___26187 = G__26188;
continue;
} else {
}
break;
}

var G__26185 = args26183.length;
switch (G__26185) {
case 2:
return sablono.core.drop_down26182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26182.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26183.length)].join('')));

}
});

sablono.core.drop_down26182.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26182.call(null,name,options,null);
});

sablono.core.drop_down26182.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26182.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26182);
/**
 * Creates a text area element.
 */
sablono.core.text_area26190 = (function sablono$core$text_area26190(var_args){
var args26191 = [];
var len__21337__auto___26194 = arguments.length;
var i__21338__auto___26195 = (0);
while(true){
if((i__21338__auto___26195 < len__21337__auto___26194)){
args26191.push((arguments[i__21338__auto___26195]));

var G__26196 = (i__21338__auto___26195 + (1));
i__21338__auto___26195 = G__26196;
continue;
} else {
}
break;
}

var G__26193 = args26191.length;
switch (G__26193) {
case 1:
return sablono.core.text_area26190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26191.length)].join('')));

}
});

sablono.core.text_area26190.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26190.call(null,name,null);
});

sablono.core.text_area26190.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20229__auto__ = value;
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26190.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26190);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26198 = (function sablono$core$label26198(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26198);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26199 = (function sablono$core$submit_button26199(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26199);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26200 = (function sablono$core$reset_button26200(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26200);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26201 = (function sablono$core$form_to26201(var_args){
var args__21344__auto__ = [];
var len__21337__auto___26208 = arguments.length;
var i__21338__auto___26209 = (0);
while(true){
if((i__21338__auto___26209 < len__21337__auto___26208)){
args__21344__auto__.push((arguments[i__21338__auto___26209]));

var G__26210 = (i__21338__auto___26209 + (1));
i__21338__auto___26209 = G__26210;
continue;
} else {
}
break;
}

var argseq__21345__auto__ = ((((1) < args__21344__auto__.length))?(new cljs.core.IndexedSeq(args__21344__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26201.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21345__auto__);
});

sablono.core.form_to26201.cljs$core$IFn$_invoke$arity$variadic = (function (p__26204,body){
var vec__26205 = p__26204;
var method = cljs.core.nth.call(null,vec__26205,(0),null);
var action = cljs.core.nth.call(null,vec__26205,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26201.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26201.cljs$lang$applyTo = (function (seq26202){
var G__26203 = cljs.core.first.call(null,seq26202);
var seq26202__$1 = cljs.core.next.call(null,seq26202);
return sablono.core.form_to26201.cljs$core$IFn$_invoke$arity$variadic(G__26203,seq26202__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26201);

//# sourceMappingURL=core.js.map?rel=1528667382831