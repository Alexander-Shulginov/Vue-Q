<template><div><h3 id="что-такое-директивын" tabindex="-1"><a class="header-anchor" href="#что-такое-директивын"><span>Что такое директивын?</span></a></h3>
<p>Директивы это специальные атрибуты с префиксом <code v-pre>v-</code> позволяющие динамически управлять DOM деревом на основе реактивных зависимостей.<br>
Директивы подразделяются на встроенные и пользовательские.</p>
<h3 id="для-чего-нужны-пользовательские-директивы" tabindex="-1"><a class="header-anchor" href="#для-чего-нужны-пользовательские-директивы"><span>Для чего нужны пользовательские директивы?</span></a></h3>
<p>Кастомные, они же пользовательские, директивы позволяют создавать переиспользуемую логику управления DOM деревом.<br>
Используются только тогда, когда нет возможности достичь нужного функционала встроенными директивами.<br>
Мне нравится использовать кастомные директивы для расширения обработчиков событий, то есть если не существyет нужного события, например события, когда страница проскролена до конца, или событие появления скролла, то я использую кастомные директивы с синтаксисом <code v-pre>v-on-scrollbar-active=&quot;someFunction&quot;</code> или <code v-pre>v-on-scrollbar-on-bottom=&quot;someFunction&quot;</code></p>
<h3 id="перечислите-встроенные-директивы" tabindex="-1"><a class="header-anchor" href="#перечислите-встроенные-директивы"><span>Перечислите встроенные директивы?</span></a></h3>
<ul>
<li>
<p>Для управлением отображения элементов используются<br>
<code v-pre>v-if</code> - управляет наличием в DOM дереве компонента в зависимости от булева значения<br>
<code v-pre>v-show</code> - управляет отображением компонента</p>
</li>
<li>
<p>Для связывания данных с DOM элементами используюся<br>
<code v-pre>v-bind</code> - односторонняя привязка реактивных данных к DOM элементу<br>
<code v-pre>v-model</code> - двусторонняя привязка данных между моделью и представлением</p>
</li>
<li>
<p>Для итераций используется класcический цикл <code v-pre>for</code><br>
<code v-pre>v-for</code> - классический цикл</p>
</li>
<li>
<p>Для обработки событий<br>
<code v-pre>v-on</code> - добавляет событие</p>
</li>
<li>
<p>Для управления содержимым компонента/DOM элемента<br>
<code v-pre>v-slot</code> - содержит идентификатор для именованного слота<br>
<code v-pre>v-text</code> - аналог интерполяции, выводит данные в разметку<br>
<code v-pre>v-html</code> - позволяет вставлять html код, использовать не рекомендуется</p>
</li>
<li>
<p>Для оптимизации производительности<br>
<code v-pre>v-once</code> - позволяет отрисовать элемент или компонент только один раз, последующие обновления будут игнорировать элемент с такой директивой, используется для оптимизации производительности<br>
<code v-pre>v-memo</code> <Badge type="tip" text="v3.2+" vertical="middle" /> - позволяет мемоизировать массив переданных значений, используется как микрооптимизация<br>
<code v-pre>v-cloak</code> - Используется для скрытия еще нескомпилированного шаблона до тех пор, пока он не будет готов<br>
<code v-pre>v-pre</code> - позволяет пропустить DOM элемент на этапе компиляции</p>
</li>
</ul>
<h3 id="чем-различаются-v-if-и-v-show-и-когда-что-использовать" tabindex="-1"><a class="header-anchor" href="#чем-различаются-v-if-и-v-show-и-когда-что-использовать"><span>Чем различаются <code v-pre>v-if</code> и <code v-pre>v-show</code> и когда что использовать</span></a></h3>
<p><code v-pre>v-if</code> полностью удаляет компонент из DOM-дерева и добавляет его обратно, когда условие становится истинным. Это может быть затратным для производительности при частых изменениях, так как при каждом добавлении или удалении происходит перерисовка и обновление виртуального DOM.<br>
Однако <code v-pre>v-if</code> использует механизм ленивой отрисовки — элемент не будет добавлен в DOM, если условие ложное с самого начала.</p>
<p><code v-pre>v-show</code> всегда отрисовывает элемент в DOM дереве, но просто скрывает его с помощью <code v-pre>display: none;</code><br>
Используется при частом переключении видимости элемента.</p>
<h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind"><span>v-bind</span></a></h3>
<p>Односторонее связывание данных между атрибутами и свойствами компонента.<br>
Имеет сокращенную записать в виде двоеточия <code v-pre>:</code><br>
Приоритет между нативным атрибутом и атрибом с <code v-pre>v-bind</code> (начиная с v3.0) будет определяться порядком указания, применяться будет всегда последний указанный атрибут</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ id: 'blue' }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- результат --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ id: 'blue' }<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- результат --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model"><span>v-model</span></a></h3>
<p>Используется для двухстороннего связывания между моделью и представлением, проще говоря, между данными элементов форм и свойствами объекта.<br>
Используется только с: <code v-pre>&lt;input&gt;</code> <code v-pre>&lt;select&gt;</code> <code v-pre>&lt;textarea&gt;</code> <code v-pre>компоненты</code><br>
Имеет три модификатора:</p>
<ul>
<li><code v-pre>lazy</code> обновление данных произойдет после события <code v-pre>change</code> а не <code v-pre>input</code></li>
<li><code v-pre>number</code> приводит значения к числу</li>
<li><code v-pre>trim</code> удаляет пробелы</li>
</ul>
<p>Начиная с <Badge type="tip" text="v3.4" vertical="middle" /> рекомендуется использовать <code v-pre>defineModel()</code> который позволяет реализовать двухстороннее связывание между родительским и дочерним компонентами.</p>
<h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for"><span>v-for</span></a></h3>
<p>Класcический цикл, итерирует по массивам или объектам.</p>
<p>Требует указания уникального значения <code v-pre>key</code>, почему?<br>
По умолчанию vue взаимодействует с элементами массива по их индексу, и при удалении или добавлении элемента массива индексы сдвигаются что может приводить к ошибкам отображения.<br>
А так же при обновлении элемента массива, vue будет искать элемент не по индексу, а по уникальному id, что увеличивает производительность при работе с виртуальным-DOM деревом.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Нельзя использовать вместе с <code v-pre>v-if</code>, так как <code v-pre>v-if</code> имеет больший приоритет</p>
</div>
<h3 id="v-on" tabindex="-1"><a class="header-anchor" href="#v-on"><span>v-on</span></a></h3>
<p>Позволяет прослушивать события, и выполнять код по их наступлению, имеет сокращение в виде - <code v-pre>@</code><br>
Доступ к объекту события можно получить через <code v-pre>$event</code></p>
<p>А так же, директива поддерживает модификаторы:</p>
<ul>
<li><code v-pre>stop</code> - останавливает всплытие</li>
<li><code v-pre>prevent</code> - отменяет дефолтное поведение</li>
<li><code v-pre>self</code> - вызывает событие непосредственно на самом элементе</li>
<li><code v-pre>once</code> - событие сработает только 1 раз</li>
</ul>
<p>И модификаторы системных клавиш <code v-pre>@keyup.ctrl=&quot;some&quot;</code> и так далее</p>
<h3 id="v-text" tabindex="-1"><a class="header-anchor" href="#v-text"><span>v-text</span></a></h3>
<p>Обновляет текстовое содержимое DOM элемента, работает через свойство <code v-pre>.textContent</code> поэтому перезаписывает все содержимое элемента.</p>
<h3 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html"><span>v-html</span></a></h3>
<p>Добавляет html разметку через свойство <code v-pre>.innerHtml</code>, использовать не рекомендуется по соображениям безопасности</p>
<h3 id="v-pre" tabindex="-1"><a class="header-anchor" href="#v-pre"><span>v-pre</span></a></h3>
<p>Пропускает компиляцию для элемента и всех его потомков.</p>
<h3 id="v-once" tabindex="-1"><a class="header-anchor" href="#v-once"><span>v-once</span></a></h3>
<p>Полезная директива для оптимизации производительности, которая предотвращает повторный рендер компонента или DOM-элемента при обновлении самого компонента или родительского компонента.<br>
Часто используется на статическом контенте, который не связан с данными, который не имеет состояния, который не должен перерисовываться, ни сам по себе, ни при перерисовки родительского компонента.</p>
<h3 id="v-memo" tabindex="-1"><a class="header-anchor" href="#v-memo"><span>v-memo</span></a></h3>
<p><code v-pre>Мемоизация</code> - техника кеширования результатов выполнения функции при вызове ее с одинаковыми входными параметрами.<br>
Если функция вызывается с одними и теме же параметрами, вместо вычеслений, происходит возврат закешированнго значения.</p>
<p>Директива позволяет сохранить результат вычеслений между рендерингами, если значения не изменились элемент не будет перерисован.</p>
</div></template>


