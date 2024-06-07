document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container').insertAdjacentHTML('afterbegin', '<div id=top-bar class="absolute top-0 flex h-[70px] w-screen justify-between border-b bg-[#008069] px-2 py-3 dark:border-[#8696a00a] dark:bg-[#202c33] dark:shadow-[0_1px_3px_rgba(11,20,26,0.4)]"> <div id=left-area class="flex items-center"> <div id=back-button class="h-7 w-7 cursor-pointer"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 72 72"><path class=dark:fill-[#e9edef] fill=#fff fill-opacity=.996 d="m24.46 33.03 31.2-.03q2.8-.01 4.18 2.42.37.64.11 1.25-.99 2.34-3.43 2.34-17.48-.03-31.81 0-1.12 0-.33.79l13.26 13.27q1.84 1.84.82 4.23-.34.8-1.13 1.05-2.29.7-3.97-.99L14.63 38.64q-2.61-2.62 0-5.24l18.8-18.84q1.69-1.69 3.95-.88 1.49.54 1.43 3.09a2.44 2.43 67.9 0 1-.7 1.66L24.2 32.42a.36.36 0 0 0 .26.61Z"/></svg> </div> <div id=profile-image class=cursor-pointer> <img src="//s3.bigtienda.es/typebot/public/workspaces/clwzfb2we000111igutqnqz5n/typebots/clx41tylr0001h93iwj296r6k/hostAvatar" class="h-9 w-9 rounded-full"> </div> <div id=text-profile class="ml-3 flex flex-col gap-2 leading-none text-white dark:text-[#e9edef]"> <div id=name class="cursor-pointer text-lg font-semibold leading-none">Big Tienda</div> <div id=status class="text-sm font-normal leading-none">online</div> </div> </div> <div id=right-area class="flex items-center gap-6"> <div id=camera class="h-6 w-6 cursor-pointer hidden xs:block"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 36 36"><path class=dark:fill-[#e9edef] fill=#fff d="m27.02 21.27-.04 5.74a3.01 3-89.8 0 1-3 2.99H6.02a3 2.99 0 0 1-3-2.99L3.01 9.48q0-3.42 3.42-3.46 8.94-.08 17.25.02 3.25.04 3.29 3.34.03 2.85.08 5.76a.26.25-23.7 0 0 .44.17l4.27-4.32a.72.72 0 0 1 1.23.51L33 23.68q0 2.59-1.82.74l-3.41-3.46q-.74-.75-.75.31Z"/></svg> </div> <div id=cellphone class="h-6 w-6 cursor-pointer hidden xs:block"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 72 72"><path d="M40 51.8c3-3 5.7-7.2 10.5-6.8 2.7.2 5.2.6 7.5.9 3 .5 4.6 2.3 4.9 5.4.5 4.9.5 12.4-7 11.6-25.4-2.6-43.9-21-46.8-46.5-.5-4 1.8-7.2 6-7.4 4.7-.2 10-.6 11.1 5.4.6 3.3.8 6.3.8 8.9 0 2.9-4.9 6.9-6.9 8.8-.1.1-.2.3 0 .5 4.3 8.2 10.6 14.6 19 19.2.4.2.7.1 1-.2Z" class=dark:fill-[#e9edef] fill=#fff style=stroke-width:0 /></svg> </div> <div id=more class="h-6 w-6 cursor-pointer"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 72 72"> <circle cx=36 cy=53.9 r=6 class=dark:fill-[#e9edef] fill=#fff /> <circle cx=36 cy=35.9 r=6 class=dark:fill-[#e9edef] fill=#fff /> <circle cx=36 cy=17.9 r=6 class=dark:fill-[#e9edef] fill=#fff /> </svg> </div> </div> </div>');

