"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[579],{579:(l,a,i)=>{i.r(a),i.d(a,{Geolocation:()=>u,GeolocationWeb:()=>s});var t=i(5861),c=i(2726);class s extends c.Uw{getCurrentPosition(n){return(0,t.Z)(function*(){return new Promise((o,r)=>{navigator.geolocation.getCurrentPosition(e=>{o(e)},e=>{r(e)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},n))})})()}watchPosition(n,o){return(0,t.Z)(function*(){return`${navigator.geolocation.watchPosition(e=>{o(e)},e=>{o(null,e)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},n))}`})()}clearWatch(n){return(0,t.Z)(function*(){window.navigator.geolocation.clearWatch(parseInt(n.id,10))})()}checkPermissions(){var n=this;return(0,t.Z)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw n.unavailable("Permissions API not available in this browser");const o=yield window.navigator.permissions.query({name:"geolocation"});return{location:o.state,coarseLocation:o.state}})()}requestPermissions(){var n=this;return(0,t.Z)(function*(){throw n.unimplemented("Not implemented on web.")})()}}const u=new s}}]);