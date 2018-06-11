// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28772){
var map__28797 = p__28772;
var map__28797__$1 = ((((!((map__28797 == null)))?((((map__28797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28797):map__28797);
var m = map__28797__$1;
var n = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28799_28821 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28800_28822 = null;
var count__28801_28823 = (0);
var i__28802_28824 = (0);
while(true){
if((i__28802_28824 < count__28801_28823)){
var f_28825 = cljs.core._nth.call(null,chunk__28800_28822,i__28802_28824);
cljs.core.println.call(null,"  ",f_28825);

var G__28826 = seq__28799_28821;
var G__28827 = chunk__28800_28822;
var G__28828 = count__28801_28823;
var G__28829 = (i__28802_28824 + (1));
seq__28799_28821 = G__28826;
chunk__28800_28822 = G__28827;
count__28801_28823 = G__28828;
i__28802_28824 = G__28829;
continue;
} else {
var temp__4657__auto___28830 = cljs.core.seq.call(null,seq__28799_28821);
if(temp__4657__auto___28830){
var seq__28799_28831__$1 = temp__4657__auto___28830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28799_28831__$1)){
var c__21043__auto___28832 = cljs.core.chunk_first.call(null,seq__28799_28831__$1);
var G__28833 = cljs.core.chunk_rest.call(null,seq__28799_28831__$1);
var G__28834 = c__21043__auto___28832;
var G__28835 = cljs.core.count.call(null,c__21043__auto___28832);
var G__28836 = (0);
seq__28799_28821 = G__28833;
chunk__28800_28822 = G__28834;
count__28801_28823 = G__28835;
i__28802_28824 = G__28836;
continue;
} else {
var f_28837 = cljs.core.first.call(null,seq__28799_28831__$1);
cljs.core.println.call(null,"  ",f_28837);

var G__28838 = cljs.core.next.call(null,seq__28799_28831__$1);
var G__28839 = null;
var G__28840 = (0);
var G__28841 = (0);
seq__28799_28821 = G__28838;
chunk__28800_28822 = G__28839;
count__28801_28823 = G__28840;
i__28802_28824 = G__28841;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28842 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20229__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28842);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28842)))?cljs.core.second.call(null,arglists_28842):arglists_28842));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28803_28843 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28804_28844 = null;
var count__28805_28845 = (0);
var i__28806_28846 = (0);
while(true){
if((i__28806_28846 < count__28805_28845)){
var vec__28807_28847 = cljs.core._nth.call(null,chunk__28804_28844,i__28806_28846);
var name_28848 = cljs.core.nth.call(null,vec__28807_28847,(0),null);
var map__28810_28849 = cljs.core.nth.call(null,vec__28807_28847,(1),null);
var map__28810_28850__$1 = ((((!((map__28810_28849 == null)))?((((map__28810_28849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28810_28849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28810_28849):map__28810_28849);
var doc_28851 = cljs.core.get.call(null,map__28810_28850__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28852 = cljs.core.get.call(null,map__28810_28850__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28848);

cljs.core.println.call(null," ",arglists_28852);

if(cljs.core.truth_(doc_28851)){
cljs.core.println.call(null," ",doc_28851);
} else {
}

var G__28853 = seq__28803_28843;
var G__28854 = chunk__28804_28844;
var G__28855 = count__28805_28845;
var G__28856 = (i__28806_28846 + (1));
seq__28803_28843 = G__28853;
chunk__28804_28844 = G__28854;
count__28805_28845 = G__28855;
i__28806_28846 = G__28856;
continue;
} else {
var temp__4657__auto___28857 = cljs.core.seq.call(null,seq__28803_28843);
if(temp__4657__auto___28857){
var seq__28803_28858__$1 = temp__4657__auto___28857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28803_28858__$1)){
var c__21043__auto___28859 = cljs.core.chunk_first.call(null,seq__28803_28858__$1);
var G__28860 = cljs.core.chunk_rest.call(null,seq__28803_28858__$1);
var G__28861 = c__21043__auto___28859;
var G__28862 = cljs.core.count.call(null,c__21043__auto___28859);
var G__28863 = (0);
seq__28803_28843 = G__28860;
chunk__28804_28844 = G__28861;
count__28805_28845 = G__28862;
i__28806_28846 = G__28863;
continue;
} else {
var vec__28812_28864 = cljs.core.first.call(null,seq__28803_28858__$1);
var name_28865 = cljs.core.nth.call(null,vec__28812_28864,(0),null);
var map__28815_28866 = cljs.core.nth.call(null,vec__28812_28864,(1),null);
var map__28815_28867__$1 = ((((!((map__28815_28866 == null)))?((((map__28815_28866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28815_28866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28815_28866):map__28815_28866);
var doc_28868 = cljs.core.get.call(null,map__28815_28867__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28869 = cljs.core.get.call(null,map__28815_28867__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28865);

cljs.core.println.call(null," ",arglists_28869);

if(cljs.core.truth_(doc_28868)){
cljs.core.println.call(null," ",doc_28868);
} else {
}

var G__28870 = cljs.core.next.call(null,seq__28803_28858__$1);
var G__28871 = null;
var G__28872 = (0);
var G__28873 = (0);
seq__28803_28843 = G__28870;
chunk__28804_28844 = G__28871;
count__28805_28845 = G__28872;
i__28806_28846 = G__28873;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28817 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28818 = null;
var count__28819 = (0);
var i__28820 = (0);
while(true){
if((i__28820 < count__28819)){
var role = cljs.core._nth.call(null,chunk__28818,i__28820);
var temp__4657__auto___28874__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28874__$1)){
var spec_28875 = temp__4657__auto___28874__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28875));
} else {
}

var G__28876 = seq__28817;
var G__28877 = chunk__28818;
var G__28878 = count__28819;
var G__28879 = (i__28820 + (1));
seq__28817 = G__28876;
chunk__28818 = G__28877;
count__28819 = G__28878;
i__28820 = G__28879;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28817);
if(temp__4657__auto____$1){
var seq__28817__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28817__$1)){
var c__21043__auto__ = cljs.core.chunk_first.call(null,seq__28817__$1);
var G__28880 = cljs.core.chunk_rest.call(null,seq__28817__$1);
var G__28881 = c__21043__auto__;
var G__28882 = cljs.core.count.call(null,c__21043__auto__);
var G__28883 = (0);
seq__28817 = G__28880;
chunk__28818 = G__28881;
count__28819 = G__28882;
i__28820 = G__28883;
continue;
} else {
var role = cljs.core.first.call(null,seq__28817__$1);
var temp__4657__auto___28884__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28884__$2)){
var spec_28885 = temp__4657__auto___28884__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28885));
} else {
}

var G__28886 = cljs.core.next.call(null,seq__28817__$1);
var G__28887 = null;
var G__28888 = (0);
var G__28889 = (0);
seq__28817 = G__28886;
chunk__28818 = G__28887;
count__28819 = G__28888;
i__28820 = G__28889;
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

//# sourceMappingURL=repl.js.map?rel=1528678740166