<template><div><h3 id="что-такое-двухстороннее-связывание" tabindex="-1"><a class="header-anchor" href="#что-такое-двухстороннее-связывание"><span>Что такое двухстороннее связывание?</span></a></h3>
<h3 id="что-такое-интерполяция" tabindex="-1"><a class="header-anchor" href="#что-такое-интерполяция"><span>Что такое интерполяция?</span></a></h3>
<p>Интерполяция позволяет связать данные и их представление, проще говоря, выводить данные в разметку.</p>
<p>Пример синтаксиса:</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="что-такое-директивы" tabindex="-1"><a class="header-anchor" href="#что-такое-директивы"><span>Что такое директивы?</span></a></h3>
<p>Директивы это специальные атрибуты с префиксом <code v-pre>-v</code> позволяющие динамически управлять DOM деревом на основе реактивных зависимостей.</p>
<h3 id="перечислите-встроенные-директивы" tabindex="-1"><a class="header-anchor" href="#перечислите-встроенные-директивы"><span>Перечислите встроенные директивы?</span></a></h3>
<p><code v-pre>v-if</code> - управляет наличием в DOM дереве компонента в зависимости от булева значения<br>
<code v-pre>v-show</code> - управляет отображением компонента<br>
<code v-pre>v-for</code> - классический цикл<br>
<code v-pre>v-bind</code> - односторонняя привязка реактивных данных к DOM элементу<br>
<code v-pre>v-model</code> - двусторонняя привязка данных между моделью и представлением<br>
<code v-pre>v-on</code> - добавляет событие<br>
<code v-pre>v-slot</code> - содержит идентификатор для именованного слота<br>
<code v-pre>v-once</code> - позволяет отрисовать элемент или компонент только один раз, последующие обновления будут игнорировать элемент с такой директивой, используется для оптимизации производительности<br>
<code v-pre>v-memo</code> - позволяет мемоизировать массив переданных значений, используется как микрооптимизация<br>
<code v-pre>v-cloak</code> - Используется для скрытия еще нескомпилированного шаблона до тех пор, пока он не будет готов<br>
<code v-pre>v-pre</code> - позволяет пропустить DOM элемент на этапе компиляции<br>
<code v-pre>v-text</code> - аналог интерполяции, выводит данные в разметку<br>
<code v-pre>v-hrml</code> - позволяет вставлять html код, использовать не рекоммендуется</p>
<h3 id="для-чего-используется-директива-v-bind" tabindex="-1"><a class="header-anchor" href="#для-чего-используется-директива-v-bind"><span>Для чего используется директива v-bind?</span></a></h3>
<p>Директива позволяет связать данные и атрибуты.</p>
</div></template>