document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container .typebot-chat-view').insertAdjacentHTML('afterbegin', '<div class="chat-start-info w-full flex flex-col items-center px-5 py-5 gap-4"> <div class="bg-[#f8f7f7] dark:bg-[#1c272d] py-1 px-3 rounded-md w-min text-[#54656f] dark:text-[#8696a0] shadow-[0_1px_0.5px_rgba(11,20,26,0.08)]">Hoy</div> <div class="py-1.5 px-3 rounded-md bg-[#cbf2ee] dark:bg-[#1c272d] p-4 text-center leading-tight shadow-[0_1px_0.5px_rgba(11,20,26,0.08)]"><span class="inline-flex w-3.5 h-3.5 align-top mt-1"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 11 11"><path d="M5 0a5 5 0 1 1 0 10A5 5 0 0 1 5 0Zm-.027 4.118a.649.649 0 0 0-.649.648v2.757a.649.649 0 0 0 1.298 0V4.766a.649.649 0 0 0-.649-.648ZM5 1.892c-.227 0-.406.069-.538.206a.73.73 0 0 0-.197.527c0 .216.067.393.202.53A.712.712 0 0 0 5 3.363c.22 0 .399-.068.533-.206a.728.728 0 0 0 .202-.531.726.726 0 0 0-.2-.527c-.133-.137-.311-.206-.535-.206Z" class=dark:fill-[#5faca7] fill=#54656f /></svg></span> <span class="text-[#54656f] dark:text-[#5faca7] align-top text-sm">Esta empresa usa un servicio seguro de Meta para administrar este chat. Toca para obtener más información.</span></div> </div>');

const runColorMode = (fn) => {
  if (!window.matchMedia) return;
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  fn(query.matches);
  query.addEventListener('change', (event) => fn(event.matches));
}

const updateStatus = () => {
  let messagesLength = 0;
  let replysLength = 0;

  const typebotContainer = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
  const status = typebotContainer.querySelector('#top-bar #status');

  const alertNotify = document.createElement('audio');
  alertNotify.src = 'https://s3.fr-par.scw.cloud/typebot/public/typebots/rx0zcrlqkhifqajxuzr6txa9/blocks/ttfglhs9oks32ebn2ymqcrp1';

  setInterval(() => {
    const isTyping = typebotContainer.querySelector('.bubble1');
    const sibling = isTyping?.parentElement?.parentElement?.nextSibling; 

    if(isTyping && sibling.src) {
      status.innerText = 'grabando audio...';
    } else if(isTyping) {      
      status.innerText = 'escribiendo...';
    } else {
      status.innerText = 'online';
    }

    const allMessages = typebotContainer.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble'); 
    if(allMessages.length > messagesLength) {
      for (let i = messagesLength; i < allMessages.length; i++) {
        let now = new Date();
        const messageTime = (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        const messageBox = allMessages[i];
        messageBox.querySelector('div > div[data-element-type="p"] > span').insertAdjacentHTML('beforeend','<span><span class="invisible inline-flex w-10 bg-white p-2" aria-hidden="true"></span><span class="absolute -bottom-0.5 right-0 inline-flex items-center gap-1"><div class="text-xs text-[#667781] dark:text-[#99beb7]">'+ messageTime +'</div></span></span>');
      }

      messagesLength = allMessages.length; 
    }

    const allReplys = typebotContainer.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');  
    if(allReplys.length > replysLength) {
      for (let i = replysLength; i < allReplys.length; i++) {
        let now = new Date();
        const replyTime = (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        const replyBox = allReplys[i];
        replyBox.insertAdjacentHTML('beforeend','<span><span class="invisible inline-flex w-14 bg-white p-2" aria-hidden=true></span><span class="absolute bottom-1.5 right-2 inline-flex items-center gap-1"><span class="text-xs text-[#667781] dark:text-[#99beb7]">'+ replyTime +'</span><span class="h-2 w-4"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 11"><path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z" class=dark:fill-[#53bcea] fill=#009de2 /></svg></span></span></span>');
      }

      replysLength = allReplys.length; 
    }
  }, 400);
};

runColorMode((isDarkMode) => {
  if (isDarkMode) {
    document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container').classList.add('dark');
  } else {
    document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container').classList.remove('dark');
  }
});

updateStatus();

