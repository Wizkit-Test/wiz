$(document).ready(function(){

/*************** Checkbox script ***************/
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "checkbox") {
var id = inputs[a].getAttribute("id");
if (id==null){
id=  "checkbox" +a;
}
inputs[a].setAttribute("id",id);
inputs[a].style.visibility = 'hidden';
var container = document.createElement('div');
container.setAttribute("class", "ttr_checkbox");
var label = document.createElement('label');
label.setAttribute("for", id);
$(inputs[a]).wrap(container).after(label);
}
}

/*************** Radiobutton script ***************/
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "radio") {
var id = inputs[a].getAttribute("id");
if (id==null){
 id=  "radio" +a;
}
inputs[a].setAttribute("id",id);
inputs[a].style.visibility = 'hidden';
var container = document.createElement('div');
container.setAttribute("class", "ttr_radio");
var label = document.createElement('label');
label.setAttribute("for", id);
$(inputs[a]).wrap(container).after(label);
}
}

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = $(document.body).height();
var content = $("div[id$='content_margin']");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = content.height() + differ;
$("div[id*='content_margin']").css({"min-height":content_height+"px"});
}

/* Slideshow Function Call */

if(jQuery('#ttr_slideshow_inner').length){
jQuery('#ttr_slideshow_inner').TTSlider({
stopTransition:false ,
slideShowSpeed:2000, begintime:1000,cssPrefix: 'ttr_'
});
}
/* Animation Function Call */
jQuery().TTAnimation({cssPrefix: 'ttr_'});

/*************** Hamburgermenu slideleft script ***************/
$('button#nav-expander').on('click',function(e){
e.preventDefault();
$('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
$('ul.ttr_menu_items.nav li [data-bs-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
} else {
if(window_width > 1199 && $(this).attr('href')){
window.location.href = $(this).attr('href'); 
}
else{
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
}
}
});
$('.ttr_menu_items_parent_link_arrow, .ttr_menu_items_parent_link_active_arrow').on('click', function(e) {
e.preventDefault();
$('.show.child').toggleClass('show');
$(this).parent().toggleClass('show');
});

/*************** Sidebarmenu click script ***************/
$('ul.ttr_vmenu_items.nav li [data-bs-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 1199 && $(this).attr('href')){
window.location.href = $(this).attr('href'); 
}
else{
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
}
});
jQuery('.ttr_vmenu_items_parent_link_arrow, .ttr_vmenu_items_parent_link_active_arrow').on('click', function(e) {
e.preventDefault();
jQuery('.show.child').toggleClass('show');
jQuery(this).parent().toggleClass('show');
});

/*************** Tab menu click script ***************/
$('.ttr_menu_items ul.dropdown-menu [data-bs-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 992){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('show');
$(this).parent().toggleClass(function() {
if ($(this).is(".show") ) {
window.location.href = $(this).children("[data-bs-toggle=dropdown]").attr('href'); 
return "";
} else {
return "show";
}
});
}
});

/*************** Tab-Sidebarmenu script ***************/
$('.ttr_vmenu_items ul.dropdown-menu [data-bs-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1200){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('show');
$(this).parent().toggleClass(function() {
if ($(this).is(".show") ) {
window.location.href = $(this).children("[data-bs-toggle=dropdown]").attr('href'); 
return "";
} else {
return "show";
}
});
}
});

/*************** Google-Webfont script ***************/
WebFontConfig = {
google: { families: [ 'Open+Sans','Barlow:900','Lato','Shadows+Into+Light:300','Nunito:700','IBM+Plex+Serif:600','IBM+Plex+Serif','IBM+Plex+Serif:700','Amaranth:700','Open+Sans:700','Open+Sans:600'] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();
/*************** Html video script ***************/
var objects = ['iframe[src*="youtube.com"]','iframe[src*="youtu.be"]','iframe[src*="youtube-nocookie.com"]', 'object'];
for(var i = 0 ; i < objects.length ; i++){
if ($(objects[i]).length > 0 ) {
$(objects[i]).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
$(objects[i]).addClass('embed-responsive-item');
}
}
});
