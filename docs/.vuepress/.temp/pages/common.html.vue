<template><div><h3 id="что-такое-двухстороннее-связывание" tabindex="-1"><a class="header-anchor" href="#что-такое-двухстороннее-связывание"><span>Что такое двухстороннее связывание?</span></a></h3>
<h3 id="что-такое-интерполяция" tabindex="-1"><a class="header-anchor" href="#что-такое-интерполяция"><span>Что такое интерполяция?</span></a></h3>
<p>Интерполяция позволяет связать данные и их представление, проще говоря, выводить данные в разметку.</p>
<p>Пример синтаксиса:</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><Tabs id="13" :data='[{"id":"Tab1"},{"id":"Tab2"}]'>
<template #title0="{ value, isActive }">Tab1</template>
<template #title1="{ value, isActive }">Tab2</template>
<template #tab0="{ value, isActive }">
<p>This is the content of Tab1.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<p>This is the content of Tab2.</p>
<ul>
<li>List item 1</li>
<li>List item 2</li>
<li>List item 3</li>
</ul>
</template>
</Tabs>
<details class="hint-container details"><summary>Details</summary>
<p>Директив позволяет связать данные и атрибуты.</p>
</details>
</div></template>


