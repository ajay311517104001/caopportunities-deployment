(function(e){if(e.BX.clipboard)return;var t=e.BX;t.clipboard={isCopySupported:function(){return!!(!!e.getSelection&&!!document.execCommand&&document.queryCommandSupported&&document.queryCommandSupported("copy"))},copy:function(t){if(!t){return false}if(!this.isCopySupported()){return false}this._removeSelection();if(!this.node){this.node=document.createElement("a");this.node.style.background="Highlight";this.node.style.display="none";document.body.appendChild(this.node)}this.node.innerText=t;var n=document.createRange();this.node.style.display="";n.selectNode(this.node);e.getSelection().addRange(n);var o=false;try{o=document.execCommand("copy")}catch(e){}this.node.style.display="none";this._removeSelection(n);return o},bindCopyClick:function(e,n){n=n||{};showButtonIfNotSupported=n.showButtonIfNotSupported||false;text=n.text||null;popupParams=n.popup||{};if(t.type.isString(e)){e=t(e)}if(!t.type.isElementNode(e)){return}if(!this.isCopySupported()){if(!showButtonIfNotSupported){e.style.display="none"}return}var o=t.util.getRandomString(5);t.bind(e,"click",function(e,t,n,o,i){return function(r){e._onCopyClick(t,n,o,i);r.preventDefault();return true}}(this,o,e,text,popupParams))},_removeSelection:function(t){t=t||null;var n=e.getSelection();if(t&&n.removeRange){n.removeRange(t)}else{n.removeAllRanges()}},_getText:function(e){if(!e){return null}if(t.type.isFunction(e)){return e.apply(this,[])}else if(t.type.isString(e)){return e}else if(t.type.isElementNode(e)){if((e.tagName=="INPUT"||e.tagName=="TEXTAREA")&&e.value){return e.value}else if(e.innerText){return e.innerText}}return null},_onCopyClick:function(e,n,o,i){this.timeoutIds=this.timeoutIds||[];o=this._getText(o);if(!o){o=this._getText(n)}var r=false;if(o){r=this.copy(o)}var u=i.hideTimeout||1500;i=t.mergeEx(i,{content:r?t.message("CORE_CLIPBOARD_COPY_SUCCESS"):t.message("CORE_CLIPBOARD_COPY_FAILURE"),darkMode:true,autoHide:true,zIndex:1e3,angle:true,offsetLeft:5,bindOptions:{position:"top"}});var s=t.PopupWindowManager.create("clipboard_copy_status_"+e,n,i);s.show();var p;while(p=this.timeoutIds.pop())clearTimeout(p);p=setTimeout(function(){s.close()},u);this.timeoutIds.push(p)}}})(window);
//# sourceMappingURL=core_clipboard.map.js