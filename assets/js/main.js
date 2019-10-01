(function() {
   // your page initialization code here
   // the DOM will be available here
   var items = document.getElementsByTagName('code');
   
   for (var i in items){

       var _html = items[i];
       var replaced = _html.innerHTML
       if(typeof replaced !== 'undefined'){
         replaced = replaced.replace(/class=/g, 'xy--yx');
         replaced = replaced.replace(/>/g, '<span class=xx--nt--xx>&gt;</span>');
         replaced = replaced.replace(/"([^"]+)"/g, '<span class="s">\"$1\"</span>');
         replaced = replaced.replace(/xx--nt--xx/g, '"nt"');
         replaced = replaced.replace(/<div/g, '<span class="nt">&lt;div</span>');
         replaced = replaced.replace(/<\/div/g, '<span class="nt">&lt;/div</span>');
         replaced = replaced.replace(/xy--yx/g, '<span class="na">class=</span>');
         _html.innerHTML = replaced;
       }
   }
})();
