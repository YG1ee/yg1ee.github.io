(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{9470:function(e,t,r){Promise.resolve().then(r.bind(r,4948))},4948:function(e,t,r){"use strict";let s;r.r(t),r.d(t,{default:function(){return _}});var i=r(4317),n=r(9538),u=r(6774),a=r(1789),h=r(9105),c=r(6065),o=r(2404),l=class extends h.l{constructor(e,t){super(),this.options=t,this.#e=e,this.#t=null,this.#r=(0,c.O)(),this.options.experimental_prefetchInRender||this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(t)}#e;#s=void 0;#i=void 0;#n=void 0;#u;#a;#r;#t;#h;#c;#o;#l;#d;#p;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#s.addObserver(this),d(this.#s,this.options)?this.#y():this.updateResult(),this.#R())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return p(this.#s,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return p(this.#s,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#v(),this.#b(),this.#s.removeObserver(this)}setOptions(e,t){let r=this.options,s=this.#s;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,o.Nc)(this.options.enabled,this.#s))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#Q(),this.#s.setOptions(this.options),r._defaulted&&!(0,o.VS)(this.options,r)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#s,observer:this});let i=this.hasListeners();i&&f(this.#s,s,this.options,r)&&this.#y(),this.updateResult(t),i&&(this.#s!==s||(0,o.Nc)(this.options.enabled,this.#s)!==(0,o.Nc)(r.enabled,this.#s)||(0,o.KC)(this.options.staleTime,this.#s)!==(0,o.KC)(r.staleTime,this.#s))&&this.#m();let n=this.#g();i&&(this.#s!==s||(0,o.Nc)(this.options.enabled,this.#s)!==(0,o.Nc)(r.enabled,this.#s)||n!==this.#p)&&this.#O(n)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),r=this.createResult(t,e);return(0,o.VS)(this.getCurrentResult(),r)||(this.#n=r,this.#a=this.options,this.#u=this.#s.state),r}getCurrentResult(){return this.#n}trackResult(e,t){let r={};return Object.keys(e).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),t?.(s),e[s])})}),r}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#s}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),r=this.#e.getQueryCache().build(this.#e,t);return r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#y({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#n))}#y(e){this.#Q();let t=this.#s.fetch(this.options,e);return e?.throwOnError||(t=t.catch(o.ZT)),t}#m(){this.#v();let e=(0,o.KC)(this.options.staleTime,this.#s);if(o.sk||this.#n.isStale||!(0,o.PN)(e))return;let t=(0,o.Kp)(this.#n.dataUpdatedAt,e);this.#l=setTimeout(()=>{this.#n.isStale||this.updateResult()},t+1)}#g(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#s):this.options.refetchInterval)??!1}#O(e){this.#b(),this.#p=e,!o.sk&&!1!==(0,o.Nc)(this.options.enabled,this.#s)&&(0,o.PN)(this.#p)&&0!==this.#p&&(this.#d=setInterval(()=>{(this.options.refetchIntervalInBackground||n.j.isFocused())&&this.#y()},this.#p))}#R(){this.#m(),this.#O(this.#g())}#v(){this.#l&&(clearTimeout(this.#l),this.#l=void 0)}#b(){this.#d&&(clearInterval(this.#d),this.#d=void 0)}createResult(e,t){let r;let s=this.#s,i=this.options,n=this.#n,u=this.#u,h=this.#a,l=e!==s?e.state:this.#i,{state:p}=e,R={...p},v=!1;if(t._optimisticResults){let r=this.hasListeners(),n=!r&&d(e,t),u=r&&f(e,s,t,i);(n||u)&&(R={...R,...(0,a.z)(p.data,e.options)}),"isRestoring"===t._optimisticResults&&(R.fetchStatus="idle")}let{error:b,errorUpdatedAt:Q,status:m}=R;if(t.select&&void 0!==R.data){if(n&&R.data===u?.data&&t.select===this.#h)r=this.#c;else try{this.#h=t.select,r=t.select(R.data),r=(0,o.oE)(n?.data,r,t),this.#c=r,this.#t=null}catch(e){this.#t=e}}else r=R.data;if(void 0!==t.placeholderData&&void 0===r&&"pending"===m){let e;if(n?.isPlaceholderData&&t.placeholderData===h?.placeholderData)e=n.data;else if(e="function"==typeof t.placeholderData?t.placeholderData(this.#o?.state.data,this.#o):t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.#t=null}catch(e){this.#t=e}void 0!==e&&(m="success",r=(0,o.oE)(n?.data,e,t),v=!0)}this.#t&&(b=this.#t,r=this.#c,Q=Date.now(),m="error");let g="fetching"===R.fetchStatus,O="pending"===m,I="error"===m,C=O&&g,S=void 0!==r,E={status:m,fetchStatus:R.fetchStatus,isPending:O,isSuccess:"success"===m,isError:I,isInitialLoading:C,isLoading:C,data:r,dataUpdatedAt:R.dataUpdatedAt,error:b,errorUpdatedAt:Q,failureCount:R.fetchFailureCount,failureReason:R.fetchFailureReason,errorUpdateCount:R.errorUpdateCount,isFetched:R.dataUpdateCount>0||R.errorUpdateCount>0,isFetchedAfterMount:R.dataUpdateCount>l.dataUpdateCount||R.errorUpdateCount>l.errorUpdateCount,isFetching:g,isRefetching:g&&!O,isLoadingError:I&&!S,isPaused:"paused"===R.fetchStatus,isPlaceholderData:v,isRefetchError:I&&S,isStale:y(e,t),refetch:this.refetch,promise:this.#r};if(this.options.experimental_prefetchInRender){let t=e=>{"error"===E.status?e.reject(E.error):void 0!==E.data&&e.resolve(E.data)},r=()=>{t(this.#r=E.promise=(0,c.O)())},i=this.#r;switch(i.status){case"pending":e.queryHash===s.queryHash&&t(i);break;case"fulfilled":("error"===E.status||E.data!==i.value)&&r();break;case"rejected":("error"!==E.status||E.error!==i.reason)&&r()}}return E}updateResult(e){let t=this.#n,r=this.createResult(this.#s,this.options);if(this.#u=this.#s.state,this.#a=this.options,void 0!==this.#u.data&&(this.#o=this.#s),(0,o.VS)(r,t))return;this.#n=r;let s={};e?.listeners!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.#f.size)return!0;let s=new Set(r??this.#f);return this.options.throwOnError&&s.add("error"),Object.keys(this.#n).some(e=>this.#n[e]!==t[e]&&s.has(e))})()&&(s.listeners=!0),this.#I({...s,...e})}#Q(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#s)return;let t=this.#s;this.#s=e,this.#i=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#R()}#I(e){u.V.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#n)}),this.#e.getQueryCache().notify({query:this.#s,type:"observerResultsUpdated"})})}};function d(e,t){return!1!==(0,o.Nc)(t.enabled,e)&&void 0===e.state.data&&!("error"===e.state.status&&!1===t.retryOnMount)||void 0!==e.state.data&&p(e,t,t.refetchOnMount)}function p(e,t,r){if(!1!==(0,o.Nc)(t.enabled,e)){let s="function"==typeof r?r(e):r;return"always"===s||!1!==s&&y(e,t)}return!1}function f(e,t,r,s){return(e!==t||!1===(0,o.Nc)(s.enabled,e))&&(!r.suspense||"error"!==e.state.status)&&y(e,r)}function y(e,t){return!1!==(0,o.Nc)(t.enabled,e)&&e.isStaleByTime((0,o.KC)(t.staleTime,e))}var R=r(562),v=r(196),b=R.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),Q=()=>R.useContext(b);function m(){}var g=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&!t.isReset()&&(e.retryOnMount=!1)},O=e=>{R.useEffect(()=>{e.clearReset()},[e])},I=e=>{var t;let{result:r,errorResetBoundary:s,throwOnError:i,query:n}=e;return r.isError&&!s.isReset()&&!r.isFetching&&n&&(t=[r.error,n],"function"==typeof i?i(...t):!!i)},C=R.createContext(!1),S=()=>R.useContext(C);C.Provider;var E=e=>{e.suspense&&(void 0===e.staleTime&&(e.staleTime=1e3),"number"==typeof e.gcTime&&(e.gcTime=Math.max(e.gcTime,1e3)))},T=(e,t)=>e.isLoading&&e.isFetching&&!t,k=(e,t)=>e?.suspense&&t.isPending,x=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});let w=()=>fetch("https://yg1ee.duckdns.org/").then(e=>e.json());function _(){let{data:e}=function(e,t,r){var s,i,n,a,h;let c=(0,v.NL)(r),l=S(),d=Q(),p=c.defaultQueryOptions(e);null===(i=c.getDefaultOptions().queries)||void 0===i||null===(s=i._experimental_beforeQuery)||void 0===s||s.call(i,p),p._optimisticResults=l?"isRestoring":"optimistic",E(p),g(p,d),O(d);let f=!c.getQueryCache().get(p.queryHash),[y]=R.useState(()=>new t(c,p)),b=y.getOptimisticResult(p);if(R.useSyncExternalStore(R.useCallback(e=>{let t=l?m:y.subscribe(u.V.batchCalls(e));return y.updateResult(),t},[y,l]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),R.useEffect(()=>{y.setOptions(p,{listeners:!1})},[p,y]),k(p,b))throw x(p,y,d);if(I({result:b,errorResetBoundary:d,throwOnError:p.throwOnError,query:c.getQueryCache().get(p.queryHash)}))throw b.error;if(null===(a=c.getDefaultOptions().queries)||void 0===a||null===(n=a._experimental_afterQuery)||void 0===n||n.call(a,p,b),p.experimental_prefetchInRender&&!o.sk&&T(b,l)){let e=f?x(p,y,d):null===(h=c.getQueryCache().get(p.queryHash))||void 0===h?void 0:h.promise;null==e||e.catch(m).finally(()=>{y.updateResult()})}return p.notifyOnChangeProps?b:y.trackResult(b)}({queryKey:["Lorem"],queryFn:()=>w()},l,void 0);return console.log(e),(0,i.jsx)("div",{className:"m-2.5",children:"my app"})}}},function(e){e.O(0,[570,323,74,744],function(){return e(e.s=9470)}),_N_E=e.O()}]);