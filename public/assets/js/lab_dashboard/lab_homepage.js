var counter=0,load_lab_mainpage_data=function(e){$.ajax({url:"ajax/lab_homepage.php",method:"POST",data:{view:void 0===e?"":e},dataType:"json",success:function(a){$(".pending_samples").html(a.pending_samples_count);if(0==a.pending_samples_count){var c="Sample Status";var d="Pending Samples"}else{c='Sample Status <span class="badge m-l-5 pending_samples_count">'+a.pending_samples_count+"</span>";d='Pending Samples <span class="badge badge-primary m-l-5">'+a.pending_samples_count+"</span>";var b=$(".pending_samples_count").html();
("undefined"==b||null==b||""==b||b<a.pending_samples_count)&&1<=counter&&$.gritter.add({title:"New sample order submission",text:"Open the pending samples page to view sample detail"})}$(".pending_samples_indicator").html(c);$(".pending_samples_sub_indicator").html(d);$(".delayed_samples").html(a.delayed_samples_count);$(".todays_customers").html(a.todays_customers_count);$("#last_seven_days_samples").html(a.last_seven_days_samples_stats);$(".online_users_count").html(a.online_users_count);$(".online_users").html(a.online_users);
c='<i class="fa fa-bell-o"></i>';d="Messages";0!=a.unseen_messages_count&&(c+='<span class="label unseen_messages_count">'+a.unseen_messages_count+"</span>",d='Messages <span class="badge m-l-5">'+a.unseen_messages_count+"</span>",b=$(".unseen_messages_count").html(),"undefined"==b||null==b||""==b||b<a.unseen_messages_count)&&(1<a.unseen_messages_count?$.gritter.add({title:"You have "+a.unseen_messages_count+" new messages",text:"Click the notification icon to see new messages or go to inbox for detail"}):
$.gritter.add({title:"You have a new message",text:"Click the notification icon to see new message or go to inbox for detail"}));$(".messages_indicator_icon").html(c);$(".messages_indicator").html(d);$(".recent_messages_list").html(a.recent_messages_list);counter+=1},error:function(a,c,d){console.log(c+" "+d)}})},load_data_interval=function(){setInterval(function(){load_lab_mainpage_data()},5E4)},update_message_notification_status=function(){$(".messages_indicator_icon").on("click",function(){load_lab_mainpage_data("yes")})},
PageAjax=function(){return{init:function(){load_lab_mainpage_data();load_data_interval();update_message_notification_status()}}}();