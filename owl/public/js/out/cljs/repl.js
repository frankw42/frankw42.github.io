// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28771){
var map__28796 = p__28771;
var map__28796__$1 = ((((!((map__28796 == null)))?((((map__28796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28796):map__28796);
var m = map__28796__$1;
var n = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28798_28820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28799_28821 = null;
var count__28800_28822 = (0);
var i__28801_28823 = (0);
while(true){
if((i__28801_28823 < count__28800_28822)){
var f_28824 = cljs.core._nth.call(null,chunk__28799_28821,i__28801_28823);
cljs.core.println.call(null,"  ",f_28824);

var G__28825 = seq__28798_28820;
var G__28826 = chunk__28799_28821;
var G__28827 = count__28800_28822;
var G__28828 = (i__28801_28823 + (1));
seq__28798_28820 = G__28825;
chunk__28799_28821 = G__28826;
count__28800_28822 = G__28827;
i__28801_28823 = G__28828;
continue;
} else {
var temp__4657__auto___28829 = cljs.core.seq.call(null,seq__28798_28820);
if(temp__4657__auto___28829){
var seq__28798_28830__$1 = temp__4657__auto___28829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28798_28830__$1)){
var c__21043__auto___28831 = cljs.core.chunk_first.call(null,seq__28798_28830__$1);
var G__28832 = cljs.core.chunk_rest.call(null,seq__28798_28830__$1);
var G__28833 = c__21043__auto___28831;
var G__28834 = cljs.core.count.call(null,c__21043__auto___28831);
var G__28835 = (0);
seq__28798_28820 = G__28832;
chunk__28799_28821 = G__28833;
count__28800_28822 = G__28834;
i__28801_28823 = G__28835;
continue;
} else {
var f_28836 = cljs.core.first.call(null,seq__28798_28830__$1);
cljs.core.println.call(null,"  ",f_28836);

var G__28837 = cljs.core.next.call(null,seq__28798_28830__$1);
var G__28838 = null;
var G__28839 = (0);
var G__28840 = (0);
seq__28798_28820 = G__28837;
chunk__28799_28821 = G__28838;
count__28800_28822 = G__28839;
i__28801_28823 = G__28840;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28841 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20229__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20229__auto__)){
return or__20229__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28841);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28841)))?cljs.core.second.call(null,arglists_28841):arglists_28841));
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
var seq__28802_28842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28803_28843 = null;
var count__28804_28844 = (0);
var i__28805_28845 = (0);
while(true){
if((i__28805_28845 < count__28804_28844)){
var vec__28806_28846 = cljs.core._nth.call(null,chunk__28803_28843,i__28805_28845);
var name_28847 = cljs.core.nth.call(null,vec__28806_28846,(0),null);
var map__28809_28848 = cljs.core.nth.call(null,vec__28806_28846,(1),null);
var map__28809_28849__$1 = ((((!((map__28809_28848 == null)))?((((map__28809_28848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28809_28848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809_28848):map__28809_28848);
var doc_28850 = cljs.core.get.call(null,map__28809_28849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28851 = cljs.core.get.call(null,map__28809_28849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28847);

cljs.core.println.call(null," ",arglists_28851);

if(cljs.core.truth_(doc_28850)){
cljs.core.println.call(null," ",doc_28850);
} else {
}

var G__28852 = seq__28802_28842;
var G__28853 = chunk__28803_28843;
var G__28854 = count__28804_28844;
var G__28855 = (i__28805_28845 + (1));
seq__28802_28842 = G__28852;
chunk__28803_28843 = G__28853;
count__28804_28844 = G__28854;
i__28805_28845 = G__28855;
continue;
} else {
var temp__4657__auto___28856 = cljs.core.seq.call(null,seq__28802_28842);
if(temp__4657__auto___28856){
var seq__28802_28857__$1 = temp__4657__auto___28856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28802_28857__$1)){
var c__21043__auto___28858 = cljs.core.chunk_first.call(null,seq__28802_28857__$1);
var G__28859 = cljs.core.chunk_rest.call(null,seq__28802_28857__$1);
var G__28860 = c__21043__auto___28858;
var G__28861 = cljs.core.count.call(null,c__21043__auto___28858);
var G__28862 = (0);
seq__28802_28842 = G__28859;
chunk__28803_28843 = G__28860;
count__28804_28844 = G__28861;
i__28805_28845 = G__28862;
continue;
} else {
var vec__28811_28863 = cljs.core.first.call(null,seq__28802_28857__$1);
var name_28864 = cljs.core.nth.call(null,vec__28811_28863,(0),null);
var map__28814_28865 = cljs.core.nth.call(null,vec__28811_28863,(1),null);
var map__28814_28866__$1 = ((((!((map__28814_28865 == null)))?((((map__28814_28865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28814_28865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28814_28865):map__28814_28865);
var doc_28867 = cljs.core.get.call(null,map__28814_28866__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28868 = cljs.core.get.call(null,map__28814_28866__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28864);

cljs.core.println.call(null," ",arglists_28868);

if(cljs.core.truth_(doc_28867)){
cljs.core.println.call(null," ",doc_28867);
} else {
}

var G__28869 = cljs.core.next.call(null,seq__28802_28857__$1);
var G__28870 = null;
var G__28871 = (0);
var G__28872 = (0);
seq__28802_28842 = G__28869;
chunk__28803_28843 = G__28870;
count__28804_28844 = G__28871;
i__28805_28845 = G__28872;
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

var seq__28816 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28817 = null;
var count__28818 = (0);
var i__28819 = (0);
while(true){
if((i__28819 < count__28818)){
var role = cljs.core._nth.call(null,chunk__28817,i__28819);
var temp__4657__auto___28873__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28873__$1)){
var spec_28874 = temp__4657__auto___28873__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28874));
} else {
}

var G__28875 = seq__28816;
var G__28876 = chunk__28817;
var G__28877 = count__28818;
var G__28878 = (i__28819 + (1));
seq__28816 = G__28875;
chunk__28817 = G__28876;
count__28818 = G__28877;
i__28819 = G__28878;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28816);
if(temp__4657__auto____$1){
var seq__28816__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28816__$1)){
var c__21043__auto__ = cljs.core.chunk_first.call(null,seq__28816__$1);
var G__28879 = cljs.core.chunk_rest.call(null,seq__28816__$1);
var G__28880 = c__21043__auto__;
var G__28881 = cljs.core.count.call(null,c__21043__auto__);
var G__28882 = (0);
seq__28816 = G__28879;
chunk__28817 = G__28880;
count__28818 = G__28881;
i__28819 = G__28882;
continue;
} else {
var role = cljs.core.first.call(null,seq__28816__$1);
var temp__4657__auto___28883__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28883__$2)){
var spec_28884 = temp__4657__auto___28883__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28884));
} else {
}

var G__28885 = cljs.core.next.call(null,seq__28816__$1);
var G__28886 = null;
var G__28887 = (0);
var G__28888 = (0);
seq__28816 = G__28885;
chunk__28817 = G__28886;
count__28818 = G__28887;
i__28819 = G__28888;
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

//# sourceMappingURL=repl.js.map?rel=1528667390398