;(function(d){var a=[];var e=["1120203","1120603","1120605","1120606","1120607","1120608"];d(function(){var f=document.getElementsByTagName("body")[0];f.addEventListener("mousedown",function(h){var h=h||window.event;var i=h.target||h.srcElement;var g=i.parentNode;var j=d(i).parents('li[id^="inside"]');if(i&&i.attributes["data-event"]){b(i.getAttribute("data-event"))}else{if(g&&g.attributes["data-event"]){b(g.getAttribute("data-event"))}else{if(j&&j.attr("data-event")){b(j.attr("data-event"))}}}},true)});function b(f){if(e.indexOf(f)>-1){a.push(window.scene.id+"#"+f);c()}}function c(){if(a.length>0){d.ajax({type:"GET",url:"http://da.eqxiu.com/at.gif",data:{interaction:a.join(",")},async:false,dataType:"jsonp",success:function(){}});a=[]}}})(jQuery);
(function(c){var j=0;var d=0;var e=1;var b="";var g="";var l="";var a="";var k=[];var f=[];var i=[];setInterval(function(){if(window.scene){d=document.getElementsByClassName("main-page").length;var m=document.querySelector(".z-current > .m-img");if(m&&m.attributes["id"]){e=parseInt(m.getAttribute("id").substr(4),10)}if(b==window.scene.id){if(j!=e){i[i.length-1].end_Time=new Date().getTime();f.push(i[i.length-1].end_Time-i[i.length-1].start_Time);k.push(e);j=e;i.push({start_Time:new Date().getTime(),end_Time:"",scene_page_num:e})}}else{b=window.scene.id;j=e;g=window.scene.code==undefined?"":window.scene.code;l=window.scene.userId==undefined?"":window.scene.userId;a=window.scene.userType==undefined?"":window.scene.userType;k.push(e);i.push({start_Time:new Date().getTime(),end_Time:"",scene_page_num:e})}}},100);c(window).bind("unload",function(){if(i.length>0){i[i.length-1].end_Time=new Date().getTime();f.push(i[i.length-1].end_Time-i[i.length-1].start_Time);var n=[];for(var m=0;m<k.length;m++){n.push(k[m]+"#"+f[m])}var o={start_Time:i[0].start_Time,end_Time:i[i.length-1].end_Time,creator_id:l,creator_type:a,event_id:b,event_code:g,pageTimeInfo:n.join(","),scene_total_page:d};h(o)}});function h(m){c.ajax({type:"GET",url:"http://da.eqxiu.com/dep.gif",data:m,crossDomain:true,async:false,dataType:"jsonp",success:function(){}});i=[];k=[];f=[]}})(jQuery);



