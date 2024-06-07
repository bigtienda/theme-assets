document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container').insertAdjacentHTML('afterbegin', '<div id=top-bar class="h-[70px] w-screen p-3 bg-[#008069] flex justify-between absolute top-0"> <div id=left-area class="flex items-center gap-1"> <div id=back-button class="w-7 h-7 cursor-pointer"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 72 72"><path fill=#fff fill-opacity=.996 d="m24.46 33.03 31.2-.03q2.8-.01 4.18 2.42.37.64.11 1.25-.99 2.34-3.43 2.34-17.48-.03-31.81 0-1.12 0-.33.79l13.26 13.27q1.84 1.84.82 4.23-.34.8-1.13 1.05-2.29.7-3.97-.99L14.63 38.64q-2.61-2.62 0-5.24l18.8-18.84q1.69-1.69 3.95-.88 1.49.54 1.43 3.09a2.44 2.43 67.9 0 1-.7 1.66L24.2 32.42a.36.36 0 0 0 .26.61Z"/></svg> </div> <div id=profile-image class=cursor-pointer> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&s" class="rounded-full w-9 h-9"> </div> <div id=text-profile class="ml-2 text-white flex leading-none flex-col gap-1"> <div id=name class="font-semibold text-lg leading-none cursor-pointer"> Big Tienda </div> <div id=status class="text-sm font-normal leading-none"> Online </div> </div> </div> <div id=right-area class="flex items-center gap-4"> <div id=camera class="w-6 h-6 cursor-pointer"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 36 36"><path fill=#fff d="m27.02 21.27-.04 5.74a3.01 3-89.8 0 1-3 2.99H6.02a3 2.99 0 0 1-3-2.99L3.01 9.48q0-3.42 3.42-3.46 8.94-.08 17.25.02 3.25.04 3.29 3.34.03 2.85.08 5.76a.26.25-23.7 0 0 .44.17l4.27-4.32a.72.72 0 0 1 1.23.51L33 23.68q0 2.59-1.82.74l-3.41-3.46q-.74-.75-.75.31Z"/></svg> </div> <div id=cellphone class="w-6 h-6 cursor-pointer"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 72 72"><path d="M40 51.8c3-3 5.7-7.2 10.5-6.8 2.7.2 5.2.6 7.5.9 3 .5 4.6 2.3 4.9 5.4.5 4.9.5 12.4-7 11.6-25.4-2.6-43.9-21-46.8-46.5-.5-4 1.8-7.2 6-7.4 4.7-.2 10-.6 11.1 5.4.6 3.3.8 6.3.8 8.9 0 2.9-4.9 6.9-6.9 8.8-.1.1-.2.3 0 .5 4.3 8.2 10.6 14.6 19 19.2.4.2.7.1 1-.2Z" style=fill:#fff;stroke-width:0 /></svg> </div> <div id=more class="w-6 h-6 cursor-pointer"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 72 72"><circle cx=36 cy=53.9 r=6 fill=#fff /><circle cx=36 cy=35.9 r=6 fill=#fff /><circle cx=36 cy=17.9 r=6 fill=#fff /></svg> </div> </div> </div>');
const runColorMode = (fn) => {
  if (!window.matchMedia) return;
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  fn(query.matches);
  query.addEventListener('change', (event) => fn(event.matches));
}

runColorMode((isDarkMode) => {
  if (isDarkMode) {
    document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container').classList.add('dark');
  } else {
    document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container').classList.remove('dark');
  }
})
