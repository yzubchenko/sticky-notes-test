(this["webpackJsonpsticky-notes-test"]=this["webpackJsonpsticky-notes-test"]||[]).push([[0],{16:function(e,t,o){e.exports={ColorRadio_root:"styles_ColorRadio_root__ctxBV",radio:"styles_radio__3XpTn",checkMark:"styles_checkMark__wUh3h",radioBody:"styles_radioBody__1-__b",textContainer:"styles_textContainer__2CM9o"}},24:function(e,t,o){e.exports={ColorRadio_root:"styles_ColorRadio_root__1heIV",radio:"styles_radio__3qFSj",checkMark:"styles_checkMark__1EthW",radioBody:"styles_radioBody__1o0PV"}},36:function(e,t,o){e.exports={NoteBoard_root:"styles_NoteBoard_root__2QAoe",trashZone:"styles_trashZone___PyaV",trashZoneActive:"styles_trashZoneActive__28bS_"}},37:function(e,t,o){e.exports={Note_root:"styles_Note_root__31-aQ",textContainer:"styles_textContainer__Hp-qi",editableText:"styles_editableText__25wGF"}},43:function(e,t,o){e.exports={Menu_root:"styles_Menu_root__23Ebv",createButton:"styles_createButton__S3Wi6"}},48:function(e,t,o){e.exports={Stretcher_root:"styles_Stretcher_root__g-tEM"}},49:function(e,t,o){e.exports=o(61)},60:function(e,t,o){},61:function(e,t,o){"use strict";o.r(t);var n,a,r=o(0),c=o.n(r),i=o(26),s=o.n(i),u=o(8),l=o(43),d=o.n(l),f=o(64),m=o(46),h=o(14),b=o(6),p=o(17),N=o(3),v=Object(b.c)({name:"note",initialState:{order:[],notes:{}},reducers:{fetchNoteSuccess:function(e,t){var o=t.payload,n=o.notes,a=o.order;e.order=a,e.notes=n},createNoteSuccess:function(e,t){var o=t.payload,n=o.note,a=o.order;e.order=a,e.notes[n.id]=n},bringToFrontNote:function(e,t){var o=t.payload;e.order=e.order.sort((function(e,t){return e===o?1:t===o?-1:0}))},startMoveNote:function(e,t){var o=t.payload.id;e.notes[o].isMoving=!0},startResizeNote:function(e,t){var o=t.payload;e.notes[o].isResizing=!0},releaseNote:function(e,t){var o=t.payload;e.notes[o].isMoving=!1,e.notes[o].isResizing=!1},updateNote:function(e,t){var o=t.payload;e.notes[o.id]=o},removeNote:function(e,t){var o=t.payload;delete e.notes[o],e.order=e.order.filter((function(e){return e!==o}))},updateNoteText:function(e,t){var o=t.payload,n=o.id,a=o.text,r=e.notes[n];r&&(r.text=a)},startEditNote:function(e,t){var o=t.payload;e.editingNoteId=o},stopEditNote:function(e){e.editingNoteId=void 0}}}),g=v.actions,O=v.reducer,j=g.fetchNoteSuccess,E=g.createNoteSuccess,_=g.startMoveNote,y=g.startResizeNote,S=g.startEditNote,M=g.releaseNote,C=g.stopEditNote,k=g.bringToFrontNote,x=g.updateNote,R=g.removeNote,B=g.updateNoteText,z=O;!function(e){e.SMALL="SMALL",e.MEDIUM="MEDIUM",e.LARGE="LARGE"}(n||(n={})),function(e){e.YELLOW="#efee9d",e.GREEN="#d1eaa3",e.LAVENDER="#dbc6eb",e.BLUE="#abc2e8"}(a||(a={}));var I=Object(b.c)({name:"menu",initialState:{noteSize:n.SMALL,noteColor:a.YELLOW},reducers:{selectNoteSize:function(e,t){var o=t.payload;e.noteSize=o},selectNoteColor:function(e,t){var o=t.payload;e.noteColor=o}}}),w=I.actions,T=I.reducer,L=w.selectNoteSize,A=w.selectNoteColor,J=T,Z=Object(b.b)("createNote"),D=[function(e,t){return e.pipe(Object(f.a)(Z.match),Object(m.a)((function(){var e;switch(t.value.menu.noteSize){case n.SMALL:e={width:150,height:150};break;case n.MEDIUM:e={width:250,height:250};break;case n.LARGE:e={width:400,height:400}}var o,a=function(e){return e.menu.noteColor}(t.value);return o={text:"Double click to edit...",size:e,position:{x:300,y:300},color:a},new Promise((function(e){setTimeout((function(){var t=(new Date).getTime(),n=JSON.parse(localStorage.getItem("notes")||"{}");localStorage.setItem("notes",JSON.stringify(Object(N.a)(Object(N.a)({},n),{},Object(p.a)({},t,Object(N.a)({id:t},o)))));var a=JSON.parse(localStorage.getItem("order")||"[]");a.push(t),localStorage.setItem("order",JSON.stringify(a)),e({status:"success",result:{note:Object(N.a)({id:t},o),order:a}})}))}))})),Object(h.a)((function(e){var t=e.result;return E(t)})))}],F=o(24),P=o.n(F),U=function(e){var t=e.color,o=e.defaultChecked,n=e.onChange;return c.a.createElement("div",{className:P.a.ColorRadio_root},c.a.createElement("input",{type:"radio",id:"radio_".concat(t),className:P.a.radio,name:"color",defaultChecked:o,value:t,onChange:n}),c.a.createElement("label",{className:P.a.label,htmlFor:"radio_".concat(t)},c.a.createElement("span",{className:P.a.radioBody,style:{backgroundColor:t}},c.a.createElement("span",{className:P.a.checkMark}))))},G=o(16),V=o.n(G),Y=function(e){var t=e.name,o=e.value,n=e.defaultChecked,a=e.onChange,r=e.children;return c.a.createElement("div",{className:V.a.ColorRadio_root},c.a.createElement("input",{type:"radio",id:"radio_".concat(o),className:V.a.radio,name:t,defaultChecked:n,value:o,onChange:a}),c.a.createElement("label",{className:V.a.label,htmlFor:"radio_".concat(o)},c.a.createElement("span",{className:V.a.radioBody},c.a.createElement("span",{className:V.a.checkMark})),c.a.createElement("span",{className:V.a.textContainer},r)))},W={createNote:Z,selectNoteSize:L,selectNoteColor:A},X=Object(u.b)(null,W)((function(e){var t=function(t){return e.selectNoteSize(n[t.target.value])},o=function(t){return e.selectNoteColor(t.target.value)};return c.a.createElement("div",{className:d.a.Menu_root},c.a.createElement("h3",null,"Select Note Size:"),c.a.createElement("div",null,c.a.createElement(Y,{name:"size",value:n.SMALL,onChange:t,defaultChecked:!0},"Small"),c.a.createElement(Y,{name:"size",value:n.MEDIUM,onChange:t},"Medium"),c.a.createElement(Y,{name:"size",value:n.LARGE,onChange:t},"Large")),c.a.createElement("h3",null,"Select Note Color:"),c.a.createElement("div",null,c.a.createElement(U,{color:a.YELLOW,onChange:o,defaultChecked:!0}),c.a.createElement(U,{color:a.GREEN,onChange:o}),c.a.createElement(U,{color:a.LAVENDER,onChange:o}),c.a.createElement(U,{color:a.BLUE,onChange:o})),c.a.createElement("button",{className:d.a.createButton,onClick:function(){return e.createNote()}},"Create Sticker Note"))})),q=o(36),Q=o.n(q),H=function(e,t,o){var n=K(e),a=ee(e),r=a.right-a.left,c=t.x,i=t.y,s=t.width,u=t.height,l=o?r:0;return{x:Math.min(Math.max(c,0),n.width-s-l),y:Math.min(Math.max(i,0),n.height-u)}},K=function(e){return e.noteBoard.size},$=function(e){return e.noteBoard.isTrashZoneActive},ee=function(e){return e.noteBoard.trashZoneBoundingRect},te=function(e,t){var o=ee(e),n=o.top,a=o.bottom,r=o.left,c=o.right;return t.y+t.height>n&&t.x+t.width>r&&t.y<a&&t.x<c},oe=function(e,t){return e.notes.notes[t]},ne=function(e){return e.notes.editingNoteId},ae=function(e,t){var o=oe(e,t);return Object(N.a)(Object(N.a)({},o),{},{position:H(e,Object(N.a)(Object(N.a)({},o.position),o.size),!o.isMoving)})},re=o(65),ce=o(47),ie=o(34),se=o(66),ue=o(67),le=o(68),de=o(71),fe={id:(new Date).getTime(),text:"Double click to edit...",color:"#efee9d",size:{width:300,height:300},position:{x:340,y:50}},me=function(){return new Promise((function(e){setTimeout((function(){var t,o;JSON.parse(localStorage.getItem("initialized")||"false")?(t=JSON.parse(localStorage.getItem("order")||"[]"),o=JSON.parse(localStorage.getItem("notes")||"{}")):(o=Object(p.a)({},fe.id,Object(N.a)({},fe)),t=[fe.id],localStorage.setItem("notes",JSON.stringify(o)),localStorage.setItem("order",JSON.stringify(t)),localStorage.setItem("initialized",JSON.stringify(!0))),e({status:"success",result:{notes:o,order:t}})}))}))},he=function(e){return new Promise((function(t){setTimeout((function(){var o=JSON.parse(localStorage.getItem("notes")||"{}"),n=e.id;if(o[n]){o[n]=e,localStorage.setItem("notes",JSON.stringify(o));var a=JSON.parse(localStorage.getItem("order")||"[]");a=a.sort((function(e,t){return e===n?1:t===n?-1:0})),localStorage.setItem("order",JSON.stringify(a)),t({status:"success"})}}))}))},be=Object(b.c)({name:"noteBoard",initialState:{size:{width:0,height:0},trashZoneBoundingRect:{top:0,bottom:0,left:0,right:0},isTrashZoneActive:!1},reducers:{applyNoteBoardBoundingRect:function(e,t){var o=t.payload,n=o.top,a=o.bottom,r=o.left,c=o.right;e.size={width:c-r,height:a-n}},setTrashZoneBoundingRect:function(e,t){var o=t.payload;e.trashZoneBoundingRect=o},setTrashZoneStatus:function(e,t){var o=t.payload;e.isTrashZoneActive=o}}}),pe=be.actions,Ne=be.reducer,ve=pe.applyNoteBoardBoundingRect,ge=pe.setTrashZoneBoundingRect,Oe=pe.setTrashZoneStatus,je=Ne,Ee=Object(re.a)(document,"mousemove"),_e=Object(re.a)(document,"mouseup"),ye=Object(b.b)("fetchNotes"),Se=Object(b.b)("checkStopEditingNote"),Me=Object(b.b)("checkNeedRemoveNote"),Ce=[function(e){return e.pipe(Object(f.a)(ye.match),Object(se.a)(me),Object(h.a)((function(e){var t=e.result;return j(t)})))},function(e,t){return e.pipe(Object(f.a)(_.match),Object(ue.a)("payload"),Object(h.a)((function(e){var o=e.id,n=e.pickPosition;return{targetNote:ae(t.value,o),pickPosition:n}})),Object(se.a)((function(e){var o=e.targetNote,n=e.pickPosition;return Ee.pipe(Object(m.a)((function(e){e.preventDefault();var a=o.position,r=Object(N.a)(Object(N.a)({},o),{},{position:H(t.value,Object(N.a)({x:a.x+(e.clientX-n.x),y:a.y+(e.clientY-n.y)},o.size))});return Object(ce.a)(x(r),Oe(te(t.value,Object(N.a)(Object(N.a)({},r.size),r.position))))})),Object(le.a)(_e.pipe(Object(h.a)((function(){return oe(t.value,o.id)})),Object(de.a)((function(e){return e&&he(e)})))))})))},function(e,t){return e.pipe(Object(f.a)(y.match),Object(ue.a)("payload"),Object(h.a)((function(e){return oe(t.value,e)})),Object(se.a)((function(e){return Ee.pipe(Object(h.a)((function(o){o.preventDefault();var n=e.position,a=o.clientX-n.x,r=o.clientY-n.y,c=K(t.value),i={width:Math.min(Math.max(100,a),c.width),height:Math.min(Math.max(100,r),c.height)},s=H(t.value,Object(N.a)(Object(N.a)({},i),e.position),!0),u=Object(N.a)(Object(N.a)({},e),{},{size:i,position:s});return x(u)})),Object(le.a)(_e.pipe(Object(h.a)((function(){return oe(t.value,e.id)})),Object(de.a)((function(e){return e&&he(e)})))))})))},function(e,t){return e.pipe(Object(f.a)(Se.match),Object(h.a)((function(){return ne(t.value)})),Object(f.a)((function(e){return void 0!==e})),Object(h.a)((function(e){return oe(t.value,e)})),Object(de.a)(he),Object(h.a)((function(){return C()})))},function(e,t){return e.pipe(Object(f.a)(Me.match),Object(ue.a)("payload"),Object(h.a)((function(e){return oe(t.value,e)})),Object(m.a)((function(e){return e.isMoving?te(t.value,Object(N.a)(Object(N.a)({},e.position),e.size))?(o=e.id,new Promise((function(e){setTimeout((function(){var t=JSON.parse(localStorage.getItem("notes")||"{}");if(t[o]){delete t[o],localStorage.setItem("notes",JSON.stringify(t));var n=JSON.parse(localStorage.getItem("order")||"[]");n=n.filter((function(e){return e!==o})),localStorage.setItem("order",JSON.stringify(n)),e({status:"success"})}}))})),Object(ce.a)(R(e.id),Oe(!1))):Object(ce.a)(M(e.id),Oe(!1)):Object(ce.a)(Oe(!1));var o})))},function(e,t){return e.pipe(Object(f.a)(ve.match),Object(ue.a)("payload"),Object(m.a)((function(){return Object(ie.a)(t.value.notes.order)})),Object(h.a)((function(e){return ae(t.value,e)})),Object(h.a)(x))}],ke=o(37),xe=o.n(ke),Re=o(48),Be=o.n(Re),ze={startResizeNote:y,bringToFrontNote:k,releaseNote:M},Ie=Object(u.b)((function(e,t){return{noteId:t.noteId}}),ze)((function(e){var t=e.noteId;return c.a.createElement("div",{className:Be.a.Stretcher_root,onMouseDown:function(o){o.stopPropagation(),e.bringToFrontNote(t),e.startResizeNote(t)},onMouseUp:function(){return e.releaseNote(t)},onMouseOut:function(){return e.releaseNote(t)},onBlur:function(){return e.releaseNote(t)}})})),we={startMoveNote:_,startEditNote:S,updateNoteText:B,bringToFrontNote:k,checkNeedRemoveNote:Me},Te=Object(u.b)((function(e,t){var o=t.noteId;return{isActive:o===ne(e),note:oe(e,o)}}),we)((function(e){var t=e.note,o=e.isActive,n=t.id,a=t.text,i=t.position,s=t.size,u=t.color,l={left:i.x,top:i.y,width:s.width,height:s.height,backgroundColor:u},d=Object(r.useRef)(),f=function(){e.checkNeedRemoveNote(n)};return Object(r.useEffect)((function(){if(o){var e=d.current;e.focus(),e.selectionStart=e.value.length,e.selectionEnd=e.value.length}})),c.a.createElement("div",{className:xe.a.Note_root,style:l},o?c.a.createElement("textarea",{ref:d,className:xe.a.editableText,value:a,onClick:function(e){return e.stopPropagation()},onChange:function(t){return e.updateNoteText({id:n,text:t.target.value})}}):c.a.createElement("div",{className:xe.a.textContainer,onDoubleClick:function(){return e.startEditNote(n)},onMouseDown:function(t){e.bringToFrontNote(n),e.startMoveNote({id:n,pickPosition:{x:t.clientX,y:t.clientY}})},onMouseUp:f,onMouseOut:f,onBlur:f},a,c.a.createElement(Ie,{noteId:n})))})),Le=function(e){var t=e.captureRef,o=function(){var o=t.current.getBoundingClientRect(),n=o.top,a=o.bottom,r=o.left,c=o.right;e.onResize({top:n,bottom:a,left:r,right:c})};return Object(r.useLayoutEffect)((function(){return o(),window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),c.a.createElement(c.a.Fragment,null,e.children)},Ae={checkStopEditingNote:Se,applyNoteBoardBoundingRect:ve,setTrashZoneBoundingRect:ge},Je=Object(u.b)((function(e){return{notes:(t=e,t.notes.order.map((function(e){return oe(t,e)}))),isTrashZoneActive:$(e)};var t}),Ae)((function(e){var t=Object(r.useRef)(),o=Object(r.useRef)(),n=e.isTrashZoneActive?Q.a.trashZoneActive:"";return c.a.createElement(Le,{captureRef:t,onResize:e.applyNoteBoardBoundingRect},c.a.createElement("div",{ref:t,className:Q.a.NoteBoard_root,onClick:function(){return e.checkStopEditingNote()}},c.a.createElement(Le,{captureRef:o,onResize:e.setTrashZoneBoundingRect},c.a.createElement("div",{ref:o,className:"".concat(Q.a.trashZone," ").concat(n)},"Drop here to remove")),e.notes.map((function(e){return c.a.createElement(Te,{key:e.id,noteId:e.id})}))))})),Ze={fetchNotes:ye},De=Object(u.b)(null,Ze)((function(e){return Object(r.useEffect)((function(){e.fetchNotes()})),c.a.createElement(c.a.Fragment,null,c.a.createElement(X,null),c.a.createElement(Je,null))})),Fe=o(38),Pe=o(69),Ue=o(70),Ge=Object(Pe.a)(),Ve=Object(b.a)({reducer:{notes:z,noteBoard:je,menu:J},middleware:[Ge].concat(Object(Fe.a)(Object(b.d)({thunk:!1})))});Ge.run(Ue.a.apply(void 0,Object(Fe.a)(Ce).concat(Object(Fe.a)(D))));o(60);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:Ve},c.a.createElement(De,null))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.c10cd722.chunk.js.map